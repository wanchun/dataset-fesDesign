import * as fs from 'node:fs';
import * as path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import glob from 'fast-glob'; // 添加 fast-glob 库
import { camelCase, lowerCase } from 'lodash-es';
import { parseArgs } from './cli';
import { AITransformer } from './transform';
import { log } from './utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typeFilePath = path.join(__dirname, '../src/type.ts');

// 解析命令行参数
const { mode } = parseArgs();

// 从环境变量中读取 API 配置
const transformer = new AITransformer({
    apiKey: process.env.API_KEY || '',
    baseURL: process.env.API_BASE_URL || '',
    model: process.env.API_MODEL || '',
    typeContent: fs.readFileSync(typeFilePath, 'utf-8'),
});

async function processComponents() {
    const startTime = Date.now();
    log('info', '开始批量处理组件...');
    const originDir = path.join(__dirname, '../origin/schema');
    const docsDir = path.join(__dirname, '../origin/docs');
    const outputDir = path.join(__dirname, '../tmp/schema');

    if (!fs.existsSync(outputDir)) {
        log('info', `创建输出目录: ${outputDir}`);
        fs.mkdirSync(outputDir);
    }

    // 使用 glob 查找所有 .ts 文件，排除 index.ts
    const files = await glob('**/*.ts', {
        cwd: originDir,
        ignore: ['**/index.ts'],
        onlyFiles: true,
    });

    const docsFiles = await glob('**/*.md', {
        cwd: docsDir,
        onlyFiles: true,
    });

    log('info', `扫描完成：找到 ${files.length} 个组件文件待处理，找到 ${docsFiles.length} 个组件文档`);

    // 在 incomplete 模式下，过滤出未处理的文件
    let filesToProcess = files;
    if (mode === 'incomplete') {
        filesToProcess = files.filter((file) => {
            const outputPath = path.join(outputDir, file.split('/').pop()!);
            return !fs.existsSync(outputPath);
        });
        log('info', `其中 ${filesToProcess.length} 个组件文件未处理`);
    }

    // 添加并发控制
    const concurrencyLimit = 3; // 并发数限制

    // 使用排序后的文件列表创建处理批次
    const chunks = [];
    for (let i = 0; i < filesToProcess.length; i += concurrencyLimit) {
        chunks.push(filesToProcess.slice(i, i + concurrencyLimit));
    }

    for (const chunk of chunks) {
        log('info', `开始处理批次 ${chunks.indexOf(chunk) + 1}/${chunks.length}，包含 ${chunk.length} 个组件文件`);
        await Promise.all(
            chunk.map(async (file) => {
                log('info', `正在处理组件文件: ${file}`);
                const filePath = path.join(originDir, file);
                const content = fs.readFileSync(filePath, 'utf-8');
                const componentName = path.basename(file, '.ts');
                const camelCaseName = camelCase(componentName);

                try {
                    const index = docsFiles.findIndex(docsFile => lowerCase(docsFile).startsWith(lowerCase(componentName)));
                    let docContent = '';
                    if (index !== -1) {
                        const docsFilePath = path.join(docsDir, docsFiles[index]);
                        docContent = fs.readFileSync(docsFilePath, 'utf-8');
                    }

                    const metadata = await transformer.transform({ componentName, componentContent: content, docContent });

                    const outputPath = path.join(outputDir, `${componentName}.ts`);
                    log('info', `正在保存转换结果到: ${outputPath}`);

                    fs.writeFileSync(
                        outputPath,
                        `import type { IComponentMetadata } from '../type';

export const ${camelCaseName}Meta: IComponentMetadata = ${JSON.stringify(metadata, null, 2)};
`,
                    );
                    log('success', `组件 ${componentName} 处理完成`);
                }
                catch (error) {
                    // 简化错误输出，只显示最终的错误信息
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    log('error', `组件 ${componentName} 处理失败: ${errorMessage}\n文件路径: ${filePath}`);
                }
            }),
        );
    }
    log('success', `所有组件处理完成，共处理 ${filesToProcess.length} 个文件，耗时 ${((Date.now() - startTime) / 1000).toFixed(2)} 秒`);
}

processComponents().catch(console.error);
