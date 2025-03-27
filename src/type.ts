/**
 * 组件属性类型定义
 */

/**
 * 参数描述
 */
export interface IParameter {
    /**
     * 参数名称
     * @example 'event', 'value'
     */
    name: string

    /**
     * 参数类型
     * @example 'MouseEvent','string'
     */
    type: string

    /**
     * 参数描述
     * @example '事件对象', '当前值'
     */
    description?: string
}

/**
 * 选项描述
 */
export interface IPropOptionDescription {
    /**
     * 选项的值
     * @example 'primary'
     */
    value: any

    /**
     * 选项的标题
     * @example '主要按钮'
     */
    title: string

    /**
     * 选项的使用场景建议
     * @example '适用于表单提交、重要操作确认等需要突出强调的场景'
     */
    usage?: string
}

/**
 * 基础类型
 */
export type IBasicPropValueType = 'date' | 'string' | 'number' | 'bool' | 'node' | 'object' | 'array';

export const basicPropValueList = ['date', 'string', 'number', 'bool', 'node', 'object', 'array'];

export function isBasePropType(prop: IPropValueType): prop is IBasicPropValueType {
    return basicPropValueList.includes(prop as IBasicPropValueType);
}

/**
 * 枚举类型
 */
export interface IOneOfPropValueType {
    type: 'oneOf'
    /**
     * 属性的可选项列表，用于下拉选择等场景
     */
    items: Array<IPropOptionDescription>
}

/**
 * 联合类型
 */
export interface IOneOfTypePropValueType {
    type: 'oneOfType'
    value: IPropValueType[]
}

/**
 * 数组类型
 */
export interface IArrayOfPropValueType {
    type: 'arrayOf'
    value: IPropValueType
}

/**
 * 精确对象类型
 * 用于描述具有固定属性结构的对象
 */
export interface IExactPropValueType {
    type: 'exact'
    value: Array<IPropType>
}

/**
 * 形状对象类型
 * 用于描述可选属性的对象结构
 */
export interface IShapePropValueType {
    type: 'shape'
    value: Array<IPropType>
    required?: string[]
}

export interface IFuncPropValueType {
    type: 'func'
    /**
     * 事件的参数列表
     */
    parameters?: Array<IParameter>

    /**
     * 事件的返回类型
     */
    returnType?: IPropValueType
}

/**
 * 属性类型定义
 */
export type IPropValueType =
  | IBasicPropValueType
  | IOneOfPropValueType
  | IOneOfTypePropValueType
  | IArrayOfPropValueType
  | IExactPropValueType
  | IShapePropValueType
  | IFuncPropValueType;

export interface IPropType {

    /**
     * 属性名称
     * @example 'type', 'size'
     */
    name: string

    /**
     * 属性的中文标题
     * @example '类型', '尺寸'
     */
    title: string

    /**
     * 属性的数据类型
     * @example 'string', 'number', 'boolean'
     */
    valueType: IPropValueType

    /**
     * 属性的详细描述
     * @example '按钮的类型，影响按钮的样式'
     */
    description?: string

    /**
     * 属性的默认值
     * @example 'primary', 'medium'
     */
    defaultValue?: any

    /**
     * 属性是否必填
     * @default false
     */
    required?: boolean

    /**
     * 属性的示例值
     */
    example: any
}

export interface IEventType {
    /**
     * 事件名称
     * @example 'onClick', 'onChange'
     */
    name: string

    /**
     * 事件的描述信息
     * @example '点击按钮时触发'
     */
    description?: string

    /**
     * 事件的参数列表
     */
    parameters?: Array<IParameter>
}

export interface ISlotType {

    /**
     * 插槽名称
     * @example 'default', 'header'
     */
    name: string

    /**
     * 插槽描述
     * @example '按钮的内容', '头部内容'
     */
    description?: string

    /**
     * 插槽是否必填
     * @default false
     */
    required?: boolean

    /**
     * 插槽的作用域变量
     * @example { item: 'any', index: 'number' }
     */
    scope?: Record<string, any>

}

export interface IExposeType {
    /**
     * 导出名称
     * @example 'onClick', 'onChange'
     */
    name: string

    /**
     * 导出的描述信息
     * @example '点击按钮时触发'
     */
    description?: string

    /**
     * 导出函数的参数列表
     */
    parameters?: Array<{
        /**
         * 参数名称
         * @example 'event', 'value'
         */
        name: string

        /**
         * 参数类型
         * @example 'MouseEvent', 'string'
         */
        type: string

        /**
         * 参数描述
         * @example '事件对象', '当前值'
         */
        description?: string
    }>
}

/**
 * 组件元数据接口定义
 * 用于描述组件的所有配置信息，包括基本信息、属性、事件、插槽等
 */
export interface IComponentMetadata {
    /**
     * 组件基本信息
     */
    /**
     * 组件名称，用于标识组件的唯一性
     * @example 'FButton', 'FInput'
     */
    componentName: string

    /**
     * 组件中文标题，用于在设计器中显示
     * @example '按钮', '输入框'
     */
    title: string

    /**
     * 组件的详细描述信息，用于帮助用户理解组件的用途
     * @example '用于触发操作的基础按钮组件'
     */
    description?: string

    /**
     * 组件的父组件约束
     */
    parent?: {
        /**
         * 组件的通用类型约束，用于描述组件可以放置的通用容器类型
         * @example ['container', 'layout']
         */
        types?: string[]

        /**
         * 组件的特殊限制列表，用于描述在特定场景下必须作为某些组件的子组件
         * @example [{ parent: 'FForm', description: '表单场景下必须放在表单组件内' }]
         */
        restrictions?: Array<{
            parent: string | RegExp
            description: string
        }>
    }

    /**
     * 组件允许的子组件类型列表
     * @example ['FMenuItem', 'FSubMenu']
     */
    children?: Array<string | RegExp>

    /**
     * 组件的使用场景和最佳实践说明
     * @example ['表单提交按钮', '对话框确认按钮']
     */
    scenarios?: string[]

    /**
     * 组件属性间的联动关系描述
     * @example [{ source: 'hidden', target: 'showZero', effect: '隐藏徽标时，showZero属性不会生效', notes: [ '当hidden为true时，showZero属性无效', '适用于需要动态隐藏徽标的场景' ] }]
     */
    propRelations?: Array<{
        /**
         * 触发联动的属性名称
         */
        source: string
        /**
         * 受联动影响的属性名称
         */
        target: string | string[]
        /**
         * 联动的效果描述
         */
        effect: string
        /**
         * 其他相关信息
         */
        notes?: string[]
    }>

    /**
     * 组件属性定义列表
     * 用于描述组件支持的所有属性配置
     */
    props: Array<IPropType>

    /**
     * 组件事件定义列表
     * 用于描述组件支持的所有事件
     */
    events?: Array<IEventType>

    /**
     * 组件插槽定义列表
     * 用于描述组件支持的所有插槽
     */
    slots?: Array<ISlotType>

    /**
     * 组件暴露的方法定义列表
     * 用于描述组件暴露的所有方法
     */
    exposes?: Array<IExposeType>

    /**
     * 组件的模板示例列表
     */
    templates?: Array<{
        input: string
        output: string
    }>
}
