# TimePicker 时间选择 [​]()

时间选择组件

## 组件注册 [​]()

js

```
import { FTimePicker } from '@fesjs/fes-design';

app.use(FTimePicker);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace vertical>
        <FTimePicker
            style="width: 200px"
            modelValue="22:22:22"
            placeholder="请输入"
        />
    </FSpace>
</template>
```

### 自定义下方控制区域 [​]()

play

```
<template>
    <FSpace vertical>
        <FTimePicker
            v-model="currentTime"
            v-model:open="isOpen"
            class="time-picker"
            placeholder="请输入"
        >
            <template #addon="slotProps">
                <div style="text-align: right; padding: 8px 12px">
                    <FButton
                        type="primary"
                        size="small"
                        @click="confirm(slotProps.activeTime)"
                    >
                        happy时刻
                    </FButton>
                </div>
            </template>
        </FTimePicker>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const currentTime = ref();
        const isOpen = ref(false);
        const confirm = (activeTime) => {
            console.log('[timePicker.addon] [confirm] activeTime:', activeTime);
            currentTime.value = activeTime;
            isOpen.value = false;
        };
        return {
            currentTime,
            isOpen,
            confirm,
        };
    },
};
</script>

<style>
.time-picker {
    width: 200px;
}
</style>
```

### 不带确定按钮 [​]()

play

```
<template>
    <FSpace vertical>
        <FTimePicker
            v-model="time"
            placeholder="请输入"
            :disabledHours="disabledHours"
            :control="false"
        />
    </FSpace>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup() {
        const time = ref('22:22:22');
        const disabledHours = (hour) => {
            return hour === 1;
        };
        watch(time, () => {
            console.log('[timePicker.control] [watch] time.value:', time.value);
        });
        return {
            time,
            disabledHours,
        };
    },
};
</script>
```

### 禁用 [​]()

play

```
<template>
    <FSpace vertical>
        <FTimePicker placeholder="请输入" disabled />
        <FTimePicker modelValue="23:00:00" disabled />
    </FSpace>
</template>
```

### 格式 [​]()

play

```
<template>
    <FSpace vertical>
        <FTimePicker placeholder="请输入" format="HH:mm" />
    </FSpace>
</template>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue|日期的值，可以使用 v-model 实现数据的双向绑定|string|\-|
|open|面版是否打开，可以使用 v-model:open 实现数据的双向绑定|boolean|`false`|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|disabled|禁用|boolean|`false`|
|clearable|是否展示清除按钮|boolean|`true`|
|placeholder|占位内容，数组仅用于范围选择时自定义开始和结束的占位内容|string|\-|
|format|时间格式|string|`HH:mm:ss`|
|hourStep|小时选项间隔|number|`1`|
|minuteStep|分钟选项间隔|number|`1`|
|secondStep|秒钟选项间隔|number|`1`|
|disabledHours|禁止选择部分小时选项|(hour: number) => boolean|\-|
|disabledMinutes|禁止选择部分分钟选项|(hour: number, minute: number) => boolean|\-|
|disabledSeconds|禁止选择部分秒钟选项|(hour: number, minute: number, second: number) => boolean|\-|
|control|是否显示下方控制区域|boolean|true|
|getContainer|指定下拉选项挂载的 HTML 节点|() => HTMLElement|`() => document.body`|

## Slots [​]()

|属性|说明|
|---|---|
|addon|选择框底部显示自定义的内容|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|用户确认选定的值时触发|组件绑定值|
|blur|失去焦点时触发|事件|
|focus|获取焦点时触发|事件|

阅读原文：http://fe.weoa.com/fes-design/zh/components/timePicker.html