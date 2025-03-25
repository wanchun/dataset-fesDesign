import { isNil } from 'lodash-es';

export function toArray<T>(value: T | T[]): NonNullable<T>[] {
    if (isNil(value))
        return [];
    const arr = Array.isArray(value) ? value : [value];
    return arr.filter(item => !isNil(item)) as NonNullable<T>[];
}
