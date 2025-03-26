import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '选择器',
    componentName: 'FSelect',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSelect',
        destructuring: true,
    },
    props: [
        {
            name: 'options',
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
                            propType: 'string',
                        },
                    ],
                },
            },
        },
        {
            name: 'clearable',
            propType: 'bool',
        },
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'collapseTags',
            propType: 'bool',
        },
        {
            name: 'collapseTagsLimit',
            propType: 'number',
        },
        {
            name: 'tagBordered',
            propType: 'bool',
        },
        {
            name: 'emptyText',
            propType: 'string',
        },
        {
            name: 'appendToContainer',
            propType: 'bool',
        },
        {
            name: 'getContainer',
            propType: 'func',
        },
        {
            name: 'multiple',
            propType: 'bool',
        },
        {
            name: 'multipleLimit',
            propType: 'number',
        },
        {
            name: 'placeholder',
            propType: 'string',
        },
        {
            name: 'v-model',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'filterable',
            propType: 'bool',
        },
        {
            name: 'filter',
            propType: 'func',
        },
        {
            name: 'tag',
            propType: 'bool',
        },
        {
            name: 'remote',
            propType: 'bool',
        },
        {
            name: 'valueField',
            propType: 'string',
        },
        {
            name: 'labelField',
            propType: 'string',
        },
        {
            name: 'popperClass',
            propType: 'string',
        },
    ],
    configure: {
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'options',
                title: '选项',
                display: 'block',
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {
                                    items: [
                                        {
                                            name: 'value',
                                            title: '选项值',
                                            setter: ['StringSetter', 'NumberSetter'],
                                        },
                                        {
                                            name: 'label',
                                            title: '选项名',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'disabled',
                                            title: '是否禁用',
                                            setter: ['BoolSetter', 'ExpressionSetter'],
                                        },
                                    ],
                                },
                            },
                            columns: [
                                {
                                    name: 'value',
                                    title: '选项值',
                                    setter: ['StringSetter', 'NumberSetter'],
                                },
                                {
                                    name: 'label',
                                    title: '选项名',
                                    setter: 'StringSetter',
                                },
                            ],
                        },
                    },
                    'JsonSetter',
                ],
            },
            {
                title: '选项配置',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'valueField',
                        title: 'value字段',
                        setter: 'StringSetter',
                        defaultValue: 'value',
                    },
                    {
                        name: 'labelField',
                        title: 'label字段',
                        setter: 'StringSetter',
                        defaultValue: 'label',
                    },
                ],
            },
            {
                title: '基础配置',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'placeholder',
                        title: '未选择提示',
                        setter: 'StringSetter',
                        defaultValue: '请选择',
                    },
                    {
                        name: 'emptyText',
                        title: '选项空提示',
                        setter: 'StringSetter',
                        defaultValue: '无数据',
                    },
                    {
                        name: 'clearable',
                        title: '可清除',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'disabled',
                        title: '禁用',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'popperClass',
                        title: '弹出框样式',
                        setter: {
                            componentName: 'StringSetter',
                            props: { placeholder: 'my-class' },
                        },
                    },
                ],
            },
            {
                title: '多选配置',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'multiple',
                        title: '是否多选',
                        setter: 'BoolSetter',
                    },
                    {
                        name: 'multipleLimit',
                        title: '最多选几个',
                        description: '多选时用户最多可以选择的项目数，为 0 则不限制',
                        setter: 'NumberSetter',
                    },
                    {
                        name: 'collapseTags',
                        title: '选中项折叠',
                        description: '多选时选中项是否折叠展示',
                        setter: 'BoolSetter',
                    },
                    {
                        name: 'collapseTagsLimit',
                        title: '不折叠个数',
                        description: '多选时选中项超出限制个数后才会折叠',
                        setter: 'NumberSetter',
                        defaultValue: 1,
                    },
                    {
                        name: 'tagBordered',
                        title: '选中项边框',
                        description: '多选时，选中项展示是否有边框（不可修改时强制有边框）',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                ],
            },
            {
                title: '功能配置',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'filterable',
                        title: '可过滤',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'filter',
                        title: '过滤函数',
                        description: '自定义过滤函数，参数: \npattern-搜索值\n option-选项',
                        setter: {
                            componentName: 'FunctionSetter',
                            props: { placeholder: 'function(pattern, option) {\n\t return true\n}' },
                        },
                    },
                    {
                        name: 'tag',
                        title: '可创建选项',
                        setter: 'BoolSetter',
                        description: '是否可以创建新的选项，必须开启可过滤时使用',
                        defaultValue: false,
                    },
                    {
                        name: 'remote',
                        title: '可远程搜索',
                        description: '开始远程搜索时，当输入内容时触发search事件',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'virtualScroll',
                        title: '可虚拟滚动',
                        setter: ['BoolSetter', 'NumberSetter'],
                        defaultValue: true,
                    },
                ],
            },
            {
                title: '挂载配置',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'appendToContainer',
                        title: '弹窗可挂载',
                        description: '弹窗内容是否添加到指定的 DOM 元素',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'getContainer',
                        title: '挂载容器',
                        setter: {
                            componentName: 'FunctionSetter',
                            props: { placeholder: '() => document.body' },
                            isRequired: false,
                        },
                    },
                ],
            },
            {
                name: 'empty',
                title: '空内容',
                setter: 'SlotSetter',
            },
            {
                name: 'option',
                title: 'Option内容',
                description: 'slot参数：{ value, label, disabled, isSelected }',
                setter: 'SlotSetter',
            },
            {
                name: 'tag',
                title: '自定义标签',
                description:
                    '自定义选中选项在选择框如何展示，slot参数：{ option: SelectOption, handleClose: ()=> void }',
                setter: 'SlotSetter',
            },
            {
                name: 'header',
                title: '弹窗顶部内容',
                setter: 'SlotSetter',
            },
            {
                name: 'footer',
                title: '弹窗底部内容',
                setter: 'SlotSetter',
            },
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'string | number | boolean | object | []',
                        },
                    ],
                },
                {
                    name: 'onSearch',
                    params: [
                        {
                            name: 'query',
                            type: 'string',
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
                    name: 'onRemoveTag',
                    params: [
                        {
                            name: 'value',
                            type: 'string | number',
                        },
                    ],
                },
                {
                    name: 'onClear',
                    params: [],
                },
                {
                    name: 'onFocus',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onBlur',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
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
            class: true,
            style: true,
        },
    },
    group: '原子组件',
    category: '数据录入',
    priority: 2,
};

export default meta;
