import type { IComponentMetadata } from '../type';

export const textHighlightMeta: IComponentMetadata = {
    title: '文本高亮',
    componentName: 'FTextHighlight',
    description: '用于高亮文本中的指定文字，支持自定义高亮样式和严格匹配模式。适用于搜索关键词高亮、重点内容标记等场景。',
    scenarios: [
        '搜索关键词高亮：在搜索结果页面中高亮显示用户搜索的关键词，提升结果可读性。',
        '文档重点标记：在文档阅读器中标记重要内容或关键词，帮助用户快速定位。',
        '代码编辑器：在代码编辑器中高亮显示特定语法或变量，增强代码可读性。',
        '表单验证提示：在表单验证错误时高亮显示错误字段，引导用户修正。',
        '数据对比分析：在数据对比场景中高亮显示差异部分，便于用户识别变化。',
        '教育应用：在在线学习平台中高亮显示重点知识点，辅助学习记忆。',
        '日志分析：在系统日志中高亮显示关键错误信息，便于问题排查。',
    ],
    parent: {
        types: [
            'container',
        ],
        restrictions: [],
    },
    children: [
        'FText',
        'FButton',
        '/^F[A-Z]\\w+/',
    ],
    propRelations: [
        {
            source: 'strict',
            target: 'searchValues',
            effect: '严格模式影响搜索内容的匹配规则',
            notes: [
                '当strict为true时，搜索内容区分大小写',
                '适用于需要精确匹配的场景',
            ],
        },
    ],
    props: [
        {
            name: 'searchValues',
            title: '搜索内容',
            valueType: {
                type: 'arrayOf',
                value: 'string',
            },
            description: '需要高亮显示的文本内容数组，支持多个关键词同时高亮',
            defaultValue: [],
            example: [
                'highlight',
                'text',
            ],
        },
        {
            name: 'strict',
            title: '严格模式',
            valueType: 'bool',
            description: '是否区分大小写匹配，开启后搜索内容将严格匹配大小写',
            defaultValue: false,
            example: true,
        },
        {
            name: 'markTextStyle',
            title: '高亮样式',
            valueType: 'object',
            description: '自定义高亮文本的CSS样式，支持所有CSS属性',
            example: {
                backgroundColor: '#ffdbdc',
                color: '#ff4d4f',
            },
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '需要高亮的文本内容，支持嵌套其他组件和纯文本',
            required: true,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '如何高亮文本中的关键词？',
            output: '[场景说明] 在搜索结果中高亮显示用户搜索的关键词\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'highlight\', \'text\']">\n  This is a text highlight demo.\n</FTextHighlight>\n[最佳实践] 建议将搜索词数组作为响应式变量动态更新',
        },
        {
            input: '怎么让高亮区分大小写？',
            output: '[场景说明] 需要精确匹配大小写的高亮场景\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'Highlight\']" \n  :strict="true">\n  Text Highlight demo\n</FTextHighlight>\n[最佳实践] 严格模式适合专业术语或代码高亮场景',
        },
        {
            input: '自定义高亮颜色怎么设置',
            output: '[场景说明] 自定义高亮文本的样式\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'important\']"\n  :markTextStyle="{\n    backgroundColor: \'#fffbe6\',\n    color: \'#faad14\'\n  }">\n  This is important information.\n</FTextHighlight>\n[最佳实践] 建议使用符合品牌色的配色方案',
        },
        {
            input: '高亮组件里能放按钮吗？',
            output: '[场景说明] 在文本高亮中混合使用其他组件\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'click\']">\n  Please <FButton>click</FButton> here to continue.\n</FTextHighlight>\n[最佳实践] 支持嵌套任意组件，但只会高亮纯文本部分',
        },
        {
            input: '动态更新高亮关键词',
            output: '[场景说明] 根据用户输入动态更新高亮词\n[代码实现] <!-- correct -->\n<template>\n  <FInput v-model="keyword" />\n  <FTextHighlight :searchValues="[keyword]">\n    Dynamic highlight demo\n  </FTextHighlight>\n</template>\n\n<script setup>\nconst keyword = ref(\'\');\n</script>\n[最佳实践] 建议添加防抖优化性能',
        },
        {
            input: '高亮中文文本',
            output: '[场景说明] 对中文字符进行高亮处理\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'中文\']">\n  这是一段包含中文的文本\n</FTextHighlight>\n[最佳实践] 中文搜索建议关闭严格模式',
        },
        {
            input: '多关键词高亮示例',
            output: '[场景说明] 同时高亮多个不同的关键词\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'first\', \'second\']">\n  This is the first example and the second demo.\n</FTextHighlight>\n[最佳实践] 建议关键词数量控制在5个以内',
        },
        {
            input: '高亮长文本性能优化',
            output: '[场景说明] 在长文本中高效使用高亮功能\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="keywords"\n  :markTextStyle="{ backgroundColor: \'transparent\', color: \'red\' }">\n  {{ longText }}\n</FTextHighlight>\n[最佳实践] 使用简单的样式可提升渲染性能',
        },
        {
            input: 'searchValues没传数组',
            output: '[错误分析] searchValues必须是数组类型\n[正确代码] <!-- correct -->\n<FTextHighlight :searchValues="[\'valid\']">\n  Valid example\n</FTextHighlight>\n[注意事项] 即使只有一个关键词也需要用数组包裹',
        },
        {
            input: 'searchValues传了数字',
            output: '[错误分析] searchValues数组元素必须是字符串\n[正确代码] <!-- correct -->\n<FTextHighlight :searchValues="[\'123\']">\n  Number as string\n</FTextHighlight>\n[注意事项] 数字等非字符串内容需要先转换为字符串',
        },
        {
            input: '没传子内容',
            output: '[错误分析] 必须提供default插槽内容\n[正确代码] <!-- correct -->\n<FTextHighlight :searchValues="[\'required\']">\n  Valid content\n</FTextHighlight>\n[注意事项] 空内容会导致高亮功能失效',
        },
        {
            input: '空搜索词数组',
            output: '[边界条件] 处理空搜索词情况\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[]">\n  No highlight applied\n</FTextHighlight>\n[最佳实践] 空数组时组件会正常渲染但不应用高亮',
        },
        {
            input: '超长关键词处理',
            output: '[边界条件] 处理超长关键词场景\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'a\'.repeat(1000)]"\n  :markTextStyle="{ overflowWrap: \'break-word\' }">\n  Long text demo\n</FTextHighlight>\n[注意事项] 超长关键词可能影响布局，建议添加样式控制',
        },
        {
            input: '特殊字符高亮',
            output: '[边界条件] 包含正则特殊字符的搜索词\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'.*+?^${}()|[]\\\\\']">\n  Regex special chars: .*+?^${}()|[]\\\n</FTextHighlight>\n[最佳实践] 组件内部已处理特殊字符转义',
        },
        {
            input: '高亮样式能覆盖吗？',
            output: '[样式覆盖] 自定义高亮样式案例\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'custom\']"\n  :markTextStyle="{\n    backgroundColor: \'transparent\',\n    fontWeight: \'bolder\',\n    textDecoration: \'underline wavy\'\n  }">\n  Custom style highlight\n</FTextHighlight>\n[最佳实践] 支持所有CSS属性，注意样式优先级',
        },
        {
            input: '和表格组件一起用',
            output: '[组合场景] 在表格单元格中高亮内容\n[代码实现] <!-- correct -->\n<FTable :data="data">\n  <FTableColumn prop="name">\n    <template #default="{ row }">\n      <FTextHighlight :searchValues="searchTerms">\n        {{ row.name }}\n      </FTextHighlight>\n    </template>\n  </FTableColumn>\n</FTable>\n[注意事项] 确保表格数据是响应式的',
        },
        {
            input: '结合搜索框组件',
            output: '[组合场景] 实时搜索高亮实现\n[代码实现] <!-- correct -->\n<template>\n  <FSearch @search="handleSearch" />\n  <FTextHighlight :searchValues="keywords">\n    {{ content }}\n  </FTextHighlight>\n</template>\n\n<script setup>\nconst keywords = ref([]);\nconst handleSearch = (query) => {\n  keywords.value = query.split(\' \');\n};\n</script>\n[最佳实践] 添加防抖优化搜索体验',
        },
        {
            input: '高亮咋用啊？',
            output: '[自然语言提问] 基础用法咨询\n[代码实现] <!-- correct -->\n<FTextHighlight :searchValues="[\'demo\']">\n  This is a basic usage demo.\n</FTextHighlight>\n[最佳实践] 最简单的用法只需要提供searchValues和文本内容',
        },
        {
            input: '怎么标红某些字',
            output: '[自然语言提问] 自定义颜色需求\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'标红\']"\n  :markTextStyle="{ color: \'red\' }">\n  这里需要标红某些字\n</FTextHighlight>\n[注意事项] 通过markTextStyle控制颜色',
        },
        {
            input: '区分大写的高亮不会搞',
            output: '[自然语言提问] 严格模式使用\n[代码实现] <!-- correct -->\n<FTextHighlight \n  :searchValues="[\'CaseSensitive\']" \n  :strict="true">\n  CaseSensitive vs casesensitive\n</FTextHighlight>\n[最佳实践] 设置strict为true启用大小写敏感匹配',
        },
    ],
};
