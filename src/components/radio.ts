import type { IComponentMetadata } from '../type';

export const radioMeta: IComponentMetadata = {
    title: '单选框',
    componentName: 'FRadio',
    description: '基础单选框组件，用于在多个互斥选项中选择单个值。支持单独使用或组合使用，可与FRadioGroup配合实现单选组功能。',
    scenarios: [
        '表单选择：在表单中使用单选框组让用户从多个互斥选项中选择一个值，如性别选择、支付方式等场景。',
        '设置选项：在系统设置中使用单选框切换不同配置选项，保持界面简洁直观。',
        '筛选条件：在数据筛选场景中使用单选框组快速切换不同筛选条件，提升用户体验。',
        '问卷调研：在问卷或调研表单中使用单选框收集用户单选答案，便于数据统计和分析。',
        '按钮式单选：使用FRadioButton实现按钮样式的单选组，适用于需要突出选项的场景。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FRadioGroup',
                description: '单选组场景下必须放在FRadioGroup组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'v-model',
            effect: '禁用状态下无法修改选中状态',
            notes: [
                '当单选框被禁用时，点击不会触发状态变化',
                '适用于需要临时禁用某些选项的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定值',
            valueType: 'bool',
            description: '控制单选框的选中状态，使用双向绑定',
            defaultValue: false,
            required: true,
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
            description: '该选项的值，在单选组中作为唯一标识',
            example: 'option1',
        },
        {
            name: 'label',
            title: '描述文本',
            valueType: 'string',
            description: '单选框的说明文本，显示在选项右侧',
            example: '男性',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用该选项',
            defaultValue: false,
            example: false,
        },
    ],
    events: [
        {
            name: 'change',
            description: '当选中状态变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number | boolean',
                    description: '当前选中的值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '单选框的说明内容，优先级高于label属性',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础单选框',
            output: '<!-- correct -->\n[场景说明] 单独使用的单选框，表示两种状态之间的切换\n[代码实现]\n<FRadio>选项一</FRadio>\n[最佳实践] 单独使用时需要配合v-model控制选中状态',
        },
        {
            input: '禁用状态的单选框',
            output: '<!-- correct -->\n[场景说明] 不可选的禁用状态单选框\n[代码实现]\n<FRadio disabled>禁用选项</FRadio>\n[最佳实践] 禁用状态需要明确视觉提示，通常使用灰色显示',
        },
        {
            input: '单选组用法',
            output: '<!-- correct -->\n[场景说明] 多个单选框组合使用实现单选功能\n[代码实现]\n<FRadioGroup v-model="selected">\n  <FRadio :value="1">选项一</FRadio>\n  <FRadio :value="2">选项二</FRadio>\n</FRadioGroup>\n[最佳实践] 单选组内各选项value值应该唯一',
        },
        {
            input: '垂直排列的单选组',
            output: '<!-- correct -->\n[场景说明] 垂直布局的单选组，适用于选项较多的情况\n[代码实现]\n<FRadioGroup vertical>\n  <FRadio :value="1">选项一</FRadio>\n  <FRadio :value="2">选项二</FRadio>\n</FRadioGroup>\n[最佳实践] 超过5个选项建议使用垂直布局',
        },
        {
            input: '按钮式单选组',
            output: '<!-- correct -->\n[场景说明] 按钮样式的单选组，视觉更突出\n[代码实现]\n<FRadioGroup v-model="selected" optionType="button">\n  <FRadioButton :value="1">选项一</FRadioButton>\n  <FRadioButton :value="2">选项二</FRadioButton>\n</FRadioGroup>\n[最佳实践] 按钮样式适合选项较少且需要强调的场景',
        },
        {
            input: '配置式单选组',
            output: '<!-- correct -->\n[场景说明] 通过options配置生成单选组，简化代码\n[代码实现]\n<FRadioGroup \n  v-model="selected" \n  :options="[\n    { label: \'选项一\', value: 1 },\n    { label: \'选项二\', value: 2 }\n  ]"\n/>\n[最佳实践] 动态选项建议使用配置方式',
        },
        {
            input: '带图标的单选按钮',
            output: '<!-- correct -->\n[场景说明] 带图标的单选按钮，增强视觉表现\n[代码实现]\n<FRadioButton :value="1">\n  <template #icon>\n    <StarOutlined />\n  </template>\n  收藏\n</FRadioButton>\n[最佳实践] 图标应与选项内容相关',
        },
        {
            input: '不可取消的单选组',
            output: '<!-- correct -->\n[场景说明] 选中后不能取消的单选组，确保必有选中项\n[代码实现]\n<FRadioGroup v-model="selected" :cancelable="false">\n  <FRadio :value="1">选项一</FRadio>\n  <FRadio :value="2">选项二</FRadio>\n</FRadioGroup>\n[最佳实践] 重要选择场景建议禁用取消功能',
        },
        {
            input: '错误的v-model类型',
            output: '<!-- error -->\n[错误分析] v-model应该使用boolean类型，此处错误使用了字符串\n[正确代码]\n<FRadio v-model="true">选项</FRadio>\n[注意事项] v-model必须绑定布尔值',
        },
        {
            input: '缺少必要属性',
            output: '<!-- error -->\n[错误分析] 单选组中的FRadio缺少必要的value属性\n[正确代码]\n<FRadioGroup v-model="selected">\n  <FRadio :value="1">选项一</FRadio>\n</FRadioGroup>\n[注意事项] 单选组中的每个选项必须设置value',
        },
        {
            input: '重复的value值',
            output: '<!-- error -->\n[错误分析] 单选组中存在重复的value值，会导致选择异常\n[正确代码]\n<FRadioGroup v-model="selected">\n  <FRadio :value="1">选项一</FRadio>\n  <FRadio :value="2">选项二</FRadio>\n</FRadioGroup>\n[注意事项] 单选组中各选项value必须唯一',
        },
        {
            input: '空状态单选组',
            output: '<!-- correct -->\n[场景说明] 处理无选项时的空状态\n[代码实现]\n<FRadioGroup v-model="selected" v-if="options.length">\n  <FRadio v-for="opt in options" :key="opt.value" :value="opt.value">\n    {{ opt.label }}\n  </FRadio>\n</FRadioGroup>\n<div v-else>暂无选项</div>\n[最佳实践] 动态选项需要处理空状态',
        },
        {
            input: '大量选项处理',
            output: '<!-- correct -->\n[场景说明] 处理大量选项时的性能优化\n[代码实现]\n<FRadioGroup v-model="selected" vertical>\n  <template v-for="opt in options">\n    <FRadio :key="opt.value" :value="opt.value">{{ opt.label }}</FRadio>\n  </template>\n</FRadioGroup>\n[最佳实践] 超过50个选项建议使用虚拟滚动',
        },
        {
            input: '极长文本选项',
            output: '<!-- correct -->\n[场景说明] 处理选项文本过长的情况\n[代码实现]\n<FRadioGroup v-model="selected" style="max-width: 300px">\n  <FRadio :value="1">\n    这是一个非常非常长的选项文本，需要进行截断处理\n  </FRadio>\n</FRadioGroup>\n[最佳实践] 长文本选项应设置宽度限制',
        },
        {
            input: '怎么用单选框？',
            output: '<!-- correct -->\n[场景说明] 基础单选框使用方式\n[代码实现]\n<FRadio v-model="checked">选项</FRadio>\n[最佳实践] 单独使用时需要绑定v-model控制状态',
        },
        {
            input: '单选组怎么搞？',
            output: '<!-- correct -->\n[场景说明] 单选组基础实现\n[代码实现]\n<FRadioGroup v-model="selected">\n  <FRadio :value="1">选项一</FRadio>\n  <FRadio :value="2">选项二</FRadio>\n</FRadioGroup>\n[最佳实践] 确保每个选项有唯一的value',
        },
        {
            input: '单选按扭样式',
            output: '<!-- correct -->\n[场景说明] 按钮式单选组实现\n[代码实现]\n<FRadioGroup v-model="selected" optionType="button">\n  <FRadioButton :value="1">选项一</FRadioButton>\n  <FRadioButton :value="2">选项二</FRadioButton>\n</FRadioGroup>\n[最佳实践] 按钮样式适合选项较少场景',
        },
        {
            input: '自定义单选样式',
            output: '<!-- correct -->\n[场景说明] 自定义单选框样式\n[代码实现]\n<FRadioGroup v-model="selected" class="custom-radio">\n  <FRadio :value="1">选项一</FRadio>\n</FRadioGroup>\n\n<style>\n.custom-radio .fes-radio-label {\n  color: #f00;\n}\n</style>\n[最佳实践] 优先使用主题变量进行样式定制',
        },
        {
            input: '单选组与表单结合',
            output: '<!-- correct -->\n[场景说明] 在表单中使用单选组\n[代码实现]\n<FForm>\n  <FFormItem label="性别">\n    <FRadioGroup v-model="form.gender">\n      <FRadio :value="1">男</FRadio>\n      <FRadio :value="2">女</FRadio>\n    </FRadioGroup>\n  </FFormItem>\n</FForm>\n[最佳实践] 表单中的单选组需要明确标签',
        },
        {
            input: '动态选项单选组',
            output: '<!-- correct -->\n[场景说明] 动态生成选项的单选组\n[代码实现]\n<FRadioGroup v-model="selected">\n  <FRadio \n    v-for="item in options" \n    :key="item.id" \n    :value="item.id"\n  >\n    {{ item.name }}\n  </FRadio>\n</FRadioGroup>\n[最佳实践] 动态选项需要设置唯一的key',
        },
    ],
};
