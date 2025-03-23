import { FesDesignName, FesDesignVersion } from './constants';
import type { IPublicTypeComponentDescription } from '@webank/letgo-types';

const meta: IPublicTypeComponentDescription = {
    title: '拖拽上传容器',
    componentName: 'FUploadDragger',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FUploadDragger',
        destructuring: true,
    },
    props: [
        {
            name: 'children',
            title: '内容',
            propType: 'string',
        },
    ],
};

export default meta;
