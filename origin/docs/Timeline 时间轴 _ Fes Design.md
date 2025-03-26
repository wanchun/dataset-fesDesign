# Timeline 时间轴 [​]()

通过不同的配置，实现不同效果的时间轴。

## 组件注册 [​]()

js

```
import { FTimeline } from '@fesjs/fes-design';

app.use(FTimeline);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FTimeline :data="data" />
</template>

<script setup lang="ts">
const data = [
    {
        title: '2015-09-01',
        desc: 'Create a services site',
    },
    {
        title: '2015-09-01',
        desc: 'Solve initial network problems',
    },
    {
        title: '2015-09-01',
        desc: 'Technical testing',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being solved',
    },
];
</script>
```

### 时间轴方向 [​]()

通过 `direction` 属性，支持垂直、水平不同方向（不支持水平逆方向）

值同 flex 布局中的 [`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction) 属性

* `column` 轴垂直向下
* `row` 轴水平向右
* `row` 轴水平向左

play

```
<template>
    <FRadioGroup
        v-model="direction"
        :options="[
            { label: '垂直向下(默认)', value: 'column' },
            { label: '水平向右', value: 'row' },
            { label: '水平向左', value: 'row-reverse' },
        ]"
    />

    <FDivider />

    <FTimeline
        :data="data"
        :direction="direction ?? undefined"
        titlePosition="end"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = [
    {
        title: '2015-09-01',
        desc: 'Create a services',
    },
    {
        title: '2015-09-01',
        desc: 'Solve initial network',
    },
    {
        title: '2015-09-01',
        desc: 'Technical',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being',
        icon: '#ff007f',
    },
];
const direction = ref('row');
</script>
```

### 标题位置 [​]()

使用 `titlePosition` 调整结点在时间轴两侧的位置

可选值中的 `start` 和 `end`，与 flex 布局中概念相同。可以理解成时间轴为 flex 中的「主轴」，结点相对时间轴的位置，则是「交叉轴」。例如：

* `start` 表示书写方向的开始，如：`direction: row` 时，`start` 为纵轴的上方
* `end` 表示书写方向的末尾，如：`direction: column` 时，`end` 为横轴的右侧

play

```
<template>
    <FForm>
        <FFormItem label="时间轴方向:">
            <FRadioGroup
                v-model="direction"
                :options="[
                    { label: '垂直向下(默认)', value: 'column' },
                    { label: '水平向右', value: 'row' },
                    { label: '水平向左', value: 'row-reverse' },
                ]"
            />
        </FFormItem>
        <FFormItem label="标题位置:">
            <FRadioGroup
                v-model="titlePosition"
                :options="titlePositionOptions"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTimeline
        :data="data"
        :direction="direction ?? undefined"
        :titlePosition="titlePosition ?? undefined"
        :style="{ marginTop: 'var(--f-padding-large)' }"
    />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const data = [
    {
        title: '2015-09-01',
        desc: 'Create a services',
    },
    {
        title: '2015-09-01',
        desc: 'Solve initial network',
        icon: 'error',
    },
    {
        title: '2015-09-01',
        desc: 'Technical',
        icon: 'success',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being',
        icon: 'warning',
    },
];

const direction = ref('row');
const titlePosition = ref('end');

const titlePositionOptions = computed(() => {
    if (direction.value === 'column') {
        return [
            { label: '轴的左侧', value: 'start' },
            { label: '轴的右侧(默认)', value: 'end' },
            { label: '左右交叉', value: 'alternate' },
        ];
    } else {
        return [
            { label: '轴的上方', value: 'start' },
            { label: '轴的下方(默认)', value: 'end' },
            { label: '上下交叉', value: 'alternate' },
        ];
    }
});
</script>
```

### 辅助描述位置 [​]()

用于设置辅助描述相对于标题的位置

* `under` 辅助说明位于标题下方
* `inline` 辅助说明与标题同行
* `opposite` 辅助说明和标题分别于轴两侧

*当轴为水平方向时，不支持辅助说明与标题同行*

play

```
<template>
    <FForm>
        <FFormItem label="轴的方向:">
            <FRadioGroup
                v-model="direction"
                :options="[
                    { label: '垂直向下(默认)', value: 'column' },
                    { label: '水平向右', value: 'row' },
                    { label: '水平向左', value: 'row-reverse' },
                ]"
            />
        </FFormItem>
        <FFormItem label="辅助描述位置:">
            <FRadioGroup
                v-model="descPosition"
                :options="descPositionOptions"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FTimeline
        :data="data"
        :direction="direction ?? undefined"
        :descPosition="descPosition ?? undefined"
        titlePosition="start"
        class="timeline"
    >
        <template #title="{ index }">
            <span style="width: 200px;">
                自定义标题 {{ index }}
            </span>
        </template>
    </FTimeline>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const data = [
    {
        title: '2015-09-01',
        desc: 'Create a services site',
    },
    {
        title: '2015-09-01',
        desc: 'Solve initial network problems',
    },
    {
        title: '2015-09-01',
        desc: 'Technical testing',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being solved',
        icon: '#ff007f',
    },
];

const direction = ref('column');
const descPosition = ref('opposite');

const descPositionOptions = computed(() => {
    return [
        { label: '在标题下方(默认)', value: 'under' },
        {
            label: '与标题同行',
            value: 'inline',
            disabled: direction.value !== 'column',
        },
        { label: '和标题位于轴的两侧', value: 'opposite' },
    ];
});

watch(direction, () => {
    if (direction.value !== 'column' && descPosition.value === 'inline') {
        descPosition.value = 'under';
    }
});
</script>
```

### 自定义辅助描述 [​]()

play

```
<template>
    <FTimeline :data="data2" direction="row" descPosition="opposite">
        <template #desc="{ index }">
            <span
                :style="{
                    color:
                        index === data2.length - 1
                            ? '#ff007f'
                            : 'var(--f-primary-color)',
                }"
            >
                自定义辅助描述
            </span>
        </template>
        <template #title="{ index, item }">
            <span
                :style="{
                    color:
                        index === data2.length - 1
                            ? '#ff007f'
                            : 'var(--f-primary-color)',
                }"
            >
                {{ item.title }}
            </span>
        </template>
    </FTimeline>
    <FDivider />
    <FTimeline :data="data1">
        <template #desc="{ item }">
            <div class="desc">{{ item.desc }}</div>
        </template>
    </FTimeline>
</template>

<script setup lang="ts">
const data1 = [
    {
        title: '2015-09-01',
        desc: 'Create a services site',
    },
    {
        title: '2015-09-01',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
        title: '2015-09-01',
        desc: '当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being solved',
        icon: '#ff007f',
    },
];

const data2 = [
    {
        title: '2015-09-01',
    },
    {
        title: '2015-09-01',
    },
    {
        title: '2015-09-01',
    },
    {
        title: '2015-09-01',
        icon: '#ff007f',
    },
];
</script>

<style scoped>
.desc {
    width: 300px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--f-border-color-disabled);
}
</style>
```

### 轴点-自定义颜色 [​]()

支持预设的 `info`、`success`、`error`、`warning`，此外还可以使用如 `#ff007f` 这样的能被 CSS 的 `color` 接受的颜色值

play

```
<template>
    <FTimeline :data="data" direction="row" titlePosition="end" />
</template>

<script setup lang="ts">
const data = [
    {
        title: '2015-09-01',
        desc: 'Create a services',
    },
    {
        title: '2015-09-01',
        desc: 'Solve initial network',
    },
    {
        title: '2015-09-01',
        desc: 'Technical',
    },
    {
        title: '2015-09-01',
        desc: 'Network problems being',
    },
].map((node, index) => ({
    ...node,
    icon: index % 2 === 0 ? '#ff007f' : 'rgb(127, 0, 255)',
}));
</script>
```

### 轴点-自定义图标 [​]()

play

```
<template>
    <FTimeline :data="data" direction="row">
        <template #icon="{ item }">
            <RightCircleOutlined
                v-if="customNodes.has(item.title)"
                :size="16"
                color="#7f00ff"
            />
        </template>
        <template #desc="{ index }">
            <RotateLeftOutlined class="btn" @click="handleTrigger(index)" />
            <DeleteOutlined class="btn" style="margin-left: 5px;" @click="handleDelete(index)" />
        </template>
    </FTimeline>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const data = ref([
    { title: '2018' },
    { title: '2019' },
    { title: '2020' },
    { title: '2021' },
    { title: '2022' },
    { title: '2023' },
]);

const customNodes = ref(new Set<string>(['2018', '2022', '2023']));

const handleTrigger = (index: number) => {
    const title = data.value[index].title;
    customNodes.value.has(title)
        ? customNodes.value.delete(title)
        : customNodes.value.add(title);
};

const handleDelete = (index: number) => {
    customNodes.value.delete(data.value[index].title);
    data.value.splice(index, 1);
};
</script>

<style scoped>
.btn {
    cursor: pointer;
    opacity: 1;
}
.btn:hover {
    opacity: 0.6;
}
</style>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|data|数据|`TimelineNode[]`|\-|
|direction|时间轴方向|`column` `row` `row-reverse`|`column`|
|titlePosition|标题位置|`start` `end` `alternate`|`end`|
|descPosition|辅助说明位置|`under` `inline` `opposite`|`under`|
|titleClass|自定义标题样式|`string`|\-|
|descClass|自定义辅助说明样式|`string`|\-|

#### TimelineNode [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|title|轴结点的标题|`string`|\-|
|titlePosition|轴结点的标题位置|`start` `end`|\-|
|desc|轴结点的辅助说明|`string` `({ index: number }) => VNode`|\-|
|icon|轴结点的轴点图标自定义|`info` `success` `error` `warning` `CSSProperties.color` `({ index: number }) => VNode`|\-|

## Slots [​]()

|名称|说明|参数|
|---|---|---|
|desc|辅助说明|index|
|icon|轴点图标|index|

阅读原文：http://fe.weoa.com/fes-design/zh/components/timeline.html