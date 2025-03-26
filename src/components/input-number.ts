import type { IComponentMetadata } from '../type';

export const inputNumberMeta: IComponentMetadata = {
    title: '数字输入框',
    componentName: 'FInputNumber',
    description: '数字输入框组件，用于输入和调整数字值。支持设置最小值、最大值、步长和精度，适用于需要精确数字输入的场景。',
    scenarios: [
        '表单输入：在表单中使用数字输入框，用于输入年龄、数量等数字信息，确保用户输入符合业务要求。',
        '计数器：在商品数量选择器中使用数字输入框，支持通过加减按钮或直接输入调整数量，提升用户体验。',
        '价格输入：在价格输入框中使用数字输入框，支持设置精度，确保价格输入的准确性。',
        '范围限制：在需要限制输入范围的场景中使用数字输入框，通过设置最小值和最大值，防止用户输入无效数据。',
        '步长调整：在需要精确调整数值的场景中使用数字输入框，通过设置步长，方便用户快速调整数值。',
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
            source: 'min',
            target: 'max',
            effect: '最小值不能大于最大值',
            notes: [
                '当设置最小值时，最大值必须大于或等于最小值',
                '适用于需要限制输入范围的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '输入值',
            propType: 'number',
            description: '绑定的数字值，支持双向绑定',
        },
        {
            name: 'min',
            title: '最小值',
            propType: 'number',
            description: '允许输入的最小值',
        },
        {
            name: 'max',
            title: '最大值',
            propType: 'number',
            description: '允许输入的最大值',
        },
        {
            name: 'step',
            title: '计数器步长',
            propType: 'number',
            description: '每次调整数值的步长',
            defaultValue: 1,
        },
        {
            name: 'placeholder',
            title: '输入提示',
            propType: 'string',
            description: '输入框为空时显示的提示文本',
        },
        {
            name: 'precision',
            title: '输入值精度',
            propType: 'number',
            description: '输入值的精度，即小数点后的位数',
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            description: '是否禁用输入框',
            defaultValue: false,
        },
        {
            name: 'autofocus',
            title: '自动聚焦',
            propType: 'bool',
            description: '是否在组件挂载时自动聚焦',
            defaultValue: false,
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '输入值变化时触发',
            parameters: [
                {
                    name: 'val',
                    type: 'number',
                    description: '当前输入值',
                },
                {
                    name: 'oldVal',
                    type: 'number',
                    description: '变化前的输入值',
                },
            ],
        },
        {
            name: 'onFocus',
            description: '输入框获得焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '焦点事件对象',
                },
            ],
        },
        {
            name: 'onBlur',
            description: '输入框失去焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '失去焦点事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'prefix',
            description: '输入框前缀内容，可以是图标或其他元素',
        },
        {
            name: 'suffix',
            description: '输入框后缀内容，可以是图标或其他元素',
        },
    ],
};
