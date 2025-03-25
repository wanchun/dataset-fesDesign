import { IPublicEnumLocationDetail, IPublicModelNode, IPublicTypeRect } from '..';
export interface IPublicTypeLocationChildrenDetail<Node = IPublicModelNode> {
    type: IPublicEnumLocationDetail.Children;
    index?: number | null;
    /**
     * 是否有效位置
     */
    valid?: boolean;
    edge?: DOMRect;
    near?: {
        node: Node;
        pos: 'before' | 'after' | 'replace';
        rect?: IPublicTypeRect;
        align?: 'V' | 'H';
    };
    focus?: {
        type: 'slots';
    } | {
        type: 'node';
        node: Node;
    };
}
export declare function isLocationChildrenDetail<Node = IPublicModelNode>(obj: any): obj is IPublicTypeLocationChildrenDetail<Node>;
//# sourceMappingURL=location-children-detail.d.ts.map