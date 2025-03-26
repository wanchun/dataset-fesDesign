# Message 消息 [​]()

用户对某一操作结果的反馈，属于全局提示，不会针对具体元素，提示内容一般会自动消失，强度比警告提示弱一些

## 组件引用 [​]()

js

```
import { FMessage } from '@fesjs/fes-design';

FMessage.info('这是一条消息');
```

## 代码演示 [​]()

### 基础用法 [​]()

包括普通、成功、失败、警告信息。

play

```
<template>
    <FSpace>
        <FButton
            v-for="(label, value) in typeMap"
            :key="value"
            @click="handleClick(value)"
        >
            {{ label }}
        </FButton>
    </FSpace>
</template>

<script>
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const typeMap = {
            info: '普通消息',
            success: '成功消息',
            warning: '警告消息',
            error: '错误消息',
        };
        function handleClick(type, colorful) {
            FMessage[type]?.({
                content: `这是一条${typeMap[type]}！`,
                colorful,
            });
        }
        return {
            typeMap,
            handleClick,
        };
    },
};
</script>
```

### 可以关闭 [​]()

显示关闭按钮，手动关闭和自动关闭都可以回调 afterClose

play

```
<template>
    <FSpace>
        <FButton @click="handleMessageInfo">普通消息</FButton>
        <FButton @click="handleMessageInfoClose">关闭普通消息</FButton>
    </FSpace>
    <FSpace>
        <FButton @click="handleMessageSuccess">成功消息</FButton>
        <FButton @click="handleMessageSuccessClose">关闭成功消息</FButton>
    </FSpace>
    <FSpace>
        <FButton @click="handleMessageClose">关闭所有消息</FButton>
    </FSpace>
</template>

<script>
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        let messageInfo = null;
        let messageSuccess = null;

        function handleMessageInfo() {
            messageInfo = FMessage.info({
                closable: true,
                content: '可以手动关闭的普通消息！',
                duration: 10,
                afterClose() {
                    console.log(
                        '[message.close] [handleMessageInfo] [afterClose]',
                    );
                },
            });
        }

        function handleMessageSuccess() {
            messageSuccess = FMessage.success({
                closable: true,
                content: '可以手动关闭的成功消息！',
                duration: 10,
                afterClose() {
                    console.log(
                        '[message.close] [handleMessageInfo] [afterClose]',
                    );
                },
            });
        }

        function handleMessageInfoClose() {
            messageInfo?.destroy();
        }
        function handleMessageSuccessClose() {
            messageSuccess?.destroy();
        }

        function handleMessageClose() {
            FMessage.destroy();
        }

        return {
            handleMessageInfo,
            handleMessageSuccess,
            handleMessageInfoClose,
            handleMessageSuccessClose,
            handleMessageClose,
        };
    },
};
</script>
```

### 自定义时长 [​]()

自定义时长 `10s`，默认时长为`3s`。

play

```
<template>
    <FSpace>
        <FButton @click="() => FMessage.info('该提示将在10s后关闭', 10)">
            自定义时长
        </FButton>
    </FSpace>
</template>

<script>
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        return {
            FMessage,
        };
    },
};
</script>
```

### 彩色样式 [​]()

包括彩色的背景样式。

play

```
<template>
    <FSpace>
        <FButton
            v-for="(label, value) in typeMap"
            :key="value"
            @click="handleClick(value, true)"
        >
            {{ label }}
        </FButton>
    </FSpace>
</template>

<script>
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const typeMap = {
            info: '普通消息',
            success: '成功消息',
            warning: '警告消息',
            error: '错误消息',
        };
        function handleClick(type, colorful) {
            FMessage[type]?.({
                content: `这是一条${typeMap[type]}！`,
                colorful,
            });
        }
        return {
            typeMap,
            handleClick,
        };
    },
};
</script>
```

### 自定义消息内容 [​]()

消息内容和图标都支持自定义`() => VNode`

play

```
<template>
    <FSpace ref="wrapRef">
        <FButton @click="handleCustomContent">自定义内容</FButton>
        <FButton @click="handleClosableContent">消息内容点击即可关闭</FButton>
    </FSpace>
</template>

<script lang="jsx">
import { h, ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';
import { BellOffOutlined } from '../../../theme/IconDoc/icons.js';

export default {
    setup() {
        const wrapRef = ref(null);
        // FMessage.config({
        //     getContainer() {
        //         return wrapRef.value.$el;
        //     },
        // });
        function handleCustomContent() {
            FMessage.info({
                content: () =>
                    h('div', { style: { color: 'red' } }, '自定义内容'),
                icon: () => <BellOffOutlined />,
            });
        }

        function handleClosableContent() {
            let messageInfo;
            function handleCloseMessage() {
                messageInfo?.destroy();
            }

            messageInfo = FMessage.warning({
                duration: 10,
                closable: true,
                content: () => <div style={{ cursor: 'pointer' }} onClick={handleCloseMessage}>点击消息即可关闭</div>,
                icon: () => <BellOffOutlined />,
            });
        }

        return {
            wrapRef,
            handleCustomContent,
            handleClosableContent,
        };
    },
};
</script>
```

## 全局方法 [​]()

组件提供了一些静态方法，使用方式和参数如下

* `Message.success(content, [duration])`

* `Message.error(content, [duration])`

* `Message.info(content, [duration])`

* `Message.warning(content, [duration])`

* `Message.warn(content, [duration])` 同 warning

参数如下：

|参数|说明|类型|默认值|
|---|---|---|---|
|content|提示内容|string ｜ () => VNode|\-|
|duration|自动关闭的延时，单位秒，设置为 0 时不自动关闭|number|`3`|

也可以对象的形式传递参数：

* `Message.success(config)`

* `Message.error(config)`

* `Message.info(config)`

* `Message.warning(config)`

* `Message.warn(config)` 同 warning

参数如下：

|参数|说明|类型|默认值|
|---|---|---|---|
|content|提示内容|string ｜ () => VNode|\-|
|duration|自动关闭的延时，单位秒，设置为 0 时不自动关闭|number|`3`|
|icon|提示图标|() => VNode|\-|
|closable|是否显示关闭按钮|boolean|`false`|
|colorful|是否是彩色样式|boolean|\-|
|afterClose|关闭后的回调，自动关闭和点击关闭都会回调|Function|\-|

## 全局方法 [​]()

* `Message.config(options)`

* `Message.destroy()` 关闭所有消息

|参数|说明|类型|默认值|
|---|---|---|---|
|duration|全局默认自动关闭延时，单位秒，设置为 0 时不自动关闭|number|`3`|
|getContainer|配置渲染节点的输出位置|() => HTMLElement|`() => document.body`|
|maxCount|最大显示数, 超过限制时，最早的消息会被自动关闭|number|\-|
|top|消息距离顶部的位置|string|`24px`|
|colorful|是否是彩色样式|boolean|`false`|

以上函数调用后，会返回一个引用，可以通过该引用关闭消息。

js

```
const messageInfo = FMessage.info();

messageInfo.destroy();
```

阅读原文：http://fe.weoa.com/fes-design/zh/components/message.html