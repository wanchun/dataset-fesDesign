# Text 文本 [​]()

用于普通文本展示。

## 组件注册 [​]()

js

```
import { FText } from '@fesjs/fes-design';

app.use(FText);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FText>Default</FText>
        <FDivider vertical />
        <FText type="success">Success</FText>
        <FDivider vertical />
        <FText type="info">Info</FText>
        <FDivider vertical />
        <FText type="warning">Warning</FText>
        <FDivider vertical />
        <FText type="danger">Danger</FText>
    </FSpace>
</template>
```

### 尺寸 [​]()

play

```
<template>
    <FSpace>
        <FText size="large">Large</FText>
        <FDivider vertical />
        <FText>Middle</FText>
        <FDivider vertical />
        <FText size="small">Small</FText>
    </FSpace>
</template>
```

### 字体效果 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="字体加粗：">
            <FRadioGroup v-model="isStrong">
                <FRadio :value="false">否</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="字体倾斜：">
            <FRadioGroup v-model="IsItalic">
                <FRadio :value="false">否</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FText :strong="isStrong" :italic="IsItalic">
            道生一，一生二，二生三，三生万物
        </FText>
    </FSpace>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isStrong = ref(true);
const IsItalic = ref(true);
</script>
```

### 自定义元素标签 [​]()

play

```
<template>
    <FSpace vertical>
        <FText>span</FText>
        <FText tag="p">This is a paragraph.</FText>
        <FText tag="b">Bold</FText>
        <FText tag="i">Italic</FText>
        <FText>
            This is
            <FText tag="sub" size="small">subscript</FText>
        </FText>
        <FText>
            This is
            <FText tag="sup" size="small">superscript</FText>
        </FText>
        <FText tag="ins">Inserted</FText>
        <FText tag="del">Deleted</FText>
        <FText tag="mark">Marked</FText>
    </FSpace>
</template>
```

### 混合使用 [​]()

play

```
<template>
    <FSpace vertical>
        <FText>
            This is text mixed icon
            <BellOutlined />
            and component
            <FButton>Button</FButton>
            and
            <FText>a subtext</FText>
            .
        </FText>
        <FEllipsis :tooltip="{ showAfter: 500 }" style="max-width: 240px">
            <FText>
                This is text mixed icon
                <BellOutlined />
                and component
                <FButton>Button</FButton>
                and
                <FText>a subtext</FText>
                .
            </FText>
        </FEllipsis>
    </FSpace>
</template>

<script setup>
import { BellOutlined } from '@fesjs/fes-design/icon';
</script>
```

### 颜色渐变 [​]()

通过`gradient`，可以设置文字的颜色渐变

play

```
<template>
    <div>
        <FText :gradient="gradientColor1"> 这是渐变色的文本，角度为数值类型 </FText>
    </div>
    <div>
        <FText :gradient="gradientColor2"> 这是渐变色的文本，角度为字符串类型 </FText>
    </div>
    <div>
        <FText gradient="#5384ff"> 这是纯色的文本 </FText>
    </div>
    <div>
        <FText gradient="#722ed1"> 这是纯色文本，没有渐变角度文本 </FText>
    </div>
</template>

<script setup>
const gradientColor1 = {
    deg: 90,
    from: '#5384ff',
    to: '#00cb91',
};

const gradientColor2 = {
    deg: '90deg',
    from: '#5384ff',
    to: '#00cb91',
};
</script>
```

## Text Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|type|类型，可选值为`default` `success` `info` `warning` `danger`|`string`|`default`|
|size|尺寸，可选值为`small` `middle` `large`|`string`|`middle`|
|strong|是否字体加粗|`boolean`|`false`|
|italic|是否字体倾斜|`boolean`|`false`|
|tag|自定义元素标签，可选值为`span` `div` `p` `h1` `h2` `h3` 等|`string`|`span`|
|gradient|文本渐变色配置|`string/Object<Gradient>`|`-`|

## Text Slots [​]()

|slot 名称|说明|
|---|---|
|default|默认内容|

## Gradient Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|from|起始颜色|string|`-`|
|to|结束颜色|string|`-`|
|deg|渐变角度，默认为 0，即从上之下渐变|number/string|`0`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/text.html