import type { IComponentMetadata } from '../type';

export const optionMeta: IComponentMetadata = {
    title: '选项',
    componentName: 'FOption',
    description: '基础选项组件，用于在用户界面中展示和选择数据。通常作为下拉选择框、单选按钮组等组件的子组件使用。',
    scenarios: [
        '下拉选择框：作为FSelect组件的子组件，用于展示下拉选项，用户可以通过选择框选择不同的选项。',
        '单选按钮组：作为FRadioGroup组件的子组件，用于展示单选选项，用户可以通过单选按钮选择不同的选项。',
        '多选框组：作为FCheckboxGroup组件的子组件，用于展示多选选项，用户可以通过多选框选择不同的选项。',
        '列表选择：作为FList组件的子组件，用于展示列表选项，用户可以通过列表选择不同的选项。',
        '表格筛选：作为FTable组件的子组件，用于展示表格筛选选项，用户可以通过筛选条件选择不同的选项。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FSelect',
                description: '下拉选择框场景下必须放在FSelect组件内',
            },
            {
                parent: 'FRadioGroup',
                description: '单选按钮组场景下必须放在FRadioGroup组件内',
            },
            {
                parent: 'FCheckboxGroup',
                description: '多选框组场景下必须放在FCheckboxGroup组件内',
            },
            {
                parent: 'FList',
                description: '列表选择场景下必须放在FList组件内',
            },
            {
                parent: 'FTable',
                description: '表格筛选场景下必须放在FTable组件内',
            },
        ],
    },
    children: [],
    propRelations: [],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'bool',
            description: '用于双向绑定选项的选中状态',
        },
        {
            name: 'value',
            title: '内容',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                    'bool',
                ],
            },
            description: '选项的值，可以是字符串、数字或布尔值',
        },
        {
            name: 'label',
            title: '描述',
            propType: 'string',
            description: '选项的描述文本，用于展示给用户',
        },
        {
            name: 'disabled',
            title: '禁用',
            propType: 'bool',
            description: '是否禁用选项',
            defaultValue: false,
        },
    ],
    events: [],
    slots: [],
};
