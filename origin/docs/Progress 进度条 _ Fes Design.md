# Progress 进度条 [​]()

展示当前任务进度，将进度可视化

## 组件注册 [​]()

js

```
import { FProgress } from '@fesjs/fes-design';

app.use(FProgress);
```

## 代码演示 [​]()

### 基础用法 [​]()

水平进度条，进度条宽度占满父组件。 需要注意水平进度条百分比內显，需要height大于等于12px。

play

```
<template>
    <FSpace>
        <FForm :labelWidth="100">
            <FFormItem label="进度条类型:">
                <FRadioGroup
                    v-model="type"
                    :options="[
                        { label: '水平进度条(默认)', value: 'line' },
                        { label: '环形进度条', value: 'circle' },
                    ]"
                />
            </FFormItem>
            <FFormItem label="百分比:">
                <FInputNumber
                    v-model="percent"
                    :min="0"
                    :max="100"
                    :step="10"
                />
                <span class="unit">%</span>
            </FFormItem>
            <FFormItem v-if="type === 'line'" label="高度:">
                <FInputNumber
                    v-model="height"
                    :min="8"
                    :max="50"
                />
                <span class="unit">px</span>
            </FFormItem>
            <FFormItem v-if="type === 'circle'" label="宽度:">
                <FInputNumber v-model="width" :min="8" :max="50" />
                <span class="unit">px</span>
            </FFormItem>
            <FFormItem v-if="type === 'circle'" label="环形直径:">
                <FInputNumber v-model="circleSize" />
                <span class="unit">px</span>
            </FFormItem>
            <FFormItem v-if="type === 'line'" label="百分比外显:">
                <FRadioGroup
                    v-model="showOutPercent"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                />
            </FFormItem>
            <FFormItem v-if="type === 'line'" label="百分比内显:">
                <FRadioGroup
                    v-model="showInnerPercent"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                    :disabled="height < 12"
                />
            </FFormItem>
            <FFormItem v-if="type === 'circle'" label="显示文案:">
                <FRadioGroup
                    v-model="showCircleText"
                    :options="[
                        { label: '否(默认)', value: false },
                        { label: '是', value: true },
                    ]"
                />
            </FFormItem>
            <FFormItem label="颜色:">
                <FInput placeholder="请输入颜色或者色号" @change="change" />
            </FFormItem>
        </FForm>
    </FSpace>
    <FDivider />
    <FProgress
        :type="type"
        :percent="percent"
        :showOutPercent="showOutPercent"
        :showInnerPercent="showInnerPercent"
        :height="height"
        :width="width"
        :color="color"
        :circleSize="circleSize"
        :showCircleText="showCircleText"
    />
</template>

<script setup>
import { ref } from 'vue';

const type = ref('line');

const percent = ref(60);

const height = ref(8);

const width = ref(8);

const showOutPercent = ref(false);

const showInnerPercent = ref(false);

const color = ref();

const circleSize = ref(160);

const showCircleText = ref(false);

const change = (val) => {
    color.value = val;
};
</script>

<style>
.unit {
    margin-left: 8px;
}
</style>
```

### 文案插槽 [​]()

在条形进度条场景下，代替外显的百分比展示。注意前提是要开启外显百分比。 环形进度条场景，需要开启showCircleText。

play

```
<template>
    <FProgress :percent="percent" showOutPercent>
        <template #text>
            <span class="text">这是自定义文案</span>
        </template>
    </FProgress>
    <FDivider />
    <FProgress :percent="percent" type="circle" showCircleText>
        <template #text>
            <div class="text">
                <div>{{ percent }}</div>
                <div>这是自定义文案</div>
            </div>
        </template>
    </FProgress>
</template>

<script setup>
import { ref } from 'vue';

const percent = ref(60);
</script>

<style scoped>
.text {
    color: green;
    font-size: 14px;
    text-align: center;
}
</style>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|type|进度条类型，可选值为 'line' 或 'circle'|`string`|`line`|
|percent|进度百分比|`number`|`0`|
|color|进度条颜色|`string`|`-`|
|showInnerPercent|是否在进度条内部显示百分比（仅在type为line生效）|`boolean`|`false`|
|showOutPercent|是否在进度条外部显示百分比（仅在type为line生效）|`boolean`|`false`|
|height|进度条高度（仅在type为line生效）|`number`|`8`|
|width|进度条宽度（仅在type为circle生效）|`number`|`8`|
|circleSize|环形进度条的直径大小（仅在type为circle生效）|`number`|`160`|
|showCircleText|是否在环形进度条中显示文本（仅在type为circle生效）|`boolean`|`false`|

## Slots [​]()

|slot 名称|说明|
|---|---|
|text|自定义文本部分显示内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/progress.html