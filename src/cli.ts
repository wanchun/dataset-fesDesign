import process from 'node:process';
import minimist from 'minimist';

export interface TransformOptions {
    mode: 'all' | 'incomplete'
}

export function parseArgs(): TransformOptions {
    const args = minimist(process.argv.slice(2));
    const mode = args.mode || 'all';

    if ((mode !== 'all' && mode !== 'incomplete')) {
        console.error('\❌ 无效的处理模式，请使用 --mode all 或 --mode incomplete');
        process.exit(1);
    }

    return { mode };
}
