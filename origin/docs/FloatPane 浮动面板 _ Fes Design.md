# 浮动面板 [​]()

浮动面板

## 组件注册 [​]()

js

```
import { FFloatPane } from '@fesjs/fes-design';

app.use(FFloatPane);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FButton @click="show[0] = true">常规</FButton>
        <FButton @click="show[1] = true">自定义位置缓存KEY</FButton>
        <FButton @click="handleResetPosition">清除位置缓存</FButton>
    </FSpace>
    <FDivider />
    <FButton @click="show[2] = true">不可拖动</FButton>
    <FDivider />
    <FButton @click="show[3] = true">无位置缓存</FButton>

    <FFloatPane ref="floatPane1Ref" v-model:visible="show[0]" title="常规" displayDirective="show" @afterEnter="handleAfterEnter" @afterLeave="handleAfterLeave">
        <div style="padding: 8px">
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </div>
    </FFloatPane>
    <FFloatPane ref="floatPane2Ref" v-model:visible="show[1]" :zIndex="0" title="自定义缓存KEY" cachePositionKey="float-pane-custom" displayDirective="show" @afterEnter="handleAfterEnter" @afterLeave="handleAfterLeave">
        <div style="padding: 8px">
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </div>
    </FFloatPane>
    <FFloatPane v-model:visible="show[2]" title="不可拖动" :draggable="false" @afterEnter="handleAfterEnter" @afterLeave="handleAfterLeave">
        <div style="padding: 8px">
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </div>
    </FFloatPane>
    <FFloatPane v-model:visible="show[3]" title="无位置缓存" cachePosition="" displayDirective="if" @afterEnter="handleAfterEnter" @afterLeave="handleAfterLeave">
        <div style="padding: 8px">
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </div>
    </FFloatPane>
</template>

<script setup>
import { reactive, ref } from 'vue';

const show = reactive([]);

const floatPane1Ref = ref(null);
const floatPane2Ref = ref(null);

const handleAfterEnter = (e) => {
    console.log('[floatPane.common] handleAfterEnter, e:', e);
};
const handleAfterLeave = (e) => {
    console.log('[floatPane.common] handleAfterLeave, e:', e);
};

const handleResetPosition = () => {
    floatPane1Ref.value?.resetPosition();
    floatPane2Ref.value?.resetPosition();
};
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|visible|v-model:visible，是否显示浮动面板|Boolean|`false`|
|draggable|是否可拖动|Boolean|`true`|
|displayDirective|选择渲染使用的指令，if 对应 v-if，show 对应 v-show，使用 show 的时候不会被重置|string|`show`|
|title|标题|String|`-`|
|width|宽度|String/Number|520|
|zIndex|浮层优先级|Number|3000|
|defaultPosition|默认浮动面板位置，注：仅 `px` 单位支持边界检测。|PanePosition|`{top: '50px', right: '50px'}`|
|cachePosition|缓存拖动位置|`session` `local`|`local`|
|contentClass|可用于设置内容的类名|String|`-`|
|getContainer|指定 `FloatPane` 挂载的 HTML 节点|() => HTMLElement|`() => document.body`|

### PanePosition [​]()

ts

```
interface PanePosition {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}
```

## Event [​]()

|事件名称|说明|回调参数|
|---|---|---|
|afterEnter|出现后的回调|event|
|afterLeave|关闭后的回调|event|

## 方法 [​]()

|事件名称|说明|回调参数|
|---|---|---|
|show|显示浮窗|无|
|hide|隐藏浮窗|无|
|resetPosition|重置浮窗位置|无|

## Slots [​]()

|名称|说明|
|---|---|
|default|浮动面板的内容|
|title|浮动面板的标题|

阅读原文：http://fe.weoa.com/fes-design/zh/components/float-pane.html