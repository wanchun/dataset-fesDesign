import type { IComponentMetadata } from '../type';

export const mainMeta: IComponentMetadata = {
    title: '容器主体',
    componentName: 'FMain',
    description: '布局容器组件，作为页面主体内容区域使用。支持反色背景配置，通常作为FLayout的子组件使用。',
    scenarios: [
        '后台管理系统：作为页面主体内容区域，承载主要业务内容展示',
        '仪表盘布局：作为数据可视化区域容器，支持反色背景突出显示',
        '表单页面：作为表单内容容器，提供统一的布局和背景样式',
        '详情页面：作为详情信息展示区域，支持长内容滚动',
        '响应式布局：作为自适应布局的核心容器，配合其他布局组件使用',
    ],
    parent: {
        types: [],
        restrictions: [
            {
                parent: 'FLayout',
                description: '必须作为FLayout的子组件使用',
            },
        ],
    },
    children: [],
    propRelations: [],
    props: [
        {
            name: 'embedded',
            title: '反色背景',
            valueType: 'bool',
            description: '是否启用反色背景模式',
            defaultValue: false,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '容器内容区域',
            required: true,
        },
    ],
    templates: [
        {
            input: '基础用法',
            output: '<!-- correct -->\n[场景说明] 作为页面主体内容容器\n[代码实现]\n<FLayout>\n  <FMain>\n    <div>页面主要内容</div>\n  </FMain>\n</FLayout>\n[最佳实践] 确保始终作为FLayout的子组件使用',
        },
        {
            input: '反色背景模式',
            output: '<!-- correct -->\n[场景说明] 需要突出显示的内容区域\n[代码实现]\n<FLayout>\n  <FMain embedded>\n    <div>需要强调的内容</div>\n  </FMain>\n</FLayout>\n[最佳实践] 适用于需要视觉突出的内容区块',
        },
        {
            input: '错误用法：缺少父容器',
            output: '<!-- error -->\n[错误分析] FMain必须作为FLayout的子组件使用\n[正确代码]\n<FLayout>\n  <FMain>...</FMain>\n</FLayout>\n[注意事项] 单独使用FMain会导致布局异常',
        },
        {
            input: '嵌套内容容器',
            output: '<!-- correct -->\n[场景说明] 多层嵌套的内容区域\n[代码实现]\n<FLayout>\n  <FMain>\n    <div class="content-section">\n      <h2>标题</h2>\n      <p>详细内容...</p>\n    </div>\n  </FMain>\n</FLayout>\n[最佳实践] 可在内部自由组织内容结构',
        },
        {
            input: '响应式布局示例',
            output: '<!-- correct -->\n[场景说明] 适配不同屏幕尺寸\n[代码实现]\n<FLayout>\n  <FMain style="padding: 20px;">\n    <div class="responsive-content">\n      <!-- 响应式内容 -->\n    </div>\n  </FMain>\n</FLayout>\n[最佳实践] 结合CSS媒体查询实现响应式效果',
        },
        {
            input: '错误类型：非布尔值embedded',
            output: '<!-- error -->\n[错误分析] embedded属性必须为布尔值\n[正确代码]\n<FLayout>\n  <FMain :embedded="true">...</FMain>\n</FLayout>\n[注意事项] 动态绑定时应确保值为布尔类型',
        },
        {
            input: '空状态处理',
            output: '<!-- correct -->\n[场景说明] 内容为空时的展示\n[代码实现]\n<FLayout>\n  <FMain>\n    <div v-if="hasContent">内容</div>\n    <div v-else class="empty-state">暂无数据</div>\n  </FMain>\n</FLayout>\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '样式覆盖案例',
            output: '<!-- correct -->\n[场景说明] 自定义容器样式\n[代码实现]\n<FLayout>\n  <FMain style="background: #f5f7fa; padding: 24px;">\n    <!-- 自定义样式内容 -->\n  </FMain>\n</FLayout>\n[最佳实践] 通过style属性覆盖默认样式',
        },
        {
            input: '怎么用这个主体容器？',
            output: '<!-- correct -->\n[场景说明] 基础使用方式\n[代码实现]\n<FLayout>\n  <FMain>\n    <!-- 你的页面内容 -->\n  </FMain>\n</FLayout>\n[最佳实践] 必须放在FLayout组件内使用',
        },
        {
            input: '主体区域能单独使用吗',
            output: '<!-- error -->\n[错误分析] FMain不能单独使用\n[正确代码]\n<FLayout>\n  <FMain>...</FMain>\n</FLayout>\n[注意事项] 必须作为FLayout的子组件',
        },
        {
            input: '如何设置不同的背景色',
            output: '<!-- correct -->\n[场景说明] 使用embedded属性或自定义样式\n[代码实现]\n<FLayout>\n  <!-- 方式1: 使用embedded属性 -->\n  <FMain embedded>...</FMain>\n  \n  <!-- 方式2: 自定义样式 -->\n  <FMain style="background: #f0f2f5">...</FMain>\n</FLayout>\n[最佳实践] 优先使用embedded属性',
        },
    ],
};
