import { SchemaTransformer } from './transform';

const runner = new SchemaTransformer();

runner.transformDirectory('./tmp');
