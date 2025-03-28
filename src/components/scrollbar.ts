import type { IComponentMetadata } from '../type';

export const scrollbarMeta: IComponentMetadata = {
    title: '滚动条',
    componentName: 'FScrollbar',
    description: '虚拟滚动条组件，提供高度自定义的滚动条样式和交互控制。支持原生滚动条样式、动态高度控制、滚动动画等特性，适用于大数据量列表展示场景。',
    scenarios: [
        '长列表展示：在数据量大的列表中使用固定高度或最大高度控制显示区域，保持页面结构清晰',
        '横向内容导航：为横向排列的内容提供平滑的滚动体验，支持自定义滑块样式',
        '原生滚动兼容：当需要保持操作系统原生滚动行为时，启用native模式',
        '动态内容区域：在内容高度动态变化的场景下，通过maxHeight控制最大显示范围',
        '交互式滚动控制：通过暴露的方法实现滚动到指定位置、底部等交互需求',
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
            source: 'native',
            target: [
                'shadow',
                'minSize',
            ],
            effect: '启用原生滚动时，自定义阴影和滑块尺寸配置将失效',
            notes: [
                '原生滚动条使用操作系统默认样式',
                '适用于需要保持平台一致性的场景',
            ],
        },
        {
            source: 'height',
            target: 'maxHeight',
            effect: '同时设置时优先使用height属性',
            notes: [
                'height和maxHeight同时设置时height优先级更高',
                '适用于需要精确控制显示区域的场景',
            ],
        },
    ],
    props: [
        {
            name: 'height',
            title: '固定高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '滚动容器的固定高度，支持像素值或CSS字符串',
            example: '200px',
        },
        {
            name: 'maxHeight',
            title: '最大高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '滚动容器的最大高度，内容超过时显示滚动条',
            example: '80vh',
        },
        {
            name: 'native',
            title: '原生滚动',
            valueType: 'bool',
            description: '是否使用操作系统原生滚动条样式',
            defaultValue: false,
            example: true,
        },
        {
            name: 'noresize',
            title: '禁用尺寸响应',
            valueType: 'bool',
            description: '禁用容器尺寸变化的响应，提升性能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'always',
            title: '常显滚动条',
            valueType: 'bool',
            description: '总是显示滚动条而非悬停时显示',
            defaultValue: false,
            example: true,
        },
        {
            name: 'minSize',
            title: '滑块最小尺寸',
            valueType: 'number',
            description: '滚动条滑块的最小像素尺寸',
            defaultValue: 20,
            example: 30,
        },
        {
            name: 'shadow',
            title: '滚动阴影',
            valueType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    {
                        type: 'shape',
                        value: [
                            {
                                name: 'x',
                                title: '水平阴影',
                                valueType: 'bool',
                                example: true,
                            },
                            {
                                name: 'y',
                                title: '垂直阴影',
                                valueType: 'bool',
                                example: false,
                            },
                        ],
                    },
                ],
            },
            description: '是否显示内容边缘的滚动提示阴影，可分别控制方向',
            defaultValue: false,
            example: {
                x: true,
                y: false,
            },
        },
        {
            name: 'containerClass',
            title: '容器类名',
            valueType: {
                type: 'oneOfType',
                value: [
                    'array',
                    'object',
                    'string',
                ],
            },
            description: '外层容器的自定义类名',
            example: 'custom-scroll-container',
        },
        {
            name: 'containerStyle',
            title: '容器样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'array',
                    'object',
                    'string',
                ],
            },
            description: '外层容器的内联样式',
            example: {
                border: '1px solid #eee',
            },
        },
        {
            name: 'contentStyle',
            title: '内容样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'array',
                    'object',
                    'string',
                ],
            },
            description: '内容区域的内联样式',
            example: {
                padding: '10px',
            },
        },
        {
            name: 'horizontalRatioStyle',
            title: '水平滚动条样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'array',
                    'object',
                    'string',
                ],
            },
            description: '水平滚动条的内联样式',
            example: {
                height: '8px',
            },
        },
        {
            name: 'verticalRatioStyle',
            title: '垂直滚动条样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'array',
                    'object',
                    'string',
                ],
            },
            description: '垂直滚动条的内联样式',
            example: {
                width: '8px',
            },
        },
    ],
    events: [
        {
            name: 'scroll',
            description: '滚动时触发的事件',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生滚动事件对象',
                },
            ],
        },
    ],
    exposes: [
        {
            name: 'setScrollTop',
            description: '设置垂直滚动位置',
            parameters: [
                {
                    name: 'scrollTop',
                    type: 'number',
                    description: '目标滚动位置',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '滚动动画时长(ms)',
                },
            ],
        },
        {
            name: 'setScrollLeft',
            description: '设置水平滚动位置',
            parameters: [
                {
                    name: 'scrollLeft',
                    type: 'number',
                    description: '目标滚动位置',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '滚动动画时长(ms)',
                },
            ],
        },
        {
            name: 'scrollToEnd',
            description: '滚动到底部或右侧',
            parameters: [
                {
                    name: 'direction',
                    type: 'string',
                    description: '滚动方向，可选\'bottom\'或\'right\'',
                },
                {
                    name: 'duration',
                    type: 'number',
                    description: '滚动动画时长(ms)',
                },
            ],
        },
        {
            name: 'update',
            description: '手动更新滚动条状态',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '基础纵向滚动列表',
            output: '<!-- correct -->\n[场景说明] 展示50项数据的纵向滚动列表\n[代码实现]\n<FScrollbar height="200px">\n  <div v-for="item in 50" :key="item">\n    列表项 {{ item }}\n  </div>\n</FScrollbar>\n[最佳实践] 固定高度确保滚动区域稳定，适合中等数据量展示',
        },
        {
            input: '横向内容导航',
            output: '<!-- correct -->\n[场景说明] 横向排列的导航菜单\n[代码实现]\n<FScrollbar>\n  <div style="display: flex; width: max-content">\n    <div v-for="item in 20" :key="item" style="padding: 0 20px">\n      菜单{{ item }}\n    </div>\n  </div>\n</FScrollbar>\n[最佳实践] 配合flex布局实现横向溢出滚动，注意设置内容宽度',
        },
        {
            input: '原生滚动样式',
            output: '<!-- correct -->\n[场景说明] 使用操作系统原生滚动条\n[代码实现]\n<FScrollbar :native="true" height="300px">\n  <!-- 内容 -->\n</FScrollbar>\n[最佳实践] 保持平台一致性，但会失去自定义样式能力',
        },
        {
            input: '动态高度控制',
            output: '<!-- correct -->\n[场景说明] 根据内容长度自动适应但不超过最大高度\n[代码实现]\n<FScrollbar :maxHeight="400px">\n  <div v-for="item in items" :key="item.id">\n    {{ item.content }}\n  </div>\n</FScrollbar>\n[最佳实践] 适合内容高度不确定但需要限制最大显示范围的场景',
        },
        {
            input: '自定义滚动条样式',
            output: '<!-- correct -->\n[场景说明] 定制化滚动条外观\n[代码实现]\n<FScrollbar \n  height="300px"\n  :verticalRatioStyle="{ width: \'6px\', borderRadius: \'3px\' }"\n  :horizontalRatioStyle="{ height: \'6px\', borderRadius: \'3px\' }">\n  <!-- 内容 -->\n</FScrollbar>\n[最佳实践] 通过样式属性统一设计语言，注意保持可用性',
        },
        {
            input: '滚动到指定位置',
            output: '<!-- correct -->\n[场景说明] 通过方法控制滚动位置\n[代码实现]\n<template>\n  <FScrollbar ref="scrollRef" height="300px">\n    <!-- 长内容 -->\n  </FScrollbar>\n  <FButton @click="scrollRef.setScrollTop(100, 500)">\n    滚动到100px位置\n  </FButton>\n</template>\n[最佳实践] 结合交互需求提供平滑的滚动动画',
        },
        {
            input: '错误示例：缺少必要高度',
            output: '<!-- error -->\n[错误分析] 未设置height或maxHeight导致无法形成滚动区域\n[正确代码]\n<FScrollbar height="200px">\n  <!-- 内容 -->\n</FScrollbar>\n[注意事项] 必须至少设置一个高度属性才能形成有效滚动区域',
        },
        {
            input: '错误示例：无效的shadow类型',
            output: '<!-- error -->\n[错误分析] shadow属性类型应为boolean或{x,y}对象\n[正确代码]\n<FScrollbar :shadow="{ x: true }">\n  <!-- 内容 -->\n</FScrollbar>\n[注意事项] 配置对象时需包含明确的x/y方向设置',
        },
        {
            input: '边界条件：空状态',
            output: '<!-- correct -->\n[场景说明] 处理内容为空时的显示\n[代码实现]\n<FScrollbar height="200px">\n  <div v-if="items.length">\n    <!-- 内容 -->\n  </div>\n  <div v-else class="empty">\n    暂无数据\n  </div>\n</FScrollbar>\n[最佳实践] 保持滚动容器结构稳定，避免高度塌陷',
        },
        {
            input: '边界条件：极长内容',
            output: '<!-- correct -->\n[场景说明] 处理超长列表的性能优化\n[代码实现]\n<FScrollbar height="500px" :noresize="true">\n  <VirtualList :items="longData" />\n</FScrollbar>\n[最佳实践] 结合虚拟列表技术，并禁用尺寸监听提升性能',
        },
        {
            input: '组合使用：表单内滚动区域',
            output: '<!-- correct -->\n[场景说明] 在表单中创建可滚动区域\n[代码实现]\n<FForm>\n  <FFormItem label="配置项">\n    <FScrollbar height="200px">\n      <!-- 表单内容 -->\n    </FScrollbar>\n  </FFormItem>\n</FForm>\n[最佳实践] 保持与表单组件的样式协调，注意label对齐',
        },
        {
            input: '组合使用：弹窗内滚动',
            output: '<!-- correct -->\n[场景说明] 弹窗内容超出时的滚动处理\n[代码实现]\n<FModal>\n  <FScrollbar :maxHeight="\'calc(100vh - 200px)\'">\n    <!-- 弹窗内容 -->\n  </FScrollbar>\n</FModal>\n[最佳实践] 使用maxHeight动态计算可用高度，确保弹窗结构稳定',
        },
        {
            input: '自然语言提问：怎么让滚动条一直显示？',
            output: '<!-- correct -->\n[场景说明] 需要常驻显示的滚动条\n[代码实现]\n<FScrollbar :always="true" height="300px">\n  <!-- 内容 -->\n</FScrollbar>\n[最佳实践] 设置always属性为true，适用于需要强调可滚动性的场景',
        },
        {
            input: '自然语言提问：滚动条太细了能调粗点吗？',
            output: '<!-- correct -->\n[场景说明] 自定义滚动条尺寸\n[代码实现]\n<FScrollbar \n  height="300px"\n  :verticalRatioStyle="{ width: \'10px\' }">\n  <!-- 内容 -->\n</FScrollbar>\n[最佳实践] 通过verticalRatioStyle/horizontalRatioStyle控制尺寸，确保可用性',
        },
        {
            input: '自然语言提问：点按钮滚到底咋弄？',
            output: '<!-- correct -->\n[场景说明] 通过按钮触发滚动到底部\n[代码实现]\n<template>\n  <FScrollbar ref="scrollRef" height="300px">\n    <!-- 长内容 -->\n  </FScrollbar>\n  <FButton @click="scrollRef.scrollToEnd()">\n    滚动到底部\n  </FButton>\n</template>\n[最佳实践] 通过ref调用组件暴露的scrollToEnd方法',
        },
        {
            input: '样式覆盖：修改滚动条轨道颜色',
            output: '<!-- correct -->\n[场景说明] 自定义滚动条轨道样式\n[代码实现]\n<style>\n.f-scrollbar__bar {\n  background-color: rgba(0,0,0,0.1) !important;\n}\n</style>\n<FScrollbar height="300px">\n  <!-- 内容 -->\n</FScrollbar>\n[最佳实践] 使用深度选择器覆盖默认样式，注意样式优先级',
        },
    ],
};
