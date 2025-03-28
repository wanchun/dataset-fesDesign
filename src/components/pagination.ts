import type { IComponentMetadata } from '../type';

export const paginationMeta: IComponentMetadata = {
    title: '分页',
    componentName: 'FPagination',
    description: '分页组件用于分隔长列表内容，每次只加载一个页面。支持页码切换、快速跳转、每页条数选择等功能，适用于数据表格、列表等需要分页展示的场景。',
    scenarios: [
        '数据表格分页：在表格底部使用分页组件，配合表格数据加载实现分页展示，提升大数据量下的用户体验。',
        '列表内容分页：在长列表底部使用分页组件，控制单次加载的数据量，优化页面性能。',
        '搜索结果分页：在搜索结果页面使用分页组件，支持用户快速浏览和跳转到指定结果页。',
        '后台管理系统：在管理系统的各种数据展示场景中使用分页组件，提供标准化的分页交互。',
        '移动端适配：使用小型或简洁样式在移动端设备上展示分页，保持界面整洁。',
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
            source: 'showSizeChanger',
            target: 'pageSizeOption',
            effect: '当开启每页条数选择器时，需要配置可选的每页条数选项',
            notes: [
                'showSizeChanger为true时pageSizeOption属性才生效',
                '默认提供[10, 20, 30, 50, 100]的选项',
            ],
        },
        {
            source: 'simple',
            target: [
                'showQuickJumper',
                'showTotal',
                'showSizeChanger',
            ],
            effect: '简洁模式下会隐藏其他扩展功能',
            notes: [
                '简洁模式下只显示最基本的页码切换功能',
                '适用于空间有限的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model:currentPage',
            title: '当前页码',
            valueType: 'number',
            description: '当前显示的页码，使用v-model实现双向绑定',
            defaultValue: 1,
            required: true,
            example: 1,
        },
        {
            name: 'v-model:pageSize',
            title: '每页条数',
            valueType: 'number',
            description: '每页显示的数据条目数量，使用v-model实现双向绑定',
            defaultValue: 10,
            required: true,
            example: 10,
        },
        {
            name: 'totalCount',
            title: '总条数',
            valueType: 'number',
            description: '数据总条数，用于计算分页总数',
            defaultValue: 0,
            required: true,
            example: 1000,
        },
        {
            name: 'pageSizeOption',
            title: '每页条数选项',
            valueType: {
                type: 'arrayOf',
                value: 'number',
            },
            description: '可选的每页条数配置，仅在showSizeChanger为true时生效',
            defaultValue: [
                10,
                20,
                30,
                50,
                100,
            ],
            example: [
                10,
                20,
                50,
            ],
        },
        {
            name: 'showQuickJumper',
            title: '快速跳转',
            valueType: 'bool',
            description: '是否显示快速跳转到指定页码的功能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'showSizeChanger',
            title: '每页条数选择器',
            valueType: 'bool',
            description: '是否显示每页条数选择器',
            defaultValue: false,
            example: true,
        },
        {
            name: 'showTotal',
            title: '显示总条数',
            valueType: 'bool',
            description: '是否显示数据总条数信息',
            defaultValue: false,
            example: true,
        },
        {
            name: 'small',
            title: '小型样式',
            valueType: 'bool',
            description: '是否使用紧凑的小型分页样式',
            defaultValue: false,
            example: true,
        },
        {
            name: 'simple',
            title: '简洁样式',
            valueType: 'bool',
            description: '是否使用极简的分页样式，只包含基本功能',
            defaultValue: false,
            example: true,
        },
    ],
    events: [
        {
            name: 'change',
            description: '当前页码或每页条数变化时触发',
            parameters: [
                {
                    name: 'currentPage',
                    type: 'number',
                    description: '变化后的当前页码',
                },
                {
                    name: 'pageSize',
                    type: 'number',
                    description: '变化后的每页条数',
                },
            ],
        },
        {
            name: 'pageSizeChange',
            description: '每页条数变化时触发',
            parameters: [
                {
                    name: 'pageSize',
                    type: 'number',
                    description: '变化后的每页条数',
                },
            ],
        },
    ],
    templates: [
        {
            input: '基础分页',
            output: '<!-- correct -->\n[场景说明] 基础分页场景，仅显示页码切换功能\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于简单的分页需求，保持界面简洁',
        },
        {
            input: '带快速跳转的分页',
            output: '<!-- correct -->\n[场景说明] 需要支持快速跳转到指定页码的场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    show-quick-jumper\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于数据量较大，用户可能需要快速定位到特定页面的场景',
        },
        {
            input: '带每页条数选择的分页',
            output: '<!-- correct -->\n[场景说明] 需要支持动态调整每页显示条数的场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    show-size-changer\n    :pageSizeOption="[10, 20, 50, 100]"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于需要灵活控制每页数据量的场景',
        },
        {
            input: '显示总条数的分页',
            output: '<!-- correct -->\n[场景说明] 需要显示数据总量的场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    show-total\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于需要让用户了解数据总量的场景',
        },
        {
            input: '小型分页',
            output: '<!-- correct -->\n[场景说明] 在空间有限的区域使用小型分页\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    small\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于工具栏、卡片等紧凑布局中的分页',
        },
        {
            input: '简洁分页',
            output: '<!-- correct -->\n[场景说明] 需要极简分页样式的场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    simple\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于移动端或需要极致简洁的场景',
        },
        {
            input: '组合功能分页',
            output: '<!-- correct -->\n[场景说明] 需要多种分页功能的组合场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    show-quick-jumper\n    show-size-changer\n    show-total\n    :pageSizeOption="[10, 20, 50, 100]"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 适用于功能全面的后台管理系统',
        },
        {
            input: '分页事件处理',
            output: '<!-- correct -->\n[场景说明] 需要监听分页变化并处理数据的场景\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    @change="handleChange"\n    @pageSizeChange="handlePageSizeChange"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n\nconst handleChange = (newPage, newSize) => {\n  console.log(\'页码变化:\', newPage, \'每页条数:\', newSize);\n  // 加载新数据\n};\n\nconst handlePageSizeChange = (newSize) => {\n  console.log(\'每页条数变化:\', newSize);\n  // 重新加载数据\n};\n</script>\n[最佳实践] 适用于需要根据分页变化动态加载数据的场景',
        },
        {
            input: '忘记绑定currentPage',
            output: '<!-- error -->\n[错误分析] 未使用v-model绑定currentPage会导致分页无法正常工作\n[正确代码]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[注意事项] 分页组件必须使用v-model绑定currentPage和pageSize才能正常工作',
        },
        {
            input: '错误的pageSizeOption类型',
            output: '<!-- error -->\n[错误分析] pageSizeOption必须为数字数组，字符串会导致错误\n[正确代码]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    show-size-changer\n    :pageSizeOption="[10, 20, 50]"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[注意事项] pageSizeOption必须为数字数组，如[10, 20, 50]',
        },
        {
            input: '未设置totalCount',
            output: '<!-- error -->\n[错误分析] 未设置totalCount会导致分页无法计算总页数\n[正确代码]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[注意事项] totalCount是必填属性，必须设置数据总量',
        },
        {
            input: '空数据状态的分页',
            output: '<!-- correct -->\n[场景说明] 处理数据为空时的分页显示\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="0"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 当totalCount为0时，分页组件会自动显示无数据状态',
        },
        {
            input: '超大数量分页',
            output: '<!-- correct -->\n[场景说明] 处理大数据量(超过100万条)的分页显示\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000000"\n    show-quick-jumper\n    show-total\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 对于超大数量数据，建议开启快速跳转和总数显示功能',
        },
        {
            input: '极少数量的分页',
            output: '<!-- correct -->\n[场景说明] 处理数据量很少(少于pageSize)的分页显示\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="5"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 当数据量少于pageSize时，分页组件会自动隐藏不必要的元素',
        },
        {
            input: '怎么用分页组件',
            output: '<!-- correct -->\n[场景说明] 分页组件的基础使用方法\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n  />\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 必须绑定currentPage和pageSize，并设置totalCount',
        },
        {
            input: '分页样式怎么改',
            output: '<!-- correct -->\n[场景说明] 自定义分页组件样式\n[代码实现]\n<template>\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="1000"\n    class="custom-pagination"\n    style="--pagination-active-color: #ff4d4f"\n  />\n</template>\n\n<style>\n.custom-pagination {\n  margin-top: 20px;\n}\n</style>\n\n<script setup>\nimport { ref } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\n</script>\n[最佳实践] 可以通过class和style属性自定义样式，也支持CSS变量',
        },
        {
            input: '分页和表格一起用',
            output: '<!-- correct -->\n[场景说明] 分页组件与表格组件的组合使用\n[代码实现]\n<template>\n  <FTable :data="tableData" :columns="columns" />\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="totalCount"\n    @change="loadTableData"\n  />\n</template>\n\n<script setup>\nimport { ref, onMounted } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\nconst totalCount = ref(0);\nconst tableData = ref([]);\n\nconst loadTableData = async () => {\n  const res = await fetchData(currentPage.value, pageSize.value);\n  tableData.value = res.data;\n  totalCount.value = res.total;\n};\n\nonMounted(loadTableData);\n</script>\n[最佳实践] 分页通常与表格配合使用，通过change事件加载对应页数据',
        },
        {
            input: '分页和列表一起用',
            output: '<!-- correct -->\n[场景说明] 分页组件与列表组件的组合使用\n[代码实现]\n<template>\n  <FList :data="listData" />\n  <FPagination \n    v-model:currentPage="currentPage"\n    v-model:pageSize="pageSize"\n    :total-count="totalCount"\n    @change="loadListData"\n  />\n</template>\n\n<script setup>\nimport { ref, onMounted } from \'vue\';\n\nconst currentPage = ref(1);\nconst pageSize = ref(10);\nconst totalCount = ref(0);\nconst listData = ref([]);\n\nconst loadListData = async () => {\n  const res = await fetchData(currentPage.value, pageSize.value);\n  listData.value = res.data;\n  totalCount.value = res.total;\n};\n\nonMounted(loadListData);\n</script>\n[最佳实践] 分页也可以与列表组件配合，实现长列表的分页加载',
        },
    ],
};
