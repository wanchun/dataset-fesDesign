import type { IPublicTypeComponentMetadata } from '../types/letgo-type';
import type { IComponentMetadata } from './type';
import fs from 'node:fs';
import path from 'node:path';
import { isRegExp, isString } from 'lodash-es';
import * as originComponents from './origin/component-meta';
import { toArray } from './utils';

export class SchemaTransformer {
    // private transformProp(prop: any): any {
    //     return {
    //         name: prop.name,
    //         title: prop.title || prop.name,
    //         propType: this.transformPropType(prop.propType),
    //         description: prop.description,
    //         defaultValue: prop.defaultValue,
    //         required: prop.required,
    //     };
    // }

    // private transformPropType(propType: any): any {
    //     if (typeof propType === 'string') {
    //         return propType;
    //     }

    //     switch (propType.type) {
    //         case 'array':
    //             return {
    //                 type: 'array',
    //                 items: this.transformPropType(propType.items),
    //             };
    //         case 'function':
    //             return {
    //                 type: 'function',
    //                 signature: propType.signature,
    //             };
    //         case 'oneOf':
    //             if (!propType.options || !Array.isArray(propType.options)) {
    //                 return propType;
    //             }
    //             return {
    //                 type: 'oneOf',
    //                 items: propType.options.map((opt: any) => ({
    //                     name: opt.value,
    //                     title: opt.label,
    //                     usage: opt.description,
    //                 })),
    //             };
    //         case 'shape':
    //             if (!propType.properties || !Array.isArray(propType.properties)) {
    //                 return propType;
    //             }
    //             return {
    //                 type: 'shape',
    //                 value: propType.properties.map((p: any) => this.transformProp(p)),
    //                 required: propType.required,
    //             };
    //         default:
    //             return propType;
    //     }
    // }

    // private transformEvent(event: any): any {
    //     return {
    //         name: event.name,
    //         description: event.description,
    //         parameters: event.params,
    //     };
    // }

    private transformParent(source: IPublicTypeComponentMetadata): IComponentMetadata['parent'] {
        return {
            types: [],
            restrictions: toArray(source.configure?.component?.nestingRule?.parentWhitelist)
                .filter((item) => {
                    return isRegExp(item) || isString(item);
                })
                .map((item) => {
                    return {
                        parent: item,
                        description: '',
                    };
                }),
        };
    }

    private transformChildren(source: IPublicTypeComponentMetadata): IComponentMetadata['children'] {
        return toArray(source.configure?.component?.nestingRule?.childWhitelist)
            .filter((item) => {
                return isRegExp(item) || isString(item);
            });
    }

    private transformEvents(source: IPublicTypeComponentMetadata): IComponentMetadata['events'] {
        return toArray(source.configure?.supports?.events)
            .map((item) => {
                if (isString(item)) {
                    return {
                        name: item,
                        description: '',
                        parameters: [],
                    };
                }
                return {
                    name: item.name,
                    description: item.description,
                    parameters: item.params,
                };
            });
    }

    private transformSlot(source: IPublicTypeComponentMetadata): IComponentMetadata['slots'] {

    }

    public transform(source: IPublicTypeComponentMetadata): IComponentMetadata {
        return {
            componentName: source.componentName,
            title: source.title,
            description: source.description,
            parent: this.transformParent(source),
            children: this.transformChildren(source),
            scenarios: [],
            propRelations: [],
            props: [],
            events: this.transformEvents(source),
            slots: [],
        };
    }

    public transformDirectory(targetDir: string) {
        Object.values(originComponents).forEach((meta: any) => {
            const transformed = this.transform(meta);
            const targetPath = path.join(targetDir, `${meta.componentName}.json`);
            fs.mkdirSync(path.dirname(targetPath), { recursive: true });
            fs.writeFileSync(targetPath, JSON.stringify(transformed, null, 2));
        });
    }
}
