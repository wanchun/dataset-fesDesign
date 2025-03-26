# Transfer 穿梭框 [​]()

主要用于多组数据操作的场景中，当一组数据和另一组数据可以相互交换内容，或从一组数据选择其中部分数据组成一组新的数据组时，可使用穿梭框来实现。

## 组件注册 [​]()

js

```
import { FTransfer } from '@fesjs/fes-design';

app.use(FTransfer);
```

## 代码演示 [​]()

### 基础用法 [​]()

当内容只需单项穿梭时，可用此组件完成操作，此组件属于排列组合型

play

```
<template>
    <FTransfer :options="options" :style="{ width: '520px' }" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref(
    new Array(10)
        .fill(null)
        .map((_, index) => ({ label: `Option ${index + 1}`, value: index })),
);
</script>
```

### 双向穿梭 [​]()

当数据可进行相互交换时，可用此组件完成操作，此组件属于离散重组型

play

```
<template>
    <FTransfer twoWay :options="options" :style="{ width: '520px' }" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref(
    new Array(10)
        .fill(null)
        .map((_, index) => ({ label: `Option ${index + 1}`, value: index })),
);
</script>
```

### 搜索 [​]()

可在穿梭框中配置过滤条件

play

```
<template>
    <FSpace vertical>
        <FTransfer
            filterable
            :options="options1"
            :style="{ width: '520px', height: '502px' }"
        />
        <FTransfer
            twoWay
            filterable
            :options="options2"
            :style="{ width: '520px', height: '502px' }"
        />
    </FSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const createOptions = (num = 12) =>
    new Array(num)
        .fill(null)
        .map((_, index) => ({ label: `Option ${index + 1}`, value: index }));

const options1 = ref(createOptions());
const options2 = ref(createOptions());
</script>
```

### 固定高度 [​]()

指定 `height` 属性，固定组件高度

play

```
<template>
    <FForm>
        <FFormItem label="开启过滤">
            <FSwitch v-model="filterable" />
        </FFormItem>
    </FForm>
    <FTransfer
        :options="options"
        :twoWay="false"
        :filterable="filterable"
        :height="400"
        :style="{ width: '520px' }"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const filterable = ref<boolean>(true);

const options = ref(
    new Array(50)
        .fill(null)
        .map((_, index) => ({ label: `Option ${index + 1}`, value: index })),
);
</script>
```

### 树形结构 [​]()

仅在单向穿梭框生效

play

```
<template>
    <FTransfer :options="options" :style="{ width: '520px' }" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const LABEL_MAP = [undefined, '三生万物', '二生三', '一生二', '道生一'];

const createData = (level = 1, prefix = '') => {
    if (!level) {
        return undefined;
    }
    return new Array(2).fill(null).map((_, index) => {
        const key = [prefix, level, index].join('');
        return {
            label: LABEL_MAP[level],
            value: key,
            children: createData(level - 1, key),
            checkable: level % 2 !== 0,
        };
    });
};

const options = ref(createData(4));
</script>
```

### 自定义标签内容 [​]()

play

```
<template>
    <FTransfer :options="options" :style="{ width: '520px' }">
        <template #label="{ option }">
            <div :style="{ display: 'flex', alignItems: 'center' }">
                <UserManagementOutlined :style="{ marginRight: '4px' }" />
                <span> {{ option.label }}</span>
            </div>
        </template>
    </FTransfer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref(
    new Array(10)
        .fill(null)
        .map((_, index) => ({ label: `Staff ${index + 1}`, value: index })),
);
</script>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|选中的值|`(string | number)[]`|`[]`|
|options|选项|`TransferOption[]`|`[]`|
|twoWay|开启双向模式|`boolean`|`false`|
|filterable|开启过滤|`boolean`|`false`|
|filter|过滤函数|`(text: string, option: TransferOption) => boolean`|\-|
|height|固定高度|`number`|\-|

### TransferOption [​]()

|属性|说明|类型|require|
|---|---|---|:---:|
|value|选项的值|`string | number`|必填|
|label|选项的标签|`string`|必填|
|disabled|是否禁用|`boolean`||
|checkable|是否显示 checkbox|`boolean`||
|children|子选项（用于树形结构）|`TransferOption[]`||

## Slots [​]()

|名称|说明|参数|
|---|---|---|
|label|自定义标签内容|`{ option: TransferOption }`|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|因交互引起 v-model 值变化时触发|`{ nextValue: (string | number)[] }`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/transfer.html