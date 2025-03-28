import type { IComponentMetadata } from '../type';

export const checkboxGroupMeta: IComponentMetadata = {
    title: '多选框组',
    componentName: 'FCheckboxGroup',
    description: '多选框组组件，用于在一组可选项中进行多项选择。支持垂直/水平布局、禁用状态、自定义选项配置等功能，适用于表单数据收集、设置项选择等场景。',
    scenarios: [
        '表单数据收集：在表单中使用多选框组收集用户的多项选择数据，如兴趣爱好选择、权限设置等。',
        '筛选条件设置：在筛选面板中使用多选框组实现多条件筛选，支持灵活的条件组合。',
        '配置项选择：在系统设置中使用多选框组实现多项配置选择，如通知方式选择、显示项设置等。',
        '问卷调研：在问卷表单中使用多选框组收集多选题答案，支持自定义选项值和显示文本。',
        '权限管理：在权限配置界面使用多选框组实现角色权限的多项分配，支持禁用特定选项。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单项场景下必须放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'options.disabled',
            effect: '当组件禁用时，所有选项也会被禁用',
            notes: [
                '全局禁用优先级高于单个选项的禁用状态',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定值',
            valueType: 'array',
            description: '绑定值，表示当前选中的选项值数组',
            required: true,
            example: [
                'option1',
                'option2',
            ],
        },
        {
            name: 'vertical',
            title: '垂直排列',
            valueType: 'bool',
            description: '是否垂直排列选项',
            defaultValue: false,
            example: true,
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用整个多选框组',
            defaultValue: false,
            example: false,
        },
        {
            name: 'options',
            title: '选项配置',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            valueType: 'string',
                            required: true,
                            example: 'option1',
                        },
                        {
                            name: 'label',
                            title: '选项文本',
                            valueType: 'string',
                            required: true,
                            example: '选项1',
                        },
                        {
                            name: 'disabled',
                            title: '禁用状态',
                            valueType: 'bool',
                            example: false,
                        },
                    ],
                },
            },
            description: '配置选项数组，支持自定义选项值、显示文本和禁用状态',
            example: [
                {
                    value: 'option1',
                    label: '选项1',
                    disabled: false,
                },
                {
                    value: 'option2',
                    label: '选项2',
                    disabled: true,
                },
            ],
        },
        {
            name: 'valueField',
            title: '值字段名',
            valueType: 'string',
            description: '指定选项对象中作为值的字段名',
            defaultValue: 'value',
            example: 'id',
        },
        {
            name: 'labelField',
            title: '标签字段名',
            valueType: 'string',
            description: '指定选项对象中作为显示文本的字段名',
            defaultValue: 'label',
            example: 'name',
        },
    ],
    events: [
        {
            name: 'change',
            description: '选项变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'array',
                    description: '当前选中的值数组',
                },
            ],
        },
    ],
    templates: [
        {
            input: '基本使用',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="options" />',
        },
        {
            input: '垂直排列',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="options" vertical />',
        },
        {
            input: '禁用状态',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="options" disabled />',
        },
        {
            input: '自定义字段名',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="customOptions" value-field="id" label-field="name" />',
        },
        {
            input: '带变化事件',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="options" @change="handleChange" />',
        },
        {
            input: '部分禁用选项',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="[{value: \'1\', label: \'选项1\'}, {value: \'2\', label: \'选项2\', disabled: true}]" />',
        },
        {
            input: '表单中使用',
            output: '<FForm>\n  <FFormItem label="兴趣爱好">\n    <FCheckboxGroup v-model="hobbies" :options="hobbyOptions" />\n  </FFormItem>\n</FForm>',
        },
        {
            input: '动态选项',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="dynamicOptions" />',
        },
        {
            input: '大尺寸选项',
            output: '<FCheckboxGroup v-model="selectedOptions" :options="options" size="large" />',
        },
        {
            input: '带默认值',
            output: '<FCheckboxGroup v-model="[\'option1\']" :options="options" />',
        },
    ],
};
