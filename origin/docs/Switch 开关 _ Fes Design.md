# Switch 开关 [​]()

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 组件注册 [​]()

js

```
import { FSwitch } from '@fesjs/fes-design';

app.use(FSwitch);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSwitch v-model="val" @change="handleChange" />
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    setup() {
        const val = ref();
        const handleChange = (value) => {
            console.log('[switch.common] [handleChange] value:', value);
        };
        onMounted(() => {
            val.value = true;
        });
        return {
            val,
            handleChange,
        };
    },
};
</script>
```

### 文字描述 [​]()

play

```
<template>
    <FSwitch>
        <template #active> 开 </template>
        <template #inactive> 关 </template>
    </FSwitch>
</template>
```

### 扩展的 `value` 类型 [​]()

play

```
<template>
    <FSwitch v-model="value" :activeValue="{ a: 1 }" :inactiveValue="{ b: 1 }" />
    <div>选中的值： {{ value }}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const value = ref();
        return {
            value,
        };
    },
});
</script>
```

### 禁用状态 [​]()

play

```
<template>
    <FSwitch disabled>
        <template #active> 开 </template>
        <template #inactive> 关 </template>
    </FSwitch>
</template>
```

### 切换前判断 [​]()

play

```
<template>
    <FSwitch :beforeChange="beforeChange" />
</template>

<script>
export default {
    setup() {
        const beforeChange = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, 2000);
            });
        };
        return {
            beforeChange,
        };
    },
};
</script>
```

### 尺寸 [​]()

play

```
<template>
    <FSpace>
        <FSwitch />
        <FSwitch size="small" />
    </FSpace>
</template>
```

## Switch Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|activeValue|switch 打开时的值|boolean / string / array / object/ number|`true`|
|beforeChange|switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换|function|\-|
|disabled|是否禁用|boolean|`false`|
|inactiveValue|switch 关闭时的值|boolean / string / array / object/ number|`false`|
|v-model|绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型|boolean / string / array / object/ number|\-|
|size|大小，可选有'normal' 、 'small'|string|`normal`|

## Switch Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|switch 状态发生变化后的回调函数|新状态的值|

## Switch Slots [​]()

|名称|说明|
|---|---|
|active|激活时显示的内容|
|inactive|不激活时显示的内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/switch.html