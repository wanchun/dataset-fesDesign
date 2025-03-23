import type { IPublicModelSettingField, IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: 'Tab页',
    componentName: 'FTabs',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTabs',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            title: '激活面板',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'panes',
            title: '页签配置',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'name',
                            title: '名称',
                            propType: 'string',
                        },
                        {
                            name: 'value',
                            title: '值',
                            propType: 'string',
                        },
                        {
                            name: 'disabled',
                            title: '禁用',
                            propType: 'bool',
                        },
                        {
                            name: 'closable',
                            title: '关闭按钮',
                            propType: 'bool',
                        },
                        {
                            name: 'displayDirective',
                            title: '关闭按钮',
                            propType: {
                                type: 'oneOf',
                                value: ['if', 'show', 'show:lazy'],
                            },
                        },
                        {
                            name: 'render',
                            title: '渲染内容',
                            propType: 'node',
                        },
                        {
                            name: 'renderTab',
                            title: '渲染页签',
                            propType: 'node',
                        },
                    ],
                },
            },
        },
        {
            name: 'position',
            title: '页签位置',
            propType: {
                type: 'oneOf',
                value: ['left', 'top', 'right', 'bottom'],
            },
        },
        {
            name: 'type',
            title: '页签类型',
            propType: {
                type: 'oneOf',
                value: ['line', 'card'],
            },
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
        },
        {
            name: 'closeMode',
            title: '关闭按钮显示类型',
            propType: {
                type: 'oneOf',
                value: ['visible', 'hover'],
            },
        },
        {
            name: 'transition',
            title: '动画',
            propType: 'bool',
        },
        {
            name: 'prefix',
            title: '前置内容',
            propType: 'node',
        },
        {
            name: 'suffix',
            title: '后置内容',
            propType: 'node',
        },
    ],
    configure: {
        props: [
            {
                name: 'v-model',
                title: '激活页签',
                setter: 'VariableSetter',
            },
            {
                name: 'panes',
                title: '页签配置',
                display: 'block',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                                items: [
                                    {
                                        name: 'name',
                                        title: '标题',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'value',
                                        title: '页签key',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'render',
                                        title: '渲染内容',
                                        setter: 'SlotSetter',
                                        defaultValue: {
                                            type: 'JSSlot',
                                            value: [],
                                        },
                                    },
                                    {
                                        name: 'disabled',
                                        title: '禁用',
                                        setter: 'BoolSetter',
                                        defaultValue: false,
                                    },
                                    {
                                        name: 'closable',
                                        title: '可关闭',
                                        setter: 'BoolSetter',
                                        defaultValue: false,
                                    },
                                    {
                                        name: 'displayDirective',
                                        title: '子项加载策略',
                                        setter: {
                                            componentName: 'SelectSetter',
                                            props: {
                                                options: [
                                                    {
                                                        value: 'if',
                                                        label: '切换重新加载',
                                                    },
                                                    {
                                                        value: 'show',
                                                        label: '默认加载',
                                                    },
                                                    {
                                                        value: 'show:lazy',
                                                        label: '显示时才加载',
                                                    },
                                                ],
                                            },
                                        },
                                        defaultValue: 'if',
                                    },

                                    {
                                        name: 'renderTab',
                                        title: '自定义标题',
                                        setter: 'SlotSetter',
                                    },
                                ],
                            },
                        },
                        columns: [
                            {
                                name: 'name',
                                title: '标题',
                                setter: 'StringSetter',
                            },
                            {
                                name: 'value',
                                title: '页签key',
                                setter: 'StringSetter',
                            },
                        ],
                        defaultItemValue: (field: IPublicModelSettingField): any => {
                            const value = field.getValue();
                            return {
                                name: '默认标题',
                                value: `${value.length + 1}`,
                                render: {
                                    type: 'JSSlot',
                                    title: '渲染内容',
                                    value: [],
                                },
                            };
                        },
                    },
                },
            },
            {
                title: '其他配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'position',
                        title: '页签位置',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'left',
                                        label: '左',
                                    },
                                    {
                                        value: 'right',
                                        label: '右',
                                    },
                                    {
                                        value: 'top',
                                        label: '上',
                                    },
                                    {
                                        value: 'bottom',
                                        label: '下',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'top',
                    },
                    {
                        name: 'type',
                        title: '页签类型',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'line',
                                        label: '线型',
                                    },
                                    {
                                        value: 'card',
                                        label: '卡片样式',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'line',
                    },
                    {
                        name: 'closable',
                        title: '可关闭',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'closeMode',
                        title: '关闭按钮触发时机',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'visible',
                                        label: '一直显示',
                                    },
                                    {
                                        value: 'hover',
                                        label: '悬浮显示',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'visible',
                    },
                    {
                        name: 'transition',
                        title: '切换动画',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                ],
            },
            {
                title: '插槽',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'prefix',
                        title: '前置内容',
                        setter: 'SlotSetter',
                    },
                    {
                        name: 'suffix',
                        title: '后置内容',
                        setter: 'SlotSetter',
                    },
                ],
            },
        ],
        component: {},
        supports: {
            events: [
                {
                    name: 'onClose',
                    params: [
                        {
                            name: 'key',
                            type: 'string | number',
                        },
                    ],
                },
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'key',
                            type: 'string | number',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: 'Tab页',
            schema: {
                componentName: 'FTabs',
                props: {
                    panes: [
                        {
                            name: '标题',
                            value: '1',
                            render: {
                                type: 'JSSlot',
                                value: [],
                            },
                        },
                    ],
                },
            },
        },
    ],
    group: '原子组件',
    category: '导航组件',
    priority: 0,
};

export default meta;
