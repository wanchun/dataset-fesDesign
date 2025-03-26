# Button 按钮 [​]()

可点击按钮。

## 组件注册 [​]()

js

```
import { FButton } from '@fesjs/fes-design';

app.use(FButton);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="按钮大小:">
            <FRadioGroup
                v-model="size"
                :options="[
                    { label: 'small', value: 'small' },
                    { label: 'middle(默认)', value: 'middle' },
                    { label: 'large', value: 'large' },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否加载状态:">
            <FRadioGroup
                v-model="loading"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否禁用状态:">
            <FRadioGroup
                v-model="disabled"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FButton :size="size" :loading="loading" :disabled="disabled">
            Default
        </FButton>
        <FButton
            type="primary"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Primary
        </FButton>
        <FButton
            type="text"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Text
        </FButton>
        <FButton
            type="link"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Link
        </FButton>
    </FSpace>

    <FDivider />

    <FSpace>
        <FButton
            type="info"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Info
        </FButton>
        <FButton
            type="success"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Success
        </FButton>
        <FButton
            type="warning"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Warning
        </FButton>
        <FButton
            type="danger"
            :size="size"
            :loading="loading"
            :disabled="disabled"
        >
            Danger
        </FButton>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('middle');
const loading = ref(false);
const disabled = ref(false);
</script>
```

### Icon 按钮 [​]()

play

```
<template>
    <FSpace>
        <FButton type="primary" :loading="true">
            <template #icon>
                <ProductOutlined />
            </template>
        </FButton>
        <FButton>
            <template #icon> <ProductOutlined /> </template>Default
        </FButton>
        <FButton type="primary">
            <template #icon> <ProductOutlined /> </template>Primary
        </FButton>
        <FButton type="text">
            <template #icon> <ProductOutlined /> </template>Text
        </FButton>
        <FButton type="link">
            <template #icon> <ProductOutlined /> </template>Link
        </FButton>
    </FSpace>
</template>
```

### long 按钮 [​]()

play

```
<template>
    <FSpace vertical>
        <FButton size="small" long>Default</FButton>
        <FButton type="info" long>Info</FButton>
        <FButton type="primary" size="large" long>Primary</FButton>
    </FSpace>
</template>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|disabled|按钮禁用状态|boolean|`false`|
|size|按钮大小，可选值 `small` `middle` `large`|string|`middle`|
|htmlType|设置 `button` 的原生 `type` 值，可选值请参考 HTML 标准|string|`button`|
|loading|按钮加载状态|boolean|`false`|
|long|按钮按钮宽度为父元素宽度|boolean|`false`|
|throttle|节流|number|`300`|
|type|设置按钮类型，可选值为 `primary` `text` `link` `info` `success` `warning` `danger`|string|`default`|

## Slots [​]()

|slot 名称|说明|
|---|---|
|icon|按钮图标|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|click|按钮点击事件|(event) => void|

阅读原文：http://fe.weoa.com/fes-design/zh/components/button.html