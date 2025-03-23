import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const GridMeta: IPublicTypeComponentDescription = {
    title: '栅格',
    componentName: 'FGrid',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FGrid',
        destructuring: true,
    },
    group: '原子组件',
    category: '布局组件',
    priority: 0,
    props: [
        {
            name: 'align',
            propType: 'string',
        },
        {
            name: 'gutter',
            propType: {
                type: 'oneOfType',
                value: [
                    'number',
                    {
                        type: 'arrayOf',
                        value: 'number',
                    },
                ],
            },
        },
        {
            name: 'justify',
            propType: 'string',
        },
        {
            name: 'wrap',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                name: 'align',
                title: '垂直对齐',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                value: 'flex-start',
                                label: '上对齐',
                            },
                            {
                                value: 'center',
                                label: '居中',
                            },
                            {
                                value: 'flex-end',
                                label: '下对齐',
                            },
                            {
                                value: 'baseline',
                                label: '基线对齐',
                            },
                            {
                                value: 'stretch',
                                label: '上下拉齐',
                            },
                        ],
                    },
                },
                defaultValue: 'flex-start',
            },
            {
                name: 'gutter',
                title: '间隔',
                setter: [
                    'NumberSetter',
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'NumberSetter',
                            },
                        },
                    },
                ],
                defaultValue: 0,
            },
            {
                name: 'justify',
                title: '水平排列',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                value: 'flex-start',
                                label: '左',
                            },
                            {
                                value: 'center',
                                label: '居中',
                            },
                            {
                                value: 'flex-end',
                                label: '右',
                            },
                            {
                                value: 'space-around',
                                label: '空间环绕',
                            },
                            {
                                value: 'space-between',
                                label: '两端',
                            },
                        ],
                    },
                },
                defaultValue: 'flex-start',
            },
            {
                name: 'wrap',
                title: '自动换行',
                setter: 'BoolSetter',
                defaultValue: false,
            },
        ],
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['FGridItem'],
            },
        },
        supports: {
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '栅格',
            schema: {
                componentName: 'FGrid',
            },
        },
    ],
};
