import { IPublicTypeAsset, IPublicTypeDevice, IPublicTypeDeviceStyleProps, IPublicTypePackage } from '..';
export interface IPublicTypeSimulatorProps {
    designMode?: 'live' | 'design' | 'preview' | 'extend' | 'border';
    device?: IPublicTypeDevice;
    deviceStyle?: IPublicTypeDeviceStyleProps;
    deviceClassName?: string;
    library?: IPublicTypePackage[];
    simulatorUrl?: IPublicTypeAsset;
    locale?: string;
    supportI18n?: string;
    [key: string]: any;
}
//# sourceMappingURL=simulator-props.d.ts.map