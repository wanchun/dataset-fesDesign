# Collapse 折叠面板 [​]()

通过折叠面板收纳内容区域

## 组件注册 [​]()

js

```
import { FCollapse } from 'fes-design';

app.use(FCollapse);
```

## 基础用法 [​]()

可同时展开多个面板，面板之间不影响

play

```
<template>
    <div class="demo-collapse">
        <FCollapse v-model="activeNames">
            <FCollapseItem title="Consistency" name="1">
                <div>
                    岁月静好，浅笑安然。打开记忆的闸门，仿佛又回到了那年那月那时光，仿佛又见到你送给我的那盆清香茉莉，在细雨潇潇的夜晚，所呈现出来的洁净和楚楚动人。以前的过往总是在记忆深处，以固有的姿态，以从未稍离的执着提醒我，生命中有一种存在，叫以前。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Feedback" name="2">
                <div>
                    生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样！这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份留意。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持！这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Efficiency" name="3">
                <div>
                    喜欢一种情意，浅浅淡淡，不远不近。念起便有一种沁心的暖，知心的柔。岁月轮转，韶华渐老，惟愿人依旧安静，温雅。世事经年，惟愿情怀依旧宁静如初。静默时光的彼岸，就让我宁心等待一场必然来临的春暖花开。即使偶尔会有心潮澎湃，亦是沉寂中的安恬与端庄。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Controllability" name="4">
                <div>
                    一弯月光，风飘云漫，多少个明月夜，寂寞走不出思念的射线，静静的听你梦中的心跳，轻嗅你唇边的香息，柔醉你缱绻的缠绵。衣袂飘飘，心香瓣瓣，在飘渺的细雨中，衍生了无尽的眷恋。用一生的深情与你凝眸相拥，朝夕相伴。幽篁深处，落叶与娇花相随，你我的沉醉，静默了一池山水。
                </div>
            </FCollapseItem>
        </FCollapse>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeNames = ref(['1']);

        return {
            activeNames,
        };
    },
};
</script>
```

## 手风琴效果 [​]()

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

play

```
<template>
    <FSpace vertical>
        <FSwitch v-model="accordion">手风琴模式</FSwitch>
        <FCollapse
            v-model="activeName"
            :accordion="accordion"
            :embedded="false"
        >
            <FCollapseItem title="Consistency" name="1">
                <div>
                    岁月静好，浅笑安然。打开记忆的闸门，仿佛又回到了那年那月那时光，仿佛又见到你送给我的那盆清香茉莉，在细雨潇潇的夜晚，所呈现出来的洁净和楚楚动人。以前的过往总是在记忆深处，以固有的姿态，以从未稍离的执着提醒我，生命中有一种存在，叫以前。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Feedback" name="2">
                <div>
                    生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样！这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份留意。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持！这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Efficiency" name="3">
                <div>
                    喜欢一种情意，浅浅淡淡，不远不近。念起便有一种沁心的暖，知心的柔。岁月轮转，韶华渐老，惟愿人依旧安静，温雅。世事经年，惟愿情怀依旧宁静如初。静默时光的彼岸，就让我宁心等待一场必然来临的春暖花开。即使偶尔会有心潮澎湃，亦是沉寂中的安恬与端庄。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Controllability" name="4">
                <div>
                    一弯月光，风飘云漫，多少个明月夜，寂寞走不出思念的射线，静静的听你梦中的心跳，轻嗅你唇边的香息，柔醉你缱绻的缠绵。衣袂飘飘，心香瓣瓣，在飘渺的细雨中，衍生了无尽的眷恋。用一生的深情与你凝眸相拥，朝夕相伴。幽篁深处，落叶与娇花相随，你我的沉醉，静默了一池山水。
                </div>
            </FCollapseItem>
        </FCollapse>
    </FSpace>
</template>

<script setup>
import { ref, watch } from 'vue';

const accordion = ref(true);

const activeName = ref('1');

watch(activeName, (name) =>
    console.log(
        '[FCollapse.accordion] activeName',
        name,
    ),
);
</script>
```

## 箭头在左边 [​]()

箭头在左边配置

play

```
<template>
    <div class="demo-collapse">
        <FRadioGroup v-model="arrow">
            <FRadio value="left">左侧</FRadio>
            <FRadio value="right">右侧</FRadio>
        </FRadioGroup>
        <FCollapse v-model="activeNames" :arrow="arrow">
            <FCollapseItem title="Consistency" name="1">
                <div>
                    岁月静好，浅笑安然。打开记忆的闸门，仿佛又回到了那年那月那时光，仿佛又见到你送给我的那盆清香茉莉，在细雨潇潇的夜晚，所呈现出来的洁净和楚楚动人。以前的过往总是在记忆深处，以固有的姿态，以从未稍离的执着提醒我，生命中有一种存在，叫以前。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Feedback" name="2">
                <div>
                    生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样！这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份留意。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持！这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Efficiency" name="3">
                <div>
                    喜欢一种情意，浅浅淡淡，不远不近。念起便有一种沁心的暖，知心的柔。岁月轮转，韶华渐老，惟愿人依旧安静，温雅。世事经年，惟愿情怀依旧宁静如初。静默时光的彼岸，就让我宁心等待一场必然来临的春暖花开。即使偶尔会有心潮澎湃，亦是沉寂中的安恬与端庄。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Controllability" name="4">
                <div>
                    一弯月光，风飘云漫，多少个明月夜，寂寞走不出思念的射线，静静的听你梦中的心跳，轻嗅你唇边的香息，柔醉你缱绻的缠绵。衣袂飘飘，心香瓣瓣，在飘渺的细雨中，衍生了无尽的眷恋。用一生的深情与你凝眸相拥，朝夕相伴。幽篁深处，落叶与娇花相随，你我的沉醉，静默了一池山水。
                </div>
            </FCollapseItem>
        </FCollapse>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeNames = ref(['1']);
        const arrow = ref('left');

        return {
            arrow,
            activeNames,
        };
    },
};
</script>
```

## 背景色 [​]()

embedded 控制背景色

play

```
<template>
    <div class="demo-collapse">
        <FSwitch v-model="embedded" />
        <FCollapse v-model="activeNames" :embedded="embedded">
            <FCollapseItem title="Consistency" name="1">
                <div>
                    岁月静好，浅笑安然。打开记忆的闸门，仿佛又回到了那年那月那时光，仿佛又见到你送给我的那盆清香茉莉，在细雨潇潇的夜晚，所呈现出来的洁净和楚楚动人。以前的过往总是在记忆深处，以固有的姿态，以从未稍离的执着提醒我，生命中有一种存在，叫以前。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Feedback" name="2">
                <div>
                    生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样！这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份留意。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持！这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Efficiency" name="3">
                <div>
                    喜欢一种情意，浅浅淡淡，不远不近。念起便有一种沁心的暖，知心的柔。岁月轮转，韶华渐老，惟愿人依旧安静，温雅。世事经年，惟愿情怀依旧宁静如初。静默时光的彼岸，就让我宁心等待一场必然来临的春暖花开。即使偶尔会有心潮澎湃，亦是沉寂中的安恬与端庄。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Controllability" name="4">
                <div>
                    一弯月光，风飘云漫，多少个明月夜，寂寞走不出思念的射线，静静的听你梦中的心跳，轻嗅你唇边的香息，柔醉你缱绻的缠绵。衣袂飘飘，心香瓣瓣，在飘渺的细雨中，衍生了无尽的眷恋。用一生的深情与你凝眸相拥，朝夕相伴。幽篁深处，落叶与娇花相随，你我的沉醉，静默了一池山水。
                </div>
            </FCollapseItem>
        </FCollapse>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const activeNames = ref(['1']);
        const embedded = ref(false);
        return {
            embedded,
            activeNames,
        };
    },
};
</script>
```

## 自定义面板标题 [​]()

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

play

```
<template>
    <div class="demo-collapse">
        <FCollapse accordion>
            <FCollapseItem title="Consistency" name="1">
                <template #title>
                    Consistency &nbsp;<InfoCircleFilled />
                </template>
                <div>
                    岁月静好，浅笑安然。打开记忆的闸门，仿佛又回到了那年那月那时光，仿佛又见到你送给我的那盆清香茉莉，在细雨潇潇的夜晚，所呈现出来的洁净和楚楚动人。以前的过往总是在记忆深处，以固有的姿态，以从未稍离的执着提醒我，生命中有一种存在，叫以前。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Feedback" name="2">
                <div>
                    生活是蜿蜒在山中的小径，坎坷不平，沟崖在侧。摔倒了，要哭就哭吧，怕什么，不心装模作样！这是直率，不是软弱，因为哭一场并不影响赶路，反而能增添一份留意。山花烂漫，景色宜人，如果陶醉了，想笑就笑吧，不心故作矜持！这是直率，不是骄傲，因为笑一次并不影响赶路，反而能增添一份信心。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Efficiency" name="3">
                <div>
                    喜欢一种情意，浅浅淡淡，不远不近。念起便有一种沁心的暖，知心的柔。岁月轮转，韶华渐老，惟愿人依旧安静，温雅。世事经年，惟愿情怀依旧宁静如初。静默时光的彼岸，就让我宁心等待一场必然来临的春暖花开。即使偶尔会有心潮澎湃，亦是沉寂中的安恬与端庄。
                </div>
            </FCollapseItem>
            <FCollapseItem title="Controllability" name="4">
                <div>
                    一弯月光，风飘云漫，多少个明月夜，寂寞走不出思念的射线，静静的听你梦中的心跳，轻嗅你唇边的香息，柔醉你缱绻的缠绵。衣袂飘飘，心香瓣瓣，在飘渺的细雨中，衍生了无尽的眷恋。用一生的深情与你凝眸相拥，朝夕相伴。幽篁深处，落叶与娇花相随，你我的沉醉，静默了一池山水。
                </div>
            </FCollapseItem>
        </FCollapse>
    </div>
</template>

<script></script>
```

## Collapse 属性 [​]()

|属性名|详情|类型|可选值|默认值|
|---|---|---|---|---|
|model-value / v-model|当前激活的面板(如果是手风琴模式，绑定值类型需要为 string，否则为 array)|string (accordion mode) / array (non-accordion mode)|\-|\-|
|accordion|是否手风琴模式|boolean|\-|false|
|arrow|箭头位置 ( left, right ) ，默认右边|string|\-|right|
|embedded|内容使用更深的背景色展现嵌入效果|boolean|\-|true|

## Collapse 插槽 [​]()

|插槽名|内容|子标签|
|---|---|---|
|\-|自定义默认内容|折叠项|

## Collapse Item 属性 [​]()

|属性名|说明|类型|可选值|默认值|
|---|---|---|---|---|
|name|唯一标志符|string/number|\-|\-|
|title|面板标题|string|\-|\-|
|disabled|是否禁用|boolean|\-|\-|

## Collapse Item 插槽 [​]()

|属性名|说明|
|---|---|
|\-|折叠项的内容|
|title|折叠项标题的内容|

阅读原文：http://fe.weoa.com/fes-design/zh/components/collapse.html