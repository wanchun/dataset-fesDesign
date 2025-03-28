import type { IComponentMetadata } from '../type';

export const messageMeta: IComponentMetadata = {
    title: '消息提示',
    componentName: 'FMessage',
    description: '全局消息提示组件，用于向用户反馈操作结果。支持多种消息类型、自定义样式和关闭功能，适用于系统通知、操作反馈等场景。',
    scenarios: [
        '表单提交反馈：在用户提交表单后显示成功或错误消息，提供明确的操作结果反馈',
        '系统通知：展示系统级通知信息，如新消息提醒或系统维护公告',
        '操作确认：在执行关键操作前显示确认提示，防止误操作',
        '异步操作状态：在长时间异步操作期间显示加载状态或完成提示',
        '错误处理：在接口请求失败或数据验证不通过时显示错误提示',
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
            source: 'duration',
            target: 'closable',
            effect: '当duration为0时，建议设置closable为true',
            notes: [
                '非自动关闭的消息需要提供手动关闭方式',
                '防止消息长时间停留影响用户体验',
            ],
        },
    ],
    props: [
        {
            name: 'content',
            title: '消息内容',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    {
                        type: 'func',
                        returnType: 'node',
                    },
                ],
            },
            description: '消息提示内容，可以是字符串或返回VNode的函数',
            required: true,
            example: '\'操作成功\'',
        },
        {
            name: 'duration',
            title: '显示时长',
            valueType: 'number',
            description: '自动关闭的延时，单位秒，设置为0时不自动关闭',
            defaultValue: 3,
            example: 5,
        },
        {
            name: 'icon',
            title: '自定义图标',
            valueType: {
                type: 'func',
                returnType: 'node',
            },
            description: '自定义消息图标，返回VNode的函数',
            example: '() => <BellOutlined />',
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
            name: 'colorful',
            title: '彩色样式',
            valueType: 'bool',
            description: '是否使用彩色背景样式',
            defaultValue: false,
            example: true,
        },
        {
            name: 'afterClose',
            title: '关闭回调',
            valueType: {
                type: 'func',
                returnType: 'any',
            },
            description: '消息关闭后的回调函数',
            example: '() => console.log(\'message closed\')',
        },
    ],
    events: [],
    slots: [],
    exposes: [
        {
            name: 'info',
            description: '显示普通消息',
            parameters: [
                {
                    name: 'content',
                    type: 'string',
                    description: '消息内容',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '显示时长(秒)',
                },
            ],
        },
        {
            name: 'success',
            description: '显示成功消息',
            parameters: [
                {
                    name: 'content',
                    type: 'string',
                    description: '消息内容',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '显示时长(秒)',
                },
            ],
        },
        {
            name: 'error',
            description: '显示错误消息',
            parameters: [
                {
                    name: 'content',
                    type: 'string',
                    description: '消息内容',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '显示时长(秒)',
                },
            ],
        },
        {
            name: 'warning',
            description: '显示警告消息',
            parameters: [
                {
                    name: 'content',
                    type: 'string',
                    description: '消息内容',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '显示时长(秒)',
                },
            ],
        },
        {
            name: 'warn',
            description: '显示警告消息(同warning)',
            parameters: [
                {
                    name: 'content',
                    type: 'string',
                    description: '消息内容',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '显示时长(秒)',
                },
            ],
        },
        {
            name: 'config',
            description: '全局配置',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'destroy',
            description: '关闭所有消息',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '如何显示一个普通消息提示？',
            output: '[场景说明] 需要在用户操作后显示普通信息提示\n[代码实现] FMessage.info(\'这是一条普通消息\');\n[最佳实践] 适用于非关键性操作反馈，默认3秒后自动消失',
        },
        {
            input: '显示一个5秒后自动关闭的成功消息',
            output: '[场景说明] 表单提交成功后需要显示较长时间的成功提示\n[代码实现] FMessage.success(\'操作成功\', 5);\n[最佳实践] 重要操作反馈可适当延长显示时间',
        },
        {
            input: '错误消息不自动关闭',
            output: '[场景说明] 关键错误需要用户手动确认\n[代码实现] FMessage.error({ content: \'操作失败\', duration: 0, closable: true });\n[注意事项] 必须设置closable为true，否则用户无法关闭消息',
        },
        {
            input: '自定义消息内容和图标',
            output: '[场景说明] 需要显示带自定义图标和样式的消息\n[代码实现] FMessage.info({ content: () => h(\'div\', { style: { color: \'red\' } }, \'自定义内容\'), icon: () => <BellOutlined /> });\n[最佳实践] 使用函数式组件实现高度自定义',
        },
        {
            input: '显示彩色背景的警告消息',
            output: '[场景说明] 需要突出显示重要警告\n[代码实现] FMessage.warning({ content: \'请注意风险\', colorful: true });\n[最佳实践] 彩色样式更醒目，适合重要提示',
        },
        {
            input: '关闭所有消息',
            output: '[场景说明] 需要一次性清除所有消息提示\n[代码实现] FMessage.destroy();\n[注意事项] 会立即关闭所有通过FMessage显示的消息',
        },
        {
            input: '全局配置消息默认显示时间',
            output: '[场景说明] 需要统一调整所有消息的默认显示时长\n[代码实现] FMessage.config({ duration: 5 });\n[注意事项] 此配置会影响后续所有消息的默认显示时间',
        },
        {
            input: '显示带关闭按钮的消息',
            output: '[场景说明] 需要允许用户手动关闭消息\n[代码实现] FMessage.info({ content: \'可关闭消息\', closable: true });\n[最佳实践] 对于重要消息建议提供关闭按钮',
        },
        {
            input: '错误示例：忘记设置content',
            output: '[错误分析] 缺少必填的content属性\n[正确代码] FMessage.info({ content: \'消息内容\' });\n[注意事项] content是必填属性，可以是字符串或函数',
        },
        {
            input: '错误示例：duration传字符串',
            output: '[错误分析] duration应为数字类型\n[正确代码] FMessage.info(\'消息\', 5);\n[注意事项] duration参数必须为number类型，表示秒数',
        },
        {
            input: '错误示例：colorful拼写错误',
            output: '[错误分析] 属性名拼写错误\n[正确代码] FMessage.info({ content: \'消息\', colorful: true });\n[注意事项] 正确属性名为colorful，不是colourful',
        },
        {
            input: '空内容消息测试',
            output: '[场景说明] 测试空内容消息的显示\n[代码实现] FMessage.info(\'\');\n[注意事项] 空内容消息仍会显示但无实际意义，应避免使用',
        },
        {
            input: '极长持续时间测试',
            output: '[场景说明] 测试极长显示时间的消息\n[代码实现] FMessage.info({ content: \'测试消息\', duration: 3600 });\n[注意事项] 过长的duration应配合closable使用',
        },
        {
            input: '大量消息同时显示',
            output: '[场景说明] 测试同时显示多条消息\n[代码实现] for(let i=0; i<10; i++) { FMessage.info(`消息${i}`); }\n[注意事项] 可通过config设置maxCount限制最大显示数量',
        },
        {
            input: '怎么显示一个消息提示框',
            output: '[场景说明] 基础消息提示使用\n[代码实现] FMessage.info(\'提示信息\');\n[最佳实践] 最简单的消息提示用法',
        },
        {
            input: '消息提示能不能改颜色',
            output: '[场景说明] 自定义消息样式\n[代码实现] FMessage.info({ content: () => h(\'div\', { style: { color: \'blue\' } }, \'蓝色消息\') });\n[最佳实践] 通过函数式content实现样式自定义',
        },
        {
            input: '消息提示咋关不掉',
            output: '[错误分析] 可能缺少closable设置\n[正确代码] FMessage.info({ content: \'消息\', closable: true });\n[注意事项] 非自动关闭的消息必须设置closable',
        },
        {
            input: '覆盖默认消息样式',
            output: '[场景说明] 自定义全局消息样式\n[代码实现] // 通过CSS覆盖 .f-message-notice { background: #f0f0f0; }\n[注意事项] 谨慎修改全局样式，可能影响其他组件',
        },
        {
            input: '与Modal组件配合使用',
            output: '[场景说明] 在模态框中显示消息\n[代码实现] FMessage.config({ getContainer: () => document.querySelector(\'.modal-container\') });\n[最佳实践] 确保消息显示在正确的容器内',
        },
        {
            input: '与表单验证配合使用',
            output: '[场景说明] 表单验证错误提示\n[代码实现] if(!valid) { FMessage.error(\'请填写必填字段\'); }\n[最佳实践] 在验证失败时显示错误提示',
        },
    ],
};
