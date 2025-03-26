# DatePicker 日期选择 [​]()

日期选择

## 组件注册 [​]()

js

```
import { DatePicker } from '@fesjs/fes-design';

app.use(DatePicker);
```

## 代码演示 [​]()

### 基础功能 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="展示格式：">
            <FSelect
                v-model="format"
                clearable
                style="width: 200px"
                :options="formatOptions"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FDatePicker
            v-model="currentDate"
            class="date-picker"
            :format="format"
            clearable
            @change="change"
        />
        <FDatePicker
            :style="style"
            type="month"
            placeholder="选择月份"
            :format="format"
        />
        <FDatePicker
            v-model="datemonth"
            :style="style"
            type="month"
            placeholder="选择月份"
            :format="format"
        />
        <FDatePicker type="year" placeholder="选择年份" :format="format" />
        <FDatePicker type="quarter" placeholder="选择季度" :format="format" />
        <FDatePicker
            v-model="datetime"
            type="datetime"
            :hourStep="2"
            :minuteStep="2"
            :secondStep="2"
            placeholder="时间日期选择"
            :format="format"
        />
    </FSpace>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formatOptions = [
    'yyyy-MM-dd',
    'yyyy/MM/dd',
    'yyyy-MM-dd HH:mm:ss',
    'yyyy-MM',
    'yyyy',
].map((value) => ({
    value,
    label: value,
}));
const format = ref();

const currentDate = ref(Date.now() + 31 * 24 * 60 * 60 * 1000);
const change = () => {
    console.log('[datePicker.common] [change] currentDate:', currentDate.value);
};

const style = reactive({
    width: '320px',
});

const datetime = ref();
const datemonth = ref(Date.now());
</script>

<style scope>
.date-picker {
    width: 200px;
}
</style>
```

### 范围选择 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="展示格式：">
            <FSelect
                v-model="format"
                clearable
                style="width: 200px"
                :options="formatOptions"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FDatePicker
            :format="format"
            class="date-picker"
            type="daterange"
            clearable
        />
        <FDatePicker
            :format="format"
            class="date-picker"
            type="datemonthrange"
        />
        <FDatePicker
            :format="format"
            type="daterange"
            style="width: 320px"
            :modelValue="[Date.now(), Date.now() + 7 * 24 * 60 * 60 * 1000]"
            clearable
        >
            <template #separator> 至 </template>
        </FDatePicker>
        <FDatePicker
            v-model="dateTimeRange"
            :format="format"
            type="datetimerange"
            clearable
        />
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const formatOptions = [
            'yyyy-MM-dd',
            'yyyy/MM/dd',
            'yyyy-MM-dd HH:mm:ss',
            'yyyy-MM',
        ].map((value) => ({
            value,
            label: value,
        }));
        const format = ref();

        const dateTimeRange = ref([Date.now(), new Date().setHours(32)]);

        return {
            formatOptions,
            format,

            dateTimeRange,
        };
    },
};
</script>

<style scope>
.date-picker {
    width: 320px;
}
</style>
```

### 日期多选 [​]()

play

```
<template>
    <FSpace vertical>
        <FDatePicker
            v-model="multipleDate"
            type="datemultiple"
            clearable
            @change="changeMultipleData"
        />
        <FDatePicker
            v-model="multipleDate"
            type="datemultiple"
            format="yyyy/MM/dd"
            @change="changeMultipleData"
        />
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const multipleDate = ref([]);
const changeMultipleData = () => {
    console.log(
        '[datePicker.multiple] [changeMultipleData] multipleDate:',
        multipleDate.value,
    );
};
</script>

<style scope>
.date-picker-1 {
    width: 320px;
}
</style>
```

### 禁用部分日期 [​]()

play

```
<template>
    <FSpace vertical>
        最大日期为今天：
        <FDatePicker :maxDate="new Date()" />
        最小日期为今天：
        <FDatePicker :minDate="new Date()" />
        每个月7号不能选：
        <FDatePicker :disabledDate="disabledDate" />
        最大日期范围为7天：
        <FDatePicker type="daterange" maxRange="7D" />
        控制可选时间范围为: 09:00:00 - 18:00:00：
        <FDatePicker
            type="datetimerange"
            :defaultTime="['09:00:00', '18:00:00']"
            :disabledTime="disabledTime"
        />
        最小月份为当前月份：
        <FDatePicker
            :minDate="new Date()"
            type="month"
            placeholder="选择月份"
        />
        最大季度选择为当前季度：
        <FDatePicker
            :maxDate="new Date()"
            type="quarter"
            placeholder="选择季度"
        />
        最大年份为当前年份：
        <FDatePicker :maxDate="new Date()" type="year" placeholder="选择年份" />
    </FSpace>
</template>

<script>
export default {
    setup() {
        const disabledDate = (date) => {
            if (date.getDate() === 7) {
                return true;
            }
            return false;
        };
        const disabledTime = (date, phase) => {
            // phase: left | right
            return {
                disabledHours: (hour) => {
                    if (phase === 'left') {
                        return hour > 9;
                    }
                    return hour < 18;
                },
            };
        };

        return {
            disabledDate,
            disabledTime,
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
        <FDatePicker disabled />
        <FDatePicker :modelValue="Date.now()" disabled />
        <FDatePicker type="daterange" disabled />
        <FDatePicker
            :modelValue="[Date.now(), Date.now() + 7 * 24 * 60 * 60 * 1000]"
            type="daterange"
            disabled
        />
        <FDatePicker type="datemultiple" disabled />
        <FDatePicker
            :modelValue="[Date.now(), Date.now() + 7 * 24 * 60 * 60 * 1000]"
            type="datemultiple"
            disabled
        />
    </FSpace>
</template>
```

### 快捷选项 [​]()

play

```
<template>
    <FSpace vertical>
        <FDatePicker
            v-model="currentDate"
            :shortcuts="shortcuts"
            clearable
            @change="change"
        />
        <FDatePicker
            type="datetime"
            :shortcuts="shortcuts"
            placeholder="时间日期选择"
        />
        <FDatePicker :shortcuts="rangeShortcuts" type="datetimerange" />
    </FSpace>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const currentDate = ref();
        const change = () => {
            console.log(
                '[datePicker.shortcuts] [change] currentDate:',
                currentDate.value,
            );
        };
        return {
            currentDate,
            change,
            shortcuts: {
                快乐日: Date.now() + 24 * 60 * 60 * 1000,
                开心日: Date.now(),
                昨天: () => new Date().getTime() - 24 * 60 * 60 * 1000,
            },
            rangeShortcuts: {
                快乐假期: [1629216000000, 1631203200000],
                近2小时: () => {
                    const cur = new Date().getTime();
                    return [cur - 2 * 60 * 60 * 1000, cur];
                },
            },
        };
    },
});
</script>
```

### 带确定按钮 [​]()

play

```
<template>
    <FDatePicker control />
</template>
```

### 默认具体时间 [​]()

play

```
<template>
    <FSpace vertical>
        <FDatePicker
            class="date-picker"
            type="datetime"
            :hourStep="2"
            :minuteStep="2"
            :secondStep="2"
            placeholder="时间日期选择"
            defaultTime="08:00:00"
            clearable
        />
        <FDatePicker
            type="datetimerange"
            clearable
            :defaultTime="['08:00:00', '20:00:00']"
        />
    </FSpace>
</template>

<script setup></script>

<style scope>
.date-picker {
    width: 320px;
}
</style>
```

## Props [​]()

### 通用 Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue|日期值，支持 v-model 双向绑定|Array/Number|\-|
|disabledDate|禁止日期函数，参数为对应的时间 Date，执行结果为 true 则禁止|(date: Date)=> Boolean|\-|
|disabledTime|禁止时间选择, 返回参数同 time-picker 的 disableHours, disabledMinutes, disabledSeconds|(date: Date) => ({disabledHours: () => Boolean, disabledMinutes: () => Boolean, disabledSeconds: () => Boolean})|\-|
|type|类型|`date` `datetime` `datemultiple` `daterange` `datetimerange` `datemonthrange` `year` `month` `quarter`|`date`|
|maxDate|最大可选择时间，支持时间戳的输入|Date/number|\-|
|minDate|最小可选择时间，支持时间戳的输入|Date/number|\-|
|maxRange|最大可选区间，格式为 /\\d+\[D\]/|string|\-|
|control|是否显示确认按钮，在多选强制为 true，其他情况默认为 false|boolean|`false`|
|hourStep|小时选项间隔|number|`1`|
|minuteStep|分钟选项间隔|number|`1`|
|secondStep|秒钟选项间隔|number|`1`|
|defaultTime|选中日期后默认具体时刻，非时间范围 string；时间范围 string\[\]，格式: '12:00:00'|string/string\[\]|\-|

### DatePicker 类型 Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|placeholder|占位内容，数组为选择日期范围时使用|string/Array|\-|
|clearable|是否显示清除按钮|boolean|`true`|
|format|展示格式，具体配置可查[format](https://date-fns.org/v2.28.0/docs/format)，根据不同的 type 类型，会有不同的默认展示格式。|string|\-|
|disabled|禁用|boolean|`false`|
|popperClass|弹窗样式|string|\-|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|getContainer|指定下拉选项挂载的 HTML 节点|() => HTMLElement|`() => document.body`|

## Slots [​]()

|slot 名称|说明|
|---|---|
|suffixIcon|输入框左边的 icon|
|separator|时间范围选择的分割符号|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|用户确认选定的值时触发|组件绑定值|
|clear|用户点击清除按钮|组件绑定值|
|blur|当 input 失去焦点时触发|组件实例|
|focus|当 input 获取焦点时触发|组件实例|

阅读原文：http://fe.weoa.com/fes-design/zh/components/datePicker.html