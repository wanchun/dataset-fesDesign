import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '树形控件',
    componentName: 'FTree',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTree',
        destructuring: true,
    },
    group: '原子组件',
    category: '信息展示',
    priority: 0,
    props: [
        {
            name: 'data',
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
            name: 'defaultExpandAll',
            propType: 'bool',
        },
        {
            name: 'v-model:expandedKeys',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'selectable',
            propType: 'bool',
        },
        {
            name: 'v-model:selectedKeys',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'multiple',
            propType: 'bool',
        },
        {
            name: 'cancelable',
            propType: 'bool',
        },
        {
            name: 'checkable',
            propType: 'bool',
        },
        {
            name: 'cascade',
            propType: 'bool',
        },
        {
            name: 'checkStrictly',
            propType: {
                type: 'oneOf',
                value: ['all', 'parent', 'child'],
            },
        },
        {
            name: 'v-model:checkedKeys',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'childrenField',
            propType: 'string',
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
            name: 'remote',
            propType: 'bool',
        },
        {
            name: 'loadData',
            propType: 'func',
        },
        {
            name: 'accordion',
            propType: 'bool',
        },
        {
            name: 'draggable',
            propType: 'bool',
        },
        {
            name: 'inline',
            propType: 'bool',
        },
        {
            name: 'virtualList',
            propType: 'bool',
        },
        {
            name: 'filterMethod',
            propType: 'func',
        },
    ],
    configure: {
        props: [
            {
                name: 'data',
                title: '节点数据',
                display: 'block',
                setter: [
                    'JsonSetter',
                    {
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
                                            setter: 'BoolSetter',
                                        },
                                        {
                                            name: 'disabled',
                                            title: '是否禁用',
                                            setter: 'BoolSetter',
                                        },
                                        {
                                            name: 'checkable',
                                            title: '可勾选',
                                            setter: 'BoolSetter',
                                        },
                                        {
                                            name: 'isLeaf',
                                            title: '是否叶子节点',
                                            setter: 'BoolSetter',
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
                    },
                ],
            },
            {
                title: '节点数据字段配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'childrenField',
                        title: 'children字段',
                        setter: 'StringSetter',
                        defaultValue: 'children',
                    },
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
                title: '展开配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'v-model:expandedKeys',
                        title: '展开的节点',
                        setter: 'VariableSetter',
                    },
                    {
                        name: 'accordion',
                        title: '手风琴模式',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'defaultExpandAll',
                        title: '默认展开所有选项',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                ],
            },
            {
                title: '选中配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'selectable',
                        title: '可选中',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'cancelable',
                        title: '可取消',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'multiple',
                        title: '可多选',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'v-model:selectedKeys',
                        title: '选中的节点',
                        setter: 'VariableSetter',
                    },
                ],
            },
            {
                title: '勾选配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'checkable',
                        title: '可勾选',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'cascade',
                        title: '父子关联',
                        description: '可勾选的节点选择完全受控（父子节点选中状态关联，选中父节点也会选中子节点）',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'checkStrictly',
                        title: '勾选策略',
                        setter: {
                            componentName: 'SelectSetter',
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
                        },
                        defaultValue: 'child',
                    },
                    {
                        name: 'v-model:checkedKeys',
                        title: '勾选的节点',
                        setter: 'VariableSetter',
                    },
                ],
            },
            {
                title: '异步加载配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'remote',
                        title: '是否异步加载',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'loadData',
                        title: '异步数据',
                        description: '异步加载数据的回调函数，参数是node，表示父节点，根据父节点查询子节点数据并返回',
                        condition: (target) => target.top.getPropValue('remote') === true,
                        setter: {
                            componentName: 'FunctionSetter',
                            props: { placeholder: '(node) => []' },
                            isRequired: false,
                        },
                    },
                ],
            },
            {
                title: '其他配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'draggable',
                        title: '可拖拽',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'inline',
                        title: '叶节点横排列',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'virtualList',
                        title: '是否虚拟滚动',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'filterMethod',
                        title: '过滤函数',
                        description: '自定义过滤函数， 筛选树节点（高亮），参数: \npattern-搜索值\n option-选项',
                        setter: {
                            componentName: 'FunctionSetter',
                            props: { placeholder: 'function(pattern, option) {\n\t return true\n}' },
                        },
                    },
                ],
            },
        ],
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onCheck',
                    params: [
                        {
                            name: 'value',
                            type: '{ checkedKeys, node, event, checked }',
                        },
                    ],
                },
                {
                    name: 'onExpand',
                    params: [
                        {
                            name: 'value',
                            type: '{ expandedKeys, node, event, expanded }',
                        },
                    ],
                },
                {
                    name: 'onSelect',
                    params: [
                        {
                            name: 'value',
                            type: '{ selectedKeys, node, event, selected }',
                        },
                    ],
                },
                {
                    name: 'onDragstart',
                    params: [
                        {
                            name: 'value',
                            type: '{ node: TreeOption, event: DragEvent }',
                        },
                    ],
                },
                {
                    name: 'onDragend',
                    params: [
                        {
                            name: 'value',
                            type: '{ node: TreeOption, event: DragEvent }',
                        },
                    ],
                },
                {
                    name: 'onDragenter',
                    params: [
                        {
                            name: 'value',
                            type: '{ node: TreeOption, event: DragEvent }',
                        },
                    ],
                },
                {
                    name: 'onDragleave',
                    params: [
                        {
                            name: 'value',
                            type: '{ node: TreeOption, event: DragEvent }',
                        },
                    ],
                },
                {
                    name: 'onDragover',
                    params: [
                        {
                            name: 'value',
                            type: '{ node: TreeOption, event: DragEvent }',
                        },
                    ],
                },
                {
                    name: 'onDrop',
                    params: [
                        {
                            name: 'value',
                            type: `{ node: TreeOption, dragNode: TreeOption, originNode, originDragNode, position: 'before' | 'inside' | 'after', event: DragEvent }`,
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '树形控件',
            schema: {
                componentName: 'FTree',
                props: {
                    data: [
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
            },
        },
    ],
};

export default meta;
