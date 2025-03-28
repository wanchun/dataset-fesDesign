import type { TrainingExample } from './generator';
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

    const outputPath = path.join(outputDir, 'fes-design.json');
    // 生成JSON格式
    const jsonlContent = JSON.stringify(trainingData, null, 2);
    fs.writeFileSync(outputPath, jsonlContent, 'utf-8');

    let schemaData = trainingData.filter(item => !item.type || item.type === 'schema');
    let docData = trainingData.filter(item => item.type === 'doc');

    // 调整数据比例为 schemaData:docData = 8:2
    const totalCount = trainingData.length;
    const targetSchemaCount = Math.round(totalCount * 0.8);

    if (schemaData.length < targetSchemaCount) {
        // 如果schemaData不足80%，从docData中移动数据
        const needMove = targetSchemaCount - schemaData.length;
        const moveData = docData.splice(0, needMove);
        schemaData = [...schemaData, ...moveData];
    }
    else if (schemaData.length > targetSchemaCount) {
        // 如果schemaData超过80%，移动数据到docData
        const needMove = schemaData.length - targetSchemaCount;
        const moveData = schemaData.splice(0, needMove);
        docData = [...docData, ...moveData];
    }

    // 将docData平分为test和valid
    const halfDocLength = Math.floor(docData.length / 2);
    const testData = docData.slice(0, halfDocLength);
    const validData = docData.slice(halfDocLength);

    log('info', 'Data distribution:');
    log('info', `train: ${schemaData.length} (${(schemaData.length / totalCount * 100).toFixed(1)}%)`);
    log('info', `test: ${testData.length} (${(testData.length / totalCount * 100).toFixed(1)}%)`);
    log('info', `valid: ${validData.length} (${(validData.length / totalCount * 100).toFixed(1)}%)`);

    // 生成JSONL格式并写入文件
    const writeJsonlFile = (data: TrainingExample[], filename: string) => {
        const outputPath = path.join(outputDir, filename);
        const jsonlContent = data.map(item => JSON.stringify(item)).join('\n');
        fs.writeFileSync(outputPath, jsonlContent, 'utf-8');
    };

    writeJsonlFile(schemaData, 'fes-design_train.jsonl');
    writeJsonlFile(testData, 'fes-design_test.jsonl');
    writeJsonlFile(validData, 'fes-design_valid.jsonl');

    log('info', `共生成 ${trainingData.length} 条训练数据`);
})();
