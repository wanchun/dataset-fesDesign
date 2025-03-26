# Radio 单选框 [​]()

## 组件注册 [​]()

js

```
import { FRadio, FRadioButton, FRadioGroup } from '@fesjs/fes-design';

app.use(FRadio);
app.use(FRadioGroup);
app.use(FRadioButton);
```

## 代码演示 [​]()

### 基础用法 [​]()

单独使用可以表示两种状态之间的切换，写在标签中的内容为 `radio` 按钮后的介绍。

play

```
<template>
    <FSpace>
        <FRadio>单选框</FRadio>
        <FRadio disabled>单选框-禁用状态</FRadio>
    </FSpace>
</template>
```

### 组合用法 [​]()

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

play

```
<template>
    <FSpace>
        <FRadioGroup v-model="val" :cancelable="false" @change="handleChange">
            <FRadio v-for="i in len" :key="i" :value="i">{{ i }}</FRadio>
        </FRadioGroup>
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val = ref();
        const len = 30;
        const handleChange = (value) => {
            console.log('[radio.group] [handleChange] value:', value);
        };
        return {
            len,
            val,
            handleChange,
        };
    },
};
</script>
```

#### 垂直方向 [​]()

play

```
<template>
    <FSpace>
        <FRadioGroup vertical>
            <FRadio :value="1">1</FRadio>
            <FRadio :value="2">22</FRadio>
            <FRadio :value="3">333</FRadio>
            <FRadio :value="4">4444</FRadio>
        </FRadioGroup>
        <FRadioGroup vertical disabled>
            <FRadio :value="1">1</FRadio>
            <FRadio :value="2">22</FRadio>
            <FRadio :value="3">333</FRadio>
            <FRadio :value="4">4444</FRadio>
        </FRadioGroup>
    </FSpace>
</template>
```

#### 按钮组 [​]()

单选按钮组，可通过 `size` 设置按钮组整体大小，对于单个按钮可以通过 `disabled` 设置是否禁用。 按钮样式分为两种，可以通过 `type` 进行设置。 按钮组分为有边框和无边框两种，可以通过进行 `bordered` 设置。

play

```
<template>
    <FForm>
        <FFormItem label="按钮边框:">
            <FRadioGroup
                v-model="bordered"
                :cancelable="false"
                :options="[
                    { label: '有边框(默认)', value: true },
                    { label: '无边框', value: false },
                ]"
            />
        </FFormItem>
        <FFormItem label="按钮大小:">
            <FRadioGroup
                v-model="size"
                :cancelable="false"
                :options="[
                    { label: 'middle(默认)', value: 'middle' },
                    { label: 'small', value: 'small' },
                ]"
            />
        </FFormItem>
        <FFormItem label="按钮样式:">
            <FRadioGroup
                v-model="type"
                :cancelable="false"
                :options="[
                    { label: 'default(默认)', value: 'default' },
                    { label: 'primary', value: 'primary' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FRadioGroup
            v-model="val1"
            :size="size"
            :type="type"
            :bordered="bordered"
            :cancelable="false"
            @change="handleChange"
        >
            <FRadioButton :value="1">选项一</FRadioButton>
            <FRadioButton :value="2">选项二</FRadioButton>
            <FRadioButton :value="3" disabled>选项三</FRadioButton>
            <FRadioButton :value="4">选项四</FRadioButton>
        </FRadioGroup>
        <FRadioGroup
            v-model="val2"
            :size="size"
            :type="type"
            :bordered="bordered"
            :cancelable="true"
            @change="handleChange"
        >
            <FRadioButton :value="1">选项一</FRadioButton>
        </FRadioGroup>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const val1 = ref(1);
const val2 = ref(1);

const handleChange = (value) => {
    console.log('[radio.button] [handleChange] value:', value);
};

const bordered = ref(true);
const size = ref('middle');
const type = ref('default');
</script>
```

### 按钮组图标插槽 [​]()

play

```
<template>
    <FRadioGroup v-model="value">
        <FRadioButton :value="1">
            <template #icon>
                <ProductOutlined />
            </template>
            选项一
        </FRadioButton>
        <FRadioButton :value="2">
            <template #icon>
                <StarOutlined />
            </template>
            选项二
        </FRadioButton>
        <FRadioButton :value="3">选项三</FRadioButton>
    </FRadioGroup>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

#### 配置方式 [​]()

通过配置 `options` 直接生成选项,可以通过 `optionType` 设置生成项的类型

play

```
<template>
    <FSpace>
        <FRadioGroup
            v-model="val"
            :cancelable="false"
            :options="options"
            @change="handleChange"
        />
    </FSpace>
    <FSpace>
        <FRadioGroup
            v-model="val1"
            :cancelable="false"
            :options="options"
            optionType="button"
            @change="handleChange"
        />
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const val = ref();
        const val1 = ref();
        const options = ref([]);
        const len = 10;
        for (let index = 1; index <= len; index++) {
            options.value.push({ label: index, value: index });
        }
        const handleChange = (value) => {
            console.log('[radio.options] [handleChange] value:', value);
        };
        return {
            val,
            val1,
            options,
            handleChange,
        };
    },
};
</script>
```

## Radio Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|disabled|是否禁用|boolean|`false`|
|label|描述和介绍|string|`null`|
|v-model|绑定值|boolean|`false`|
|value|选中状态的值（搭配 RadioGroup 使用时有效）|string / number / boolean|`null`|

## Radio Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|当绑定值变化时触发的事件|更新后的值|

## Radio Slots [​]()

|名称|说明|
|---|---|
|default|描述和介绍。相比 label，slot 优先使用|

## RadioGroup Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|disabled|是否禁用|boolean|`false`|
|v-model|绑定值|string \| number \| boolean|`-`|
|vertical|是否垂直排列（默认水平排列）|boolean|`false`|
|cancelable|选中后是否可取消|boolean|`true`|
|options|选项配置|array<Option>|`[]`|
|valueField|替代 `Option` 中的 `value` 字段名|string|`value`|
|labelField|替代 `Option` 中的 `label` 字段名|string|`label`|
|optionType|用于设置 Radio options 类型 可选值 `default` `button`|string|`default`|
|type|按钮样式类型 可选值 `default` `primary`|string|`default`|
|size|按钮大小 可选值 `small` `middle`|string|`middle`|
|bordered|按钮是否含有边框|boolean|`true`|
|fullLine|是否撑满整个父容器宽度|boolean|`false`|

## RadioButton Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|disabled|是否禁用|boolean|`false`|
|label|按钮描述和介绍|string|`null`|
|v-model|按钮选定状态 双向绑定|boolean|`false`|
|value|选中状态的值，RadioButton 需在 RadioGroup 标签内使用|string / number / boolean|`null`|

## RadioGroup Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|当绑定值变化时触发的事件|更新后的值|

## RadioGroup Slots [​]()

|名称|说明|
|---|---|
|default|Radio 组件|
|icon|图标|

## Option Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|选项的值，需要唯一|string / number / boolean|\-|
|label|选项的标签|string / number|\-|
|disabled|是否禁用|boolean|`false`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/radio.html