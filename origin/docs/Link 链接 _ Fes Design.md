# Link 链接 [​]()

文字超链接

## 组件注册 [​]()

js

```
import { FLink } from '@fesjs/fes-design';

app.use(FLink);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm :labelWidth="60">
        <FFormItem label="尺寸:">
            <FRadioGroup
                v-model="size"
                :options="[
                    { label: 'small', value: 'small' },
                    { label: 'middle(默认)', value: 'middle' },
                    { label: 'large', value: 'large' },
                ]"
            />
        </FFormItem>
        <FFormItem label="下划线:">
            <FRadioGroup
                v-model="underline"
                :options="[
                    { label: '启用', value: true },
                    { label: '不启用(默认)', value: false },
                ]"
            />
        </FFormItem>
        <FFormItem label="禁用:">
            <FRadioGroup
                v-model="disabled"
                :options="[
                    { label: '是', value: true },
                    { label: '否(默认)', value: false },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FLink :underline="underline" :disabled="disabled" :size="size" type="default" @click="handleClick">default</FLink>
        <FLink :underline="underline" :disabled="disabled" :size="size" type="primary">primary</FLink>
        <FLink :underline="underline" :disabled="disabled" :size="size" type="success">success</FLink>
        <FLink :underline="underline" :disabled="disabled" :size="size" type="warning">warning</FLink>
        <FLink :underline="underline" :disabled="disabled" :size="size" type="danger">danger</FLink>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('middle');

const underline = ref(false);

const disabled = ref(false);

const handleClick = () => {
    console.log('[link.base] handClick');
};
</script>

<style scoped>
</style>
```

### 跳转 [​]()

通过设置`target`，设定跳转行为，同原生 a 标签的`target`属性  
若`href`不设置，则点击不会发生任何跳转

play

```
<template>
    <FSpace>
        <FLink href="https://fesjs.mumblefe.cn/" target="_blank">Fes.js官网</FLink>
        <FLink type="primary">
            <a href="https://fesjs.mumblefe.cn/" target="_blank">Fes.js官网</a>
        </FLink>
    </FSpace>
</template>
```

### 图标 [​]()

提供了图标的插槽

play

```
<template>
    <FLink href="https://fes-design.mumblefe.cn/">
        <template #icon>
            <ProductOutlined />
        </template>
        首页
    </FLink>
</template>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|size|尺寸大小，可选`small`，`middle`，`large`|`string`|`middle`|
|type|类型，可选`default`，`primary`，`success`，`danger`，`warning`|`string`|`default`|
|underline|展示下划线|`boolean`|`false`|
|disabled|是否禁用|`boolean`|`false`|
|href|跳转链接|`string`|`-`|
|target|跳转行为，同原生 target|`string`|`-`|

## Slots [​]()

|名称|说明|参数|
|---|---|---|
|default|链接内容|`-`|
|icon|图标|`-`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/link.html