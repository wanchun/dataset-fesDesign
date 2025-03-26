# Alert 警告提示 [​]()

当需要用户对某一信息关注时，可通过警告提示组件来触达用户，常驻显示，或需要用户主动关闭

## 组件注册 [​]()

js

```
import { FAlert } from '@fesjs/fes-design';

app.use(FAlert);
```

## 代码演示 [​]()

### 基础用法 [​]()

提示类型主要分为：常规信息提醒、正确表达提醒、警示提醒、错误表达提醒

play

```
<template>
    <div>
        <FAlert class="mtb-10" type="info" message="常规信息提示内容" />
        <FAlert class="mtb-10" type="success" message="正确表达提示内容" />
        <FAlert class="mtb-10" type="warning" message="警示表达提示内容" />
        <FAlert class="mtb-10" type="error" message="错误表达提示内容" />
    </div>
</template>

<style scoped>
.mtb-10 {
    margin: 10px 0;
}
</style>
```

### 带图标 [​]()

play

```
<template>
    <FAlert class="mtb-10" showIcon type="info" message="常规信息提示内容" />
    <FAlert class="mtb-10" showIcon type="success" message="正确表达提示内容" />
    <FAlert class="mtb-10" showIcon type="warning" message="警示表达提示内容" />
    <FAlert class="mtb-10" showIcon type="error" message="错误表达提示内容" />
</template>

<style scoped>
.mtb-10 {
    margin: 10px 0;
}
</style>
```

### 带辅助信息 [​]()

play

```
<template>
    <FSpace>
        <FAlert
            showIcon
            closable
            type="info"
            message="常规信息提示内容"
            description="辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助"
        />
        <FAlert
            showIcon
            closable
            type="success"
            message="正确表达提示内容"
            description="辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助"
        />
        <FAlert
            showIcon
            closable
            type="warning"
            message="警示表达提示内容"
            description="辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助"
        />
        <FAlert
            showIcon
            closable
            type="error"
            message="错误表达提示内容"
            description="辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助信息提示内容辅助"
        />
    </FSpace>
</template>
```

### 可关闭 [​]()

play

```
<template>
    <div>
        <FAlert
            class="mtb-10"
            showIcon
            closable
            type="info"
            message="常规信息提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            closable
            type="success"
            message="正确表达提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            closable
            type="warning"
            message="警示表达提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            closable
            type="error"
            message="错误表达提示内容"
        />
    </div>
</template>

<style scoped>
.mtb-10 {
    margin: 10px 0;
}
</style>
```

### 信息居中 [​]()

play

```
<template>
    <div>
        <FAlert
            class="mtb-10"
            showIcon
            center
            closable
            type="info"
            message="常规信息提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            center
            closable
            type="success"
            message="正确表达提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            center
            closable
            type="warning"
            message="警示表达提示内容"
        />
        <FAlert
            class="mtb-10"
            showIcon
            center
            closable
            type="error"
            message="错误表达提示内容"
            description="辅助信息提示内容辅助信息提示内容辅助信息提示内容"
        />
    </div>
</template>

<style scoped>
.mtb-10 {
    margin: 10px 0;
}
</style>
```

### 自定义 [​]()

play

```
<template>
    <FAlert class="mtb-10" showIcon closable type="info" message="自定义操作">
        <template #action><div>详情</div></template>
    </FAlert>
    <FAlert
        class="mtb-10"
        showIcon
        closable
        type="success"
        message="正确表达提示内容"
    >
        <div>自定义消息</div>
    </FAlert>
    <FAlert
        class="mtb-10"
        showIcon
        closable
        type="warning"
        message="自定义图标"
    >
        <template #icon><UserOutlined /></template>
    </FAlert>
    <FAlert
        class="mtb-10"
        showIcon
        closable
        type="error"
        message="自定义辅助信息"
    >
        <template #description>
            <div>
                自定义辅助信息自定义辅助信息自定义辅助信息自定义辅助信息自定义辅助信息自定义辅助信息自定义辅助信息
            </div>
        </template>
    </FAlert>
</template>

<style scoped>
.mtb-10 {
    margin: 10px 0;
}
</style>
```

## Alert Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|type|指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`|String|`info`|
|message|提示内容|String|无|
|description|辅助信息|String|无|
|showIcon|是否显示图标|Boolean|false|
|closable|是否可以关闭|Boolean|false|
|center|提示是否居中显示|Boolean|false|
|beforeClose|点击关闭按钮回调。返回 true 执行关闭|`() => boolean / Promise`|`() => true`|

## Alert Slots [​]()

|名称|说明|
|---|---|
|default|提示内容|
|description|辅助消息|
|icon|图标|
|action|操作|

阅读原文：http://fe.weoa.com/fes-design/zh/components/alert.html