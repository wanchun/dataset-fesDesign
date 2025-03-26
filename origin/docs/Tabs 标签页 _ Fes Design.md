# Tabs 标签页 [​]()

当内容较多需要对内容进行分类，可使用标签页来展示各项分类内容，标签页和导航有点类似，只是在内容层级上有所区别，标签页属于更详细的内容分类

## 组件注册 [​]()

js

```
import { FTabs } from '@fesjs/fes-design';

app.use(FTabs);
```

## 代码演示 [​]()

### 基础用法 [​]()

默认选中第一项。

play

```
<template>
    <FTabs @change="handleChange" @clickTab="handleClickTab">
        <FTabPane name="T恤" value="T恤">
            <div class="tab-content">T恤</div>
        </FTabPane>
        <FTabPane name="卫衣啊卫衣" value="卫衣" displayDirective="show">
            <div class="tab-content">卫衣</div>
        </FTabPane>
        <FTabPane name="衬衫" value="衬衫">
            <div class="tab-content">衬衫</div>
        </FTabPane>
    </FTabs>
</template>

<script lang="ts" setup>
const handleChange = (value: string | number) => {
    console.log('[tabs.common] handleChange, value:', value);
};
const handleClickTab = (value: string | number) => {
    console.log('[tabs.common] handleClickTab, value:', value);
};
</script>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}
</style>
```

### 禁用 [​]()

禁用某一项。

play

```
<template>
    <FTabs>
        <FTabPane name="T恤" value="T恤">
            <div class="tab-content">T恤</div>
        </FTabPane>
        <FTabPane name="卫衣" value="卫衣" disabled>
            <div class="tab-content">卫衣</div>
        </FTabPane>
        <FTabPane name="衬衫" value="衬衫">
            <div class="tab-content">衬衫</div>
        </FTabPane>
    </FTabs>
</template>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}
</style>
```

### 图标 [​]()

有图标的标签。

play

```
<template>
    <FTabs>
        <FTabPane value="微笑">
            <template #tab>
                <span class="my-tab"><UserOutlined />&nbsp;微笑</span>
            </template>
            <div class="tab-content">微笑</div>
        </FTabPane>
        <FTabPane value="等待">
            <template #tab>
                <span class="my-tab"><ClockCircleOutlined />&nbsp;等待</span>
            </template>
            <div class="tab-content">等待</div>
        </FTabPane>
    </FTabs>
</template>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}

.my-tab {
    display: flex;
    align-items: center;
}
</style>
```

### 展示指令 [​]()

可以制定标签页展示的指令为 if 、 show 或者 show:lazy 。使用 show 的时候标签页内容不会随着切换重置。使用 show:lazy 的时候显示效果跟 show 一致，不过内容会进行延迟加载。

play

```
<template>
    <FTabs>
        <FTabPane name="show" displayDirective="show" value="show">
            <FInput
                style="margin-top: 20px"
                placeholder="切换tab内容不会被重置"
            />
        </FTabPane>
        <FTabPane name="show2" displayDirective="show" value="show2">
            <FInput
                style="margin-top: 20px"
                placeholder="切换tab内容不会被重置"
            />
        </FTabPane>
        <FTabPane name="if" displayDirective="if" value="if">
            <FInput style="margin-top: 20px" placeholder="切换tab内容被重置" />
        </FTabPane>
        <FTabPane
            name="show:lazy"
            displayDirective="show:lazy"
            value="show:lazy"
        >
            <FInput
                style="margin-top: 20px"
                placeholder="延迟加载，并且之后的切换内容不会重置"
            />
        </FTabPane>
    </FTabs>
</template>
```

### 位置 [​]()

指定标签的位置，`position = 'left' | 'top' | 'right' | 'bottom'`

play

```
<template>
    <FRadioGroup
        v-model="position"
        :cancelable="false"
        :options="
            ['top', 'bottom', 'left', 'right'].map((i) => ({
                label: i,
                value: i,
            }))
        "
    />
    <FDivider />

    <FTabs :position="position" style="height: 300px">
        <FTabPane v-for="i in 20" :key="i" :name="`Tab ${i}`" :value="i">
            <div class="tab-content">Tab {{ i }}</div>
        </FTabPane>
    </FTabs>
</template>

<script setup>
import { ref } from 'vue';

const position = ref('left');
</script>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 300px;
    text-align: center;
}
</style>
```

### 前缀 & 后缀 [​]()

使用 prefix、suffix slot 来添加前后缀。

play

```
<template>
    <FForm>
        <FFormItem label="位置:">
            <FRadioGroup
                v-model="position"
                :cancelable="false"
                :options="
                    ['top', 'bottom', 'left', 'right'].map((i) => ({
                        label: i,
                        value: i,
                    }))
                "
            />
        </FFormItem>
        <FFormItem label="展示前缀:">
            <FSwitch v-model="showPrefix" />
        </FFormItem>
        <FFormItem label="展示后缀:">
            <FSwitch v-model="showSuffix" />
        </FFormItem>
    </FForm>
    <FDivider />

    <FTabs :position="position" style="height: 300px">
        <FTabPane
            v-for="i in 2"
            :key="i"
            :name="`Tab ${i}`"
            :value="i"
            closable
        >
            <div class="tab-content">Tab {{ i }}</div>
        </FTabPane>
        <template v-if="showPrefix" #prefix>Prefix</template>
        <template v-if="showSuffix" #suffix>Suffix</template>
    </FTabs>
</template>

<script setup>
import { ref } from 'vue';

const position = ref('left');
const showPrefix = ref(true);
const showSuffix = ref(true);
</script>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}
</style>
```

### 卡片式页签 [​]()

另一种样式的页签，仅支持 `position = 'top'`

play

```
<template>
    <FTabs type="card">
        <FTabPane name="T恤" value="T恤">
            <div class="tab-content">T恤</div>
        </FTabPane>
        <FTabPane name="卫衣" value="卫衣">
            <div class="tab-content">卫衣</div>
        </FTabPane>
        <FTabPane name="衬衫" value="衬衫">
            <div class="tab-content">衬衫</div>
        </FTabPane>
    </FTabs>
</template>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}
</style>
```

### 可关闭或增加页签 [​]()

卡片式页签，设置了可删除后，hover 时显示删除按钮

play

```
<template>
    <FTabs
        v-model="activeTab"
        type="card"
        addable
        closable
        @close="handleCloseTab"
        @add="handleAddTab"
        @change="handleChangeTab"
    >
        <FTabPane
            v-for="(tab, index) in tabs"
            :key="index"
            :name="tab"
            :closable="tab !== '卫衣'"
            :value="index"
        >
            <div class="tab-content">{{ tab }}</div>
        </FTabPane>
    </FTabs>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const tabs = reactive(['T恤', '卫衣', '衬衫', '夹克']);
        const activeTab = ref(0);

        function handleCloseTab(key) {
            tabs.splice(key, 1);
            if (activeTab.value === key) {
                activeTab.value
                    = key >= tabs.length - 1 ? tabs.length - 1 : key;
            } else if (activeTab.value > key) {
                activeTab.value = activeTab.value - 1;
            }
        }

        function handleAddTab() {
            tabs.push(`New Tab${tabs.length + 1}`);
            activeTab.value = tabs.length - 1;
        }
        const handleChangeTab = (key) => {
            console.log('[tabs.closable] [handleChangeTab] key:', key);
        };
        return {
            tabs,
            activeTab,
            handleCloseTab,
            handleAddTab,
            handleChangeTab,
        };
    },
};
</script>

<style scoped>
.tab-content {
    background: #fff;
    line-height: 60px;
    text-align: center;
}
</style>
```

### 使用配置 [​]()

play

```
<template>
    <FTabs :panes="tabPanes" />
</template>

<script setup>
import { h } from 'vue';

const render = (param) =>
    h(
        'div',
        {
            style: {
                background: '#fff',
                lineHeight: '60px',
                textAlign: 'center',
            },
        },
        [param.name],
    );
const tabPanes = [
    { name: 'T恤', value: 'T恤', render },
    { name: '卫衣啊卫衣', value: '卫衣', render },
    { name: '衬衫', value: '衬衫', render, renderTab: () => '衬衫99' },
];
</script>
```

## Tabs Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue|当前激活 tab 面板的 key|number / string|\-|
|position|页签位置，可选值有`left` `top` `right` `bottom`|string|`top`|
|type|页签的基本样式，可选`card` `line`|string|`line`|
|closable|页签是否可关闭，type 为`card`时可用|boolean|`false`|
|closeMode|关闭显示的方式，可选`hover` `visible`|string|`visible`|
|transition|自定义页签切换过渡 TransitionGroup 的动画名。默认是 true，使用内置过渡动画|string/boolean|`true`|
|panes|配置页签|TabPaneProps\[\]|`[]`|

## Tabs Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|close|页签关闭按钮点击回调|(key) => {}|
|change|切换 tab 时回调|(key) => {}|
|clickTab|点击 tab 时回调|(key) => {}|

## Tabs Slots [​]()

|名称|说明|
|---|---|
|default|TabPane 页签面板|
|prefix|tabs 的前置内容|
|suffix|tabs 的后置内容|

## TabPane Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|tab 的值|string / number|\-|
|name|tab 的名称|string / number|\-|
|disabled|是否禁用|boolean|`false`|
|closable|是否可关闭|boolean|`false`|
|displayDirective|选择渲染使用的指令为 if 、 show 或者 show:lazy。使用 show 的时候标签页内容不会随着切换重置。使用 show:lazy 的时候显示效果跟 show 一致，不过内容会进行延迟加载。|string|`if`|
|render|自定义内容，仅在配置 panes 中有效|(props: TabProps) => VNodeChild|\-|
|renderTab|自定义页签，，仅在配置 panes 中有效|(props: TabProps) => VNodeChild|\-|

## TabPane Slots [​]()

|名称|说明|
|---|---|
|default|TabPane 内容|
|tab|标签项 tab 的内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/tabs.html