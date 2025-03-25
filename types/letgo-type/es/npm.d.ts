import { IPublicTypeComponentSchema, IPublicTypeProjectSchema } from './type/schema/index';
/**
 * npm 源引入完整描述对象
 */
export interface IPublicTypeNpmInfo {
    /**
     * 源码组件库名
     */
    package: string;
    /**
     * 源码组件版本号
     */
    version?: string;
    /**
     * 是否解构
     */
    destructuring?: boolean;
    /**
     * 是否组装 * as 导入
     */
    assembling?: boolean;
    /**
     * 组件名
     */
    componentName?: string;
    /**
     * 源码组件名称
     */
    exportName?: string;
    /**
     * 子组件名
     */
    subName?: string;
    /**
     * 组件路径
     */
    main?: string;
}
export interface IPublicTypeLowCodeComponent {
    /**
     * 研发模式
     */
    devMode: 'lowCode';
    /**
     * 组件名称
     */
    componentName: string;
    /**
     * 低代码组件的schema
     */
    schema: IPublicTypeProjectSchema<IPublicTypeComponentSchema>;
}
export type IPublicTypeProCodeComponent = IPublicTypeNpmInfo;
export type IPublicTypeComponentMap = IPublicTypeProCodeComponent | IPublicTypeLowCodeComponent;
export declare function isProCodeComponentType(desc: IPublicTypeComponentMap): desc is IPublicTypeProCodeComponent;
export declare function isLowCodeComponentType(desc: IPublicTypeComponentMap): desc is IPublicTypeLowCodeComponent;
export type IPublicTypeComponentsMap = IPublicTypeComponentMap[];
//# sourceMappingURL=npm.d.ts.map