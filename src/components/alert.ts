import type { IComponentMetadata } from '../type';

export const alertMeta: IComponentMetadata = {
    title: '警告提示',
    componentName: 'FAlert',
    description: '用于展示系统或操作反馈的提示信息，支持成功、信息、警告和错误四种类型，可自定义消息内容、图标和关闭行为，适用于表单验证、操作结果反馈等场景。',
    scenarios: [
        '表单验证：在表单提交时使用error类型提示用户输入错误，提供明确的错误信息，帮助用户快速定位问题。',
        '操作成功反馈：在用户完成关键操作后使用success类型提示操作成功，增强用户操作信心。',
        '系统通知：使用info类型展示系统通知或提示信息，保持用户对系统状态的了解。',
        '警告提示：在用户执行潜在风险操作前使用warning类型提示潜在风险，提醒用户谨慎操作。',
        '自定义关闭：通过closable属性允许用户手动关闭提示，提升用户体验。',
        '自定义图标：通过showIcon属性显示默认图标或通过icon插槽自定义图标，增强提示的视觉吸引力。',
        '自定义操作：通过action插槽添加自定义操作按钮，如跳转链接或详细说明，提供更多操作选项。',
        '居中显示：通过center属性将提示内容居中显示，适用于需要突出提示信息的场景。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'closable',
            target: 'beforeClose',
            effect: '当closable为true时，beforeClose函数会在关闭前执行',
            notes: [
                'beforeClose函数可以用于执行关闭前的逻辑，如数据保存或二次确认',
                '如果beforeClose返回false，则阻止关闭操作',
            ],
        },
    ],
    props: [
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'success',
                        title: '成功',
                        usage: '用于表示操作成功的提示信息',
                    },
                    {
                        name: 'info',
                        title: '信息',
                        usage: '用于表示中性的提示信息',
                    },
                    {
                        name: 'warning',
                        title: '警告',
                        usage: '用于表示警告或需要注意的提示信息',
                    },
                    {
                        name: 'error',
                        title: '错误',
                        usage: '用于表示错误或操作失败的提示信息',
                    },
                ],
            },
            description: '提示信息的类型，影响提示的样式和语义',
            defaultValue: 'info',
        },
        {
            name: 'message',
            title: '消息标题',
            propType: 'string',
            description: '提示信息的主标题，用于传达主要信息',
        },
        {
            name: 'description',
            title: '消息内容',
            propType: 'string',
            description: '提示信息的辅助内容，用于提供详细信息或说明',
        },
        {
            name: 'showIcon',
            title: '显示图标',
            propType: 'bool',
            description: '是否显示默认图标，增强提示的视觉吸引力',
            defaultValue: false,
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
            description: '是否允许用户手动关闭提示',
            defaultValue: false,
        },
        {
            name: 'center',
            title: '居中',
            propType: 'bool',
            description: '是否将提示内容居中显示',
            defaultValue: false,
        },
        {
            name: 'beforeClose',
            title: '关闭前钩子',
            propType: 'func',
            description: '关闭前的回调函数，用于执行关闭前的逻辑',
            defaultValue: '() => true',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '自定义消息内容，可以是文本或其他元素',
            required: false,
        },
        {
            name: 'description',
            description: '自定义辅助消息内容，可以是文本或其他元素',
            required: false,
        },
        {
            name: 'icon',
            description: '自定义图标，用于替换默认图标',
            required: false,
        },
        {
            name: 'action',
            description: '自定义操作按钮，用于添加额外的操作选项',
            required: false,
        },
    ],
};
