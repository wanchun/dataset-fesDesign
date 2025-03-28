import type { IComponentMetadata } from '../type';

export const gridMeta: IComponentMetadata = {
    title: '栅格',
    componentName: 'FGrid',
    description: '基于Flex布局的栅格系统组件，用于构建响应式布局。通过行(grid)和列(gridItem)的组合，可以快速实现各种复杂的页面布局结构。支持水平/垂直对齐、间隔控制、响应式布局等特性。',
    scenarios: [
        '表单布局：使用栅格系统快速构建表单的响应式布局，确保在不同设备上都能良好展示',
        '卡片布局：构建卡片式布局，通过栅格系统实现卡片的均匀分布和响应式排列',
        '仪表盘：用于构建仪表盘中的各种指标卡片布局，支持灵活的排列方式',
        '产品展示：构建产品列表的网格布局，支持不同屏幕尺寸下的自适应展示',
        '导航菜单：构建复杂的导航菜单系统，支持多级菜单的响应式布局',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FGridItem',
    ],
    propRelations: [
        {
            source: 'wrap',
            target: 'gutter',
            effect: '当wrap为true时，gutter数组中的第二个值(垂直间隔)才会生效',
            notes: [
                '在需要换行且设置垂直间隔的场景下使用',
            ],
        },
    ],
    props: [
        {
            name: 'align',
            title: '垂直对齐',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'flex-start',
                        title: '上对齐',
                        usage: '顶部对齐，适用于大多数常规布局场景',
                    },
                    {
                        value: 'center',
                        title: '居中',
                        usage: '垂直居中，适用于需要居中对齐的布局',
                    },
                    {
                        value: 'flex-end',
                        title: '下对齐',
                        usage: '底部对齐，适用于需要底部对齐的特殊布局',
                    },
                    {
                        value: 'baseline',
                        title: '基线对齐',
                        usage: '基于文本基线对齐，适用于文本为主的布局',
                    },
                    {
                        value: 'stretch',
                        title: '上下拉齐',
                        usage: '拉伸填充，适用于需要等高布局的场景',
                    },
                ],
            },
            description: 'flex布局下的垂直对齐方式',
            defaultValue: 'flex-start',
            example: 'center',
        },
        {
            name: 'gutter',
            title: '间隔',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    {
                        type: 'arrayOf',
                        value: 'number',
                    },
                ],
            },
            description: '栅格间隔，可以写成像素值表示水平间隔，或使用数组同时设置[水平间距,垂直间距]',
            defaultValue: 0,
            example: [
                16,
                16,
            ],
        },
        {
            name: 'justify',
            title: '水平排列',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'flex-start',
                        title: '左对齐',
                        usage: '默认左对齐，适用于大多数场景',
                    },
                    {
                        value: 'center',
                        title: '居中',
                        usage: '水平居中，适用于需要居中对齐的布局',
                    },
                    {
                        value: 'flex-end',
                        title: '右对齐',
                        usage: '右对齐，适用于需要右对齐的特殊布局',
                    },
                    {
                        value: 'space-around',
                        title: '空间环绕',
                        usage: '均匀分布，项目两侧有相同空间',
                    },
                    {
                        value: 'space-between',
                        title: '两端对齐',
                        usage: '均匀分布，首尾项目贴边',
                    },
                ],
            },
            description: 'flex布局下的水平排列方式',
            defaultValue: 'flex-start',
            example: 'space-between',
        },
        {
            name: 'wrap',
            title: '自动换行',
            valueType: 'bool',
            description: '是否自动换行，当内容超出容器宽度时是否换行显示',
            defaultValue: false,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '栅格内容，只能放置FGridItem组件',
            required: true,
        },
    ],
    templates: [
        {
            input: '基础栅格布局',
            output: '<!-- correct -->\n[场景说明] 创建一个基础的栅格布局，包含3个等宽的列\n[代码实现]\n<FGrid>\n  <FGridItem v-for="item in 3" :key="item" :span="8">\n    <div class="demo-block">列-8</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用span属性控制每列宽度，总和不超过24',
        },
        {
            input: '带间隔的栅格',
            output: '<!-- correct -->\n[场景说明] 创建带水平间隔的栅格布局\n[代码实现]\n<FGrid :gutter="16">\n  <FGridItem v-for="item in 4" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用gutter属性控制列间距，数值单位为px',
        },
        {
            input: '垂直对齐的栅格',
            output: '<!-- correct -->\n[场景说明] 创建垂直居中对齐的栅格布局\n[代码实现]\n<FGrid align="center">\n  <FGridItem v-for="item in 3" :key="item" :span="8">\n    <div class="demo-block" :style="{height: item*50+\'px\'}">列-8</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用align属性控制垂直对齐方式',
        },
        {
            input: '两端对齐的栅格',
            output: '<!-- correct -->\n[场景说明] 创建两端对齐的栅格布局\n[代码实现]\n<FGrid justify="space-between">\n  <FGridItem v-for="item in 3" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用justify属性控制水平对齐方式',
        },
        {
            input: '自动换行的栅格',
            output: '<!-- correct -->\n[场景说明] 创建自动换行的栅格布局\n[代码实现]\n<FGrid :gutter="[16,16]" wrap>\n  <FGridItem v-for="item in 8" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 设置wrap为true并指定垂直间隔',
        },
        {
            input: '响应式栅格',
            output: '<!-- correct -->\n[场景说明] 创建响应式栅格布局\n[代码实现]\n<FGrid>\n  <FGridItem :xs="24" :sm="12" :md="8" :lg="6">\n    <div class="demo-block">响应式列</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用xs/sm/md/lg等属性控制不同断点下的布局',
        },
        {
            input: '错误的栅格使用方式',
            output: '<!-- error -->\n[错误分析] 直接在FGrid中使用非FGridItem组件\n[正确代码]\n<FGrid>\n  <FGridItem :span="12">\n    <div>正确的内容</div>\n  </FGridItem>\n</FGrid>\n[注意事项] FGrid的直接子元素必须是FGridItem组件',
        },
        {
            input: '错误的间隔设置',
            output: '<!-- error -->\n[错误分析] 在非wrap模式下设置了垂直间隔\n[正确代码]\n<FGrid :gutter="16" wrap>\n  <FGridItem v-for="item in 4" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[注意事项] 垂直间隔仅在wrap为true时生效',
        },
        {
            input: '栅格总和超过24',
            output: '<!-- correct -->\n[场景说明] 创建总和超过24的栅格布局\n[代码实现]\n<FGrid wrap>\n  <FGridItem v-for="item in 5" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 设置wrap为true使超出部分自动换行',
        },
        {
            input: '如何让栅格垂直居中？',
            output: '<!-- correct -->\n[场景说明] 创建垂直居中的栅格布局\n[代码实现]\n<FGrid align="center">\n  <FGridItem v-for="item in 3" :key="item" :span="8">\n    <div class="demo-block">列-8</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用align="center"实现垂直居中',
        },
        {
            input: '栅格怎么设置间距',
            output: '<!-- correct -->\n[场景说明] 设置栅格之间的间距\n[代码实现]\n<FGrid :gutter="[16,8]">\n  <FGridItem v-for="item in 3" :key="item" :span="8">\n    <div class="demo-block">列-8</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用gutter属性设置水平和垂直间距',
        },
        {
            input: '栅格怎么实现响应式',
            output: '<!-- correct -->\n[场景说明] 实现响应式栅格布局\n[代码实现]\n<FGrid>\n  <FGridItem :xs="24" :sm="12" :md="8" :lg="6">\n    <div class="demo-block">响应式列</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用xs/sm/md/lg等响应式属性',
        },
        {
            input: '栅格怎么两端对齐',
            output: '<!-- correct -->\n[场景说明] 实现两端对齐的栅格布局\n[代码实现]\n<FGrid justify="space-between">\n  <FGridItem v-for="item in 3" :key="item" :span="6">\n    <div class="demo-block">列-6</div>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用justify="space-between"实现两端对齐',
        },
        {
            input: '栅格怎么自定义样式',
            output: '<!-- correct -->\n[场景说明] 自定义栅格样式\n[代码实现]\n<FGrid class="custom-grid">\n  <FGridItem v-for="item in 3" :key="item" :span="8">\n    <div class="demo-block">列-8</div>\n  </FGridItem>\n</FGrid>\n<style>\n.custom-grid {\n  background: #f5f5f5;\n  padding: 16px;\n}\n</style>\n[最佳实践] 通过class或style属性自定义样式',
        },
        {
            input: '栅格和表格怎么组合使用',
            output: '<!-- correct -->\n[场景说明] 栅格与表格组件组合使用\n[代码实现]\n<FGrid>\n  <FGridItem :span="12">\n    <FTable :data="tableData" />\n  </FGridItem>\n  <FGridItem :span="12">\n    <FChart :option="chartOption" />\n  </FGridItem>\n</FGrid>\n[最佳实践] 将其他组件放在FGridItem中实现复杂布局',
        },
        {
            input: '栅格和表单怎么组合使用',
            output: '<!-- correct -->\n[场景说明] 栅格与表单组件组合使用\n[代码实现]\n<FGrid :gutter="16">\n  <FGridItem :span="12">\n    <FFormItem label="用户名">\n      <FInput />\n    </FFormItem>\n  </FGridItem>\n  <FGridItem :span="12">\n    <FFormItem label="密码">\n      <FInput type="password" />\n    </FFormItem>\n  </FGridItem>\n</FGrid>\n[最佳实践] 使用栅格实现表单的响应式布局',
        },
    ],
};
