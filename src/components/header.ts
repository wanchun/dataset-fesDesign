import type { IComponentMetadata } from '../type';

export const headerMeta: IComponentMetadata = {
    title: '容器头部',
    componentName: 'FHeader',
    description: '布局容器头部组件，用于构建页面顶部区域。支持固定定位、边框样式和深色主题，适用于各种页面布局场景。',
    scenarios: [
        '后台管理系统：作为页面顶部导航栏，包含logo、菜单和用户信息，使用fixed属性固定在页面顶部',
        '移动端页面：作为页面标题栏，使用bordered属性添加底部边框增强视觉分隔',
        '深色主题应用：使用inverted属性适配深色主题的界面风格',
        '单页应用：作为固定头部区域，保持导航始终可见',
        '响应式布局：配合FLayout组件实现自适应页面结构',
    ],
    parent: {
        types: [],
        restrictions: [
            {
                parent: 'FLayout',
                description: '必须作为FLayout组件的直接子元素',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'inverted',
            target: 'bordered',
            effect: '深色模式下边框颜色会自动适配',
            notes: [
                '当inverted为true时，边框颜色会自动调整为深色主题适配的样式',
            ],
        },
    ],
    props: [
        {
            name: 'fixed',
            title: '浮动模式',
            valueType: 'bool',
            description: '是否固定在页面顶部',
            defaultValue: false,
            example: true,
        },
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否显示底部边框',
            defaultValue: false,
            example: true,
        },
        {
            name: 'inverted',
            title: '深色',
            valueType: 'bool',
            description: '是否使用深色主题样式',
            defaultValue: false,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '头部内容区域，可放置logo、导航菜单等元素',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础头部容器',
            output: '<!-- correct -->\n<FHeader>\n  <div>Logo</div>\n  <nav>导航菜单</nav>\n</FHeader>\n\n[场景说明] 基本头部容器，包含logo和导航菜单\n[代码实现] 使用默认配置的头部容器\n[最佳实践] 建议将logo放在左侧，导航菜单放在右侧',
        },
        {
            input: '固定头部',
            output: '<!-- correct -->\n<FHeader fixed>\n  <div>网站标题</div>\n</FHeader>\n\n[场景说明] 固定在页面顶部的头部\n[代码实现] 设置fixed属性为true\n[最佳实践] 适合长页面需要保持导航可见的场景',
        },
        {
            input: '带边框的头部',
            output: '<!-- correct -->\n<FHeader bordered>\n  <div>应用名称</div>\n</FHeader>\n\n[场景说明] 带有底部边框的头部\n[代码实现] 设置bordered属性为true\n[最佳实践] 适合需要视觉分隔的页面布局',
        },
        {
            input: '深色主题头部',
            output: '<!-- correct -->\n<FHeader inverted>\n  <div>深色主题</div>\n</FHeader>\n\n[场景说明] 适配深色主题的头部\n[代码实现] 设置inverted属性为true\n[最佳实践] 适合夜间模式或深色风格的界面',
        },
        {
            input: '固定且带边框的头部',
            output: '<!-- correct -->\n<FHeader fixed bordered>\n  <div>综合示例</div>\n</FHeader>\n\n[场景说明] 同时固定且有边框的头部\n[代码实现] 同时设置fixed和bordered属性\n[最佳实践] 适合需要突出显示且保持固定的导航区域',
        },
        {
            input: '错误：缺少父容器',
            output: '<!-- error -->\n<FHeader></FHeader>\n\n[错误分析] FHeader必须作为FLayout的子组件使用\n[正确代码] <FLayout><FHeader></FHeader></FLayout>\n[注意事项] 布局组件需要正确的父子关系才能正常工作',
        },
        {
            input: '错误：无效的子元素',
            output: '<!-- error -->\n<FHeader>\n  <FButton>按钮</FButton>\n</FHeader>\n\n[错误分析] 头部容器不适合直接放置交互元素\n[正确代码] <FHeader><div class="actions"><FButton>按钮</FButton></div></FHeader>\n[注意事项] 交互元素应该包裹在容器内',
        },
        {
            input: '边界：空头部',
            output: '<!-- correct -->\n<FHeader></FHeader>\n\n[场景说明] 空内容的头部容器\n[代码实现] 不提供任何子内容\n[最佳实践] 可用于占位或动态内容加载场景',
        },
        {
            input: '边界：极长内容',
            output: '<!-- correct -->\n<FHeader>\n  <div style="width: 2000px">极长内容...</div>\n</FHeader>\n\n[场景说明] 包含超长内容的头部\n[代码实现] 内容宽度超出容器\n[最佳实践] 应该添加滚动或截断处理',
        },
        {
            input: '样式覆盖案例',
            output: '<!-- correct -->\n<FHeader style="height: 80px; background: linear-gradient(to right, #1890ff, #722ed1)">\n  <div style="color: white">自定义样式</div>\n</FHeader>\n\n[场景说明] 自定义样式的头部\n[代码实现] 使用style属性覆盖默认样式\n[最佳实践] 保持与整体设计风格一致',
        },
        {
            input: '组合：与布局组件使用',
            output: '<!-- correct -->\n<FLayout>\n  <FHeader fixed>\n    <div>系统名称</div>\n  </FHeader>\n  <FContent>主要内容</FContent>\n</FLayout>\n\n[场景说明] 完整的页面布局结构\n[代码实现] 组合使用FLayout、FHeader和FContent\n[最佳实践] 构建标准的页面框架',
        },
        {
            input: '组合：响应式布局',
            output: '<!-- correct -->\n<FLayout>\n  <FHeader>\n    <div class="responsive-header">响应式头部</div>\n  </FHeader>\n</FLayout>\n\n[场景说明] 响应式设计的头部\n[代码实现] 结合媒体查询实现响应式\n[最佳实践] 使用CSS媒体查询适配不同设备',
        },
        {
            input: '怎么让头部固定在顶上？',
            output: '<!-- correct -->\n<FHeader fixed>\n  固定头部内容\n</FHeader>\n\n[场景说明] 固定在顶部的头部\n[代码实现] 设置fixed属性\n[最佳实践] 适合需要常驻导航的场景',
        },
        {
            input: '头部怎么变黑色？',
            output: '<!-- correct -->\n<FHeader inverted>\n  深色头部\n</FHeader>\n\n[场景说明] 深色主题的头部\n[代码实现] 设置inverted属性\n[最佳实践] 适合夜间模式或深色设计',
        },
        {
            input: '头部下面想加条线',
            output: '<!-- correct -->\n<FHeader bordered>\n  带边框的头部\n</FHeader>\n\n[场景说明] 带底部边框的头部\n[代码实现] 设置bordered属性\n[最佳实践] 增强视觉分隔效果',
        },
    ],
};
