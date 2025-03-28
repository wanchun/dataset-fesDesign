import type { IComponentMetadata } from '../type';

export const spinMeta: IComponentMetadata = {
    title: '加载中',
    componentName: 'FSpin',
    description: '用于页面和区块的加载中状态，提供多种尺寸和颜色配置，支持延迟显示和自定义描述。',
    scenarios: [
        '页面加载：在页面初始化或数据加载时显示加载状态，提升用户体验',
        '表单提交：表单提交过程中显示加载状态，防止重复提交',
        '表格加载：表格数据加载时显示加载状态，保持界面一致性',
        '卡片加载：卡片内容加载时显示加载状态，避免空白区域',
        '延迟加载：设置延迟显示加载状态，避免短暂操作导致的闪烁',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FSpace',
                description: '间距布局场景下建议放在间距组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'delay',
            target: 'show',
            effect: '延迟显示加载状态',
            notes: [
                '当delay大于0时，show属性会在延迟后生效',
                '适用于避免短暂操作导致的闪烁',
            ],
        },
    ],
    props: [
        {
            name: 'show',
            title: '显示',
            valueType: 'bool',
            description: '是否显示加载状态',
            defaultValue: true,
            example: true,
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
                        usage: '紧凑场景使用，如表单内联加载',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出加载状态的页面重点区域',
                    },
                ],
            },
            description: '加载状态的大小',
            defaultValue: 'middle',
            example: 'middle',
        },
        {
            name: 'description',
            title: '描述',
            valueType: 'string',
            description: '加载状态的描述文字',
            example: '加载中...',
        },
        {
            name: 'stroke',
            title: '边框颜色',
            valueType: 'string',
            description: '加载状态的颜色',
            example: '#5384ff',
        },
        {
            name: 'delay',
            title: '延迟显示',
            valueType: 'number',
            description: '延迟显示加载效果的时间（毫秒）',
            defaultValue: 0,
            example: 200,
        },
        {
            name: 'icon',
            title: '图标',
            valueType: 'node',
            description: '自定义加载图标',
            example: '<LoadingOutlined />',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '包裹内容，加载状态会覆盖在内容上方',
            required: false,
        },
        {
            name: 'icon',
            description: '自定义加载图标',
            required: false,
        },
        {
            name: 'description',
            description: '自定义描述信息',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础用法',
            output: '<!-- correct -->\n[场景说明] 基本加载状态展示\n[代码实现] <FSpin />\n[最佳实践] 适用于简单的加载场景',
        },
        {
            input: '自定义颜色',
            output: '<!-- correct -->\n[场景说明] 不同颜色的加载状态\n[代码实现] <FSpin stroke="#00cb91" />\n[最佳实践] 可根据品牌色系自定义加载颜色',
        },
        {
            input: '卡片加载',
            output: '<!-- correct -->\n[场景说明] 卡片内容加载状态\n[代码实现] <FSpin :show="loading">\n  <FCard title="卡片标题">卡片内容</FCard>\n</FSpin>\n[最佳实践] 包裹内容时自动添加遮罩层',
        },
        {
            input: '延迟显示',
            output: '<!-- correct -->\n[场景说明] 避免短暂操作导致的闪烁\n[代码实现] <FSpin :delay="300" />\n[最佳实践] 延迟时间建议200-500ms',
        },
        {
            input: '自定义图标',
            output: '<!-- correct -->\n[场景说明] 使用自定义图标\n[代码实现] <FSpin>\n  <template #icon>\n    <CustomLoadingIcon />\n  </template>\n</FSpin>\n[最佳实践] 图标应与加载状态语义一致',
        },
        {
            input: '错误示例：缺少必要属性',
            output: '<!-- error -->\n[错误分析] 缺少show属性导致无法控制显示状态\n[正确代码] <FSpin :show="true" />\n[注意事项] show属性是控制显示的关键属性',
        },
        {
            input: '错误示例：无效颜色值',
            output: '<!-- error -->\n[错误分析] 使用了无效的颜色格式\n[正确代码] <FSpin stroke="#00cb91" />\n[注意事项] 颜色值应为有效的十六进制格式',
        },
        {
            input: '错误示例：延迟时间类型错误',
            output: '<!-- error -->\n[错误分析] delay属性应为数字类型\n[正确代码] <FSpin :delay="200" />\n[注意事项] delay属性单位为毫秒，需传入数字',
        },
        {
            input: '空状态处理',
            output: '<!-- correct -->\n[场景说明] 加载状态为空时的处理\n[代码实现] <FSpin :show="false">内容</FSpin>\n[最佳实践] 当show为false时直接显示内容',
        },
        {
            input: '极值测试：超大延迟时间',
            output: '<!-- correct -->\n[场景说明] 测试超大延迟时间的表现\n[代码实现] <FSpin :delay="10000" />\n[最佳实践] 延迟时间不宜过长，建议不超过5秒',
        },
        {
            input: '异常数据：无效尺寸',
            output: '<!-- error -->\n[错误分析] 使用了不支持的尺寸值\n[正确代码] <FSpin size="middle" />\n[注意事项] size仅支持small/middle/large',
        },
        {
            input: '怎么让加载中显示文字',
            output: '<!-- correct -->\n[场景说明] 添加加载描述文字\n[代码实现] <FSpin description="加载中..." />\n[最佳实践] 描述文字应简洁明了',
        },
        {
            input: '加载中颜色怎么改',
            output: '<!-- correct -->\n[场景说明] 修改加载状态颜色\n[代码实现] <FSpin stroke="#ff4d4f" />\n[最佳实践] 颜色应与品牌色系保持一致',
        },
        {
            input: '为啥加载中不显示',
            output: '<!-- error -->\n[错误分析] 可能原因：1.show为false 2.被父元素遮挡\n[正确代码] <FSpin :show="true" style="z-index: 1000" />\n[注意事项] 检查show属性和z-index设置',
        },
        {
            input: '样式覆盖案例',
            output: '<!-- correct -->\n[场景说明] 自定义加载状态样式\n[代码实现] <FSpin class="custom-spin" />\n<style>\n.custom-spin {\n  --spin-color: #f29360;\n  --spin-size: 40px;\n}\n</style>\n[最佳实践] 通过CSS变量覆盖默认样式',
        },
        {
            input: '与表格组合使用',
            output: '<!-- correct -->\n[场景说明] 表格数据加载状态\n[代码实现] <FSpin :show="loading">\n  <FTable :data="tableData" />\n</FSpin>\n[最佳实践] 表格加载时保持原有布局',
        },
        {
            input: '与表单组合使用',
            output: '<!-- correct -->\n[场景说明] 表单提交加载状态\n[代码实现] <FSpin :show="submitting">\n  <FForm @submit="handleSubmit" />\n</FSpin>\n[最佳实践] 防止表单重复提交',
        },
    ],
};
