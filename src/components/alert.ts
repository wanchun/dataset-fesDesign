import type { IComponentMetadata } from '../type';

export const alertMeta: IComponentMetadata = {
    title: '警告提示',
    componentName: 'FAlert',
    description: '用于向用户显示需要关注的重要信息，支持多种类型和自定义配置，适用于系统通知、操作反馈等场景。',
    scenarios: [
        '表单提交成功反馈：使用success类型展示表单提交成功的提示信息，增强用户操作信心。',
        '系统错误通知：使用error类型显示系统错误信息，明确告知用户问题原因。',
        '操作警告提示：使用warning类型提醒用户潜在风险或需要注意的操作事项。',
        '常规信息展示：使用info类型展示中性信息，如系统更新通知等。',
        '可关闭通知：在需要用户主动关闭的场景下启用closable属性，提供更好的用户体验。',
        '复杂信息展示：通过description属性展示详细辅助信息，适用于需要说明详细情况的场景。',
        '自定义样式：通过插槽机制自定义图标、操作按钮等内容，满足特殊业务需求。',
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
            effect: '当closable为true时，beforeClose回调才会生效',
            notes: [
                '用于在关闭前执行特定逻辑，如确认操作等',
            ],
        },
    ],
    props: [
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'success',
                        title: '成功',
                        usage: '用于展示成功状态，如操作成功、提交成功等场景',
                    },
                    {
                        value: 'info',
                        title: '信息',
                        usage: '用于展示中性信息，如系统通知、提示等场景',
                    },
                    {
                        value: 'warning',
                        title: '警告',
                        usage: '用于展示警告信息，提醒用户潜在风险或需要注意的事项',
                    },
                    {
                        value: 'error',
                        title: '错误',
                        usage: '用于展示错误信息，如操作失败、系统错误等场景',
                    },
                ],
            },
            description: '指定警告提示的样式类型',
            defaultValue: 'info',
            example: 'success',
        },
        {
            name: 'message',
            title: '消息标题',
            valueType: 'string',
            description: '提示内容的主标题',
            required: true,
            example: '操作成功',
        },
        {
            name: 'description',
            title: '消息内容',
            valueType: 'string',
            description: '提示内容的详细描述信息',
            example: '您的订单已成功提交，我们将尽快处理',
        },
        {
            name: 'showIcon',
            title: '显示图标',
            valueType: 'bool',
            description: '是否显示类型对应的图标',
            defaultValue: false,
            example: true,
        },
        {
            name: 'closable',
            title: '可关闭',
            valueType: 'bool',
            description: '是否显示关闭按钮',
            defaultValue: false,
            example: true,
        },
        {
            name: 'center',
            title: '居中',
            valueType: 'bool',
            description: '是否居中显示提示内容',
            defaultValue: false,
            example: true,
        },
        {
            name: 'beforeClose',
            title: '关闭前钩子',
            valueType: {
                type: 'func',
                parameters: [],
                returnType: 'bool',
            },
            description: '关闭前的回调函数，返回false可阻止关闭',
            example: '() => confirm(\'确定关闭吗？\')',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '自定义提示内容，会覆盖message属性',
            required: false,
        },
        {
            name: 'descriptionSlot',
            description: '自定义辅助信息内容，会覆盖description属性',
            required: false,
        },
        {
            name: 'icon',
            description: '自定义图标内容',
            required: false,
        },
        {
            name: 'action',
            description: '自定义操作区域内容',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础信息提示',
            output: '<FAlert type="info" message="系统通知" />',
        },
        {
            input: '带图标的成功提示',
            output: '<FAlert showIcon type="success" message="操作成功" />',
        },
        {
            input: '可关闭的警告提示',
            output: '<FAlert closable type="warning" message="请注意风险" />',
        },
        {
            input: '带详细描述的错误提示',
            output: '<FAlert type="error" message="提交失败" description="网络连接超时，请稍后重试" />',
        },
        {
            input: '居中显示的提示',
            output: '<FAlert center type="info" message="系统维护通知" />',
        },
        {
            input: '自定义图标',
            output: '<FAlert type="info" message="自定义图标">\n  <template #icon><UserOutlined /></template>\n</FAlert>',
        },
        {
            input: '自定义操作按钮',
            output: '<FAlert type="info" message="新消息通知">\n  <template #action><FButton type="text">查看详情</FButton></template>\n</FAlert>',
        },
        {
            input: '带确认的关闭操作',
            output: '<FAlert closable :beforeClose="() => confirm(\'确定关闭吗？\')" type="warning" message="重要提示" />',
        },
        {
            input: '完全自定义内容',
            output: '<FAlert type="success">\n  <div>自定义标题</div>\n  <template #description>\n    <div>自定义详细内容</div>\n  </template>\n</FAlert>',
        },
        {
            input: '组合使用',
            output: '<FAlert showIcon closable center type="error" message="系统错误" description="请联系管理员处理" />',
        },
    ],
};
