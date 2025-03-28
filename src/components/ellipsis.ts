import type { IComponentMetadata } from '../type';

export const ellipsisMeta: IComponentMetadata = {
    title: '文本省略',
    componentName: 'FEllipsis',
    description: '文本省略组件，用于在有限空间内展示长文本内容，超出指定行数后自动省略并显示Tooltip提示。支持单行和多行省略，可自定义Tooltip内容和样式。',
    scenarios: [
        '表格单元格：在表格中展示长文本内容时，使用单行省略保持表格整洁，鼠标悬停显示完整内容。',
        '卡片描述：在卡片组件中展示多行文本描述，超出指定行数后自动省略，提升页面美观度。',
        '导航菜单：在侧边栏导航中展示长菜单项，使用单行省略保持布局统一。',
        '列表项：在列表组件中展示多行文本内容，控制显示行数避免页面过长。',
        '表单标签：在表单中展示长标签文本，使用单行省略保持表单对齐。',
        '弹窗内容：在弹窗中展示多行文本内容，控制显示行数提升用户体验。',
        '仪表盘：在仪表盘组件中展示数据描述，使用单行省略保持界面简洁。',
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
            source: 'line',
            target: 'tooltip',
            effect: '当line大于1时，tooltip默认启用',
            notes: [
                '多行省略时通常需要tooltip显示完整内容',
                '可通过设置tooltip为false禁用此行为',
            ],
        },
    ],
    props: [
        {
            name: 'line',
            title: '省略行数',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '指定文本超出多少行后开始省略，支持数字或字符串类型',
            defaultValue: 1,
            example: 2,
        },
        {
            name: 'content',
            title: '文本内容',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '需要省略显示的文本内容，支持字符串或数字类型',
            example: '这是一段需要省略的长文本内容...',
        },
        {
            name: 'tooltip',
            title: '提示框配置',
            valueType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    {
                        type: 'shape',
                        value: [
                            {
                                name: 'popperClass',
                                title: '提示框类名',
                                valueType: 'string',
                                example: 'custom-tooltip',
                            },
                            {
                                name: 'showAfter',
                                title: '显示延迟',
                                valueType: 'number',
                                example: 500,
                            },
                        ],
                    },
                ],
            },
            description: '配置Tooltip提示框，false表示禁用，object可配置提示框样式和显示延迟',
            defaultValue: {
                showAfter: 500,
            },
            example: {
                popperClass: 'custom-tooltip',
                showAfter: 500,
            },
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '文本内容插槽，当使用插槽时无法监听内容变化而更新省略组件',
            required: false,
        },
        {
            name: 'tooltip',
            description: '自定义Tooltip内容插槽，可完全自定义提示框内容',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础用法',
            output: '<!-- correct -->\n[场景说明] 基本文本省略功能\n[代码实现]\n<template>\n  <FEllipsis \n    content="这是一段需要省略的长文本内容..."\n    style="max-width: 240px"\n  />\n</template>\n[最佳实践] 设置max-width限制容器宽度，确保省略效果可见',
        },
        {
            input: '多行省略',
            output: '<!-- correct -->\n[场景说明] 多行文本省略功能\n[代码实现]\n<template>\n  <FEllipsis \n    :line="2"\n    content="第一行文本\\n第二行文本\\n第三行文本"\n    style="width: 200px"\n  />\n</template>\n[最佳实践] 使用line属性控制显示行数，注意容器高度需适配行数',
        },
        {
            input: '禁用Tooltip',
            output: '<!-- correct -->\n[场景说明] 禁用Tooltip提示功能\n[代码实现]\n<template>\n  <FEllipsis \n    content="这段文本省略后不显示Tooltip"\n    :tooltip="false"\n    style="width: 100px"\n  />\n</template>\n[最佳实践] 在不需要提示的场景可禁用Tooltip提升性能',
        },
        {
            input: '自定义Tooltip样式',
            output: '<!-- correct -->\n[场景说明] 自定义Tooltip样式和延迟\n[代码实现]\n<template>\n  <FEllipsis \n    content="自定义样式的Tooltip"\n    :tooltip="{ popperClass: \'custom-tip\', showAfter: 1000 }"\n    style="width: 120px"\n  />\n</template>\n[最佳实践] 通过popperClass可覆盖默认Tooltip样式',
        },
        {
            input: '插槽内容',
            output: '<!-- correct -->\n[场景说明] 使用插槽定义内容和Tooltip\n[代码实现]\n<template>\n  <FEllipsis style="width: 150px">\n    这是通过插槽定义的内容\n    <template #tooltip>\n      <div class="custom-content">自定义Tooltip内容</div>\n    </template>\n  </FEllipsis>\n</template>\n[最佳实践] 插槽方式更灵活但无法监听内容变化',
        },
        {
            input: '数字内容',
            output: '<!-- correct -->\n[场景说明] 显示数字内容的省略\n[代码实现]\n<template>\n  <FEllipsis \n    :content="1234567890"\n    style="width: 50px"\n  />\n</template>\n[最佳实践] 数字会自动转换为字符串处理',
        },
        {
            input: '响应式宽度',
            output: '<!-- correct -->\n[场景说明] 响应式容器宽度下的省略\n[代码实现]\n<template>\n  <div style="width: 100%; max-width: 300px">\n    <FEllipsis \n      content="随容器宽度变化的省略文本"\n    />\n  </div>\n</template>\n[最佳实践] 外层容器控制宽度可实现响应式省略',
        },
        {
            input: '多语言支持',
            output: '<!-- correct -->\n[场景说明] 多语言文本的省略处理\n[代码实现]\n<template>\n  <FEllipsis \n    :content="$t(\'long.text.content\')"\n    style="width: 180px"\n  />\n</template>\n[最佳实践] 支持i18n多语言文本的省略处理',
        },
        {
            input: '缺少content属性',
            output: '<!-- error -->\n[错误分析] 未提供必要的内容属性\n[正确代码]\n<template>\n  <FEllipsis \n    content="必须提供内容"\n    style="width: 100px"\n  />\n</template>\n[注意事项] 必须提供content属性或default插槽内容',
        },
        {
            input: '错误的line类型',
            output: '<!-- error -->\n[错误分析] line属性应为数字或字符串\n[正确代码]\n<template>\n  <FEllipsis \n    content="文本内容"\n    :line="2"\n    style="width: 100px"\n  />\n</template>\n[注意事项] line属性不支持布尔等其他类型',
        },
        {
            input: '无效的tooltip配置',
            output: '<!-- error -->\n[错误分析] tooltip配置不符合规范\n[正确代码]\n<template>\n  <FEllipsis \n    content="文本内容"\n    :tooltip="{ showAfter: 500 }"\n    style="width: 100px"\n  />\n</template>\n[注意事项] tooltip应为布尔值或包含showAfter等有效属性的对象',
        },
        {
            input: '空内容处理',
            output: '<!-- correct -->\n[场景说明] 空文本内容的边界处理\n[代码实现]\n<template>\n  <FEllipsis \n    content=""\n    style="width: 100px"\n  />\n</template>\n[最佳实践] 空内容会正常渲染不显示省略效果',
        },
        {
            input: '极长文本处理',
            output: '<!-- correct -->\n[场景说明] 超长文本的性能优化\n[代码实现]\n<template>\n  <FEllipsis \n    :content="veryLongText"\n    style="width: 200px"\n  />\n</template>\n[最佳实践] 组件内部已做性能优化，可处理极长文本',
        },
        {
            input: '特殊字符处理',
            output: '<!-- correct -->\n[场景说明] 包含特殊字符的文本\n[代码实现]\n<template>\n  <FEllipsis \n    content="包含\\n换行符的文本"\n    :line="2"\n    style="width: 150px"\n  />\n</template>\n[最佳实践] 换行符等特殊字符会按预期处理',
        },
        {
            input: '怎么让文字显示不完就...',
            output: '<!-- correct -->\n[场景说明] 实现文本省略效果\n[代码实现]\n<template>\n  <FEllipsis \n    content="需要省略的文本内容"\n    style="width: 100px"\n  />\n</template>\n[最佳实践] 设置合适宽度和内容即可自动实现省略效果',
        },
        {
            input: '文字太多怎么搞成点点点',
            output: '<!-- correct -->\n[场景说明] 多行文本省略配置\n[代码实现]\n<template>\n  <FEllipsis \n    content="很长的文本内容"\n    :line="3"\n    style="width: 200px"\n  />\n</template>\n[最佳实践] 通过line属性控制显示行数',
        },
        {
            input: 'hover不显示完整内容咋办',
            output: '<!-- correct -->\n[场景说明] 检查Tooltip配置\n[代码实现]\n<template>\n  <FEllipsis \n    content="需要提示的文本"\n    :tooltip="{ showAfter: 500 }"\n    style="width: 100px"\n  />\n</template>\n[最佳实践] 确保tooltip未禁用且配置正确延迟',
        },
        {
            input: '自定义省略样式',
            output: '<!-- correct -->\n[场景说明] 通过CSS覆盖默认样式\n[代码实现]\n<template>\n  <FEllipsis \n    class="custom-ellipsis"\n    content="自定义样式的文本"\n    style="width: 150px"\n  />\n</template>\n\n<style>\n.custom-ellipsis {\n  color: #f00;\n  --ellipsis-color: #999;\n}\n</style>\n[最佳实践] 可通过CSS变量自定义省略号颜色',
        },
        {
            input: '与表格组合使用',
            output: '<!-- correct -->\n[场景说明] 表格单元格中的省略\n[代码实现]\n<template>\n  <FTable>\n    <FTableColumn \n      prop="desc" \n      label="描述"\n      width="120"\n    >\n      <template #default="{ row }">\n        <FEllipsis \n          :content="row.desc"\n        />\n      </template>\n    </FTableColumn>\n  </FTable>\n</template>\n[最佳实践] 在表格列中实现自适应宽度的省略',
        },
        {
            input: '与卡片组合使用',
            output: '<!-- correct -->\n[场景说明] 卡片描述文本省略\n[代码实现]\n<template>\n  <FCard>\n    <template #body>\n      <FEllipsis \n        :line="3"\n        content="卡片描述内容..."\n      />\n    </template>\n  </FCard>\n</template>\n[最佳实践] 控制卡片内描述文本的显示行数',
        },
    ],
};
