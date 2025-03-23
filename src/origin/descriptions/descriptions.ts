import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const DescriptionsMeta: IPublicTypeComponentDescription = {
    title: '描述列表',
    componentName: 'FDescriptions',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDescriptions',
        destructuring: true,
    },
    props: [
        {
            name: 'column',
            title: '总列数',
            propType: 'number',
            defaultValue: 3,
        },
        {
            name: 'labelAlign',
            title: '标签对齐方式',
            propType: {
                type: 'oneOf',
                value: ['left', 'center', 'right'],
            },
            defaultValue: 'left',
        },
        {
            name: 'labelPlacement',
            title: '标签位置',
            propType: {
                type: 'oneOf',
                value: ['left', 'top'],
            },
            defaultValue: 'left',
        },
        {
            name: 'separator',
            title: '分隔符',
            propType: 'string',
            defaultValue: ':',
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
        },
        {
            name: 'bordered',
            title: '边框',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'contentStyle',
            title: '内容样式',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object'],
            },
        },
        {
            name: 'labelStyle',
            title: '标签样式',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object'],
            },
        },
    ],
    configure: {
        supports: {
            style: true,
            class: true,
        },
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['FDescriptionsItem'],
            },
        },
    },
    snippets: [
        {
            title: '描述列表',
            schema: {
                componentName: 'FDescriptions',
                props: {
                    title: '身份信息',
                },
                children: [
                    {
                        componentName: 'FDescriptionsItem',
                        props: {
                            label: '姓名',
                        },
                        children: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: '万xx',
                                },
                            },
                        ],
                    },
                    {
                        componentName: 'FDescriptionsItem',
                        props: {
                            label: '性别',
                        },
                        children: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: '男',
                                },
                            },
                        ],
                    },
                    {
                        componentName: 'FDescriptionsItem',
                        props: {
                            label: '年龄',
                        },
                        children: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: '60',
                                },
                            },
                        ],
                    },
                    {
                        componentName: 'FDescriptionsItem',
                        props: {
                            label: '身份证',
                        },
                        children: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: '42xxxxxxxxxxxxx212',
                                },
                            },
                        ],
                    },
                    {
                        componentName: 'FDescriptionsItem',
                        props: {
                            label: '血型',
                        },
                        children: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: 'A',
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
