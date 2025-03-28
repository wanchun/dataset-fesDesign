import type { IComponentMetadata } from '../type';

export const skeletonMeta: IComponentMetadata = {
    title: '骨架屏',
    componentName: 'FSkeleton',
    description: '在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。支持多种形状和动画效果，适用于数据加载时的占位展示。',
    scenarios: [
        '数据加载占位：在表格、列表等数据加载时展示骨架屏，提升用户体验',
        '内容预加载：在页面初始化时展示骨架屏，避免空白页面',
        '图片加载占位：在图片加载完成前展示骨架屏，保持布局稳定',
        '表单加载状态：在表单数据加载时展示骨架屏，防止用户误操作',
        '卡片内容加载：在卡片内容加载时展示骨架屏，保持页面结构',
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
            source: 'circle',
            target: [
                'round',
                'sharp',
            ],
            effect: '当circle为true时，round和sharp属性无效',
            notes: [
                '圆形骨架会自动忽略圆角和直角设置',
                '适用于头像等圆形占位场景',
            ],
        },
        {
            source: 'round',
            target: 'sharp',
            effect: '当round为true时，sharp属性无效',
            notes: [
                '圆角骨架会自动忽略直角设置',
                '适用于卡片等圆角占位场景',
            ],
        },
    ],
    props: [
        {
            name: 'text',
            title: '文本',
            valueType: 'bool',
            description: '是否显示为文本骨架',
            defaultValue: false,
            example: false,
        },
        {
            name: 'round',
            title: '圆角',
            valueType: 'bool',
            description: '是否显示为圆角骨架',
            defaultValue: false,
            example: false,
        },
        {
            name: 'circle',
            title: '圆形',
            valueType: 'bool',
            description: '是否显示为圆形骨架',
            defaultValue: false,
            example: false,
        },
        {
            name: 'height',
            title: '高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '骨架的高度，支持数字或带单位的字符串',
            example: '100px',
        },
        {
            name: 'width',
            title: '宽度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '骨架的宽度，支持数字或带单位的字符串',
            example: '100px',
        },
        {
            name: 'size',
            title: '大小',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表格行内占位',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出占位的重点区域',
                    },
                ],
            },
            description: '骨架的预设尺寸',
            defaultValue: 'middle',
            example: 'middle',
        },
        {
            name: 'repeat',
            title: '重复次数',
            valueType: 'number',
            description: '骨架的重复次数，用于多行占位',
            defaultValue: 1,
            example: 3,
        },
        {
            name: 'animated',
            title: '动画',
            valueType: 'bool',
            description: '是否启用加载动画效果',
            defaultValue: true,
            example: true,
        },
        {
            name: 'sharp',
            title: '直角',
            valueType: 'bool',
            description: '是否显示为直角骨架',
            defaultValue: true,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '自定义骨架内容',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础文本骨架屏',
            output: '<!-- correct -->\n[场景说明] 用于文本内容加载时的占位\n[代码实现] <FSkeleton text :repeat="2" />\n[最佳实践] 适合段落文本加载场景',
        },
        {
            input: '自定义宽度的骨架屏',
            output: '<!-- correct -->\n[场景说明] 需要控制宽度的占位\n[代码实现] <FSkeleton text style="width: 60%" />\n[最佳实践] 适合标题等固定比例占位',
        },
        {
            input: '不同尺寸的骨架屏',
            output: '<!-- correct -->\n[场景说明] 展示不同预设尺寸的骨架屏\n[代码实现] <FSkeleton :size="\'small\'" />\n<FSkeleton :size="\'middle\'" />\n<FSkeleton :size="\'large\'" />\n[最佳实践] 根据内容区域选择合适尺寸',
        },
        {
            input: '圆形头像占位',
            output: '<!-- correct -->\n[场景说明] 用户头像加载时的占位\n[代码实现] <FSkeleton circle :size="\'large\'" />\n[最佳实践] 适合用户头像等圆形内容占位',
        },
        {
            input: '自定义高度和圆角的骨架屏',
            output: '<!-- correct -->\n[场景说明] 卡片内容加载时的占位\n[代码实现] <FSkeleton height="100px" round />\n[最佳实践] 适合卡片等圆角容器占位',
        },
        {
            input: '禁用动画的骨架屏',
            output: '<!-- correct -->\n[场景说明] 静态展示的骨架屏\n[代码实现] <FSkeleton :animated="false" />\n[最佳实践] 适合不需要动态效果的场景',
        },
        {
            input: '多行文本占位',
            output: '<!-- correct -->\n[场景说明] 多行文本内容加载时的占位\n[代码实现] <FSkeleton text :repeat="4" />\n[最佳实践] 适合长文本内容占位',
        },
        {
            input: '自定义内容的骨架屏',
            output: '<!-- correct -->\n[场景说明] 自定义占位内容\n[代码实现] <FSkeleton class="wrapper" :width="100" :height="100">\n  <PictureOutlined class="icon" />\n</FSkeleton>\n[最佳实践] 适合特殊内容占位',
        },
        {
            input: '同时设置circle和round属性',
            output: '<!-- error -->\n[错误分析] circle和round属性冲突，circle优先级更高\n[正确代码] <FSkeleton circle />\n[注意事项] 圆形骨架会自动忽略圆角设置',
        },
        {
            input: '错误的repeat类型',
            output: '<!-- error -->\n[错误分析] repeat属性应为数字类型\n[正确代码] <FSkeleton :repeat="3" />\n[注意事项] 确保传入数字类型参数',
        },
        {
            input: '缺少必要的width属性',
            output: '<!-- error -->\n[错误分析] 自定义内容需要指定width和height\n[正确代码] <FSkeleton :width="100" :height="100">\n  <PictureOutlined />\n</FSkeleton>\n[注意事项] 自定义内容必须指定尺寸',
        },
        {
            input: '极小的尺寸',
            output: '<!-- correct -->\n[场景说明] 极小尺寸的占位\n[代码实现] <FSkeleton :width="10" :height="10" />\n[最佳实践] 适合图标等小元素占位',
        },
        {
            input: '极大的尺寸',
            output: '<!-- correct -->\n[场景说明] 全屏占位\n[代码实现] <FSkeleton :width="\'100%\'" :height="\'100vh\'" />\n[最佳实践] 适合整页加载场景',
        },
        {
            input: '空状态',
            output: '<!-- correct -->\n[场景说明] 默认状态的骨架屏\n[代码实现] <FSkeleton />\n[最佳实践] 基本矩形占位',
        },
        {
            input: '怎么用骨架屏',
            output: '<!-- correct -->\n[场景说明] 基本用法示例\n[代码实现] <FSkeleton text />\n[最佳实践] 最简单的文本占位',
        },
        {
            input: '骨架平怎么用',
            output: '<!-- correct -->\n[场景说明] 纠正错别字的查询\n[代码实现] <FSkeleton text />\n[最佳实践] 注意组件名称正确拼写',
        },
        {
            input: '加载时候的占位',
            output: '<!-- correct -->\n[场景说明] 数据加载占位\n[代码实现] <FSkeleton :repeat="3" />\n[最佳实践] 使用repeat属性实现多行占位',
        },
        {
            input: '自定义样式的骨架屏',
            output: '<!-- correct -->\n[场景说明] 自定义样式的骨架屏\n[代码实现] <FSkeleton class="custom-skeleton" />\n<style>\n.custom-skeleton {\n  background-color: #f0f2f5;\n  border-radius: 4px;\n}\n</style>\n[最佳实践] 通过CSS覆盖默认样式',
        },
        {
            input: '与表格组件配合使用',
            output: '<!-- correct -->\n[场景说明] 表格数据加载时的占位\n[代码实现] <FTable>\n  <FSkeleton :repeat="5" />\n</FTable>\n[最佳实践] 适合表格数据加载场景',
        },
        {
            input: '与卡片组件配合使用',
            output: '<!-- correct -->\n[场景说明] 卡片内容加载时的占位\n[代码实现] <FCard>\n  <FSkeleton height="200px" round />\n</FCard>\n[最佳实践] 适合卡片内容加载场景',
        },
    ],
};
