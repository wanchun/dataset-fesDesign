# Space 间距 [​]()

给组件之间提供统一的间距。

## 组件注册 [​]()

js

```
import { FSpace } from '@fesjs/fes-design';

app.use(FSpace);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <!-- 注释 -->
        <FButton>
            Long! Long! Long! Long! Long! Long! Long! Long! Long! Long! Cross
            Cross the line!
        </FButton>
    </FSpace>
</template>
```

### 水平对齐 [​]()

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="是否换行:">
            <FRadioGroup
                v-model="wrap"
                :options="[
                    { label: '是(默认)', value: true },
                    { label: '否', value: false },
                ]"
            />
        </FFormItem>
        <FFormItem label="垂直排列:">
            <FRadioGroup
                v-model="align"
                :options="[
                    { label: 'start', value: 'start' },
                    { label: 'end', value: 'end' },
                    { label: 'center', value: 'center' },
                    { label: 'baseline', value: 'baseline' },
                    { label: 'stretch', value: 'stretch' },
                ]"
            />
        </FFormItem>
        <FFormItem label="水平排列:">
            <FRadioGroup
                v-model="justify"
                :options="[
                    { label: 'start(默认)', value: 'start' },
                    { label: 'end', value: 'end' },
                    { label: 'center', value: 'center' },
                    { label: 'space-around', value: 'space-around' },
                    { label: 'space-between', value: 'space-between' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace :justify="justify" :align="align" :wrap="wrap">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <!-- 注释 -->
        <FButton>
            Long! Long! Long! Long! Long! Long! Long! Long! Long! Long! Cross
            Cross the line!
        </FButton>
    </FSpace>

    <FDivider />

    <div class="space-wrapper">
        <FSpace :justify="justify" :align="align" :wrap="wrap">
            Text
            <FButton>Button</FButton>

            <div class="box-wrapper">
                <FSpace vertical>
                    Text
                    <FButton>Button</FButton>
                </FSpace>
            </div>
        </FSpace>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const align = ref('center');
const justify = ref('start');
const wrap = ref(true);
</script>

<style scoped>
.space-wrapper {
    width: 100%;
    padding: 8px;
    border: 1px dashed #ccc;
}
.box-wrapper {
    border: 1px dashed #ccc;
    padding: 8px;
}
</style>
```

### 垂直对齐 [​]()

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="垂直排列:">
            <FRadioGroup
                v-model="align"
                :options="[
                    { label: 'start', value: 'start' },
                    { label: 'end', value: 'end' },
                    { label: 'center', value: 'center' },
                    { label: 'baseline', value: 'baseline' },
                    { label: 'stretch', value: 'stretch' },
                ]"
            />
        </FFormItem>
        <FFormItem label="水平排列:">
            <FRadioGroup
                v-model="justify"
                :options="[
                    { label: 'start(默认)', value: 'start' },
                    { label: 'end', value: 'end' },
                    { label: 'center', value: 'center' },
                    { label: 'space-around', value: 'space-around' },
                    { label: 'space-between', value: 'space-between' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace
        class="space-wrapper"
        vertical
        :justify="justify"
        :align="align"
        style="min-height: 200px"
    >
        <FButton>Text</FButton>
        <FButton>Checkbox</FButton>
        <FButton>Input</FButton>
        <FButton>
            Long! Long! Long! Long! Long! Long! Long! Long! Long! Long! Cross
            Cross the line!
        </FButton>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const align = ref('');
const justify = ref('start');
</script>

<style scoped>
.space-wrapper {
    border: 1px dashed #ccc;
    padding: 8px;
}
</style>
```

### 默认间距 [​]()

play

```
<template>
    <FRadioGroup v-model="size">
        <FRadio value="xsmall">xsmall</FRadio>
        <FRadio value="small">small</FRadio>
        <FRadio value="middle">middle</FRadio>
        <FRadio value="large">large</FRadio>
    </FRadioGroup>

    <FDivider />

    <FSpace :size="size">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
    </FSpace>

    <FDivider />

    <FSpace vertical :size="size">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
    </FSpace>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('small');
</script>
```

### 自定义间距 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="间距类型：">
            <FRadioGroup v-model="sizeType">
                <FRadio value="same">水平和垂直相同</FRadio>
                <FRadio value="diff">水平和垂直不同</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem v-if="sizeType === 'same'" label="水平和垂直间距：">
            <FInputNumber
                v-model="sizeHV"
                :min="5"
                :max="50"
                :step="5"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem v-if="sizeType === 'diff'" label="水平间距：">
            <FInputNumber
                v-model="sizeH"
                :min="5"
                :max="50"
                :step="5"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem v-if="sizeType === 'diff'" label="垂直间距：">
            <FInputNumber
                v-model="sizeV"
                :min="5"
                :max="50"
                :step="5"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace :size="size">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
    </FSpace>

    <FDivider />

    <FSpace vertical :size="size">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
    </FSpace>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

const sizeType = ref('same');
const sizeHV = ref(20);
const sizeH = ref(30);
const sizeV = ref(10);

const size = computed(() => {
    if (sizeType.value === 'same') {
        return sizeHV.value;
    }
    return [sizeH.value, sizeV.value];
});
</script>
```

### 内联元素 [​]()

play

```
<template>
    <FRadioGroup v-model="inline">
        <FRadio :value="false">flex</FRadio>
        <FRadio :value="true">inline-flex</FRadio>
    </FRadioGroup>

    <FDivider />

    <FSpace class="space-wrapper" :inline="inline">
        <FButton>Text</FButton>
        <FButton>Text</FButton>
        <FButton>Text</FButton>
    </FSpace>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inline = ref(false);
</script>

<style scoped>
.space-wrapper {
    border: 1px dashed #ccc;
}
</style>
```

## Space Props [​]()

|参数|说明|类型|默认值|
|---|---|---|---|
|align|垂直排列方式，可选值为 `start` `end` `center` `baseline` `stretch` `flex-start` `flex-end`|string|\-|
|inline|是否为行内元素|boolean|`false`|
|itemStyle|节点样式|string / object|\-|
|justify|水平排列方式，可选值为 `start` `end` `center` `space-around` `space-between`|string|`start`|
|size|为数字或字符串时，是垂直和水平间距；为数组时，是 \[垂直间距, 水平间距\]，字符串可选值为 `xsmall` `small` `middle` `large`|string / number / \[number, number\]|`small`|
|vertical|是否垂直布局|boolean|`false`|
|wrap|是否超出换行|boolean|`true`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/space.html