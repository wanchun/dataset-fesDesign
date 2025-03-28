import type { IComponentMetadata } from '../type';

export const descriptionsMeta: IComponentMetadata = {
    title: '描述列表',
    componentName: 'FDescriptions',
    description: '用于成组展示多个只读字段的描述列表组件，支持多种布局方式和样式配置，适用于展示详情信息、配置信息等场景。',
    scenarios: [
        '用户信息展示：用于展示用户基本信息，如姓名、年龄、联系方式等，支持多列布局和自定义样式。',
        '配置信息展示：用于展示系统或应用的配置信息，支持标签位置自定义和边框样式。',
        '数据详情展示：用于展示数据详情，支持内容跨列和自定义分隔符。',
        '表单预览：用于表单提交后的预览展示，支持标签对齐方式和内容样式自定义。',
        '报表展示：用于展示报表数据，支持标题和内容的自定义布局。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FDescriptionsItem',
    ],
    propRelations: [
        {
            source: 'labelPlacement',
            target: 'separator',
            effect: '当labelPlacement为left时，separator属性生效',
            notes: [
                '标签在左侧时显示分隔符',
                '标签在上方时不显示分隔符',
            ],
        },
    ],
    props: [
        {
            name: 'column',
            title: '总列数',
            valueType: 'number',
            description: '设置描述列表的总列数，影响布局的列数分配',
            defaultValue: 3,
            example: 3,
        },
        {
            name: 'labelAlign',
            title: '标签对齐方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'left',
                        title: '左对齐',
                        usage: '默认对齐方式，适用于大多数场景',
                    },
                    {
                        value: 'center',
                        title: '居中对齐',
                        usage: '需要标签内容居中对齐的场景',
                    },
                    {
                        value: 'right',
                        title: '右对齐',
                        usage: '需要标签内容右对齐的场景',
                    },
                ],
            },
            description: '设置标签内容的对齐方式',
            defaultValue: 'left',
            example: 'left',
        },
        {
            name: 'labelPlacement',
            title: '标签位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'left',
                        title: '左侧',
                        usage: '默认位置，标签在内容左侧',
                    },
                    {
                        value: 'top',
                        title: '上方',
                        usage: '标签在内容上方，适用于需要垂直布局的场景',
                    },
                ],
            },
            description: '设置标签相对于内容的位置',
            defaultValue: 'left',
            example: 'left',
        },
        {
            name: 'separator',
            title: '分隔符',
            valueType: 'string',
            description: '设置标签和内容之间的分隔符，仅在labelPlacement为left时生效',
            defaultValue: ':',
            example: ':',
        },
        {
            name: 'title',
            title: '标题',
            valueType: 'string',
            description: '设置描述列表的标题',
            example: '用户信息',
        },
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否显示边框',
            defaultValue: false,
            example: false,
        },
        {
            name: 'contentStyle',
            title: '内容样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'object',
                ],
            },
            description: '设置内容的样式，可以是字符串或对象',
            example: '{ color: \'red\' }',
        },
        {
            name: 'labelStyle',
            title: '标签样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'object',
                ],
            },
            description: '设置标签的样式，可以是字符串或对象',
            example: '{ fontWeight: \'bold\' }',
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
                        usage: '紧凑场景使用',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出显示的场景',
                    },
                ],
            },
            description: '设置描述列表的尺寸',
            defaultValue: 'small',
            example: 'small',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '描述列表的内容',
            required: true,
        },
        {
            name: 'header',
            description: '描述列表的标题',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础描述列表',
            output: '<!-- correct -->\n[场景说明] 展示用户基本信息\n[代码实现]\n<FDescriptions title="用户信息">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n  <FDescriptionsItem label="年龄">25</FDescriptionsItem>\n  <FDescriptionsItem label="性别">男</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于简单的信息展示场景',
        },
        {
            input: '带边框的描述列表',
            output: '<!-- correct -->\n[场景说明] 需要突出显示边框的信息展示\n[代码实现]\n<FDescriptions title="系统配置" bordered>\n  <FDescriptionsItem label="版本">1.0.0</FDescriptionsItem>\n  <FDescriptionsItem label="语言">中文</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要强调信息的场景',
        },
        {
            input: '标签在上方的描述列表',
            output: '<!-- correct -->\n[场景说明] 垂直布局的信息展示\n[代码实现]\n<FDescriptions title="产品详情" labelPlacement="top">\n  <FDescriptionsItem label="名称">Fes Design</FDescriptionsItem>\n  <FDescriptionsItem label="版本">1.0.0</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要垂直布局的场景',
        },
        {
            input: '自定义列数的描述列表',
            output: '<!-- correct -->\n[场景说明] 需要多列布局的信息展示\n[代码实现]\n<FDescriptions title="详细信息" :column="4">\n  <FDescriptionsItem label="ID">12345</FDescriptionsItem>\n  <FDescriptionsItem label="创建时间">2023-01-01</FDescriptionsItem>\n  <FDescriptionsItem label="状态">正常</FDescriptionsItem>\n  <FDescriptionsItem label="负责人">李四</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要多列展示的场景',
        },
        {
            input: '内容跨列的描述列表',
            output: '<!-- correct -->\n[场景说明] 需要内容跨多列展示\n[代码实现]\n<FDescriptions title="项目信息">\n  <FDescriptionsItem label="项目名称" :span="2">Fes Design 组件库开发</FDescriptionsItem>\n  <FDescriptionsItem label="开始时间">2023-01-01</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于内容较长的场景',
        },
        {
            input: '自定义样式的描述列表',
            output: '<!-- correct -->\n[场景说明] 需要自定义样式的信息展示\n[代码实现]\n<FDescriptions title="自定义样式" :labelStyle="{ color: \'red\' }" :contentStyle="{ fontWeight: \'bold\' }">\n  <FDescriptionsItem label="重要信息">请仔细阅读</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要强调特定信息的场景',
        },
        {
            input: '大尺寸的描述列表',
            output: '<!-- correct -->\n[场景说明] 需要突出显示的信息展示\n[代码实现]\n<FDescriptions title="公告" size="large">\n  <FDescriptionsItem label="标题">系统升级通知</FDescriptionsItem>\n  <FDescriptionsItem label="内容">系统将于今晚进行升级维护</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要突出显示的场景',
        },
        {
            input: '使用插槽的自定义描述列表',
            output: '<!-- correct -->\n[场景说明] 需要自定义标签和内容的描述列表\n[代码实现]\n<FDescriptions title="自定义内容">\n  <FDescriptionsItem>\n    <template #label>\n      <span style="color: red">自定义标签</span>\n    </template>\n    自定义内容\n  </FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于需要高度自定义的场景',
        },
        {
            input: '缺少必填子组件',
            output: '<!-- error -->\n[错误分析] 描述列表必须包含FDescriptionsItem子组件\n[正确代码]\n<FDescriptions title="用户信息">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n</FDescriptions>\n[注意事项] 必须至少包含一个FDescriptionsItem子组件',
        },
        {
            input: '错误的分隔符使用',
            output: '<!-- error -->\n[错误分析] 当labelPlacement为top时，separator属性无效\n[正确代码]\n<FDescriptions title="用户信息" labelPlacement="top">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n</FDescriptions>\n[注意事项] separator仅在labelPlacement为left时生效',
        },
        {
            input: '错误的列数设置',
            output: '<!-- error -->\n[错误分析] 列数必须为正整数\n[正确代码]\n<FDescriptions title="用户信息" :column="3">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n</FDescriptions>\n[注意事项] column属性必须为正整数',
        },
        {
            input: '空数据状态',
            output: '<!-- correct -->\n[场景说明] 处理空数据状态\n[代码实现]\n<FDescriptions title="空数据展示">\n  <FDescriptionsItem label="暂无数据">--</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于数据可能为空的场景',
        },
        {
            input: '极长内容处理',
            output: '<!-- correct -->\n[场景说明] 处理极长内容的展示\n[代码实现]\n<FDescriptions title="长文本展示">\n  <FDescriptionsItem label="描述" :span="3">\n    这是一个非常非常非常非常非常非常非常非常非常非常非常非常长的文本内容...\n  </FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 使用span属性控制跨列展示长文本',
        },
        {
            input: '特殊字符处理',
            output: '<!-- correct -->\n[场景说明] 处理包含特殊字符的内容\n[代码实现]\n<FDescriptions title="特殊字符">\n  <FDescriptionsItem label="HTML">&lt;div&gt;test&lt;/div&gt;</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 自动转义特殊字符，保证安全显示',
        },
        {
            input: '怎么用描述列表展示用户信息',
            output: '<!-- correct -->\n[场景说明] 展示用户基本信息\n[代码实现]\n<FDescriptions title="用户信息">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n  <FDescriptionsItem label="年龄">25</FDescriptionsItem>\n  <FDescriptionsItem label="性别">男</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 适用于简单的信息展示场景',
        },
        {
            input: '描述列表的标签能放右边吗',
            output: '<!-- correct -->\n[场景说明] 标签右对齐的展示方式\n[代码实现]\n<FDescriptions title="用户信息" labelAlign="right">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 使用labelAlign="right"实现标签右对齐',
        },
        {
            input: '描述列表怎么加边框',
            output: '<!-- correct -->\n[场景说明] 带边框的描述列表\n[代码实现]\n<FDescriptions title="系统信息" bordered>\n  <FDescriptionsItem label="版本">1.0.0</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 设置bordered属性为true即可添加边框',
        },
        {
            input: '覆盖描述列表的样式',
            output: '<!-- correct -->\n[场景说明] 自定义描述列表样式\n[代码实现]\n<FDescriptions \n  title="自定义样式" \n  class="custom-descriptions"\n  :labelStyle="{ color: \'red\' }"\n  :contentStyle="{ fontWeight: \'bold\' }"\n>\n  <FDescriptionsItem label="测试">内容</FDescriptionsItem>\n</FDescriptions>\n\n<style>\n.custom-descriptions {\n  background: #f5f5f5;\n  padding: 16px;\n}\n</style>\n[最佳实践] 通过class和style属性自定义样式',
        },
        {
            input: '描述列表和表格一起使用',
            output: '<!-- correct -->\n[场景说明] 描述列表和表格组合使用\n[代码实现]\n<FDescriptions title="基本信息">\n  <FDescriptionsItem label="姓名">张三</FDescriptionsItem>\n  <FDescriptionsItem label="年龄">25</FDescriptionsItem>\n</FDescriptions>\n\n<FTable :data="tableData" />\n[最佳实践] 描述列表展示概要信息，表格展示详细数据',
        },
        {
            input: '描述列表和表单一起使用',
            output: '<!-- correct -->\n[场景说明] 描述列表和表单组合使用\n[代码实现]\n<FForm>\n  <FFormItem label="用户名">\n    <FInput />\n  </FFormItem>\n</FForm>\n\n<FDescriptions title="当前用户信息">\n  <FDescriptionsItem label="用户名">admin</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 表单用于编辑，描述列表用于展示',
        },
    ],
};
