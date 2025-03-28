import type { IComponentMetadata } from '../type';

export const treeMeta: IComponentMetadata = {
    title: '树形控件',
    componentName: 'FTree',
    description: '用于展示层级结构的树形控件，支持节点选择、展开/折叠、勾选、拖拽等交互功能。适用于文件目录、组织架构、分类体系等场景。',
    scenarios: [
        '文件管理系统：展示文件和文件夹的层级结构，支持文件选择和操作',
        '组织架构展示：可视化展示公司或团队的层级关系',
        '分类体系管理：管理商品分类、知识分类等多级分类体系',
        '权限配置：通过树形结构配置角色权限，直观展示权限层级',
        '地区选择：展示国家-省-市-区县的多级地区选择',
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
            source: 'remote',
            target: 'loadData',
            effect: '当remote为true时，必须提供loadData函数',
            notes: [
                '异步加载数据时需要同时设置remote和loadData',
            ],
        },
        {
            source: 'inline',
            target: [
                'virtualList',
                'draggable',
            ],
            effect: '当inline为true时，virtualList和draggable将失效',
            notes: [
                '叶节点横向排列模式与虚拟滚动和拖拽功能不兼容',
            ],
        },
        {
            source: 'checkable',
            target: [
                'checkedKeys',
                'cascade',
                'checkStrictly',
            ],
            effect: '当checkable为true时，勾选相关属性才会生效',
            notes: [
                '需要显示勾选框时才需要配置勾选相关属性',
            ],
        },
    ],
    props: [
        {
            name: 'data',
            title: '节点数据',
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
                            example: '1',
                        },
                        {
                            name: 'label',
                            title: '节点名称',
                            valueType: 'string',
                            example: '根节点',
                        },
                        {
                            name: 'selectable',
                            title: '可选中',
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
                            title: '叶子节点',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'prefix',
                            title: '前缀内容',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'node',
                                ],
                            },
                            example: '<Icon />',
                        },
                        {
                            name: 'suffix',
                            title: '后缀内容',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'node',
                                ],
                            },
                            example: '<Icon />',
                        },
                        {
                            name: 'children',
                            title: '子节点',
                            valueType: 'array',
                            example: [],
                        },
                    ],
                },
            },
            description: '树形结构数据，每个节点可以包含子节点',
            defaultValue: [],
            example: [
                {
                    value: '1',
                    label: '根节点',
                    children: [
                        {
                            value: '1-1',
                            label: '子节点1',
                        },
                    ],
                },
            ],
        },
        {
            name: 'defaultExpandAll',
            title: '默认展开所有',
            valueType: 'bool',
            description: '是否默认展开所有节点',
            defaultValue: false,
            example: true,
        },
        {
            name: 'expandedKeys',
            title: '展开的节点',
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
            defaultValue: [],
            example: [
                '1',
                '1-1',
            ],
        },
        {
            name: 'selectable',
            title: '可选中',
            valueType: 'bool',
            description: '是否允许节点被选中',
            defaultValue: true,
            example: true,
        },
        {
            name: 'selectedKeys',
            title: '选中的节点',
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
            description: '当前选中的节点key数组',
            defaultValue: [],
            example: [
                '1-1',
            ],
        },
        {
            name: 'multiple',
            title: '多选',
            valueType: 'bool',
            description: '是否允许多选',
            defaultValue: false,
            example: true,
        },
        {
            name: 'cancelable',
            title: '可取消',
            valueType: 'bool',
            description: '选中后是否可以再次点击取消选中',
            defaultValue: true,
            example: true,
        },
        {
            name: 'checkable',
            title: '可勾选',
            valueType: 'bool',
            description: '是否显示勾选框',
            defaultValue: false,
            example: true,
        },
        {
            name: 'cascade',
            title: '父子关联',
            valueType: 'bool',
            description: '勾选时是否父子节点关联',
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
                        title: '所有节点',
                        usage: '返回所有勾选的节点',
                    },
                    {
                        value: 'parent',
                        title: '父节点',
                        usage: '只返回父节点（当子节点全部勾选时）',
                    },
                    {
                        value: 'child',
                        title: '子节点',
                        usage: '只返回叶子节点',
                    },
                ],
            },
            description: '勾选策略，决定checkedKeys包含哪些节点',
            defaultValue: 'all',
            example: 'child',
        },
        {
            name: 'checkedKeys',
            title: '勾选的节点',
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
            description: '当前勾选的节点key数组',
            defaultValue: [],
            example: [
                '1',
                '1-1',
            ],
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
            description: '自定义节点值字段名',
            defaultValue: 'value',
            example: 'id',
        },
        {
            name: 'labelField',
            title: '标签字段名',
            valueType: 'string',
            description: '自定义节点标签字段名',
            defaultValue: 'label',
            example: 'name',
        },
        {
            name: 'remote',
            title: '异步加载',
            valueType: 'bool',
            description: '是否异步加载子节点',
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
                        type: 'TreeOption',
                        description: '当前节点数据',
                    },
                ],
                returnType: 'Promise',
            },
            description: '异步加载子节点的函数',
            example: '(node) => fetchChildren(node)',
        },
        {
            name: 'accordion',
            title: '手风琴模式',
            valueType: 'bool',
            description: '是否同一层级只展开一个节点',
            defaultValue: false,
            example: true,
        },
        {
            name: 'draggable',
            title: '可拖拽',
            valueType: 'bool',
            description: '是否允许节点拖拽',
            defaultValue: false,
            example: true,
        },
        {
            name: 'inline',
            title: '叶节点横排',
            valueType: 'bool',
            description: '是否将叶节点横向排列',
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
            name: 'filterMethod',
            title: '过滤方法',
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
                        type: 'TreeOption',
                        description: '节点数据',
                    },
                ],
                returnType: 'bool',
            },
            description: '自定义节点过滤方法',
            example: '(pattern, option) => option.label.includes(pattern)',
        },
    ],
    events: [
        {
            name: 'onCheck',
            description: '勾选节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ checkedKeys, node, event, checked }',
                    description: '勾选相关信息',
                },
            ],
        },
        {
            name: 'onExpand',
            description: '展开/折叠节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ expandedKeys, node, event, expanded }',
                    description: '展开相关信息',
                },
            ],
        },
        {
            name: 'onSelect',
            description: '选中节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ selectedKeys, node, event, selected }',
                    description: '选中相关信息',
                },
            ],
        },
        {
            name: 'onDragstart',
            description: '开始拖拽时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, event: DragEvent }',
                    description: '拖拽相关信息',
                },
            ],
        },
        {
            name: 'onDragend',
            description: '拖拽结束时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, event: DragEvent }',
                    description: '拖拽结束信息',
                },
            ],
        },
        {
            name: 'onDragenter',
            description: '拖拽进入节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, event: DragEvent }',
                    description: '拖拽进入信息',
                },
            ],
        },
        {
            name: 'onDragleave',
            description: '拖拽离开节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, event: DragEvent }',
                    description: '拖拽离开信息',
                },
            ],
        },
        {
            name: 'onDragover',
            description: '在节点上拖拽时持续触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, event: DragEvent }',
                    description: '拖拽悬停信息',
                },
            ],
        },
        {
            name: 'onDrop',
            description: '放置节点时触发',
            parameters: [
                {
                    name: 'value',
                    type: '{ node: TreeOption, dragNode: TreeOption, originNode, originDragNode, position: \'before\' | \'inside\' | \'after\', event: DragEvent }',
                    description: '放置相关信息',
                },
            ],
        },
    ],
    exposes: [
        {
            name: 'filter',
            description: '过滤树节点',
            parameters: [
                {
                    name: 'filterText',
                    type: 'string',
                    description: '过滤关键词',
                },
            ],
        },
        {
            name: 'selectNode',
            description: '选中指定节点',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number',
                    description: '节点值',
                },
            ],
        },
        {
            name: 'expandNode',
            description: '展开指定节点',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number',
                    description: '节点值',
                },
            ],
        },
        {
            name: 'checkNode',
            description: '勾选指定节点',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number',
                    description: '节点值',
                },
            ],
        },
    ],
    templates: [
        {
            input: '基础树形结构',
            output: '<!-- correct -->\n[场景说明] 展示基本的树形结构\n[代码实现]\n<FTree :data="data" />\n[最佳实践] 确保data数据结构正确，包含value和label字段',
        },
        {
            input: '默认展开所有节点',
            output: '<!-- correct -->\n[场景说明] 初始化时展开所有节点\n[代码实现]\n<FTree :data="data" defaultExpandAll />\n[最佳实践] 大数据量时慎用，可能影响性能',
        },
        {
            input: '可勾选的树',
            output: '<!-- correct -->\n[场景说明] 带勾选框的树形结构\n[代码实现]\n<FTree :data="data" checkable v-model:checkedKeys="checkedKeys" />\n[最佳实践] 使用v-model管理勾选状态',
        },
        {
            input: '父子关联勾选',
            output: '<!-- correct -->\n[场景说明] 勾选父节点自动勾选子节点\n[代码实现]\n<FTree :data="data" checkable cascade v-model:checkedKeys="checkedKeys" />\n[最佳实践] 适用于权限管理等需要层级关联的场景',
        },
        {
            input: '异步加载子节点',
            output: '<!-- correct -->\n[场景说明] 点击展开时动态加载子节点\n[代码实现]\n<FTree :data="data" remote :loadData="loadData" />\n[最佳实践] 确保loadData返回Promise',
        },
        {
            input: '虚拟滚动优化',
            output: '<!-- correct -->\n[场景说明] 大数据量时使用虚拟滚动\n[代码实现]\n<FTree :data="data" virtualList style="height: 400px" />\n[最佳实践] 需要设置固定高度',
        },
        {
            input: '节点拖拽功能',
            output: '<!-- correct -->\n[场景说明] 允许拖拽节点调整位置\n[代码实现]\n<FTree :data="data" draggable @drop="handleDrop" />\n[最佳实践] 实现drop事件处理逻辑',
        },
        {
            input: '自定义字段名',
            output: '<!-- correct -->\n[场景说明] 使用非标准字段名的数据\n[代码实现]\n<FTree \n  :data="customData" \n  valueField="id" \n  labelField="name" \n  childrenField="items" \n/>\n[最佳实践] 确保字段映射关系正确',
        },
        {
            input: '缺少data属性',
            output: '<!-- error -->\n[错误分析] 缺少必需的data属性\n[正确代码]\n<FTree :data="treeData" />\n[注意事项] data是必填属性，必须提供树形数据',
        },
        {
            input: '错误的checkStrictly值',
            output: '<!-- error -->\n[错误分析] checkStrictly只能是\'all\',\'parent\'或\'child\'\n[正确代码]\n<FTree :data="data" checkable checkStrictly="parent" />\n[注意事项] 检查checkStrictly值是否合法',
        },
        {
            input: '虚拟滚动未设置高度',
            output: '<!-- error -->\n[错误分析] 虚拟滚动需要设置固定高度\n[正确代码]\n<FTree :data="data" virtualList style="height: 400px" />\n[注意事项] 必须为树容器设置明确的高度',
        },
        {
            input: '空数据状态',
            output: '<!-- correct -->\n[场景说明] 处理空数据情况\n[代码实现]\n<FTree :data="[]" empty-text="暂无数据" />\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '大数据量测试',
            output: '<!-- correct -->\n[场景说明] 测试1000+节点的性能\n[代码实现]\n<FTree :data="bigData" virtualList style="height: 500px" />\n[最佳实践] 使用虚拟滚动优化性能',
        },
        {
            input: '异常数据处理',
            output: '<!-- correct -->\n[场景说明] 处理数据中缺少必要字段的情况\n[代码实现]\n<FTree :data="invalidData" :filterInvalidNodes="true" />\n[最佳实践] 过滤或修复无效数据',
        },
        {
            input: '树形控件怎么用？',
            output: '<!-- correct -->\n[场景说明] 基础用法示例\n[代码实现]\n<FTree :data="[{value:\'1\',label:\'节点1\'}]" />\n[最佳实践] 确保数据结构包含value和label字段',
        },
        {
            input: '树节点无法展开',
            output: '<!-- error -->\n[错误分析] 可能缺少children字段或isLeaf配置错误\n[正确代码]\n<FTree :data="[{value:\'1\',label:\'节点1\',children:[]}]" />\n[注意事项] 检查数据结构和isLeaf配置',
        },
        {
            input: '勾选功能不工作',
            output: '<!-- error -->\n[错误分析] 可能忘记设置checkable属性\n[正确代码]\n<FTree :data="data" checkable v-model:checkedKeys="checkedKeys" />\n[注意事项] 需要显式设置checkable为true',
        },
        {
            input: '自定义节点样式',
            output: '<!-- correct -->\n[场景说明] 自定义节点外观\n[代码实现]\n<FTree :data="data">\n  <template #label="{node}">\n    <span :class="{\'custom-node\': true}">{{ node.label }}</span>\n  </template>\n</FTree>\n[最佳实践] 使用插槽自定义节点内容',
        },
        {
            input: '与表单组件结合',
            output: '<!-- correct -->\n[场景说明] 在表单中使用树形选择\n[代码实现]\n<FForm>\n  <FFormItem label="部门">\n    <FTreeSelect :data="deptData" />\n  </FFormItem>\n</FForm>\n[最佳实践] 使用TreeSelect组件实现表单集成',
        },
        {
            input: '与表格组件联动',
            output: '<!-- correct -->\n[场景说明] 树形选择联动表格数据\n[代码实现]\n<FGrid>\n  <FGridItem :span="6">\n    <FTree :data="treeData" @select="handleSelect" />\n  </FGridItem>\n  <FGridItem :span="18">\n    <FTable :data="tableData" />\n  </FGridItem>\n</FGrid>\n[最佳实践] 通过事件实现组件间通信',
        },
    ],
};
