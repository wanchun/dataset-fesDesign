import type { IComponentMetadata } from '../type';

export const transferMeta: IComponentMetadata = {
    title: '穿梭框',
    componentName: 'FTransfer',
    description: '用于多组数据操作的组件，支持数据在左右面板间单向或双向转移，适用于数据选择和重组场景。支持树形结构、搜索过滤和自定义标签内容。',
    scenarios: [
        '数据选择：从大量选项中选择部分数据组成新数据集，如权限分配场景',
        '数据重组：双向模式下实现两组数据的交换重组，如资源调配场景',
        '树形数据：处理具有层级关系的数据选择，如部门人员选择',
        '搜索过滤：在大量数据中快速定位目标选项',
        '自定义展示：通过插槽自定义选项展示样式，增强可视化效果',
    ],
    parent: {
        types: [
            'container',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'twoWay',
            target: 'filterable',
            effect: '双向模式下可同时启用搜索过滤功能',
            notes: [
                '适用于需要双向交换且支持搜索的场景',
            ],
        },
        {
            source: 'height',
            target: 'filterable',
            effect: '固定高度时建议启用搜索功能',
            notes: [
                '提升大数据量下的操作体验',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: [
                        'string',
                        'number',
                    ],
                },
            },
            description: '当前选中的值数组',
            defaultValue: [],
            example: [
                '1',
                2,
            ],
        },
        {
            name: 'options',
            title: '选项',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'number',
                                ],
                            },
                            required: true,
                            example: 'option1',
                        },
                        {
                            name: 'label',
                            title: '选项名',
                            valueType: 'string',
                            required: true,
                            example: '选项1',
                        },
                        {
                            name: 'disabled',
                            title: '是否禁用',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'checkable',
                            title: '是否可选',
                            valueType: 'bool',
                            defaultValue: true,
                            example: true,
                        },
                        {
                            name: 'children',
                            title: '子项数据',
                            valueType: {
                                type: 'arrayOf',
                                value: 'object',
                            },
                            example: [],
                        },
                    ],
                    required: [
                        'value',
                        'label',
                    ],
                },
            },
            description: '可选择的选项数组，支持树形结构',
            defaultValue: [],
            example: [
                {
                    value: '1',
                    label: '选项1',
                    children: [],
                },
            ],
        },
        {
            name: 'twoWay',
            title: '双向模式',
            valueType: 'bool',
            description: '是否开启双向交换模式',
            defaultValue: false,
            example: true,
        },
        {
            name: 'height',
            title: '固定高度',
            valueType: 'number',
            description: '设置固定高度（像素）',
            example: 400,
        },
        {
            name: 'filterable',
            title: '可过滤',
            valueType: 'bool',
            description: '是否启用搜索过滤功能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'filter',
            title: '过滤函数',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'pattern',
                        type: 'string',
                        description: '搜索关键词',
                    },
                    {
                        name: 'option',
                        type: 'object',
                        description: '当前选项',
                    },
                ],
                returnType: 'bool',
            },
            description: '自定义过滤逻辑函数',
            example: '(pattern, option) => option.label.includes(pattern)',
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '选中值变化时触发',
            parameters: [
                {
                    name: 'nextValue',
                    type: 'array',
                    description: '变更后的值数组',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'label',
            description: '自定义选项标签内容',
            scope: {
                option: 'object',
            },
        },
    ],
    templates: [
        {
            input: '基础穿梭框用法',
            output: '<!-- correct -->\n[场景说明] 从左侧选择部分数据到右侧\n[代码实现]\n<template>\n  <FTransfer :options="options" />\n</template>\n\n<script setup>\nconst options = [\n  { label: \'选项1\', value: 1 },\n  { label: \'选项2\', value: 2 }\n]\n</script>\n[最佳实践] 适用于简单的数据选择场景',
        },
        {
            input: '双向穿梭框怎么用',
            output: '<!-- correct -->\n[场景说明] 实现数据在左右面板间双向交换\n[代码实现]\n<template>\n  <FTransfer twoWay :options="options" />\n</template>\n\n<script setup>\nconst options = [\n  { label: \'选项1\', value: 1 },\n  { label: \'选项2\', value: 2 }\n]\n</script>\n[最佳实践] 适用于需要数据交换重组的场景',
        },
        {
            input: '带搜索的穿梭框',
            output: '<!-- correct -->\n[场景说明] 在大量数据中快速筛选目标选项\n[代码实现]\n<template>\n  <FTransfer filterable :options="options" />\n</template>\n\n<script setup>\nconst options = Array(50).fill(0).map((_,i) => ({\n  label: `选项${i+1}`,\n  value: i+1\n}))\n</script>\n[最佳实践] 数据量超过20条时建议启用',
        },
        {
            input: '树形结构穿梭框',
            output: '<!-- correct -->\n[场景说明] 处理具有层级关系的数据选择\n[代码实现]\n<template>\n  <FTransfer :options="treeOptions" />\n</template>\n\n<script setup>\nconst treeOptions = [{\n  label: \'父级\',\n  value: \'parent\',\n  children: [{\n    label: \'子级\',\n    value: \'child\'\n  }]\n}]\n</script>\n[注意事项] 仅支持单向穿梭模式',
        },
        {
            input: '固定高度的穿梭框',
            output: '<!-- correct -->\n[场景说明] 控制穿梭框显示高度\n[代码实现]\n<template>\n  <FTransfer :options="options" :height="300" />\n</template>\n\n<script setup>\nconst options = Array(50).fill(0).map((_,i) => ({\n  label: `选项${i+1}`,\n  value: i+1\n}))\n</script>\n[最佳实践] 大数据量时建议配合搜索功能使用',
        },
        {
            input: '自定义选项样式',
            output: '<!-- correct -->\n[场景说明] 自定义选项的展示形式\n[代码实现]\n<template>\n  <FTransfer :options="options">\n    <template #label="{ option }">\n      <div style="display: flex; align-items: center">\n        <UserOutlined />\n        <span>{{ option.label }}</span>\n      </div>\n    </template>\n  </FTransfer>\n</template>\n[注意事项] 确保自定义内容不影响操作体验',
        },
        {
            input: '穿梭框报错：options未定义',
            output: '<!-- error -->\n[错误分析] 未正确传入options参数\n[正确代码]\n<template>\n  <FTransfer :options="options" />\n</template>\n\n<script setup>\nconst options = [/* 选项数据 */]\n</script>\n[注意事项] options是必填参数，需传入有效数组',
        },
        {
            input: '双向模式下树形结构不生效',
            output: '<!-- error -->\n[错误分析] 树形结构仅支持单向模式\n[正确代码]\n<template>\n  <FTransfer :options="treeOptions" />\n</template>\n\n<script setup>\nconst treeOptions = [/* 树形数据 */]\n</script>\n[注意事项] 移除twoWay属性或改用扁平数据结构',
        },
        {
            input: '过滤函数不工作',
            output: '<!-- error -->\n[错误分析] 未正确实现过滤函数\n[正确代码]\n<template>\n  <FTransfer \n    filterable\n    :filter="customFilter"\n    :options="options"\n  />\n</template>\n\n<script setup>\nconst customFilter = (pattern, option) => {\n  return option.label.includes(pattern)\n}\n</script>\n[注意事项] 过滤函数需返回布尔值',
        },
        {
            input: '穿梭框选项显示不全',
            output: '<!-- error -->\n[错误分析] 未设置固定高度导致内容溢出\n[正确代码]\n<template>\n  <FTransfer \n    :options="options" \n    :height="400"\n  />\n</template>\n[注意事项] 大数据量时建议设置固定高度',
        },
        {
            input: '空数据状态处理',
            output: '<!-- correct -->\n[场景说明] 处理选项为空的情况\n[代码实现]\n<template>\n  <FTransfer \n    :options="options"\n    v-if="options.length"\n  />\n  <div v-else>暂无数据</div>\n</template>\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '大数据量性能优化',
            output: '<!-- correct -->\n[场景说明] 处理1000+条数据的性能问题\n[代码实现]\n<template>\n  <FTransfer\n    :options="options"\n    :height="500"\n    filterable\n  />\n</template>\n\n<script setup>\n// 使用虚拟滚动优化\nconst options = Array(1000).fill(0).map((_,i) => ({\n  label: `选项${i+1}`,\n  value: i+1\n}))\n</script>\n[注意事项] 配合固定高度和搜索功能使用',
        },
        {
            input: '禁用特定选项',
            output: '<!-- correct -->\n[场景说明] 禁用不可选的选项\n[代码实现]\n<template>\n  <FTransfer :options="options" />\n</template>\n\n<script setup>\nconst options = [\n  { label: \'可选项\', value: 1 },\n  { label: \'禁用项\', value: 2, disabled: true }\n]\n</script>\n[最佳实践] 明确区分可选和不可选项',
        },
        {
            input: '穿梭框怎么用啊，不太会',
            output: '<!-- correct -->\n[场景说明] 基础数据选择场景\n[代码实现]\n<template>\n  <FTransfer \n    :options="[\n      { label: \'选项1\', value: 1 },\n      { label: \'选项2\', value: 2 }\n    ]" \n  />\n</template>\n[最佳实践] 从简单示例开始学习组件用法',
        },
        {
            input: '穿梭狂搜索不好使',
            output: '<!-- error -->\n[错误分析] 可能拼写错误或未启用过滤功能\n[正确代码]\n<template>\n  <FTransfer \n    filterable\n    :options="options"\n  />\n</template>\n[注意事项] 1.确认拼写为filterable 2.确保已启用该功能',
        },
        {
            input: '怎么改穿梭框的样式',
            output: '<!-- correct -->\n[场景说明] 自定义穿梭框样式\n[代码实现]\n<template>\n  <FTransfer \n    :options="options"\n    class="custom-transfer"\n  />\n</template>\n\n<style>\n.custom-transfer {\n  /* 自定义样式 */\n}\n</style>\n[注意事项] 使用深度选择器(:deep)修改内部元素样式',
        },
        {
            input: '穿梭框和表单一起用',
            output: '<!-- correct -->\n[场景说明] 在表单中使用穿梭框\n[代码实现]\n<template>\n  <FForm>\n    <FFormItem label="数据选择">\n      <FTransfer \n        v-model="selected"\n        :options="options"\n      />\n    </FFormItem>\n  </FForm>\n</template>\n[最佳实践] 通过v-model绑定表单值',
        },
        {
            input: '穿梭框和表格组合使用',
            output: '<!-- correct -->\n[场景说明] 表格数据选择场景\n[代码实现]\n<template>\n  <FTransfer \n    :options="tableData.map(item => ({\n      label: item.name,\n      value: item.id\n    }))"\n  />\n  <FTable :data="tableData" />\n</template>\n[注意事项] 保持数据格式一致性',
        },
    ],
};
