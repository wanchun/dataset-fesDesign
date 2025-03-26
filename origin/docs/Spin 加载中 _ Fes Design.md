# Spin 加载中 [​]()

用于页面和区块的加载中状态。

## 组件注册 [​]()

js

```
import { FSpin } from '@fesjs/fes-design';

app.use(FSpin);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FSpin />
    </FSpace>
</template>
```

### 颜色 [​]()

play

```
<template>
    <FSpace>
        <FSpin stroke="#5384ff" />
        <FSpin stroke="#00cb91" />
        <FSpin stroke="#ff4d4f" />
        <FSpin stroke="#f29360" />
    </FSpace>
</template>
```

### 卡片加载中 [​]()

play

```
<template>
    <FSpace vertical>
        <FSwitch v-model="show" class="demo-switch">
            <template #active> 开 </template>
            <template #inactive> 关 </template>
        </FSwitch>
        <FSpin
            :show="show"
            :delay="200"
            style="width: 100%"
            description="加载中"
        >
            <f-table :data="data">
                <f-table-column prop="date" label="日期" />
                <f-table-column prop="name" label="姓名" />
                <f-table-column prop="address" label="地址" />
            </f-table>
        </FSpin>
    </FSpace>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    date: `2016-05-${i < 10 ? `0${i}` : i}`,
                    name: '王大虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                };
            }),
        );
        const show = ref(false);
        return {
            data,
            show,
        };
    },
};
</script>
```

### 各种大小 [​]()

play

```
<template>
    <FSpace>
        <FSpin size="small" />
        <FSpin size="middle" />
        <FSpin size="large" />
    </FSpace>
</template>
```

## Spin Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|size|大小，可选有`small`、`middle`、`large`|string|`middle`|
|description|描述|string|\-|
|stroke|颜色|string|\-|
|show|是否显示|boolean|`true`|
|delay|延迟显示加载效果的时间, 单位为毫秒（避免闪烁，如果是反馈交互操作产生的闪烁，是符合预期的）|number|`0`|

## Spin Slots [​]()

|名称|说明|
|---|---|
|default|如果填入，`Spin` 会包裹填入的内容|
|icon|自定义加载图标|
|description|描述信息|

阅读原文：http://fe.weoa.com/fes-design/zh/components/spin.html