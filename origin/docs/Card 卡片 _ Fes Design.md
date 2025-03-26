# Card 卡片 [​]()

卡片主要用于对信息进行模块分类。或将零散的信息聚合到一起使其成为一个整体。

## 组件注册 [​]()

js

```
import { FCard } from '@fesjs/fes-design';

app.use(FCard);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <div class="card-wrapper">
        <FCard header="这里是标题">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 投影效果 [​]()

play

```
<template>
    <FRadioGroup v-model="shadow">
        <FRadio value="always">always(默认)</FRadio>
        <FRadio value="hover">hover</FRadio>
        <FRadio value="never">never</FRadio>
    </FRadioGroup>

    <FDivider />

    <div class="card-wrapper">
        <FCard header="这里是标题" :shadow="shadow">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const shadow = ref('always');
</script>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 设置大小 [​]()

play

```
<template>
    <FRadioGroup v-model="size">
        <FRadio value="small">small</FRadio>
        <FRadio value="middle">middle(默认)</FRadio>
        <FRadio value="large">large</FRadio>
    </FRadioGroup>

    <FDivider />

    <div class="card-wrapper">
        <FCard header="这里是标题" :size="size">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const size = ref('middle');
</script>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 是否显示边框 [​]()

play

```
<template>
    <FRadioGroup v-model="bordered">
        <FRadio :value="true">带边框(默认)</FRadio>
        <FRadio :value="false">不带边框</FRadio>
    </FRadioGroup>

    <FDivider />

    <div class="card-wrapper">
        <FCard header="这里是标题" :bordered="bordered">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const bordered = ref(true);
</script>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 是否有标题 [​]()

play

```
<template>
    <FRadioGroup v-model="showHeader">
        <FRadio :value="true">有标题</FRadio>
        <FRadio :value="false">无标题</FRadio>
    </FRadioGroup>

    <FDivider />

    <div class="card-wrapper">
        <FCard :header="showHeader ? '这里是标题' : ''">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showHeader = ref(true);
</script>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 是否有分割线 [​]()

play

```
<template>
    <FRadioGroup v-model="divider">
        <FRadio :value="true">有分割线(默认)</FRadio>
        <FRadio :value="false">无分割线</FRadio>
    </FRadioGroup>

    <FDivider />

    <div class="card-wrapper">
        <FCard header="这里是标题" :divider="divider">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const divider = ref(true);
</script>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 自定义标题 [​]()

play

```
<template>
    <div class="card-wrapper">
        <FCard>
            <template #header>
                <div class="card-header">
                    <span>这里是自定义标题</span>
                    <FButton type="link">操作</FButton>
                </div>
            </template>
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
        </FCard>
    </div>
</template>

<style scoped>
.card-wrapper {
    width: 350px;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
```

### 自定义底栏 [​]()

play

```
<template>
    <div class="card-wrapper">
        <FCard header="这里是标题">
            卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
            <template #footer>
                <FButton size="small">操作</FButton>
                <FButton size="small" style="margin-left: 8px;">按钮</FButton>
            </template>
        </FCard>
    </div>
</template>

<style scoped>
.card-wrapper {
    width: 350px;
}
</style>
```

### 自定义内容 [​]()

play

```
<template>
    <div class="card-wrapper">
        <FCard :bodyStyle="{ padding: '12px 0 0' }">
            <FTabs>
                <FTabPane name="tab1" value="tab1">
                    <div class="tab-content">
                        卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
                    </div>
                </FTabPane>
                <FTabPane name="tab2" value="tab2">
                    <div class="tab-content">
                        卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
                    </div>
                </FTabPane>
                <FTabPane name="tab3" value="tab3">
                    <div class="tab-content">
                        卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
                    </div>
                </FTabPane>
            </FTabs>
        </FCard>
    </div>
</template>

<style scoped>
.card-wrapper {
    width: 350px;
}
.tab-content {
    padding: 16px 24px;
    white-space: normal;
}
</style>
```

## Card Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|header|卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点|string|\-|
|divider|若有 header，则是否显示分割线|boolean|`true`|
|bodyStyle|body 的 CSS 样式|object<CSSProperties>|\-|
|shadow|设置阴影显示时机，可选值为 `always` `never` `hover`|string|`always`|
|bordered|是否有边框|boolean|`true`|
|size|设置卡片大小，可选值为 `small` `middle` `large`|string|`middle`|

## Card Slots [​]()

|名称|说明|
|---|---|
|default|自定义默认内容|
|header|卡片标题内容|
|footer|卡片底栏内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/card.html