# inputNumber 数字输入框 [​]()

通过鼠标或者键盘输入内容，仅能输入数字。

## 组件注册 [​]()

js

```
import { FInputNumber } from '@fesjs/fes-design';

app.use(FInputNumber);
```

## 代码演示 [​]()

### 标准使用 [​]()

play

```
<template>
    <FForm>
        <FFormItem label="显示步进箭头">
            <FSwitch v-model="showStepAction" />
        </FFormItem>
    </FForm>
    <FInputNumber
        v-model="val"
        :max="100"
        :showStepAction="showStepAction"
        :autofocus="true"
    />
</template>

<script setup>
import { ref } from 'vue';

const val = ref(10);
const showStepAction = ref(true);
</script>
```

### 禁用状态 [​]()

play

```
<template>
    <FSpace>
        <FInputNumber :modelValue="1" disabled />
    </FSpace>
</template>
```

### 设置最大值最小值 [​]()

设定最大值为 100，最小值为 10。

play

```
<template>
    <FSpace align="center">
        <FInputNumber v-model="num" :min="min" :max="max" />
        当前值: {{ num }}
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const num = ref();

const min = 10;
const max = 100;
</script>
```

### 设置精度 [​]()

设置精度为 2。

play

```
<template>
    <FSpace align="center">
        <FInputNumber v-model="num" :precision="precision" />
        当前值: {{ num }}
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const num = ref();

const precision = 2;
</script>
```

### 设置步长 [​]()

设置步长为 5，最大值为 12,精度为 2。

play

```
<template>
    <FSpace>
        <FInputNumber
            :step="step"
            :max="12"
            :precision="precision"
        />
    </FSpace>
</template>

<script lang="ts">
export default {
    setup() {
        const precision = 2;
        const step = 5;
        return {
            precision,
            step,
        };
    },
};
</script>
```

### 设置前置后置 [​]()

play

```
<template>
    <FSpace>
        <FInputNumber>
            <template #prefix>¥</template>
        </FInputNumber>
        <FInputNumber>
            <template #suffix>%</template>
        </FInputNumber>
    </FSpace>
</template>

<script lang="ts">
export default {
    setup() {
        const precision = 2;
        const step = 5;
        return {
            precision,
            step,
        };
    },
};
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|:---|:---|:---|:---|
|modelValue|v-model 双向绑定|number|\-|
|min|计数器最小值|number|`-infinity`|
|max|计数器最大值|number|`infinity`|
|step|计数器步长|number|`1`|
|showStepAction|显示步进按钮|boolean|`true`|
|disabled|是否禁用|boolean|`false`|
|placeholder|输入框默认提示|string|\-|
|precision|数值精度|number|\-|
|autofocus|是否自动获取焦点|boolean|`false`|

## Slots [​]()

|属性|说明|
|---|---|
|prefix|前缀|
|suffix|后缀|

## Events [​]()

|事件名称|说明|回调参数|
|:---|:---|:---|
|change|绑定值被改变时触发|currentValue, oldValue|
|blur|在组件 Input 失去焦点时触发|(event: Event)|
|focus|在组件 Input 获得焦点时触发|(event: Event)|

阅读原文：http://fe.weoa.com/fes-design/zh/components/inputNumber.html