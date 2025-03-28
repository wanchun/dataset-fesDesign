import type { IComponentMetadata } from '../type';

export const asideMeta: IComponentMetadata = {
    title: '容器侧边栏',
    componentName: 'FAside',
    description: '布局侧边栏组件，用于构建页面布局结构。支持固定定位、边框样式和深色主题，通常与FLayout配合使用。',
    scenarios: [
        '后台管理系统：作为主导航栏使用，固定定位确保导航始终可见，深色主题提升视觉层次感。',
        '文档站点：作为目录导航区域，边框样式清晰划分内容区域。',
        '仪表盘：作为功能菜单容器，固定定位保证操作便捷性。',
        '应用设置：作为二级导航容器，与主内容区域形成明确视觉分区。',
        '响应式布局：在不同屏幕尺寸下保持布局结构稳定性。',
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
    propRelations: [
        {
            source: 'inverted',
            target: 'bordered',
            effect: '深色主题下边框样式自动适配',
            notes: [
                '当启用深色主题时边框颜色会自动调整为浅色',
                '适用于需要高对比度的设计场景',
            ],
        },
    ],
    props: [
        {
            name: 'fixed',
            title: '浮动模式',
            valueType: 'bool',
            description: '是否启用固定定位模式，开启后侧边栏会固定在视窗中不随页面滚动',
            defaultValue: false,
            example: true,
        },
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否显示边框，用于视觉分隔内容区域',
            defaultValue: false,
            example: true,
        },
        {
            name: 'inverted',
            title: '深色',
            valueType: 'bool',
            description: '是否启用深色主题，适用于需要高对比度的设计场景',
            defaultValue: false,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '侧边栏内容区域，可放置导航菜单等组件',
            required: true,
        },
    ],
    templates: [
        {
            input: '基础侧边栏',
            output: '[场景说明] 创建基础布局结构\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 必须包含在FLayout组件内使用',
        },
        {
            input: '固定定位侧边栏',
            output: '[场景说明] 创建始终可见的导航栏\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside fixed>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 适合长页面需要保持导航可见的场景',
        },
        {
            input: '带边框的深色侧边栏',
            output: '[场景说明] 创建高对比度的导航区域\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside bordered inverted>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 深色主题下边框会自动适配为浅色',
        },
        {
            input: '错误：单独使用侧边栏',
            output: '[错误分析] 缺少必要的FLayout父容器\n[正确代码] <!-- correct -->\n<FLayout>\n  <FAside />\n</FLayout>\n[注意事项] FAside必须作为FLayout的直接子元素',
        },
        {
            input: '响应式侧边栏',
            output: '[场景说明] 创建适应不同屏幕的布局\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside :fixed="isMobile">\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 通过响应式变量控制fixed属性',
        },
        {
            input: '自定义样式侧边栏',
            output: '[场景说明] 添加自定义样式覆盖\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside style="background: linear-gradient(#333, #111)">\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 使用style属性实现复杂背景效果',
        },
        {
            input: '侧边栏放错位置',
            output: '[错误分析] 嵌套在非FLayout容器内\n[正确代码] <!-- correct -->\n<FLayout>\n  <FAside />\n</FLayout>\n[注意事项] 只能在FLayout内使用',
        },
        {
            input: '侧边栏里面放表格',
            output: '[错误分析] 不合理的子组件类型\n[正确代码] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu />\n  </FAside>\n</FLayout>\n[注意事项] 应放置导航类组件而非数据展示组件',
        },
        {
            input: '怎么让侧边栏变黑',
            output: '[场景说明] 启用深色主题\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside inverted>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 使用inverted属性而非自定义颜色',
        },
        {
            input: '侧边栏不随页面滚动',
            output: '[场景说明] 固定定位实现\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside fixed>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] fixed属性适用于长内容页面',
        },
        {
            input: '侧边栏加边框线',
            output: '[场景说明] 添加边框分隔\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside bordered>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 边框颜色会自动适配主题',
        },
        {
            input: '侧边栏和主内容布局',
            output: '[场景说明] 完整布局结构\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu />\n  </FAside>\n  <FContent>主内容区</FContent>\n</FLayout>\n[最佳实践] 配合FContent构建完整布局',
        },
        {
            input: '侧边栏宽度怎么调',
            output: '[场景说明] 通过样式控制宽度\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside style="width: 240px">\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 使用style或class控制尺寸',
        },
        {
            input: '侧边栏里面放啥',
            output: '[场景说明] 典型内容配置\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu>\n      <FMenuItem>首页</FMenuItem>\n    </FMenu>\n  </FAside>\n</FLayout>\n[最佳实践] 推荐放置导航菜单组件',
        },
        {
            input: '侧边栏能放按钮吗',
            output: '[错误分析] 不符合设计规范\n[正确代码] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu>\n      <FMenuItem>\n        <FButton type="text">操作</FButton>\n      </FMenuItem>\n    </FMenu>\n  </FAside>\n</FLayout>\n[注意事项] 按钮应放在菜单项内而非直接放置',
        },
        {
            input: '侧边栏背景色修改',
            output: '[场景说明] 自定义背景颜色\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside style="background: #001529">\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 使用style属性实现精确控制',
        },
        {
            input: '侧边栏和顶部导航组合',
            output: '[场景说明] 复合布局结构\n[代码实现] <!-- correct -->\n<FLayout>\n  <FHeader>顶部导航</FHeader>\n  <FAside>\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 多布局组件组合使用',
        },
        {
            input: '侧边栏默认展开',
            output: '[场景说明] 控制子菜单状态\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside>\n    <FMenu :defaultOpenKeys="[\'1\']" />\n  </FAside>\n</FLayout>\n[注意事项] 展开状态由FMenu组件控制',
        },
        {
            input: '侧边栏空状态',
            output: '[场景说明] 无内容时的展示\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside>\n    <div class="empty-tip">暂无菜单配置</div>\n  </FAside>\n</FLayout>\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '侧边栏响应式隐藏',
            output: '[场景说明] 移动端适配方案\n[代码实现] <!-- correct -->\n<FLayout>\n  <FAside v-if="!isMobile">\n    <FMenu />\n  </FAside>\n</FLayout>\n[最佳实践] 通过响应式变量控制显示状态',
        },
    ],
};
