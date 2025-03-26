# Tooltip 文字提示 [​]()

文字提示主要用于某个元素的辅助提示。 基于 `Popper` 组件做的封装。

## 组件注册 [​]()

js

```
import { FTooltip } from '@fesjs/fes-design';

app.use(FTooltip);
```

## 代码演示 [​]()

### 基础用法 [​]()

placement 设置弹出位置，分别是`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `right` `right-start` `right-end` `left` `left-start` `left-end`

play

```
<template>
    <div class="tooltip-wrapper">
        <FTooltip content="top-start" placement="top-start">
            <FButton class="w-100 ml-100">top-start</FButton>
        </FTooltip>
        <FTooltip content="top" placement="top">
            <FButton class="w-100 ml-20">top</FButton>
        </FTooltip>
        <FTooltip content="top-end" placement="top-end">
            <FButton class="w-100 ml-20">top-end</FButton>
        </FTooltip>
        <br>
        <FTooltip content="left-start" placement="left-start">
            <FButton class="w-100 mt-20">left-start</FButton>
        </FTooltip>
        <FTooltip content="right-start" placement="right-start">
            <FButton class="w-100 mt-20 ml-340">right-start</FButton>
        </FTooltip>
        <br>
        <FTooltip content="left" placement="left">
            <FButton class="w-100 mt-20">left</FButton>
        </FTooltip>
        <FTooltip content="right" placement="right">
            <FButton class="w-100 mt-20 ml-340">right</FButton>
        </FTooltip>
        <br>
        <FTooltip content="left-end" placement="left-end">
            <FButton class="w-100 mt-20">left-end</FButton>
        </FTooltip>
        <FTooltip content="right-end" placement="right-end">
            <FButton class="w-100 mt-20 ml-340">right-end</FButton>
        </FTooltip>
        <br>
        <FTooltip content="bottom-start" placement="bottom-start">
            <FButton class="w-100 mt-20 ml-100">bottom-start</FButton>
        </FTooltip>
        <FTooltip content="bottom" placement="bottom">
            <FButton class="w-100 mt-20 ml-20">bottom</FButton>
        </FTooltip>
        <FTooltip content="bottom-end" placement="bottom-end">
            <FButton class="w-100 mt-20 ml-20">bottom-end</FButton>
        </FTooltip>
    </div>
</template>

<style scoped>
.tooltip-wrapper {
    min-width: 560px;
}
.tooltip-wrapper .w-100 {
    width: 100px;
}
.tooltip-wrapper .ml-100 {
    margin-left: 100px;
}
.tooltip-wrapper .ml-20 {
    margin-left: 20px;
}
.tooltip-wrapper .ml-340 {
    margin-left: 340px;
}
.tooltip-wrapper .mt-20 {
    margin-top: 20px;
}
</style>
```

### 确认弹出框 [​]()

属性 mode="confirm"，点击时弹出确认框

play

```
<template>
    <FSpace>
        <FForm :labelWidth="150">
            <FFormItem label="是否显示确认按钮:">
                <FRadioGroup
                    v-model="showOk"
                    :cancelable="false"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="是否显示取消按钮:">
                <FRadioGroup
                    v-model="showCancel"
                    :cancelable="false"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
        </FForm>
    </FSpace>

    <FSpace align="center">
        <FTooltip
            mode="confirm"
            :confirmOption="{ okText: 'OK', showOk, showCancel }"
            :content="0"
            @ok="() => handleConfirm('确定')"
            @cancel="() => handleConfirm('取消')"
        >
            <FButton type="link">删除</FButton>
            <template #title>
                <div style="width: 200px">是否删除当前内容</div>
            </template>
        </FTooltip>

        <FTooltip
            mode="confirm"
            :confirmOption="{ okText: 'OK', showOk, showCancel }"
            :content="0"
            @ok="() => handleConfirm('确定')"
            @cancel="() => handleConfirm('取消')"
        >
            <FButton type="danger">
                <template #icon>
                    <DeleteOutlined />
                </template>
            </FButton>
            <template #title>
                <div style="width: 200px">是否删除当前内容</div>
            </template>
        </FTooltip>
    </FSpace>
</template>

<script>
import { FMessage } from '@fesjs/fes-design';
import { ref } from 'vue';
import { DeleteOutlined } from '@fesjs/fes-design/icon';

export default {
    setup() {
        const showOk = ref(true);
        const showCancel = ref(true);

        function handleConfirm(type) {
            FMessage.info(`点击了${type}`);
        }

        return {
            showOk,
            showCancel,
            handleConfirm,
        };
    },
};
</script>
```

### popover 弹出框 [​]()

属性 mode="popover"，可以展示一些复杂的内容

play

```
<template>
    <FSpace>
        <FTooltip mode="popover">
            <FButton>查看更多</FButton>
            <template #content>
                <div style="width: 300px">
                    <div v-for="i in 5" :key="i">我是内容{{ i }}</div>
                </div>
            </template>
            <template #title> 我是标题 </template>
        </FTooltip>
    </FSpace>
</template>
```

### 触发方式 [​]()

属性 trigger 设置触发方式，`hover` `click` `focus`

play

```
<template>
    <FSpace>
        <FTooltip content="hover">
            <FButton>hover</FButton>
        </FTooltip>
        <FTooltip content="click" trigger="click">
            <FButton class="ml-20">click</FButton>
        </FTooltip>
        <FTooltip content="focus" trigger="focus">
            <FButton class="ml-20">focus</FButton>
        </FTooltip>
    </FSpace>
</template>
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
        <FTooltip
            :modelValue="visible"
            mode="confirm"
            :passive="false"
            :confirmOption="{ okText: 'OK' }"
            :content="0"
            @ok="() => handleConfirm('确定')"
            @cancel="() => handleConfirm('取消')"
            @clickOutside="handleClickOutside"
        >
            <FButton type="link" @click="visible = true">删除</FButton>
            <template #title>
                <div style="width: 200px">是否删除当前内容</div>
            </template>
        </FTooltip>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

const visible = ref(false);
const closeOnClickOutside = ref(true);

function handleConfirm(type) {
    FMessage.info(`点击了${type}`);
    if (type === '确定') {
        visible.value = false;
    }
}
function handleClickOutside() {
    console.log('[tooltip.passive] clickOutside');
    if (closeOnClickOutside.value) {
        visible.value = false;
    }
}
</script>
```

## Tooltip Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|手动控制显示|boolean|`false`|
|mode|主题模式，可选`text` `confirm` `popover`|string|`text`|
|popperClass|弹出框的样式类名|string \| object \| Array|\-|
|popperStyle|弹出框的样式|object|\-|
|title|标题(mode 为`text`不可用)|string \| number|\-|
|content|显示的内容|string \| number|\-|
|placement|出现的位置，可选值有`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `right` `right-start` `right-end` `left` `left-start` `left-end`|string|`auto`|
|trigger|触发类型`hover` `click` `focus`, confirm 模式下只能是`click`|string|`hover`|
|disabled|是否可用|boolean|`false`|
|offset|出现位置的偏移量|number|`8`|
|showAfter|显示的延迟时间|number|`0`|
|hideAfter|隐藏的延迟时间|number|`0`|
|passive|是否受控模式，true-非受控，false-受控|boolean|`true`|
|arrow|是否显示箭头|boolean|`true`|
|confirmOption|mode 为`confirm`的配置|object|\-|
|getContainer|配置渲染节点的输出位置|() => HTMLElement|`() => document.body`|

### confirmOption 属性 [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|okText|确认按钮文字|string|\-|
|cancelText|取消按钮文字|string|\-|
|showOk|是否显示确认按钮|boolean|`true`|
|showCancel|是否显示取消按钮|boolean|`true`|
|icon|图标|vNode|`<ExclamationCircleFilled/>`|

## Tooltip Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|ok|点击确定按钮回调，confirm 模式下有效|(visible) => void|
|cancel|点击取消按钮回调，confirm 模式下有效|(visible) => void|
|clickOutside|是否点击了外部区域|() => void|

## Tooltip Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|updatePopperPosition|更新弹出层位置|() => void|

## Tooltip Slots [​]()

|名称|说明|
|---|---|
|default|触发提示包裹的内容|
|content|提示的内容|
|title|提示的标题(mode 为`text`不可用|

阅读原文：http://fe.weoa.com/fes-design/zh/components/tooltip.html