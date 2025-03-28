import type { IComponentMetadata } from '../type';

export const cardMeta: IComponentMetadata = {
    title: '卡片',
    componentName: 'FCard',
    description: '卡片组件用于对信息进行模块分类或将零散的信息聚合到一起，使其成为一个整体。支持自定义标题、内容、底栏和样式，适用于各种信息展示场景。',
    scenarios: [
        '信息聚合：将相关数据或内容聚合在卡片中展示，提高信息可读性和组织性。',
        '仪表盘：在仪表盘中使用卡片展示关键指标或数据概览，便于快速浏览。',
        '产品展示：用于电商平台展示产品信息，包含图片、描述和操作按钮。',
        '用户资料：展示用户基本信息、头像和社交链接，保持界面整洁美观。',
        '设置面板：将相关设置项分组在卡片中，提高设置界面的可用性。',
        '数据统计：展示统计数据图表和摘要，便于数据分析和决策。',
        '通知公告：用于系统通知或公告展示，突出重要信息。',
        '内容卡片：在内容平台展示文章、视频等内容的摘要和元信息。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FButton',
        'FTabs',
        'FTabPane',
    ],
    propRelations: [
        {
            source: 'header',
            target: 'divider',
            effect: '当header存在时divider属性才生效',
            notes: [
                '没有标题时分割线不会显示',
                '适用于需要根据标题动态控制分割线的场景',
            ],
        },
        {
            source: 'bordered',
            target: 'shadow',
            effect: '当bordered为false时阴影效果更明显',
            notes: [
                '无边框卡片更适合使用阴影效果',
                '适用于需要突出卡片悬浮状态的场景',
            ],
        },
    ],
    props: [
        {
            name: 'header',
            title: '标题',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'node',
                ],
            },
            description: '卡片的标题内容，可以是字符串或React节点',
            example: '卡片标题',
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
                        usage: '紧凑布局场景使用',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出显示的重点内容区域',
                    },
                ],
            },
            description: '设置卡片大小，影响内边距和字体大小',
            defaultValue: 'middle',
            example: 'middle',
        },
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否显示卡片边框',
            defaultValue: true,
            example: true,
        },
        {
            name: 'divider',
            title: '分割线',
            valueType: 'bool',
            description: '若有header，则是否显示标题与内容之间的分割线',
            defaultValue: true,
            example: true,
        },
        {
            name: 'shadow',
            title: '阴影',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'always',
                        title: '总是显示',
                        usage: '默认效果，卡片始终有阴影',
                    },
                    {
                        value: 'never',
                        title: '从不显示',
                        usage: '简洁风格，卡片无阴影',
                    },
                    {
                        value: 'hover',
                        title: '悬停显示',
                        usage: '交互效果，鼠标悬停时显示阴影',
                    },
                ],
            },
            description: '设置阴影显示时机',
            defaultValue: 'always',
            example: 'always',
        },
        {
            name: 'bodyStyle',
            title: '内容样式',
            valueType: 'object',
            description: '自定义卡片内容区域的CSS样式',
            example: {
                padding: '12px',
                backgroundColor: '#f5f5f5',
            },
        },
    ],
    events: [
        {
            name: 'onClick',
            description: '点击卡片时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '鼠标事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '卡片的主要内容区域',
            required: false,
        },
        {
            name: 'header',
            description: '自定义卡片标题内容',
            required: false,
        },
        {
            name: 'footer',
            description: '自定义卡片底栏内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础卡片',
            output: '<!-- correct -->\n[场景说明] 展示基本卡片结构，包含标题和简单内容\n[代码实现]\n<FCard header="基础卡片">\n  这里是卡片内容，可以包含文本、图片或其他元素\n</FCard>\n[最佳实践] 保持内容简洁，避免在基础卡片中放入过多元素',
        },
        {
            input: '自定义标题卡片',
            output: '<!-- correct -->\n[场景说明] 需要更复杂的标题布局，包含操作按钮\n[代码实现]\n<FCard>\n  <template #header>\n    <div style="display: flex; justify-content: space-between;">\n      <span>自定义标题</span>\n      <FButton type="link">更多</FButton>\n    </div>\n  </template>\n  卡片内容\n</FCard>\n[最佳实践] 使用flex布局实现标题区域左右对齐',
        },
        {
            input: '无边框卡片',
            output: '<!-- correct -->\n[场景说明] 需要更现代化的无边框设计\n[代码实现]\n<FCard :bordered="false" shadow="hover">\n  <template #header>无边框卡片</template>\n  鼠标悬停时显示阴影效果\n</FCard>\n[最佳实践] 无边框卡片适合搭配阴影效果增强视觉层次',
        },
        {
            input: '带底栏的卡片',
            output: '<!-- correct -->\n[场景说明] 需要在卡片底部添加操作按钮\n[代码实现]\n<FCard header="带操作的卡片">\n  卡片内容\n  <template #footer>\n    <FButton size="small">取消</FButton>\n    <FButton size="small" type="primary" style="margin-left: 8px;">确认</FButton>\n  </template>\n</FCard>\n[最佳实践] 底栏按钮应保持适当间距，主按钮在右侧',
        },
        {
            input: '小尺寸卡片',
            output: '<!-- correct -->\n[场景说明] 在有限空间内展示简洁信息\n[代码实现]\n<FCard size="small" header="紧凑卡片">\n  简洁的内容展示\n</FCard>\n[最佳实践] 小尺寸卡片适合展示摘要信息或作为列表项',
        },
        {
            input: '自定义内容样式',
            output: '<!-- correct -->\n[场景说明] 需要调整内容区域的内边距\n[代码实现]\n<FCard :bodyStyle="{ padding: \'0\' }">\n  <div style="padding: 16px;">自定义内边距的内容</div>\n</FCard>\n[最佳实践] 使用bodyStyle覆盖默认样式时，确保内容可读性',
        },
        {
            input: '带分割线的卡片',
            output: '<!-- correct -->\n[场景说明] 需要明确区分标题和内容\n[代码实现]\n<FCard header="带分割线的卡片" :divider="true">\n  卡片内容\n</FCard>\n[最佳实践] 分割线适合内容较长的卡片，提高可读性',
        },
        {
            input: '悬停阴影效果',
            output: '<!-- correct -->\n[场景说明] 需要交互反馈的可点击卡片\n[代码实现]\n<FCard shadow="hover" style="cursor: pointer;">\n  <template #header>悬停效果</template>\n  鼠标悬停时显示阴影\n</FCard>\n[最佳实践] 为可点击卡片添加cursor: pointer样式',
        },
        {
            input: '卡片里放字符串header',
            output: '<!-- error -->\n[错误分析] 直接传递字符串到header属性会导致类型错误\n[正确代码]\n<FCard header="字符串标题">\n  内容\n</FCard>\n[注意事项] header属性支持字符串或节点，直接传递字符串是正确用法',
        },
        {
            input: '缺少header但设置了divider',
            output: '<!-- error -->\n[错误分析] 没有header时divider不会生效\n[正确代码]\n<FCard header="有标题" :divider="true">\n  内容\n</FCard>\n[注意事项] divider只在有header时有效，无header时应设为false',
        },
        {
            input: 'bodyStyle传递字符串',
            output: '<!-- error -->\n[错误分析] bodyStyle需要对象类型，传递字符串会导致错误\n[正确代码]\n<FCard :bodyStyle="{ padding: \'12px\' }">\n  内容\n</FCard>\n[注意事项] bodyStyle必须是包含CSS属性的对象',
        },
        {
            input: '空卡片如何处理',
            output: '<!-- correct -->\n[场景说明] 处理卡片内容为空的状态\n[代码实现]\n<FCard header="空状态卡片">\n  <template v-if="!content">\n    <div style="color: #999; text-align: center; padding: 20px;">暂无数据</div>\n  </template>\n  <template v-else>\n    {{ content }}\n  </template>\n</FCard>\n[最佳实践] 为空状态提供友好的提示信息',
        },
        {
            input: '卡片内容超长',
            output: '<!-- correct -->\n[场景说明] 处理卡片内容过长的情况\n[代码实现]\n<FCard header="长内容卡片" style="max-height: 300px;">\n  <div style="overflow-y: auto; max-height: 250px;">\n    很长很长的内容...\n  </div>\n</FCard>\n[最佳实践] 为长内容卡片添加滚动条，避免内容溢出',
        },
        {
            input: '卡片阴影无效',
            output: '<!-- error -->\n[错误分析] 阴影值不在允许范围内\n[正确代码]\n<FCard shadow="hover">\n  内容\n</FCard>\n[注意事项] shadow必须是\'always\'、\'never\'或\'hover\'之一',
        },
        {
            input: '怎么用卡片展示产品',
            output: '<!-- correct -->\n[场景说明] 电商产品展示卡片\n[代码实现]\n<FCard style="width: 240px">\n  <img src="product.jpg" style="width: 100%">\n  <div style="padding: 12px">\n    <h3>产品名称</h3>\n    <p>产品描述...</p>\n    <FButton type="primary" block>购买</FButton>\n  </div>\n</FCard>\n[最佳实践] 产品卡片应包含图片、名称、描述和操作按钮',
        },
        {
            input: '卡片样式怎么改',
            output: '<!-- correct -->\n[场景说明] 自定义卡片样式\n[代码实现]\n<FCard \n  header="自定义样式卡片"\n  :bodyStyle="{ \n    background: \'#f0f8ff\', \n    borderRadius: \'0 0 8px 8px\'\n  }"\n  :headerStyle="{ \n    background: \'#1890ff\', \n    color: \'white\',\n    borderRadius: \'8px 8px 0 0\'\n  }"\n>\n  内容\n</FCard>\n[最佳实践] 使用bodyStyle和headerStyle分别定制内容和标题样式',
        },
        {
            input: '卡片和标签页组合',
            output: '<!-- correct -->\n[场景说明] 卡片内嵌套标签页\n[代码实现]\n<FCard>\n  <FTabs>\n    <FTabPane name="tab1" label="标签1">内容1</FTabPane>\n    <FTabPane name="tab2" label="标签2">内容2</FTabPane>\n  </FTabs>\n</FCard>\n[最佳实践] 卡片内标签页应调整内边距保持视觉一致性',
        },
        {
            input: '卡片组怎么布局',
            output: '<!-- correct -->\n[场景说明] 多个卡片的网格布局\n[代码实现]\n<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">\n  <FCard v-for="i in 3" :key="i" :header="\'卡片\' + i">\n    内容 {{ i }}\n  </FCard>\n</div>\n[最佳实践] 使用CSS Grid实现响应式卡片布局，保持一致的间距',
        },
        {
            input: '卡片标题颜色',
            output: '<!-- correct -->\n[场景说明] 自定义卡片标题样式\n[代码实现]\n<FCard>\n  <template #header>\n    <span style="color: #ff4d4f; font-weight: bold;">红色标题</span>\n  </template>\n  内容\n</FCard>\n[最佳实践] 通过插槽自定义标题样式，保持品牌一致性',
        },
    ],
};
