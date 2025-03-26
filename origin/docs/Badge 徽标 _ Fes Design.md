# Badge 徽标 [​]()

用于展示数字和自定义标识

## 组件注册 [​]()

js

```
import { FBadge } from '@fesjs/fes-design';

app.use(FBadge);
```

## 代码演示 [​]()

### 基础用法 [​]()

展示数值，小红点模式，显示隐藏，徽标类型

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="尺寸:">
            <FRadioGroup
                v-model="size"
                :options="[
                    { label: 'small', value: 'small' },
                    { label: 'middle(默认)', value: 'middle' },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否红点模式:">
            <FRadioGroup
                v-model="dot"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否隐藏:">
            <FRadioGroup
                v-model="hidden"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FBadge
            :size="size"
            :dot="dot"
            :hidden="hidden"
            :value="10"
            type="primary"
            class="item"
        >
            <FButton> Primary </FButton>
        </FBadge>
        <FBadge
            :size="size"
            :dot="dot"
            :hidden="hidden"
            :value="50"
            type="success"
            class="item"
        >
            <FButton> Success </FButton>
        </FBadge>
        <FBadge
            :size="size"
            :dot="dot"
            :hidden="hidden"
            :value="80"
            type="warning"
            class="item"
        >
            <FButton> Warning </FButton>
        </FBadge>
        <FBadge
            :size="size"
            :dot="dot"
            :hidden="hidden"
            :value="100"
            class="item"
        >
            <FButton> Danger </FButton>
        </FBadge>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('middle');
const dot = ref(false);
const hidden = ref(false);
</script>

<style>
.item {
    margin-right: 20px;
}
</style>
```

### 显示数值0 [​]()

默认情况下不展示数值0，如果 hidden为true，该属性不会生效，徽标仍会被隐藏

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="是否隐藏:">
            <FRadioGroup
                v-model="hidden"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否展示数据0:">
            <FRadioGroup
                v-model="showZero"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FBadge :hidden="hidden" :value="0" :showZero="showZero" class="item">
            <FButton> Primary </FButton>
        </FBadge>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const hidden = ref(false);
const showZero = ref(false);
</script>

<style>
.item {
    margin-right: 20px;
}
</style>
```

### 设定阈值 [​]()

超出阈值展示阈值+，只有在 value 是 number 的情况下，才会生效

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="封顶阈值:">
            <FInputNumber v-model="max" :step="1" />
        </FFormItem>
        <FFormItem label="内容值:">
            <FInputNumber v-model="value" :step="1" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FBadge :value="value" type="primary" :max="max" class="item">
            <FButton> Primary </FButton>
        </FBadge>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const max = ref(100);
const value = ref(100);
</script>

<style>
.item {
    margin-right: 20px;
}
</style>
```

### 自定义内容 [​]()

通过插槽指定徽标内容

play

```
<template>
    <FSpace>
        <FBadge type="primary" class="item">
            <template #content>
                <ClockCircleOutlined />
            </template>
            <FButton> Primary </FButton>
        </FBadge>
        <FBadge type="success" class="item">
            <template #content>
                <span>Good</span>
            </template>
            <FButton> Success </FButton>
        </FBadge>
        <FBadge value="继续努力" class="item">
            <FButton> Danger </FButton>
        </FBadge>
    </FSpace>
</template>

<style>
.item {
    margin-right: 20px;
}
</style>
```

### 自定义背景色 [​]()

不仅通过类型可以设定默认支持的背景色，也可以自定义背景色

play

```
<template>
    <FSpace>
        <FBadge :value="10" backgroundColor="blue" class="item">
            <FButton> Primary </FButton>
        </FBadge>
        <FBadge :value="50" backgroundColor="green" class="item">
            <FButton> Success </FButton>
        </FBadge>
        <FBadge :value="80" backgroundColor="orange" class="item">
            <FButton> Warning </FButton>
        </FBadge>
        <FBadge :value="100" backgroundColor="#FF0000" class="item">
            <FButton> Danger </FButton>
        </FBadge>
    </FSpace>
</template>

<style>
.item {
    margin-right: 20px;
}
</style>
```

### 单独使用 [​]()

play

```
<template>
    <FBadge :value="9" class="item" />
    <FBadge value="New" class="item" />
    <FBadge dot class="item" />
</template>

<style>
.item {
    margin-right: 20px;
}
</style>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|内容|`string` `number`|`-`|
|dot|是否红点模式|`boolean`|`false`|
|showZero|是否展示数值0，如果 hidden为true，该属性不会生效|`boolean`|`false`|
|hidden|是否隐藏徽标，判定优先级高于showZero|`boolean`|`false`|
|max|设定封顶阈值，只有 value 是 number 情况下才会生效|`number`|`99`|
|size|尺寸，可选值为 `small` `middle`|`string`|`middle`|
|type|类型，可选值为 `primary` `success` `warning` `danger`|`string`|`danger`|
|backgroundColor|自定义背景色|`string`|`-`|

## Slots [​]()

|slot 名称|说明|
|---|---|
|content|自定义显示内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/badge.html