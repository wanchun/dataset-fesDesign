# Descriptions 描述列表 [​]()

成组展示多个只读字段。

## 组件注册 [​]()

js

```
import { FDescriptions } from '@fesjs/fes-design';

app.use(FDescriptions);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm labelWidth="150px">
        <FFormItem label="尺寸:">
            <FRadioGroup
                v-model="size"
                :options="[
                    { label: 'small(默认)', value: 'small' },
                    { label: 'middle', value: 'middle' },
                    { label: 'large', value: 'large' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FDescriptions title="一二三向前冲" :size="size">
            <FDescriptionsItem label="墓封"> 鬼切 </FDescriptionsItem>
            <FDescriptionsItem label="墓封">魂镰</FDescriptionsItem>
            <FDescriptionsItem label="墓封">寒钉</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">MMing</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">Nannnn</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">HSmm</FDescriptionsItem>
        </FDescriptions>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const size = ref('small');
</script>
```

### label 在上方 [​]()

play

```
<template>
    <FSpace vertical>
        <FDescriptions title="一二三向前冲" labelPlacement="top">
            <FDescriptionsItem label="墓封"> 鬼切 </FDescriptionsItem>
            <FDescriptionsItem label="墓封">魂镰</FDescriptionsItem>
            <FDescriptionsItem label="墓封">寒钉</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">MMing</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">Nannnn</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">HSmm</FDescriptionsItem>
        </FDescriptions>
    </FSpace>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>
```

### 跨度 [​]()

play

```
<template>
    <FSpace vertical>
        <FDescriptions title="一二三向前冲">
            <FDescriptionsItem label="墓封" :span="2">
                很长的鬼切，很长长长长长长长....
            </FDescriptionsItem>
            <FDescriptionsItem label="墓封">魂镰</FDescriptionsItem>
            <FDescriptionsItem>
                <template #label>吃鸡</template>
                MMing
            </FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">Nannnn</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">HSmm</FDescriptionsItem>
        </FDescriptions>
    </FSpace>
</template>
```

### 边框 [​]()

play

```
<template>
    <FSpace vertical>
        <FDescriptions title="一二三向前冲" labelPlacement="top" bordered>
            <FDescriptionsItem label="墓封">鬼切</FDescriptionsItem>
            <FDescriptionsItem label="墓封">魂镰</FDescriptionsItem>
            <FDescriptionsItem label="墓封">寒钉</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">MMing</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">Nannnn</FDescriptionsItem>
        </FDescriptions>

        <FDescriptions title="一二三向前冲" labelPlacement="left" bordered>
            <FDescriptionsItem label="墓封">鬼切</FDescriptionsItem>
            <FDescriptionsItem label="墓封">魂镰</FDescriptionsItem>
            <FDescriptionsItem label="墓封">寒钉</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">MMing</FDescriptionsItem>
            <FDescriptionsItem label="吃鸡">Nannnn</FDescriptionsItem>
        </FDescriptions>
    </FSpace>
</template>
```

## Props [​]()

### Descriptions Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|column|设置总列数|number|3|
|contentStyle|内容样式|string / object|\-|
|labelAlign|label 对齐方式|`left` `right` `center`|`left`|
|labelPlacement|label 位置|`top` `left`|`left`|
|labelStyle|label 样式|string / object|\-|
|separator|分隔符，`labelPlacement` 为 `left` 有效|string|':'|
|title|标题|string|\-|
|bordered|边框|boolean|false|
|size|尺寸|`small` `middle` `large`|`small`|

### DescriptionItem Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|contentStyle|内容样式|string / object|\-|
|label|label 值|string|\-|
|labelStyle|label 样式|string / object|\-|
|span|所占列数（建议不设置最后一项 Item，由组件内部自动计算）|number|1|

## Slots [​]()

### Descriptions Slots [​]()

|名称|说明|参数|
|---|---|---|
|default|描述内容|`()`|
|header|描述标题|`()`|

### DescriptionItem Slots [​]()

|名称|说明|参数|
|---|---|---|
|default|描述项内容|`()`|
|label|描述项 label 值|`()`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/descriptions.html