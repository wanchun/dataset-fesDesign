import type { IComponentMetadata } from '../type';

export const checkboxGroupMeta: IComponentMetadata = {
    title: '多选框组',
    componentName: 'FCheckboxGroup',
    description: '多选框组组件，用于处理多个选项的选择。支持垂直排列、禁用状态、自定义选项配置等功能，适用于表单、设置等需要多选的场景。',
    scenarios: [
        '表单多选：在表单中使用多选框组，允许用户选择多个选项，适用于问卷调查、权限设置等场景。',
        '设置选项：在设置页面中使用多选框组，允许用户配置多个选项，如通知设置、偏好设置等。',
        '数据筛选：在数据筛选场景中使用多选框组，允许用户通过多选条件进行数据筛选，如商品分类筛选、订单状态筛选等。',
        '权限管理：在权限管理系统中使用多选框组，允许用户选择多个权限项，适用于角色权限配置。',
        '批量操作：在表格中使用多选框组，允许用户选择多条数据进行批量操作，如批量删除、批量导出等。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单项场景下必须放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'array',
            description: '用于双向绑定选中的值，值为数组类型，包含所有选中的选项值',
        },
        {
            name: 'vertical',
            title: '垂直排列',
            propType: 'bool',
            description: '是否垂直排列选项',
            defaultValue: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            description: '是否禁用整个多选框组',
            defaultValue: false,
        },
        {
            name: 'options',
            title: '选项配置',
            propType: 'array',
            description: '多选框组的选项配置，每个选项包含value、label和disabled属性',
        },
        {
            name: 'valueField',
            title: '值字段',
            propType: 'string',
            description: '选项值对应的字段名，默认为\'value\'',
        },
        {
            name: 'labelField',
            title: '标签字段',
            propType: 'string',
            description: '选项标签对应的字段名，默认为\'label\'',
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '当选中值发生变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number | boolean',
                    description: '当前选中的值',
                },
            ],
        },
    ],
    slots: [],
};
