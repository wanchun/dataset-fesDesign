# Scrollbar [​]()

虚拟滚动条

## 组件注册 [​]()

js

```
import { FScrollbar } from '@fesjs/fes-design';

app.use(FScrollbar);
```

## 代码演示 [​]()

### 纵向滚动 [​]()

play

```
<template>
    <FSpace vertical>
        <FScrollbar ref="scrollbarRefEl" height="200px" style="width: 100%">
            <div class="scroll-list">
                <div
                    v-for="(item, index) in values"
                    :key="index"
                    class="scroll-item"
                >
                    {{ item }}
                </div>
            </div>
        </FScrollbar>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const values = ref([]);
for (let i = 0; i < 50; ++i) {
    values.value.push(i);
}

const scrollbarRefEl = ref();
</script>

<style scoped>
.scroll-list {
    margin: 0;
    padding: 0;
}
.scroll-list > .scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.scroll-list > .scroll-item + .scroll-item {
    margin-top: 8px;
}
</style>
```

### 横向滚动 [​]()

play

```
<template>
    <FSpace vertical>
        <FScrollbar ref="scrollbarRefEl" style="width: 100%">
            <div class="scroll-list">
                <div
                    v-for="(item, index) in values"
                    :key="index"
                    class="scroll-item"
                >
                    {{ item }}
                </div>
            </div>
        </FScrollbar>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const values = ref([]);
for (let i = 0; i < 100; ++i) {
    values.value.push(i);
}

const scrollbarRefEl = ref();
</script>

<style scoped>
.scroll-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.scroll-list > .scroll-item {
    flex-shrink: 0;
    width: 36px;
    text-align: center;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.scroll-list > .scroll-item + .scroll-item {
    margin-left: 8px;
}
</style>
```

### 原生滚动样式 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="是否原生滚动条：">
            <FRadioGroup v-model="native">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FScrollbar height="200px" style="width: 100%" :native="native">
            <div class="scroll-list">
                <div
                    v-for="(item, index) in vals"
                    :key="index"
                    class="scroll-item"
                >
                    {{ item }}
                </div>
            </div>
        </FScrollbar>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const native = ref(true);

        const vals = ref([]);
        for (let i = 0; i < 50; ++i) {
            vals.value.push(i);
        }
        return {
            vals,
            native,
        };
    },
};
</script>

<style scoped>
.scroll-list {
    margin: 0;
    padding: 0;
    width: 1000px;
}
.scroll-list > .scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.scroll-list > .scroll-item + .scroll-item {
    margin-top: 8px;
}
</style>
```

### 最大高度 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="高度类型：">
            <FRadioGroup v-model="heightType">
                <FRadio value="height">固定高度</FRadio>
                <FRadio value="maxHeight">最大高度</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem v-if="heightType === 'height'" label="固定高度：">
            <FInputNumber
                v-model="height"
                :min="100"
                :max="400"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem v-if="heightType === 'maxHeight'" label="最大高度：">
            <FInputNumber
                v-model="maxHeight"
                :min="100"
                :max="400"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FScrollbar :height="height" :maxHeight="maxHeight" style="width: 100%">
            <div class="scroll-list">
                <div
                    v-for="(item, index) in vals"
                    :key="index"
                    class="scroll-item"
                >
                    {{ item }}
                </div>
            </div>
        </FScrollbar>
    </FSpace>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup() {
        const heightType = ref('maxHeight');
        const height = ref();
        const maxHeight = ref(200);

        const vals = ref([]);
        for (let i = 0; i < 6; ++i) {
            vals.value.push(i);
        }

        watch(
            heightType,
            () => {
                if (heightType.value === 'height') {
                    height.value = 200;
                    maxHeight.value = undefined;
                } else if (heightType.value === 'maxHeight') {
                    height.value = undefined;
                    maxHeight.value = 200;
                } else {
                    height.value = undefined;
                    maxHeight.value = undefined;
                }
            },
            {
                immediate: true,
            },
        );

        return {
            vals,
            heightType,
            height,
            maxHeight,
        };
    },
};
</script>

<style scoped>
.scroll-list {
    margin: 0;
    padding: 0;
    width: 1000px;
}
.scroll-list > .scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.scroll-list > .scroll-item + .scroll-item {
    margin-top: 8px;
}
</style>
```

### 更多用法 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="总是显示滚动条：">
            <FRadioGroup v-model="always">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="显示待滚动区域阴影：">
            <FRadioGroup v-model="shadow">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="滚动条滑块最小尺寸：">
            <FInputNumber
                v-model="minSize"
                :min="5"
                :max="50"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FSpace>
            <FButton @click="handleReset">滚动到初始位置</FButton>
            <FButton @click="handleScrollToEnd">滚动到底部位置</FButton>
        </FSpace>
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FScrollbar
            ref="scrollbarRef"
            :height="200"
            :always="always"
            :shadow="shadow"
            style="width: 100%"
            :minSize="minSize"
        >
            <div class="scroll-list">
                <div
                    v-for="(item, index) in vals"
                    :key="index"
                    class="scroll-item"
                >
                    {{ item }}
                </div>
            </div>
        </FScrollbar>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const scrollbarRef = ref(null);
        const always = ref(true);
        const shadow = ref(true);
        const minSize = ref(10);

        const vals = ref([]);
        for (let i = 0; i < 100; ++i) {
            vals.value.push(i);
        }

        const handleReset = () => {
            scrollbarRef.value?.setScrollTop(0, 300);
            scrollbarRef.value?.setScrollLeft(0, 300);
        };

        const handleScrollToEnd = () => {
            scrollbarRef.value?.scrollToEnd(undefined, 500);
        };

        return {
            scrollbarRef,
            vals,
            always,
            minSize,
            shadow,
            handleReset,
            handleScrollToEnd,
        };
    },
};
</script>

<style scoped>
.scroll-list {
    margin: 0;
    padding: 0;
    width: 1000px;
}
.scroll-list > .scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.scroll-list > .scroll-item + .scroll-item {
    margin-top: 8px;
}
</style>
```

## Scrollbar Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|height|内容高度|number/string|\-|
|maxHeight|内容最大高度|number/string|\-|
|native|是否使用原生滚动样式|boolean|`false`|
|always|总是显示滚动条|boolean|`false`|
|minSize|滚动条滑块的最小尺寸|number|`20`|
|shadow|显示待滚动区域阴影|boolean / `{ x: boolean, y: boolean }`|`false`|
|containerClass|包裹容器的自定义类名|array/object/string|\-|
|containerStyle|包裹容器的自定义样式|array/object/string|\-|
|contentStyle|内容容器的自定义样式|array/object/string|\-|
|horizontalRatioStyle|水平滚动条的自定义样式|array/object/string|\-|
|verticalRatioStyle|垂直滚动条的自定义样式|array/object/string|\-|
|noresize|不响应容器尺寸变化，如果容器尺寸不变，最好设置它可以优化性能|boolean|`false`|
|thumbStyle|滚动条样式|array/object/string|\-|

## Scrollbar Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|scroll|滚动事件|(event: Event)|

## Scrollbar Methods [​]()

|名称|说明|参数|
|---|---|---|
|setScrollTop|设置 scrollTop, duration 为滚动动画|(scrollTop: number, duration: Number) => void|
|setScrollLeft|设置 scrollLeft, duration 为滚动动画|(scrollLeft: number, duration: Number) => void|
|scrollToEnd|滚动到底部, direction 不设置的话默认滚动到 bottom 和 right, duration 为滚动动画|(direction: 'bottom'\|'right', duration: Number) => void|
|update|手动更新滚动条|\-|

阅读原文：http://fe.weoa.com/fes-design/zh/components/scrollbar.html