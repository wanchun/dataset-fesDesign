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

    /**
     * 生成属性值
     * @param prop 属性定义
     * @param propName 属性名称
     * @param depth 当前递归深度
     * @param path 属性路径，用于检测循环引用
     * @returns 生成的属性值
     */
    private generatePropValue(prop: any, propName: string, depth: number = 0, path: string[] = []): any {
        // 防止递归过深导致栈溢出
        const MAX_DEPTH = 10;
        if (depth > MAX_DEPTH) {
            console.warn(`Reached maximum recursion depth (${MAX_DEPTH}) for property ${propName}`);
            // 返回一个安全的默认值，避免生成无效数据
            return this.getSafeDefaultValue(prop, propName);
        }

        // 如果属性为空，直接返回null
        if (!prop) {
            console.warn(`Property definition is empty for ${propName}`);
            return null;
        }

        // 验证属性定义的完整性
        if (!prop.propType) {
            console.warn(`Missing propType for property ${propName}`);
            return null;
        }

        // 如果有默认值，优先使用默认值
        if (prop.defaultValue !== undefined) {
            return prop.defaultValue;
        }

        let result: any = null;

        // 处理基础类型
        if (typeof prop.propType === 'string') {
            switch (prop.propType) {
                case 'string':
                    // 如果有可选值，使用第一个可选值
                    if (prop.items?.length) {
                        const defaultItem = prop.items.find((item: any) => item.isDefault);
                        result = defaultItem ? defaultItem.name : prop.items[0].name;
                    }
                    // 如果有示例值，使用示例值
                    else if (prop.examples?.length) {
                        result = prop.examples[0];
                    }
                    else {
                        result = propName;
                    }
                    break;
                case 'bool':
                case 'boolean':
                    result = false;
                    break;
                case 'number':
                case 'int':
                case 'float':
                    // 如果有最小值和最大值，生成一个合适的值
                    if (prop.min !== undefined && prop.max !== undefined) {
                        result = Math.floor((prop.min + prop.max) / 2);
                    }
                    // 如果只有最小值，使用最小值
                    else if (prop.min !== undefined) {
                        result = prop.min;
                    }
                    // 如果只有最大值，使用最大值
                    else if (prop.max !== undefined) {
                        result = prop.max;
                    }
                    else {
                        result = 0;
                    }
                    break;
                case 'array':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        result = prop.examples[0];
                    }
                    else {
                        result = [];
                    }
                    break;
                case 'object':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        result = prop.examples[0];
                    }
                    else {
                        result = {};
                    }
                    break;
                case 'func':
                case 'function':
                    // 如果有事件参数，生成带参数的函数
                    if (prop.parameters?.length) {
                        const params = prop.parameters.map((p: any) => p.name).join(', ');
                        result = `(${params}) => {}`;
                    }
                    else {
                        result = '() => {}';
                    }
                    break;
                case 'node':
                case 'element':
                    // 如果有示例值，使用示例值
                    if (prop.examples?.length) {
                        result = prop.examples[0];
                    }
                    else {
                        result = null;
                    }
                    break;
                case 'date':
                    // 如果有最小值和最大值，生成一个合适的值
                    if (prop.min && prop.max) {
                        const minDate = new Date(prop.min);
                        const maxDate = new Date(prop.max);
                        const midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);
                        result = midDate.toISOString();
                    }
                    else {
                        result = new Date().toISOString();
                    }
                    break;
                default:
                    result = null;
            }
        }
        // 处理复杂类型
        else if (typeof prop.propType === 'object') {
            switch (prop.propType.type) {
                case 'oneOf':
                    // 优先使用带有默认标记的值
                    const defaultValue = prop.propType.value?.find((v: any) => v.isDefault);
                    // 如果没有默认值但有推荐值，使用推荐值
                    if (!defaultValue && prop.propType.recommended) {
                        const recommended = prop.propType.value?.find((v: any) => v.value === prop.propType.recommended);
                        if (recommended) {
                            result = recommended.value;
                            break;
                        }
                    }
                    // 如果有items属性，优先使用items
                    if (prop.propType.items?.length) {
                        const defaultItem = prop.propType.items.find((item: any) => item.isDefault);
                        result = defaultItem ? defaultItem.name : prop.propType.items[0].name;
                    }
                    // 否则使用value属性
                    else if (prop.propType.value?.length) {
                        result = defaultValue ? defaultValue.value : prop.propType.value[0];
                    }
                    else {
                        result = null;
                    }
                    break;
                case 'oneOfType':
                    // 优先使用非空类型
                    const nonNullType = prop.propType.value?.find((type: any) => type !== 'null');
                    // 如果有推荐类型，使用推荐类型
                    if (prop.propType.recommended) {
                        const recommended = prop.propType.value?.find((type: any) => type === prop.propType.recommended);
                        if (recommended) {
                            result = this.generatePropValue({ propType: recommended }, propName, depth + 1);
                            break;
                        }
                    }
                    if (nonNullType || (prop.propType.value && prop.propType.value.length > 0)) {
                        result = this.generatePropValue(
                            { propType: nonNullType || prop.propType.value[0] },
                            propName,
                            depth + 1,
                            [...path, propName],
                        );
                    }
                    else {
                        result = null;
                    }
                    break;
                case 'arrayOf':
                    // 生成包含示例值的数组
                    if (prop.propType.value) {
                        // 递归处理数组元素类型
                        const arrayValue = this.generatePropValue(
                            { propType: prop.propType.value },
                            `${propName}Item`,
                            depth + 1,
                            [...path, propName],
                        );
                        // 如果有最小长度要求，生成足够的元素
                        if (prop.minLength && arrayValue !== null) {
                            // 创建新数组而不是使用fill，避免引用同一个对象
                            result = Array.from({ length: prop.minLength }, () =>
                                // 对于对象类型，创建深拷贝以避免引用相同对象
                                typeof arrayValue === 'object' && arrayValue !== null
                                    ? JSON.parse(JSON.stringify(arrayValue))
                                    : arrayValue);
                        }
                        else {
                            // 创建只有一个元素的数组
                            result = [arrayValue];
                        }
                    }
                    else {
                        result = [];
                    }
                    break;
                case 'exact':
                case 'shape':
                    // 递归生成对象的所有属性值
                    if (prop.propType.value) {
                        result = {};
                        // 对于exact和shape类型，value都是PropType数组
                        const propArray = prop.propType.value;
                        if (Array.isArray(propArray)) {
                            propArray.forEach((nestedProp) => {
                                try {
                                    // 确保nestedProp有name属性
                                    if (nestedProp && nestedProp.name) {
                                        result[nestedProp.name] = this.generatePropValue(
                                            nestedProp,
                                            nestedProp.name,
                                            depth + 1,
                                            [...path, propName],
                                        );
                                    }
                                }
                                catch (error) {
                                    // 处理异常情况，确保不会中断整个过程
                                    console.error(`Error processing ${propName}.${nestedProp?.name} property:`, error);
                                }
                            });
                        }
                    }
                    else {
                        result = {};
                    }
                    break;
                default:
                    result = null;
            }
        }

        return result;
    }

    /**
     * 获取安全的默认值，用于处理边界情况
     * @param prop 属性定义
     * @param propName 属性名称
     * @returns 安全的默认值
     */
    private getSafeDefaultValue(prop: any, propName: string): any {
        // 如果有默认值，优先使用默认值
        if (prop?.defaultValue !== undefined) {
            return prop.defaultValue;
        }

        // 根据属性类型返回安全的默认值
        if (!prop || !prop.propType) {
            return null;
        }

        if (typeof prop.propType === 'string') {
            switch (prop.propType) {
                case 'string': return propName || '';
                case 'number': return 0;
                case 'bool': return false;
                case 'array': return [];
                case 'object': return {};
                case 'func': return '() => {}';
                default: return null;
            }
        }
        else if (typeof prop.propType === 'object' && prop.propType.type === 'oneOf' && prop.propType.items?.length) {
            return prop.propType.items[0].name;
        }

        return null;
    }

    /**
     * 生成属性示例值
     * @param propName 指定的属性名称，如果提供则只生成该属性的值
     * @returns 属性值对象
     */
    private generatePropsExample(propName?: string): Record<string, any> {
        try {
            return this.schema.props.reduce((props, prop) => {
                // 如果指定了propName且当前prop不匹配，跳过处理
                if (propName && prop.name !== propName) {
                    // 特殊处理children属性
                    if (prop.name === 'children') {
                        props[prop.name] = prop.title || this.schema.title;
                    }
                    return props;
                }

                try {
                    // 生成属性值
                    props[prop.name] = this.generatePropValue(prop, prop.name);
                }
                catch (error) {
                    console.error(`Error generating value for property ${prop.name}:`, error);
                    // 出错时使用安全的默认值
                    props[prop.name] = this.getSafeDefaultValue(prop, prop.name);
                }
                return props;
            }, {} as Record<string, any>);
        }
        catch (error) {
            console.error('Error in generatePropsExample:', error);
            // 出错时返回空对象
            return {};
        }
    }

    /**
     * 格式化属性为组件模板字符串
     * @param props 属性对象
     * @returns 格式化后的属性字符串
     */
    private formatProps(props: Record<string, any>): string {
        try {
            return Object.entries(props)
                .filter(([_, value]) => value !== undefined && value !== null) // 过滤掉undefined和null值
                .map(([key, value]) => {
                    try {
                        if (typeof value === 'string') {
                            // 转义引号，防止生成无效的模板
                            const escapedValue = value.replace(/"/g, '\\"');
                            return `${key}="${escapedValue}"`;
                        }
                        else if (typeof value === 'boolean' && value) {
                            return key;
                        }
                        return `:${key}="${JSON.stringify(value)}"`;
                    }
                    catch (error) {
                        console.error(`Error formatting property ${key}:`, error);
                        return `${key}="[Error: Invalid value]"`;
                    }
                })
                .join(' ');
        }
        catch (error) {
            console.error('Error in formatProps:', error);
            return '';
        }
    }

    /**
     * 生成组件示例代码
     * @param propName 指定的属性名称
     * @returns 组件示例代码
     */
    private generateComponentExample(propName?: string): string {
        try {
            const props = this.generatePropsExample(propName);
            const childrenContent = props.children || '';
            delete props.children;
            const formattedProps = this.formatProps(props);
            return `<${this.schema.componentName} ${formattedProps}>${childrenContent}</${this.schema.componentName}>`;
        }
        catch (error) {
            console.error('Error in generateComponentExample:', error);
            // 出错时返回一个基本的组件示例
            return `<${this.schema.componentName}>${this.schema.title || ''}</${this.schema.componentName}>`;
        }
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
                    input: `请描述这个组件(${this.schema.componentName})的基本信息`,
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
                    // 基本关系描述
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

                    // 生成属性组合的代码示例
                    const targetProps = Array.isArray(relation.target) ? relation.target : [relation.target];
                    const combinedProps: Record<string, any> = {};

                    // 设置源属性值
                    const sourceProp = this.schema.props.find(p => p.name === relation.source);
                    if (sourceProp) {
                        if (typeof sourceProp.propType === 'object' && sourceProp.propType.type === 'oneOf' && sourceProp.propType.items?.length) {
                            // 对于枚举类型，使用第一个值作为示例
                            combinedProps[relation.source] = sourceProp.propType.items[0].name;
                        }
                        else if (sourceProp.propType === 'bool') {
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
                    const formattedProps = this.formatProps(combinedProps);
                    const childrenContent = combinedProps.children || '';
                    const componentExample = `<${this.schema.componentName} ${formattedProps}>${childrenContent}</${this.schema.componentName}>`;

                    // 生成组合场景示例
                    examples.push({
                        input: `如何同时使用${this.schema.title}组件(${this.schema.componentName})的${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性？`,
                        output: `${this.schema.title}组件中${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性的组合使用示例：\n\n${relation.effect}\n\n代码示例：\n${componentExample}`,
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

                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的属性之间有哪些重要的关联关系？`,
                        output: `${this.schema.title}组件(${this.schema.componentName})的属性关联关系：\n\n${this.schema.propRelations.map((relation, index) =>
                            `${index + 1}. ${relation.source}属性和${Array.isArray(relation.target) ? relation.target.join('、') : relation.target}属性：${relation.effect}`,
                        ).join('\n\n')}`,
                    });
                }
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

            // 暴露方法处理示例
            if (this.schema.exposes?.length) {
                this.schema.exposes.forEach((expose) => {
                    // 暴露方法基础描述
                    examples.push({
                        input: `${this.schema.title}组件(${this.schema.componentName})的${expose.name}方法是什么？`,
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

                    examples.push({
                        input: `如何调用${this.schema.title}组件(${this.schema.componentName})的${expose.name}方法？`,
                        output: `调用${expose.name}方法的示例代码：
${exampleCode}`,
                    });
                });
            }
        });

        return examples;
    }
}
