import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const PreviewGroupMeta: IPublicTypeComponentDescription = {
    title: '图片组',
    componentName: 'FPreviewGroup',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FPreviewGroup',
        destructuring: true,
    },
    props: [
        {
            name: 'hideOnClickModal',
            title: '点击遮罩层关闭预览',
            propType: 'bool',
            defaultValue: false,
        },
    ],
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['FImage'],
            },
        },
        supports: {},
    },
    snippets: [
        {
            title: '图片组',
            schema: {
                componentName: 'FPreviewGroup',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
