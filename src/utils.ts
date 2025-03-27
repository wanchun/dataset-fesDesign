import { isNil } from 'lodash-es';

export function toArray<T>(value: T | T[]): NonNullable<T>[] {
    if (isNil(value))
        return [];
    const arr = Array.isArray(value) ? value : [value];
    return arr.filter(item => !isNil(item)) as NonNullable<T>[];
}

export function log(level: 'info' | 'warn' | 'error' | 'success', message: string, ...args: any[]) {
    const prefix = `[${new Date().toISOString()}] `;
    const emoji = {
        info: 'ℹ️ ',
        warn: '⚠️ ',
        error: '❌ ',
        success: '✅ ',
    }[level];

    const formattedMessage = `${prefix}${emoji} ${message}`;

    if (level === 'error') {
        console.error(formattedMessage, ...args);
    }
    else if (level === 'warn') {
        console.warn(formattedMessage, ...args);
    }
    else {
        console.log(formattedMessage, ...args);
    }
}
