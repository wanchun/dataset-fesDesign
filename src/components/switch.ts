import type { IComponentMetadata } from '../type';

export const switchMeta: IComponentMetadata = {
    title: '开关',
    componentName: 'FSwitch',
    description: '表示两种相互对立的状态间的切换，多用于触发「开/关」。支持多种值类型、自定义文字描述和异步状态切换。',
    scenarios: [
        '表单状态切换：在表单中使用开关控制选项的启用/禁用状态，提供直观的交互方式。',
        '系统设置：用于系统配置项的开关控制，如夜间模式、通知开关等。',
        '权限控制：通过开关组件控制功能权限的开启和关闭。',
        '数据过滤：在数据展示场景中，使用开关控制特定数据的显示/隐藏。',
        '异步操作：结合beforeChange实现异步状态切换，如需要确认的敏感操作。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单项场景下必须放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'beforeChange',
            effect: '禁用状态下beforeChange不会触发',
            notes: [
                '当开关处于禁用状态时，状态切换会被阻止',
                '适用于需要临时禁用交互的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    'string',
                    'number',
                ],
            },
            description: '必须等于activeValue或inactiveValue，默认为Boolean类型',
            required: true,
            example: true,
        },
        {
            name: 'activeValue',
            title: '开启对应值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    'string',
                    'number',
                ],
            },
            description: 'switch打开时的值，支持多种数据类型',
            defaultValue: true,
            example: true,
        },
        {
            name: 'inactiveValue',
            title: '关闭的值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'bool',
                    'string',
                    'number',
                ],
            },
            description: 'switch关闭时的值，支持多种数据类型',
            defaultValue: false,
            example: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            valueType: 'bool',
            description: '禁用状态下无法进行交互',
            defaultValue: false,
            example: false,
        },
        {
            name: 'size',
            title: '大小',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'normal',
                        title: '常规',
                        usage: '默认尺寸，适合大多数场景',
                    },
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表格行内操作',
                    },
                ],
            },
            description: '控制开关的尺寸大小',
            defaultValue: 'normal',
            example: 'normal',
        },
        {
            name: 'beforeChange',
            title: '切换前钩子',
            valueType: {
                type: 'func',
                returnType: 'Promise',
            },
            description: 'switch状态改变前的钩子，返回false或Promise被reject则停止切换',
            example: '() => new Promise(resolve => setTimeout(() => resolve(true), 1000))',
        },
    ],
    events: [
        {
            name: 'change',
            description: 'switch状态发生变化后的回调函数',
            parameters: [
                {
                    name: 'value',
                    type: 'any',
                    description: '新状态的值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'active',
            description: '激活时显示的内容',
            required: false,
        },
        {
            name: 'inactive',
            description: '不激活时显示的内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础开关',
            output: '[场景说明] 最基本的开关组件使用方式\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch v-model="value" />\n</template>\n\n<script setup>\nconst value = ref(false);\n</script>\n[最佳实践] 适用于简单的状态切换场景',
        },
        {
            input: '带文字描述的开关',
            output: '[场景说明] 需要显示开关状态的文字描述\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch>\n    <template #active>开</template>\n    <template #inactive>关</template>\n  </FSwitch>\n</template>\n[最佳实践] 适用于需要明确状态含义的场景',
        },
        {
            input: '对象类型的开关值',
            output: '[场景说明] 开关值需要存储复杂对象\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch \n    v-model="value" \n    :activeValue="{ status: \'active\' }" \n    :inactiveValue="{ status: \'inactive\' }" \n  />\n</template>\n\n<script setup>\nconst value = ref({ status: \'inactive\' });\n</script>\n[最佳实践] 适用于需要存储复杂状态的场景',
        },
        {
            input: '禁用状态的开关',
            output: '[场景说明] 需要禁用开关交互\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch disabled />\n</template>\n[最佳实践] 适用于权限控制或临时不可用的场景',
        },
        {
            input: '异步切换的开关',
            output: '[场景说明] 切换前需要异步确认\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch :beforeChange="beforeChange" />\n</template>\n\n<script setup>\nconst beforeChange = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(true), 1000);\n  });\n};\n</script>\n[最佳实践] 适用于需要确认的敏感操作',
        },
        {
            input: '小型开关',
            output: '[场景说明] 在紧凑空间中使用小型开关\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch size="small" />\n</template>\n[最佳实践] 适用于表格行内等空间有限的场景',
        },
        {
            input: '开关状态变化监听',
            output: '[场景说明] 需要监听开关状态变化\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch v-model="value" @change="handleChange" />\n</template>\n\n<script setup>\nconst value = ref(false);\nconst handleChange = (val) => {\n  console.log(\'开关状态变化:\', val);\n};\n</script>\n[最佳实践] 适用于需要根据状态变化执行逻辑的场景',
        },
        {
            input: '自定义样式的开关',
            output: '[场景说明] 需要自定义开关样式\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch class="custom-switch" />\n</template>\n\n<style>\n.custom-switch {\n  --switch-active-color: #ff4d4f;\n  --switch-inactive-color: #d9d9d9;\n}\n</style>\n[最佳实践] 通过CSS变量覆盖默认样式',
        },
        {
            input: '缺少v-model绑定',
            output: '[错误分析] 开关组件必须使用v-model进行双向绑定\n[正确代码] <!-- correct -->\n<template>\n  <FSwitch v-model="value" />\n</template>\n\n<script setup>\nconst value = ref(false);\n</script>\n[注意事项] v-model是必须的属性，否则无法正常工作',
        },
        {
            input: 'activeValue和inactiveValue类型不匹配',
            output: '[错误分析] activeValue和inactiveValue类型必须一致\n[正确代码] <!-- correct -->\n<template>\n  <FSwitch \n    v-model="value" \n    :activeValue="1" \n    :inactiveValue="0" \n  />\n</template>\n\n<script setup>\nconst value = ref(0);\n</script>\n[注意事项] 两个值的类型必须相同，否则会导致意外行为',
        },
        {
            input: 'beforeChange返回类型错误',
            output: '[错误分析] beforeChange必须返回Promise或boolean\n[正确代码] <!-- correct -->\n<template>\n  <FSwitch :beforeChange="beforeChange" />\n</template>\n\n<script setup>\nconst beforeChange = () => {\n  return new Promise(resolve => resolve(true));\n};\n</script>\n[注意事项] 异步操作必须返回Promise，同步操作返回boolean',
        },
        {
            input: '开关的初始值为null',
            output: '[边界条件] 初始值为null时的处理\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch \n    v-model="value" \n    :activeValue="true" \n    :inactiveValue="false" \n  />\n</template>\n\n<script setup>\nconst value = ref(null);\n</script>\n[注意事项] 初始值必须匹配activeValue或inactiveValue，否则会使用默认值',
        },
        {
            input: '开关的极值测试',
            output: '[边界条件] 测试极大/极小值的处理\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch \n    v-model="value" \n    :activeValue="Number.MAX_SAFE_INTEGER" \n    :inactiveValue="Number.MIN_SAFE_INTEGER" \n  />\n</template>\n\n<script setup>\nconst value = ref(Number.MIN_SAFE_INTEGER);\n</script>\n[注意事项] 确保组件能正确处理数值边界',
        },
        {
            input: '开关的空状态',
            output: '[边界条件] 空字符串和undefined的处理\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch \n    v-model="value" \n    :activeValue="\'active\'" \n    :inactiveValue="\'\'" \n  />\n</template>\n\n<script setup>\nconst value = ref(\'\');\n</script>\n[注意事项] 空字符串作为有效值时的处理',
        },
        {
            input: '怎么用开关组件？',
            output: '[场景说明] 基础开关使用方式\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch v-model="value" />\n</template>\n\n<script setup>\nconst value = ref(false);\n</script>\n[最佳实践] 使用v-model进行双向绑定是最基本用法',
        },
        {
            input: '开关组件如何显示文字',
            output: '[场景说明] 显示开关状态的文字描述\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch>\n    <template #active>启用</template>\n    <template #inactive>禁用</template>\n  </FSwitch>\n</template>\n[最佳实践] 使用active和inactive插槽自定义显示文字',
        },
        {
            input: '开关组件怎么禁用',
            output: '[场景说明] 禁用开关交互\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch disabled />\n</template>\n[最佳实践] 设置disabled属性即可禁用交互',
        },
        {
            input: '自定义开关颜色',
            output: '[样式覆盖] 修改开关激活/禁用状态颜色\n[代码实现] <!-- correct -->\n<template>\n  <FSwitch class="custom-switch" />\n</template>\n\n<style>\n.custom-switch {\n  --switch-active-color: #52c41a;\n  --switch-inactive-color: #f5222d;\n}\n</style>\n[最佳实践] 通过CSS变量覆盖默认样式',
        },
        {
            input: '开关和表单一起使用',
            output: '[组合使用] 在表单中使用开关组件\n[代码实现] <!-- correct -->\n<template>\n  <FForm>\n    <FFormItem label="启用状态">\n      <FSwitch v-model="form.enabled" />\n    </FFormItem>\n  </FForm>\n</template>\n\n<script setup>\nconst form = reactive({\n  enabled: false\n});\n</script>\n[最佳实践] 配合表单组件实现数据收集',
        },
        {
            input: '开关和表格一起使用',
            output: '[组合使用] 在表格中使用开关控制行数据\n[代码实现] <!-- correct -->\n<template>\n  <FTable :data="data">\n    <FTableColumn prop="status" label="状态">\n      <template #default="{ row }">\n        <FSwitch \n          v-model="row.status" \n          :activeValue="\'active\'" \n          :inactiveValue="\'inactive\'" \n        />\n      </template>\n    </FTableColumn>\n  </FTable>\n</template>\n\n<script setup>\nconst data = ref([\n  { id: 1, status: \'active\' },\n  { id: 2, status: \'inactive\' }\n]);\n</script>\n[最佳实践] 在表格行内使用小型开关控制状态',
        },
    ],
};
