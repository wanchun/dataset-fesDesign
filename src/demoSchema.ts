import type { IComponentMetadata } from './type';

export const buttonMeta: IComponentMetadata = {
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
        '警告提示：使用warning类型按钮展示警告信息，提醒用户注意潜在风险。',
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
            source: 'loading',
            target: 'disabled',
            effect: 'loading状态时禁用点击',
            notes: [
                '当按钮处于加载状态时自动禁用点击',
                '适用于异步提交场景防止重复提交',
            ],
        },
    ],
    props: [
        {
            name: 'boolDemo',
            title: '布尔示例',
            valueType: 'bool',
            description: '是否禁用按钮',
            defaultValue: false,
            example: false,
        },
        {
            name: 'stringDemo',
            title: '字符串示例',
            valueType: 'string',
            description: '按钮的类型',
            example: 'primary',
        },
        {
            name: 'numberDemo',
            title: '数字示例',
            valueType: 'number',
            description: '按钮的圆角大小',
            defaultValue: 4,
            example: 8,
        },
        {
            name: 'arrayDemo',
            title: '数组示例',
            valueType: 'array',
            description: '按钮的颜色',
            defaultValue: ['#1890ff', '#f50'],
            example: ['#1890ff', '#f50'],
        },
        {
            name: 'dateDemo',
            title: '日期示例',
            valueType: 'date',
            description: 'xxx',
            example: new Date(),
        },
        {
            name: 'nodeDemo',
            title: '节点示例',
            valueType: 'node',
            description: '按钮的图标',
            example: '<ProductOutlined />',
        },
        {
            name: 'objectDemo',
            title: '对象示例',
            valueType: 'object',
            description: '应用的语言包配置，支持中英文等多种语言',
            defaultValue: 'zhCN',
            example: {
                datePicker: {
                    selectDate: '选择日期',
                    selectTime: '选择时间',
                },
            },
        },
        {
            name: 'size',
            title: '尺寸',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表单内联按钮',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出操作的页面重点区域',
                    },
                ],
            },
            description: '按钮的尺寸大小，影响按钮的展示尺寸',
            defaultValue: 'middle',
            example: 'middle',
        },
        {
            name: 'funcDemo',
            title: '函数示例',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'data',
                        type: 'array',
                        description: '数据数组',
                    },
                ],
                returnType: 'string',

            },
            example: '() => "Hello, World!"',
        },
        {
            name: 'oneOfTypeDemo',
            title: '联合类型示例',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    {
                        type: 'func',
                        returnType: 'number',
                    },
                ],
            },
            example: '() => 123',
        },
        {
            name: 'arrayOfDemo',
            title: '数组类型示例',
            description: '数字数组示例',
            valueType: {
                type: 'arrayOf',
                value: 'number',
            },
            example: '[1, 2, 3]',
        },
        {
            name: 'exactDemo',
            title: '对象类型示例（所有属性都配置）',
            valueType: {
                type: 'exact',
                value: [
                    {
                        name: 'value',
                        title: '选项值',
                        valueType: {
                            type: 'oneOfType',
                            value: [
                                'string',
                                'number',
                            ],
                        },
                        example: '1',
                    },
                    {
                        name: 'label',
                        title: '显示文本',
                        valueType: 'string',
                        example: '选项1',
                    },
                    {
                        name: 'disabled',
                        title: '禁用状态',
                        valueType: 'bool',
                        example: false,
                    },
                    {
                        name: 'icon',
                        title: '图标组件',
                        valueType: 'node',
                        example: '<ProductOutlined />',
                    },
                ],
            },
            example: '{ a: 1, b: 2 }',
            description: '菜单项数据结构，支持函数式label和自定义图标',
            defaultValue: [],
        },
        {
            name: 'shapeDemo',
            title: '对象示例（只要求必须有配置的属性，其他属性不要求）',
            valueType: {
                type: 'shape',
                value: [
                    {
                        name: 'value',
                        title: '选项值',
                        valueType: {
                            type: 'oneOfType',
                            value: [
                                'string',
                                'number',
                            ],
                        },
                        example: '1',
                    },
                    {
                        name: 'label',
                        title: '显示文本',
                        valueType: 'string',
                        example: '选项1',
                    },
                ],
            },
            example: '{ a: 1, b: 2 }',
            description: '菜单项数据结构，支持函数式label和自定义图标',
            defaultValue: [],
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
                    description: '点击事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '按钮的内容，可以是文本或其他元素',
            required: true,
        },
    ],
    templates: [
        {
            input: '重要按钮',
            output: `<FButton type="primary">
            Default
        </FButton>`,
        },
        {
            input: 'Icon 按钮',
            output: `<FButton type="primary">
            <template #icon>
                <ProductOutlined />
            </template>
        </FButton>`,
        },
    ],
};
