# Dropdown 下拉菜单 [​]()

向下弹出的列表。

## 组件注册 [​]()

js

```
import { FDropdown } from '@fesjs/fes-design';

app.use(FDropdown);
```

## 代码演示 [​]()

### 基础用法 [​]()

简单的下拉菜单。

play

```
<template>
    <FDropdown arrow :options="options">
        <FButton>下拉菜单</FButton>
    </FDropdown>
</template>

<script>
export default {
    setup() {
        const options = [
            {
                value: '1',
                label: '删除',
                disabled: true,
            },
            {
                value: '2',
                label: '修改',
            },
            {
                value: '3',
                label: '添加',
            },
            {
                value: '4',
                label: '评论',
            },
            {
                value: '5',
                label: '收藏',
            },
        ];
        return {
            options,
        };
    },
};
</script>
```

### 选中效果 [​]()

展示选中选项

play

```
<template>
    <FDropdown
        v-model="dropdownValue"
        arrow
        :options="options"
        showSelectedOption
        popperClass="dropdown-content-wrapper"
        @scroll="handleScroll"
        @click="handleClick"
        @change="handleChange"
    >
        <FButton>下拉菜单</FButton>
    </FDropdown>
</template>

<script setup>
import { ref } from 'vue';

const dropdownValue = ref('3');

const options = [
    {
        value: '1',
        label: '删除',
        disabled: true,
    },
    {
        value: '2',
        label: '修改',
    },
    {
        value: '3',
        label: '添加',
    },
    {
        value: '4',
        label: '评论',
    },
    {
        value: '5',
        label: '收藏',
    },
    {
        value: '6',
        label: '点赞',
    },
    {
        value: '7',
        label: '分享',
    },
    {
        value: '8',
        label: '投诉',
    },
    {
        value: '9',
        label: '建议',
    },
    {
        value: '10',
        label: '更新',
    },
    {
        value: '11',
        label: '编辑',
    },
    {
        value: '12',
        label: '更多',
    },
];

const handleScroll = (e) => {
    console.log('[dropdown.check] handleScroll, e:', e);
};
const handleClick = (value) => {
    console.log('[dropdown.check] handleClick, value:', value);
};
const handleChange = (value) => {
    console.log('[dropdown.check] handleChange, value:', value);
};
</script>

<style>
.dropdown-content-wrapper .fes-dropdown-option-wrapper {
    max-height: 320px;
}
</style>
```

### 图标 [​]()

菜单项可配置图标。

play

```
<template>
    <FDropdown :options="options">
        <FButton>下拉菜单</FButton>
    </FDropdown>
</template>

<script>
import { h } from 'vue';
import {
    DeleteOutlined,
    EditOutlined,
    PlusSquareOutlined,
    StarOutlined,
    UserOutlined,
} from '@fesjs/fes-design/icon';

export default {
    setup() {
        const options = [
            {
                value: '1',
                label: '删除',
                icon: () => {
                    return h(DeleteOutlined);
                },
            },
            {
                value: '2',
                label: '修改',
                icon: () => {
                    return h(EditOutlined);
                },
            },
            {
                value: '3',
                label: '添加',
                icon: () => {
                    return h(PlusSquareOutlined);
                },
            },
            {
                value: '4',
                label: '评论',
                icon: () => {
                    return h(UserOutlined);
                },
            },
            {
                value: '5',
                label: '收藏',
                icon: () => {
                    return h(StarOutlined);
                },
            },
        ];
        return {
            options,
        };
    },
};
</script>
```

### 触发方式 [​]()

触发下拉菜单弹出的行为有`hover`、`click`、`focus`、`contextmenu`

play

```
<template>
    <FSpace>
        <FSelect v-model="trigger" style="width: 100px">
            <FOption value="hover">hover</FOption>
            <FOption value="click">click</FOption>
            <FOption value="focus">focus</FOption>
            <FOption value="contextmenu">contextmenu</FOption>
        </FSelect>
        <FDropdown :trigger="trigger" :options="options">
            <FButton>{{ trigger }}</FButton>
        </FDropdown>
    </FSpace>
</template>

<script>
import { h, ref } from 'vue';
import {
    DeleteOutlined,
    EditOutlined,
    PlusSquareOutlined,
    StarOutlined,
    UserOutlined,
} from '@fesjs/fes-design/icon';

export default {
    setup() {
        const trigger = ref('hover');
        const options = [
            {
                value: '1',
                label: '删除',
                icon: () => {
                    return h(DeleteOutlined);
                },
            },
            {
                value: '2',
                label: '修改',
                icon: () => {
                    return h(EditOutlined);
                },
            },
            {
                value: '3',
                label: '添加',
                icon: () => {
                    return h(PlusSquareOutlined);
                },
            },
            {
                value: '4',
                label: '评论',
                icon: () => {
                    return h(UserOutlined);
                },
            },
            {
                value: '5',
                label: '收藏',
                icon: () => {
                    return h(StarOutlined);
                },
            },
        ];
        return {
            trigger,
            options,
        };
    },
};
</script>
```

### 弹出位置 [​]()

弹出位置，可选`auto`、`auto-start`、`auto-end`、`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`right`、`right-start`、`right-end`、`left`、`left-start`、`left-end`

play

```
<template>
    <FSpace>
        <FDropdown placement="top" :options="options">
            <FButton>top</FButton>
        </FDropdown>
        <FDropdown placement="bottom" :options="options">
            <FButton>bottom</FButton>
        </FDropdown>
        <FDropdown placement="left" :options="options">
            <FButton>left</FButton>
        </FDropdown>
        <FDropdown placement="right" :options="options">
            <FButton>right</FButton>
        </FDropdown>
    </FSpace>
</template>

<script>
import { h } from 'vue';
import {
    DeleteOutlined,
    EditOutlined,
    PlusSquareOutlined,
    StarOutlined,
    UserOutlined,
} from '@fesjs/fes-design/icon';

export default {
    setup() {
        const options = [
            {
                value: '1',
                label: '删除',
                icon: () => {
                    return h(DeleteOutlined);
                },
            },
            {
                value: '2',
                label: '修改',
                icon: () => {
                    return h(EditOutlined);
                },
            },
            {
                value: '3',
                label: '添加',
                icon: () => {
                    return h(PlusSquareOutlined);
                },
            },
            {
                value: '4',
                label: '评论',
                icon: () => {
                    return h(UserOutlined);
                },
            },
            {
                value: '5',
                label: '收藏',
                icon: () => {
                    return h(StarOutlined);
                },
            },
        ];
        return {
            options,
        };
    },
};
</script>
```

### 禁用 [​]()

下拉菜单无法弹出。

play

```
<template>
    <FDropdown disabled :options="options">
        <FButton>hover</FButton>
    </FDropdown>
</template>

<script>
export default {
    setup() {
        const options = [
            {
                value: '1',
                label: '删除',
                disabled: true,
            },
            {
                value: '2',
                label: '修改',
            },
            {
                value: '3',
                label: '添加',
            },
            {
                value: '4',
                label: '评论',
            },
            {
                value: '5',
                label: '收藏',
            },
        ];
        return {
            options,
        };
    },
};
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|options|下拉菜单选项配置|Array<DropdownOption>|`[]`|
|valueField|value 的属性名|string|`value`|
|labelField|label 的属性名|string|`label`|
|visible|是否弹出|boolean|`false`|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|getContainer|指定下拉选项挂载的 HTML 节点|() => HTMLElement|`() => document.body`|
|trigger|触发弹窗的方式，可选`hover`、`click`、`focus`、`contextmenu`|string|`hover`|
|placement|弹出位置，可选`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`right`、`right-start`、`right-end`、`left`、`left-start`、`left-end`|string|`bottom`|
|offset|下拉菜单弹窗距离触发元素的距离,单位 px|number|`6`|
|disabled|是否禁用|boolean|`false`|
|arrow|是否显示箭头|boolean|`false`|
|showSelectedOption|是否显示选中选项|boolean|`false`|
|popperClass|弹出框容器样式|string|\-|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|click|点击选项的回调|(value) => void|
|visibleChange|菜单显示状态改变时调用|(visible: Boolean) => void|
|scroll|滚动事件|(event: Event) => void|

## Slots [​]()

|名称|说明|
|---|---|
|default|触发下拉菜单的内容|

## DropdownOption [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|节点的 `key`，需要唯一，可使用 `valueField` 修改字段名|string \| number|`-`|
|label|节点的内容，可使用 `labelField` 修改字段名|string \| (item) => VNodeChild|`-`|
|disabled?|是否禁用节点|boolean|`false`|
|icon?|节点的图标|() => VNodeChild|`null`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/dropdown.html