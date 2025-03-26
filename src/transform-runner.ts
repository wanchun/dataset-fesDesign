import * as fs from 'node:fs';
import * as path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { camelCase } from 'lodash-es';
import { parseArgs } from './cli';

import { AITransformer } from './transform';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeFilePath = path.join(__dirname, '../src/type.ts');

// 从环境变量中读取 API 配置
const transformer = new AITransformer({
    apiKey: process.env.API_KEY || '',
    baseURL: process.env.API_BASE_URL || '',
    model: process.env.API_MODEL || '',
    typeFilePath,
});

// 解析命令行参数
const { mode } = parseArgs();

async function processComponents() {
    console.log('\🚀 开始批量处理组件...');
    const originDir = path.join(__dirname, '../origin/schema');
    const outputDir = path.join(__dirname, '../tmp/schema');

    if (!fs.existsSync(outputDir)) {
        console.log(`\📁 创建输出目录: ${outputDir}`);
        fs.mkdirSync(outputDir);
    }

    const allFiles = fs.readdirSync(originDir);
    let files = allFiles.filter((file) => {
        const filePath = path.join(originDir, file);
        return fs.statSync(filePath).isFile();
    });

    // 在 incomplete 模式下，过滤出未处理的文件
    if (mode === 'incomplete') {
        files = files.filter(() => {
            const outputPath = path.join(outputDir);
            return !fs.existsSync(outputPath);
        });
        console.log(`\📊 扫描完成：找到 ${allFiles.length} 个项目，其中 ${JSON.stringify(files)} 组件文件未处理`);
    }
    else {
        console.log(`\📊 扫描完成：找到 ${allFiles.length} 个项目，其中 ${files.length} 个组件文件待处理`);
    }

    // 添加并发控制
    const concurrencyLimit = 3; // 并发数限制

    // 使用排序后的文件列表创建处理批次
    const chunks = [];
    for (let i = 0; i < files.length; i += concurrencyLimit) {
        chunks.push(files.slice(i, i + concurrencyLimit));
    }

    for (const chunk of chunks) {
        console.log(`\⏳ 开始处理新的批次，包含 ${chunk.length} 个组件文件`);
        await Promise.all(
            chunk.map(async (file) => {
                console.log(`\n\📄 正在处理组件文件: ${file}`);
                const filePath = path.join(originDir, file);
                const content = fs.readFileSync(filePath, 'utf-8');
                const componentName = path.basename(file, '.ts');
                const camelCaseName = camelCase(componentName);

                try {
                    const metadata = await transformer.transform(content, componentName);
                    if (!metadata) {
                        console.error(`\❌ 组件 ${componentName} 转换失败`);
                        return;
                    }

                    const outputPath = path.join(outputDir, `${componentName}.ts`);
                    console.log(`\💾 正在保存转换结果到: ${outputPath}`);

                    fs.writeFileSync(
                        outputPath,
                        `import type { IComponentMetadata } from '../type';

export const ${camelCaseName}Meta: IComponentMetadata = ${JSON.stringify(metadata, null, 2)};
`,
                    );
                    console.log(`\✨ 组件 ${componentName} 处理完成`);
                }
                catch (error) {
                    // 简化错误输出，只显示最终的错误信息
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    console.error(`\💥 组件 ${componentName} 处理失败: ${errorMessage}`);
                }
            }),
        );
    }
    console.log('\n🎉 所有组件处理完成');
}

processComponents().catch(console.error);
