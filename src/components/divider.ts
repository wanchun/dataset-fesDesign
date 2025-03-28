import type { IComponentMetadata } from '../type';

export const dividerMeta: IComponentMetadata = {
    title: '分割线',
    componentName: 'FDivider',
    description: '用于在内容之间创建视觉分隔的分割线组件，支持水平和垂直方向，可自定义文字位置。适用于内容分组、表单分隔等场景。',
    scenarios: [
        '表单分组：在表单的不同区块之间使用水平分割线，清晰区分不同功能区域，提升表单可读性。',
        '列表分隔：在长列表项之间添加分割线，提高列表的可扫描性和视觉层次感。',
        '垂直布局：在水平布局中使用垂直分割线分隔不同功能模块，保持界面整洁。',
        '标题分隔：在页面区块标题下方添加带文字的分割线，突出区块边界。',
        '内容隔离：在需要视觉隔离的内容区域之间使用分割线，避免内容混淆。',
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
            source: 'vertical',
            target: 'titlePlacement',
            effect: '垂直方向时文字位置无效',
            notes: [
                '当vertical为true时，titlePlacement属性不会生效',
                '垂直分割线不支持文字显示',
            ],
        },
    ],
    props: [
        {
            name: 'children',
            title: '标题',
            valueType: 'string',
            description: '分割线中间显示的文字内容',
            example: '分割线标题',
        },
        {
            name: 'vertical',
            title: '垂直方向',
            valueType: 'bool',
            description: '是否以垂直方向显示分割线',
            defaultValue: false,
            example: false,
        },
        {
            name: 'titlePlacement',
            title: '文字位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'center',
                        title: '中间',
                        usage: '默认位置，文字显示在分割线中间',
                    },
                    {
                        value: 'left',
                        title: '左边',
                        usage: '文字靠左显示，适用于左对齐布局',
                    },
                    {
                        value: 'right',
                        title: '右边',
                        usage: '文字靠右显示，适用于右对齐布局',
                    },
                ],
            },
            description: '分割线文字的位置，仅在水平方向有效',
            defaultValue: 'center',
            example: 'center',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '分割线中间显示的文字内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础分割线',
            output: '<!-- correct -->\n[场景说明] 在内容之间添加简单的水平分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider />\n  内容2\n</template>\n[最佳实践] 适用于简单的视觉分隔场景',
        },
        {
            input: '带文字的分割线',
            output: '<!-- correct -->\n[场景说明] 在分割线中间添加说明文字\n[代码实现] \n<template>\n  内容1\n  <FDivider>分类</FDivider>\n  内容2\n</template>\n[最佳实践] 适用于需要明确分隔区域含义的场景',
        },
        {
            input: '左对齐文字分割线',
            output: '<!-- correct -->\n[场景说明] 文字左对齐的分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider titlePlacement="left">左对齐</FDivider>\n  内容2\n</template>\n[最佳实践] 适用于左对齐布局的设计系统',
        },
        {
            input: '右对齐文字分割线',
            output: '<!-- correct -->\n[场景说明] 文字右对齐的分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider titlePlacement="right">右对齐</FDivider>\n  内容2\n</template>\n[最佳实践] 适用于右对齐布局的设计系统',
        },
        {
            input: '垂直分割线',
            output: '<!-- correct -->\n[场景说明] 在水平布局中使用垂直分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider vertical />\n  内容2\n</template>\n[最佳实践] 适用于水平排列元素的视觉分隔',
        },
        {
            input: '分割线组合使用',
            output: '<!-- correct -->\n[场景说明] 多种分割线组合使用\n[代码实现] \n<template>\n  内容1\n  <FDivider>分类1</FDivider>\n  内容2\n  <FDivider titlePlacement="left">分类2</FDivider>\n  内容3\n  <FDivider vertical />\n  内容4\n</template>\n[最佳实践] 适用于复杂布局的分隔需求',
        },
        {
            input: '空状态分割线',
            output: '<!-- correct -->\n[场景说明] 没有文字内容的分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider />\n  内容2\n</template>\n[最佳实践] 适用于不需要文字说明的简单分隔',
        },
        {
            input: '极值测试-长文本分割线',
            output: '<!-- correct -->\n[场景说明] 测试分割线对长文本的支持\n[代码实现] \n<template>\n  内容1\n  <FDivider>这是一个非常非常非常非常非常非常长的分割线标题</FDivider>\n  内容2\n</template>\n[最佳实践] 确保长文本不会破坏布局',
        },
        {
            input: '错误用例-垂直分割线带文字',
            output: '<!-- error -->\n[错误分析] 垂直分割线不支持显示文字\n[正确代码] \n<template>\n  内容1\n  <FDivider vertical />\n  内容2\n</template>\n[注意事项] 垂直分割线会忽略titlePlacement和children属性',
        },
        {
            input: '错误用例-缺少必要父容器',
            output: '<!-- error -->\n[错误分析] 分割线需要放在布局容器中使用\n[正确代码] \n<template>\n  <div>\n    内容1\n    <FDivider />\n    内容2\n  </div>\n</template>\n[注意事项] 确保分割线有合适的父容器',
        },
        {
            input: '错误用例-无效的titlePlacement值',
            output: '<!-- error -->\n[错误分析] titlePlacement只能取center/left/right\n[正确代码] \n<template>\n  内容1\n  <FDivider titlePlacement="center">有效值</FDivider>\n  内容2\n</template>\n[注意事项] 确保使用合法的titlePlacement值',
        },
        {
            input: '自然语言提问-怎么在内容之间加条线',
            output: '<!-- correct -->\n[场景说明] 使用分割线分隔内容\n[代码实现] \n<template>\n  内容1\n  <FDivider />\n  内容2\n</template>\n[最佳实践] 这是分割线组件的基本用法',
        },
        {
            input: '自然语言提问-怎么让分割线竖着放',
            output: '<!-- correct -->\n[场景说明] 使用垂直分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider vertical />\n  内容2\n</template>\n[最佳实践] 适用于水平排列元素的视觉分隔',
        },
        {
            input: '自然语言提问-分割线文字能放左边吗',
            output: '<!-- correct -->\n[场景说明] 文字左对齐的分割线\n[代码实现] \n<template>\n  内容1\n  <FDivider titlePlacement="left">左对齐</FDivider>\n  内容2\n</template>\n[最佳实践] 适用于左对齐布局的设计系统',
        },
        {
            input: '样式覆盖-自定义分割线颜色',
            output: '<!-- correct -->\n[场景说明] 自定义分割线样式\n[代码实现] \n<template>\n  <FDivider style="border-color: #f00;" />\n</template>\n[最佳实践] 通过style属性可以覆盖默认样式',
        },
        {
            input: '组合使用-与Flex布局配合',
            output: '<!-- correct -->\n[场景说明] 在Flex布局中使用分割线\n[代码实现] \n<template>\n  <div style="display: flex;">\n    <div>内容1</div>\n    <FDivider vertical />\n    <div>内容2</div>\n  </div>\n</template>\n[最佳实践] 适用于Flex布局中的元素分隔',
        },
        {
            input: '组合使用-与Grid布局配合',
            output: '<!-- correct -->\n[场景说明] 在Grid布局中使用分割线\n[代码实现] \n<template>\n  <div style="display: grid; grid-template-columns: 1fr auto 1fr;">\n    <div>内容1</div>\n    <FDivider vertical />\n    <div>内容2</div>\n  </div>\n</template>\n[最佳实践] 适用于Grid布局中的元素分隔',
        },
        {
            input: '边界条件-空分割线',
            output: '<!-- correct -->\n[场景说明] 测试空分割线的表现\n[代码实现] \n<template>\n  <FDivider />\n</template>\n[最佳实践] 确保空分割线也能正常渲染',
        },
        {
            input: '边界条件-极窄容器中的分割线',
            output: '<!-- correct -->\n[场景说明] 测试极窄容器中的分割线表现\n[代码实现] \n<template>\n  <div style="width: 10px;">\n    <FDivider />\n  </div>\n</template>\n[最佳实践] 确保分割线在极端情况下也能正常显示',
        },
        {
            input: '边界条件-极长分割线',
            output: '<!-- correct -->\n[场景说明] 测试极长分割线的表现\n[代码实现] \n<template>\n  <div style="width: 1000px;">\n    <FDivider />\n  </div>\n</template>\n[最佳实践] 确保分割线在长容器中能自适应',
        },
    ],
};
