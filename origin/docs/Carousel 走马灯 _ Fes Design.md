# Carousel 走马灯 [​]()

旋转木马，一组轮播的区域。

## 组件注册 [​]()

js

```
import { FCarousel } from '@fesjs/fes-design';

app.use(FCarousel);
```

## 代码演示 [​]()

### 基础用法 [​]()

默认展示

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="240px" @change="onChange">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/f615608955b707cd.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<script setup>
const onChange = (current) => {
    console.log('[carousel.default] [onChange] current:', current);
};
</script>

<style scope>
.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 参数控制 [​]()

常用参数控制。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FForm labelWidth="100px">
            <FFormItem label="箭头:">
                <FRadioGroup
                    v-model="showArrow"
                    :options="[
                        { label: 'always', value: 'always' },
                        { label: 'hover(默认)', value: 'hover' },
                        { label: 'never', value: 'never' },
                    ]"
                />
            </FFormItem>
            <FFormItem label="指示器类型:">
                <FRadioGroup
                    v-model="indicatorType"
                    :options="[
                        { label: 'linear(默认)', value: 'linear' },
                        { label: 'dot', value: 'dot' },
                    ]"
                />
            </FFormItem>
            <FFormItem label="指示器方向:">
                <FRadioGroup
                    v-model="indicatorPlacement"
                    :options="[
                        { label: 'top', value: 'top' },
                        { label: 'bottom(默认)', value: 'bottom' },
                        { label: 'left', value: 'left' },
                        { label: 'right', value: 'right' },
                    ]"
                />
            </FFormItem>
            <FFormItem label="指示器位置:">
                <FRadioGroup
                    v-model="indicatorPosition"
                    :options="[
                        { label: '默认', value: '' },
                        { label: 'outside', value: 'outside' },
                        { label: 'none', value: 'none' },
                    ]"
                />
            </FFormItem>
            <FFormItem label="自动切换间隔:">
                <FInputNumber
                    v-model="interval"
                    style="width: 200px"
                    placeholder="间隔时间，单位为毫秒"
                />
            </FFormItem>
            <FFormItem label="是否自动播放:">
                <FRadioGroup
                    v-model="autoPlay"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="是否循环播放:">
                <FRadioGroup
                    v-model="isLoop"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
            <FFormItem label="悬浮暂停播放:">
                <FRadioGroup
                    v-model="isHoverPause"
                    :options="[
                        { label: '是(默认)', value: true },
                        { label: '否', value: false },
                    ]"
                />
            </FFormItem>
        </FForm>

        <FDivider />

        <FCarousel
            height="240px"
            :loop="isLoop"
            :show-arrow="showArrow"
            :autoplay="autoPlay"
            :interval="interval"
            :indicator-type="indicatorType"
            :indicator-placement="indicatorPlacement"
            :indicator-position="indicatorPosition"
            :pause-on-hover="isHoverPause"
            @change="onChange"
        >
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/f615608955b707cd.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const showArrow = ref('hover');
const indicatorType = ref('linear');
const indicatorPlacement = ref('bottom');
const indicatorPosition = ref('');
const interval = ref(3000);
const autoPlay = ref(true);
const isLoop = ref(true);
const isHoverPause = ref(true);

const onChange = (current) => {
    console.log('[carousel.default] [onChange] current:', current);
};
</script>

<style scope>
.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 鼠标经过指示点切换轮播图 [​]()

设定 `trigger` 为 `hover` 鼠标经过指示点时触发切换。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="240px" trigger="hover">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/0ebca23ad388fe61.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<style scope>
.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 指示器类型和显示区域 [​]()

可以设置指示器类型和显示区域，以及摆放方位，比如圆点、或者放置在轮播图区域外部 or 隐藏。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="240px" indicator-type="dot">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/4dc6f0d9e8e99c9d.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/55f807e9509d8b74.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/92cc394c33b8c0b4.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
    <FSpace vertical class="carousel-demo demo-gap">
        <FCarousel height="240px" indicator-position="outside">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/0ebca23ad388fe61.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<style scope>
.carousel-demo.demo-gap {
    margin-top: 50px;
}

.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 指示器位置 [​]()

更改指示器位置，分别有 `top/right/bottom/left` 4 个方向。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="240px" indicator-placement="right">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/0ebca23ad388fe61.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<style scope>
.carousel-demo.demo-gap {
    margin-top: 50px;
}

.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 显示切换箭头 [​]()

可以设置切换箭头的显示时机 `arrow` 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 `hover` 到走马灯上时才会显示。 若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="240px" show-arrow="always">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/0ebca23ad388fe61.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<style scope>
.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

### 卡片 [​]()

当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格 将 `type` 属性设置为 `card` 即可启用卡片模式。 从交互上来说，卡片模式和一般模式的最大区别在于，卡片模式可以通过直接点击两侧的幻灯片进行切换。

play

```
<template>
    <FSpace vertical class="carousel-demo">
        <FCarousel height="200px" type="card">
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/0ebca23ad388fe61.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/ebaa3c3133c9e964.png"
                >
            </FCarouselItem>
            <FCarouselItem>
                <img
                    src="https://s3.bmp.ovh/imgs/2022/01/2f68ed8e26dc519b.png"
                >
            </FCarouselItem>
        </FCarousel>
    </FSpace>
</template>

<style scope>
.carousel-demo .fes-carousel .fes-carousel-item img {
    width: 100%;
    height: 100%;
}
</style>
```

## Carousel Props（属性） [​]()

|属性|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|height|carousel 的高度|string|—|—|
|initial-index|初始状态激活的幻灯片的索引，从 0 开始|number|—|0|
|trigger|指示器的触发方式|string|click/hover|click|
|autoplay|是否自动切换|boolean|—|true|
|interval|自动切换的时间间隔，单位为毫秒|number|—|3000|
|indicator-type|指示器的类型（线性/圆点）|string|linear/dot|linear|
|indicator-placement|指示器的摆放方向|string|top/right/bottom/left|bottom|
|indicator-position|指示器的位置|string|outside/none|—|
|show-arrow|切换箭头的显示时机|string|always/hover/never|hover|
|type|carousel 的类型|string|card|—|
|loop|是否循环显示|boolean|\-|true|
|pause-on-hover|鼠标悬浮时暂停自动切换|boolean|\-|true|

## Carousel Events（事件） [​]()

|事件名|说明|回调参数|
|:---|:---|:---|
|change|幻灯片切换时触发|目前激活的幻灯片的索引，原幻灯片的索引|

## Carousel Methods（方法） [​]()

|方法名|说明|参数|
|:---|:---|:---|
|setActiveItem|手动切换幻灯片|需要切换的幻灯片的索引，从 0 开始|
|prev|切换至上一张幻灯片|—|
|next|切换至下一张幻灯片|—|

## Carousel Slots（插槽） [​]()

|插槽名|说明|子标签|
|:---|:---|:---|
|default|默认插槽|FCarouselItem|

## Carousel-Item Slots（插槽） [​]()

|插槽名|说明|
|:---|:---|
|default|自定义标签内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/carousel.html