# Rate 评分 [​]()

评分组件用于评分行为

## 组件注册 [​]()

js

```
import { FRate } from '@fesjs/fes-design';

app.use(FRate);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="手动更改value:">
            <FInputNumber v-model="value" :max="count" :min="0" />
        </FFormItem>
        <FFormItem label="个数:">
            <FInputNumber v-model="count" :min="3" :max="10" />
        </FFormItem>
        <FFormItem label="颜色填充:">
            <FRadioGroup
                v-model="colorFilled"
                :options="[
                    { label: '否', value: false },
                    { label: '是(默认)', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="可清除:">
            <FRadioGroup
                v-model="clearable"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="半星模式:">
            <FRadioGroup
                v-model="allowHalf"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
        <FFormItem label="只读模式:">
            <FRadioGroup
                v-model="readonly"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>
    <FSpace>
        <FRate
            v-model="value"
            :count="count"
            :color-filled="colorFilled"
            :clearable="clearable"
            :allow-half="allowHalf"
            :readonly="readonly"
        />
    </FSpace>

    <FSpace>
        <span>value值：{{ value }}</span>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
const count = ref(5);
const colorFilled = ref(true);
const clearable = ref(false);
const allowHalf = ref(false);
const readonly = ref(false);
</script>
```

### 尺寸 [​]()

size 属性给定了三种，`small`，`medium`，`large`

play

```
<template>
    <FSpace>
        <FRate v-model="value" size="small" />
    </FSpace>
    <FSpace>
        <FRate v-model="value" />
    </FSpace>
    <FSpace>
        <FRate v-model="value" size="large" />
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
</script>
```

### 颜色 [​]()

可以自定义颜色，色号

play

```
<template>
    <FSpace>
        <FInput placeholder="请输入颜色或者色号" @change="change" />
    </FSpace>
    <FSpace>
        <FRate v-model="value" :color="color" allow-half />
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const color = ref();

const value = ref(4);

const change = (val) => {
    color.value = val;
};
</script>
```

### 自定义图标 [​]()

替换 rate 的图标 icon

play

```
<template>
    <FSpace>
        <FRate v-model="value" allow-half>
            <template #content="slotProps">
                <CheckCircleOutlined :size="slotProps.size" />
            </template>
        </FRate>
    </FSpace>

    <FSpace>
        <FRate v-model="value" color="#5384ff" allow-half>
            <template #content="slotProps">
                <QuestionCircleOutlined :size="slotProps.size" />
            </template>
        </FRate>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
</script>
```

### 辅助文字 [​]()

为组件设置 show-text 属性会在右侧显示辅助文字。 通过设置 texts 可以为每一个分值指定对应的辅助文字。 texts 为一个数组，长度应等于评级图标个数。 未匹配文字的评级，则不展示文字部分。

play

```
<template>
    <FSpace>
        <FRate v-model="value" :texts="texts" show-text />
    </FSpace>

    <FSpace>
        <FRate v-model="value2" :texts="texts2" show-text />
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(3);
const value2 = ref(3);

const texts = ['oops', 'disappointed', 'normal', 'good', 'great'];
const texts2 = ['oops', 'disappointed', 'normal'];
</script>
```

### 事件监听 [​]()

提供 change，clear 事件 注意一点，clear 事件也会触发 change 事件，会将 value 设置为 0

play

```
<template>
    <FRate
        v-model="value"
        allow-half
        clearable
        @change="changeValue"
        @clear="clear"
    />
    <span>value值：{{ value }}</span>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(2.5);

const changeValue = (val) => {
    console.log('rate组件value变更:', val);
};

const clear = () => {
    console.log('rate组件value清除');
};
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue / v-model|已激活图标个数|`number`|`0`|
|allowHalf|是否启用半星模式|`boolean`|`false`|
|colorFilled|颜色填充风格|`boolean`|`true`|
|readonly|是否只读|`boolean`|`false`|
|count|图标个数|`number`|`5`|
|size|尺寸，可选值为 `small` `medium` `large`|`string`|`medium`|
|color|颜色|`string`|`danger`|
|clearable|是否可以清除|`boolean`|`false`|
|texts|辅助文字|`string[]`|`-`|
|showText|是否展示文字|`boolean`|`false`|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|在组件 value 值变更时触发|(newValue) => void|
|clear|`clearable` 属性生效，清空 value 时触发|() => void|

## Slots [​]()

|slot 名称|说明|
|---|---|
|content|自定义显示内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/rate.html