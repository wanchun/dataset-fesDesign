import { IPublicTypeNodeData, IPublicTypeNodeSchema } from '../..';
/**
 * Slot schema 描述
 */
export interface IPublicTypeSlotSchema extends IPublicTypeNodeSchema {
    componentName: 'Slot';
    title?: string;
    name?: string;
    props?: {
        params?: string[];
    };
    children?: IPublicTypeNodeData[] | IPublicTypeNodeData;
}
export declare function isSlotSchema(data: any): data is IPublicTypeSlotSchema;
//# sourceMappingURL=slot-schema.d.ts.map