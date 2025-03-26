# Breadcrumb 面包屑 [​]()

显示当前页面的路径，快速返回之前的任意页面。

## 组件注册 [​]()

js

```
import { FBreadcrumb, FBreadcrumbItem } from '@fesjs/fes-design';

app.use(FBreadcrumb);
app.use(FBreadcrumbItem);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm :labelWidth="60">
        <FFormItem label="分隔符:">
            <FInput v-model="separator" class="form-item" />
        </FFormItem>
        <FFormItem label="字体大小:">
            <FInputNumber v-model="fontSize" class="form-item" />
        </FFormItem>
    </FForm>
    <FDivider />
    <FBreadcrumb :separator="separator" :fontSize="fontSize">
        <FBreadcrumbItem>首页</FBreadcrumbItem>
        <FBreadcrumbItem>二级页面 </FBreadcrumbItem>
        <FBreadcrumbItem>三级页面</FBreadcrumbItem>
        <FBreadcrumbItem>四级页面</FBreadcrumbItem>
        <FBreadcrumbItem>五级页面</FBreadcrumbItem>
    </FBreadcrumb>
    <FBreadcrumb :separator="separator" :fontSize="fontSize">
        <FBreadcrumbItem v-for="(item, index) in list" :key="index">{{ item.text }}</FBreadcrumbItem>
    </FBreadcrumb>
</template>

<script setup>
import { ref } from 'vue';

const separator = ref('/');

const fontSize = ref(14);

const list = [
    {
        text: '首页',
    }, {
        text: '二级页面',
    }, {
        text: '三级页面',
    },
];
</script>

<style>
.form-item {
    width: 100px;
}
</style>
```

### 自定义点击事件 [​]()

自定义某个item的点击事件。 同时点击行为，也可以和 vue-router 一起结合使用。

play

```
<template>
    <FBreadcrumb>
        <FBreadcrumbItem @click="handleClick">首页</FBreadcrumbItem>
        <FBreadcrumbItem>
            <router-link :to="{ path: 'apple', query: { color: 'red' } }">
                二级页面
            </router-link>
        </FBreadcrumbItem>
        <FBreadcrumbItem>三级页面</FBreadcrumbItem>
    </FBreadcrumb>
</template>

<script setup>
const handleClick = () => {
    window.location.href = '/';
};
</script>
```

## Breadcrumb Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|separator|分隔符，默认为`/`|`string`|`-`|
|fontSize|字体大小|`number`|`14`|

## Breadcrumb Slots [​]()

|名称|说明|
|---|---|
|default|BreadcrumbItem 组件|

## BreadcrumbItem Slots [​]()

|名称|说明|
|---|---|
|default|用户自定义内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/breadcrumb.html