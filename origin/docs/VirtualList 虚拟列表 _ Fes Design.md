# VirtualList 虚拟列表 [​]()

当列表的数据量很大时，使用虚拟列表呈现内容。

## 组件注册 [​]()

js

```
import { FVirtualList } from 'fes-design';

app.use(FVirtualList);
```

## 代码演示 [​]()

### 不规则纵向滚动列表 [​]()

play

```
<template>
    <FVirtualList
        ref="virtualList"
        class="virtual-scroll-list-vertical"
        dataKey="id"
        :dataSources="dataItems"
        :estimateSize="80"
        :height="height"
    >
        <template #default="{ source, index }">
            <div :data-index="index" class="item-inner">
                <div class="head">
                    <span># {{ source.index }}</span>
                    <span>{{ source.name }}</span>
                </div>
                <div class="desc">{{ source.desc }}</div>
            </div>
        </template>
    </FVirtualList>
    <FButton style="margin-top: 10px;" @click="addMessage">添加消息{{ dataItems.length }}</FButton>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Vertical',
    setup() {
        const virtualList = ref(null);
        const height = ref(400);
        const sentence3 = [
            'BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。',
            'IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)',
            'margin 重合，margin 塌陷',
            'css3',
            'html5IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)',
            'es6',
        ];
        const genUniqueId = (prefix) => {
            return `${prefix}$${Math.random().toString(16).substr(9)}`;
        };
        const getSentences = () => {
            const index = Math.floor(Math.random() * (sentence3.length - 1));
            return sentence3[index];
        };
        const TOTAL_COUNT = 1000;
        const dataItems = ref([]);
        let count = TOTAL_COUNT;
        while (count--) {
            const index = TOTAL_COUNT - count;
            dataItems.value.push({
                index,
                name: `${Math.random()}`,
                id: genUniqueId(index),
                desc: getSentences(),
            });
        }
        const addMessage = () => {
            const index = dataItems.value.length + 1;
            dataItems.value = [...dataItems.value, {
                index,
                name: `${Math.random()}`,
                id: genUniqueId(index),
                desc: getSentences(),
            }];
            virtualList.value.scrollToBottom();
        };
        return {
            virtualList,
            dataItems,
            height,
            addMessage,
        };
    },
};
</script>

<style scoped>
.virtual-scroll-list-vertical .item-inner .head {
    font-weight: 500;
}
.virtual-scroll-list-vertical .item-inner .head span:first-child {
    margin-right: 1em;
}
.virtual-scroll-list-vertical .item-inner .desc {
    margin-top: 0.5em;
    margin-bottom: 1em;
    text-align: justify;
}
</style>
```

### 不规则横向滚动列表 [​]()

play

```
<template>
    <FVirtualList
        class="virtual-scroll-list-horizontal"
        dataKey="id"
        :dataSources="items"
        :estimateSize="110"
        direction="horizontal"
    >
        <template #default="{ source }">
            <div
                class="item-inner-horizontal"
                :style="{ width: `${source.size}px` }"
            >
                <div class="index"># {{ source.index }}</div>
                <div class="size">{{ source.size }}</div>
            </div>
        </template>
    </FVirtualList>
</template>

<script>
const TOTAL_COUNT = 100;
const sizes = [60, 80, 100, 150, 180];

const genUniqueId = (prefix) => {
    return `${prefix}$${Math.random().toString(16).substr(9)}`;
};

const dataItems = [];
let count = TOTAL_COUNT;
while (count--) {
    const index = TOTAL_COUNT - count;
    dataItems.push({
        index,
        id: genUniqueId(index),
        size: sizes[Math.floor(Math.random() * 5)],
    });
}

export default {
    name: 'Horizontal',
    setup() {
        return {
            items: dataItems,
        };
    },
};
</script>

<style scoped>
.virtual-scroll-list-horizontal {
    width: 100%;
    height: 120px;
}
.virtual-scroll-list-horizontal .item-inner-horizontal {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2em 0;
}
.virtual-scroll-list-horizontal .item-inner-horizontal .index {
    width: 100%;
    text-align: center;
}
.virtual-scroll-list-horizontal .item-inner-horizontal .size {
    text-align: right;
    color: darkgray;
    font-size: 16px;
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
        <FVirtualList
            class="virtual-scroll-list-max-height"
            wrapClass="virtual-scroll-list-wrap"
            :dataKey="(data) => data"
            :dataSources="vals"
            :estimateSize="80"
            :height="height"
            :maxHeight="maxHeight"
        >
            <template #default="{ source }">
                <div class="virtual-scroll-item">
                    {{ source }}
                </div>
            </template>
        </FVirtualList>
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

<style>
.virtual-scroll-list-max-height .virtual-scroll-list-wrap {
    margin: 0;
    padding: 0;
    width: 1000px;
}
.virtual-scroll-list-max-height .virtual-scroll-list-wrap .virtual-scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.virtual-scroll-list-max-height
    .virtual-scroll-list-wrap
    .virtual-scroll-item
    + .virtual-scroll-item {
    margin-top: 8px;
}
</style>
```

### 滚动操作 [​]()

play

```
<template>
    <FForm :labelWidth="180">
        <FFormItem label="触发 toTop 事件阈值：">
            <FInputNumber
                v-model="topThreshold"
                :min="0"
                :max="50"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="触发 toBottom 事件阈值：">
            <FInputNumber
                v-model="bottomThreshold"
                :min="0"
                :max="50"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="是否原生滚动条：">
            <FRadioGroup v-model="native">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FSpace>
            <FButton @click="handleReset">重置状态</FButton>
            <FButton @click="handleScrollToBottom">滚动到底部位置</FButton>
            <FButton @click="handleScrollToIndex">滚动到指定索引</FButton>
            <FButton @click="handleScrollToOffset">
                滚动到相对指定偏移量
            </FButton>
        </FSpace>
    </FForm>

    <FDivider />

    <FVirtualList
        ref="virtualList"
        class="virtual-scroll-list-scroll"
        wrapClass="virtual-scroll-list-wrap"
        dataKey="id"
        :dataSources="dataItems"
        :estimateSize="100"
        :height="200"
        :topThreshold="topThreshold"
        :bottomThreshold="bottomThreshold"
        :always="true"
        :native="native"
        @scroll="handleScroll"
        @toTop="handleToTop"
        @toBottom="handleToBottom"
        @resized="handleResized"
    >
        <template #default="{ source }">
            <div class="item-inner">
                <div class="head">
                    <span># {{ source.index }}</span>
                    <span>{{ source.name }}</span>
                </div>
                <div class="desc">{{ source.desc }}</div>
            </div>
        </template>
    </FVirtualList>

    <FDivider />

    <FSpace vertical>
        <span>第50项高度: {{ getSize }}</span>
        <span>渲染项总数: {{ getSizes }}</span>
        <span>当前滚动偏移量: {{ getOffset }}</span>
        <span>容器高度: {{ getClientSize }}</span>
        <span>滚动高度: {{ getScrollSize }}</span>
    </FSpace>
</template>

<script>
import { ref } from 'vue';
import { debounce } from 'lodash-es';

function useDataItems() {
    // The Climb (From Miley Cyrus)
    const sentence3 = [
        'BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。',
        'IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)',
        'margin 重合，margin 塌陷',
        'css3',
        'html5IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC(Inline Formatting Contexts)直译为”内联格式化上下文”，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)',
        'es6',
    ];

    const TOTAL_COUNT = 1000;

    const genUniqueId = (prefix) => {
        return `${prefix}$${Math.random().toString(16).substr(9)}`;
    };

    const getSentences = () => {
        const index = Math.floor(Math.random() * (sentence3.length - 1));
        return sentence3[index];
    };

    const dataItems = ref([]);
    let count = TOTAL_COUNT;
    while (count--) {
        const index = TOTAL_COUNT - count;
        dataItems.value.push({
            index,
            name: `${Math.random()}`,
            id: genUniqueId(index),
            desc: getSentences(),
        });
    }

    return dataItems;
}

export default {
    setup() {
        const virtualList = ref(null);
        const topThreshold = ref(20);
        const bottomThreshold = ref(20);
        const native = ref(false);

        const getSize = ref();
        const getSizes = ref();
        const getOffset = ref();
        const getClientSize = ref();
        const getScrollSize = ref();

        const dataItems = useDataItems();

        function updateSize() {
            getSize.value = virtualList.value.getSize(dataItems.value[49].id);
            getSizes.value = virtualList.value.getSizes();
            getOffset.value = virtualList.value.getOffset();
            getClientSize.value = virtualList.value.getClientSize();
            getScrollSize.value = virtualList.value.getScrollSize();
        }

        const handleScroll = debounce(() => {
            // console.log('[virtualList.scroll] [scroll]');
            updateSize();
        }, 100);
        const handleToTop = () => {
            console.log('[virtualList.scroll] [toTop]');
        };
        const handleToBottom = () => {
            console.log('[virtualList.scroll] [toBottom]');
        };
        const handleResized = debounce((id, size) => {
            console.log(
                '[virtualList.scroll] [resized] id:',
                id,
                ' size:',
                size,
            );
            updateSize();
        }, 100);

        const handleReset = () => {
            virtualList.value.reset();
        };
        const handleScrollToBottom = () => {
            virtualList.value.scrollToBottom();
        };
        const handleScrollToIndex = () => {
            virtualList.value.scrollToIndex(50);
        };
        const handleScrollToOffset = () => {
            virtualList.value.scrollToOffset(-50);
        };

        return {
            virtualList,
            topThreshold,
            bottomThreshold,
            native,
            dataItems,
            handleScroll,
            handleToTop,
            handleToBottom,
            handleResized,

            handleReset,
            handleScrollToBottom,
            handleScrollToIndex,
            handleScrollToOffset,

            getSize,
            getSizes,
            getOffset,
            getClientSize,
            getScrollSize,
        };
    },
};
</script>

<style>
.virtual-scroll-list-scroll .virtual-scroll-list-wrap {
    width: 1000px;
}
.virtual-scroll-list-scroll .item-inner .head {
    font-weight: 500;
}
.virtual-scroll-list-scroll .item-inner .head span:first-child {
    margin-right: 1em;
}
.virtual-scroll-list-scroll .item-inner .desc {
    margin-top: 0.5em;
    margin-bottom: 1em;
    text-align: justify;
}
</style>
```

### 更多用法 [​]()

play

```
<template>
    <FForm :labelWidth="180">
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
        <FFormItem label="是否原生滚动条：">
            <FRadioGroup v-model="native">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否(默认)</FRadio>
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
    </FForm>

    <FDivider />

    <FSpace vertical>
        <FVirtualList
            class="virtual-scroll-list-more"
            wrapClass="virtual-scroll-list-wrap"
            :dataKey="(data) => data"
            :dataSources="vals"
            :estimateSize="80"
            :height="200"
            :shadow="shadow"
            :always="always"
            :native="native"
            :minSize="minSize"
        >
            <template #default="{ source }">
                <div class="virtual-scroll-item">
                    {{ source }}
                </div>
            </template>
        </FVirtualList>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const shadow = ref(true);
        const always = ref(true);
        const native = ref(false);
        const minSize = ref(10);

        const vals = ref([]);
        for (let i = 0; i < 100; ++i) {
            vals.value.push(i);
        }

        return {
            shadow,
            always,
            native,
            minSize,
            vals,
        };
    },
};
</script>

<style>
.virtual-scroll-list-more .virtual-scroll-list-wrap {
    margin: 0;
    padding: 0;
    width: 1000px;
}
.virtual-scroll-list-more .virtual-scroll-list-wrap .virtual-scroll-item {
    height: 36px;
    background: rgba(83, 132, 255, 0.06);
    border-bottom: 2px solid #fff;
}
.virtual-scroll-list-more
    .virtual-scroll-list-wrap
    .virtual-scroll-item
    + .virtual-scroll-item {
    margin-top: 8px;
}
</style>
```

## VirtualList Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|dataKey|从`dataSources`中的每个数据对象获取唯一键。或者使用每个数据源调用函数并返回其唯一键。其值在数据源中必须是唯一的，用于标识每一项的尺寸。|string \| (data) => string|`-`|
|dataSources|为列表生成的源数组，每个数组数据必须是一个对象，并且具有唯一的 key get 或 generate for`data key`属性。|Array<Object>|`-`|
|keeps|您期望虚拟列表在真实 `dom` 中保持渲染的项目数量。|number|30|
|estimateSize|每项的估计大小，如果它更接近平均大小，滚动条长度看起来更准确。建议指定自己计算的平均值|number|50|
|start|设置滚动位置保持开始索引|number|0|
|offset|设置滚动位置保持偏移|number|0|
|direction|滚动的方向, 可选值为 `vertical` 和 `horizontal`|string|`vertical`|
|wrapTag|列表包裹元素名称|string|`div`|
|wrapClass|列表包裹元素类名|string|\-|
|wrapStyle|列表包裹元素内联样式|object|`{}`|
|topThreshold|触发`toTop` 事件的阈值|number|0|
|bottomThreshold|触发`toBottom` 事件的阈值|number|0|
|observeResize|不响应列表元素尺寸变化，如果尺寸不变，最好设置它可以优化性能|boolean|`true`|
|height|内容高度|number/string|\-|
|maxHeight|内容最大高度|number/string|\-|
|native|是否使用原生滚动样式|boolean|`false`|
|always|总是显示滚动条|boolean|`false`|
|minSize|滚动条滑块的最小尺寸|number|`20`|
|shadow|显示待滚动区域阴影|boolean / `{ x: boolean, y: boolean }`|`false`|

## VirtualList Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|scroll|滚动时触发|(event: Event, range) => void|
|toTop|当滚动到顶部或者左边时触发|() => void|
|toBottom|当滚动到底部或者右边时触发，无参数|() => void|
|resized|列表项渲染尺寸改变时调用|(id, size}) => void|

## VirtualList Methods [​]()

|名称|说明|参数|
|---|---|---|
|reset|将所有状态重置回初始状态|() => void|
|scrollToBottom|手动将滚动位置设置为底部|() => void|
|scrollToIndex|手动将滚动位置设置为指定索引|(index: number) => void|
|scrollToOffset|手动将滚动位置设置为相对指定偏移量|(offset: number) => void|
|getSize|按 id（从`data-key`）获取指定的列表项尺寸。如果已渲染列表中没有该项，则返回`undefined`|(id: number) => number|
|getSizes|获取存储（渲染）项的总数|() => number|
|getOffset|获取当前滚动偏移量|() => number|
|getClientSize|获取包装器元素客户端视口大小（宽度或高度）|() => number|
|getScrollSize|获取所有滚动大小（滚动高度或滚动宽度）|() => number|

阅读原文：http://fe.weoa.com/fes-design/zh/components/virtualList.html