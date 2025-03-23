import { IComponentMetadata } from '../type';

export const buttonMeta:IComponentMetadata = {
    title: '按钮',
    componentName: 'FButton',
    description: '基础按钮组件，用于在用户界面中触发各种操作。支持多种样式和状态，适用于表单提交、对话框确认等场景。',
    scenarios: [
        '表单提交：在表单底部使用primary类型按钮，用于触发表单提交操作，确保用户明确提交意图。',
        '对话框确认：在模态框底部使用default或primary类型按钮，用于关键操作确认，强调操作重要性。',
        '工具栏操作：在表格工具栏中使用text或link类型按钮，用于执行批量操作，保持界面简洁。',
        '页面导航：使用link类型按钮进行页面或功能导航，提供清晰的用户引导。',
        '状态切换：使用text类型按钮切换不同状态，保持界面一致性。',
        '危险操作：使用danger类型按钮执行删除等危险操作，明确警示用户。',
        '信息提示：使用info类型按钮展示提示信息，提供友好的用户反馈。',
        '成功提示：使用success类型按钮展示成功信息，增强用户操作信心。',
        '警告提示：使用warning类型按钮展示警告信息，提醒用户注意潜在风险。'
    ],
    parent: {
        types: ['container', 'layout'],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单项场景下必须放在表单项组件内'
            },
            {
                parent: 'FSpace',
                description: '间距布局场景下必须放在间距组件内'
            }
        ]
    },
    children: [],
    propRelations: [
        {
            source: 'loading',
            target: 'disabled',
            effect: 'loading状态时禁用点击',
            notes: [
                '当按钮处于加载状态时自动禁用点击',
                '适用于异步提交场景防止重复提交'
            ]
        }
    ],
    props: [
        {
            name: 'children',
            title: '按钮内容',
            propType: 'string',
            description: '按钮的文本内容',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            propType: 'bool',
            description: '是否禁用按钮',
            defaultValue: false
        },
        {
            name: 'size',
            title: '尺寸',
            propType: {
                type: 'oneOf',
                items: [
                    { 
                        name: 'small', 
                        title: '小',
                        usage: '紧凑场景使用，如表单内联按钮'
                    },
                    { 
                        name: 'middle', 
                        title: '中',
                        usage: '常规尺寸，适合大多数场景'
                    },
                    { 
                        name: 'large', 
                        title: '大',
                        usage: '需要突出操作的页面重点区域'
                    }
                ]
            },
            description: '按钮的尺寸大小，影响按钮的展示尺寸',
            defaultValue: 'middle'
        },
        {
            name: 'htmlType',
            title: '按钮类型',
            propType: {
                type: 'oneOf',
                items: [
                    { name: 'button', title: '普通按钮', usage: '常规按钮交互场景，点击时触发onClick事件' },
                    { name: 'submit', title: '提交按钮', usage: '表单提交场景，点击时自动触发表单的submit事件' }
                ]
            },
            description: '设置按钮的原生type属性，影响按钮的默认行为',
            defaultValue: 'button'
        },
        {
            name: 'loading',
            title: '加载状态',
            propType: 'bool',
            description: '是否显示加载中状态',
            defaultValue: false
        },
        {
            name: 'long',
            title: '长按钮',
            propType: 'bool',
            description: '是否显示为长按钮',
            defaultValue: false
        },
        {
            name: 'throttle',
            title: '节流时间',
            propType: 'number',
            description: '点击事件的节流时间（毫秒），在指定时间间隔内重复点击只会触发一次回调，用于防止重复提交',
            defaultValue: 300
        },
        {
            name: 'type',
            title: '按钮风格',
            propType: {
                type: 'oneOf',
                items: [
                    { name: 'default', title: '默认', usage: '常规场景的默认按钮样式，适用于一般操作' },
                    { name: 'primary', title: '主要', usage: '需要突出强调的主要操作按钮，如表单提交、确认等重要操作' },
                    { name: 'text', title: '文本', usage: '轻量级的文本按钮，用于次要操作，保持界面清爽' },
                    { name: 'link', title: '链接', usage: '链接形式的按钮，用于导航跳转或触发外部链接' },
                    { name: 'info', title: '信息', usage: '用于展示信息的按钮样式，传达中性的信息状态' },
                    { name: 'success', title: '成功', usage: '表示成功状态的按钮样式，用于操作成功的反馈' },
                    { name: 'warning', title: '警告', usage: '表示警告状态的按钮样式，提醒用户需要注意' },
                    { name: 'danger', title: '危险', usage: '表示危险操作的按钮样式，如删除等破坏性操作' }
                ]
            },
            description: '按钮的样式风格，影响按钮的外观和语义',
            defaultValue: 'default'
        },
    ],

    events: [
        {
            name: 'onClick',
            description: '点击按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '点击事件对象'
                }
            ]
        }
    ],
    slots: [
        {
            name: 'default',
            description: '按钮的内容，可以是文本或其他元素',
            required: true
        }
    ],
}

