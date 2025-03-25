import { IPublicTypeContainerSchema, IPublicTypeJSFunction } from '../..';
export interface IPublicTypeStateCache {
    open: boolean;
    useCache?: IPublicTypeJSFunction;
}
/**
 * 页面容器
 */
export interface IPublicTypePageSchema extends IPublicTypeContainerSchema {
    componentName: 'Page';
    stateCache?: IPublicTypeStateCache;
}
//# sourceMappingURL=page-schema.d.ts.map