# Pagination 分页 [​]()

采用分页的形式分隔长列表，每次只加载一个页面。

## 组件注册 [​]()

js

```
import { FPagination } from '@fesjs/fes-design';

app.use(FPagination);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FPagination :total-count="totalCount" @change="handleChange" />
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const totalCount = ref(1000);
        const handleChange = (currentPage, pageSize) => {
            console.log(
                '[pagination.common] [handleChange] currentPage:',
                currentPage,
                ' pageSize:',
                pageSize,
            );
        };
        return {
            totalCount,
            handleChange,
        };
    },
});
</script>
```

### 电梯直达 [​]()

设置 show-quick-jumper 属性为 true ，显示快速跳转

play

```
<template>
    <FPagination :total-count="1000" show-quick-jumper />
</template>
```

### 每页数量 [​]()

设置 show-size-changer 属性为 true ，显示每页条数的选择器。

设置 pageSizeOption 控制选择器选项，默认为 \[10, 20, 30, 50, 100\]

play

```
<template>
    <FPagination
        show-size-changer
        :pageSizeOption="pageSizeOption"
        :total-count="1000"
        @change="handleChange"
    />
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const pageSizeOption = reactive([10, 20, 30, 50, 100]);
        const handleChange = (currentPage, pageSize) => {
            console.log(
                '[pagination.sizes] [handleChange] currentPage:',
                currentPage,
                ' pageSize:',
                pageSize,
            );
        };
        return {
            pageSizeOption,
            handleChange,
        };
    },
});
</script>
```

### 显示总数 [​]()

设置 show-total 属性为 true ，显示总条数

play

```
<template>
    <FPagination :total-count="1000" show-total />
</template>
```

### 组合类型 [​]()

play

```
<template>
    <FPagination
        :total-count="1000"
        show-size-changer
        show-quick-jumper
        show-total
        @change="handleChange"
    />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const handleChange = (currentPage, pageSize) => {
            console.log(
                '[pagination.combination] [handleChange] currentPage:',
                currentPage,
                ' pageSize:',
                pageSize,
            );
        };
        return {
            handleChange,
        };
    },
});
</script>
```

### 简洁型 [​]()

设置 simple 属性为 true ，显示简洁的分页器。

play

```
<template>
    <FSpace align="center">
        <FPagination
            v-model:currentPage="currentPage"
            :totalCount="totalCount"
            simple
            @change="handleChange"
        />
        当前选择页：{{ currentPage }}
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const totalCount = ref(1000);
const currentPage = ref(10);

const handleChange = (currentPage, pageSize) => {
    console.log(
        '[pagination.simple] [handleChange] currentPage:',
        currentPage,
        ' pageSize:',
        pageSize,
    );
};
</script>
```

### 小型号 [​]()

设置 small 属性为 true ，让分页变小。

play

```
<template>
    <FPagination :total-count="1000" small />
</template>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|pageSize(v-model)|每页显示条目个数|number|`10`|
|currentPage(v-model)|当前页码|number|`1`|
|totalCount|总条数|number|`0`|
|pageSizeOption|每页条数|array|`[10, 20, 30, 50, 100]`|
|showQuickJumper|是否显示快速跳转|boolean|`false`|
|showSizeChanger|是否显示每页条数的选择器|boolean|`false`|
|showTotal|是否显示总条数|boolean|`false`|
|small|是否使用小型分页样式|boolean|`false`|
|simple|是否使用简洁样式|boolean|`false`|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|currentPage 或 pageSize 改变的回调，参数是改变后的页码及每页条数|(currentPage, pageSize) => void|
|pageSizeChange|pageSize 改变的回调，参数是改变后的每页条数|(pageSize) => void|

阅读原文：http://fe.weoa.com/fes-design/zh/components/pagination.html