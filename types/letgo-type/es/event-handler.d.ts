export declare enum IEnumEventHandlerAction {
    CONTROL_QUERY = "controlQuery",
    CONTROL_COMPONENT = "controlComponent",
    SET_TEMPORARY_STATE = "setTemporaryState",
    SET_LOCAL_STORAGE = "localStorage",
    RUN_FUNCTION = "runFunction"
}
export interface IEventHandler {
    id: string;
    action: IEnumEventHandlerAction;
    name: string;
    namespace: string;
    method?: string;
    onlyRunWhen?: string;
    waitMs?: number;
    waitType?: string;
    params?: string[];
}
export interface IEventHandlerMetaParam {
    field: string;
    type: string;
    children?: IEventHandlerMetaParam[];
}
export interface IEventHandlerMeta {
    action: {
        value: string;
        label: string;
    };
    namespace: string;
    method: string;
    params: IEventHandlerMetaParam[];
}
export interface IControlQueryAction extends IEventHandler {
    action: IEnumEventHandlerAction.CONTROL_QUERY;
    namespace: string;
    method: string;
}
export interface IControlComponentAction extends IEventHandler {
    action: IEnumEventHandlerAction.CONTROL_COMPONENT;
    namespace: string;
    method: string;
}
export interface ISetTemporaryStateAction extends IEventHandler {
    action: IEnumEventHandlerAction.SET_TEMPORARY_STATE;
    namespace: string;
    method: string;
    params: [string, string];
}
export interface ISetLocalStorageAction extends IEventHandler {
    namespace: IEnumEventHandlerAction.SET_LOCAL_STORAGE;
    action: IEnumEventHandlerAction.SET_LOCAL_STORAGE;
    method: string;
    params: [string, string];
}
export declare enum IEnumRunScript {
    BIND = "bind",
    PLAIN = "plain"
}
export interface IRunFunctionAction extends IEventHandler {
    action: IEnumEventHandlerAction.RUN_FUNCTION;
    namespace: string;
    params: string[];
    type?: IEnumRunScript;
    funcBody?: string;
}
export declare function isRunFunctionEventHandler(data: IEventHandler): data is IRunFunctionAction;
export declare function isSetTemporaryStateEventHandler(data: IEventHandler): data is ISetTemporaryStateAction;
export declare function isSetLocalStorageEventHandler(data: IEventHandler): data is ISetLocalStorageAction;
//# sourceMappingURL=event-handler.d.ts.map