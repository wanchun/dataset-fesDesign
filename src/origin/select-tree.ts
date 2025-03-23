import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '树形选择器',
    componentName: 'FSelectTree',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSelectTree',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            title: '选中选项',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                    {
                        type: 'arrayOf',
                        value: {
                            type: 'oneOfType',
                            value: ['string', 'number'],
                        },
                    },
                ],
            },
        },
        {
            name: 'v-model:expandedKeys',
            title: '展开选项',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'appendToContainer',
            title: '弹窗是是否挂载到容器',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'getContainer',
            title: '配置挂载容器',
            propType: 'func',
        },
        {
            name: 'clearable',
            title: '是否显示清除图标',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'collapseTags',
            title: '选项是否折叠展示',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'collapseTagsLimit',
            title: '超出多少折叠',
            propType: 'number',
            defaultValue: 1,
        },
        {
            name: 'tagBordered',
            title: '选项是否有边框',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'emptyText',
            title: '选项为空的提示文字',
            propType: 'string',
            defaultValue: '无数据',
        },
        {
            name: 'multiple',
            title: '是否多选',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'multipleLimit',
            title: '最多选择几个',
            propType: 'number',
            defaultValue: 0,
        },
        {
            name: 'placeholder',
            title: '未选择的提示语',
            propType: 'string',
        },
        {
            name: 'filterable',
            title: '是否支持过滤选项',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'filter',
            title: '自定义过滤函数',
            propType: 'func',
        },
        {
            name: 'data',
            title: '选项数据',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'number'],
                            },
                        },
                        {
                            name: 'label',
                            title: '选项名称',
                            propType: 'string',
                        },
                        {
                            name: 'selectable',
                            title: '选项是否可选中',
                            propType: 'bool',
                        },
                        {
                            name: 'disabled',
                            title: '选项是否禁用',
                            propType: 'bool',
                        },
                        {
                            name: 'checkable',
                            title: '选项是否可勾选',
                            propType: 'bool',
                        },
                        {
                            name: 'isLeaf',
                            title: '选项是否是叶子节点',
                            propType: 'bool',
                        },
                        {
                            name: 'prefix',
                            title: '节点前缀',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'node'],
                            },
                        },
                        {
                            name: 'suffix',
                            title: '节点后缀',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'node'],
                            },
                        },
                        {
                            name: 'children',
                            title: '子选项数据',
                            propType: 'array',
                        },
                    ],
                },
            },
        },
        {
            name: 'accordion',
            title: '手风琴模式',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'defaultExpandAll',
            title: '默认展开所有选项',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'cascade',
            title: '父子节点选中是否关联',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'checkStrictly',
            title: '勾选策略',
            propType: {
                type: 'oneOf',
                value: ['all', 'parent', 'child'],
            },
            defaultValue: 'child',
        },
        {
            name: 'childrenField',
            title: 'children字段名',
            propType: 'string',
            defaultValue: 'children',
        },
        {
            name: 'valueField',
            title: 'value字段名',
            propType: 'string',
            defaultValue: 'value',
        },
        {
            name: 'labelField',
            title: 'label字段名',
            propType: 'string',
            defaultValue: 'label',
        },
        {
            name: 'remote',
            title: '是否异步加载',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'loadData',
            title: '异步加载数据函数',
            propType: 'func',
        },
        {
            name: 'inline',
            title: '叶子节点是否一行展示',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'virtualList',
            title: '是否虚拟滚动',
            propType: 'bool',
            defaultValue: false,
        },
    ],
    configure: {
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'string | number | []',
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
            ],
        },
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'v-model:expandedKeys',
                title: '展开选项',
                setter: 'VariableSetter',
            },
            {
                name: 'appendToContainer',
                title: '弹窗可挂载',
                description: '弹窗内容是否添加到指定的 DOM 元素',
                defaultValue: true,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
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
            {
                name: 'clearable',
                title: '可清除',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'disabled',
                title: '是否禁用',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'collapseTags',
                title: '选中项折叠',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'collapseTagsLimit',
                title: '不折叠个数',
                description: '多选时选中项超出限制个数后才会折叠',
                defaultValue: 1,
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'tagBordered',
                title: '选中项边框',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'emptyText',
                title: '选项空提示',
                defaultValue: '无数据',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'multiple',
                title: '是否多选',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'multipleLimit',
                title: '最多选几个',
                description: '多选时用户最多可以选择的项目数，为 0 则不限制',
                defaultValue: 0,
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'placeholder',
                title: '未选择提示',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'filterable',
                title: '可过滤',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
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
                name: 'data',
                title: '选项数据',
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
                                        title: '节点名称',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'value',
                                        title: '节点值',
                                        setter: ['StringSetter', 'NumberSetter'],
                                    },
                                    {
                                        name: 'selectable',
                                        title: '可选中',
                                        setter: ['BoolSetter', 'ExpressionSetter'],
                                    },
                                    {
                                        name: 'disabled',
                                        title: '是否禁用',
                                        setter: ['BoolSetter', 'ExpressionSetter'],
                                    },
                                    {
                                        name: 'checkable',
                                        title: '可勾选',
                                        setter: ['BoolSetter', 'ExpressionSetter'],
                                    },
                                    {
                                        name: 'isLeaf',
                                        title: '是否叶子节点',
                                        setter: ['BoolSetter', 'ExpressionSetter'],
                                        defaultValue: false,
                                    },
                                    {
                                        name: 'prefix',
                                        title: '前缀',
                                        setter: ['StringSetter', 'SlotSetter'],
                                    },
                                    {
                                        name: 'suffix',
                                        title: '后缀',
                                        setter: ['StringSetter', 'SlotSetter'],
                                    },
                                    {
                                        name: 'children',
                                        title: '子节点数据',
                                        display: 'block',
                                        setter: {
                                            componentName: 'ArraySetter',
                                            props: {
                                                infinite: true,
                                            },
                                        },
                                    },
                                ],
                            },
                        },
                        columns: [
                            {
                                name: 'label',
                                title: '节点名称',
                                setter: 'StringSetter',
                            },
                            {
                                name: 'value',
                                title: '节点值',
                                setter: ['StringSetter', 'NumberSetter'],
                            },
                        ],
                    },
                    defaultValue: [],
                },
            },
            {
                name: 'accordion',
                title: '手风琴模式',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'defaultExpandAll',
                title: '默认展开所有选项',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'cascade',
                title: '父子关联',
                description: '可勾选的节点选择完全受控（父子节点选中状态关联，选中父节点也会选中子节点）',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'checkStrictly',
                title: '勾选策略',
                defaultValue: 'child',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                value: 'all',
                                label: '所有关联节点',
                            },
                            {
                                value: 'parent',
                                label: '关联父节点',
                            },
                            {
                                value: 'child',
                                label: '关联子节点',
                            },
                        ],
                    },
                    defaultValue: 'all',
                },
            },
            {
                name: 'childrenField',
                title: 'children字段',
                defaultValue: 'children',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'valueField',
                title: 'value字段',
                defaultValue: 'value',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'labelField',
                title: 'label字段',
                defaultValue: 'label',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'remote',
                title: '异步加载数据',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'loadData',
                title: '异步数据',
                description: '异步加载数据的回调函数，参数是node，表示父节点，根据父节点查询子节点数据并返回',
                condition: (target) => target.top.getPropValue('remote') === true,
                setter: { componentName: 'FunctionSetter', props: { placeholder: '(node) => []' }, isRequired: false },
            },
            {
                name: 'inline',
                title: '叶节点横排列',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'virtualList',
                title: '是否虚拟滚动',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
        ],
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
