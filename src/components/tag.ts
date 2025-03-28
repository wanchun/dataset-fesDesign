import type { IComponentMetadata } from '../type';

export const tagMeta: IComponentMetadata = {
    title: '标签',
    componentName: 'FTag',
    description: '用于标记项展示的基础组件，支持多种类型、尺寸和主题样式，适用于分类标记、状态标识等场景。',
    scenarios: [
        '分类标记：使用不同颜色类型的标签对内容进行分类标记，帮助用户快速识别内容类别。',
        '状态标识：通过success/info/warning/danger等类型标签展示系统状态或操作结果。',
        '可编辑标签：结合closable属性和close事件实现标签的动态编辑功能。',
        '表单标签：在表单中使用标签组件展示多选结果或输入提示。',
        '信息筛选：使用标签作为筛选条件，配合点击事件实现数据过滤。',
        '主题适配：通过dark/light/plain主题适应不同背景色的界面需求。',
        '尺寸控制：根据容器空间选择合适的标签尺寸(small/middle/large)。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FSpace',
                description: '建议放在间距组件内以保证标签间的合理间距',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'closable',
            target: 'onClose',
            effect: '当closable为true时，需要处理close事件',
            notes: [
                '动态编辑标签场景必须实现close事件处理',
                '表单标签场景建议同时实现click和close事件',
            ],
        },
    ],
    props: [
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'default',
                        title: '默认',
                        usage: '普通信息展示',
                    },
                    {
                        value: 'success',
                        title: '成功',
                        usage: '成功状态或正向操作',
                    },
                    {
                        value: 'info',
                        title: '信息',
                        usage: '提示性信息展示',
                    },
                    {
                        value: 'warning',
                        title: '警告',
                        usage: '需要注意的操作或状态',
                    },
                    {
                        value: 'danger',
                        title: '危险',
                        usage: '错误或危险操作',
                    },
                ],
            },
            description: '标签的类型，影响标签的颜色样式',
            defaultValue: 'default',
            example: 'success',
        },
        {
            name: 'closable',
            title: '可关闭',
            valueType: 'bool',
            description: '是否显示关闭按钮',
            defaultValue: false,
            example: true,
        },
        {
            name: 'backgroundColor',
            title: '背景色',
            valueType: 'string',
            description: '自定义背景色，会覆盖type的颜色',
            example: '#f0f0f0',
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
                        usage: '紧凑空间使用',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出显示的标签',
                    },
                ],
            },
            description: '标签的尺寸大小',
            defaultValue: 'middle',
            example: 'small',
        },
        {
            name: 'effect',
            title: '主题',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'dark',
                        title: '深色',
                        usage: '浅色背景使用',
                    },
                    {
                        value: 'light',
                        title: '亮色',
                        usage: '深色背景使用',
                    },
                    {
                        value: 'plain',
                        title: '无色',
                        usage: '极简风格界面',
                    },
                ],
            },
            description: '标签的视觉主题样式',
            defaultValue: 'light',
            example: 'dark',
        },
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否显示边框',
            defaultValue: true,
            example: false,
        },
    ],
    events: [
        {
            name: 'onClick',
            description: '点击标签时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '点击事件对象',
                },
            ],
        },
        {
            name: 'onClose',
            description: '关闭标签时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '关闭事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '标签的文本内容',
            required: true,
        },
        {
            name: 'icon',
            description: '标签左侧的图标',
            required: false,
        },
    ],
    templates: [
        {
            input: '如何创建一个默认标签？',
            output: '[场景说明] 创建基础标签展示\n[代码实现] <!-- correct -->\n<FTag>默认标签</FTag>\n[最佳实践] 简单文本标签建议使用默认类型',
        },
        {
            input: '我要做个红色的标签',
            output: '[场景说明] 自定义颜色标签\n[代码实现] <!-- correct -->\n<FTag backgroundColor="#ff0000">警告标签</FTag>\n[最佳实践] 自定义颜色会覆盖type的颜色样式',
        },
        {
            input: '怎么让标签可以关闭？',
            output: '[场景说明] 可关闭标签实现\n[代码实现] <!-- correct -->\n<FTag closable @close="handleClose">可关闭标签</FTag>\n[最佳实践] 必须同时实现close事件处理',
        },
        {
            input: '标签大小怎么调？',
            output: '[场景说明] 调整标签尺寸\n[代码实现] <!-- correct -->\n<FTag size="large">大号标签</FTag>\n[最佳实践] 根据容器空间选择合适的尺寸',
        },
        {
            input: '标签没边框怎么办？',
            output: '[错误分析] bordered属性默认true，需要显式设置为false\n[正确代码] <!-- correct -->\n<FTag :bordered="false">无边框标签</FTag>\n[注意事项] 无边框标签在浅色背景上可能不够明显',
        },
        {
            input: '标签加个图标',
            output: '[场景说明] 带图标的标签\n[代码实现] <!-- correct -->\n<FTag>\n  <template #icon>\n    <UserOutlined />\n  </template>\n  用户标签\n</FTag>\n[最佳实践] 图标与文字间建议保留间距',
        },
        {
            input: '标签点击没反应',
            output: '[错误分析] 未绑定click事件\n[正确代码] <!-- correct -->\n<FTag @click="handleClick">可点击标签</FTag>\n[注意事项] 点击事件与关闭事件要分开处理',
        },
        {
            input: '标签类型错误',
            output: '[错误分析] type值不在可选范围内\n[正确代码] <!-- correct -->\n<FTag type="success">成功标签</FTag>\n[注意事项] 只支持default/success/info/warning/danger五种类型',
        },
        {
            input: '标签太多怎么换行？',
            output: '[场景说明] 多标签换行展示\n[代码实现] <!-- correct -->\n<div style="display: flex; flex-wrap: wrap; gap: 8px">\n  <FTag v-for="tag in tags" :key="tag">{{ tag }}</FTag>\n</div>\n[最佳实践] 使用flex布局并设置flex-wrap: wrap',
        },
        {
            input: '标签文字太长...',
            output: '[场景说明] 长文本标签处理\n[代码实现] <!-- correct -->\n<FTag>\n  <FEllipsis style="max-width: 200px">\n    这是一个非常非常长的标签文本内容需要省略显示\n  </FEllipsis>\n</FTag>\n[最佳实践] 结合FEllipsis组件实现文本截断',
        },
        {
            input: '标签颜色不醒目',
            output: '[场景说明] 提高标签醒目度\n[代码实现] <!-- correct -->\n<FTag type="danger" effect="dark">重要提示</FTag>\n[最佳实践] 使用对比度高的type和effect组合',
        },
        {
            input: '标签组怎么实现？',
            output: '[场景说明] 标签组实现\n[代码实现] <!-- correct -->\n<FSpace>\n  <FTag v-for="tag in tags" :key="tag" :type="tag.type">\n    {{ tag.name }}\n  </FTag>\n</FSpace>\n[最佳实践] 使用FSpace保证标签间距一致',
        },
        {
            input: '标签动态添加删除',
            output: '[场景说明] 动态标签管理\n[代码实现] <!-- correct -->\n<template>\n  <FSpace>\n    <FTag \n      v-for="tag in tags" \n      :key="tag" \n      closable\n      @close="removeTag(tag)"\n    >\n      {{ tag }}\n    </FTag>\n    <FInput \n      v-if="inputVisible"\n      @change="addTag"\n    />\n  </FSpace>\n</template>\n[最佳实践] 需要维护tags数组状态',
        },
        {
            input: '标签在表单里用',
            output: '[场景说明] 表单标签应用\n[代码实现] <!-- correct -->\n<FFormItem label="标签">\n  <FTag \n    v-for="tag in form.tags" \n    :key="tag"\n    closable\n    @close="removeFormTag(tag)"\n  >\n    {{ tag }}\n  </FTag>\n</FFormItem>\n[最佳实践] 表单标签需要与表单数据绑定',
        },
        {
            input: '标签主题切换',
            output: '[场景说明] 动态主题切换\n[代码实现] <!-- correct -->\n<FTag :effect="darkMode ? \'light\' : \'dark\'">\n  主题标签\n</FTag>\n[最佳实践] 根据应用主题动态调整effect',
        },
        {
            input: '标签禁用状态',
            output: '[错误分析] 标签组件没有disabled属性\n[正确代码] <!-- correct -->\n<FTag \n  :style="{ opacity: disabled ? 0.5 : 1 }"\n  @click="!disabled && handleClick()"\n>\n  标签\n</FTag>\n[注意事项] 需要通过样式和事件控制模拟禁用效果',
        },
        {
            input: '标签圆角怎么改？',
            output: '[场景说明] 自定义标签样式\n[代码实现] <!-- correct -->\n<FTag style="border-radius: 20px">\n  圆角标签\n</FTag>\n[最佳实践] 通过内联样式覆盖默认样式',
        },
        {
            input: '标签hover效果',
            output: '[场景说明] 添加悬停效果\n[代码实现] <!-- correct -->\n<FTag class="hover-tag">\n  可悬停标签\n</FTag>\n\n<style>\n.hover-tag:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n</style>\n[最佳实践] 使用CSS过渡效果提升交互体验',
        },
        {
            input: '标签怎么竖着排？',
            output: '[场景说明] 垂直排列标签\n[代码实现] <!-- correct -->\n<div style="display: flex; flex-direction: column; gap: 8px">\n  <FTag v-for="tag in tags" :key="tag">{{ tag }}</FTag>\n</div>\n[最佳实践] 使用flex-direction: column实现垂直布局',
        },
        {
            input: '标签选中状态',
            output: '[场景说明] 标签选中效果\n[代码实现] <!-- correct -->\n<FTag \n  v-for="tag in tags"\n  :key="tag"\n  :style="{ \n    borderColor: selectedTag === tag ? \'#1890ff\' : \'\' \n  }"\n  @click="selectedTag = tag"\n>\n  {{ tag }}\n</FTag>\n[最佳实践] 通过边框或背景色变化表示选中状态',
        },
    ],
};
