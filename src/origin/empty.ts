import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '空数据',
    description: '空数据时的占位提示',
    componentName: 'FEmpty',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FEmpty',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'description',
                title: '描述信息',
                setter: 'StringSetter',
            },
            {
                name: 'imageSrc',
                title: '图像地址',
                setter: 'StringSetter',
            },
            {
                name: 'imageStyle',
                title: '自定义样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
            {
                name: 'image',
                title: '自定义图片',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'image',
                    value: [],
                },
            },
            {
                name: 'descriptionSlot',
                title: '自定义描述',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'description',
                    value: [],
                },
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '空数据',
            schema: {
                componentName: 'FEmpty',
                props: {
                    children: [],
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 3,
};

export default meta;
