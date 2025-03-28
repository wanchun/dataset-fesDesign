import type { IComponentMetadata } from '../type';

export const rateMeta: IComponentMetadata = {
    title: '评分',
    componentName: 'FRate',
    description: '评分组件用于用户对内容进行评分操作，支持自定义图标、辅助文字、多种尺寸和颜色配置，适用于商品评价、满意度调查等场景。',
    scenarios: [
        '商品评价：在电商平台商品详情页使用评分组件，允许用户对商品进行星级评价，直观展示商品质量。',
        '满意度调查：在客服反馈系统中使用评分组件，收集用户对服务的满意度评分，便于量化服务质量。',
        '内容评分：在内容平台使用评分组件，让用户对文章、视频等内容进行评分，辅助内容推荐算法。',
        '内部评审：在企业内部系统中使用评分组件，用于员工互评或项目评审，简化评分流程。',
        '教学评价：在教育平台使用评分组件，学生可以对课程或教师进行评分，帮助改进教学质量。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单场景下建议放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'showText',
            target: 'texts',
            effect: '当showText为true时，texts属性才生效',
            notes: [
                'texts数组长度应与count属性值一致',
                '未匹配文字的评分项不会显示文字',
            ],
        },
        {
            source: 'clearable',
            target: 'readonly',
            effect: '当clearable为true时，readonly必须为false',
            notes: [
                '只读模式下无法清除评分',
            ],
        },
    ],
    props: [
        {
            name: 'modelValue',
            title: '绑定值',
            valueType: 'number',
            description: '当前激活的评分值，使用v-model进行双向绑定',
            defaultValue: 0,
            required: true,
            example: 3,
        },
        {
            name: 'allowHalf',
            title: '半星模式',
            valueType: 'bool',
            description: '是否允许选择半星评分',
            defaultValue: false,
            example: true,
        },
        {
            name: 'colorFilled',
            title: '填充风格',
            valueType: 'bool',
            description: '是否使用颜色填充评分图标',
            defaultValue: true,
            example: false,
        },
        {
            name: 'readonly',
            title: '只读模式',
            valueType: 'bool',
            description: '是否只读，无法交互',
            defaultValue: false,
            example: true,
        },
        {
            name: 'count',
            title: '图标数量',
            valueType: 'number',
            description: '评分图标的总数量',
            defaultValue: 5,
            example: 10,
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
                        usage: '在空间有限的场景使用',
                    },
                    {
                        value: 'medium',
                        title: '中',
                        usage: '默认尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出显示评分的场景',
                    },
                ],
            },
            description: '评分组件的尺寸大小',
            defaultValue: 'medium',
            example: 'large',
        },
        {
            name: 'color',
            title: '颜色',
            valueType: 'string',
            description: '评分图标的颜色，支持十六进制色值或颜色关键字',
            defaultValue: '#f29360',
            example: '#ff0000',
        },
        {
            name: 'clearable',
            title: '可清除',
            valueType: 'bool',
            description: '是否允许清除已选评分',
            defaultValue: false,
            example: true,
        },
        {
            name: 'texts',
            title: '辅助文字',
            valueType: {
                type: 'arrayOf',
                value: 'string',
            },
            description: '每个评分项对应的辅助文字，数组长度应与count一致',
            example: [
                '差',
                '一般',
                '好',
                '很好',
                '非常好',
            ],
        },
        {
            name: 'showText',
            title: '显示文字',
            valueType: 'bool',
            description: '是否显示辅助文字',
            defaultValue: false,
            example: true,
        },
    ],
    events: [
        {
            name: 'change',
            description: '评分值变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'number',
                    description: '新的评分值',
                },
            ],
        },
        {
            name: 'clear',
            description: '清除评分时触发',
            parameters: [],
        },
    ],
    slots: [
        {
            name: 'content',
            description: '自定义评分图标内容',
            scope: {
                size: 'string',
                index: 'number',
                active: 'boolean',
            },
        },
    ],
    templates: [
        {
            input: '基础评分组件',
            output: '[场景说明] 最基本的评分组件使用方式\n[代码实现] <!-- correct -->\n<FRate v-model="value" />\n[最佳实践] 适用于简单的评分场景，默认5星评分',
        },
        {
            input: '半星评分',
            output: '[场景说明] 允许用户选择半星评分\n[代码实现] <!-- correct -->\n<FRate v-model="value" allow-half />\n[最佳实践] 当需要更精细的评分粒度时使用',
        },
        {
            input: '自定义颜色',
            output: '[场景说明] 自定义评分组件的颜色\n[代码实现] <!-- correct -->\n<FRate v-model="value" color="#ff0000" />\n[最佳实践] 需要与品牌色保持一致时使用',
        },
        {
            input: '显示辅助文字',
            output: '[场景说明] 为每个评分项添加描述文字\n[代码实现] <!-- correct -->\n<FRate \n  v-model="value" \n  show-text \n  :texts="[\'差\', \'一般\', \'好\', \'很好\', \'非常好\']" \n/>\n[最佳实践] 帮助用户理解每个评分的含义',
        },
        {
            input: '自定义图标',
            output: '[场景说明] 使用自定义图标替代默认星星\n[代码实现] <!-- correct -->\n<FRate v-model="value">\n  <template #content="slotProps">\n    <HeartOutlined :size="slotProps.size" />\n  </template>\n</FRate>\n[最佳实践] 需要与产品风格保持一致时使用',
        },
        {
            input: '只读模式',
            output: '[场景说明] 展示评分结果不允许修改\n[代码实现] <!-- correct -->\n<FRate v-model="value" readonly />\n[最佳实践] 用于展示已有评分结果',
        },
        {
            input: '不同尺寸',
            output: '[场景说明] 展示不同尺寸的评分组件\n[代码实现] <!-- correct -->\n<FRate v-model="value" size="small" />\n<FRate v-model="value" size="medium" />\n<FRate v-model="value" size="large" />\n[最佳实践] 根据页面空间和视觉重要性选择合适的尺寸',
        },
        {
            input: '可清除评分',
            output: '[场景说明] 允许用户清除已选评分\n[代码实现] <!-- correct -->\n<FRate v-model="value" clearable />\n[最佳实践] 当评分不是必填项时使用',
        },
        {
            input: '错误示例：texts长度不匹配',
            output: '[错误分析] texts数组长度与count不匹配会导致显示异常\n[正确代码] <!-- correct -->\n<FRate v-model="value" :count="5" :texts="[\'差\', \'一般\', \'好\']" />\n[注意事项] texts数组长度必须与count属性值一致',
        },
        {
            input: '错误示例：同时设置readonly和clearable',
            output: '[错误分析] 只读模式下无法清除评分\n[正确代码] <!-- correct -->\n<FRate v-model="value" clearable :readonly="false" />\n[注意事项] clearable为true时readonly必须为false',
        },
        {
            input: '错误示例：v-model未绑定',
            output: '[错误分析] 未绑定v-model会导致无法获取评分值\n[正确代码] <!-- correct -->\n<FRate v-model="ratingValue" />\n[注意事项] 必须使用v-model绑定评分值',
        },
        {
            input: '边界条件：空评分',
            output: '[场景说明] 初始值为0时的评分组件\n[代码实现] <!-- correct -->\n<FRate v-model="value" :value="0" />\n[最佳实践] 确保UI能清晰展示未评分状态',
        },
        {
            input: '边界条件：最大值评分',
            output: '[场景说明] 评分值为最大值时的UI表现\n[代码实现] <!-- correct -->\n<FRate v-model="value" :value="5" />\n[最佳实践] 确保UI能清晰展示满分状态',
        },
        {
            input: '边界条件：非整数评分',
            output: '[场景说明] 非整数评分值的显示\n[代码实现] <!-- correct -->\n<FRate v-model="value" :value="3.5" allow-half />\n[最佳实践] 确保半星模式下的UI显示正确',
        },
        {
            input: '怎么让评分显示文字？',
            output: '[场景说明] 为评分组件添加辅助文字\n[代码实现] <!-- correct -->\n<FRate v-model="value" show-text :texts="[\'差\', \'一般\', \'好\', \'很好\', \'非常好\']" />\n[最佳实践] 需要同时设置showText和texts属性',
        },
        {
            input: '评分能改图标吗？',
            output: '[场景说明] 自定义评分图标\n[代码实现] <!-- correct -->\n<FRate v-model="value">\n  <template #content="slotProps">\n    <StarOutlined :size="slotProps.size" />\n  </template>\n</FRate>\n[最佳实践] 通过content插槽自定义图标',
        },
        {
            input: '评分怎么清除啊？',
            output: '[场景说明] 可清除的评分组件\n[代码实现] <!-- correct -->\n<FRate v-model="value" clearable />\n[最佳实践] 设置clearable为true，点击已选评分可清除',
        },
        {
            input: '覆盖评分组件样式',
            output: '[场景说明] 自定义评分组件样式\n[代码实现] <!-- correct -->\n<FRate \n  v-model="value" \n  class="custom-rate" \n  style="--rate-color: #ffcc00" \n/>\n[最佳实践] 通过CSS变量或类名覆盖默认样式',
        },
        {
            input: '评分组件与表单结合',
            output: '[场景说明] 在表单中使用评分组件\n[代码实现] <!-- correct -->\n<FForm>\n  <FFormItem label="服务评分">\n    <FRate v-model="formData.rating" />\n  </FFormItem>\n</FForm>\n[最佳实践] 配合表单组件使用，便于数据收集和验证',
        },
        {
            input: '评分组件与表格结合',
            output: '[场景说明] 在表格中展示评分\n[代码实现] <!-- correct -->\n<FTable :data="data">\n  <FTableColumn prop="rating" label="评分">\n    <template #default="{ row }">\n      <FRate :value="row.rating" readonly />\n    </template>\n  </FTableColumn>\n</FTable>\n[最佳实践] 表格中通常使用只读模式展示评分',
        },
    ],
};
