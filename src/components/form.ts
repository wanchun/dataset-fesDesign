import type { IComponentMetadata } from '../type';

export const formMeta: IComponentMetadata = {
    title: '表单',
    componentName: 'FForm',
    description: '高级表单组件，用于收集、校验和提交用户输入数据。支持多种布局方式、表单验证规则和自定义校验逻辑，适用于复杂表单场景。',
    scenarios: [
        '用户注册表单：收集用户基本信息，包括用户名、密码等，并进行实时校验',
        '数据筛选表单：提供多种筛选条件，支持行内布局以节省空间',
        '配置表单：用于系统配置，支持分组、嵌套和复杂校验逻辑',
        '多步骤表单：将复杂表单拆分为多个步骤，每个步骤使用独立表单',
        '动态表单：根据用户选择动态显示/隐藏表单项',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FFormItem',
        'FInput',
        'FSelect',
        'FRadioGroup',
        'FCheckboxGroup',
        'FDatePicker',
        'FUpload',
    ],
    propRelations: [
        {
            source: 'layout',
            target: [
                'inlineItemWidth',
                'inlineItemGap',
                'span',
            ],
            effect: '当layout为inline时，行内表单相关属性生效',
            notes: [
                '行内表单模式下需要特别注意间距和宽度设置',
                '建议使用span属性控制表单项宽度',
            ],
        },
        {
            source: 'labelPosition',
            target: 'align',
            effect: '当labelPosition为left或right时，align属性生效',
            notes: [
                '顶对齐布局下align属性无效',
            ],
        },
        {
            source: 'disabled',
            target: 'showMessage',
            effect: '禁用状态下默认不显示校验信息',
            notes: [
                '可通过显式设置showMessage覆盖此行为',
            ],
        },
    ],
    props: [
        {
            name: 'model',
            title: '表单数据对象',
            valueType: 'object',
            description: '表单绑定的数据对象，用于双向数据绑定',
            required: true,
            example: '{ name: \'\', age: 0 }',
        },
        {
            name: 'rules',
            title: '验证规则',
            valueType: 'object',
            description: '表单验证规则配置，支持嵌套和复杂校验逻辑',
            example: '{ name: [{ required: true, message: \'请输入姓名\' }] }',
        },
        {
            name: 'layout',
            title: '布局方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'horizontal',
                        title: '垂直布局',
                        usage: '默认布局方式，适合大多数表单场景',
                    },
                    {
                        value: 'inline',
                        title: '行内布局',
                        usage: '适合筛选表单等需要紧凑布局的场景',
                    },
                ],
            },
            description: '表单布局方式，影响表单项的排列方式',
            defaultValue: 'horizontal',
            example: 'inline',
        },
        {
            name: 'inlineItemWidth',
            title: '行内表单项宽度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '行内布局模式下表单项的固定宽度',
            example: '200px',
        },
        {
            name: 'inlineItemGap',
            title: '行内间距',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '行内布局模式下表单项之间的间距',
            defaultValue: '11px',
            example: 20,
        },
        {
            name: 'span',
            title: '占据列数',
            valueType: 'number',
            description: '行内布局模式下表单项占据的列数（24栅格系统）',
            defaultValue: 6,
            example: 12,
        },
        {
            name: 'labelPosition',
            title: '标签位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'left',
                        title: '左侧',
                        usage: '默认标签位置，适合大多数场景',
                    },
                    {
                        value: 'right',
                        title: '右侧',
                        usage: '特殊场景下的标签位置',
                    },
                    {
                        value: 'top',
                        title: '顶部',
                        usage: '适合移动端或需要节省横向空间的场景',
                    },
                ],
            },
            description: '表单标签的位置',
            defaultValue: 'left',
            example: 'top',
        },
        {
            name: 'labelWidth',
            title: '标签宽度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '表单标签的宽度',
            example: '120px',
        },
        {
            name: 'labelClass',
            title: '标签类名',
            valueType: 'string',
            description: '自定义表单标签的样式类',
            example: 'custom-label',
        },
        {
            name: 'showMessage',
            title: '显示校验信息',
            valueType: 'bool',
            description: '是否显示表单校验的错误信息',
            defaultValue: true,
            example: false,
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用整个表单',
            defaultValue: false,
            example: true,
        },
        {
            name: 'align',
            title: '垂直对齐方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'flex-start',
                        title: '顶部对齐',
                        usage: '默认对齐方式',
                    },
                    {
                        value: 'baseline',
                        title: '基线对齐',
                        usage: '需要文本基线对齐的场景',
                    },
                    {
                        value: 'center',
                        title: '居中对齐',
                        usage: '需要垂直居中对齐的场景',
                    },
                ],
            },
            description: '表单项内容的垂直对齐方式',
            defaultValue: 'flex-start',
            example: 'center',
        },
    ],
    events: [
        {
            name: 'submit',
            description: '表单提交事件',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生表单提交事件对象',
                },
            ],
        },
    ],
    exposes: [
        {
            name: 'validate',
            description: '表单校验方法',
            parameters: [
                {
                    name: 'fieldProps',
                    type: 'Array<string>',
                    description: '可选，指定需要校验的字段名数组',
                },
            ],
        },
        {
            name: 'clearValidate',
            description: '清除校验结果',
            parameters: [
                {
                    name: 'fieldProps',
                    type: 'Array<string>',
                    description: '可选，指定需要清除校验的字段名数组',
                },
            ],
        },
        {
            name: 'resetFields',
            description: '重置表单',
            parameters: [
                {
                    name: 'fieldProps',
                    type: 'Array<string>',
                    description: '可选，指定需要重置的字段名数组',
                },
            ],
        },
    ],
    templates: [
        {
            input: '基本表单使用',
            output: '[场景说明] 创建一个包含用户名和密码输入的基本表单\n[代码实现] \n<FForm :model="formData" :rules="rules">\n  <FFormItem label="用户名" prop="username">\n    <FInput v-model="formData.username" />\n  </FFormItem>\n  <FFormItem label="密码" prop="password">\n    <FInput v-model="formData.password" type="password" />\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 始终为表单绑定model和rules 2. 为每个FFormItem设置prop属性以启用校验',
        },
        {
            input: '行内表单布局',
            output: '[场景说明] 创建一个行内布局的筛选表单\n[代码实现] \n<FForm layout="inline" :model="filterData">\n  <FFormItem label="名称">\n    <FInput v-model="filterData.name" />\n  </FFormItem>\n  <FFormItem label="状态">\n    <FSelect v-model="filterData.status">\n      <FOption value="1">启用</FOption>\n      <FOption value="0">禁用</FOption>\n    </FSelect>\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 使用inline布局节省空间 2. 可配合span属性控制表单项宽度',
        },
        {
            input: '表单校验示例',
            output: '[场景说明] 实现一个带校验规则的表单\n[代码实现] \n<FForm :model="formData" :rules="rules">\n  <FFormItem label="邮箱" prop="email">\n    <FInput v-model="formData.email" />\n  </FFormItem>\n</FForm>\n\n<script>\nexport default {\n  data() {\n    return {\n      formData: { email: \'\' },\n      rules: {\n        email: [\n          { required: true, message: \'请输入邮箱\' },\n          { type: \'email\', message: \'邮箱格式不正确\' }\n        ]\n      }\n    }\n  }\n}\n</script>\n[最佳实践] 1. 使用数组定义多个校验规则 2. 为不同类型的数据指定合适的校验规则',
        },
        {
            input: '禁用整个表单',
            output: '[场景说明] 创建一个禁用状态下的表单\n[代码实现] \n<FForm :model="formData" disabled>\n  <FFormItem label="用户名">\n    <FInput v-model="formData.username" />\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 使用disabled属性统一控制表单禁用状态 2. 禁用状态下表单校验自动失效',
        },
        {
            input: '自定义标签宽度',
            output: '[场景说明] 创建一个自定义标签宽度的表单\n[代码实现] \n<FForm :model="formData" label-width="150px">\n  <FFormItem label="长标签名称">\n    <FInput v-model="formData.field1" />\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 在表单级别统一设置label-width 2. 个别表单项可通过设置自己的label-width覆盖全局设置',
        },
        {
            input: '顶部标签布局',
            output: '[场景说明] 创建一个标签在顶部的表单\n[代码实现] \n<FForm :model="formData" label-position="top">\n  <FFormItem label="用户名">\n    <FInput v-model="formData.username" />\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 适合移动端或空间有限的场景 2. 顶布局下label-width通常不需要设置',
        },
        {
            input: '表单提交处理',
            output: '[场景说明] 实现表单提交逻辑\n[代码实现] \n<FForm :model="formData" @submit="handleSubmit">\n  <!-- 表单项省略 -->\n  <FFormItem>\n    <FButton type="primary" native-type="submit">提交</FButton>\n  </FFormItem>\n</FForm>\n\n<script>\nexport default {\n  methods: {\n    async handleSubmit() {\n      try {\n        await this.$refs.form.validate()\n        // 提交逻辑\n      } catch (error) {\n        console.error(\'表单校验失败\', error)\n      }\n    }\n  }\n}\n</script>\n[最佳实践] 1. 使用async/await处理异步校验 2. 通过native-type="submit"触发表单原生提交事件',
        },
        {
            input: '动态表单示例',
            output: '[场景说明] 创建一个动态增减表单项的表单\n[代码实现] \n<FForm :model="dynamicForm">\n  <FFormItem \n    v-for="(item, index) in dynamicForm.items" \n    :key="index"\n    :label="\'项目\' + (index + 1)"\n    :prop="\'items.\' + index + \'.value\'"\n    :rules="{ required: true, message: \'不能为空\' }"\n  >\n    <FInput v-model="item.value" />\n  </FFormItem>\n  <FFormItem>\n    <FButton @click="addItem">添加</FButton>\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 使用数组存储动态表单项 2. 动态设置prop属性以支持校验',
        },
        {
            input: '错误示例：缺少model属性',
            output: '[错误分析] 表单缺少必要的model属性，无法实现数据绑定\n[正确代码] \n<FForm :model="formData">\n  <!-- 表单项 -->\n</FForm>\n[注意事项] 1. 表单必须绑定model属性 2. model应该是一个响应式对象',
        },
        {
            input: '错误示例：未设置prop属性',
            output: '[错误分析] FFormItem未设置prop属性，无法进行表单校验\n[正确代码] \n<FForm :model="formData" :rules="rules">\n  <FFormItem label="用户名" prop="username">\n    <FInput v-model="formData.username" />\n  </FFormItem>\n</FForm>\n[注意事项] 1. 需要校验的表单项必须设置prop属性 2. prop值应与rules中的键名对应',
        },
        {
            input: '错误示例：rules类型错误',
            output: '[错误分析] rules属性被错误地设置为数组而非对象\n[正确代码] \n<FForm :model="formData" :rules="{ username: [{ required: true }] }">\n  <!-- 表单项 -->\n</FForm>\n[注意事项] 1. rules应该是一个对象 2. 每个字段的规则可以是数组或对象',
        },
        {
            input: '空状态表单处理',
            output: '[场景说明] 处理表单初始值为空的情况\n[代码实现] \n<FForm :model="formData">\n  <FFormItem label="用户名" prop="username">\n    <FInput v-model="formData.username" placeholder="请输入用户名" />\n  </FFormItem>\n</FForm>\n\n<script>\nexport default {\n  data() {\n    return {\n      formData: {\n        username: \'\'\n      }\n    }\n  }\n}\n</script>\n[最佳实践] 1. 初始化表单数据时应设置所有字段 2. 使用placeholder提供输入提示',
        },
        {
            input: '极值测试：大量表单项',
            output: '[场景说明] 测试表单包含大量表单项时的性能\n[代码实现] \n<FForm :model="largeForm">\n  <FFormItem \n    v-for="i in 50" \n    :key="i"\n    :label="\'字段\' + i"\n    :prop="\'field\' + i"\n  >\n    <FInput v-model="largeForm[\'field\' + i]" />\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 对于大型表单考虑分步或分组 2. 虚拟滚动可能不适合表单场景',
        },
        {
            input: '异常数据测试',
            output: '[场景说明] 测试表单处理异常数据的能力\n[代码实现] \n<FForm :model="formData" :rules="rules">\n  <FFormItem label="年龄" prop="age">\n    <FInputNumber v-model="formData.age" />\n  </FFormItem>\n</FForm>\n\n<script>\nexport default {\n  data() {\n    return {\n      formData: { age: null },\n      rules: {\n        age: [\n          { type: \'number\', message: \'必须为数字\' },\n          { validator: (rule, value) => value > 0, message: \'必须大于0\' }\n        ]\n      }\n    }\n  }\n}\n</script>\n[最佳实践] 1. 为数字类型字段设置type校验 2. 使用自定义校验处理业务规则',
        },
        {
            input: '怎么做一个登陆表单',
            output: '[场景说明] 创建一个登录表单\n[代码实现] \n<FForm :model="loginForm" :rules="loginRules">\n  <FFormItem label="用户名" prop="username">\n    <FInput v-model="loginForm.username" />\n  </FFormItem>\n  <FFormItem label="密码" prop="password">\n    <FInput v-model="loginForm.password" type="password" />\n  </FFormItem>\n  <FFormItem>\n    <FButton type="primary" @click="handleLogin">登录</FButton>\n  </FFormItem>\n</FForm>\n[最佳实践] 1. 密码字段使用type="password" 2. 提交按钮使用原生click事件而非表单submit',
        },
        {
            input: '表单验证不起作用',
            output: '[错误分析] 可能原因：1. 未设置rules 2. FFormItem缺少prop 3. 未触发校验\n[正确代码] \n<FForm :model="formData" :rules="{ username: [{ required: true }] }">\n  <FFormItem label="用户名" prop="username">\n    <FInput v-model="formData.username" />\n  </FFormItem>\n</FForm>\n[注意事项] 1. 确保prop与rules键名一致 2. 通过validate()方法或提交事件触发校验',
        },
        {
            input: '表单样式怎么改',
            output: '[场景说明] 自定义表单样式\n[代码实现] \n<FForm class="custom-form">\n  <!-- 表单项 -->\n</FForm>\n\n<style>\n.custom-form .f-form-item {\n  margin-bottom: 20px;\n}\n.custom-form .f-form-item-label {\n  color: #333;\n  font-weight: bold;\n}\n</style>\n[最佳实践] 1. 使用深度选择器修改组件内部样式 2. 优先使用提供的props而非直接修改样式',
        },
        {
            input: '表单和表格组合使用',
            output: '[场景说明] 表单作为表格的筛选条件\n[代码实现] \n<template>\n  <FForm :model="query" layout="inline">\n    <FFormItem label="名称">\n      <FInput v-model="query.name" />\n    </FFormItem>\n    <FFormItem>\n      <FButton @click="search">查询</FButton>\n    </FFormItem>\n  </FForm>\n  <FTable :data="tableData" />\n</template>\n[最佳实践] 1. 使用inline布局节省空间 2. 查询按钮触发独立方法而非表单提交',
        },
        {
            input: '表单和弹窗组合使用',
            output: '[场景说明] 在弹窗中使用表单\n[代码实现] \n<FModal v-model:visible="visible">\n  <FForm :model="formData">\n    <!-- 表单项 -->\n  </FForm>\n  <template #footer>\n    <FButton @click="visible = false">取消</FButton>\n    <FButton type="primary" @click="submit">确定</FButton>\n  </template>\n</FModal>\n[最佳实践] 1. 弹窗中的表单应适当减小尺寸 2. 提供明确的取消和确定操作',
        },
    ],
};
