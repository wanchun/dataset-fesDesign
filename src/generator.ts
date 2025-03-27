import type { IComponentMetadata, IPropOptionDescription, IPropType } from './type';
import { cloneDeep, random } from 'lodash-es';
import { isBasePropType } from './type';
import { log } from './utils';

interface TrainingExample {
    input: string
    output: string
    type?: 'train' | 'test' | 'valid'
}

interface GeneratorOptions {
    includeDescription?: boolean
    includeScenarios?: boolean
    includeParentInfo?: boolean
}

export class SchemaDataGenerator {
    private components: IComponentMetadata[];

    private schema: IComponentMetadata;

    private examples: TrainingExample[] = [];

    constructor(components: IComponentMetadata[]) {
        this.components = components;
        this.schema = this.components[0];
    }

    /**
     * 生成函数类型的属性值
     * @param prop 属性定义
     * @returns 生成的函数字符串
     */
    private generateFuncValue(prop: IPropType): string {
        // 如果有默认值，直接返回
        if (prop.defaultValue) {
            return prop.defaultValue;
        }
        
        // 获取函数参数
        let parameters = '';
        if (typeof prop.valueType === 'object' && 
            prop.valueType.type === 'func' && 
            prop.valueType.parameters?.length) {
            parameters = prop.valueType.parameters
                .map(param => param.name)
                .join(', ');
        }
        
        // 生成函数体
        let functionBody = '  // 函数实现';
        
        // 如果有返回类型，添加返回语句
        if (typeof prop.valueType === 'object' && 
            prop.valueType.type === 'func' && 
            prop.valueType.returnType) {
            let returnValue = 'null';
            if (typeof prop.valueType.returnType === 'string') {
                switch (prop.valueType.returnType) {
                    case 'string':
                        returnValue = '""';
                        break;
                    case 'number':
                        returnValue = '0';
                        break;
                    case 'bool':
                        returnValue = 'false';
                        break;
                    case 'array':
                        returnValue = '[]';
                        break;
                    case 'object':
                        returnValue = '{}';
                        break;
                }
            }
            functionBody += `\n  return ${returnValue};`;
        }
        
        return `function(${parameters}) {\n${functionBody}\n}`;
    }
    
    /**
     * 生成属性值
     * @param prop 属性定义
     * @param propName 属性名称
     * @returns 生成的属性值
     */
    private generatePropValue(prop: IPropType, propName: string): any {
        // 如果属性为空，直接返回null
        if (!prop) {
            log('warn', `Property definition is empty for ${propName}`);
            return null;
        }

        // 验证属性定义的完整性
        if (!prop.valueType) {
            log('warn', `Missing propType for property ${propName}`);
            return null;
        }

        // 如果有示例值，使用示例值
        if (prop.example !== undefined) {
            return prop.example;
        }

        // 如果有默认值，使用默认值
        if (prop.defaultValue !== undefined) {
            return prop.defaultValue;
        }

        let result: any = null;

        // 处理基础类型
        if (isBasePropType(prop.valueType)) {
            switch (prop.valueType) {
                case 'string':
                    result = propName;
                    break;
                case 'bool':
                    result = true;
                    break;
                case 'number':
                    result = random(0, 100);
                    break;
                case 'array':
                    result = [];
                    break;
                case 'object':
                    result = {};
                    break;
                case 'node':
                    result = null;
                    break;
                case 'date':
                    result = new Date().toString();
                    break;
                default:
                    result = null;
            }
        }
        // 处理复杂类型
        else if (typeof prop.valueType === 'object') {
            switch (prop.valueType.type) {
                case 'oneOf':
                    // 如果有最小值和最大值，生成一个合适的值
                    if (prop.example) {
                        result = prop.example;
                    }
                    // 如果有items属性，优先使用items
                    else if (prop.valueType.items?.length) {
                        result = prop.valueType.items[0].value;
                    }
                    // 否则使用value属性
                    else if (prop.defaultValue) {
                        result = prop.defaultValue;
                    }
                    else {
                        result = null;
                    }
                    break;
                case 'oneOfType':
                    if ((prop.valueType.value && prop.valueType.value.length > 0)) {
                        result = this.generatePropValue(
                            {
                                ...cloneDeep(prop),
                                valueType: prop.valueType.value[0],
                            },
                            propName,
                        );
                    }
                    else {
                        result = null;
                    }
                    break;
                case 'arrayOf':
                    // 生成包含示例值的数组
                    if (prop.valueType.value) {
                        // 递归处理数组元素类型
                        const arrayValue = this.generatePropValue(
                            {
                                ...cloneDeep(prop),
                                valueType: prop.valueType.value,
                            },
                            propName,
                        );
                        // 创建只有2个元素的数组
                        result = [arrayValue, arrayValue];
                    }
                    else {
                        result = [];
                    }
                    break;
                case 'exact':
                case 'shape':
                    // 递归生成对象的所有属性值
                    if (prop.valueType.value) {
                        result = {};
                        // 对于exact和shape类型，value都是PropType数组
                        const propArray = prop.valueType.value;
                        if (Array.isArray(propArray)) {
                            propArray.forEach((nestedProp) => {
                                // 确保nestedProp有name属性
                                if (nestedProp && nestedProp.name) {
                                    result[nestedProp.name] = this.generatePropValue(
                                        nestedProp,
                                        nestedProp.name,
                                    );
                                }
                            });
                        }
                    }
                    else {
                        result = {};
                    }
                    break;
                case 'func':
                    result = this.generateFuncValue(prop);
                default:
                    result = null;
            }
        }

        return result;
    }

    /**
     * 格式化属性为组件模板字符串
     * @param props 属性对象
     * @returns 格式化后的属性字符串
     */
    private propsToString(props: Record<string, any>): string {
        return Object.entries(props)
            .filter(([_, value]) => value !== undefined && value !== null) // 过滤掉undefined和null值
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    // 转义引号，防止生成无效的模板
                    const escapedValue = value.replace(/"/g, '\\"');
                    return `${key}="${escapedValue}"`;
                }
                else if (typeof value === 'boolean' && value) {
                    return key;
                }
                return `:${key}="${JSON.stringify(value)}"`;
            })
            .join(' ');
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

    /**
     * 生成属性示例值
     * @param propName 指定的属性名称，如果提供则只生成该属性的值
     * @returns 属性值对象
     */
    private generatePropsData(propName?: string): Record<string, any> {
        return this.schema.props.filter((prop) => {
            // children 属性其实是默认插槽
            if (prop.name === 'children') {
                return false;
            }
            // 如果指定了propName且当前prop不匹配，跳过处理
            if (propName && prop.name !== propName) {
                return false;
            }
            return true;
        }).reduce((props, prop) => {
            // 生成属性值
            props[prop.name] = this.generatePropValue(prop, prop.name);

            return props;
        }, {} as Record<string, any>);
    }

    private generateComponentExampleBase(option?: { props: Record<string, any>, childrenContent?: string }): string {
        const { props, childrenContent } = option || {};
        const formattedProps = this.propsToString(props || {});
        let _childrenContent = childrenContent;
        // 有默认插槽，默认插槽内容为组件名称
        if (!childrenContent) {
            _childrenContent = this.schema.title;
        }
        if (!(this.schema.slots?.length && this.schema.slots.some(slot => slot.name === 'default'))) {
            _childrenContent = '';
        }
        return `<${this.schema.componentName} ${formattedProps}>${_childrenContent || ''}</${this.schema.componentName}>`;
    }

    /**
     * 生成组件示例代码
     * @param propName 指定的属性名称
     * @returns 组件示例代码
     */
    private generateComponentExample(option?: { propName?: string, childrenContent?: string }): string {
        const { propName, childrenContent } = option || {};
        const props = this.generatePropsData(propName);
        return this.generateComponentExampleBase({
            props,
            childrenContent,
        });
    }

    private getComponentCName(): string {
        if (!this.schema) {
            return '';
        }
        return `${this.schema.title}组件(${this.schema.componentName})`;
    }

    public generateTrainingData(options: GeneratorOptions = {}): TrainingExample[] {
        const {
            includeDescription = true,
            includeScenarios = true,
            includeParentInfo = true,
        } = options;

        this.components.forEach((schema) => {
           
            this.schema = schema;

            // 基本组件描述示例
            if (includeDescription) {
                this.examples.push({
                    input: `请描述${this.getComponentCName()}的基本信息`,
                    output: this.generateDescription(),
                });

                // 组件用途示例
                if (this.schema.description) {
                    this.examples.push({
                        input: `${this.getComponentCName()}是用来做什么的？`,
                        output: this.schema.description,
                    });
                }
            }

            // 使用场景示例
            if (includeScenarios && this.schema.scenarios?.length) {
                this.examples.push({
                    input: `${this.getComponentCName()}有哪些常见的使用场景？`,
                    output: `${this.getComponentCName()}的常见使用场景包括：\n${this.schema.scenarios.map(s => `- ${s}`).join('\n')}`,
                });
            }

            // 父组件约束示例
            if (includeParentInfo && this.schema.parent) {
                if (this.schema.parent.types?.length) {
                    this.examples.push({
                        input: `${this.getComponentCName()}可以放在哪些类型的容器中？`,
                        output: `${this.getComponentCName()}可以放置在以下类型的容器中：\n${this.schema.parent.types.map(t => `- ${t}`).join('\n')}`,
                    });
                }

                if (this.schema.parent.restrictions?.length) {
                    this.examples.push({
                        input: `${this.getComponentCName()}在使用时有什么限制吗？`,
                        output: `${this.getComponentCName()}的使用限制：\n${this.schema.parent.restrictions.map(r => `- 在${r.parent}中：${r.description}`).join('\n')}`,
                    });
                }
            }

            // 子组件示例
            if (this.schema.children?.length) {
                this.examples.push({
                    input: `${this.getComponentCName()}可以包含哪些子组件？`,
                    output: `${this.getComponentCName()}可以包含以下子组件：\n${this.schema.children.map(child => `- ${child}`).join('\n')}`,
                });

                // 为每种子组件生成示例
                this.schema.children.forEach((child) => {
                    this.examples.push({
                        input: `如何在${this.getComponentCName()}中使用${child}子组件？`,
                        output: `在${this.getComponentCName()}中使用${child}子组件的示例：\n${this.generateComponentExample({ childrenContent: `<${child} />` })}`,
                    });
                });
            }

            // 属性使用示例
            this.schema.props.forEach((prop) => {
                // 合并属性描述和设置示例
                let description = `${prop.description}\n`;
                if (typeof prop.valueType === 'object' && prop.valueType.type === 'oneOf' && prop.valueType.items?.length) {
                    description += `可选值：\n${prop.valueType.items.map(item => `- ${item.value}：${item.title}`).join('\n')}\n`;
                }
                description += `\n示例：\n${this.generateComponentExample({ propName: prop.name })}`;

                this.examples.push({
                    input: `${this.getComponentCName()}的${prop.name}属性是什么，如何使用？`,
                    output: `${this.getComponentCName()}的${prop.name}属性${description}`,
                });

                // 属性必填示例
                if (prop.required) {
                    this.examples.push({
                        input: `${this.getComponentCName()}的${prop.name}属性是必填的吗？`,
                        output: `是的，${this.getComponentCName()}的${prop.name}属性是必填的。`,
                    });
                }

                // 可选值示例
                if (typeof prop.valueType === 'object' && prop.valueType.type === 'oneOf' && prop.valueType.items?.length) {
                    // 为每个可选值生成示例
                    prop.valueType.items.forEach((item) => {
                        const itemProps = { [prop.name]: item.value };
                        const usageDescription = item.usage || `适用于${item.title}的场景`;
                        this.examples.push({
                            input: `${this.getComponentCName()}的${prop.name}属性设置为${item.value}是什么效果？`,
                            output: `${this.getComponentCName()}的${prop.name}属性设置为${item.value}（${item.title}）时：\n- 使用场景：${usageDescription}\n ${this.generateComponentExampleBase({ props: itemProps, childrenContent: prop.title || this.schema.title })} `,
                        });
                    });

                    // 生成最佳实践建议
                    if (prop.valueType.items.length > 1) {
                        this.examples.push({
                            input: `${this.getComponentCName()}的${prop.name}属性在不同场景下如何选择？`,
                            output: `${this.getComponentCName()}的${prop.name}属性使用建议：\n${prop.valueType.items.map((item: IPropOptionDescription) => `- ${item.value}（${item.title}）：${item.usage || `适用于${item.title}的场景`}`).join('\n')}`,
                        });
                    }
                }

                // 属性必填性示例
                if (prop.required) {
                    this.examples.push({
                        input: `${this.getComponentCName()}的${prop.name}属性是必填的吗？`,
                        output: `是的，${this.getComponentCName()}的${prop.name}属性是必填的。`,
                    });
                }
            });

            // 属性关联示例
            if (this.schema.propRelations?.length) {
                this.schema.propRelations.forEach((relation) => {
                    // 基本关系描述
                    let output = relation.effect;
                    if (relation.notes?.length) {
                        output += '\n注意事项：';
                        relation.notes.forEach((note: string) => {
                            output += `\n- ${note}`;
                        });
                    }
                    this.examples.push({
                        input: `${this.getComponentCName()}的${relation.source}属性和${relation.target}属性有什么关系？`,
                        output,
                    });

                    // 生成属性组合的代码示例
                    const targetProps = Array.isArray(relation.target) ? relation.target : [relation.target];
                    const combinedProps: Record<string, any> = {};

                    // 设置源属性值
                    const sourceProp = this.schema.props.find(p => p.name === relation.source);
                    if (sourceProp) {
                        if (typeof sourceProp.valueType === 'object' && sourceProp.valueType.type === 'oneOf' && sourceProp.valueType.items?.length) {
                            // 对于枚举类型，使用第一个值作为示例
                            combinedProps[relation.source] = sourceProp.valueType.items[0].value;
                        }
                        else if (sourceProp.valueType === 'bool') {
                            // 对于布尔类型，通常设为true更能展示关联效果
                            combinedProps[relation.source] = true;
                        }
                        else {
                            // 其他类型使用默认值或生成值
                            combinedProps[relation.source] = this.generatePropValue(sourceProp, relation.source);
                        }
                    }

                    // 设置目标属性值
                    targetProps.forEach((targetName) => {
                        const targetProp = this.schema.props.find(p => p.name === targetName);
                        if (targetProp) {
                            combinedProps[targetName] = this.generatePropValue(targetProp, targetName);
                        }
                    });

                    // 格式化属性并生成组件示例
                    const childrenContent = combinedProps.children || '';
                    const componentExample = this.generateComponentExampleBase({ props: combinedProps, childrenContent });

                    // 生成组合场景示例
                    this.examples.push({
                        input: `如何同时使用${this.getComponentCName()}的${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性？`,
                        output: `${this.getComponentCName()}中${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性的组合使用示例：\n\n${relation.effect}\n\n代码示例：\n${componentExample}`,
                    });
                });

                // 如果有多个属性关联，生成综合使用示例
                if (this.schema.propRelations.length > 1) {
                    const allRelatedProps = new Set<string>();
                    this.schema.propRelations.forEach((relation) => {
                        allRelatedProps.add(relation.source);
                        if (Array.isArray(relation.target)) {
                            relation.target.forEach(t => allRelatedProps.add(t));
                        }
                        else {
                            allRelatedProps.add(relation.target);
                        }
                    });

                    this.examples.push({
                        input: `${this.getComponentCName()}的属性之间有哪些重要的关联关系？`,
                        output: `${this.getComponentCName()}的属性关联关系：\n\n${this.schema.propRelations.map((relation, index) =>
                            `${index + 1}. ${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性：${relation.effect}`,
                        ).join('\n\n')}`,
                    });
                }
            }

            // 事件处理示例
            if (this.schema.events?.length) {
                this.schema.events.forEach((event) => {
                    // 事件基础描述
                    this.examples.push({
                        input: `${this.getComponentCName()}的${event.name}事件是什么？`,
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

                    this.examples.push({
                        input: `如何在${this.getComponentCName()}中处理${event.name}事件？`,
                        output: `处理${event.name}事件的示例代码：\n ${exampleCode}`,
                    });
                });
            }

            // 暴露方法处理示例
            if (this.schema.exposes?.length) {
                this.schema.exposes.forEach((expose) => {
                    // 暴露方法基础描述
                    this.examples.push({
                        input: `${this.getComponentCName()}的${expose.name}方法是什么？`,
                        output: `${expose.description}\n${
                            expose.parameters?.length
                                ? `方法参数：\n${expose.parameters.map(p => `- ${p.name}: ${p.type}${p.description ? ` (${p.description})` : ''}`).join('\n')}`
                                : ''}`,
                    });

                    // 暴露方法使用示例
                    const exampleCode = `<script setup>
                import { ref } from 'vue';
                
                // 创建组件引用
                const ${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref = ref(null);
                
                // 调用组件暴露的方法
                const call${expose.name.charAt(0).toUpperCase() + expose.name.slice(1)} = () => {
                    if (${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref.value) {
                        ${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref.value.${expose.name}(${expose.parameters?.map(p => p.name).join(', ') || ''});
                        // ${expose.description}
                    }
                };
                </script>

                <template>
                    <${this.schema.componentName} ref="${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref" />
                    <button @click="call${expose.name.charAt(0).toUpperCase() + expose.name.slice(1)}">调用${expose.name}方法</button>
                </template>`;

                    this.examples.push({
                        input: `如何调用${this.getComponentCName()}的${expose.name}方法？`,
                        output: `调用${expose.name}方法的示例代码：
${exampleCode}`,
                    });
                });
            }

            // 添加错误样本示例
            this.generateErrorExamples();

             // 处理组件自带的模板示例
             if (schema.templates?.length) {
                schema.templates.forEach(template => {
                    this.examples.push({
                        input: template.input,
                        output: template.output
                    });
                });
            }
        });

        return this.examples;
    }

    /**
     * 生成错误样本示例
     * @param examples 训练示例数组
     */
    private generateErrorExamples(): void {
        // 1. 传入了错误的组件属性值（类型）
        this.generateTypeErrorExamples();

        // 2. 组件属性有多个选择时，错误选择值
        this.generateWrongOptionExamples();

        // 3. 调用了组件不存在的方法
        this.generateNonExistentMethodExamples();

        // 4. 调用了组件实例不存在的方法或者属性
        this.generateInstanceErrorExamples();
    }

    /**
     * 生成属性类型错误的示例
     */
    private generateTypeErrorExamples(): void {
        // 选择一些基础类型的属性来生成错误示例
        const typeableProps = this.schema.props.filter(prop =>
            typeof prop.valueType === 'string'
            && ['string', 'number', 'bool', 'array', 'object'].includes(prop.valueType),
        );

        if (typeableProps.length === 0)
            return;

        // 为每个属性生成一个类型错误示例
        typeableProps.forEach((prop) => {
            let wrongValue: string;
            let correctType: string;

            switch (prop.valueType) {
                case 'string':
                    wrongValue = '123'; // 应该用引号包裹
                    correctType = '字符串';
                    break;
                case 'number':
                    wrongValue = '"100"'; // 不应该有引号
                    correctType = '数字';
                    break;
                case 'bool':
                    wrongValue = '"true"'; // 不应该有引号
                    correctType = '布尔值';
                    break;
                case 'array':
                    wrongValue = '{ item: "value" }'; // 应该是数组
                    correctType = '数组';
                    break;
                case 'object':
                    wrongValue = '[1, 2, 3]'; // 应该是对象
                    correctType = '对象';
                    break;
                default:
                    return; // 跳过不支持的类型
            }

            const errorExample = this.generateComponentExampleBase({ props: { [prop.name]: wrongValue } });

            this.examples.push({
                input: `这段代码有什么问题？\n${errorExample}`,
                output: `这段代码中，${this.getComponentCName()}的${prop.name}属性传入了错误的类型。${prop.name}属性应该是${correctType}类型，但是传入的是${wrongValue}。\n\n正确的用法应该是：\n${this.generateComponentExample({ propName: prop.name })}`,
            });
        });
    }

    /**
     * 生成选项错误的示例
     */
    private generateWrongOptionExamples(): void {
        // 查找具有多个选项的属性
        const propsWithOptions = this.schema.props.filter(prop =>
            typeof prop.valueType === 'object'
            && prop.valueType.type === 'oneOf'
            && prop.valueType.items?.length > 1,
        );

        if (propsWithOptions.length === 0)
            return;

        // 为每个有选项的属性生成错误示例
        propsWithOptions.slice(0, 2).forEach((prop) => {
            // 确保 propType 是对象类型且包含 items 属性
            const items = typeof prop.valueType === 'object' && 'items' in prop.valueType
                ? prop.valueType.items as IPropOptionDescription[]
                : [];
            if (!items || items.length < 2)
                return;

            // 找出一个有使用场景描述的选项
            const itemWithUsage = items.find(item => item.usage);
            if (!itemWithUsage)
                return;

            // 找出另一个不同的选项
            const otherItem = items.find(item => item.value !== itemWithUsage.value);
            if (!otherItem)
                return;

            const wrongExample = this.generateComponentExampleBase({ props: { [prop.name]: otherItem.value } });

            this.examples.push({
                input: `在${itemWithUsage.usage}的场景下，这段代码有什么问题？\n${wrongExample}`,
                output: `这段代码中，${this.getComponentCName()}的${prop.name}属性设置为了"${otherItem.value}"，但在${itemWithUsage.usage}的场景下，应该使用"${itemWithUsage.value}"。\n\n"${otherItem.value}"(${otherItem.title})不适合这个场景，而"${itemWithUsage.value}"(${itemWithUsage.title})更适合，因为${itemWithUsage.usage}。\n\n正确的用法应该是：\n ${this.generateComponentExampleBase({ props: { [prop.name]: itemWithUsage.value } })}`,
            });
        });
    }

    /**
     * 生成不存在方法的错误示例
     */
    private generateNonExistentMethodExamples(): void {
        // 生成两个不存在的方法名
        const fakeMethods = ['refresh', 'reset', 'update', 'initialize', 'validate'];
        const existingMethods = this.schema.exposes?.map(e => e.name) || [];

        // 过滤出不存在的方法
        const nonExistentMethods = fakeMethods.filter(m => !existingMethods.includes(m)).slice(0, 2);

        nonExistentMethods.forEach((fakeMethod) => {
            const errorExample = `<script setup>
import { ref } from 'vue';

const ${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref = ref(null);

const handle${fakeMethod.charAt(0).toUpperCase() + fakeMethod.slice(1)} = () => {
    ${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref.value.${fakeMethod}();
};
</script>

<template>
    <${this.schema.componentName} ref="${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref" />
    <button @click="handle${fakeMethod.charAt(0).toUpperCase() + fakeMethod.slice(1)}">调用${fakeMethod}方法</button>
</template>`;

            this.examples.push({
                input: `这段代码有什么问题？\n${errorExample}`,
                output: `这段代码中，尝试调用${this.getComponentCName()}的${fakeMethod}方法，但该方法不存在。\n\n${this.schema.componentName}组件没有提供${fakeMethod}方法。${
                    existingMethods.length > 0
                        ? `\n\n${this.schema.componentName}组件提供的方法有：\n${existingMethods.map(m => `- ${m}`).join('\n')}`
                        : `\n\n${this.schema.componentName}组件没有提供任何可调用的方法。`
                }`,
            });
        });
    }

    /**
     * 生成组件实例错误的示例
     */
    private generateInstanceErrorExamples(): void {
        // 生成一些不存在的属性或方法
        const fakeProps = ['value', 'data', 'options', 'config', 'state'];
        const existingProps = this.schema.props.map(p => p.name);
        const existingMethods = this.schema.exposes?.map(e => e.name) || [];

        // 过滤出不存在的属性
        const nonExistentProps = fakeProps.filter(p =>
            !existingProps.includes(p) && !existingMethods.includes(p),
        ).slice(0, 2);

        if (nonExistentProps.length === 0)
            return;

        nonExistentProps.forEach((fakeProp) => {
            const errorExample = `<script setup>
import { ref, onMounted } from 'vue';

const ${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref = ref(null);

onMounted(() => {
    // 尝试访问不存在的属性或方法
    console.log(${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref.value.${fakeProp});
});
</script>

<template>
    <${this.schema.componentName} ref="${this.schema.componentName.charAt(0).toLowerCase() + this.schema.componentName.slice(1)}Ref" />
</template>`;

            this.examples.push({
                input: `这段代码有什么问题？\n${errorExample}`,
                output: `这段代码中，尝试访问${this.getComponentCName()}实例的${fakeProp}属性或方法，但该属性或方法不存在。\n\n${this.schema.componentName}组件实例没有提供${fakeProp}属性或方法。${
                    existingMethods.length > 0
                        ? `\n\n${this.schema.componentName}组件提供的方法有：\n${existingMethods.map(m => `- ${m}`).join('\n')}`
                        : ''
                }${
                    existingProps.length > 0
                        ? `\n\n${this.schema.componentName}组件的属性有：\n${existingProps.slice(0, 5).map(p => `- ${p}`).join('\n')}${existingProps.length > 5 ? '\n- ...' : ''}`
                        : ''
                }`,
            });
        });
    }
}
