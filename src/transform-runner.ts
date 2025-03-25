import { SchemaTransformer } from './transform';

const runner = new SchemaTransformer();

runner.transformDirectory('./tmp');

console.log(`✨ 转换数据已生成到 tmp`);
