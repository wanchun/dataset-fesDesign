import type { IComponentMetadata } from '../type';

export const tableMeta: IComponentMetadata = {
    title: '表格',
    componentName: 'FTable',
    description: '功能强大的表格组件，支持数据展示、排序、筛选、分页、虚拟滚动等多种功能。提供丰富的配置选项和自定义能力，适用于复杂数据展示场景。',
    scenarios: [
        '数据展示：展示结构化数据，支持多列、多级表头等复杂布局',
        '数据操作：支持行选择、行展开、行拖拽等交互操作',
        '数据分析：支持排序、筛选、自定义渲染等数据分析功能',
        '大数据展示：通过虚拟滚动技术实现大数据量的流畅展示',
        '复杂布局：支持固定列、固定表头、合并单元格等复杂布局需求',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FTableColumn',
    ],
    propRelations: [
        {
            source: 'virtualScroll',
            target: 'height',
            effect: '启用虚拟滚动时必须设置height属性',
            notes: [
                '虚拟滚动需要固定高度才能正常工作',
            ],
        },
        {
            source: 'draggable',
            target: 'virtualScroll',
            effect: '启用拖拽时不能同时启用虚拟滚动',
            notes: [
                '拖拽和虚拟滚动功能互斥',
            ],
        },
    ],
    props: [
        {
            name: 'bordered',
            title: '边框',
            valueType: 'bool',
            description: '是否展示表格边框',
            defaultValue: false,
            example: true,
        },
        {
            name: 'data',
            title: '数据源',
            valueType: 'array',
            description: '表格数据源，数组格式',
            defaultValue: [],
            example: '[{id:1,name:\'张三\'},{id:2,name:\'李四\'}]',
        },
        {
            name: 'rowClassName',
            title: '行样式类名',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'object',
                    'array',
                    {
                        type: 'func',
                        parameters: [
                            {
                                name: 'row',
                                type: 'object',
                            },
                            {
                                name: 'column',
                                type: 'object',
                            },
                            {
                                name: 'rowIndex',
                                type: 'number',
                            },
                            {
                                name: 'columnIndex',
                                type: 'number',
                            },
                            {
                                name: 'cellValue',
                                type: 'any',
                            },
                        ],
                        returnType: 'string',
                    },
                ],
            },
            description: '行的className回调方法或固定值',
            example: '({row}) => row.id === 1 ? \'highlight-row\' : \'\'',
        },
        {
            name: 'rowStyle',
            title: '行样式',
            valueType: {
                type: 'oneOfType',
                value: [
                    'object',
                    {
                        type: 'func',
                        parameters: [
                            {
                                name: 'row',
                                type: 'object',
                            },
                            {
                                name: 'rowIndex',
                                type: 'number',
                            },
                        ],
                        returnType: 'object',
                    },
                ],
            },
            description: '行的style回调方法或固定值',
            example: '({row}) => ({color: row.status === \'error\' ? \'red\' : \'inherit\'})',
        },
        {
            name: 'emptyText',
            title: '空数据提示',
            valueType: 'string',
            description: '空数据时显示的文本内容',
            defaultValue: '暂无数据',
            example: '没有找到匹配的数据',
        },
        {
            name: 'height',
            title: '高度',
            valueType: 'number',
            description: '表格固定高度，超出时出现滚动条',
            example: 500,
        },
        {
            name: 'rowKey',
            title: '行键',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    {
                        type: 'func',
                        parameters: [
                            {
                                name: 'row',
                                type: 'object',
                            },
                        ],
                        returnType: 'string',
                    },
                ],
            },
            description: '行数据的唯一标识',
            example: 'id',
        },
        {
            name: 'showHeader',
            title: '显示表头',
            valueType: 'bool',
            description: '是否展示表头',
            defaultValue: true,
            example: true,
        },
        {
            name: 'spanMethod',
            title: '合并列',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'row',
                        type: 'object',
                    },
                    {
                        name: 'column',
                        type: 'object',
                    },
                    {
                        name: 'rowIndex',
                        type: 'number',
                    },
                    {
                        name: 'columnIndex',
                        type: 'number',
                    },
                ],
                returnType: 'object',
            },
            description: '合并行或列的计算方法',
            example: '({rowIndex}) => rowIndex % 2 === 0 ? {rowspan:2,colspan:1} : {rowspan:0,colspan:0}',
        },
        {
            name: 'virtualScroll',
            title: '虚拟滚动',
            valueType: 'bool',
            description: '是否启用虚拟滚动',
            defaultValue: false,
            example: true,
        },
        {
            name: 'size',
            title: '间距大小',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'middle',
                        title: '中等',
                        usage: '默认间距大小',
                    },
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑型表格使用',
                    },
                ],
            },
            description: '表格的间距大小',
            defaultValue: 'middle',
            example: 'small',
        },
        {
            name: 'layout',
            title: '布局方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'fixed',
                        title: '等分',
                        usage: '列宽平均分配',
                    },
                    {
                        value: 'auto',
                        title: '自适应',
                        usage: '根据内容自动调整列宽',
                    },
                ],
            },
            description: '表格列宽度分割算法',
            defaultValue: 'fixed',
            example: 'auto',
        },
        {
            name: 'draggable',
            title: '拖拽',
            valueType: 'bool',
            description: '是否启用行拖拽',
            defaultValue: false,
            example: true,
        },
        {
            name: 'beforeDragend',
            title: '拖拽结束前钩子',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'drag',
                        type: 'object',
                    },
                    {
                        name: 'drop',
                        type: 'object',
                    },
                ],
                returnType: 'bool',
            },
            description: '拖拽结束前回调，返回false可取消拖拽',
            example: '() => confirm(\'确定要移动此行吗？\')',
        },
        {
            name: 'expandedKeys',
            title: '展开行的key',
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
            description: '当前展开的行key数组',
            defaultValue: [],
            example: '[1,2,3]',
        },
        {
            name: 'checkedKeys',
            title: '勾选行的key',
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
            description: '当前勾选的行key数组',
            defaultValue: [],
            example: '[1,2]',
        },
        {
            name: 'columns',
            title: '列配置',
            valueType: 'array',
            description: '列配置数组，替代FTableColumn组件',
            example: '[{prop:\'name\',label:\'姓名\'}]',
        },
        {
            name: 'alwaysScrollbar',
            title: '总是显示滚动条',
            valueType: 'bool',
            description: '是否总是显示滚动条',
            defaultValue: false,
            example: true,
        },
    ],
    events: [
        {
            name: 'cellClick',
            description: '单元格点击事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含row, column, cellValue, event等属性',
                },
            ],
        },
        {
            name: 'expandChange',
            description: '行展开状态变化事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含row, expanded属性',
                },
            ],
        },
        {
            name: 'headerClick',
            description: '表头点击事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含column, event属性',
                },
            ],
        },
        {
            name: 'rowClick',
            description: '行点击事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含row, event属性',
                },
            ],
        },
        {
            name: 'select',
            description: '行选择事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含selection, row, checked属性',
                },
            ],
        },
        {
            name: 'selectAll',
            description: '全选事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含selection, checked属性',
                },
            ],
        },
        {
            name: 'selectionChange',
            description: '选择项变化事件',
            parameters: [
                {
                    name: 'selection',
                    type: 'array',
                    description: '当前选中的行数组',
                },
            ],
        },
        {
            name: 'dragstart',
            description: '拖拽开始事件',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生事件对象',
                },
                {
                    name: 'item',
                    type: 'object',
                    description: '当前拖拽的行数据',
                },
                {
                    name: 'index',
                    type: 'number',
                    description: '当前拖拽的行索引',
                },
            ],
        },
        {
            name: 'dragend',
            description: '拖拽结束事件',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生事件对象',
                },
                {
                    name: 'item',
                    type: 'object',
                    description: '当前拖拽的行数据',
                },
                {
                    name: 'index',
                    type: 'number',
                    description: '当前拖拽的行索引',
                },
            ],
        },
        {
            name: 'sortChange',
            description: '排序变化事件',
            parameters: [
                {
                    name: 'value',
                    type: 'object',
                    description: '包含prop, order, sorter属性',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'empty',
            description: '空数据时显示的内容',
            required: false,
        },
    ],
    exposes: [
        {
            name: 'clearSelection',
            description: '清空所有选择项',
            parameters: [],
        },
        {
            name: 'toggleRowSelection',
            description: '切换行的选中状态',
            parameters: [
                {
                    name: 'row',
                    type: 'object',
                    description: '要切换的行数据',
                },
            ],
        },
        {
            name: 'toggleAllSelection',
            description: '切换全选状态',
            parameters: [],
        },
        {
            name: 'toggleRowExpend',
            description: '切换行的展开状态',
            parameters: [
                {
                    name: 'row',
                    type: 'object',
                    description: '要切换的行数据',
                },
            ],
        },
        {
            name: 'sort',
            description: '手动排序',
            parameters: [
                {
                    name: 'prop',
                    type: 'string',
                    description: '排序字段',
                },
                {
                    name: 'order',
                    type: 'string',
                    description: '排序方式(ascend/descend)',
                },
            ],
        },
        {
            name: 'clearSorter',
            description: '清除所有排序状态',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '基础表格用法',
            output: '<FTable :data="[{id:1,name:\'张三\'},{id:2,name:\'李四\'}]">\n  <FTableColumn prop="id" label="ID" />\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '带边框的表格',
            output: '<FTable :data="data" bordered>\n  <FTableColumn prop="date" label="日期" />\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '固定表头的表格',
            output: '<FTable :data="data" :height="300">\n  <FTableColumn prop="date" label="日期" />\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '带选择功能的表格',
            output: '<FTable :data="data" row-key="id">\n  <FTableColumn type="selection" />\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '可排序的表格',
            output: '<FTable :data="data">\n  <FTableColumn prop="name" label="姓名" sortable />\n  <FTableColumn prop="age" label="年龄" sortable />\n</FTable>',
        },
        {
            input: '自定义空状态',
            output: '<FTable :data="[]">\n  <template #empty>\n    <FEmpty description="暂无数据" />\n  </template>\n</FTable>',
        },
        {
            input: '虚拟滚动表格',
            output: '<FTable :data="largeData" :height="500" virtual-scroll>\n  <FTableColumn prop="id" label="ID" />\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '多级表头',
            output: '<FTable :data="data">\n  <FTableColumn prop="date" label="日期" />\n  <FTableColumn label="个人信息">\n    <FTableColumn prop="name" label="姓名" />\n    <FTableColumn prop="age" label="年龄" />\n  </FTableColumn>\n</FTable>',
        },
        {
            input: '错误示例：缺少data属性',
            output: '[错误分析] 表格组件必须提供data属性\n[正确代码] <FTable :data="[]">...</FTable>\n[注意事项] data属性是必填项，即使为空数组也需要提供',
        },
        {
            input: '错误示例：虚拟滚动未设置高度',
            output: '[错误分析] 启用虚拟滚动必须设置height属性\n[正确代码] <FTable :data="data" :height="500" virtual-scroll>...</FTable>\n[注意事项] 虚拟滚动需要固定高度才能正常工作',
        },
        {
            input: '错误示例：同时启用拖拽和虚拟滚动',
            output: '[错误分析] 拖拽和虚拟滚动功能互斥\n[正确代码] 只能选择启用其中一种功能\n[注意事项] 这两个功能不能同时使用',
        },
        {
            input: '边界条件：空数据表格',
            output: '<FTable :data="[]">\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '边界条件：大数据量表格',
            output: '<FTable :data="largeData" :height="500" virtual-scroll>\n  <FTableColumn prop="id" label="ID" />\n</FTable>',
        },
        {
            input: '边界条件：单行表格',
            output: '<FTable :data="[{id:1,name:\'张三\'}]">\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '表格怎么用',
            output: '[场景说明] 基础表格使用\n[代码实现] <FTable :data="[{id:1,name:\'张三\'}]">\n  <FTableColumn prop="name" label="姓名" />\n</FTable>\n[最佳实践] 1. 必须提供data属性 2. 使用FTableColumn定义列',
        },
        {
            input: '表格如何排序',
            output: '[场景说明] 表格排序功能\n[代码实现] <FTable :data="data">\n  <FTableColumn prop="name" label="姓名" sortable />\n</FTable>\n[最佳实践] 1. 在列上添加sortable属性 2. 监听sort-change事件处理排序逻辑',
        },
        {
            input: '表格怎么显示空状态',
            output: '[场景说明] 表格空状态处理\n[代码实现] <FTable :data="[]">\n  <template #empty>\n    <FEmpty description="暂无数据" />\n  </template>\n</FTable>\n[最佳实践] 1. 使用empty插槽自定义空状态 2. 也可以设置empty-text属性',
        },
        {
            input: '样式覆盖：修改表头背景色',
            output: '<style>\n.f-table-header {\n  background-color: #f0f0f0;\n}\n</style>\n<FTable :data="data">\n  <FTableColumn prop="name" label="姓名" />\n</FTable>',
        },
        {
            input: '组合使用：表格与分页',
            output: '<template>\n  <FTable :data="pagedData" />\n  <FPagination \n    :total="total" \n    @change="handlePageChange" \n  />\n</template>',
        },
        {
            input: '组合使用：表格与表单筛选',
            output: '<template>\n  <FForm @submit="handleSearch">\n    <FFormItem label="姓名">\n      <FInput v-model="searchForm.name" />\n    </FFormItem>\n    <FButton type="primary" html-type="submit">搜索</FButton>\n  </FForm>\n  <FTable :data="filteredData" />\n</template>',
        },
    ],
};
