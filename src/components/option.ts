import type { IComponentMetadata } from '../type';

export const optionMeta: IComponentMetadata = {
    title: '选项',
    componentName: 'FOption',
    description: '基础选项组件，用于在下拉选择器、单选/多选框等场景中表示单个选项。支持绑定值、显示文本和禁用状态等基础功能。',
    scenarios: [
        '下拉选择器：作为FSelect组件的子选项，提供可选择的项目列表，支持绑定值和显示文本分离。',
        '单选组：作为FRadioGroup的子选项，提供单选功能，支持禁用特定选项。',
        '多选组：作为FCheckboxGroup的子选项，提供多选功能，支持自定义选项显示文本。',
        '级联选择：作为FCascader的子选项，支持多级联动选择场景。',
        '树形选择：作为FTreeSelect的子选项，支持树形结构的数据展示和选择。',
    ],
    parent: {
        types: [
            'data-entry',
        ],
        restrictions: [
            {
                parent: 'FSelect',
                description: '下拉选择器场景下必须作为FSelect的子组件',
            },
            {
                parent: 'FRadioGroup',
                description: '单选组场景下必须作为FRadioGroup的子组件',
            },
            {
                parent: 'FCheckboxGroup',
                description: '多选组场景下必须作为FCheckboxGroup的子组件',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'v-model',
            effect: '禁用状态下无法选中',
            notes: [
                '当选项被禁用时，即使v-model值为true也无法选中',
                '适用于需要临时禁用某些选项的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            valueType: 'bool',
            description: '是否选中当前选项，支持双向绑定',
            example: false,
        },
        {
            name: 'value',
            title: '选项值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                    'bool',
                ],
            },
            description: '选项的实际值，与显示文本分离',
            example: 'option1',
        },
        {
            name: 'label',
            title: '显示文本',
            valueType: 'string',
            description: '选项的显示文本，用于界面展示',
            example: '选项1',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用当前选项',
            defaultValue: false,
            example: false,
        },
    ],
    events: [],
    slots: [],
    exposes: [],
    templates: [
        {
            input: '基础下拉选项',
            output: '<!-- correct -->\n[场景说明] 创建基础下拉选择器的选项\n[代码实现]\n<FSelect>\n  <FOption value="1" label="选项1" />\n  <FOption value="2" label="选项2" />\n</FSelect>\n[最佳实践] 确保value值唯一，label清晰描述选项内容',
        },
        {
            input: '禁用选项',
            output: '<!-- correct -->\n[场景说明] 创建不可选的禁用选项\n[代码实现]\n<FOption value="3" label="禁用选项" disabled />\n[最佳实践] 对不可用选项明确标记disabled状态',
        },
        {
            input: '数字值选项',
            output: '<!-- correct -->\n[场景说明] 使用数字作为选项值\n[代码实现]\n<FOption :value="1" label="第一项" />\n[最佳实践] 数值类型value需要加冒号绑定',
        },
        {
            input: '布尔值选项',
            output: '<!-- correct -->\n[场景说明] 使用布尔值作为选项值\n[代码实现]\n<FOption :value="true" label="是" />\n<FOption :value="false" label="否" />\n[最佳实践] 布尔值需要加冒号绑定',
        },
        {
            input: '单选组选项',
            output: '<!-- correct -->\n[场景说明] 在单选组中使用选项\n[代码实现]\n<FRadioGroup v-model="selected">\n  <FOption value="a" label="选项A" />\n  <FOption value="b" label="选项B" />\n</FRadioGroup>\n[最佳实践] 确保单选组内选项value唯一',
        },
        {
            input: '多选组选项',
            output: '<!-- correct -->\n[场景说明] 在多选组中使用选项\n[代码实现]\n<FCheckboxGroup v-model="selected">\n  <FOption value="x" label="选项X" />\n  <FOption value="y" label="选项Y" />\n</FCheckboxGroup>\n[最佳实践] 多选组选项value需要唯一',
        },
        {
            input: 'v-model绑定选项',
            output: '<!-- correct -->\n[场景说明] 直接控制选项选中状态\n[代码实现]\n<FOption v-model="isSelected" value="opt1" label="选项1" />\n[最佳实践] 适用于需要独立控制选中状态的场景',
        },
        {
            input: '自定义样式选项',
            output: '<!-- correct -->\n[场景说明] 为选项添加自定义样式\n[代码实现]\n<FOption \n  value="styled" \n  label="带样式的选项"\n  style="color: red; font-weight: bold"\n/>\n[最佳实践] 使用内联样式覆盖默认样式',
        },
        {
            input: '缺少value属性',
            output: '<!-- error -->\n[错误分析] 缺少必要的value属性会导致选项无法正确识别\n[正确代码]\n<FOption value="valid" label="有效选项" />\n[注意事项] value是必填属性，且在同级选项中必须唯一',
        },
        {
            input: '重复value值',
            output: '<!-- error -->\n[错误分析] 重复的value会导致选择器无法区分选项\n[正确代码]\n<FSelect>\n  <FOption value="unique1" label="选项1" />\n  <FOption value="unique2" label="选项2" />\n</FSelect>\n[注意事项] 确保同一选择器内所有选项value唯一',
        },
        {
            input: '错误类型value',
            output: '<!-- error -->\n[错误分析] 使用对象等不支持的类型作为value\n[正确代码]\n<FOption value="valid-string" label="有效选项" />\n[注意事项] value仅支持string/number/bool类型',
        },
        {
            input: '空选项',
            output: '<!-- correct -->\n[场景说明] 处理空值或未定义选项\n[代码实现]\n<FOption \n  :value="null" \n  label="请选择"\n  disabled\n/>\n[最佳实践] 使用disabled防止选择空值',
        },
        {
            input: '极长文本选项',
            output: '<!-- correct -->\n[场景说明] 处理超长文本选项\n[代码实现]\n<FOption \n  value="long" \n  label="这是一个非常非常非常非常非常非常非常长的选项文本"\n/>\n[最佳实践] 考虑添加tooltip或截断处理超长文本',
        },
        {
            input: '特殊字符选项',
            output: '<!-- correct -->\n[场景说明] 处理包含特殊字符的选项\n[代码实现]\n<FOption \n  value="special@#$" \n  label="特殊选项(@#$)"\n/>\n[最佳实践] 确保特殊字符不会影响功能',
        },
        {
            input: '怎么用这个选项组件啊',
            output: '<!-- correct -->\n[场景说明] 基础使用指导\n[代码实现]\n<FSelect>\n  <FOption value="guide" label="使用指南" />\n</FSelect>\n[最佳实践] 必须作为选择器类组件的子组件使用',
        },
        {
            input: '为啥我的选项点不了',
            output: '<!-- error -->\n[错误分析] 可能设置了disabled或未正确绑定\n[正确代码]\n<FOption value="work" label="正常选项" />\n[注意事项] 检查disabled属性和父组件绑定状态',
        },
        {
            input: '选项样式怎么改',
            output: '<!-- correct -->\n[场景说明] 自定义选项样式\n[代码实现]\n<FOption \n  value="styled" \n  label="自定义样式"\n  class="custom-option"\n  style="color: blue"\n/>\n[最佳实践] 通过class或style属性覆盖默认样式',
        },
        {
            input: '和下拉框一起用',
            output: '<!-- correct -->\n[场景说明] 与FSelect组合使用\n[代码实现]\n<FSelect v-model="selected">\n  <FOption value="1" label="选项1" />\n  <FOption value="2" label="选项2" />\n</FSelect>\n[最佳实践] 作为FSelect的直接子组件使用',
        },
        {
            input: '和单选组配合',
            output: '<!-- correct -->\n[场景说明] 与FRadioGroup组合使用\n[代码实现]\n<FRadioGroup v-model="radioValue">\n  <FOption value="a" label="选项A" />\n  <FOption value="b" label="选项B" />\n</FRadioGroup>\n[最佳实践] 确保同一组内选项value唯一',
        },
    ],
};
