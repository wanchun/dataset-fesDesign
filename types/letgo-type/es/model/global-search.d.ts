export type IPublicTypeGlobalSearchTarget = any;
export interface IPublicTypeGlobalSearchAction {
    type?: 'component' | 'state' | 'globalState' | 'classCode';
    name: string;
    id: string;
    fn: (target?: IPublicTypeGlobalSearchTarget) => boolean;
}
export interface IPublicModelGlobalSearch {
    actions: IPublicTypeGlobalSearchAction[];
    get componentsInstance(): Record<string, any>;
    get stateInstance(): Record<string, any>;
    get classInstance(): Record<string, any>;
    get globalStateInstance(): Record<string, any>;
    register: (action: IPublicTypeGlobalSearchAction) => void;
    trigger: (id: string, target?: IPublicTypeGlobalSearchTarget) => void;
}
//# sourceMappingURL=global-search.d.ts.map