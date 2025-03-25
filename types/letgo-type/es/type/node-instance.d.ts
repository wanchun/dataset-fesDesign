import { IPublicModelNode, IPublicTypeComponentRecord } from '..';
export interface IPublicTypeNodeInstance<T = IPublicTypeComponentRecord, Node = IPublicModelNode> {
    docId: string;
    nodeId: string;
    instance: T;
    node?: Node | null;
}
//# sourceMappingURL=node-instance.d.ts.map