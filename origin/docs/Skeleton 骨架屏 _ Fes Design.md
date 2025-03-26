# Skeleton 骨架屏 [​]()

在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。

## 组件注册 [​]()

js

```
import { FSkeleton } from '@fesjs/fes-design';

app.use(FSkeleton);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSkeleton text :repeat="2" />
    <FSkeleton text style="width: 60%" />
</template>
```

### 默认支持尺寸 [​]()

play

```
<template>
    <FRadioGroup v-model="size">
        <FRadio value="small">small</FRadio>
        <FRadio value="middle">middle</FRadio>
        <FRadio value="large">large</FRadio>
    </FRadioGroup>

    <FDivider />

    <FSpace vertical>
        <FSkeleton :size="size" />
        <FSkeleton :width="200" :size="size" :sharp="false" />
        <FSkeleton round :size="size" />
        <FSkeleton circle :size="size" />
    </FSpace>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('middle');
</script>
```

### 自定义尺寸 [​]()

play

```
<template>
    <FSpace vertical>
        <FSkeleton height="100px" :width="100" />
        <FSkeleton height="30px" width="66%" :sharp="false" />
        <FSkeleton height="40px" round />
        <FSkeleton height="50px" circle />
    </FSpace>
</template>
```

### 静态展示 [​]()

play

```
<template>
    <FSkeleton size="large" style="width: 60%" :animated="false" />
</template>
```

### 自定义内容 [​]()

play

```
<template>
    <FSkeleton class="wrapper" :width="100" :height="100">
        <PictureOutlined class="icon" />
    </FSkeleton>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.icon {
    color: #cdced0;
    font-size: 40px;
}
</style>
```

## Space Props [​]()

|参数|说明|类型|默认值|
|---|---|---|---|
|text|是否文本骨架|boolean|`false`|
|round|是否圆角骨架|boolean|`false`|
|circle|是否圆形骨架|boolean|`false`|
|height|骨架高度|string / number|\-|
|width|骨架宽度|string / number|\-|
|size|骨架大小，可选值为 `small` `middle` `large`|string|\-|
|repeat|重复次数|number|`1`|
|animated|是否启用动画|`boolean`|`true`|
|sharp|是否显示为直角骨架|`boolean`|`true`|

## Space Slots [​]()

|名称|说明|
|---|---|
|default|自定义内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/skeleton.html