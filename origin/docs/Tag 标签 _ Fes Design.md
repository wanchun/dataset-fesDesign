# Tag 标签 [​]()

用于标记项展示。

## 组件注册 [​]()

js

```
import { FTag } from '@fesjs/fes-design';

app.use(FTag);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FTag>Default</FTag>
        <FTag type="success">Success</FTag>
        <FTag type="info">Info</FTag>
        <FTag type="warning">Warning</FTag>
        <FTag type="danger">Danger</FTag>
    </FSpace>
</template>
```

### 可移除标签 [​]()

设置 `closable` 属性可以定义一个标签是否可移除。

play

```
<template>
    <FSpace>
        <FTag
            v-for="tag in closableTags.tags"
            :key="tag.name"
            closable
            :type="tag.type"
        >
            {{ tag.name }}
        </FTag>
    </FSpace>
</template>

<script>
const useCommonTags = () => {
    const tags = [
        { name: 'Default', type: 'default' },
        { name: 'Success', type: 'success' },
        { name: 'Info', type: 'info' },
        { name: 'Warning', type: 'warning' },
        { name: 'Danger', type: 'danger' },
    ];

    return {
        tags,
    };
};
export default {
    setup() {
        const closableTags = useCommonTags();
        return {
            closableTags,
        };
    },
};
</script>
```

### 动态编辑标签 [​]()

动态编辑标签可以通过点击标签关闭按钮后触发的 `close` 事件来实现

play

```
<template>
    <FSpace>
        <FTag
            v-for="tag in dynamicTags.state.tags"
            :key="tag"
            closable
            @close="dynamicTags.handleClose(tag)"
        >
            {{ tag }}
        </FTag>
        <div>
            <FInput
                v-if="dynamicTags.state.inputVisible"
                ref="inputRef"
                v-model="dynamicTags.state.inputValue"
                class="input-tag"
                size="small"
                @change="dynamicTags.handleInputConfirm"
            />
            <FButton v-else class="button-tag" @click="dynamicTags.showInput">
                + New Tag
            </FButton>
        </div>
    </FSpace>
</template>

<script>
import { nextTick, reactive, ref } from 'vue';

const useDynamicTags = (inputRef) => {
    const state = reactive({
        tags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
    });

    const handleClose = (tag) => {
        state.tags.splice(state.tags.indexOf(tag), 1);
    };
    const showInput = async () => {
        state.inputVisible = true;
        await nextTick();
        inputRef.value?.focus();
    };
    const handleInputConfirm = () => {
        const inputValue = state.inputValue;
        if (inputValue) {
            state.tags.push(inputValue);
        }
        state.inputVisible = false;
        state.inputValue = '';
    };

    return {
        state,
        handleClose,
        showInput,
        handleInputConfirm,
    };
};
export default {
    setup() {
        const inputRef = ref(null);
        // 动态编辑标签
        const dynamicTags = useDynamicTags(inputRef);

        return {
            dynamicTags,
            inputRef,
        };
    },
};
</script>

<style scoped>
.input-tag,
.button-tag {
    width: 100px;
}
</style>
```

### 不同尺寸 [​]()

Tag 组件提供了以下几种尺寸，可以在不同场景下选择合适的尺寸。

play

```
<template>
    <FSpace>
        <FTag size="large" closable>Large</FTag>
        <FTag size="middle" closable>Middle</FTag>
        <FTag size="small" closable>Small</FTag>
    </FSpace>
</template>
```

### 不同主题 [​]()

Tag 组件提供了三个不同的主题。

play

```
<template>
    <FSpace>
        <div class="tag-group">
            <span class="tag-group__title">默认：</span>
            <FTag
                v-for="item in effectTags"
                :key="item.name"
                :type="item.type"
                effect=""
            >
                {{ item.name }}
            </FTag>
        </div>
        <div class="tag-group">
            <span class="tag-group__title">Light：</span>
            <FTag
                v-for="item in effectTags"
                :key="item.name"
                :type="item.type"
                closable
                effect="light"
            >
                {{ item.name }}
            </FTag>
        </div>
        <div class="tag-group">
            <span class="tag-group__title">Dark：</span>
            <FTag
                v-for="item in effectTags"
                :key="item.name"
                :type="item.type"
                closable
                effect="dark"
            >
                {{ item.name }}
            </FTag>
        </div>
        <div class="tag-group">
            <span class="tag-group__title">Plain：</span>
            <FTag
                v-for="item in effectTags"
                :key="item.name"
                :type="item.type"
                closable
                effect="plain"
            >
                {{ item.name }}
            </FTag>
        </div>
    </FSpace>
</template>

<script>
export default {
    setup() {
        // 不同主题
        const effectTags = [
            { name: 'Default', type: 'default' },
            { name: 'Success', type: 'success' },
            { name: 'Info', type: 'info' },
            { name: 'Warning', type: 'warning' },
            { name: 'Danger', type: 'danger' },
        ];
        return {
            effectTags,
        };
    },
};
</script>

<style>
.tag-group .fes-tag {
    margin-right: 12px;
}
</style>

<style scoped>
.tag-group {
    display: flex;
    align-items: center;
}
.tag-group + .tag-group {
    margin-top: 10px;
}
.tag-group__title {
    width: 100px;
    font-size: 14px;
}
</style>
```

### 带图标 [​]()

play

```
<template>
    <FSpace>
        <FTag closable>
            <template #icon>
                <UserOutlined style="margin-right: 5px" />
            </template>
            Default
        </FTag>
    </FSpace>
</template>
```

### 结合 Form 组件 [​]()

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="标签列表：">
            <FSpace>
                <FTag
                    v-for="tag in dynamicTags.state.tags"
                    :key="tag"
                    closable
                    @close="dynamicTags.handleClose(tag)"
                >
                    {{ tag }}
                </FTag>

                <div>
                    <FInput
                        v-show="dynamicTags.state.inputVisible"
                        ref="inputRef"
                        v-model="dynamicTags.state.inputValue"
                        class="input-tag"
                        size="small"
                        @change="dynamicTags.handleInputConfirm"
                    />
                    <FButton
                        v-show="!dynamicTags.state.inputVisible"
                        class="button-tag"
                        @click="dynamicTags.showInput"
                    >
                        + New Tag
                    </FButton>
                </div>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script>
import { nextTick, reactive, ref } from 'vue';

const useDynamicTags = (inputRef) => {
    const state = reactive({
        tags: [
            '标签一',
            '标签二',
            '标签三',
            '标签四',
            '标签五',
            '标签六',
            '标签七',
            '标签八',
            '标签九',
            '标签十',
            '标签十一',
        ],
        inputVisible: false,
        inputValue: '',
    });

    const handleClose = (tag) => {
        state.tags.splice(state.tags.indexOf(tag), 1);
    };
    const showInput = async () => {
        state.inputVisible = true;
        await nextTick();
        inputRef.value?.focus();
    };
    const handleInputConfirm = () => {
        const inputValue = state.inputValue;
        if (inputValue) {
            state.tags.push(inputValue);
        }
        state.inputVisible = false;
        state.inputValue = '';
    };

    return {
        state,
        handleClose,
        showInput,
        handleInputConfirm,
    };
};
export default {
    setup() {
        const inputRef = ref(null);
        // 动态编辑标签
        const dynamicTags = useDynamicTags(inputRef);

        return {
            dynamicTags,
            inputRef,
        };
    },
};
</script>

<style scoped>
.input-tag,
.button-tag {
    width: 100px;
}
</style>
```

### 超长省略 [​]()

play

```
<template>
    <FSpace>
        <FTag closable>
            <FEllipsis style="max-width: 240px">
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光
                停滞的海浪
            </FEllipsis>
        </FTag>
        <FTag type="info">
            <FEllipsis style="max-width: 240px">
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光
                停滞的海浪
            </FEllipsis>
        </FTag>
    </FSpace>
</template>
```

## Tag Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|type|类型，可选值为`default` `success` `info` `warning` `danger`|string|`default`|
|closable|是否可关闭|boolean|`false`|
|backgroundColor|背景色|string|—|
|size|尺寸，可选值为 `small` `middle` `large`|string|`middle`|
|effect|主题，可选值为 `dark` `light` `plain`|string|`light`|
|bordered|是否有边框|boolean|`true`|

## Tag Slots [​]()

|slot 名称|说明|
|---|---|
|default|标签文本内容|
|icon|标签文本左侧图标|

## Tag Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|click|点击 Tag 时触发的事件|—|
|close|关闭 Tag 时触发的事件|—|

阅读原文：http://fe.weoa.com/fes-design/zh/components/tag.html