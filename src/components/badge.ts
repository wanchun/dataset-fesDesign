import type { IComponentMetadata } from '../type';

export const badgeMeta: IComponentMetadata = {
    title: '徽标',
    componentName: 'FBadge',
    description: '徽标组件用于在用户界面中展示通知、状态或数量信息。支持多种样式和配置，适用于消息提醒、状态标记等场景。',
    scenarios: [
        '消息提醒：在消息图标上显示未读消息数量，使用数字徽标，提醒用户查看新消息。',
        '状态标记：在用户头像上显示在线状态，使用红点徽标，直观展示用户状态。',
        '数量统计：在购物车图标上显示商品数量，使用数字徽标，方便用户了解购物车中的商品数量。',
        '阈值显示：在通知中心显示未读通知数量，当数量超过设定阈值时显示最大值，避免数字过长。',
        '自定义样式：在特定场景下使用自定义背景色和内容，增强徽标的视觉效果和信息传达。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FButton',
                description: '按钮场景下必须放在按钮组件内',
            },
            {
                parent: 'FAvatar',
                description: '头像场景下必须放在头像组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'hidden',
            target: 'showZero',
            effect: '隐藏徽标时，showZero属性不会生效',
            notes: [
                '当hidden为true时，showZero属性无效',
                '适用于需要动态隐藏徽标的场景',
            ],
        },
        {
            source: 'value',
            target: 'max',
            effect: '当value为数字且超过max时，显示max值',
            notes: [
                'value为数字时，max属性才会生效',
                '适用于需要限制显示最大值的场景',
            ],
        },
    ],
    props: [
        {
            name: 'value',
            title: '显示值',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '徽标中显示的值，可以是数字或字符串',
            defaultValue: '',
        },
        {
            name: 'dot',
            title: '红点模式',
            propType: 'bool',
            description: '是否显示为红点模式，适用于不需要显示具体数值的场景',
            defaultValue: false,
        },
        {
            name: 'hidden',
            title: '隐藏徽标',
            propType: 'bool',
            description: '是否隐藏徽标，适用于需要动态控制徽标显示的场景',
            defaultValue: false,
        },
        {
            name: 'showZero',
            title: '展示数值0',
            propType: 'bool',
            description: '是否展示数值0，如果隐藏徽标时，该属性不会生效',
            defaultValue: false,
        },
        {
            name: 'max',
            title: '阈值',
            propType: 'number',
            description: '设定封顶阈值，只有显示值是数字的情况下才会生效',
            defaultValue: 99,
        },
        {
            name: 'size',
            title: '大小',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'medium',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        name: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如图标上的小徽标',
                    },
                ],
            },
            description: '徽标的大小，影响徽标的展示尺寸',
            defaultValue: 'medium',
        },
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'primary',
                        title: '重要',
                        usage: '用于重要信息的提示，如未读消息',
                    },
                    {
                        name: 'success',
                        title: '成功',
                        usage: '用于成功状态的提示，如操作成功',
                    },
                    {
                        name: 'warning',
                        title: '警告',
                        usage: '用于警告信息的提示，如操作风险',
                    },
                    {
                        name: 'danger',
                        title: '危险',
                        usage: '用于危险操作的提示，如删除操作',
                    },
                ],
            },
            description: '徽标的类型，影响徽标的样式和语义',
            defaultValue: 'danger',
        },
        {
            name: 'backgroundColor',
            title: '背景色',
            propType: 'string',
            description: '徽标的背景颜色，支持自定义颜色值',
            defaultValue: '',
        },
        {
            name: 'content',
            title: '自定义',
            propType: 'node',
            description: '自定义徽标的内容，可以是文本或其他元素',
            defaultValue: '',
        },
    ],
    events: [],
    slots: [
        {
            name: 'content',
            description: '自定义徽标的内容，可以是文本或其他元素',
            required: false,
        },
    ],
    exposes: [],
};
