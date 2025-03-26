import type { IPublicModelSettingField, IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '表格',
    componentName: 'FTable',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTable',
        destructuring: true,
    },
    props: [
        {
            name: 'bordered',
            title: '边框',
            propType: 'bool',
        },
        {
            name: 'data',
            title: '数据源',
            propType: 'array',
        },
        {
            name: 'rowClassName',
            title: '行样式类名',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object', 'array', 'func'],
            },
        },
        {
            name: 'rowStyle',
            title: '行样式',
            propType: {
                type: 'oneOfType',
                value: ['object', 'func'],
            },
        },
        {
            name: 'emptyText',
            title: '空数据提示',
            propType: 'string',
        },
        {
            name: 'empty',
            title: '空数据插槽',
            propType: 'node',
        },
        {
            name: 'height',
            title: '高度',
            propType: 'number',
        },
        {
            name: 'rowKey',
            title: '高度',
            propType: {
                type: 'oneOfType',
                value: ['string', 'func'],
            },
        },
        {
            name: 'showHeader',
            title: '显示表头',
            propType: 'bool',
        },
        {
            name: 'spanMethod',
            title: '合并列',
            propType: 'func',
        },
        {
            name: 'virtualScroll',
            title: '虚拟滚动',
            propType: 'bool',
        },
        {
            name: 'size',
            title: '间距大小',
            propType: {
                type: 'oneOf',
                value: ['middle', 'small'],
            },
        },
        {
            name: 'layout',
            title: '布局方式',
            propType: {
                type: 'oneOf',
                value: ['fixed', 'auto'],
            },
        },
        {
            name: 'draggable',
            title: '拖拽',
            propType: 'bool',
        },
        {
            name: 'beforeDragend',
            title: '拖拽结束前钩子',
            propType: 'func',
        },
        {
            name: 'v-model:expandedKeys',
            title: '展开行的key',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'v-model:checkedKeys',
            title: '勾选行的key',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'columns',
            title: '列配置',
            propType: 'array',
        },
        {
            name: 'alwaysScrollbar',
            title: '是否总是显示滚动条',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                display: 'block',
                type: 'group',
                title: '数据源',
                items: [
                    {
                        name: 'data',
                        title: '数据',
                        setter: 'JsonSetter',
                    },
                    {
                        name: 'rowKey',
                        title: '行 key',
                        setter: ['StringSetter', 'FunctionSetter'],
                    },
                ],
            },
            {
                name: 'columns',
                title: '列配置',
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
                                            title: '标题',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'prop',
                                            title: '列字段',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'type',
                                            title: '类型',
                                            setter: {
                                                componentName: 'SelectSetter',
                                                props: {
                                                    options: [
                                                        {
                                                            value: 'default',
                                                            label: '数据',
                                                        },
                                                        {
                                                            value: 'selection',
                                                            label: '选择',
                                                        },
                                                        {
                                                            value: 'expand',
                                                            label: '展开',
                                                        },
                                                    ],
                                                },
                                            },
                                            defaultValue: 'default',
                                        },
                                        {
                                            name: 'minWidth',
                                            title: '最小宽度',
                                            setter: 'NumberSetter',
                                        },
                                        {
                                            name: 'width',
                                            title: '固定宽度',
                                            setter: 'NumberSetter',
                                        },
                                        {
                                            name: 'align',
                                            title: '对齐方式',
                                            setter: {
                                                componentName: 'SelectSetter',
                                                props: {
                                                    options: [
                                                        {
                                                            value: 'left',
                                                            label: '左对齐',
                                                        },
                                                        {
                                                            value: 'center',
                                                            label: '居中',
                                                        },
                                                        {
                                                            value: 'right',
                                                            label: '右对齐',
                                                        },
                                                    ],
                                                },
                                            },
                                            defaultValue: 'left',
                                        },
                                        {
                                            name: 'fixed',
                                            title: '是否固定',
                                            setter: {
                                                componentName: 'SelectSetter',
                                                props: {
                                                    options: [
                                                        {
                                                            value: false,
                                                            label: '不固定',
                                                        },
                                                        {
                                                            value: 'left',
                                                            label: '左',
                                                        },
                                                        {
                                                            value: 'right',
                                                            label: '右',
                                                        },
                                                    ],
                                                },
                                            },
                                            defaultValue: false,
                                        },
                                        {
                                            name: 'visible',
                                            title: '是否显示',
                                            setter: ['BoolSetter', 'ExpressionSetter'],
                                            defaultValue: true,
                                        },
                                        {
                                            name: 'multiple',
                                            title: '是否多选',
                                            setter: ['BoolSetter', 'ExpressionSetter'],
                                            defaultValue: true,
                                            condition: (target: IPublicModelSettingField) =>
                                                target.parent.getPropValue('type') === 'selection',
                                        },
                                        {
                                            name: 'ellipsis',
                                            title: '文本溢出省略',
                                            setter: ['BoolSetter', 'JsonSetter'],
                                            defaultValue: false,
                                        },
                                        {
                                            name: 'selectable',
                                            title: '可选择',
                                            description: '函数返回值用来决定这一行的 CheckBox 是否可以勾选',
                                            condition: (target: IPublicModelSettingField) =>
                                                target.parent.getPropValue('type') === 'selection',
                                            setter: [
                                                {
                                                    componentName: 'FunctionSetter',
                                                    props: { placeholder: '({ row, rowIndex }) => true' },
                                                },
                                                'ExpressionSetter',
                                            ],
                                        },
                                        {
                                            name: 'sortable',
                                            title: '可排序',
                                            setter: 'BoolSetter',
                                            defaultValue: false,
                                        },
                                        {
                                            name: 'sorter',
                                            title: '排序函数',
                                            description:
                                                '排序方法，如果设为 "default" 表格将会使用一个内置的排序函数；其他工作的方式类似 Array.sort 的对比函数',
                                            setter: [
                                                {
                                                    componentName: 'FunctionSetter',
                                                    props: { placeholder: '(rowA, rowB) => true' },
                                                },
                                                'ExpressionSetter',
                                            ],
                                        },
                                        {
                                            name: 'formatter',
                                            title: '格式化内容',
                                            setter: [
                                                {
                                                    componentName: 'FunctionSetter',
                                                    props: {
                                                        placeholder:
                                                            '({ row, column, rowIndex, columnIndex, cellValue }) => cellValue',
                                                    },
                                                },
                                                'ExpressionSetter',
                                            ],
                                        },
                                        {
                                            title: '自定义渲染',
                                            type: 'group',
                                            display: 'block',
                                            items: [
                                                {
                                                    name: 'render',
                                                    title: '自定义渲染',
                                                    setter: 'SlotSetter',
                                                    defaultValue: {
                                                        type: 'JSSlot',
                                                        params: ['slotProps'],
                                                        value: [],
                                                    },
                                                },
                                                {
                                                    name: 'renderHeader',
                                                    title: '自定义标题',
                                                    setter: 'SlotSetter',
                                                },
                                            ],
                                        },
                                        {
                                            name: 'action',
                                            title: '操作',
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
                                                                    title: '名称',
                                                                    setter: 'StringSetter',
                                                                },
                                                                {
                                                                    name: 'func',
                                                                    title: '动作',
                                                                    setter: {
                                                                        componentName: 'FunctionSetter',
                                                                        props: {
                                                                            placeholder: '(row) => console.log(row)',
                                                                        },
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            title: '样式',
                                            type: 'group',
                                            display: 'block',
                                            items: [
                                                {
                                                    name: 'colClassName',
                                                    title: '列样式类名称',
                                                    setter: {
                                                        componentName: 'StringSetter',
                                                        props: {
                                                            placeholder: 'my-col-class',
                                                        },
                                                    },
                                                },
                                                {
                                                    name: 'colStyle',
                                                    title: '列样式',
                                                    setter: 'StyleSetter',
                                                    display: 'popup',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            columns: [
                                {
                                    name: 'prop',
                                    title: '列字段',
                                    setter: 'StringSetter',
                                },
                                {
                                    name: 'label',
                                    title: '标题',
                                    setter: 'StringSetter',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                title: '功能配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'bordered',
                        title: '边框',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'horizontalLine',
                        title: '水平分割线',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'verticalLine',
                        title: '垂直分割线',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'showHeader',
                        title: '显示表头',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'height',
                        title: '固定高度',
                        setter: 'NumberSetter',
                    },
                    {
                        name: 'virtualScroll',
                        title: '虚拟滚动',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'layout',
                        title: '列布局方式',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        value: 'fixed',
                                        label: '等分',
                                    },
                                    {
                                        value: 'auto',
                                        label: '自适应',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'fixed',
                    },
                    {
                        name: 'size',
                        title: '间距大小',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        value: 'middle',
                                        label: '默认',
                                    },
                                    {
                                        value: 'small',
                                        label: '小',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'middle',
                    },
                    {
                        name: 'spanMethod',
                        title: '合并列',
                        setter: {
                            componentName: 'FunctionSetter',
                            props: {
                                placeholder:
                                    'function({row, column, rowIndex, columnIndex}) {\n\t return { rowspan: 2, colspan: 1 }\n}',
                            },
                        },
                    },
                    {
                        name: 'alwaysScrollbar',
                        title: '是否总是显示滚动条',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                ],
            },
            {
                title: '拖拽配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'draggable',
                        title: '是否拖拽',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'beforeDragend',
                        title: '拖拽结束前钩子',
                        description:
                            '拖拽结束之前调用，当返回 false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态',
                        setter: {
                            componentName: 'FunctionSetter',
                            props: {
                                placeholder: 'function(drag, drop){\n\t// return true/false\n}',
                            },
                        },
                    },
                ],
            },
            {
                title: '数据绑定',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'v-model:expandedKeys',
                        title: '展开行的key',
                        setter: [
                            'VariableSetter',
                            {
                                componentName: 'ArraySetter',
                                props: {
                                    itemSetter: ['StringSetter', 'NumberSetter'],
                                },
                            },
                        ],
                    },
                    {
                        name: 'v-model:checkedKeys',
                        title: '勾选行的key',
                        setter: [
                            'VariableSetter',
                            {
                                componentName: 'ArraySetter',
                                props: {
                                    itemSetter: ['StringSetter', 'NumberSetter'],
                                },
                            },
                        ],
                    },
                ],
            },
            {
                title: '空数据配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'emptyText',
                        title: '空数据提示',
                        setter: 'StringSetter',
                    },
                    {
                        name: 'empty',
                        title: '空数据插槽',
                        setter: 'SlotSetter',
                    },
                ],
            },
            {
                title: '行样式配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'rowClassName',
                        title: '行样式类名',
                        setter: {
                            componentName: 'StringSetter',
                            props: {
                                placeholder: 'my-row-class',
                            },
                        },
                    },
                    {
                        name: 'rowStyle',
                        title: '行样式',
                        setter: 'StyleSetter',
                        display: 'popup',
                    },
                ],
            },
        ],
        supports: {
            events: [
                {
                    name: 'onCellClick',
                    params: [
                        {
                            name: 'value',
                            type: '{row, column, cellValue, event}',
                        },
                    ],
                },
                {
                    name: 'onExpandChange',
                    params: [
                        {
                            name: 'value',
                            type: '{row, expanded}',
                        },
                    ],
                },
                {
                    name: 'onHeaderClick',
                    params: [
                        {
                            name: 'value',
                            type: '{column, event}',
                        },
                    ],
                },
                {
                    name: 'onRowClick',
                    params: [
                        {
                            name: 'value',
                            type: '{row, event}',
                        },
                    ],
                },
                {
                    name: 'onSelect',
                    params: [
                        {
                            name: 'value',
                            type: '{ selection, row, checked}',
                        },
                    ],
                },
                {
                    name: 'onSelectAll',
                    params: [
                        {
                            name: 'value',
                            type: '{ selection, checked}',
                        },
                    ],
                },
                {
                    name: 'onSelectionChange',
                    params: [
                        {
                            name: 'selection',
                            type: 'number[] | string[]',
                        },
                    ],
                },
                {
                    name: 'onDragstart',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                        {
                            name: 'item',
                            type: 'IRow',
                        },
                        {
                            name: 'index',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onDragend',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                        {
                            name: 'item',
                            type: 'IRow',
                        },
                        {
                            name: 'index',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onSortChange',
                    params: [
                        {
                            name: 'value',
                            type: `{prop?: string; order?: 'descend' | 'ascend'; sorter?: Function | 'default'}`,
                        },
                    ],
                },
            ],
        },
    },
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};

export default meta;
