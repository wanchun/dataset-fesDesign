# Steps 步骤条 [​]()

拆分某项流程的步骤，引导用户按流程完成任务。

## 组件注册 [​]()

js

```
import { FSteps } from '@fesjs/fes-design';

app.use(FSteps);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSteps :current="current">
        <FStep title="待开始" description="All through the day, I me mine" @clickStep="handleClickStep" />
        <FStep
            title="进行中"
            description="When I find myself in times of trouble Mother Mary comes to me"
            @clickStep="handleClickStep"
        />
        <FStep title="待处理" @clickStep="handleClickStep">
            <template #icon>
                <ProductOutlined />
            </template>
        </FStep>
        <FStep
            title="已完成"
            description="Something in the way she moves Attracts me like no other lover"
            @clickStep="handleClickStep"
        />
    </FSteps>

    <FSpace>
        <FButton @click="pre">上一步</FButton>
        <FButton @click="next">下一步</FButton>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const current = ref(2);
        const pre = () => {
            if (current.value < 1) {
                return;
            }
            current.value = current.value - 1;
        };
        const next = () => {
            if (current.value > 4) {
                return;
            }
            current.value = current.value + 1;
        };

        const handleClickStep = (step) => {
            console.log('[steps.common] handleClickStep, step:', step);
        };

        return {
            current,
            pre,
            next,
            handleClickStep,
        };
    },
};
</script>
```

### 垂直方向 [​]()

play

```
<template>
    <FSteps vertical :current="2">
        <FStep title="已完成" />
        <FStep
            title="进行中"
            description="When I find myself in times of trouble Mother Mary comes to me"
        />
        <FStep
            title="待处理"
            description="Here come old flat top He come grooving up slowly"
        />
        <FStep
            title="待处理"
            description="Something in the way she moves Attracts me like no other lover"
        />
    </FSteps>
</template>
```

### 图标 [​]()

play

```
<template>
    <FSteps :current="2">
        <FStep
            title="已完成"
            description="All through the day, I me mine I me mine, I me mine"
        >
            <template #icon>
                <StarOutlined />
            </template>
        </FStep>
        <FStep
            title="进行中"
            description="When I find myself in times of trouble Mother Mary comes to me"
        >
            <template #icon>
                <StarOutlined />
            </template>
        </FStep>
        <FStep
            title="待处理"
            description="Here come old flat top He come grooving up slowly"
        >
            <template #icon>
                <StarOutlined />
            </template>
        </FStep>
        <FStep
            title="待处理"
            description="Something in the way she moves Attracts me like no other lover"
        >
            <template #icon>
                <StarOutlined />
            </template>
        </FStep>
    </FSteps>
</template>
```

### 错误状态 [​]()

play

```
<template>
    <FSteps :current="2" status="error">
        <FStep
            title="已完成"
            description="All through the day, I me mine I me mine, I me mine"
        />
        <FStep
            title="进行中"
            description="When I find myself in times of trouble Mother Mary comes to me"
        />
        <FStep
            title="待处理"
            description="Here come old flat top He come grooving up slowly"
        />
        <FStep
            title="待处理"
            description="Something in the way she moves Attracts me like no other lover"
        />
    </FSteps>
</template>
```

## Steps Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|current(v-model)|指定当前步骤|number|`undefined`|
|status|指定当前步骤的状态，可选 `wait`、`process`、`finish`、`error`|string|`process`|
|type|步骤条类型，有 `default` 和 `navigation` 两种, 第一期就支持`default`|string|`default`|
|vertical|是否垂直方向|boolean|`false`|
|initial|起始序号|number|`1`|

## Steps Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|点击切换步骤时触发|(current)=>void|

## Step Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|description|步骤的详情描述，可选|string / slot|\-|
|icon|步骤图标的类型，可选|slot|\-|
|status|指定状态。当不配置该属性时，会使用 `Steps` 的 `status` 来自动指定状态。可选：`wait` `process` `finish` `error`|string|\-|
|title|标题|string / slot|\-|

## Step Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|clickStep|点击步骤时触发|(step: number)=>void|

阅读原文：http://fe.weoa.com/fes-design/zh/components/steps.html