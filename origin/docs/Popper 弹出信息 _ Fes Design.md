# Popper 弹出信息 [​]()

在内容周围弹出一些隐藏的信息。内置样式，需要自行定制。 如果你只想展示一些基本的文本内容，推荐使用 `Tooltip`。

## 组件注册 [​]()

js

```
import { FPopper } from '@fesjs/fes-design';

app.use(FPopper);
```

## 代码演示 [​]()

### 基础用法 [​]()

属性 `trigger` 设置触发方式，`hover`、`click`、`focus`。

play

```
<template>
    <FPopper placement="bottom" trigger="hover" :arrow="true">
        <template #trigger>
            <FButton>Hover to activate</FButton>
        </template>
        <div style="padding: 30px">this is content, this is content, this is content</div>
    </FPopper>
    <FPopper placement="top" trigger="click" :arrow="true">
        <template #trigger>
            <FButton style="margin-left: 10px">Click to activate</FButton>
        </template>
        <div style="padding: 30px">this is content, this is content, this is content</div>
    </FPopper>
    <FPopper placement="right" trigger="focus" :arrow="true">
        <template #trigger>
            <FButton style="margin-left: 10px">Focus to activate</FButton>
        </template>
        <div style="padding: 30px">this is content, this is content, this is content</div>
    </FPopper>
</template>

<script setup lang="ts"></script>

<style scoped></style>
```

### 是否显示 [​]()

play

```
<template>
    <FSpace>
        <FForm :labelWidth="100">
            <FFormItem label="是否显示:">
                <FRadioGroup
                    v-model="visible"
                    :cancelable="false"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                />
            </FFormItem>
        </FForm>
    </FSpace>

    <FDivider />

    <FPopper v-model="visible" placement="bottom" trigger="click" :arrow="true" :popperStyle="{ zIndex: 1500 }">
        <template #trigger>
            <FButton>Click to activate</FButton>
        </template>
        <div style="padding: 30px">this is content, this is content, this is content</div>
    </FPopper>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped></style>
```

### 受控模式 [​]()

play

```
<template>
    <FSpace>
        <FForm :labelWidth="150">
            <FFormItem label="是否显示:">
                <FRadioGroup
                    v-model="visible"
                    :cancelable="false"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                />
            </FFormItem>
            <FFormItem label="点击空白处是否关闭:">
                <FRadioGroup
                    v-model="closeOnClickOutside"
                    :cancelable="false"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                />
            </FFormItem>
        </FForm>
    </FSpace>

    <FDivider />

    <FSpace>
        <FPopper
            :modelValue="visible"
            placement="bottom"
            trigger="click"
            :arrow="true"
            :passive="false"
            @clickOutside="handleClickOutside"
        >
            <template #trigger>
                <FButton @click="visible = true">Click to activate</FButton>
            </template>
            <div style="padding: 30px">this is content, this is content, this is content</div>
        </FPopper>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(false);
const closeOnClickOutside = ref(true);

function handleClickOutside() {
    console.log('[tooltip.passive] clickOutside');
    if (closeOnClickOutside.value) {
        visible.value = false;
    }
}
</script>
```

## Popper Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|手动控制显示|boolean|`false`|
|placement|出现的位置，可选值有`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `right` `right-start` `right-end` `left` `left-start` `left-end`|string|`auto`|
|trigger|触发类型`hover` `click` `focus`, confirm 模式下只能是`click`|string|`hover`|
|disabled|是否可用|boolean|`false`|
|offset|出现位置的偏移量|number|`6`|
|arrow|是否显示箭头|boolean|`true`|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|popperClass|弹出框的样式类名|string \| object \| Array|\-|
|popperStyle|弹出框的样式|object|\-|
|showAfter|显示的延迟时间|number|`0`|
|passive|是否受控模式，true-非受控，false-受控|boolean|`true`|
|hideAfter|隐藏的延迟时间|number|`0`|
|lazy|是否懒渲染|boolean|`true`|
|getContainer|配置渲染节点的输出位置|() => HTMLElement|`() => document.body`|

## Popper Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|clickOutside|是否点击了外部区域|() => void|

## Popper Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|updatePopperPosition|更新弹出层位置|() => void|

## Popper Slots [​]()

|名称|说明|
|---|---|
|trigger|触发提示包裹的内容|
|default|提示内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/popper.html