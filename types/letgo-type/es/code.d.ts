import { IEventHandler } from './event-handler';
import { IPublicTypeJSExpression } from '.';
export declare enum IEnumCodeType {
    JAVASCRIPT_QUERY = "query",
    JAVASCRIPT_FUNCTION = "function",
    JAVASCRIPT_COMPUTED = "computed",
    TEMPORARY_STATE = "temporaryState",
    LIFECYCLE_HOOK = "lifecycleHook"
}
export declare enum IEnumResourceType {
    Query = "query",
    RESTQuery = "rest"
}
export interface IFailureCondition {
    id: string;
    condition: string;
    message: string;
}
export declare enum IEnumRunCondition {
    Manual = "manual"
}
export declare enum IEnumCacheType {
    RAM = "ram",
    SESSION_STORAGE = "sessionStorage",
    LOCAL_STORAGE = "localStorage"
}
export interface IQueryResourceBase {
    type: IEnumCodeType.JAVASCRIPT_QUERY;
    id: string;
    resourceType: IEnumResourceType;
    enableTransformer?: boolean;
    transformer?: string;
    query: string;
    runCondition: IEnumRunCondition;
    runWhenPageLoads?: boolean;
    enableCaching?: boolean;
    cacheDuration?: number;
    cacheType?: IEnumCacheType;
    queryTimeout?: number;
    successEvent?: IEventHandler[];
    failureEvent?: IEventHandler[];
}
export interface IRestQueryResource extends IQueryResourceBase {
    resourceType: IEnumResourceType.RESTQuery;
    method: string;
    headers?: IPublicTypeJSExpression;
    api: string;
    params?: string;
}
export type IJavascriptQuery = IQueryResourceBase | IRestQueryResource;
export declare function isQueryResource(obj: any): obj is IJavascriptQuery;
export declare function isRestQueryResource(obj: any): obj is IRestQueryResource;
export interface IJavascriptFunction {
    id: string;
    type: IEnumCodeType.JAVASCRIPT_FUNCTION;
    funcBody: string;
}
export declare function isJavascriptFunction(obj: any): obj is IJavascriptFunction;
export interface IJavascriptComputed {
    id: string;
    type: IEnumCodeType.JAVASCRIPT_COMPUTED;
    funcBody: string;
}
export declare function isJavascriptComputed(obj: any): obj is IJavascriptComputed;
export interface ITemporaryState {
    id: string;
    type: IEnumCodeType.TEMPORARY_STATE;
    initValue: string;
}
export declare function isVariableState(obj: any): obj is ITemporaryState;
export interface ILifecycle<T = string> {
    id: string;
    type: IEnumCodeType.LIFECYCLE_HOOK;
    location: 'project' | 'page';
    hookName: T;
    funcBody: string;
}
export declare function isLifecycleHook(obj: any): obj is ILifecycle;
export type ICodeItem = ITemporaryState | IJavascriptComputed | IJavascriptFunction | IJavascriptQuery | ILifecycle;
export interface ICodeDirectory {
    id: string;
    code: ICodeItem[];
}
export declare function isDirectory(obj: any): obj is ICodeDirectory;
export interface ICodeStruct {
    directories: ICodeDirectory[];
    code: ICodeItem[];
}
export type ICodeItemOrDirectory = ICodeItem | ICodeDirectory;
//# sourceMappingURL=code.d.ts.map