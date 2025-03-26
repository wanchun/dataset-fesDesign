# Ellipsis 文本省略 [​]()

## 组件注册 [​]()

js

```
import { FEllipsis } from '@fesjs/fes-design';

app.use(FEllipsis);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FEllipsis
        :content="text"
        :tooltip="{ popperClass: 'a', showAfter: 500 }"
        style="max-width: 240px"
    />
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const text = ref(
            '住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪',
        );

        return {
            text,
        };
    },
};
</script>
```

### 最大行数 [​]()

play

```
<template>
    <FEllipsis :line="2">
        电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
        百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
    </FEllipsis>
</template>
```

### 定制 Tooltip 内容 [​]()

play

```
<template>
    <FEllipsis :line="2">
        电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
        百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
        <template #tooltip>
            <div style="width: 200px; text-align: center">
                <h1>《静夜思》</h1>
                <p>床前明月光，疑是地上霜。</p>
                <p>举头望明月，低头思故乡。</p>
            </div>
        </template>
    </FEllipsis>
</template>
```

## Ellipsis Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|line|超出几行后省略|`string | number`|`1`|
|tooltip|当文本隐藏时，通过 `Tooltip` 组件展示全部内容，默认延迟 0.5s。如果 `tooltip` 为 false，则禁止|`boolean | object`|`{showAfter: 500}`|
|content|文本内容|`string | number`|`-`|

## Ellipsis Slots [​]()

|名称|说明|
|---|---|
|default|文本内容，当使用插槽时无法监听内容变化而更新省略组件，推荐使用 content 属性|
|tooltip|自定义的 tooltip|

阅读原文：http://fe.weoa.com/fes-design/zh/components/ellipsis.html