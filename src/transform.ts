import { IComponentMetadata } from './type';
import fs from 'fs';
import path from 'path';
import * as  originComponents from './origin/component-meta';

export class SchemaTransformer {
    private transformProp(prop: any): any {
        return {
            name: prop.name,
            title: prop.title || prop.name,
            propType: this.transformPropType(prop.propType),
            description: prop.description,
            defaultValue: prop.defaultValue,
            required: prop.required
        };
    }

    private transformPropType(propType: any): any {
        if (typeof propType === 'string') {
            return propType;
        }

        switch (propType.type) {
            case 'array':
                return {
                    type: 'array',
                    items: this.transformPropType(propType.items)
                };
            case 'function':
                return {
                    type: 'function',
                    signature: propType.signature
                };
            case 'oneOf':
                if (!propType.options || !Array.isArray(propType.options)) {
                    return propType;
                }
                return {
                    type: 'oneOf',
                    items: propType.options.map((opt: any) => ({
                        name: opt.value,
                        title: opt.label,
                        usage: opt.description
                    }))
                };
            case 'shape':
                if (!propType.properties || !Array.isArray(propType.properties)) {
                    return propType;
                }
                return {
                    type: 'shape',
                    value: propType.properties.map((p: any) => this.transformProp(p)),
                    required: propType.required
                };
            default:
                return propType;
        }
    }

    public transform(source: any): IComponentMetadata {
        return {
            componentName: source.componentName,
            title: source.title,
            description: source.description,
            scenarios: source.useCases,
            props: (source.props || []).map((p: any) => this.transformProp(p)),
            events: (source.events || []).map((e: any) => ({
                name: e.name,
                description: e.description,
                parameters: e.params
            })),
            slots: (source.slots || []).map((s: any) => ({
                name: s.name,
                description: s.desc,
                scope: this.transformPropType(s.context)
            }))
        };
    }

    public transformDirectory(targetDir: string) {
        Object.values(originComponents).forEach((meta: any) => {
            const transformed = this.transform(meta);
            const targetPath = path.join(targetDir, meta.componentName + '.json');
            fs.mkdirSync(path.dirname(targetPath), { recursive: true });
            fs.writeFileSync(targetPath, JSON.stringify(transformed, null, 2));
        })
    }
}

