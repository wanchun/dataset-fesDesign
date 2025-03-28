import type { IComponentMetadata } from '../type';

export const selectTreeMeta: IComponentMetadata = {
    title: '树形选择器',
    componentName: 'FSelectTree',
    description: '用于展示树形数据并提供选择功能的组件，支持单选、多选、搜索、异步加载等高级功能，适用于组织结构选择、分类选择等复杂场景。',
    scenarios: [
        '组织架构选择：在企业管理系统中选择部门或人员，通过树形结构直观展示层级关系。',
        '商品分类选择：在电商后台选择商品分类，支持多级分类的展示和选择。',
        '权限配置：在权限管理系统中配置菜单权限，通过树形结构展示菜单层级关系。',
        '地区选择：选择省市区三级联动数据，支持展开和折叠各级地区。',
        '大数据量展示：使用虚拟滚动技术处理大量树节点数据，保持界面流畅。',
        '异步加载：动态加载树节点数据，适用于数据量大的场景。',
        '自定义展示：通过插槽自定义节点内容和选中标签的展示方式。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单场景下必须放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'remote',
            target: 'loadData',
            effect: '当remote为true时，必须提供loadData函数',
            notes: [
                '异步加载数据时需要同时设置remote和loadData',
                '适用于大数据量需要动态加载的场景',
            ],
        },
        {
            source: 'multiple',
            target: [
                'collapseTags',
                'collapseTagsLimit',
                'tagBordered',
            ],
            effect: '多选模式下才能使用标签折叠和边框相关属性',
            notes: [
                '这些属性只在multiple为true时生效',
                '用于优化多选时的展示效果',
            ],
        },
        {
            source: 'filterable',
            target: 'filter',
            effect: '当filterable为true时，可以使用自定义过滤函数',
            notes: [
                '默认使用内置过滤逻辑',
                '自定义过滤函数可以实现更复杂的过滤需求',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '选中值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                    {
                        type: 'arrayOf',
                        value: {
                            type: 'oneOfType',
                            value: [
                                'string',
                                'number',
                            ],
                        },
                    },
                ],
            },
            description: '当前选中的值，单选时为单个值，多选时为数组',
            example: '\'40\' 或 [\'40\', \'41\']',
        },
        {
            name: 'v-model:expandedKeys',
            title: '展开节点',
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
            description: '当前展开的节点key数组',
            example: '[\'40\', \'4030\']',
        },
        {
            name: 'appendToContainer',
            title: '挂载到容器',
            valueType: 'bool',
            description: '下拉弹窗是否挂载到指定DOM元素',
            defaultValue: true,
            example: true,
        },
        {
            name: 'getContainer',
            title: '挂载容器函数',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '自定义下拉弹窗的挂载容器',
            example: '() => document.body',
        },
        {
            name: 'clearable',
            title: '可清除',
            valueType: 'bool',
            description: '是否显示清除按钮',
            defaultValue: false,
            example: true,
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用选择器',
            defaultValue: false,
            example: false,
        },
        {
            name: 'collapseTags',
            title: '折叠标签',
            valueType: 'bool',
            description: '多选时是否折叠选中标签',
            defaultValue: false,
            example: true,
        },
        {
            name: 'collapseTagsLimit',
            title: '折叠限制',
            valueType: 'number',
            description: '多选时超过指定数量才折叠标签',
            defaultValue: 1,
            example: 3,
        },
        {
            name: 'tagBordered',
            title: '标签边框',
            valueType: 'bool',
            description: '多选时选中标签是否显示边框',
            defaultValue: false,
            example: true,
        },
        {
            name: 'emptyText',
            title: '空数据提示',
            valueType: 'string',
            description: '选项为空时显示的文字',
            defaultValue: '无数据',
            example: '暂无数据',
        },
        {
            name: 'multiple',
            title: '多选模式',
            valueType: 'bool',
            description: '是否开启多选模式',
            defaultValue: false,
            example: true,
        },
        {
            name: 'multipleLimit',
            title: '多选限制',
            valueType: 'number',
            description: '多选时最多选择的项目数',
            defaultValue: 0,
            example: 5,
        },
        {
            name: 'placeholder',
            title: '占位文本',
            valueType: 'string',
            description: '未选择时的提示文本',
            example: '请选择',
        },
        {
            name: 'filterable',
            title: '可过滤',
            valueType: 'bool',
            description: '是否支持搜索过滤选项',
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
                        description: '当前选项数据',
                    },
                ],
                returnType: 'bool',
            },
            description: '自定义过滤逻辑函数',
            example: '(pattern, option) => option.label.includes(pattern)',
        },
        {
            name: 'data',
            title: '树形数据',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'value',
                            title: '节点值',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'number',
                                ],
                            },
                            example: '\'40\'',
                        },
                        {
                            name: 'label',
                            title: '节点标签',
                            valueType: 'string',
                            example: '\'节点1\'',
                        },
                        {
                            name: 'selectable',
                            title: '可选状态',
                            valueType: 'bool',
                            example: true,
                        },
                        {
                            name: 'disabled',
                            title: '禁用状态',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'checkable',
                            title: '可勾选',
                            valueType: 'bool',
                            example: true,
                        },
                        {
                            name: 'isLeaf',
                            title: '叶节点',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'prefix',
                            title: '前缀',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'node',
                                ],
                            },
                            example: '<ProductOutlined />',
                        },
                        {
                            name: 'suffix',
                            title: '后缀',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'node',
                                ],
                            },
                            example: '<PlusCircleOutlined />',
                        },
                        {
                            name: 'children',
                            title: '子节点',
                            valueType: 'array',
                            example: '[]',
                        },
                    ],
                },
            },
            description: '树形结构数据，支持多级嵌套',
            example: '[{value: \'1\', label: \'节点1\', children: [...]}]',
        },
        {
            name: 'accordion',
            title: '手风琴模式',
            valueType: 'bool',
            description: '是否每次只展开一个同级节点',
            defaultValue: false,
            example: true,
        },
        {
            name: 'defaultExpandAll',
            title: '默认展开全部',
            valueType: 'bool',
            description: '是否默认展开所有节点',
            defaultValue: false,
            example: true,
        },
        {
            name: 'cascade',
            title: '级联选择',
            valueType: 'bool',
            description: '是否启用父子节点关联选择',
            defaultValue: false,
            example: true,
        },
        {
            name: 'checkStrictly',
            title: '勾选策略',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'all',
                        title: '全部节点',
                        usage: '返回所有选中节点',
                    },
                    {
                        value: 'parent',
                        title: '父节点',
                        usage: '当父节点下所有子节点都选中时返回父节点',
                    },
                    {
                        value: 'child',
                        title: '子节点',
                        usage: '只返回子节点',
                    },
                ],
            },
            description: '控制勾选策略和返回值',
            defaultValue: 'all',
            example: 'parent',
        },
        {
            name: 'childrenField',
            title: '子节点字段名',
            valueType: 'string',
            description: '自定义子节点字段名',
            defaultValue: 'children',
            example: 'items',
        },
        {
            name: 'valueField',
            title: '值字段名',
            valueType: 'string',
            description: '自定义值字段名',
            defaultValue: 'value',
            example: 'id',
        },
        {
            name: 'labelField',
            title: '标签字段名',
            valueType: 'string',
            description: '自定义标签字段名',
            defaultValue: 'label',
            example: 'name',
        },
        {
            name: 'remote',
            title: '异步加载',
            valueType: 'bool',
            description: '是否异步加载节点数据',
            defaultValue: false,
            example: true,
        },
        {
            name: 'loadData',
            title: '加载函数',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'node',
                        type: 'object',
                        description: '当前节点数据',
                    },
                ],
                returnType: 'Promise',
            },
            description: '异步加载子节点数据的函数',
            example: '(node) => fetchChildren(node.value)',
        },
        {
            name: 'inline',
            title: '横向排列',
            valueType: 'bool',
            description: '叶节点是否横向排列',
            defaultValue: false,
            example: true,
        },
        {
            name: 'virtualList',
            title: '虚拟滚动',
            valueType: 'bool',
            description: '是否启用虚拟滚动优化性能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'emitPath',
            title: '返回路径',
            valueType: 'bool',
            description: '是否返回选中节点的完整路径',
            defaultValue: false,
            example: true,
        },
        {
            name: 'showPath',
            title: '显示路径',
            valueType: 'bool',
            description: '是否在选择器中显示选项路径',
            defaultValue: false,
            example: true,
        },
        {
            name: 'filterTextHighlight',
            title: '高亮过滤文本',
            valueType: 'bool',
            description: '是否高亮显示过滤匹配的文本',
            defaultValue: false,
            example: true,
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '选中值变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number | array',
                    description: '当前选中的值',
                },
            ],
        },
        {
            name: 'onVisibleChange',
            description: '下拉框显示状态变化时触发',
            parameters: [
                {
                    name: 'visible',
                    type: 'bool',
                    description: '是否可见',
                },
            ],
        },
        {
            name: 'onRemoveTag',
            description: '移除标签时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number',
                    description: '被移除的标签值',
                },
            ],
        },
        {
            name: 'onClear',
            description: '点击清除按钮时触发',
            parameters: [],
        },
        {
            name: 'onFocus',
            description: '获得焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '焦点事件对象',
                },
            ],
        },
        {
            name: 'onBlur',
            description: '失去焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '焦点事件对象',
                },
            ],
        },
        {
            name: 'onFilter',
            description: '过滤时触发',
            parameters: [
                {
                    name: 'query',
                    type: 'string',
                    description: '过滤关键词',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'tag',
            description: '自定义选中标签的渲染方式',
            scope: {
                option: 'object',
                handleClose: 'function',
            },
        },
        {
            name: 'empty',
            description: '自定义空状态内容',
        },
    ],
    exposes: [
        {
            name: 'blur',
            description: '使选择器失去焦点',
        },
        {
            name: 'focus',
            description: '使选择器获得焦点',
        },
    ],
    templates: [
        {
            input: '基础单选树形选择器',
            output: '[场景说明] 适用于简单的单选场景\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" />\n[最佳实践] 设置默认选中值并绑定数据源',
        },
        {
            input: '多选树形选择器',
            output: '[场景说明] 需要选择多个节点时使用\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="values" :data="data" multiple />\n[最佳实践] 设置multiple属性并绑定数组类型的v-model',
        },
        {
            input: '可搜索的树形选择器',
            output: '[场景说明] 需要快速查找节点时使用\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" filterable />\n[最佳实践] 设置filterable属性启用搜索功能',
        },
        {
            input: '异步加载的树形选择器',
            output: '[场景说明] 处理大数据量时动态加载子节点\n[代码实现]\n<!-- correct -->\n<FSelectTree \n  v-model="value" \n  :data="data" \n  remote\n  :loadData="loadData"\n/>\n[最佳实践] 同时设置remote和loadData属性',
        },
        {
            input: '自定义标签展示',
            output: '[场景说明] 需要自定义选中标签的展示方式\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data">\n  <template #tag="{ option }">\n    {{ option.label }}({{ option.value }})\n  </template>\n</FSelectTree>\n[最佳实践] 使用tag插槽自定义标签内容',
        },
        {
            input: '禁用状态的树形选择器',
            output: '[场景说明] 需要禁用用户交互时使用\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" disabled />\n[最佳实践] 设置disabled属性禁用组件',
        },
        {
            input: '虚拟滚动的树形选择器',
            output: '[场景说明] 处理大量节点数据时优化性能\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" virtualList />\n[最佳实践] 设置virtualList属性启用虚拟滚动',
        },
        {
            input: '父子节点关联选择',
            output: '[场景说明] 需要父子节点选中状态联动的场景\n[代码实现]\n<!-- correct -->\n<FSelectTree \n  v-model="values" \n  :data="data" \n  multiple \n  cascade \n/>\n[最佳实践] 同时设置multiple和cascade属性',
        },
        {
            input: '错误示例：缺少v-model绑定',
            output: '[错误分析] 树形选择器必须绑定v-model才能正常工作\n[正确代码]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" />\n[注意事项] 必须提供v-model绑定选中值',
        },
        {
            input: '错误示例：异步加载未设置loadData',
            output: '[错误分析] remote为true时必须提供loadData函数\n[正确代码]\n<!-- correct -->\n<FSelectTree \n  v-model="value" \n  :data="data" \n  remote\n  :loadData="loadData"\n/>\n[注意事项] 异步加载需要同时设置remote和loadData',
        },
        {
            input: '错误示例：多选模式绑定非数组值',
            output: '[错误分析] 多选模式下v-model必须绑定数组\n[正确代码]\n<!-- correct -->\n<FSelectTree v-model="values" :data="data" multiple />\n[注意事项] multiple为true时v-model必须是数组类型',
        },
        {
            input: '边界条件：空数据状态',
            output: '[场景说明] 处理数据为空时的展示\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="value" :data="[]" emptyText="暂无数据" />\n[最佳实践] 设置emptyText属性提供友好提示',
        },
        {
            input: '边界条件：大量节点数据',
            output: '[场景说明] 处理数千个节点时的性能优化\n[代码实现]\n<!-- correct -->\n<FSelectTree \n  v-model="value" \n  :data="largeData" \n  virtualList\n  defaultExpandAll={false}\n/>\n[最佳实践] 启用virtualList并避免默认展开所有节点',
        },
        {
            input: '边界条件：自定义字段名',
            output: '[场景说明] 数据结构字段名与组件默认不一致时\n[代码实现]\n<!-- correct -->\n<FSelectTree \n  v-model="value" \n  :data="customData" \n  valueField="id"\n  labelField="name"\n  childrenField="items"\n/>\n[最佳实践] 根据实际数据结构设置valueField、labelField等属性',
        },
        {
            input: '怎么用树形选择器选多个值',
            output: '[场景说明] 需要选择多个节点值的场景\n[代码实现]\n<!-- correct -->\n<FSelectTree v-model="values" :data="data" multiple />\n[最佳实践] 设置multiple属性并绑定数组类型的v-model',
        },
        {
            input: '树形选择器搜索不好使',
            output: '[错误分析] 可能未设置filterable属性或数据格式不正确\n[正确代码]\n<!-- correct -->\n<FSelectTree v-model="value" :data="data" filterable />\n[注意事项] 1. 必须设置filterable属性 2. 确保data中的label字段可用于搜索',
        },
        {
            input: '树形选择器样式怎么改',
            output: '[场景说明] 自定义树形选择器样式\n[代码实现]\n<!-- correct -->\n<FSelectTree \n  v-model="value" \n  :data="data" \n  class="custom-tree" \n  style="width: 300px"\n/>\n\n<style>\n.custom-tree .fes-select-tree-dropdown {\n  max-height: 400px;\n}\n</style>\n[最佳实践] 通过class和style属性自定义样式，注意使用深度选择器修改下拉框样式',
        },
        {
            input: '树形选择器和表单一起用',
            output: '[场景说明] 在表单中使用树形选择器\n[代码实现]\n<!-- correct -->\n<FForm>\n  <FFormItem label="部门" prop="department">\n    <FSelectTree \n      v-model="form.department" \n      :data="departments" \n      placeholder="请选择部门"\n    />\n  </FFormItem>\n</FForm>\n[最佳实践] 将树形选择器放在FFormItem中，设置label和prop属性',
        },
        {
            input: '树形选择器和表格一起用',
            output: '[场景说明] 在表格中使用树形选择器作为筛选条件\n[代码实现]\n<!-- correct -->\n<template>\n  <FTable :data="tableData">\n    <FTableColumn prop="name" label="名称" />\n    <FTableColumn prop="category" label="分类">\n      <template #filter="{ value, setValue }">\n        <FSelectTree \n          v-model="value" \n          :data="categories" \n          multiple\n          collapseTags\n          @change="setValue"\n        />\n      </template>\n    </FTableColumn>\n  </FTable>\n</template>\n[最佳实践] 在表格列的filter插槽中使用树形选择器，注意处理值变化',
        },
    ],
};
