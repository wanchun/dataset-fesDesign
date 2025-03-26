# Divider 分割线 [​]()

分割一些内容。

## 组件注册 [​]()

js

```
import { FDivider } from '@fesjs/fes-design';

app.use(FDivider);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    啊
    <FDivider />
    啊
</template>
```

### 附带文字 [​]()

play

```
<template>
    啊
    <FDivider>中间</FDivider>
    啊
    <FDivider titlePlacement="left">左边</FDivider>
    啊
    <FDivider titlePlacement="right">右边</FDivider>
    啊
</template>
```

### 垂直方向 [​]()

play

```
<template>
    啊
    <FDivider vertical />
    啊
    <FDivider vertical />
    啊
    <FDivider vertical />
    啊
</template>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|vertical|是否是垂直方向|boolean|`false`|
|titlePlacement|设置文字的位置，可选有 `center`、`left`、`right`|string|`center`|

## Slots [​]()

|slot 名称|说明|
|---|---|
|default|文字|

阅读原文：http://fe.weoa.com/fes-design/zh/components/divider.html