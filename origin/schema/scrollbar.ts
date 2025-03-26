import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '滚动条',
    componentName: 'FScrollbar',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FScrollbar',
        destructuring: true,
    },
    group: '原子组件',
    category: '通用组件',
    priority: 0,
    props: [
        {
            name: 'height',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'maxHeight',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'native',
            propType: 'bool',
        },
        {
            name: 'noresize',
            propType: 'bool',
        },
        {
            name: 'always',
            propType: 'bool',
        },
        {
            name: 'minSize',
            propType: 'number',
        },
        {
            name: 'shadow',
            propType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    {
                        type: 'shape',
                        value: [
                            {
                                name: 'x',
                                propType: 'bool',
                            },
                            {
                                name: 'y',
                                propType: 'bool',
                            },
                        ],
                    },
                ],
            },
        },
        {
            name: 'containerClass',
            propType: {
                type: 'oneOfType',
                value: ['array', 'object', 'string'],
            },
        },
        {
            name: 'containerStyle',
            propType: {
                type: 'oneOfType',
                value: ['array', 'object', 'string'],
            },
        },
        {
            name: 'contentStyle',
            propType: {
                type: 'oneOfType',
                value: ['array', 'object', 'string'],
            },
        },
        {
            name: 'horizontalRatioStyle',
            propType: {
                type: 'oneOfType',
                value: ['array', 'object', 'string'],
            },
        },
        {
            name: 'verticalRatioStyle',
            propType: {
                type: 'oneOfType',
                value: ['array', 'object', 'string'],
            },
        },
    ],
    configure: {
        props: [
            {
                name: 'height',
                title: '固定高度',
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'maxHeight',
                title: '最大高度',
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'native',
                title: '原生滚动样式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'noresize',
                title: '不响应容器尺寸变化',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'always',
                title: '总是显示滚动条',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'minSize',
                title: '滑块最小尺寸',
                setter: 'NumberSetter',
                defaultValue: 20,
            },
            {
                name: 'shadow',
                title: '待滚动区域阴影',
                setter: [
                    'BoolSetter',
                    {
                        componentName: 'ObjectSetter',
                        props: {
                            items: [
                                {
                                    name: 'x',
                                    title: '水平轴',
                                    setter: 'BoolSetter',
                                },
                                {
                                    name: 'y',
                                    title: '垂直轴',
                                    setter: 'BoolSetter',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                name: 'containerClass',
                title: '包裹容器类名',
                setter: 'StringSetter',
            },
            {
                name: 'containerStyle',
                title: '包裹容器样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
            {
                name: 'contentStyle',
                title: '内容样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
            {
                name: 'horizontalRatioStyle',
                title: '水平滚动条样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
            {
                name: 'verticalRatioStyle',
                title: '垂直滚动条样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
        ],
        component: {
            isContainer: true,
        },
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onScroll',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '滚动条',
            schema: {
                componentName: 'FScrollbar',
                props: {},
            },
        },
    ],
};

export default meta;
