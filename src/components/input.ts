import type { IComponentMetadata } from '../type';

export const inputMeta: IComponentMetadata = {
    title: '文本输入',
    componentName: 'FInput',
    description: '基础文本输入组件，用于在用户界面中收集文本数据。支持多种输入类型和功能，如密码输入、多行文本、自动调整高度等，适用于表单填写、搜索框等场景。',
    scenarios: [
        '表单填写：在表单中使用文本输入框收集用户信息，如姓名、邮箱、地址等，确保数据输入的有效性和完整性。',
        '搜索框：在搜索功能中使用文本输入框，提供实时搜索建议和结果反馈，提升用户体验。',
        '密码输入：在登录或注册表单中使用密码输入框，结合密码可见性切换功能，确保用户密码的安全性。',
        '多行文本输入：在评论或反馈表单中使用多行文本输入框，允许用户输入较长的文本内容，提供更好的输入体验。',
        '自动调整高度：在需要动态调整输入框高度的场景中使用自动调整高度功能，如聊天输入框，确保内容显示完整。',
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
    propRelations: [
        {
            source: 'type',
            target: [
                'rows',
                'autosize',
                'resize',
                'showPassword',
            ],
            effect: '根据输入类型动态调整相关属性',
            notes: [
                '当输入类型为textarea时，显示行数、高度自适应和缩放属性',
                '当输入类型为password时，显示密码图标属性',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'string',
            description: '用于双向绑定输入框的值',
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            description: '是否禁用输入框',
            defaultValue: false,
        },
        {
            name: 'clearable',
            title: '可清空',
            propType: 'bool',
            description: '是否显示清空按钮',
            defaultValue: false,
        },
        {
            name: 'maxlength',
            title: '最大长度',
            propType: 'number',
            description: '输入框的最大字符长度',
        },
        {
            name: 'placeholder',
            title: '输入提示',
            propType: 'string',
            description: '输入框的占位符文本',
            defaultValue: '请输入',
        },
        {
            name: 'showPassword',
            title: '密码图标',
            propType: 'bool',
            description: '是否显示密码可见性切换图标',
            defaultValue: false,
        },
        {
            name: 'rows',
            title: '行数',
            propType: 'number',
            description: '多行文本输入框的行数',
            defaultValue: 2,
        },
        {
            name: 'showWordLimit',
            title: '是否统计',
            propType: 'bool',
            description: '是否显示输入字符统计',
            defaultValue: false,
        },
        {
            name: 'autosize',
            title: '高度自适应',
            propType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    {
                        type: 'shape',
                        value: [
                            {
                                name: 'minRows',
                                title: '最小行数',
                                propType: 'number',
                            },
                            {
                                name: 'maxRows',
                                title: '最大行数',
                                propType: 'number',
                            },
                        ],
                    },
                ],
            },
            description: '是否自动调整输入框高度',
            defaultValue: false,
        },
        {
            name: 'resize',
            title: '缩放',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'horizontal',
                        title: '水平方向',
                        usage: '允许水平方向缩放',
                    },
                    {
                        name: 'vertical',
                        title: '垂直方向',
                        usage: '允许垂直方向缩放',
                    },
                    {
                        name: 'both',
                        title: '水平垂直方向',
                        usage: '允许水平和垂直方向缩放',
                    },
                    {
                        name: 'none',
                        title: '禁止',
                        usage: '禁止缩放',
                    },
                ],
            },
            description: '输入框的缩放方向',
        },
        {
            name: 'autofocus',
            title: '自动聚焦',
            propType: 'bool',
            description: '是否自动聚焦到输入框',
            defaultValue: false,
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '输入框值改变时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string',
                    description: '当前输入框的值',
                },
            ],
        },
        {
            name: 'onInput',
            description: '输入框输入时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string',
                    description: '当前输入框的值',
                },
            ],
        },
        {
            name: 'onKeydown',
            description: '输入框按键按下时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'KeyboardEvent',
                    description: '键盘事件对象',
                },
            ],
        },
        {
            name: 'onClear',
            description: '清空输入框时触发',
            parameters: [],
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
                    description: '焦点事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'prefix',
            description: '输入框前缀内容',
            required: false,
        },
        {
            name: 'suffix',
            description: '输入框后缀内容',
            required: false,
        },
        {
            name: 'prepend',
            description: '输入框前置内容',
            required: false,
        },
        {
            name: 'append',
            description: '输入框后置内容',
            required: false,
        },
    ],
};
