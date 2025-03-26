# Empty 空数据 [​]()

空数据时的占位提示。

## 组件注册 [​]()

js

```
import { FEmpty } from '@fesjs/fes-design';

app.use(FEmpty);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FEmpty />
</template>
```

### 自定义图片(属性) [​]()

通过属性自定义图片。

play

```
<template>
    <FEmpty :image-src="url" :image-style="{ width: '300px' }" description="自定义图片(属性)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const url = ref('/images/empty.svg');
</script>
```

### 自定义图片(插槽) [​]()

通过插槽自定义图片。

play

```
<template>
    <FEmpty image-style="width: 200px;" description="自定义图片(插槽)">
        <template #image>
            <img :src="url" alt="empty">
        </template>
    </FEmpty>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const url = ref('/images/empty.svg');
</script>
```

### 下拉选项场景 [​]()

在其他组件中的应用。

play

```
<template>
    <FSelect>
        <template #empty>
            <FEmpty image-style="width: 80px;" description="暂无内容" />
        </template>
    </FSelect>
</template>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 自定义底部内容 [​]()

play

```
<template>
    <FEmpty>
        <template #description>
            <span>自定义插槽内容</span>
        </template>
        <FButton type="primary">退出登录</FButton>
    </FEmpty>
</template>

<script lang="ts" setup>
</script>
```

## API [​]()

### 属性 Attributes [​]()

|属性名|描述|类型|默认值|
|---|---|---|---|
|imageSrc|图像地址，优先级小于 solt|`string`|\-|
|imageStyle|图像自定义样式|`CSSProperties`|\-|
|description|描述信息，优先级小于 solt|`string`|\-|

### 插槽 Slots [​]()

|插槽名称|描述|
|---|---|
|default|作为底部内容的内容|
|image|作为图像的内容|
|description|作为描述的内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/empty.html