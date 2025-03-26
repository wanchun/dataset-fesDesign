# Drawer 抽屉 [​]()

主要用于当前页面的操作结果需要承载的内容较多的场景使用抽屉组件，逻辑和 Modal 类似

## 组件注册 [​]()

js

```
import { FDrawer } from '@fesjs/fes-design';

app.use(FDrawer);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FButton @click="show[0] = true">常规</FButton>
        <FButton class="ml-10" @click="show[1] = true">没有标题</FButton>
        <FButton class="ml-10" @click="show[2] = true">不显示关闭</FButton>
        <FButton class="ml-10" @click="show[3] = true">没有遮罩</FButton>
        <FButton class="ml-10" @click="show[4] = true">显示页脚</FButton>
        <FDrawer
            v-model:show="show[0]"
            title="常规"
            displayDirective="show"
            @ok="show[0] = false"
            @afterEnter="handleAfterEnter"
            @afterLeave="handleAfterLeave"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>
        <FDrawer
            v-model:show="show[1]"
            displayDirective="if"
            @ok="show[1] = true"
            @afterEnter="handleAfterEnter"
            @afterLeave="handleAfterLeave"
        >
            <FAlert
                style="margin-bottom: 10px"
                type="info"
                message="没有标题..."
            />
            <div>没有标题...</div>
            <div>没有标题...</div>
        </FDrawer>

        <FDrawer
            v-model:show="show[2]"
            title="不显示关闭"
            :closable="false"
            @ok="show[2] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>

        <FDrawer
            v-model:show="show[3]"
            title="没有遮罩"
            :mask="false"
            @ok="show[3] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>
        <FDrawer
            v-model:show="show[4]"
            title="显示页脚"
            :footer="true"
            displayDirective="if"
            @ok="show[4] = false"
        >
            <div style="height: 1000px">我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>
    </FSpace>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const show = reactive([]);

        const handleAfterEnter = (e) => {
            console.log('[modal.common] handleAfterEnter, e:', e);
        };
        const handleAfterLeave = (e) => {
            console.log('[modal.common] handleAfterLeave, e:', e);
        };

        return {
            show,
            handleAfterEnter,
            handleAfterLeave,
        };
    },
};
</script>
```

### 位置 [​]()

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭，默认是 right

play

```
<template>
    <FSpace>
        <FRadioGroup v-model="placement">
            <FRadio value="top">top</FRadio>
            <FRadio value="bottom">bottom</FRadio>
            <FRadio value="left">left</FRadio>
            <FRadio value="right">right</FRadio>
        </FRadioGroup>
    </FSpace>
    <FButton style="margin-top: 20px" @click="open">打开抽屉</FButton>
    <FDrawer
        v-model:show="show"
        title="这里是标题"
        :placement="placement"
        @ok="show = false"
    >
        <div>我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
    </FDrawer>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const placement = ref('right');
        const show = ref(false);
        const open = () => {
            show.value = true;
        };
        return {
            placement,
            show,
            open,
        };
    },
};
</script>
```

### 拖拽 [​]()

可设置宽度或者高度可拖拽，默认 resizable 是 false

play

```
<template>
    <FForm>
        <FFormItem label="位置:">
            <FRadioGroup v-model="placement">
                <FRadio value="top">top</FRadio>
                <FRadio value="bottom">bottom</FRadio>
                <FRadio value="left">left</FRadio>
                <FRadio value="right">right</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="最大尺寸:">
            <FInputNumber v-model="max" />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="最小尺寸:">
            <FInputNumber v-model="min" />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
    </FForm>

    <FDivider />

    <FButton @click="open">打开抽屉</FButton>
    <FDrawer
        v-model:show="show"
        title="这里是标题"
        dimension="600px"
        :placement="placement"
        resizable
        :resizeMax="max"
        :resizeMin="min"
        @ok="show = false"
    >
        <div>我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
    </FDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const placement = ref('right');
const max = ref();
const min = ref();

const open = () => {
    show.value = true;
};
</script>
```

### 自定义头部 [​]()

通过 slot `title`可以自定义页脚内容

play

```
<template>
    <FSpace>
        <FButton @click="show = true">自定义头部</FButton>
        <FDrawer v-model:show="show" title="这里是标题" @ok="show = false">
            <template #title>
                <div class="header">
                    <span style="margin-right: 8px">自定义头部标题</span>
                    <EditOutlined />
                </div>
            </template>
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>
    </FSpace>
</template>

<script>
import { ref } from 'vue';
import { EditOutlined } from '@fesjs/fes-design/icon';

export default {
    components: {
        EditOutlined,
    },
    setup() {
        const show = ref(false);
        return {
            show,
        };
    },
};
</script>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
```

### 自定义页脚 [​]()

通过 slot `footer`可以自定义页脚内容

play

```
<template>
    <FSpace>
        <FButton @click="show = true">自定义页脚</FButton>
        <FDrawer
            v-model:show="show"
            title="这里是标题"
            :footer="true"
            displayDirective="if"
        >
            <div style="height: 1000px">我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
            <template #footer>
                <FSpace justify="end">
                    <FButton>取消</FButton>
                    <FButton type="primary">确认</FButton>
                </FSpace>
            </template>
        </FDrawer>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const show = ref(false);
        return {
            show,
        };
    },
};
</script>
```

### 异步提交 [​]()

针对抽屉确认提交操作。

play

```
<template>
    <FForm>
        <FFormItem label="是否展示取消按钮:">
            <FRadioGroup
                v-model="showCancel"
                :options="[
                    { label: '是(默认)', value: true },
                    { label: '否', value: false },
                ]"
            />
        </FFormItem>
        <FFormItem label="是否显示底部分割线:">
            <FRadioGroup
                v-model="showFooterBorder"
                :options="[
                    { label: '是', value: true },
                    { label: '否(默认)', value: false },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FButton @click="() => (normalShow = true)">常规</FButton>
        <FButton @click="() => (customShow = true)">自定义页脚</FButton>
    </FSpace>

    <FDrawer
        v-model:show="normalShow"
        title="常规"
        displayDirective="if"
        :footer="true"
        :footerBorder="showFooterBorder"
        :okLoading="normalOkLoading"
        :okText="normalOkText"
        :showCancel="showCancel"
        @ok="() => handleNormalOk()"
        @cancel="normalShow = false"
    >
        <div style="height: 1000px">我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
    </FDrawer>

    <FDrawer
        v-model:show="customShow"
        displayDirective="if"
        :footer="true"
        :footerBorder="showFooterBorder"
        title="自定义页脚"
    >
        <div style="height: 1000px">我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
        <template #footer>
            <FSpace justify="end">
                <FButton
                    v-show="showCancel"
                    type="warning"
                    :loading="customCancelLoading"
                    @click="handleCustomCancel"
                >
                    {{ customCancelText }}
                </FButton>
                <FButton
                    type="primary"
                    :loading="customOkLoading"
                    @click="handleCustomOk"
                >
                    {{ customOkText }}
                </FButton>
            </FSpace>
        </template>
    </FDrawer>
</template>

<script>
import { nextTick, ref } from 'vue';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function useDrawer() {
    const show = ref(false);
    const okLoading = ref(false);
    const cancelLoading = ref(false);
    const okText = ref('提交更新');
    const cancelText = ref('数据还原');

    const handleCancel = async () => {
        cancelLoading.value = true;
        cancelText.value = '3s后自动关闭';
        await sleep(3000);
        cancelLoading.value = false;
        show.value = false;
        await nextTick();
        cancelText.value = '数据还原';
    };
    const handleOk = async () => {
        okLoading.value = true;
        okText.value = '2s后自动关闭';
        await sleep(2000);
        okLoading.value = false;
        show.value = false;
        await nextTick();
        okText.value = '提交更新';
    };

    return {
        show,
        okLoading,
        cancelLoading,
        handleCancel,
        handleOk,
        okText,
        cancelText,
    };
}

export default {
    setup() {
        const showCancel = ref(true);
        const showFooterBorder = ref(true);

        const {
            show: normalShow,
            okLoading: normalOkLoading,
            handleOk: handleNormalOk,
            okText: normalOkText,
        } = useDrawer();

        const {
            show: customShow,
            cancelLoading: customCancelLoading,
            okLoading: customOkLoading,
            handleCancel: handleCustomCancel,
            handleOk: handleCustomOk,
            okText: customOkText,
            cancelText: customCancelText,
        } = useDrawer();

        return {
            showFooterBorder,

            normalShow,
            normalOkLoading,
            handleNormalOk,
            normalOkText,
            showCancel,

            customShow,
            customCancelLoading,
            customOkLoading,
            handleCustomCancel,
            handleCustomOk,
            customOkText,
            customCancelText,
        };
    },
};
</script>
```

### 交互 [​]()

仅 mask 为 false 时生效，不显示蒙层时，页面是否可交互

play

```
<template>
    <FSpace>
        <FForm :labelWidth="120">
            <FFormItem label="是否显示蒙层:">
                <FRadioGroup
                    v-model="mask"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="点击蒙层关闭:">
                <FRadioGroup
                    v-model="maskClosable"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="页面是否可交互:">
                <FRadioGroup
                    v-model="operable"
                    :disabled="mask"
                    :options="[
                        { label: '是', value: true },
                        { label: '否(默认)', value: false },
                    ]"
                />
            </FFormItem>
        </FForm>
    </FSpace>
    <FSpace>
        <FButton @click="show = true">打开抽屉</FButton>
    </FSpace>
    <FDrawer
        v-model:show="show"
        title="抽屉组件"
        :mask="mask"
        :operable="operable"
        :maskClosable="maskClosable"
        @ok="show = false"
    >
        <div>我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
    </FDrawer>
</template>

<script setup>
import { ref, watch } from 'vue';

const show = ref(false);
const mask = ref(true);
const maskClosable = ref(true);
const operable = ref(false);

watch(mask, (nextMask) => {
    if (nextMask) {
        operable.value = false;
    }
});
</script>
```

### 关闭抽屉 [​]()

通过配置项可以控制抽屉的关闭方式。

play

```
<template>
    <FSpace>
        <FForm :labelWidth="100">
            <FFormItem label="点击蒙层关闭:">
                <FRadioGroup
                    v-model="maskClosable"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="esc关闭:">
                <FRadioGroup
                    v-model="escClosable"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
        </FForm>
    </FSpace>
    <FSpace>
        <FButton @click="show = true">打开抽屉</FButton>
        <FDrawer
            v-model:show="show"
            title="抽屉"
            :maskClosable="maskClosable"
            :escClosable="escClosable"
            @ok="show = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FDrawer>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);

const maskClosable = ref(true);

const escClosable = ref(true);
</script>
```

## Drawer Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|show|v-model:show，是否显示抽屉|boolean|`false`|
|displayDirective|选择渲染使用的指令，if 对应 v-if，show 对应 v-show，使用 show 的时候不会被重置|string|`show`|
|closable|是否显示右上角关闭图标|boolean|`true`|
|mask|是否显示蒙层|boolean|`true`|
|maskClosable|点击蒙层是否允许关闭|boolean|`true`|
|escClosable|按下 ESC 是否允许关闭|boolean|`true`|
|operable|仅 mask 为 false 时生效，不显示蒙层时，页面是否可交互|boolean|`false`|
|title|标题|string|`-`|
|footer|是否显示底部内容|boolean|`false`|
|footerBorder|是否显示底部分割线|boolean|`false`|
|okText|确认按钮文字|string|确定|
|okLoading|确认按钮 Loading 状态|boolean|`false`|
|showCancel|是否展示取消按钮|boolean|`true`|
|cancelText|取消按钮文字|string|取消|
|dimension|抽屉尺寸|string/number|520|
|width|宽度（即将废弃，推荐使用 dimension）|string/number|520|
|hight|高度，在 placement 为 top 或 bottom 时使用（即将废弃，推荐使用 dimension）|string/number|520|
|placement|抽屉方向|`'right'` `'bottom'` `'left'` `'right'`|`'right'`|
|contentClass|可用于设置内容的类名|string|`-`|
|wrapperClass|可用于设置组件根类名|string|`-`|
|getContainer|指定 `Drawer` 挂载的 HTML 节点|() => HTMLElement|`() => document.body`|
|resizable|是否支持宽度/高度可拖拽|boolean|`false`|
|resizeMax|可拖拽的最大尺寸（如：`100`、`'200px'`、`'30%'`）|number/string|`-`|
|resizeMin|可拖拽的最小尺寸（同上）|number/string|`-`|

## Drawer Event [​]()

|事件名称|说明|回调参数|
|---|---|---|
|cancel|点击遮罩层或右上角叉或取消按钮的回调|event|
|ok|点击确定回调|event|
|afterEnter|Drawer 出现后的回调|event|
|afterLeave|Drawer 关闭后的回调|event|

## Drawer Slots [​]()

|名称|说明|
|---|---|
|default|模态框的内容|
|title|模态框的标题|
|footer|底部内容，一般是自定义按钮|

阅读原文：http://fe.weoa.com/fes-design/zh/components/drawer.html