# Calendar 日历 [​]()

日历一般用于需要按照日期规划日程并能够按照日期记录和查看日程安排的场景中

## 组件注册 [​]()

js

```
import { FCalendar } from '@fesjs/fes-design';

app.use(FCalendar);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FCalendar
        :shortcuts="[
            {
                label: '今天',
                time: Date.now(),
            },
            {
                label: '星期四',
                time: () => {
                    const today = new Date();
                    const crazyDay = new Date();
                    crazyDay.setDate(today.getDate() + (4 - today.getDay()));
                    return crazyDay.getTime();
                },
            },
        ]"
    />
</template>
```

### 按年展示 [​]()

play

```
<template>
    <FCalendar mode="month" />
</template>
```

### 分割线的展示 [​]()

play

```
<template>
    <FRadioGroup
        v-model="splitLineVisible"
        :options="[
            { label: '展示(默认)', value: true },
            { label: '不展示', value: false },
        ]"
    />

    <FDivider />

    <FCalendar
        :splitLine="splitLineVisible"
        :shortcuts="[
            {
                label: '今天',
                time: Date.now(),
            },
            {
                label: '星期三',
                time: () => {
                    const today = new Date();
                    const kingDay = new Date();
                    kingDay.setDate(today.getDate() + (3 - today.getDay()));
                    return kingDay.getTime();
                },
            },
        ]"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const splitLineVisible = ref<boolean>(false);
</script>
```

### 自定义日历附加内容 [​]()

play

```
<template>
    <FCalendar
        :shortcuts="[
            {
                label: '今天',
                time: Date.now(),
            },
        ]"
    >
        <template #cellMain="{ date, mode }">
            <FTag
                v-if="mode === 'date' && isKingDay(date)"
                size="small"
                type="warning"
                effect="dark"
            >
                1+1
            </FTag>
        </template>
        <template #cellAppendant="{ date, mode }">
            <div v-if="mode === 'date'" :style="{ padding: '8px 0' }">
                <FTag v-if="isKingDay(date)" size="small" type="warning">
                    星期三
                </FTag>
                <FTag v-if="isCrazyDay(date)" size="small" type="danger">
                    星期四
                </FTag>
            </div>
        </template>
    </FCalendar>
</template>

<script setup lang="ts">
const today = new Date();

const crazyDay = new Date();
crazyDay.setDate(today.getDate() + (4 - today.getDay()));
const isCrazyDay = (d: number): boolean => {
    const _d = new Date(d);
    return (
        _d.getFullYear() === crazyDay.getFullYear()
        && _d.getMonth() === crazyDay.getMonth()
        && _d.getDate() === crazyDay.getDate()
    );
};

const kingDay = new Date();
kingDay.setDate(today.getDate() + (3 - today.getDay()));
const isKingDay = (d: number): boolean => {
    const _d = new Date(d);
    return (
        _d.getFullYear() === kingDay.getFullYear()
        && _d.getMonth() === kingDay.getMonth()
        && _d.getDate() === kingDay.getDate()
    );
};
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|当前高亮标记的日期|`number` (UnixTime)|今天|
|v-model:mode|显示模式（按月展示、按年展示）|`date` `month`|`date`|
|splitLine|是否展示分割线|`boolean`|`true`|
|height|组件高度|`string | number`|\-|
|shortcuts|快捷选项|`{ label: string, time: number }[]`|`[]`|

## Slots [​]()

|名称|说明|参数|
|---|---|---|
|cellMain|单元格主要内容（日期部分）|`{ date: UnixTime, mode: 'month' | 'date' }`|
|cellAppendant|单元格附加内容|`{ date: UnixTime, mode: 'month' | 'date' }`|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|cellClick|点击日历中格子|`{ date: UnixTime, mode: 'month' |'date' }`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/calendar.html