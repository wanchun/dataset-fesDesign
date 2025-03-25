import { IPublicModelDocumentModel, IPublicModelNode, IPublicTypeLocateEvent, IPublicTypeLocationDetail } from '..';
export interface IPublicTypeLocationData<DocumentModel = IPublicModelDocumentModel, Node = IPublicModelNode> {
    target: Node;
    detail: IPublicTypeLocationDetail<Node>;
    source: string;
    event: IPublicTypeLocateEvent<DocumentModel, Node>;
}
export declare function isLocationData<DocumentModel = IPublicModelDocumentModel, Node = IPublicModelNode>(obj: any): obj is IPublicTypeLocationData<DocumentModel, Node>;
//# sourceMappingURL=location-data.d.ts.map