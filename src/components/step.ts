import type { IComponentMetadata } from '../type';

export const stepMeta: IComponentMetadata = {
    title: '步骤条选项',
    componentName: 'FStep',
    description: '步骤条组件中的单个步骤选项，用于展示流程中的每个步骤状态和相关信息。支持自定义图标、状态标记和详细描述。',
    scenarios: [
        '流程引导：在用户注册流程中展示各个步骤，引导用户完成注册过程。',
        '任务跟踪：在项目管理工具中显示任务处理状态，帮助用户了解当前进度。',
        '表单分步：在复杂表单中分步展示填写内容，提高表单填写体验。',
        '订单状态：在电商系统中展示订单处理流程，让用户清晰了解订单状态。',
        '安装向导：在软件安装过程中展示安装步骤，提供清晰的安装指引。',
    ],
    parent: {
        types: [],
        restrictions: [
            {
                parent: 'FSteps',
                description: '必须作为FSteps组件的子组件使用',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'status',
            target: 'icon',
            effect: '当状态为error时，默认显示错误图标',
            notes: [
                '优先级：自定义图标 > 状态图标 > 默认图标',
                '适用于需要根据状态自动切换图标的场景',
            ],
        },
    ],
    props: [
        {
            name: 'title',
            title: '标题',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'node',
                ],
            },
            description: '步骤的标题内容，支持字符串或自定义节点',
            defaultValue: '我是标题',
            example: '第一步',
        },
        {
            name: 'description',
            title: '描述',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'node',
                ],
            },
            description: '步骤的详细描述信息，支持字符串或自定义节点',
            defaultValue: '我是描述',
            example: '请完成基本信息填写',
        },
        {
            name: 'status',
            title: '状态',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'wait',
                        title: '待处理',
                        usage: '步骤尚未开始处理的状态',
                    },
                    {
                        value: 'process',
                        title: '处理中',
                        usage: '步骤正在处理中的状态',
                    },
                    {
                        value: 'error',
                        title: '处理错误',
                        usage: '步骤处理失败的状态',
                    },
                    {
                        value: 'finish',
                        title: '处理完成',
                        usage: '步骤已成功完成的状态',
                    },
                ],
            },
            description: '步骤的当前状态，不设置时会继承父组件FSteps的状态',
            example: 'process',
        },
        {
            name: 'icon',
            title: '图标',
            valueType: 'node',
            description: '步骤的自定义图标，优先级高于状态图标',
            example: '<StarOutlined />',
        },
    ],
    events: [
        {
            name: 'clickStep',
            description: '点击步骤时触发的事件',
            parameters: [
                {
                    name: 'step',
                    type: 'number',
                    description: '当前步骤的索引值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'icon',
            description: '自定义图标插槽',
            required: false,
        },
        {
            name: 'default',
            description: '步骤描述内容插槽',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础步骤项',
            output: '<!-- correct -->\n[场景说明] 创建一个基本的步骤项，包含标题和描述\n[代码实现] \n<FStep \n  title="第一步" \n  description="请填写基本信息" \n/>\n[最佳实践] 确保标题简洁明了，描述提供足够指导信息',
        },
        {
            input: '带图标的步骤项',
            output: '<!-- correct -->\n[场景说明] 创建带自定义图标的步骤项\n[代码实现] \n<FStep title="第二步">\n  <template #icon>\n    <StarOutlined />\n  </template>\n</FStep>\n[最佳实践] 图标应与步骤内容相关，保持视觉一致性',
        },
        {
            input: '错误状态的步骤项',
            output: '<!-- correct -->\n[场景说明] 创建错误状态的步骤项\n[代码实现] \n<FStep \n  title="第三步" \n  status="error" \n  description="验证失败，请重试" \n/>\n[最佳实践] 错误状态应配合明确的错误描述',
        },
        {
            input: '自定义描述的步骤项',
            output: '<!-- correct -->\n[场景说明] 使用自定义节点作为描述内容\n[代码实现] \n<FStep title="第四步">\n  <template #description>\n    <span style="color: red">重要步骤，请仔细操作</span>\n  </template>\n</FStep>\n[最佳实践] 自定义样式应保持与整体设计风格一致',
        },
        {
            input: '缺少必要属性',
            output: '<!-- error -->\n[错误分析] 缺少必需的title属性\n[正确代码] \n<FStep title="必要标题" />\n[注意事项] title是步骤项的必要属性，必须提供',
        },
        {
            input: '错误的状态值',
            output: '<!-- error -->\n[错误分析] 使用了不支持的状态值\'pending\'\n[正确代码] \n<FStep title="步骤" status="wait" />\n[注意事项] 状态值必须是wait/process/finish/error之一',
        },
        {
            input: '如何在步骤里加个按钮？',
            output: '<!-- correct -->\n[场景说明] 在步骤描述中添加操作按钮\n[代码实现] \n<FStep title="审核步骤">\n  <template #description>\n    <div>\n      <p>请审核以下内容</p>\n      <FButton size="small">查看详情</FButton>\n    </div>\n  </template>\n</FStep>\n[最佳实践] 按钮操作应与步骤内容相关，避免过度复杂',
        },
        {
            input: '步骤项能单独使用吗？',
            output: '<!-- error -->\n[错误分析] FStep必须作为FSteps的子组件使用\n[正确代码] \n<FSteps>\n  <FStep title="正确用法" />\n</FSteps>\n[注意事项] FStep不能单独使用，必须包含在FSteps组件内',
        },
    ],
};
