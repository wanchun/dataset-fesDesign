import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as schemaList from './components';
import { SchemaDataGenerator } from './generator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, '../output');

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 生成训练数据
const generator = new SchemaDataGenerator(Object.values(schemaList));
const trainingData = generator.generateTrainingData({
    includeDescription: true,
    includeScenarios: true,
    includeParentInfo: true,
});

// 将训练数据写入文件
let outputPath = path.join(outputDir, 'fes-design.jsonl');
// 生成JSONL格式
let jsonlContent = trainingData
    .map(item => JSON.stringify(item))
    .join('\n');
fs.writeFileSync(outputPath, jsonlContent, 'utf-8');

outputPath = path.join(outputDir, 'fes-design.json');
// 生成JSON格式
jsonlContent = JSON.stringify(trainingData, null, 2);
fs.writeFileSync(outputPath, jsonlContent, 'utf-8');

console.log(`✨ 训练数据已生成到: ${outputPath}`);
console.log(`📊 共生成 ${trainingData.length} 条训练数据`);
