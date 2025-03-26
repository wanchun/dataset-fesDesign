# Draggable 拖拽 [​]()

也许你需要拖拽排序

## 组件注册 [​]()

js

```
import { FDraggable } from '@fesjs/fes-design';

app.use(FDraggable);
```

## 代码演示 [​]()

### 垂直方向 [​]()

我们经常在垂直方向上拖动排序

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="是否禁用:">
            <FSwitch v-model="disabled" />
        </FFormItem>
    </FForm>
    <FSpace>
        <FButton type="primary" @click="doInsertItem">动态新增</FButton>
        <FButton type="primary" @click="doDeleteItem">动态删减</FButton>
        <FButton type="primary" @click="doRandomUpdateItem"> 随机更新 </FButton>
    </FSpace>

    <FDivider />

    <div class="container">
        <FDraggable
            v-model="list"
            :beforeDragend="beforeDragend"
            :disabled="disabled"
        >
            <template #default="{ item }">
                <div class="sort-item">{{ item }}</div>
            </template>
        </FDraggable>
    </div>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

let seed = 6;
export default {
    setup() {
        const disabled = ref(false);

        const list = ref([1, 2, 3, 4, 5]);
        const doInsertItem = () => {
            list.value.push(`new item ${seed++}`);
        };
        const doDeleteItem = () => {
            list.value.splice(list.value.length - 1, 1);
        };

        const doRandomUpdateItem = () => {
            let op = Number.parseInt(Math.random() * 10) % 2;
            let index = Number.parseInt(Math.random() * 100) % list.value.length;
            if (list.value.length === 0) {
                op = 0;
                index = 0;
            }
            if (op === 0) {
                // 新增
                FMessage.success(`在位置${index + 1}新增`);
                list.value = list.value
                    .slice(0, index)
                    .concat([`new item ${seed++}`])
                    .concat(list.value.slice(index));
            } else {
                // 删除
                FMessage.success(`在位置${index + 1}删除`);
                list.value.splice(index, 1);
            }
        };

        const beforeDragend = () => {
            // return new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         reject();
            //     }, 3000);
            // });
            return true;
        };

        return {
            disabled,
            list,
            doInsertItem,
            doDeleteItem,
            doRandomUpdateItem,
            beforeDragend,
        };
    },
};
</script>

<style>
.fes-draggable-item::before {
    display: none;
}
</style>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}
.sort-item {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
}
</style>
```

### 水平方向 [​]()

还可能在水平方向上拖动

play

```
<template>
    <FForm labelWidth="100px">
        <FFormItem label="是否禁用:">
            <FSwitch v-model="disabled" />
        </FFormItem>
    </FForm>

    <FDivider />

    <div class="container">
        <FDraggable
            v-model="hlist"
            class="horizontal"
            :beforeDragend="beforeDragend"
            :disabled="disabled"
        >
            <template #default="{ item }">
                <div class="sort-horizontal-item">{{ item }}</div>
            </template>
        </FDraggable>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const disabled = ref(false);
        const hlist = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

        const beforeDragend = (item, index) => {
            console.log(
                '[draggable.horizontal] [beforeDragend] item:',
                item,
                ' index:',
                index,
            );
            return true;
        };

        return {
            disabled,
            hlist,
            beforeDragend,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}
.sort-horizontal-item {
    line-height: 100px;
    width: 100px;
    background: #fff;
    margin: 1px;
    text-align: center;
}

.horizontal {
    display: flex;
    flex-wrap: wrap;
}
</style>
```

### 多个容器 [​]()

或许你需要由一个容器拖拽到另一个容器

play

```
<template>
    <FForm labelWidth="120px">
        <FFormItem label="禁用容器:">
            <FCheckboxGroup
                v-model="disableds"
                :options="[
                    { label: '左侧容器', value: 'left' },
                    { label: '中间容器', value: 'center' },
                    { label: '右侧容器', value: 'right' },
                ]"
            />
        </FFormItem>
        <FFormItem label="可以放置容器:">
            <FCheckboxGroup
                v-model="droppables"
                :options="[
                    { label: '左侧容器', value: 'left' },
                    { label: '中间容器', value: 'center' },
                    { label: '右侧容器', value: 'right' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <div class="container">
        <FDraggable
            v-model="mlist"
            class="draggable-wrapper"
            :disabled="disableds.includes('left')"
            :droppable="droppables.includes('left')"
            @dragstart="handleDargStart"
            @dragend="handleDargEnd"
        >
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
        <FDraggable
            v-model="mlist2"
            class="draggable-wrapper"
            :disabled="disableds.includes('center')"
            :droppable="droppables.includes('center')"
            @dragstart="handleDargStart2"
            @dragend="handleDargEnd2"
        >
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
        <FDraggable
            v-model="mlist3"
            class="draggable-wrapper"
            :disabled="disableds.includes('right')"
            :droppable="droppables.includes('right')"
        >
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const disableds = ref([]);
        const droppables = ref(['left', 'center', 'right']);

        const mlist = ref([1, 2, 3, 4]);
        const mlist2 = ref([5, 6, 7]);
        const mlist3 = ref([8, 9]);

        function handleDargStart(event, item, setting) {
            console.log(
                '[draggable.container] [handleDargStart] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargStart2(event, item, setting) {
            console.log(
                '[draggable.container] [handleDargStart2] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargEnd(event, item, setting) {
            console.log(
                '[draggable.container] [handleDargEnd] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargEnd2(event, item, setting) {
            console.log(
                '[draggable.container] [handleDargEnd2] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }

        return {
            disableds,
            droppables,
            mlist,
            mlist2,
            mlist3,
            handleDargStart,
            handleDargStart2,
            handleDargEnd,
            handleDargEnd2,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
    display: flex;
    justify-content: space-around;
}

.draggable-wrapper {
    height: 300px;
    width: 200px;
    overflow: auto;
    border: 1px dashed #ccc;
    box-sizing: border-box;
}

.sort-item2 {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
}
</style>
```

### 阻止拖拽 [​]()

当需要检查拖拽结果是否符合要求时，使用 beforeDragend，返回 false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态；

ts

```
type BeforeDragEnd = (
    drag: {
        // 拖拽信息
        item: unknown;
        index: number;
        list: unknown[];
        resultList: unknown[]; // 拖拽结束预期结果
    },
    drop: {
        // 放置信息
        item: unknown;
        index: number;
        list: unknown[];
        resultList: unknown[];
    },
) => Promise<boolean> | boolean;
```

play

```
<template>
    <div class="container" style="display: flex; justify-content: space-around">
        <FDraggable
            v-model="mlist"
            droppable
            class="draggable-wrapper"
            :beforeDragend="beforeDragend"
            @dragstart="handleDargStart"
            @dragend="handleDargEnd"
        >
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
        <FDraggable
            v-model="mlist2"
            droppable
            class="draggable-wrapper"
            :beforeDragend="beforeDragend2"
            @dragstart="handleDargStart2"
            @dragend="handleDargEnd2"
        >
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
        <FDraggable v-model="mlist3" droppable class="draggable-wrapper">
            <template #default="{ item }">
                <div class="sort-item2">{{ item }}</div>
            </template>
        </FDraggable>
    </div>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const mlist = ref([1, 2, 3, 4]);
        const mlist2 = ref([5, 6, 7]);
        const mlist3 = ref([8, 9]);

        function handleDargStart(event, item, setting) {
            console.log(
                '[draggable.checkDragEnd] [handleDargStart] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargStart2(event, item, setting) {
            console.log(
                '[draggable.checkDragEnd] [handleDargStart2] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargEnd(event, item, setting) {
            console.log(
                '[draggable.checkDragEnd] [handleDargEnd] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }
        function handleDargEnd2(event, item, setting) {
            console.log(
                '[draggable.checkDragEnd] [handleDargEnd2] event:',
                event,
                ' item:',
                item,
                ' setting:',
                setting,
            );
        }

        const beforeDragend = (drag, drop) => {
            console.log(
                '[draggable.checkDragEnd] [beforeDragend] drag:',
                drag,
                ' drop:',
                drop,
            );
            FMessage.error('拖拽阻止！');
            return false;
        };

        const beforeDragend2 = (drag, drop) => {
            console.log(
                '[draggable.checkDragEnd] [beforeDragend2] drag:',
                drag,
                ' drop:',
                drop,
            );

            FMessage.error('拖拽阻止！');
            return false;
        };

        return {
            mlist,
            mlist2,
            mlist3,
            handleDargStart,
            handleDargStart2,
            handleDargEnd,
            handleDargEnd2,
            beforeDragend,
            beforeDragend2,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}

.draggable-wrapper {
    height: 300px;
    width: 200px;
    overflow: auto;
    border: 1px dashed #ccc;
    box-sizing: border-box;
}

.sort-item2 {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
}
</style>
```

### 拖拽指令-垂直方向 [​]()

用指令更简单

play

```
<template>
    <div class="container">
        <div v-drag:[dragArg]="vlist">
            <div
                v-for="i in vlist"
                :key="i"
                class="sort-item"
                style="opacity: 1"
            >
                <span>{{ i }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const vlist = ref([]);
        setTimeout(() => {
            vlist.value = [1, 2, 3, 4, 5];
        }, 1000);

        const dragArg = {
            onDragstart(event, item, setting) {
                console.log(
                    '[draggable.instruction] [onDragstart] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            onDragend(event, item, setting) {
                console.log(
                    '[draggable.instruction] [onDragend] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            beforeDragend(item, start, end) {
                console.log(
                    '[draggable.instruction] [beforeDragend] item:',
                    item,
                    ' start:',
                    start,
                    ' end:',
                    end,
                );
                return true;
            },
        };

        return {
            vlist,
            dragArg,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}
.sort-item {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
}
</style>
```

### 拖拽指令-水平方向 [​]()

指令也可以支持水平方向的

play

```
<template>
    <div class="container">
        <div v-drag="vhlist" class="horizontal">
            <div v-for="i in vhlist" :key="i" class="sort-horizontal-item">
                <span>{{ i }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const vhlist = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        return {
            vhlist,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}
.sort-horizontal-item {
    line-height: 100px;
    width: 100px;
    background: #fff;
    margin: 1px;
    text-align: center;
}

.horizontal {
    display: flex;
    flex-wrap: wrap;
}
</style>
```

### 拖拽指令-多个容器 [​]()

指令当然也支持由一个容器拖拽到另一个容器

play

```
<template>
    <div class="container" style="display: flex; justify-content: space-around">
        <div>
            <span class="words">禁止拖拽、不可放置</span>
            <div v-drag:[dragArg].disabled="mlist" class="draggable-wrapper">
                <div v-for="i in mlist" :key="i" class="sort-item2">
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
        <div>
            <span class="words">可拖拽、可放置</span>
            <div v-drag:[dragArg2].droppable="mlist2" class="draggable-wrapper">
                <div v-for="i in mlist2" :key="i" class="sort-item2">
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
        <div>
            <span class="words">可拖拽、不可放置</span>
            <div v-drag="mlist3" class="draggable-wrapper">
                <div v-for="i in mlist3" :key="i" class="sort-item2">
                    <span>{{ i }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const disableds = ref([]);
        const droppables = ref(['left', 'center', 'right']);

        const mlist = ref([1, 2, 3, 4]);
        const mlist2 = ref([5, 6, 7]);
        const mlist3 = ref([8, 9]);

        const dragArg = {
            onDragstart(event, item, setting) {
                console.log(
                    '[draggable.instructionContainer] [onDragstart] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            onDragend(event, item, setting) {
                console.log(
                    '[draggable.instructionContainer] [onDragend] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
        };

        const dragArg2 = {
            onDragstart(event, item, setting) {
                console.log(
                    '[draggable.instructionContainer] [onDragstart] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            onDragend(event, item, setting) {
                console.log(
                    '[draggable.instructionContainer] [onDragend] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
        };

        return {
            disableds,
            droppables,
            mlist,
            mlist2,
            mlist3,
            dragArg,
            dragArg2,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 30px 20px 50px;
    display: flex;
    justify-content: space-around;
}

.words {
    display: block;
    margin-bottom: 10px;
}

.draggable-wrapper {
    height: 300px;
    width: 200px;
    overflow: auto;
    border: 1px dashed #ccc;
    box-sizing: border-box;
}

.sort-item2 {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
}
</style>
```

### 拖拽指令-阻止拖拽 [​]()

play

```
<template>
    <div class="container" style="display: flex; justify-content: space-around">
        <div v-drag:[dragArg].droppable="mlist">
            <div v-for="i in mlist" :key="i" class="sort-item2">
                <span>{{ i }}</span>
            </div>
        </div>
        <div v-drag:[dragArg2].droppable="mlist2">
            <div v-for="i in mlist2" :key="i" class="sort-item2">
                <span>{{ i }}</span>
            </div>
        </div>
        <div v-drag.droppable="mlist3">
            <div v-for="i in mlist3" :key="i" class="sort-item2">
                <span>{{ i }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const mlist = ref([]);
        setTimeout(() => {
            mlist.value = [1, 2, 3, 4];
        }, 1000);
        const mlist2 = ref([5, 6, 7]);
        const mlist3 = ref([8, 9]);

        const dragArg = {
            onDragstart(event, item, setting) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [onDragstart] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            onDragend(event, item, setting) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [onDragend] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            beforeDragend(item, start, end) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [beforeDragend] item:',
                    item,
                    ' start:',
                    start,
                    ' end:',
                    end,
                );
                FMessage.error('拖拽阻止！');
                return false;
            },
        };

        const dragArg2 = {
            onDragstart(event, item, setting) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [onDragstart] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            onDragend(event, item, setting) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [onDragend] event:',
                    event,
                    ' item:',
                    item,
                    ' setting:',
                    setting,
                );
            },
            beforeDragend(item, start, end) {
                console.log(
                    '[draggable.instructionCheckDragEnd] [beforeDragend] item:',
                    item,
                    ' start:',
                    start,
                    ' end:',
                    end,
                );
                FMessage.error('拖拽阻止！');
                return false;
            },
        };

        return {
            mlist,
            mlist2,
            mlist3,
            dragArg,
            dragArg2,
        };
    },
};
</script>

<style scoped>
.container {
    background: #eee;
    padding: 50px 20px;
}

.sort-item2 {
    line-height: 50px;
    background: #fff;
    margin: 1px 0;
    padding-left: 20px;
    width: 150px;
}
</style>
```

## Draggable Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|绑定值|Array|`[]`|
|tag|指定 root dom 类型|string|`div`|
|disabled|是否禁止拖拽|boolean|`false`|
|droppable|是否可以放置，设置为 droppable 的容器都可以相互拖拽放置|boolean|`false`|
|beforeDragend|拖拽结束之前回调，返回 false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态|[`BeforeDragEnd`]()|() => true|

## Draggable Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|dragstart|拖拽开始触发|(event, item, index) => void|
|dragend|拖拽结束触发|(event, item, index) => void|

## Draggable Slots [​]()

|名称|说明|属性|
|---|---|---|
|default|item 内容|`{ item, index }`|

## Draggable Directive [​]()

|项|说明|
|---|---|
|指令名称|v-drag|
|值|绑定值 Array 类型|
|修饰符 droppable|是否可以放置其他容器的拖拽目标|
|修饰符 disabled|是否禁用|
|参数|Object，指令参数|
|\-- beforeDragend|拖拽结束之前回调，[`BeforeDragEnd`]()|
|\-- onDragstart|拖拽开始触发|
|\-- onDragend|拖拽结束触发|

阅读原文：http://fe.weoa.com/fes-design/zh/components/draggable.html