# Layout 布局 [​]()

* `Layout`：布局容器，其下可嵌套 `Header`、`Aside`、`Main`、`Footer` 或 `Layout` 本身，可以放在任何父容器中。**`Layout`默认是水平布局，当包含`Header`或者`Footer`时变为垂直布局**。
* `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Aside`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Main`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
* `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

## 组件注册 [​]()

js

```
import { FLayout } from '@fesjs/fes-design';

app.use(FLayout);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <f-layout>
        <f-header />
        <f-main />
        <f-footer />
    </f-layout>

    <f-layout style="margin-top: 20px">
        <f-header />
        <f-layout>
            <f-aside />
            <f-main />
        </f-layout>
        <f-footer />
    </f-layout>

    <f-layout style="margin-top: 20px">
        <f-aside />
        <f-layout>
            <f-header />
            <f-main />
            <f-footer />
        </f-layout>
    </f-layout>
</template>

<style scoped>
.fes-layout-header,
.fes-layout-footer {
    background: rgba(128, 128, 128, 0.2);
}

.fes-layout-footer {
    padding: 24px;
}

.fes-layout-aside {
    background: rgba(128, 128, 128, 0.3);
}

.fes-layout-main {
    padding: 24px;
    background: rgba(128, 128, 128, 0.4);
}
</style>
```

### 嵌入效果 [​]()

play

```
<template>
    <f-layout embedded>
        <f-main class="demo-main-wrapper">
            <div class="demo-main-page">Main</div>
        </f-main>
    </f-layout>
</template>

<style scoped>
.demo-main-wrapper {
    padding: 24px;
}
.demo-main-page {
    padding: 16px;
    background: #ffffff;
}
</style>
```

### 使用边框 [​]()

aside、footer、header 可以设定 `bordered`。

play

```
<template>
    <f-layout>
        <f-aside bordered> Aside </f-aside>
        <f-layout>
            <f-header bordered> Header </f-header>
            <f-main> Main </f-main>
            <f-footer bordered> Footer </f-footer>
        </f-layout>
    </f-layout>
</template>

<style scoped></style>
```

### 绝对定位 [​]()

除了`Main`组件之外其他布局组件可以使用绝对定位。如果你期望内容在固定的区域内滚动，可以使用 `fixed` 模式。

play

```
<template>
    <f-layout style="height: 400px">
        <f-header bordered fixed> Header </f-header>
        <f-layout fixed style="top: 54px; bottom: 70px">
            <f-aside> Aside </f-aside>
            <f-main>
                <f-table :data="data">
                    <f-table-column
                        prop="date"
                        label="日期"
                        :width="150"
                        ellipsis
                        fixed
                    />
                    <f-table-column
                        prop="name"
                        label="姓名"
                        :width="150"
                    />
                    <f-table-column
                        prop="province"
                        label="省份"
                        :width="150"
                    />
                    <f-table-column prop="city" label="市区" :width="150" />
                    <f-table-column
                        prop="address"
                        label="地址"
                        :width="800"
                    />
                    <f-table-column prop="zip" label="邮编" :width="120" />
                    <f-table-column
                        label="操作"
                        align="center"
                        :width="200"
                        :action="action"
                        fixed="right"
                    />
                </f-table>
            </f-main>
        </f-layout>
        <f-footer fixed bordered class="demo-tal">
            We Design ©2018 Created by MumbleFE
        </f-footer>
    </f-layout>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const data = reactive(
            Array.from([1, 2, 3], (i) => {
                return {
                    date: `2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-2016-05-${
                        i < 10 ? `0${i}` : i
                    }`,
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                };
            }),
        );
        const action = [
            {
                label: '编辑',
                func: (row) => {
                    console.log('[layout.fixed] [action.编辑] row:', row);
                },
            },
            {
                label: '删除',
                func: (row) => {
                    console.log('[layout.fixed] [action.删除] row:', row);
                },
            },
        ];
        return {
            data,
            action,
        };
    },
};
</script>

<style scoped>
.fes-layout-main {
    min-height: 500px;
    padding: 24px;
}
.fes-layout-footer {
    text-align: center;
    padding: 16px;
}
</style>
```

### 侧边栏布局 [​]()

play

```
<template>
    <f-layout style="height: 400px">
        <f-aside v-model:collapsed="collapsed" inverted fixed collapsible>
            <div style="height: 800px" />
        </f-aside>
        <f-layout fixed :style="{ left: collapsed ? '48px' : '200px' }">
            <f-header bordered fixed> Header </f-header>
            <f-layout embedded fixed style="top: 54px">
                <f-main>
                    <div class="main-page">Main</div>
                </f-main>
                <f-footer> We Design ©2018 Created by MumbleFE </f-footer>
            </f-layout>
        </f-layout>
    </f-layout>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const collapsed = ref(false);
        return {
            collapsed,
        };
    },
};
</script>

<style scoped>
.fes-layout-main {
    padding: 24px 24px 0;
}
.main-page {
    background: #ffffff;
    min-height: 500px;
    padding: 24px;
}
.fes-layout-footer {
    padding: 16px;
    text-align: center;
}
</style>
```

### 头部布局 [​]()

play

```
<template>
    <f-layout style="height: 400px">
        <f-header inverted bordered fixed> Header </f-header>
        <f-layout embedded fixed style="top: 54px">
            <f-main>
                <div class="main-page">Main</div>
            </f-main>
            <f-footer> We Design ©2018 Created by MumbleFE </f-footer>
        </f-layout>
    </f-layout>
</template>

<style scoped>
.fes-layout-main {
    padding: 24px 24px 0;
}
.main-page {
    background: #ffffff;
    min-height: 500px;
    padding: 24px;
}
.fes-layout-footer {
    padding: 16px;
    text-align: center;
}
</style>
```

### 混合布局 [​]()

play

```
<template>
    <f-layout style="height: 400px">
        <f-header inverted bordered fixed> Header </f-header>
        <f-layout fixed style="top: 54px">
            <f-aside> Aside </f-aside>
            <f-layout embedded>
                <f-main>
                    <div class="main-page">Main</div>
                </f-main>
                <f-footer> We Design ©2018 Created by MumbleFE </f-footer>
            </f-layout>
        </f-layout>
    </f-layout>
</template>

<style scoped>
.fes-layout-main {
    padding: 24px 24px 0;
}
.main-page {
    background: #ffffff;
    min-height: 500px;
    padding: 24px;
}
.fes-layout-footer {
    padding: 16px;
    text-align: center;
}
</style>
```

## Layout Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|embedded|使用更深的背景色展现嵌入效果|boolean|`false`|
|fixed|`fixed` 模式将会把 CSS position 设为 absolute，还将 left、right、top、bottom 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示|boolean|`false`|
|containerClass|可滚动内容节点的类|array/object/style|`-`|
|containerStyle|可滚动内容节点的样式|object|`-`|

## Header Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|fixed|`fixed` 模式将会把 CSS position 设为 absolute，还将 left、right、top 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示|boolean|`false`|
|bordered|是否添加边框|boolean|`false`|
|inverted|是否使用深色|boolean|`false`|

## Aside Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|collapsible|侧边栏是否能够折叠|boolean|`false`|
|collapsed(v-model)|侧边栏是否折叠|boolean|\-|
|collapsedWidth|侧边栏折叠后的宽度|string|64px|
|fixed|是否固定住侧边栏，当固定时 `position` 为 `fixed`，当`Container`区域滚动时，不会跟随滚动|boolean|`false`|
|width|侧边栏宽度|string|200px|
|showTrigger|是否显示默认的折叠按钮|boolean|`true`|
|bordered|是否添加边框|boolean|`false`|
|inverted|是否使用深色|boolean|`false`|
|fixed|`fixed` 模式将会把 CSS position 设为 absolute，还将 left、bottom、top 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示|boolean|`false`|

## Main Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|embedded|使用更深的背景色展现嵌入效果|boolean|`false`|

## Footer Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|embedded|使用更深的背景色展现嵌入效果|boolean|`false`|
|fixed|`fixed` 模式将会把 CSS position 设为 absolute，还将 left、bottom、right 设为 0。absolute 模式在你想将内容在一个固定容器或者将这个页面的布局设为固定位置的时候很有用。你可能需要修改一些 style 来确保它按照你预想的方式展示|boolean|`false`|
|bordered|是否添加边框|boolean|`false`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/layout.html