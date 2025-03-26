# BackTop 回到顶部 [​]()

返回页面或者指定容器滚动条顶部的操作按钮。

## 组件注册 [​]()

js

```
import { FBackTop } from '@fesjs/fes-design';

app.use(FBackTop);
```

## 代码演示 [​]()

### 基础用法 [​]()

通过滑动来查看容器右下角的按钮。

play

```
<template>
    <FBackTop />
</template>

<script setup>
</script>
```

### 自定义内容及位置 [​]()

通过滑动来查看容器右下角的按钮。

play

```
<template>
    <FBackTop :right="40" :bottom="100" :visibilityHeight="600">
        <div
            style="
                width: 200px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                font-size: 14px;
            "
        >
            自定义
        </div>
    </FBackTop>
</template>

<script setup>
</script>
```

### 自定义容器 [​]()

play

```
<template>
    <div style="position: relative;">
        <div ref="containerRef" class="back-top-container">
            <div class="back-top-content" />
        </div>
        <FBackTop class="back-top-absolute" :target="containerRef" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const containerRef = ref(null);
</script>

<style lang="less">
.back-top-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: scroll;

    .back-top-content {
        width: 100%;
        height: 1200px;
        background-color: var(--f-component-bg-color);
    }
}
.back-top-absolute {
    position: absolute !important;
}
</style>
```

## BackTop Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|target|触发滚动的对象|`HTMLElement`|`document.documentElement`|
|visibilityHeight|滚动高度达到此参数值才出现|`number`|`200`|
|right|控制其显示位置，距离容器右边距离|`number`|`40`|
|bottom|控制其显示位置，距离容器底部距离离|`number`|`40`|

## BackTop Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|click|点击按钮触发的事件|(event: MouseEvent) => void|

## BackTop Slots [​]()

|插槽名称|说明|
|---|---|
|default|自定义默认内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/backTop.html