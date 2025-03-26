import type { IComponentMetadata } from '../type';

export const radioGroupMeta: IComponentMetadata = {
    title: '单选组',
    componentName: 'FRadioGroup',
    description: '单选组组件用于在多个选项中进行单一选择。支持垂直排列、禁用状态、可取消选择等功能，适用于表单选择、设置选项等场景。',
    scenarios: [
        '表单选择：在表单中使用单选组进行性别、状态等单一选项的选择，确保用户只能选择一个选项。',
        '设置选项：在设置页面中使用单选组进行主题、语言等设置选项的选择，提供清晰的用户操作界面。',
        '筛选条件：在筛选条件中使用单选组进行单一条件的筛选，保持界面简洁和操作明确。',
        '按钮式单选：在需要突出操作按钮的场景中使用按钮式单选组，增强用户操作体验。',
        '禁用选项：在特定条件下禁用某些选项，防止用户选择不符合条件的选项。',
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
            {
                parent: 'FSpace',
                description: '间距布局场景下必须放在间距组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'optionType',
            target: [
                'type',
                'size',
                'bordered',
            ],
            effect: '当选项类型为按钮时，按钮样式、按钮大小和按钮边框属性生效',
            notes: [
                '选项类型为按钮时，按钮样式、按钮大小和按钮边框属性才会生效',
                '适用于按钮式单选组的样式配置',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'array',
            description: '用于绑定单选组的选中值，支持数组类型',
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
            description: '是否禁用整个单选组',
            defaultValue: false,
        },
        {
            name: 'cancelable',
            title: '是否可取消',
            propType: 'bool',
            description: '是否允许取消已选中的选项',
            defaultValue: true,
        },
        {
            name: 'options',
            title: '选项配置',
            propType: 'array',
            description: '单选组的选项配置，支持数组类型，包含value、label和disabled等字段',
        },
        {
            name: 'valueField',
            title: '选项值字段',
            propType: 'string',
            description: '指定选项值字段的名称',
        },
        {
            name: 'labelField',
            title: '选项名字段',
            propType: 'string',
            description: '指定选项名字段的名称',
        },
        {
            name: 'optionType',
            title: '选项类型',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'default',
                        title: '单选框',
                        usage: '常规的单选框样式，适用于大多数场景',
                    },
                    {
                        name: 'button',
                        title: '按钮',
                        usage: '按钮式单选组，适用于需要突出操作按钮的场景',
                    },
                ],
            },
            description: '单选组的选项类型，影响选项的展示样式',
            defaultValue: 'default',
        },
        {
            name: 'type',
            title: '按钮样式',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'default',
                        title: '默认',
                        usage: '常规的按钮样式，适用于一般操作',
                    },
                    {
                        name: 'primary',
                        title: '重要',
                        usage: '需要突出强调的主要操作按钮',
                    },
                ],
            },
            description: '按钮式单选组的样式类型，影响按钮的外观',
            defaultValue: 'default',
        },
        {
            name: 'size',
            title: '按钮大小',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表单内联按钮',
                    },
                    {
                        name: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                ],
            },
            description: '按钮式单选组的大小，影响按钮的展示尺寸',
            defaultValue: 'middle',
        },
        {
            name: 'bordered',
            title: '按钮是否边框',
            propType: 'bool',
            description: '按钮式单选组是否显示边框',
            defaultValue: true,
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '当单选组的选中值发生变化时触发',
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
