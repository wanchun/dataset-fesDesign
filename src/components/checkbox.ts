import type { IComponentMetadata } from '../type';

export const checkboxMeta: IComponentMetadata = {
    title: '多选框',
    componentName: 'FCheckbox',
    description: '多选框组件，用于在表单或界面中表示选择状态。支持单独使用或组合使用，可表示选中、未选中和不确定三种状态。适用于表单选择、配置项开关等场景。',
    scenarios: [
        '表单选择：在表单中使用多选框组，允许用户选择多个选项，适用于问卷调查、权限设置等场景。',
        '配置开关：单独使用多选框作为开关控件，用于启用/禁用某项功能，如设置页面中的功能开关。',
        '批量操作：在表格工具栏中使用多选框，配合全选/反选功能实现批量操作。',
        '权限配置：在权限管理系统中使用多选框组，直观展示和配置各项权限。',
        '筛选条件：在筛选面板中使用多选框组，允许用户选择多个筛选条件。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FCheckboxGroup',
                description: '在多选框组场景下必须放在FCheckboxGroup组件内',
            },
            {
                parent: 'FFormItem',
                description: '表单项场景下建议放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: [
                'indeterminate',
            ],
            effect: '禁用状态下不确定状态仅影响样式',
            notes: [
                '当disabled为true时，indeterminate仅影响视觉样式',
                '适用于需要显示禁用但部分选中的场景',
            ],
        },
        {
            source: 'indeterminate',
            target: 'v-model',
            effect: '不确定状态不影响实际选中值',
            notes: [
                'indeterminate为true时仅表示视觉上的部分选中状态',
                '实际选中状态仍由v-model控制',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定值',
            valueType: 'bool',
            description: '控制多选框的选中状态，true表示选中，false表示未选中',
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
            description: '在多选框组中使用时表示该选项的值，需要唯一',
            example: 'option1',
        },
        {
            name: 'label',
            title: '描述文本',
            valueType: 'string',
            description: '多选框右侧显示的描述文本，与slot内容二选一使用',
            example: '同意协议',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用多选框，禁用状态下不可交互',
            defaultValue: false,
            example: false,
        },
        {
            name: 'indeterminate',
            title: '不确定状态',
            valueType: 'bool',
            description: '表示部分选中状态，仅影响视觉样式不影响实际选中值',
            defaultValue: false,
            example: false,
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '当选中状态变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number | boolean',
                    description: '变化后的选中状态或选项值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '多选框的描述内容，优先级高于label属性',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础多选框',
            output: '<!-- correct -->\n[场景说明] 单独使用多选框表示开关状态\n[代码实现] <FCheckbox v-model="checked">同意协议</FCheckbox>\n[最佳实践] 使用v-model绑定选中状态，通过slot或label添加描述',
        },
        {
            input: '禁用状态的多选框',
            output: '<!-- correct -->\n[场景说明] 展示不可交互的多选框\n[代码实现] <FCheckbox disabled>不可选选项</FCheckbox>\n[最佳实践] 禁用状态下应提供额外说明告知用户原因',
        },
        {
            input: '部分选中状态',
            output: '<!-- correct -->\n[场景说明] 表示部分选中的中间状态\n[代码实现] <FCheckbox indeterminate>部分选中</FCheckbox>\n[最佳实践] 通常用于表示父级选项的部分子项被选中',
        },
        {
            input: '多选框组',
            output: '<!-- correct -->\n[场景说明] 多个多选框组合使用\n[代码实现] <FCheckboxGroup v-model="selected">\n  <FCheckbox value="1">选项1</FCheckbox>\n  <FCheckbox value="2">选项2</FCheckbox>\n</FCheckboxGroup>\n[最佳实践] 使用FCheckboxGroup管理多个选项的选中状态',
        },
        {
            input: '垂直排列的多选框组',
            output: '<!-- correct -->\n[场景说明] 垂直布局的多选框组\n[代码实现] <FCheckboxGroup vertical>\n  <FCheckbox value="1">选项1</FCheckbox>\n  <FCheckbox value="2">选项2</FCheckbox>\n</FCheckboxGroup>\n[最佳实践] 选项较多时使用垂直布局更清晰',
        },
        {
            input: '配置方式的多选框组',
            output: '<!-- correct -->\n[场景说明] 通过options配置生成多选框组\n[代码实现] <FCheckboxGroup :options="options" />\n[最佳实践] 动态选项或选项较多时推荐使用配置方式',
        },
        {
            input: '错误示例：缺少v-model',
            output: '<!-- error -->\n[错误分析] 单独使用FCheckbox时必须提供v-model绑定选中状态\n[正确代码] <FCheckbox v-model="checked">选项</FCheckbox>\n[注意事项] 单独使用的多选框必须绑定v-model以管理状态',
        },
        {
            input: '错误示例：多选框组中缺少value',
            output: '<!-- error -->\n[错误分析] 在多选框组中使用时每个FCheckbox必须指定value\n[正确代码] <FCheckboxGroup v-model="selected">\n  <FCheckbox value="1">选项1</FCheckbox>\n</FCheckboxGroup>\n[注意事项] 组内每个选项必须有唯一标识的value',
        },
        {
            input: '错误示例：同时使用label和slot',
            output: '<!-- error -->\n[错误分析] label属性和slot内容同时存在时会产生冲突\n[正确代码] <FCheckbox>优先使用slot内容</FCheckbox>\n[注意事项] 优先使用slot内容，label属性作为备选',
        },
        {
            input: '空状态的多选框组',
            output: '<!-- correct -->\n[场景说明] 处理无选项的多选框组\n[代码实现] <FCheckboxGroup v-model="selected" :options="[]">\n  <div>暂无选项</div>\n</FCheckboxGroup>\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '极值测试：大量选项',
            output: '<!-- correct -->\n[场景说明] 测试大量选项时的性能\n[代码实现] <FCheckboxGroup v-model="selected" :options="largeOptions" />\n[最佳实践] 超过50个选项时考虑分页或虚拟滚动',
        },
        {
            input: '样式覆盖案例',
            output: '<!-- correct -->\n[场景说明] 自定义多选框样式\n[代码实现] <FCheckbox class="custom-checkbox">自定义样式</FCheckbox>\n<style>.custom-checkbox { color: red; }</style>\n[最佳实践] 通过class覆盖默认样式，保持交互一致性',
        },
        {
            input: '与表单组件组合使用',
            output: '<!-- correct -->\n[场景说明] 在表单中使用多选框组\n[代码实现] <FForm>\n  <FFormItem label="爱好">\n    <FCheckboxGroup v-model="hobbies">\n      <FCheckbox value="reading">阅读</FCheckbox>\n      <FCheckbox value="sports">运动</FCheckbox>\n    </FCheckboxGroup>\n  </FFormItem>\n</FForm>\n[最佳实践] 配合表单组件实现完整的数据收集',
        },
        {
            input: '与表格组件组合使用',
            output: '<!-- correct -->\n[场景说明] 表格行选择\n[代码实现] <FTable>\n  <template #selection="{ row }">\n    <FCheckbox v-model="row.selected" />\n  </template>\n</FTable>\n[最佳实践] 通过作用域插槽实现表格行选择功能',
        },
        {
            input: '怎么用多选框？',
            output: '<!-- correct -->\n[场景说明] 基础多选框使用\n[代码实现] <FCheckbox v-model="checked">选项</FCheckbox>\n[最佳实践] 使用v-model绑定选中状态，通过slot添加描述',
        },
        {
            input: '多选框组怎么搞？',
            output: '<!-- correct -->\n[场景说明] 多选框组使用\n[代码实现] <FCheckboxGroup v-model="selected">\n  <FCheckbox value="1">选项1</FCheckbox>\n  <FCheckbox value="2">选项2</FCheckbox>\n</FCheckboxGroup>\n[最佳实践] 使用FCheckboxGroup管理多个选项状态',
        },
        {
            input: '多选框点不了咋回事？',
            output: '<!-- error -->\n[错误分析] 可能是disabled状态或未正确绑定v-model\n[正确代码] <FCheckbox v-model="checked">可点击选项</FCheckbox>\n[注意事项] 确保未设置disabled并正确绑定v-model',
        },
        {
            input: '多选框半选状态',
            output: '<!-- correct -->\n[场景说明] 部分选中状态\n[代码实现] <FCheckbox indeterminate>部分选中</FCheckbox>\n[最佳实践] 用于表示父选项的部分子项被选中',
        },
        {
            input: '多选框垂直排列',
            output: '<!-- correct -->\n[场景说明] 垂直布局的多选框组\n[代码实现] <FCheckboxGroup vertical>\n  <FCheckbox value="1">选项1</FCheckbox>\n  <FCheckbox value="2">选项2</FCheckbox>\n</FCheckboxGroup>\n[最佳实践] 选项较多时使用垂直布局更清晰',
        },
        {
            input: '多选框配置选项',
            output: '<!-- correct -->\n[场景说明] 通过options配置多选框组\n[代码实现] <FCheckboxGroup :options="[\n  { label: \'选项1\', value: 1 },\n  { label: \'选项2\', value: 2 }\n]" />\n[最佳实践] 动态选项推荐使用配置方式',
        },
    ],
};
