import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const LayoutMeta: IPublicTypeComponentDescription = {
    title: '布局容器',
    componentName: 'FLayout',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FLayout',
        destructuring: true,
    },
    props: [
        {
            name: 'embedded',
            propType: 'bool',
        },
        {
            name: 'fixed',
            propType: 'bool',
        },
        {
            name: 'containerClass',
            propType: 'string',
        },
        {
            name: 'containerStyle',
            propType: 'object',
        },
    ],
    configure: {
        props: [
            {
                name: 'embedded',
                title: '反色背景',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'fixed',
                title: '浮动模式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'containerStyle',
                title: '内容样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
        ],
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['FHeader', 'FAside', 'FMain', 'FFooter', 'FLayout'],
            },
        },
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '混合布局',
            schema: {
                componentName: 'FLayout',
                props: {
                    fixed: true,
                },
                children: [
                    {
                        componentName: 'FAside',
                    },
                    {
                        componentName: 'FLayout',
                        children: [
                            {
                                componentName: 'FHeader',
                            },
                            {
                                componentName: 'FMain',
                            },
                            {
                                componentName: 'FFooter',
                            },
                        ],
                    },
                ],
            },
        },
        {
            title: '左右布局',
            schema: {
                componentName: 'FLayout',
                props: {
                    fixed: true,
                },
                children: [
                    {
                        componentName: 'FAside',
                    },
                    {
                        componentName: 'FMain',
                    },
                ],
            },
        },
        {
            title: '上下布局',
            schema: {
                componentName: 'FLayout',
                props: {
                    fixed: true,
                },
                children: [
                    {
                        componentName: 'FHeader',
                    },
                    {
                        componentName: 'FMain',
                    },
                    {
                        componentName: 'FFooter',
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '布局组件',
    priority: 0,
};
