# Modal 模态框 [​]()

模态框通常以模态形式出现，因此叫模态框，例如像对话框、弹窗等都属于模态框，主要引导用户进行相关操作。

## 组件注册 [​]()

js

```
import { FModal } from '@fesjs/fes-design';

app.use(FModal);
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
        <FButton class="ml-10" @click="show[4] = true">内容居中</FButton>
        <FButton class="ml-10" @click="show[6] = true">全屏</FButton>
        <FButton class="ml-10" @click="show[7] = true">垂直居中</FButton>
        <FModal
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
        </FModal>
        <FModal
            v-model:show="show[1]"
            displayDirective="if"
            @ok="show[1] = false"
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
            <div>没有标题...</div>
        </FModal>

        <FModal
            v-model:show="show[2]"
            title="不显示关闭"
            :closable="false"
            @ok="show[2] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>

        <FModal
            v-model:show="show[3]"
            title="没有遮罩"
            :mask="false"
            @ok="show[3] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>

        <FModal
            v-model:show="show[4]"
            title="内容居中"
            center
            @ok="show[4] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>

        <FModal
            v-model:show="show[6]"
            title="全屏"
            full-screen
            @ok="show[6] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>

        <FModal
            v-model:show="show[7]"
            title="垂直居中"
            vertical-center
            @ok="show[7] = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>
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

### 自定义头部 [​]()

通过 slot `title`可以自定义页脚内容

play

```
<template>
    <FSpace>
        <FButton @click="show = true">自定义头部</FButton>
        <FModal v-model:show="show" title="这里是标题" @ok="show = false">
            <template #title>
                <div class="header">
                    <span style="margin-right: 8px">自定义头部标题</span>
                    <EditOutlined />
                </div>
            </template>
            您的订单还未支付完成，退出将放弃购买
        </FModal>
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
        <FModal v-model:show="show" title="这里是标题">
            您的订单还未支付完成，退出将放弃购买
            <template #footer>
                <FSpace justify="end">
                    <FButton type="warning"> 放弃购买 </FButton>
                    <FButton type="success">立即支付</FButton>
                </FSpace>
            </template>
        </FModal>
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

### 全局方法 - 确认对话框 [​]()

使用 `confirm()` 可以快捷地弹出确认框。

play

```
<template>
    <FSpace>
        <FButton @click="() => showFModal()">confirm</FButton>
    </FSpace>
</template>

<script>
import { FModal } from '@fesjs/fes-design';

export default {
    setup() {
        function showFModal() {
            FModal.confirm({
                title: '确认对话',
                content: `这是一个确认对话的弹框`,
                okText: '知道了',
                onOk() {
                    console.log('[modal.confirm] [showFModal] [onOk]');
                },
                onCancel() {
                    console.log('[modal.confirm] [showFModal] [onCancel]');
                },
            });
        }
        return {
            showFModal,
        };
    },
};
</script>
```

### 全局方法 - 信息反馈 [​]()

各种类型的信息提示

play

```
<template>
    <FSpace>
        <FButton @click="showFModal('info')">info</FButton>
        <FButton @click="showFModal('success')">success</FButton>
        <FButton @click="showFModal('warning')">warning</FButton>
        <FButton @click="showFModal('error')">error</FButton>
    </FSpace>
</template>

<script>
import { FModal } from '@fesjs/fes-design';

export default {
    setup() {
        const typeMap = {
            info: '普通消息',
            success: '成功消息',
            warning: '警告消息',
            error: '错误消息',
        };
        function showFModal(type) {
            FModal[type]({
                title: typeMap[type],
                content: `这是一个${typeMap[type]}的弹框`,
                okText: '知道了',
                onOk() {
                    console.log(
                        '[modal.feedback] [showFModal] [onOk] type:',
                        type,
                    );
                },
                onCancel() {
                    console.log(
                        '[modal.feedback] [showFModal] [onCancel] type:',
                        type,
                    );
                },
            });
        }
        return {
            showFModal,
        };
    },
};
</script>
```

### 异步提交 [​]()

针对弹窗确认提交操作。

play

```
<template>
    <FSpace>
        <FButton @click="() => showFModalSubmit()">全局方法</FButton>
        <FButton @click="() => (normalShow = true)">常规</FButton>
        <FButton @click="() => (customShow = true)">自定义页脚</FButton>
    </FSpace>

    <FModal
        v-model:show="normalShow"
        title="常规"
        displayDirective="if"
        type="confirm"
        :okLoading="normalOkLoading"
        :okText="normalOkText"
        @ok="() => handleNormalOk()"
        @cancel="normalShow = false"
    >
        您的订单还未支付完成，退出将放弃购买
    </FModal>

    <FModal
        v-model:show="customShow"
        displayDirective="if"
        type="confirm"
        title="自定义页脚"
    >
        您的订单还未支付完成，退出将放弃购买
        <template #footer>
            <FSpace justify="end">
                <FButton
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
    </FModal>
</template>

<script>
import { nextTick, ref } from 'vue';
import { FModal } from '@fesjs/fes-design';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function useModal() {
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
        function showFModalSubmit() {
            const modal = FModal.confirm({
                title: '确认对话',
                content: `您的订单还未支付完成，退出将放弃购买`,
                okText: '提交更新',
                cancelText: '数据还原',
                onOk() {
                    console.log(
                        '[modal.asyncSubmit] [showFModalSubmit] [onOk]',
                    );
                    return new Promise(() => {
                        modal.update({
                            okText: '2s后自动关闭',
                            okLoading: true,
                        });
                        setTimeout(() => {
                            modal.destroy();
                        }, 2000);
                    });
                },
                async onCancel() {
                    console.log(
                        '[modal.asyncSubmit] [showFModalSubmit] [onCancel]',
                    );
                    modal.update({
                        cancelText: '3s后自动关闭',
                        cancelLoading: true,
                    });
                    await sleep(3000);
                    modal.destroy();
                },
            });
        }

        const {
            show: normalShow,
            okLoading: normalOkLoading,
            handleOk: handleNormalOk,
            okText: normalOkText,
        } = useModal();

        const {
            show: customShow,
            cancelLoading: customCancelLoading,
            okLoading: customOkLoading,
            handleCancel: handleCustomCancel,
            handleOk: handleCustomOk,
            okText: customOkText,
            cancelText: customCancelText,
        } = useModal();

        return {
            showFModalSubmit,

            normalShow,
            normalOkLoading,
            handleNormalOk,
            normalOkText,

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

### 是否展示取消按钮 [​]()

play

```
<template>
    <FForm>
        <FFormItem label="是否展示取消按钮:">
            <FRadioGroup
                v-model="showCancel"
                :options="[
                    { label: '默认', value: undefined },
                    { label: '是', value: true },
                    { label: '否', value: false },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FButton @click="showFModalNormal = true">常规</FButton>
        <FButton @click="showFModalNormalConfirm = true">确认对话框</FButton>
        <FButton @click="() => showFModalConfirm()">全局方法 - confirm</FButton>
        <FButton @click="() => showFModalInfo()">全局方法 - info</FButton>
    </FSpace>

    <FModal
        v-model:show="showFModalNormal"
        title="常规"
        displayDirective="if"
        :showCancel="showCancel"
        @ok="showFModalNormal = false"
    >
        <div>我是内容...</div>
        <div>我是内容...</div>
        <div>我是内容...</div>
    </FModal>
    <FModal
        v-model:show="showFModalNormalConfirm"
        type="confirm"
        title="确认对话框"
        displayDirective="if"
        :showCancel="showCancel"
        @ok="showFModalNormalConfirm = false"
    >
        <div>这是一个确认对话的弹框...</div>
    </FModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FModal } from '@fesjs/fes-design';

const showCancel = ref();
const showFModalNormal = ref(false);
const showFModalNormalConfirm = ref(false);

function showFModalConfirm() {
    FModal.confirm({
        title: '确认对话',
        content: `这是一个确认对话的弹框`,
        okText: '知道了',
        showCancel: showCancel.value,
        onOk() {
            console.log('[modal.showCancel] [showFModalConfirm] [onOk]');
        },
        onCancel() {
            console.log('[modal.showCancel] [showFModalConfirm] [onCancel]');
        },
    });
}
function showFModalInfo() {
    FModal.info({
        title: '普通消息',
        content: `这是一个普通消息的弹框`,
        okText: '知道了',
        showCancel: showCancel.value,
        onOk() {
            console.log('[modal.showCancel] [showFModalInfo] [onOk]');
        },
        onCancel() {
            console.log('[modal.showCancel] [showFModalInfo] [onCancel]');
        },
    });
}
</script>
```

### 最大弹窗高度 [​]()

`maxHeight`默认不设置，如果实际弹窗的`height`高于`maxHeight`，以`maxHeight`为准，弹窗内容滚动。

play

```
<template>
    <FSpace>
        <FButton @click="show = true">打开弹窗</FButton>
        <FButton @click="verticalCenterBtnClick">居中弹窗</FButton>
        <FModal
            v-model:show="show"
            title="弹窗标题"
            :vertical-center="verticalCenter"
            :maxHeight="
                setMaxHeight
                    ? type === 1
                        ? `${percent}%`
                        : maxHeight
                    : undefined
            "
            @ok="show = false"
        >
            <FSpace>
                <FForm :labelWidth="130">
                    <FFormItem label="设置最大弹窗高度：">
                        <FRadioGroup
                            v-model="setMaxHeight"
                            :options="[
                                { label: '不设置（默认）', value: false },
                                { label: '设置', value: true },
                            ]"
                        />
                    </FFormItem>
                    <FFormItem v-if="setMaxHeight" label="高度值类型：">
                        <FRadioGroup
                            v-model="type"
                            :options="[
                                { label: '百分比', value: 1 },
                                { label: '固定值', value: 2 },
                            ]"
                        />
                    </FFormItem>
                    <FFormItem
                        v-if="type === 1 && setMaxHeight"
                        label="窗口百分比："
                    >
                        <FInputNumber
                            v-model="percent"
                            :min="10"
                            :max="100"
                            :step="10"
                        />
                        <span style="margin-left: 10px">%</span>
                    </FFormItem>
                    <FFormItem
                        v-if="type === 2 && setMaxHeight"
                        label="固定值："
                    >
                        <FInputNumber
                            v-model="maxHeight"
                            :min="100"
                            :max="1000"
                            :step="100"
                        />
                        <span style="margin-left: 10px">px</span>
                    </FFormItem>
                </FForm>
            </FSpace>
            <FDivider class="divider" />
            <FSpace>
                <FButton @click="add">内容 + 1</FButton>
                <FButton @click="reduce">内容 - 1</FButton>
            </FSpace>
            <FDivider />
            <div v-for="n in count" :key="n">我是内容...</div>
        </FModal>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const show = ref(false);
        const setMaxHeight = ref(false);
        const percent = ref(60);
        const maxHeight = ref(600);
        const type = ref(1);
        const count = ref(15);
        const verticalCenter = ref(false);

        const add = () => {
            count.value += 1;
        };

        const reduce = () => {
            count.value -= 1;
        };

        const verticalCenterBtnClick = () => {
            verticalCenter.value = true;
            show.value = true;
        };

        return {
            show,
            setMaxHeight,
            percent,
            maxHeight,
            type,
            count,
            add,
            reduce,
            verticalCenter,
            verticalCenterBtnClick,
        };
    },
};
</script>

<style scoped>
.divider {
    margin-top: 0px;
}
</style>
```

### 关闭弹窗 [​]()

通过配置项可以控制弹窗的关闭方式。

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
        <FButton @click="show = true">打开弹窗</FButton>
        <FModal
            v-model:show="show"
            title="弹窗"
            :maskClosable="maskClosable"
            :escClosable="escClosable"
            @ok="show = false"
        >
            <div>我是内容...</div>
            <div>我是内容...</div>
            <div>我是内容...</div>
        </FModal>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);

const maskClosable = ref(true);

const escClosable = ref(true);
</script>
```

## Modal Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|show|v-model:show，是否显示模态框|Boolean|`false`|
|displayDirective|选择渲染使用的指令，if 对应 v-if，show 对应 v-show，使用 show 的时候不会被重置|string|`show`|
|closable|是否显示右上角关闭图标|Boolean|`true`|
|mask|是否显示蒙层|Boolean|`true`|
|maskClosable|点击蒙层是否允许关闭|Boolean|`true`|
|escClosable|按下 ESC 是否允许关闭|boolean|`true`|
|type|类型，可选值为`info` `success` `error` `warning` `warn` `confirm`|string|`-`|
|title|标题|String|`-`|
|footer|是否显示底部内容|Boolean|`true`|
|okText|确认按钮文字|String|确定|
|okLoading|确认按钮 Loading 状态|Boolean|`false`|
|showCancel|是否展示取消按钮|Boolean|`true`|
|cancelText|取消按钮文字|String|取消|
|width|宽度|String/Number|520|
|maxHeight|最大弹窗高度，如果实际高度大于 maxHeight，内容滚动|String/Number|`-`|
|top|距离顶部|String/Number|50|
|bottom|距离底部，为了防止弹窗底部贴边，可自定义|String/Number|50|
|verticalCenter|垂直居中|Boolean|`false`|
|center|标题、内容、按钮居中|Boolean|`false`|
|fullScreen|全屏显示|Boolean|`false`|
|contentClass|可用于设置内容的类名|String|`-`|
|wrapperClass|可用于设置组件根类名|String|`-`|
|useAnimation|是否使用动画|Boolean|`true`|
|getContainer|指定 `Modal` 挂载的 HTML 节点|() => HTMLElement|`() => document.body`|

## Modal Event [​]()

|事件名称|说明|回调参数|
|---|---|---|
|cancel|点击遮罩层或右上角叉或取消按钮的回调|event|
|ok|点击确定回调|event|
|afterEnter|Modal 出现后的回调|event|
|afterLeave|Modal 关闭后的回调|event|

## Modal Slots [​]()

|名称|说明|
|---|---|
|default|模态框的内容|
|title|模态框的标题|
|footer|底部内容，一般是自定义按钮|

## 全局方法 [​]()

* `Modal.config(options)` 全局方法的默认配置

* `Modal.info(options)`

* `Modal.success(options)`

* `Modal.error(options)`

* `Modal.warning(options)`

* `Modal.warn(options)` 同 warning

* `Modal.confirm(options)`

参数如下：

|参数|说明|类型|默认值|
|---|---|---|---|
|closable|是否显示右上角关闭图标|Boolean|false|
|mask|是否显示蒙层|Boolean|true|
|maskClosable|点击蒙层是否允许关闭|Boolean|false|
|title|标题|string / vNode / ()=>VNode||
|content|内容|string / vNode / ()=>VNode|\-|
|footer|页脚|string / vNode / ()=>VNode|\-|
|okText|确认按钮文字|String|确定|
|okLoading|确认按钮 Loading 状态|Boolean|`false`|
|showCancel|是否展示取消按钮|Boolean|confim 方法默认`true`，其他方法默认为`false`|
|cancelText|取消按钮文字|String|取消|
|cancelLoading|取消按钮 Loading 状态|Boolean|`false`|
|onOk|点击确定|Function|\-|
|onCancel|点击遮罩层或右上角叉或取消按钮的回调|Function|\-|
|width|宽度|String/Number|400|
|maxHeight|最大内容高度，如果实际高度大于 maxHeight，内容滚动|String/Number|`-`|
|top|距离顶部|String/Number|50|
|verticalCenter|垂直居中|Boolean|false|
|center|标题、内容、按钮居中|Boolean|false|
|fullScreen|全屏显示|Boolean|`false`|
|contentClass|可用于设置内容的类名|String|\-|
|wrapperClass|可用于设置组件根类名|String|`-`|
|useAnimation|是否使用动画|Boolean|`true`|
|getContainer|指定 `Modal` 挂载的 HTML 节点|() => HTMLElement|`() => document.body`|

以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。

js

```
const modal = Modal.info();

modal.update({
    title: '修改的标题',
    content: '修改的内容',
});

modal.destroy();
```

阅读原文：http://fe.weoa.com/fes-design/zh/components/modal.html