import { IPublicEnumDragObject, IPublicModelNode, IPublicTypeNodeSchema } from '..';
export interface IPublicTypeDragNodeObject<Node = IPublicModelNode> {
    type: IPublicEnumDragObject.Node;
    nodes: Node[];
}
export interface IPublicTypeDragNodeDataObject {
    type: IPublicEnumDragObject.NodeData;
    data: IPublicTypeNodeSchema | IPublicTypeNodeSchema[];
    thumbnail?: string;
    description?: string;
    [extra: string]: any;
}
export interface IPublicTypeDragAnyObject {
    type: string & Exclude<IPublicEnumDragObject, IPublicEnumDragObject.NodeData | IPublicEnumDragObject.Node>;
    [key: string]: any;
}
export type IPublicTypeDragObject<Node = IPublicModelNode> = IPublicTypeDragNodeObject<Node> | IPublicTypeDragNodeDataObject | IPublicTypeDragAnyObject;
export declare function isDragNodeObject<Node = IPublicModelNode>(obj: any): obj is IPublicTypeDragNodeObject<Node>;
export declare function isDragNodeDataObject(obj: any): obj is IPublicTypeDragNodeDataObject;
export declare function isDragAnyObject(obj: any): obj is IPublicTypeDragAnyObject;
//# sourceMappingURL=drag-object.d.ts.map