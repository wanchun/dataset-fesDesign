# Table 表格 [​]()

## 组件注册 [​]()

js

```
import FTable from '@fesjs/fes-design';

app.use(FTable);
```

## 代码演示 [​]()

### 基础用法 [​]()

当 `FTable` 元素中注入 `data` 对象数组后，在 `FTableColumn` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。可已使用`width` 属性来定义列宽。

play

```
<template>
    <FForm labelWidth="150px">
        <FFormItem label="列宽度设置方式:">
            <FRadioGroup
                v-model="layout"
                :options="[
                    { label: '等分(默认)', value: 'fixed' },
                    { label: '按内容自动调整大小比例', value: 'auto' },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否开启 hover 行样式:">
            <FRadioGroup
                v-model="hoverable"
                :options="[
                    { label: '是(默认)', value: true },
                    { label: '否', value: false },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否开启斑马线条纹:">
            <FRadioGroup
                v-model="striped"
                :options="[
                    { label: '是', value: true },
                    { label: '否(默认)', value: false },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        :data="data"
        :layout="layout"
        :hoverable="hoverable"
        :striped="striped"
    >
        <FTableColumn prop="date" label="日期">
            <template #default="{ row }">
                {{ row.date }}
            </template>
        </FTableColumn>
        <FTableColumn prop="name" label="姓名" />
        <FTableColumn prop="address" label="地址" />
    </FTable>
</template>

<script setup>
import { reactive, ref } from 'vue';

const data = reactive(
    Array.from([1, 2, 3], (i) => {
        return {
            date: `2016-05-${i < 10 ? `0${i}` : i}`,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
        };
    }),
);
const layout = ref('fixed');
const hoverable = ref(true);
const striped = ref(true);
</script>
```

### 边框和分割线 [​]()

默认有水平分割线，配置`horizontalLine=false`则无水平分割线。

默认无垂直分割线，配置`verticalLine=true`则有垂直分割线。

play

```
<template>
    <FForm>
        <FFormItem label="是否展示表格边框:">
            <FRadioGroup
                v-model="bordered"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否展示水平分割线:">
            <FRadioGroup
                v-model="horizontalLine"
                :options="[
                    { label: '否', value: false },
                    { label: '是(默认)', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否展示垂直分割线:">
            <FRadioGroup
                v-model="verticalLine"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        :bordered="bordered"
        :horizontalLine="horizontalLine"
        :verticalLine="verticalLine"
        :data="data"
    >
        <FTableColumn prop="date" label="日期" fixed :minWidth="100" />
        <FTableColumn prop="name" label="姓名" :minWidth="100" />
        <FTableColumn prop="address" label="地址" :minWidth="100" />
    </FTable>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    setup() {
        const bordered = ref(false);
        const horizontalLine = ref(true);
        const verticalLine = ref(false);

        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        return {
            bordered,
            horizontalLine,
            verticalLine,
            data,
        };
    },
});
</script>
```

### 固定表头 [​]()

纵向内容过多时，可选择固定表头。配置`height`属性，当内容高度超出时出现滚动条。

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="是否固定表头:">
            <FRadioGroup
                v-model="fixedHeader"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem v-if="fixedHeader" label="固定高度：">
            <FInputNumber
                v-model="height"
                :min="10"
                :max="1000"
                :step="50"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="数据行数：">
            <FInputNumber
                v-model="rowLength"
                :min="0"
                :max="100"
            />
        </FFormItem>
        <FFormItem label="姓名列描述：">
            <FInput v-model="nameLabel" :maxlength="30" showWordLimit />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        rowKey="id"
        :data="data"
        bordered
        :height="fixedHeader ? height : undefined"
    >
        <FTableColumn type="selection" :width="30" />
        <FTableColumn
            prop="date"
            label="日期"
            ellipsis
            :width="150"
        />
        <FTableColumn
            prop="name"
            :label="nameLabel || '姓名'"
            :width="150"
        />
        <FTableColumn prop="province" label="省份" :width="150" />
        <FTableColumn prop="city" label="市区" :width="150" />
        <FTableColumn prop="address" label="地址" :width="800" />
        <FTableColumn prop="zip" label="邮编" :width="120" />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
        />
    </FTable>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    setup() {
        const fixedHeader = ref(true);
        const height = ref(250);
        const nameLabel = ref('自定义列描述');

        const rowLength = ref(5);

        const data = computed(() => {
            return Array.from({ length: rowLength.value }, (_, i) => {
                return {
                    id: i,
                    date: `2016-05-2016-05-2016-05-2016-05-${
                        i < 10 ? `0${i}` : i
                    }`,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                };
            });
        });

        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.scroll] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.scroll] [action.删除] row:', row);
                },
            },
        ];
        return {
            fixedHeader,
            height,
            nameLabel,
            data,
            action,
            rowLength,
        };
    },
};
</script>
```

### 固定列 [​]()

横向内容过多时，可选择固定列。

play

```
<template>
    <FForm labelWidth="150px">
        <FFormItem label="左边列是否固定:">
            <FRadioGroup
                v-model="fixedLeft"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="右边列是否固定:">
            <FRadioGroup
                v-model="fixedRight"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable rowKey="id" :data="data" bordered>
        <FTableColumn
            type="selection"
            :width="30"
            :fixed="fixedLeft ? 'left' : undefined"
        />
        <FTableColumn
            prop="date"
            label="日期"
            ellipsis
            :width="150"
            :fixed="fixedLeft ? true : undefined"
        />
        <FTableColumn prop="name" label="姓名" :width="150" />
        <FTableColumn prop="province" label="省份" :width="150" />
        <FTableColumn prop="city" label="市区" :width="150" />
        <FTableColumn prop="address" label="地址" :width="800" />
        <FTableColumn
            prop="zip"
            label="邮编"
            :width="120"
            :fixed="fixedRight ? 'right' : undefined"
        />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
            :fixed="fixedRight ? 'right' : undefined"
        />
    </FTable>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const fixedLeft = ref(true);
        const fixedRight = ref(true);

        const data = Array.from([1, 2, 3], (i) => {
            return {
                id: i,
                date: `2016-05-2016-05-2016-05-2016-05-${i < 10 ? `0${i}` : i}`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });
        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.scroll] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.scroll] [action.删除] row:', row);
                },
            },
        ];
        return {
            fixedLeft,
            fixedRight,
            data,
            action,
        };
    },
};
</script>
```

### 固定列和表头 [​]()

横纵内容过多时，可选择固定列和表头。

play

```
<template>
    <FTable rowKey="id" :data="data" bordered :height="250">
        <FTableColumn type="selection" :width="30" fixed="left" />
        <FTableColumn
            prop="date"
            label="日期"
            ellipsis
            :width="150"
            :fixed="true"
        />
        <FTableColumn
            prop="name"
            label="姓名姓名姓名姓名姓名姓名姓名姓名"
            :width="150"
        />
        <FTableColumn prop="province" label="省份" :width="150" />
        <FTableColumn prop="city" label="市区" :width="150" />
        <FTableColumn prop="address" label="地址" :width="800" />
        <FTableColumn prop="zip" label="邮编" :width="120" fixed="right" />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
            fixed="right"
        />
    </FTable>
</template>

<script>
import {} from 'vue';

export default {
    setup() {
        const data = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (i) => {
            return {
                id: i,
                date: `2016-05-2016-05-2016-05-2016-05-${i < 10 ? `0${i}` : i}`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });
        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.scroll] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.scroll] [action.删除] row:', row);
                },
            },
        ];
        return {
            data,
            action,
        };
    },
};
</script>
```

### 多级表头 [​]()

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="是否固定表头:">
            <FRadioGroup
                v-model="fixedHeader"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否固定列:">
            <FRadioGroup
                v-model="fixedColumn"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        :data="data"
        bordered
        verticalLine
        :height="fixedHeader ? 350 : undefined"
    >
        <FTableColumn
            prop="date"
            label="日期"
            :ellipsis="{ tooltip: { popperClass: 'a', showAfter: 500 } }"
            :width="150"
            :fixed="fixedColumn ? 'left' : false"
        />
        <FTableColumn
            prop="name"
            label="姓名"
            :width="150"
            :fixed="fixedColumn ? 'left' : false"
        />
        <FTableColumn label="配送信息">
            <FTableColumn prop="name" label="姓名" :width="150" />
            <FTableColumn label="地址信息">
                <FTableColumn
                    prop="province"
                    label="省份"
                    :width="150"
                />
                <FTableColumn prop="city" label="市区" :width="150" />
                <FTableColumn
                    prop="address"
                    label="详细地址"
                    :width="500"
                />
                <FTableColumn prop="zip" label="邮编" :width="120" />
            </FTableColumn>
        </FTableColumn>
        <FTableColumn
            prop="zip"
            label="邮编"
            :width="120"
            :fixed="fixedColumn ? 'right' : false"
        />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
            :fixed="fixedColumn ? 'right' : false"
        />
    </FTable>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const data = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (i) => {
            return {
                date: `2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-${
                    i < 10 ? `0${i}` : i
                }`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });

        const fixedHeader = ref(true);
        const fixedColumn = ref(false);

        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.scroll] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.scroll] [action.删除] row:', row);
                },
            },
        ];

        return {
            data,
            fixedHeader,
            fixedColumn,
            action,
        };
    },
});
</script>
```

### 行选择 [​]()

选择行数据时使用 Checkbox，type为`selection`生效。 在该模式下，可以设置`multiple`，设置单选和多选。

play

```
<template>
    <FSpace>
        是否多选:
        <FRadioGroup
            v-model="multiple"
            :options="[
                { label: '是（默认）', value: true },
                { label: '否', value: false },
            ]"
        />
    </FSpace>
    <div style="margin-bottom: 10px">选中的keys: {{ checkedKeys }}</div>
    <FTable
        ref="multipleTable"
        v-model:checkedKeys="checkedKeys"
        :data="data"
        rowKey="id"
        @selectionChange="selectionChange"
    >
        <FTableColumn
            type="selection"
            :selectable="selectable"
            :multiple="multiple"
        />
        <FTableColumn prop="date" label="日期" />
        <FTableColumn prop="name" label="姓名" />
        <FTableColumn prop="address" label="地址" />
    </FTable>
    <div style="margin-top: 10px">
        <FButton @click="toggleSelection(data[0])">切换第一行</FButton>
        <FButton @click="toggleSelection(null)">取消选择</FButton>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const checkedKeys = ref([1]);

        const multiple = ref(true);
        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    id: i,
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const selectable = ({ rowIndex }) => {
            return rowIndex !== 1;
        };
        const selectionChange = (selection) => {
            console.log(
                '[table.checkbox] [selectionChange] selection:',
                selection,
            );
        };
        const multipleTable = ref(null);
        const toggleSelection = (row) => {
            if (row) {
                multipleTable.value.toggleRowSelection({ row });
            } else {
                multipleTable.value.clearSelection();
            }
        };

        return {
            checkedKeys,
            data,
            selectable,
            multiple,
            multipleTable,
            toggleSelection,
            selectionChange,
        };
    },
};
</script>
```

### 排序 [​]()

play

```
<template>
    <f-space vertical>
        <f-space>
            <FButton @click="toggleSort">Sort By ID(ascend)</FButton>
            <FButton @click="clearSorter">Clear Sorter</FButton>
        </f-space>
        <FTable ref="table" :data="data" layout="auto">
            <FTableColumn sortable prop="id" label="ID" />
            <FTableColumn sortable prop="date" label="日期">
                <template #default="{ row }">
                    {{ row.date }}
                </template>
            </FTableColumn>
            <FTableColumn prop="name" label="姓名" />
            <FTableColumn prop="address" label="地址" />
        </FTable>
    </f-space>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const table = ref();
        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    id: 4 - i,
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const toggleSort = () => {
            table.value.sort('id', 'ascend');
        };
        const clearSorter = () => {
            table.value.clearSorter();
        };
        return {
            table,
            data,
            toggleSort,
            clearSorter,
        };
    },
};
</script>
```

### 操作 [​]()

简单的操作类型。

play

```
<template>
    <FTable :data="data">
        <FTableColumn prop="date" label="日期" />
        <FTableColumn prop="name" label="姓名" />
        <FTableColumn prop="address" label="地址" />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
        />
    </FTable>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.action] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.action] [action.删除] row:', row);
                },
            },
        ];
        return {
            data,
            action,
        };
    },
};
</script>
```

### 自定义列内容 [​]()

自定义列的显示内容，可组合其他组件使用。

play

```
<template>
    <FTable :data="data">
        <FTableColumn v-slot="{ row }" prop="date" label="日期" :width="150">
            <div class="table-custom-content-date">
                <ClockCircleOutlined /><FEllipsis
                    :content="row.date"
                />
            </div>
        </FTableColumn>
        <FTableColumn v-slot="{ row }" prop="name" label="姓名">
            <FTag>{{ row.name }}</FTag>
        </FTableColumn>
        <FTableColumn prop="address" label="地址" />
        <FTableColumn v-slot="{ row }" label="操作">
            <FButton @click="() => handleClickRow(row)">编辑</FButton>
        </FTableColumn>
    </FTable>

    <FDivider />

    <FTable :data="data" :columns="columns" />
</template>

<script>
import { defineComponent, h, reactive } from 'vue';
import { ClockCircleOutlined } from '@fesjs/fes-design/icon';
import { FButton, FEllipsis, FTag } from '@fesjs/fes-design';

export default defineComponent({
    comments: {
        ClockCircleOutlined,
    },
    setup() {
        const handleClickRow = (row) => {
            console.log('[table.customContent] [handleClickRow] row:', row);
        };

        const data = reactive(
            Array.from([1, 2], (i) => {
                return {
                    date: `2016-05-2016-05-2016-05-2016-05-${
                        i < 10 ? `0${i}` : i
                    }`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const columns = [
            {
                prop: 'date',
                label: '日期',
                width: 150,
                ellipsis: true,
                render: ({ row }) => {
                    return h('div', { class: 'table-custom-content-date' }, [
                        h(ClockCircleOutlined),
                        h(FEllipsis, {
                            content: row.date,
                        }),
                    ]);
                },
            },
            {
                prop: 'name',
                label: '姓名1',
                render: ({ row }) => {
                    return h(FTag, {}, () => row.name);
                },
            },
            {
                prop: 'name',
                label: '姓名2',
                formatter: ({ row }) => {
                    return h(FTag, {}, () => row.name);
                },
            },
            {
                prop: 'address',
                label: '地址',
                formatter: ({ row }) => {
                    return row.address;
                },
            },
            {
                prop: 'action',
                label: '操作',
                render: ({ row }) => {
                    return h(
                        FButton,
                        { onClick: () => handleClickRow(row) },
                        () => '编辑',
                    );
                },
            },
        ];

        return {
            data,
            columns,
            handleClickRow,
        };
    },
});
</script>

<style>
.table-custom-content-date {
    display: flex;
    align-items: center;
}
</style>
```

### 自定义表头 [​]()

play

```
<template>
    <FTable :data="data">
        <FTableColumn prop="date" label="日期" ellipsis :width="150">
            <template #header>
                <div class="table-custom-header-date">
                    <ClockCircleOutlined /> <span>日期</span>
                </div>
            </template>
        </FTableColumn>
        <FTableColumn prop="name" label="姓名" :width="150" />
        <FTableColumn prop="province" label="省份" :width="150" />
        <FTableColumn prop="city" label="市区" :width="150" />
        <FTableColumn prop="address" label="地址" :width="800" />
        <FTableColumn prop="zip" label="邮编" :width="120" />
    </FTable>

    <FDivider />

    <FTable :data="data" :columns="columns" />
</template>

<script>
import { defineComponent, h } from 'vue';
import { ClockCircleOutlined } from '@fesjs/fes-design/icon';

export default defineComponent({
    comments: {
        ClockCircleOutlined,
    },
    setup() {
        const data = Array.from([1, 2], (i) => {
            return {
                date: `2016-05-2016-05-2016-05-2016-05-${i < 10 ? `0${i}` : i}`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });

        const columns = [
            {
                prop: 'date',
                label: '日期',
                width: 150,
                ellipsis: true,
                renderHeader: () => {
                    return h('div', { class: 'table-custom-header-date' }, [
                        h(ClockCircleOutlined),
                        h('span', '日期'),
                    ]);
                },
            },
            {
                prop: 'name',
                label: '姓名',
                width: 150,
            },
            {
                prop: 'province',
                label: '省份',
                width: 150,
            },
            {
                prop: 'city',
                label: '市区',
                width: 150,
            },
            {
                prop: 'address',
                label: '地址',
                width: 800,
            },
            {
                prop: 'zip',
                label: '邮编',
                width: 120,
            },
        ];
        return {
            data,
            columns,
        };
    },
});
</script>

<style>
.table-custom-header-date {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
```

### 虚拟滚动 [​]()

1W 行数据也不会卡~

play

```
<template>
    <FForm labelWidth="120px">
        <FFormItem label="是否虚拟滚动:">
            <FRadioGroup
                v-model="virtualScroll"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
                @change="() => virtualScroll && (isFixedHeight = true)"
            />
        </FFormItem>
        <FFormItem label="是否指定高度:">
            <FRadioGroup
                v-model="isFixedHeight"
                :disabled="virtualScroll"
                :options="[
                    { label: '否', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem v-if="isFixedHeight" label="固定高度：">
            <FInputNumber
                v-model="height"
                :min="50"
                :max="1000"
                :step="50"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="总是显示滚动条：">
            <FRadioGroup
                v-model="alwaysScrollbar"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        :virtualScroll="virtualScroll"
        :height="isFixedHeight ? height : undefined"
        rowKey="date"
        :data="data"
        :alwaysScrollbar="alwaysScrollbar"
    >
        <FTableColumn prop="date" label="日期" :width="150" ellipsis fixed />
        <FTableColumn prop="name" label="姓名" :width="150" />
        <FTableColumn prop="province" label="省份" :width="150" />
        <FTableColumn prop="city" label="市区" :width="150" />
        <FTableColumn prop="address" label="地址" :width="800" />
        <FTableColumn prop="zip" label="邮编" :width="120" />
        <FTableColumn
            label="操作"
            align="center"
            :width="200"
            :action="action"
            fixed="right"
        />
    </FTable>
</template>

<script>
import { reactive, ref } from 'vue';

const createData = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push({
            date: `2016-05-${i < 10 ? `0${i}` : i}`,
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
        });
    }
    return arr;
};

export default {
    setup() {
        const virtualScroll = ref(true);
        const isFixedHeight = ref(true);
        const height = ref(250);
        const alwaysScrollbar = ref(false);

        const data = reactive(createData(200));
        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[table.virtual] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[table.virtual] [action.删除] row:', row);
                },
            },
        ];
        return {
            data,
            action,
            virtualScroll,
            isFixedHeight,
            height,
            alwaysScrollbar,
        };
    },
};
</script>
```

### 可拖拽 [​]()

play

```
<template>
    <f-space vertical>
        <FSwitch v-model="draggable">
            <template #active> 开 </template>
            <template #inactive> 关 </template>
        </FSwitch>
        <FTable
            :data="data"
            :draggable="draggable"
            layout="auto"
            @dragstart="onDragstart"
            @dragend="onDragend"
        >
            <FTableColumn prop="date" label="日期">
                <template #default="{ row }">
                    {{ row.date }}
                </template>
            </FTableColumn>
            <FTableColumn prop="name" label="姓名" />
            <FTableColumn prop="address" label="地址" />
        </FTable>
    </f-space>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const data = ref(
            Array.from([1, 2, 3], (i) => {
                return {
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const onDragstart = (...arg) => {
            console.log('[table.draggable] [onDragstart] arg:', arg);
        };
        const onDragend = (...arg) => {
            console.log('[table.draggable] [onDragend] arg:', arg);
        };
        const draggable = ref(true);
        return {
            data,
            onDragstart,
            onDragend,
            draggable,
        };
    },
};
</script>
```

### 展开行 [​]()

当行内容过多并且不想显示横向滚动条时，可以使用展开行功能。

play

```
<template>
    <div style="margin-bottom: 10px">展开的行keys： {{ expandedKeys }}</div>
    <FTable
        ref="tableRef"
        v-model:expandedKeys="expandedKeys"
        :data="data"
        rowKey="id"
        @expandChange="expandChange"
    >
        <FTableColumn v-slot="{ row }" type="expand">
            <FGrid
                :gutter="[20, 20]"
                wrap
                style="background: #f8f8f8; padding: 16px"
            >
                <FGridItem :span="12"> 省份：{{ row.province }} </FGridItem>
                <FGridItem :span="12"> 市区：{{ row.city }} </FGridItem>
                <FGridItem :span="12"> 邮编：{{ row.zip }} </FGridItem>
                <FGridItem :span="12"> 地址：{{ row.address }} </FGridItem>
            </FGrid>
        </FTableColumn>
        <FTableColumn prop="date" label="日期" />
        <FTableColumn prop="name" label="姓名" />
    </FTable>
    <FButton style="margin-top: 10px" @click="toggle">
        手动展开/关闭第一行
    </FButton>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const expandedKeys = ref([1]);
        const tableRef = ref(null);
        const data = Array.from([1, 2, 3], (i) => {
            return {
                id: i,
                date: `2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-${
                    i < 10 ? `0${i}` : i
                }`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });
        const expandChange = ({ row, expanded }) => {
            console.log(
                '[table.expand] [expandChange] row:',
                row,
                ' expanded:',
                expanded,
            );
        };
        const toggle = () => {
            tableRef.value.toggleRowExpend({ row: data[0] });
        };
        return {
            tableRef,
            data,
            toggle,
            expandChange,
            expandedKeys,
        };
    },
};
</script>
```

### 合并行或列 [​]()

多行或多列共用一个数据时，可以合并行或列。

play

```
<template>
    <FTable :data="data" :span-method="objectSpanMethod" bordered verticalLine>
        <FTableColumn prop="id" label="ID" :width="180" />
        <FTableColumn prop="name" label="姓名" />
        <FTableColumn prop="amount1" label="数值 1（元）" />
        <FTableColumn prop="amount2" label="数值 2（元）" />
        <FTableColumn prop="amount3" label="数值 3（元）" />
    </FTable>
</template>

<script setup>
const data = [
    {
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
    },
    {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
    },
    {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
    },
    {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
    },
    {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
    },
];

const objectSpanMethod = ({ rowIndex, columnIndex }) => {
    if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
            return {
                rowspan: 2,
                colspan: 1,
            };
        } else {
            return {
                rowspan: 0,
                colspan: 0,
            };
        }
    }
    if (columnIndex === 4) {
        if (rowIndex === 0) {
            return {
                rowspan: 1,
                colspan: 1,
            };
        } else if (rowIndex % 2 !== 0) {
            return {
                rowspan: 2,
                colspan: 1,
            };
        } else {
            return {
                rowspan: 0,
                colspan: 0,
            };
        }
    }
};
</script>
```

### 无数据 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="展示类型：">
            <FRadioGroup v-model="emptyType">
                <FRadio value="normal">默认</FRadio>
                <FRadio value="custom">自定义</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="表格边框:">
            <FRadioGroup
                v-model="bordered"
                :cancelable="false"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="水平分割线:">
            <FRadioGroup
                v-model="horizontalLine"
                :cancelable="false"
                :options="[
                    { label: '否', value: false },
                    { label: '是(默认)', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="垂直分割线:">
            <FRadioGroup
                v-model="verticalLine"
                :cancelable="false"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="间距大小：">
            <FRadioGroup v-model="size">
                <FRadio value="middle">middle(默认)</FRadio>
                <FRadio value="small">small</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="自定义空数据文本：">
            <FInput v-model="emptyText" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTable
        v-if="emptyType === 'normal'"
        :data="data"
        :size="size"
        :bordered="bordered"
        :horizontalLine="horizontalLine"
        :verticalLine="verticalLine"
        :emptyText="emptyText || '暂无数据'"
    >
        <FTableColumn :width="200" prop="date" label="日期" />
        <FTableColumn :width="200" prop="name" label="姓名" />
        <FTableColumn :width="200" prop="address" label="地址" />
        <FTableColumn :width="200" prop="contact" label="联系人" />
        <FTableColumn :width="200" prop="postcode" label="邮编" />
    </FTable>

    <FTable
        v-if="emptyType === 'custom'"
        :data="data"
        :size="size"
        :bordered="bordered"
        :horizontalLine="horizontalLine"
        :verticalLine="verticalLine"
    >
        <template #empty>
            <FEmpty :description="emptyText" />
        </template>
        <FTableColumn :width="200" prop="date" label="日期" />
        <FTableColumn :width="200" prop="name" label="姓名" />
        <FTableColumn :width="200" prop="address" label="地址" />
        <FTableColumn :width="200" prop="contact" label="联系人" />
        <FTableColumn :width="200" prop="postcode" label="邮编" />
    </FTable>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emptyType = ref('normal');
const size = ref('middle');
const emptyText = ref();

const bordered = ref(false);
const horizontalLine = ref(true);
const verticalLine = ref(false);

const data = reactive([]);
</script>
```

### 使用 columns 配置列 [​]()

play

```
<template>
    <FTable
        rowKey="id"
        :data="data"
        bordered
        verticalLine
        layout="auto"
        :columns="columns"
    />
</template>

<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
    setup() {
        const data = Array.from([1, 2, 3], (i) => {
            return {
                id: i,
                date: `2016-05`,
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
            };
        });
        const columns = [
            {
                type: 'selection',
            },
            {
                prop: 'date',
                label: '日期',
                width: 150,
                render: ({ row }) => {
                    return h('span', row.date);
                },
                renderHeader: () => {
                    return h('span', { style: { fontSize: '20px' } }, '日期');
                },
            },
            {
                label: '配送信息',
                children: [
                    { prop: 'name', label: '姓名', width: 150 },
                    {
                        label: '地址信息',
                        children: [
                            { prop: 'province', label: '省份', width: 150 },
                            { prop: 'city', label: '市区', width: 150 },
                            { prop: 'address', label: '详细地址', width: 300 },
                        ],
                    },
                ],
            },
        ];
        return {
            data,
            columns,
        };
    },
});
</script>
```

### 列宽可拖拽配置 [​]()

play

```
<template>
    <FTable
        :data="data"
        :columns="columns"
        layout="auto"
        @headerResize="handleHeaderResize"
    />
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const data = reactive(
    Array.from([1, 2, 3], (i) => {
        return {
            date: `2016-05-${i < 10 ? `0${i}` : i}`,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
        };
    }),
);

const columns = [
    {
        prop: 'date',
        label: '日期',
        minWidth: 200,
        resizable: true,
    },
    {
        prop: 'name',
        label: '姓名',
        minWidth: 200,
        resizable: true,
    },
    {
        prop: 'address',
        label: '地址',
        minWidth: 300,
    },
];

const handleHeaderResize = (...args: any[]) => {
    console.log('[FTable.headerResize]:', args);
};
</script>
```

## FTable Props [​]()

|属性|说明|类型|可选值|默认值|
|---|---|---|---|---|
|bordered|是否展示表格边框|boolean|\-|`false`|
|horizontalLine|是否展示水平分割线|boolean|\-|`true`|
|verticalLine|是否展示垂直分割线|boolean|\-|`false`|
|rowClassName|行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。|string \| object \| array \| ({ row, column, rowIndex, columnIndex, cellValue })=> ( object \| array \| string )|\-|\-|
|rowStyle|行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。|object \| ({row, rowIndex})=> object|\-|\-|
|data|数据|array|\-|`[]`|
|emptyText|空数据时显示的文本内容，也可以通过 #empty 设置|string|\-|`暂无数据`|
|height|table 的高度，如果内容过多超出时则表头固定，内容滚动|number|\-|\-|
|rowKey|行数据的 Key，用来优化 Table 的渲染|string \| (row)=> string|\-|\-|
|showHeader|是否展示表头|boolean|\-|`true`|
|spanMethod|合并行或列的计算方法|*({ row, column, rowIndex, columnIndex }) => { rowspan: string, colspan: string }*|\-|\-|
|virtualScroll|是否启动虚拟滚动，当启用时不支持展开行|boolean|\-|false|
|size|table 的间距大小|string|`middle` `small`|`middle`|
|layout|table 列宽度分割算法，`fixed`为等分，`auto`按内容大小比例。只有不设置 height 和不启动虚拟滚动时才生效！|string|`auto` `fixed`|`fixed`|
|draggable|是否开启拖拽，开启虚拟滚动后失效|boolean|\-|`false`|
|beforeDragend|拖拽结束之前调用，当返回 false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态|[`BeforeDragEnd`](http:/fe.weoa.com/fes-design/zh/components/table.html/draggable.html#阻止拖拽)|\-|（）= true|
|expandedKeys(v-model)|展开的节点的 key 的数组|Array<string \| number>|\-|`[]`|
|checkedKeys(v-model)|勾选节点 key 的数组|Array<string \| number>|\-|`[]`|
|columns|列的配置信息|Array<ColumnChildren>|\-|`-`|
|hoverable|是否开启 hover 行样式|boolean|\-|`true`|
|striped|是否开启斑马线条纹|boolean|\-|`false`|
|alwaysScrollbar|是否总是显示滚动条|boolean|\-|`false`|

## FTable Slots [​]()

|名称|说明|
|---|---|
|`empty`|自定义表格没有数据时的内容|

## FTable Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|cellClick|当某个单元格被点击时会触发该事件|({row, column, cellValue, event})=> void|
|expandChange|当用户对某一行展开或者关闭的时候会触发该事件|({ row, expanded })=> void|
|headerClick|当某一列的表头被点击时会触发该事件|({column, event}) => void|
|headerResize|当某一列的表头被拖拽时会触发该事件|({current, columns,event}) => void|
|rowClick|当某一行被点击时会触发该事件|({row, event}) => void|
|select|当用户手动勾选数据行的 Checkbox 时触发的事件|({ selection, row, checked})=> void|
|selectAll|当用户手动勾选全选 Checkbox 时触发的事件|({ selection, checked }) => void|
|selectionChange|当选择项发生变化时会触发该事件|(selection) => void|
|dragstart|拖拽开始触发|(event, item, index) => void|
|dragend|拖拽结束触发|(event, item, index) => void|
|sortChange|点击排序后触发|({prop?: string; order?: 'descend' \| 'ascend'; sorter?: Function \| 'default'}) => void|
|afterSort|排序完成后触发|(data) => void|

## FTable Methods [​]()

|名称|说明|参数|
|---|---|---|
|clearSelection|用于多选表格，清空用户的选择|() => void|
|toggleRowSelection|用于多选表格，切换某一行的选中状态|({row: RowType})=> void|
|toggleAllSelection|用于多选表格，切换全选和全不选|() => void|
|toggleRowExpend|用于控制某行的展开隐藏|({row: RowType})=> void|
|sort|设定表格的排序状态|(prop: string, order: 'ascend' \| 'descend' \| false) => void|
|clearSorter|清空所有排序状态|() => void|

## FTableColumn Props [​]()

|属性|说明|类型|可选值|默认值|
|---|---|---|---|---|
|action|操作|array \| object|\-|\-|
|align|对齐方式|string|left / center / right|`left`|
|colClassName|列的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。|string \| object \| array \| ({ row, column, rowIndex, columnIndex, cellValue })=> ( object \| array \| string )|\-|\-|
|colStyle|列的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。|object \| ({ row, column, rowIndex, columnIndex, cellValue }) => object|\-|\-|
|fixed|列是否固定在左侧或者右侧，true 表示固定在左侧|string \| boolean|true / left / right|\-|
|formatter|用来格式化内容|({row, column, rowIndex, columnIndex, cellValue}) => any|\-|\-|
|label|列的标题，也可以使用 `#header` 自定义|string|\-|\-|
|minWidth|列最小的宽度，如果容器宽度够大，则会自适应补偿|number|\-|\-|
|prop|列内容的字段名|string|\-|\-|
|selectable|仅对 type=selection 的列有效，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选|({row, rowIndex}) => boolean|\-|\-|
|type|列的类型，如果设置为`selection`则显示选择器，如果设置为`expand`则显示一个展开按钮|string|default / selection / expand|`default`|
|multiple|列选择类型，type为`selection`时，可以设置单选和多选行模式|string|boolean|`true`|
|width|对应列的宽度，优先级大于 minWidth|number|\-|\-|
|ellipsis|设置宽度后，如果文本溢出后出现省略号，设置为对象时参考 Ellipsis 组件配置|boolean \| Object|\-|`false`|
|visible|是否显示列|boolean|\-|`true`|
|sortable|是否排序列|boolean|\-|`false`|
|sorter|排序方法，如果设为 'default' 表格将会使用一个内置的排序函数；其他工作的方式类似 Array.sort 的对比函数|((a: RowType, b: RowType) => boolean) \| 'default'|\-|`default`|
|sortDirections|支持的排序方式|string\[\]|\-|`['ascend', 'descend']`|
|resizable|列是否可设置大小|boolean|\-|`false`|

## FTableColumn Slots [​]()

|名称|说明|类型|
|---|---|---|
|default|自定义列的内容|({ row, column, rowIndex, columnIndex, cellValue }）=> VNode\[\]|
|header|自定义表头的内容|({ column, columnIndex }) => VNode\[\]|

## ColumnChildren [​]()

`ColumnChildren` 跟 `FTableColumn Props` 保持一致，使用 render 函数替代`FTableColumn`组件的插槽。

|名称|说明|类型|
|---|---|---|
|render|自定义列的内容|({ row, column, rowIndex, columnIndex, cellValue }) => VNode\[\]|
|renderHeader|自定义表头的内容|({ column, columnIndex }) => VNode\[\]|

阅读原文：http://fe.weoa.com/fes-design/zh/components/table.html