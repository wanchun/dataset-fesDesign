import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文本省略',
    componentName: 'FEllipsis',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FEllipsis',
        destructuring: true,
    },
    props: [
        {
            name: 'line',
            propType: 'number',
        },
        {
            name: 'content',
            title: '文本内容',
            propType: 'string',
        },
    ],
    configure: {
        props: [
            {
                name: 'content',
                title: '文本内容',
                setter: 'StringSetter',
            },
            {
                name: 'tooltip',
                title: '弹出内容',
                setter: 'BoolSetter',
            },
            {
                name: 'line',
                title: '多行省略',
                setter: 'NumberSetter',
                defaultValue: 1,
            },
            {
                name: 'tooltipSlot',
                title: '自定义弹出内容',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    title: '自定义弹出内容',
                    name: 'tooltip',
                    params: [],
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
            title: '文本省略',
            schema: {
                componentName: 'FEllipsis',
                props: {
                    content: '文本内容',
                    style: {
                        width: '50px',
                    },
                },
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};

export default meta;
