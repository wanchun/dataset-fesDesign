import type { IComponentMetadata, ItemDescription } from './type';

interface TrainingExample {
    input: string
    output: string
}

interface GeneratorOptions {
    includeDescription?: boolean
    includeScenarios?: boolean
    includeParentInfo?: boolean
}

export class SchemaDataGenerator {
    private components: IComponentMetadata[];

    private schema: IComponentMetadata;

    constructor(components: IComponentMetadata[]) {
        this.components = components;
        this.schema = this.components[0];
    }

    private generatePropValue(prop: any, propName: string): any {
    // 如果有默认值，优先使用默认值
        if (prop.defaultValue !== undefined) {
            return prop.defaultValue;
        }

        // 处理基础类型
        if (typeof prop.propType === 'string') {
            switch (prop.propType) {
                case 'string':
                    // 如果有可选值，使用第一个可选值
                    if (prop.items?.length) {
                        const defaultItem = prop.items.find((item: any) => item.isDefault);
                        return defaultItem ? defaultItem.name : prop.items[0].name;
                    }
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        return prop.examples[0];
                    }
                    return propName;
                case 'bool':
                case 'boolean':
                    return false;
                case 'number':
                case 'int':
                case 'float':
                    // 如果有最小值和最大值，生成一个合适的值
                    if (prop.min !== undefined && prop.max !== undefined) {
                        return Math.floor((prop.min + prop.max) / 2);
                    }
                    // 如果只有最小值，使用最小值
                    if (prop.min !== undefined) {
                        return prop.min;
                    }
                    // 如果只有最大值，使用最大值
                    if (prop.max !== undefined) {
                        return prop.max;
                    }
                    return 0;
                case 'array':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        return prop.examples[0];
                    }
                    return [];
                case 'object':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        return prop.examples[0];
                    }
                    return {};
                case 'func':
                case 'function':
                    // 如果有事件参数，生成带参数的函数
                    if (prop.parameters?.length) {
                        const params = prop.parameters.map((p: any) => p.name).join(', ');
                        return `(${params}) => {}`;
                    }
                    return '() => {}';
                case 'node':
                case 'element':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        return prop.examples[0];
                    }
                    return null;
                case 'date':
                    // 如果有最小值和最大值，生成一个合适的值
                    if (prop.min && prop.max) {
                        const minDate = new Date(prop.min);
                        const maxDate = new Date(prop.max);
                        const midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);
                        return midDate.toISOString();
                    }
                    return new Date().toISOString();
                default:
                    return null;
            }
        }

        // 处理复杂类型
        if (typeof prop.propType === 'object') {
            switch (prop.propType.type) {
                case 'oneOf':
                    // 优先使用带有默认标记的值
                    const defaultValue = prop.propType.value.find((v: any) => v.isDefault);
                    // 如果没有默认值但有推荐值，使用推荐值
                    if (!defaultValue && prop.propType.recommended) {
                        const recommended = prop.propType.value.find((v: any) => v.value === prop.propType.recommended);
                        if (recommended)
                            return recommended.value;
                    }
                    return defaultValue ? defaultValue.value : prop.propType.value[0];
                case 'oneOfType':
                    // 优先使用非空类型
                    const nonNullType = prop.propType.value.find((type: any) => type !== 'null');
                    // 如果有推荐类型，使用推荐类型
                    if (prop.propType.recommended) {
                        const recommended = prop.propType.value.find((type: any) => type === prop.propType.recommended);
                        if (recommended) {
                            return this.generatePropValue({ propType: recommended }, propName);
                        }
                    }
                    return this.generatePropValue({ propType: nonNullType || prop.propType.value[0] }, propName);
                case 'arrayOf':
                    // 生成包含示例值的数组
                    const arrayValue = this.generatePropValue({ propType: prop.propType.value }, propName);
                    // 如果有最小长度要求，生成足够的元素
                    if (prop.minLength && arrayValue) {
                        return Array.from({ length: prop.minLength }).fill(arrayValue);
                    }
                    return [arrayValue];
                case 'exact':
                case 'shape':
                    // 递归生成对象的所有属性值
                    const value = prop.propType.type === 'exact' ? prop.propType.value : Object.entries(prop.propType.value);
                    return value.reduce((obj: any, item: any) => {
                        const [key, val] = prop.propType.type === 'exact' ? [item.name, item] : [item[0], item[1]];
                        obj[key] = this.generatePropValue({ propType: val }, key);
                        return obj;
                    }, {});
                case 'record':
                    // 生成一个示例键值对
                    const keyType = prop.propType.value[0];
                    const valueType = prop.propType.value[1];
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        return prop.examples[0];
                    }
                    return {
                        [this.generatePropValue({ propType: keyType }, 'key')]:
                        this.generatePropValue({ propType: valueType }, 'value'),
                    };
                default:
                    return null;
            }
        }

        return null;
    }

    private generatePropsExample(propName?: string): Record<string, any> {
        return this.schema.props.reduce((props, prop) => {
            // 如果指定了propName且当前prop不匹配，跳过处理
            if (propName && prop.name !== propName) {
                // 特殊处理children属性
                if (prop.name === 'children') {
                    props[prop.name] = prop.title || this.schema.title;
                }
                return props;
            }

            // 生成属性值
            props[prop.name] = this.generatePropValue(prop, prop.name);
            return props;
        }, {} as Record<string, any>);
    }

    private formatProps(props: Record<string, any>): string {
        return Object.entries(props)
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    return `${key}="${value}"`;
                }
                else if (typeof value === 'boolean' && value) {
                    return key;
                }
                return `:${key}="${JSON.stringify(value)}"`;
            })
            .join(' ');
    }

    private generateComponentExample(propName?: string): string {
        const props = this.generatePropsExample(propName);
        const childrenContent = props.children || '';
        delete props.children;
        const formattedProps = this.formatProps(props);
        return `<${this.schema.componentName} ${formattedProps}>${childrenContent}</${this.schema.componentName}>`;
    }

    private generateDescription(): string {
        const { title, componentName, description, parent, children } = this.schema;
        let desc = `组件：${title}\n名称：${componentName}`;

        if (description) {
            desc += `\n描述：${description}`;
        }

        if (parent?.types?.length) {
            desc += `\n可用容器：${parent.types.join('、')}`;
        }

        if (parent?.restrictions?.length) {
            desc += '\n使用限制：';
            parent.restrictions.forEach((r) => {
                desc += `\n- 在${r.parent}中：${r.description}`;
            });
        }

        if (children?.length) {
            desc += `\n可包含组件：${children.join('、')}`;
        }

        return desc;
    }

    public generateTrainingData(options: GeneratorOptions = {}): TrainingExample[] {
        const {
            includeDescription = true,
            includeScenarios = true,
            includeParentInfo = true,
        } = options;

        const examples: TrainingExample[] = [];

        this.components.forEach((schema) => {
            this.schema = schema;

            // 基本组件描述示例
            if (includeDescription) {
                examples.push({
                    input: '请描述这个组件的基本信息',
                    output: this.generateDescription(),
                });

                // 组件用途示例
                if (this.schema.description) {
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})是用来做什么的？`,
                        output: this.schema.description,
                    });
                }
            }

            // 使用场景示例
            if (includeScenarios && this.schema.scenarios?.length) {
                examples.push({
                    input: `${this.schema.title}组件(${this.schema.componentName})有哪些常见的使用场景？`,
                    output: `${this.schema.title}组件(${this.schema.componentName})的常见使用场景包括：\n${this.schema.scenarios.map(s => `- ${s}`).join('\n')}`,
                });
            }

            // 父组件约束示例
            if (includeParentInfo && this.schema.parent) {
                if (this.schema.parent.types?.length) {
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})可以放在哪些类型的容器中？`,
                        output: `${this.schema.title}组件(${this.schema.componentName})可以放置在以下类型的容器中：\n${this.schema.parent.types.map(t => `- ${t}`).join('\n')}`,
                    });
                }

                if (this.schema.parent.restrictions?.length) {
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})在使用时有什么限制吗？`,
                        output: `${this.schema.title}组件(${this.schema.componentName})的使用限制：\n${this.schema.parent.restrictions.map(r => `- 在${r.parent}中：${r.description}`).join('\n')}`,
                    });
                }
            }

            // 子组件示例
            if (this.schema.children?.length) {
                examples.push({
                    input: `${this.schema.title}组件(${this.schema.componentName})可以包含哪些子组件？`,
                    output: `${this.schema.title}组件(${this.schema.componentName})可以包含以下子组件：\n${this.schema.children.map(child => `- ${child}`).join('\n')}`,
                });

                // 为每种子组件生成示例
                this.schema.children.forEach((child) => {
                    examples.push({
                        input: `如何在${this.schema.title}组件(${this.schema.componentName})中使用${child}子组件？`,
                        output: `在${this.schema.title}组件(${this.schema.componentName})中使用${child}子组件的示例：\n${this.generateComponentExample()}`,
                    });
                });
            }

            // 属性使用示例
            this.schema.props.forEach((prop) => {
                // 合并属性描述和设置示例
                let description = `${prop.description}\n`;
                if (typeof prop.propType === 'object' && prop.propType.type === 'oneOf' && prop.propType.items?.length) {
                    description += `可选值：\n${prop.propType.items.map(item => `- ${item.name}：${item.title}`).join('\n')}\n`;
                }
                description += `\n示例：\n${this.generateComponentExample(prop.name)}`;

                examples.push({
                    input: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性是什么，如何使用？`,
                    output: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性${description}`,
                });

                // 属性必填示例
                if (prop.required) {
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性是必填的吗？`,
                        output: `是的，${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性是必填的。`,
                    });
                }

                // 可选值示例
                if (typeof prop.propType === 'object' && prop.propType.type === 'oneOf' && prop.propType.items?.length) {
                    // 为每个可选值生成示例
                    prop.propType.items.forEach((item) => {
                        const itemProps = { [prop.name]: item.name };
                        const formattedItemProps = this.formatProps(itemProps);
                        const usageDescription = item.usage || `适用于${item.title}的场景`;
                        examples.push({
                            input: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性设置为${item.name}是什么效果？`,
                            output: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性设置为${item.name}（${item.title}）时：\n- 使用场景：${usageDescription}\n<${this.schema.componentName} ${formattedItemProps}>${prop.title || this.schema.title}</${this.schema.componentName}>`,
                        });
                    });

                    // 生成最佳实践建议
                    if (prop.propType.items.length > 1) {
                        examples.push({
                            input: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性在不同场景下如何选择？`,
                            output: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性使用建议：\n${prop.propType.items.map((item: ItemDescription) => `- ${item.name}（${item.title}）：${item.usage || `适用于${item.title}的场景`}`).join('\n')}`,
                        });
                    }
                }

                // 属性必填性示例
                if (prop.required) {
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性是必填的吗？`,
                        output: `是的，${this.schema.title}组件(${this.schema.componentName})的${prop.name}属性是必填的。`,
                    });
                }
            });

            // 属性关联示例
            if (this.schema.propRelations?.length) {
                this.schema.propRelations.forEach((relation) => {
                    let output = relation.effect;
                    if (relation.notes?.length) {
                        output += '\n注意事项：';
                        relation.notes.forEach((note: string) => {
                            output += `\n- ${note}`;
                        });
                    }
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的${relation.source}属性和${relation.target}属性有什么关系？`,
                        output,
                    });
                });
            }

            // 事件处理示例
            if (this.schema.events?.length) {
                this.schema.events.forEach((event) => {
                    // 事件基础描述
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的${event.name}事件是什么？`,
                        output: `${event.description}\n${
                            event.parameters?.length
                                ? `事件参数：\n${event.parameters.map(p => `- ${p.name}: ${p.type}${p.description ? ` (${p.description})` : ''}`).join('\n')}`
                                : ''}`,
                    });

                    // 事件使用示例
                    const exampleCode = `<script setup>
                const handle${event.name} = (${event.parameters?.map(p => p.name).join(', ') || ''}) => {
                    // ${event.description}
                    ${event.parameters?.length
                        ? `
                    // 事件参数:
                    ${event.parameters.map(p => `// - ${p.name}: ${p.type}${p.description ? ` (${p.description})` : ''}`).join('\n')}`
                        : ''}
                }
                </script>

                <template>
                    <${this.schema.componentName} @${event.name}="handle${event.name}" />
                </template>`;

                    examples.push({
                        input: `如何在${this.schema.title}组件(${this.schema.componentName})中处理${event.name}事件？`,
                        output: `处理${event.name}事件的示例代码：
${exampleCode}`,
                    });
                });
            }
        });

        return examples;
    }
}
