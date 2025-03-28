import type { IComponentMetadata } from '../type';

export const tabsMeta: IComponentMetadata = {
    title: 'Tab页',
    componentName: 'FTabs',
    description: '标签页组件，用于对内容进行分类展示。支持多种样式、位置和交互方式，适用于需要分栏展示内容的场景。',
    scenarios: [
        '内容分类展示：在内容较多的页面使用标签页进行分类，如商品详情页的规格参数、评价等分类展示',
        '表单分组：将复杂表单按照功能模块分组展示，提升表单填写体验',
        '数据报表：不同维度的数据报表通过标签页切换展示',
        '设置面板：系统设置的多项配置通过标签页组织',
        '文档浏览：多章节文档通过标签页快速切换浏览',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FTabPane',
    ],
    propRelations: [
        {
            source: 'type',
            target: 'position',
            effect: '当type为card时，position只能为top',
            notes: [
                '卡片式标签页仅支持顶部位置',
            ],
        },
        {
            source: 'closable',
            target: 'closeMode',
            effect: '当closable为false时，closeMode不生效',
            notes: [
                '只有可关闭的标签页才需要考虑关闭按钮显示方式',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '激活面板',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '当前激活的标签页key值',
            example: '1',
        },
        {
            name: 'panes',
            title: '页签配置',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'name',
                            title: '名称',
                            valueType: 'string',
                            example: '标签1',
                        },
                        {
                            name: 'value',
                            title: '值',
                            valueType: 'string',
                            example: 'tab1',
                        },
                        {
                            name: 'disabled',
                            title: '禁用',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'closable',
                            title: '关闭按钮',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'displayDirective',
                            title: '子项加载策略',
                            valueType: {
                                type: 'oneOf',
                                items: [
                                    {
                                        value: 'if',
                                        title: '切换重新加载',
                                        usage: '每次切换都会重新渲染内容',
                                    },
                                    {
                                        value: 'show',
                                        title: '默认加载',
                                        usage: '内容只加载一次，切换时隐藏/显示',
                                    },
                                    {
                                        value: 'show:lazy',
                                        title: '延迟加载',
                                        usage: '首次显示时才加载，之后切换时隐藏/显示',
                                    },
                                ],
                            },
                            example: 'if',
                        },
                        {
                            name: 'render',
                            title: '渲染内容',
                            valueType: 'node',
                            example: '<div>内容</div>',
                        },
                        {
                            name: 'renderTab',
                            title: '渲染页签',
                            valueType: 'node',
                            example: '<span>自定义标签</span>',
                        },
                    ],
                },
            },
            description: '标签页配置数组，可通过配置方式生成标签页',
            example: [
                {
                    name: '标签1',
                    value: 'tab1',
                    render: '<div>内容1</div>',
                },
            ],
        },
        {
            name: 'position',
            title: '页签位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'left',
                        title: '左',
                        usage: '标签页在左侧垂直排列',
                    },
                    {
                        value: 'top',
                        title: '上',
                        usage: '标签页在顶部水平排列',
                    },
                    {
                        value: 'right',
                        title: '右',
                        usage: '标签页在右侧垂直排列',
                    },
                    {
                        value: 'bottom',
                        title: '下',
                        usage: '标签页在底部水平排列',
                    },
                ],
            },
            description: '标签页的位置',
            defaultValue: 'top',
            example: 'top',
        },
        {
            name: 'type',
            title: '页签类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'line',
                        title: '线型',
                        usage: '带下划线的标签样式',
                    },
                    {
                        value: 'card',
                        title: '卡片样式',
                        usage: '卡片式标签样式',
                    },
                ],
            },
            description: '标签页的样式类型',
            defaultValue: 'line',
            example: 'line',
        },
        {
            name: 'closable',
            title: '可关闭',
            valueType: 'bool',
            description: '是否显示关闭按钮',
            defaultValue: false,
            example: false,
        },
        {
            name: 'closeMode',
            title: '关闭按钮显示类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'visible',
                        title: '一直显示',
                        usage: '关闭按钮始终可见',
                    },
                    {
                        value: 'hover',
                        title: '悬浮显示',
                        usage: '鼠标悬停时显示关闭按钮',
                    },
                ],
            },
            description: '关闭按钮的显示方式',
            defaultValue: 'visible',
            example: 'visible',
        },
        {
            name: 'transition',
            title: '动画',
            valueType: 'bool',
            description: '是否启用切换动画',
            defaultValue: true,
            example: true,
        },
        {
            name: 'prefix',
            title: '前置内容',
            valueType: 'node',
            description: '标签栏前部的内容',
            example: '<span>前缀</span>',
        },
        {
            name: 'suffix',
            title: '后置内容',
            valueType: 'node',
            description: '标签栏后部的内容',
            example: '<span>后缀</span>',
        },
    ],
    events: [
        {
            name: 'onClose',
            description: '关闭标签页时触发',
            parameters: [
                {
                    name: 'key',
                    type: 'string | number',
                    description: '被关闭的标签页key值',
                },
            ],
        },
        {
            name: 'onChange',
            description: '切换标签页时触发',
            parameters: [
                {
                    name: 'key',
                    type: 'string | number',
                    description: '当前激活的标签页key值',
                },
            ],
        },
        {
            name: 'onClickTab',
            description: '点击标签页时触发',
            parameters: [
                {
                    name: 'key',
                    type: 'string | number',
                    description: '被点击的标签页key值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '标签页内容区域，用于放置FTabPane组件',
            required: false,
        },
        {
            name: 'prefix',
            description: '标签栏前部的内容',
            required: false,
        },
        {
            name: 'suffix',
            description: '标签栏后部的内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础标签页',
            output: '<!-- correct -->\n[场景说明] 基本标签页使用场景，默认选中第一项\n[代码实现]\n<FTabs>\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n  <FTabPane name="标签2" value="2">\n    <div>内容2</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 使用name属性作为标签显示文本，value作为唯一标识',
        },
        {
            input: '禁用某个标签页',
            output: '<!-- correct -->\n[场景说明] 需要禁用某些标签页的场景\n[代码实现]\n<FTabs>\n  <FTabPane name="可用标签" value="1">\n    <div>内容1</div>\n  </FTabPane>\n  <FTabPane name="禁用标签" value="2" disabled>\n    <div>内容2</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 通过disabled属性控制标签页是否可交互',
        },
        {
            input: '带图标的标签页',
            output: '<!-- correct -->\n[场景说明] 需要在标签页标题中添加图标的场景\n[代码实现]\n<FTabs>\n  <FTabPane value="1">\n    <template #tab>\n      <span><UserOutlined /> 用户</span>\n    </template>\n    <div>用户内容</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 使用tab插槽自定义标签页标题',
        },
        {
            input: '卡片式标签页',
            output: '<!-- correct -->\n[场景说明] 需要卡片式标签页样式的场景\n[代码实现]\n<FTabs type="card">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n  <FTabPane name="标签2" value="2">\n    <div>内容2</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 卡片式标签页适合需要突出当前选中项的场景',
        },
        {
            input: '可关闭的标签页',
            output: '<!-- correct -->\n[场景说明] 需要支持关闭标签页的场景\n[代码实现]\n<FTabs type="card" closable @close="handleClose">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 配合close事件处理标签页关闭逻辑',
        },
        {
            input: '左侧标签页',
            output: '<!-- correct -->\n[场景说明] 需要左侧垂直排列标签页的场景\n[代码实现]\n<FTabs position="left" style="height: 300px">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 需要设置容器高度以确保垂直布局效果',
        },
        {
            input: '配置方式生成标签页',
            output: '<!-- correct -->\n[场景说明] 需要通过配置数组生成标签页的场景\n[代码实现]\n<FTabs :panes="[\n  {name: \'标签1\', value: \'1\', render: () => h(\'div\', \'内容1\')},\n  {name: \'标签2\', value: \'2\', render: () => h(\'div\', \'内容2\')}\n]"></FTabs>\n[最佳实践] 适合动态生成标签页的场景',
        },
        {
            input: '延迟加载内容',
            output: '<!-- correct -->\n[场景说明] 需要优化性能，延迟加载内容的场景\n[代码实现]\n<FTabs>\n  <FTabPane name="标签1" value="1" displayDirective="show:lazy">\n    <div>延迟加载的内容</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 适合内容较重的标签页优化性能',
        },
        {
            input: '缺少v-model绑定',
            output: '<!-- error -->\n[错误分析] 需要控制当前激活标签页但未使用v-model绑定\n[正确代码]\n<FTabs v-model="activeKey">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[注意事项] 需要双向绑定activeKey变量以控制当前激活项',
        },
        {
            input: '卡片式标签页设置错误位置',
            output: '<!-- error -->\n[错误分析] 卡片式标签页(type="card")只能设置在顶部(position="top")\n[正确代码]\n<FTabs type="card" position="top">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[注意事项] 卡片式标签页不支持左右和底部位置',
        },
        {
            input: '未处理关闭事件',
            output: '<!-- error -->\n[错误分析] 设置了closable但未处理关闭事件，可能导致状态不一致\n[正确代码]\n<FTabs closable @close="handleClose">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[注意事项] 需要实现handleClose方法更新标签页状态',
        },
        {
            input: '空标签页状态',
            output: '<!-- correct -->\n[场景说明] 处理没有标签页内容的空状态\n[代码实现]\n<FTabs v-if="tabs.length > 0">\n  <!-- 标签页内容 -->\n</FTabs>\n<div v-else>暂无标签页</div>\n[最佳实践] 使用条件渲染处理空状态，提升用户体验',
        },
        {
            input: '大量标签页',
            output: '<!-- correct -->\n[场景说明] 处理大量标签页的性能优化\n[代码实现]\n<FTabs>\n  <FTabPane \n    v-for="tab in tabs" \n    :key="tab.id"\n    :name="tab.name"\n    :value="tab.id"\n    displayDirective="show:lazy"\n  >\n    <div>{{ tab.content }}</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 使用v-for循环渲染，配合displayDirective优化性能',
        },
        {
            input: '标签页怎么用',
            output: '<!-- correct -->\n[场景说明] 基础标签页使用方式\n[代码实现]\n<FTabs>\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n  <FTabPane name="标签2" value="2">\n    <div>内容2</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 每个FTabPane需要设置name和value属性',
        },
        {
            input: '怎么让标签页可以关闭',
            output: '<!-- correct -->\n[场景说明] 实现可关闭的标签页\n[代码实现]\n<FTabs type="card" closable @close="handleClose">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 需要设置type="card"和closable属性，并处理close事件',
        },
        {
            input: '标签页放左边咋搞',
            output: '<!-- correct -->\n[场景说明] 实现左侧标签页布局\n[代码实现]\n<FTabs position="left" style="height: 300px">\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 设置position="left"并确保容器有足够高度',
        },
        {
            input: '自定义标签页样式',
            output: '<!-- correct -->\n[场景说明] 覆盖默认标签页样式\n[代码实现]\n<style>\n.f-tabs__item {\n  background: #f0f0f0;\n  border-radius: 4px 4px 0 0;\n}\n</style>\n<FTabs>\n  <FTabPane name="标签1" value="1">\n    <div>内容1</div>\n  </FTabPane>\n</FTabs>\n[最佳实践] 通过CSS选择器覆盖默认样式，注意样式优先级',
        },
        {
            input: '标签页与表单组合',
            output: '<!-- correct -->\n[场景说明] 在标签页中组织表单分组\n[代码实现]\n<FTabs>\n  <FTabPane name="基本信息" value="1">\n    <FForm>\n      <FFormItem label="姓名">\n        <FInput />\n      </FFormItem>\n    </FForm>\n  </FTabPane>\n  <FTabPane name="详细信息" value="2">\n    <FForm>\n      <FFormItem label="地址">\n        <FInput />\n      </FFormItem>\n    </FForm>\n  </FTabPane>\n</FTabs>\n[最佳实践] 将相关表单字段分组到不同标签页中',
        },
        {
            input: '标签页与表格组合',
            output: '<!-- correct -->\n[场景说明] 在不同标签页中展示不同表格数据\n[代码实现]\n<FTabs>\n  <FTabPane name="用户列表" value="1">\n    <FTable :data="userData" />\n  </FTabPane>\n  <FTabPane name="订单列表" value="2">\n    <FTable :data="orderData" />\n  </FTabPane>\n</FTabs>\n[最佳实践] 使用displayDirective="show"保持表格状态',
        },
    ],
};
