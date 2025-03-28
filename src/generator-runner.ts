import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SchemaDataGenerator } from './generator';
import { log } from './utils';

(async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const outputDir = path.join(__dirname, '../output');

    const componentsDir = path.join(__dirname, 'components');
    const componentFiles = fs.readdirSync(componentsDir).filter(file =>
        ['.js', '.ts'].includes(path.extname(file).toLowerCase()),
    );

    const schemaList = [];
    for (const file of componentFiles) {
        const filePath = path.join(componentsDir, file);
        const module = await import(pathToFileURL(filePath).href);
        schemaList.push(module.default || Object.values(module)[0]);
    }

    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 生成训练数据
    const generator = new SchemaDataGenerator(schemaList);
    const trainingData = generator.generateTrainingData({
        includeDescription: true,
        includeScenarios: true,
        includeParentInfo: true,
    });

    console.log('train: ', trainingData.filter(item => !item.type || item.type === 'schema').length);
    console.log('valid: ', trainingData.filter(item => item.type === 'doc').length);
    console.log('test: ', 0);

    const outputPath = path.join(outputDir, 'fes-design.json');
    // 生成JSON格式
    const jsonlContent = JSON.stringify(trainingData, null, 2);
    fs.writeFileSync(outputPath, jsonlContent, 'utf-8');

    // // 将训练数据写入文件
    // let outputPath = path.join(outputDir, 'fes-design.jsonl');
    // // 生成JSONL格式
    // let jsonlContent = trainingData
    //     .map(item => JSON.stringify(item))
    //     .join('\n');
    // fs.writeFileSync(outputPath, jsonlContent, 'utf-8');

    log('info', `训练数据已生成到: ${outputPath}`);
    log('info', `共生成 ${trainingData.length} 条训练数据`);
})();
