# image 图片 [​]()

## 组件注册 [​]()

js

```
import { FImage, FPreviewGroup } from '@fesjs/fes-design';

app.use(FImage);
app.use(FPreviewGroup);
```

## 图片的使用 [​]()

图片组件即图片容器，承载的内容只能为图片类型的内容，可定义支持多种图片格式，jpg、png 等

### 基础用法 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="宽度：">
            <FInputNumber
                v-model="width"
                :min="50"
                :max="300"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="高度：">
            <FInputNumber
                v-model="height"
                :min="50"
                :max="300"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="适应方式：">
            <FRadioGroup v-model="fit">
                <FRadio value="fill">fill</FRadio>
                <FRadio value="contain">contain</FRadio>
                <FRadio value="cover">cover</FRadio>
                <FRadio value="none">none</FRadio>
                <FRadio value="scale-down">scale-down</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="图像描述：">
            <FInput v-model="alt" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FImage
        :src="src"
        :width="width"
        :height="`${height}px`"
        :fit="fit"
        :alt="alt"
    >
        <template #placeholder>
            <div class="image-slot">
                <div class="image-slot">
                    Loading<span class="dot">...</span>
                </div>
            </div>
        </template>
    </FImage>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const src = ref('/images/1.jpeg');
        const width = ref(150);
        const height = ref(150);
        const fit = ref('fill');
        const alt = ref('这是一段图片描述文字');

        return {
            width,
            height,
            fit,
            src,
            alt,
        };
    },
};
</script>
```

### 容器适应 [​]()

可通过 fit 确定图片如何适应到容器框，同原生 object-fit。

play

```
<template>
    <div class="fit-demo">
        <div v-for="fit in fits" :key="fit" class="block">
            <span class="demonstration">{{ fit }}</span>
            <FImage style="width: 100px; height: 100px" :src="url" :fit="fit" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const fits = ref(['fill', 'contain', 'cover', 'none', 'scale-down']);
        const url = ref('/images/6.jpeg');
        return {
            url,
            fits,
        };
    },
};
</script>

<style>
.fit-demo {
    display: flex;
}
.fit-demo .block {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-right: solid 1px #dcdfe6;
}
.fit-demo .block:last-child {
    border-right: none;
}
</style>
```

### 占位内容 [​]()

play

```
<template>
    <FImage :width="200" height="200px" :src="url">
        <template #placeholder>
            <div class="image-slot">
                <div class="image-slot">
                    Loading<span class="dot">...</span>
                </div>
            </div>
        </template>
    </FImage>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const url = ref('/images/1.jpeg');
        return {
            url,
        };
    },
};
</script>
```

### 容错处理 [​]()

play

```
<template>
    <FImage
        style="width: 200px; height: 200px"
        src="https://aliyuncdn.antdv.com/vue.pngs"
    />
</template>
```

### 懒加载 [​]()

play

```
<template>
    <div class="lazy-load-wrapper">
        <FScrollbar containerClass="lazy-load-wrapper">
            <slot>
                <FImage
                    v-for="url in lazyUrls"
                    :key="url"
                    :src="url"
                    lazy
                    style="min-height: 200px"
                />
            </slot>
        </FScrollbar>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const lazyUrls = ref([
            '/images/1.jpeg',
            '/images/2.jpeg',
            '/images/3.jpeg',
            '/images/4.jpeg',
            '/images/5.jpeg',
            '/images/6.jpeg',
        ]);
        return {
            lazyUrls,
        };
    },
};
</script>

<style>
.lazy-load-wrapper {
    width: 600px;
    height: 400px;
}
</style>
```

### 图片预览 [​]()

单张图片预览：

play

```
<template>
    <FSpace ref="rootRef">
        <FImage
            style="width: 200px; height: 200px"
            :src="url"
            fit="contain"
            preview
            download
            hide-on-click-modal
            name="我是图片"
        />

        <FImage
            :src="url"
            preview
            hide-on-click-modal
            :previewContainer="getContainer"
        >
            <FButton type="link">自定义展示内容.png</FButton>
        </FImage>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const url = ref('/images/1.jpeg');
        const rootRef = ref(null);
        const getContainer = () => rootRef.value?.$el;
        return {
            url,
            getContainer,
            rootRef,
        };
    },
};
</script>
```

多张图片预览：

play

```
<template>
    <FPreviewGroup>
        <div class="group-wrapper">
            <FImage
                style="width: 200px; height: 200px"
                fit="contain"
                src="/images/1.jpeg"
                preview
                download
            />
            <FImage
                style="width: 200px; height: 200px"
                fit="contain"
                src="/images/2.jpeg"
                preview
            />
            <FImage
                style="width: 200px; height: 200px"
                fit="contain"
                src="/images/3.jpeg"
                preview
            />
            <FImage
                style="width: 200px; height: 200px"
                fit="contain"
                src="/images/4.jpeg"
                preview
            />
        </div>
    </FPreviewGroup>
</template>

<script>
export default {};
</script>

<style>
.group-wrapper {
    display: flex;
}
</style>
```

## Image Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|alt|图像描述|string|`-`|
|width|图像宽度|string/number|`-`|
|height|图像高度|string/number|`-`|
|src|图片地址|string|`-`|
|preview|预览参数，为 false 时禁用|boolean|`false`|
|fit|确定图片如何适应容器框，同原生 `object-fit`，可选值为 `fill` `contain` `cover` `none` `scale-down`|string|`fill`|
|lazy|是否开启懒加载|boolean|`-`|
|hideOnClickModal|是否可以通过点击遮罩层关闭预览|boolean|`false`|
|scrollContainer|开启懒加载后，监听 scroll 事件的容器|string / HTMLElement|`-`|
|previewContainer|指定预览弹窗挂载的 HTML 节点|() => HTMLElement|`() => document.body`|
|name|当配置名称时，预览会展示此名称|string|`-`|
|download|是否可以下载，下载文件名称使用`name`|boolean|`false`|

## Image Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|load|图片加载成功触发|(e: Event)|
|error|图片加载失败触发|(e: Error)|

## Image Slots [​]()

|名称|说明|
|---|---|
|placeholder|图片未加载的占位内容|
|error|加载失败的内容|

## ImageGroup Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|hideOnClickModal|是否可以通过点击遮罩层关闭预览|boolean|`false`|

## ImageGroup Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|当前图片切换时触发|(current)=>void)|

## ImageGroup Slots [​]()

|名称|说明|
|---|---|
|default|Image 组件|

阅读原文：http://fe.weoa.com/fes-design/zh/components/image.html