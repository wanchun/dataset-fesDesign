import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '下拉菜单',
    componentName: 'FDropdown',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDropdown',
        destructuring: true,
    },
    props: [
        {
            name: 'options',
            title: '下拉选项',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'exact',
                    value: [
                        {
                            name: 'value',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'number'],
                            },
                        },
                        {
                            name: 'label',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'func'],
                            },
                        },
                        {
                            name: 'disabled',
                            propType: 'bool',
                        },
                        {
                            name: 'icon',
                            propType: 'func',
                        },
                    ],
                },
            },
        },
        {
            name: 'trigger',
            title: '触发方式',
            propType: 'string',
        },
        {
            name: 'placement',
            propType: 'string',
        },
        {
            name: 'offset',
            propType: 'string',
        },
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'arrow',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                name: 'options',
                title: '下拉选项',
                display: 'block',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                                items: [
                                    {
                                        name: 'label',
                                        title: '选项名',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'value',
                                        title: '选项值',
                                        setter: ['StringSetter', 'NumberSetter'],
                                    },
                                    {
                                        name: 'disabled',
                                        title: '是否禁用',
                                        setter: ['BoolSetter', 'ExpressionSetter'],
                                    },
                                    {
                                        name: 'icon',
                                        title: '图标',
                                        setter: {
                                            componentName: 'IconSetter',
                                            props: {
                                                type: 'node',
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        columns: [
                            {
                                name: 'label',
                                title: '选项名',
                                setter: 'StringSetter',
                            },
                            {
                                name: 'value',
                                title: '选项值',
                                setter: ['StringSetter', 'NumberSetter'],
                            },
                        ],
                    },
                },
            },
            {
                title: '功能',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'trigger',
                        title: '触发方式',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'hover',
                                        label: '鼠标悬浮',
                                    },
                                    {
                                        value: 'click',
                                        label: '鼠标左击',
                                    },
                                    {
                                        value: 'focus',
                                        label: '焦点',
                                    },
                                    {
                                        value: 'contextmenu',
                                        label: '鼠标右击',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'click',
                    },
                    {
                        name: 'placement',
                        title: '触发位置',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'top',
                                        label: '上边居中',
                                    },
                                    {
                                        value: 'top-start',
                                        label: '上边起始位置',
                                    },
                                    {
                                        value: 'top-end',
                                        label: '上边终点位置',
                                    },
                                    {
                                        value: 'bottom',
                                        label: '下边居中',
                                    },
                                    {
                                        value: 'bottom-start',
                                        label: '下边起始位置',
                                    },
                                    {
                                        value: 'bottom-end',
                                        label: '下边终点位置',
                                    },
                                    {
                                        value: 'left',
                                        label: '左边居中',
                                    },
                                    {
                                        value: 'left-start',
                                        label: '左边起始位置',
                                    },
                                    {
                                        value: 'left-end',
                                        label: '左边终点位置',
                                    },
                                    {
                                        value: 'right',
                                        label: '右边居中',
                                    },
                                    {
                                        value: 'right-start',
                                        label: '右边起始位置',
                                    },
                                    {
                                        value: 'right-end',
                                        label: '右边终点位置',
                                    },
                                ],
                            },
                            defaultValue: 'bottom',
                        },
                    },
                    {
                        name: 'offset',
                        title: '弹窗距离',
                        setter: 'NumberSetter',
                        defaultValue: 6,
                    },
                    {
                        name: 'arrow',
                        title: '显示箭头',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'disabled',
                        title: '禁用',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                ],
            },
        ],
        supports: {
            style: true,
            class: true,
            events: [
                {
                    name: 'onClick',
                    params: [
                        {
                            name: 'value',
                            type: 'string | number',
                        },
                    ],
                },
                {
                    name: 'onVisibleChange',
                    params: [
                        {
                            name: 'visible',
                            type: 'boolean',
                        },
                    ],
                },
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
        component: {
            isContainer: true,
            dialogControlProp: 'visible',
        },
    },
    snippets: [
        {
            title: '下拉菜单',
            schema: {
                componentName: 'FDropdown',
                props: {
                    options: [
                        {
                            value: '1',
                            label: '1',
                        },
                        {
                            value: '2',
                            label: '2',
                        },
                    ],
                },
                children: [
                    {
                        componentName: 'FButton',
                        props: {
                            children: '下拉菜单',
                        },
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '导航组件',
    priority: 0,
};

export default meta;
