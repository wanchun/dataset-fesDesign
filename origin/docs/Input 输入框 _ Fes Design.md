# Input 输入框 [​]()

通过鼠标或键盘输入内容。

## 组件注册 [​]()

js

```
import { FInput } from '@fesjs/fes-design';

app.use(FInput);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace vertical>
        <FInput
            v-model="inputValue"
            placeholder="请输入"
            :autofocus="true"
            @keydown="handleKeydown"
            @input="handleInput"
            @change="handleChange"
        />
        <FInput placeholder="请输入" :maxlength="100" showWordLimit />
    </FSpace>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    setup() {
        const inputValue = ref('hello input');
        watch(inputValue, () => {
            console.log(
                '[input.common] [watch] inputValue.value:',
                inputValue.value,
            );
        });

        const handleKeydown = (value) => {
            console.log('[input.common] [handleKeydown] value:', value);
        };
        const handleChange = () => {
            console.log(
                '[input.common] [handleChange] inputValue.value:',
                inputValue.value,
            );
        };
        const handleInput = (value) => {
            console.log(
                '[input.common] [handleInput] value:',
                value,
                ' inputValue.value:',
                inputValue.value,
            );
        };

        return {
            inputValue,
            handleKeydown,
            handleChange,
            handleInput,
        };
    },
};
</script>
```

### 复合型输入框 [​]()

play

```
<template>
    <FSpace vertical>
        <FInput placeholder="请输入">
            <template #prepend> https:// </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #append>
                <FButton type="primary">搜索</FButton>
            </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #prepend>
                <FSelect v-model="selectValue" style="width: 90px">
                    <FOption :value="1">湖南</FOption>
                    <FOption :value="2" label="湖北" disabled />
                    <FOption
                        :value="3"
                        label="浙江浙江浙江浙江浙江浙江浙江浙江浙江"
                    />
                    <FOption :value="4" label="广东" />
                    <FOption :value="5" label="江苏" />
                </FSelect>
            </template>
            <template #prefix> ¥ </template>
            <template #suffix> RMB </template>
            <template #append>
                <FSelect v-model="selectValue" style="width: 90px">
                    <FOption :value="1">湖南</FOption>
                    <FOption :value="2" label="湖北" disabled />
                    <FOption
                        :value="3"
                        label="浙江浙江浙江浙江浙江浙江浙江浙江浙江"
                    />
                    <FOption :value="4" label="广东" />
                    <FOption :value="5" label="江苏" />
                </FSelect>
            </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #append>
                <FSelectCascader
                    v-model="cascaderValue"
                    :data="options"
                    style="width: 90px"
                    @change="handleChange"
                />
            </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #append>
                .com
            </template>
        </FInput>
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';

const options = [
    {
        value: '110000',
        label: '北京市',
        children: [
            {
                value: '110100',
                label: '市辖区',
                children: [
                    {
                        value: '110101',
                        label: '东城区东城区东城区东城区东城区东城区',
                    },
                    {
                        value: '110102',
                        label: '西城区',
                    },
                ],
            },
            {
                value: '110200',
                label: '市辖县',
                children: [
                    {
                        value: '110228',
                        label: '密云县',
                    },
                    {
                        value: '110229',
                        label: '延庆县',
                    },
                ],
            },
        ],
    },
    {
        value: '130000',
        label: '河北省',
        children: [
            {
                value: '130100',
                label: '石家庄市',
            },
            {
                value: '130200',
                label: '唐山市',
            },
        ],
    },
    {
        value: '140000',
        label: '山西省',
    },
];

const selectValue = ref();

const cascaderValue = ref();
const handleChange = (value) => {
    console.log('[input.append] [handleChange] value:', value);
};
</script>
```

### 可清除输入框 [​]()

play

```
<template>
    <FForm>
        <FFormItem>
            <FInput clearable placeholder="请输入" />
        </FFormItem>
        <FFormItem>
            <FInput
                type="password"
                clearable
                showPassword
                placeholder="请输入"
            />
        </FFormItem>
    </FForm>
</template>
```

### disabled [​]()

play

```
<template>
    <FSpace vertical>
        <FInput disabled placeholder="请输入" />
        <FInput disabled modelValue="hello we input" />
    </FSpace>
</template>
```

### 显示输入数字 [​]()

play

```
<template>
    <FSpace vertical>
        <FInput
            type="textarea"
            showWordLimit
            :maxlength="200"
            placeholder="请输入"
        />
    </FSpace>
</template>
```

### 密码输入框 [​]()

play

```
<template>
    <FForm>
        <FFormItem>
            <FInput type="password" placeholder="请输入" />
        </FFormItem>
        <FFormItem>
            <FInput type="password" showPassword placeholder="请输入" />
        </FFormItem>
    </FForm>
</template>
```

### 自定义前缀/后缀 [​]()

play

```
<template>
    <FSpace vertical>
        <FInput placeholder="请输入">
            <template #suffix>
                <SearchOutlined @click="search" />
            </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #suffix>
                <UserOutlined />
            </template>
        </FInput>

        <FInput placeholder="请输入">
            <template #prefix> count ( </template>
            <template #suffix> ) </template>
        </FInput>
    </FSpace>
</template>

<script>
export default {
    setup() {
        const search = () => {
            console.log('[input.prefixSuffix] [search]');
        };

        return {
            search,
        };
    },
};
</script>
```

### 文本域 [​]()

play

```
<template>
    <FSpace vertical>
        文本输入
        <FInput type="textarea" placeholder="请输入" />
        <span>最小2行/最大5行</span>
        <FInput
            v-model="autoSizeValue"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="请输入"
        />
        禁用
        <FInput
            type="textarea"
            modelValue="hello disabled textarea"
            disabled
            placeholder="请输入"
        />
    </FSpace>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const autoSizeValue = ref();
        return {
            autoSizeValue,
        };
    },
};
</script>
```

### 事件监听 [​]()

play

```
<template>
    <FSpace vertical>
        change 事件:
        <FInput placeholder="请输入" @change="textChange" />
        keydown 事件:
        <FInput placeholder="请输入" @keydown="keyDown" />
        input 事件:
        <FInput placeholder="请输入" @input="inputChange" />
        enter 事件:
        <FInput
            placeholder="请输入"
            @keyup.enter="keyupEnter"
            @change="keyupEnterChange"
        />
        clear 事件:
        <FInput
            placeholder="请输入"
            clearable
            @clear="textClear"
            @input="textClearInput"
        />
    </FSpace>
</template>

<script>
export default {
    setup() {
        const textChange = (e) => {
            console.log('[input.event] [textChange] e:', e);
        };

        const keyDown = (e) => {
            console.log('[input.event] [keyDown] e:', e);
        };

        const inputChange = (e) => {
            console.log('[input.event] [inputChange] e:', e);
        };

        const keyupEnter = (e) => {
            console.log('[input.event] [keyupEnter] e:', e);
        };
        // enter 事件会同时触发 change 事件
        const keyupEnterChange = (e) => {
            console.log('[input.event] [keyupEnterChange] e:', e);
        };

        const textClear = () => {
            console.log('[input.event] [textClear]');
        };
        // clear 事件会同时触发 input 事件
        const textClearInput = (e) => {
            console.log('[input.event] [textClearInput] e:', e);
        };

        return {
            textChange,
            keyDown,
            inputChange,
            keyupEnter,
            keyupEnterChange,
            textClear,
            textClearInput,
        };
    },
};
</script>
```

### 聚焦和失焦 [​]()

play

```
<template>
    <FButton class="mb-10" type="primary" @click="handleFocus">
        手动聚焦
    </FButton>
    <FInput
        ref="inputRef"
        placeholder="请输入"
        @blur="handleInputBlur"
        @focus="handleInputFocus"
    />
</template>

<script>
import { nextTick, ref } from 'vue';

export default {
    setup() {
        const inputRef = ref(null);

        // 手动聚焦
        const handleFocus = async () => {
            await nextTick();
            inputRef.value?.focus();

            setTimeout(() => {
                inputRef.value?.blur();
            }, 5000);
        };

        const handleInputBlur = (e) => {
            console.log('[input.handleFocus] [blur] e:', e);
        };
        const handleInputFocus = (e) => {
            console.log('[input.handleFocus] [focus] e:', e);
        };

        return {
            inputRef,
            handleFocus,
            handleInputBlur,
            handleInputFocus,
        };
    },
};
</script>

<style scoped>
.mb-10 {
    margin-bottom: 10px;
}
</style>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|autocomplete|原生属性，自动补全|string|\-|
|clearable|可以点击清除图标删除内容，仅`type`非`textarea`时有效|boolean|`false`|
|disabled|是否禁用|boolean|`false`|
|maxlength|最大长度|number|\-|
|placeholder|placeholder|string|\-|
|type|`textarea`为文本域，非`textarea`时声明`input`类型，同原生`input`标签的`type`属性|string|`text`|
|modelValue|v-model 双向绑定|number、string|\-|
|resize|是否允许用户缩放，可选值： `none` `both` `horizontal` `vertical`|string|\-|
|rows|输入框行数，只在 `type="textarea"` 时有效|number|2|
|showWordLimit|是否显示输入数字统计，只在 `type="textarea"` 时有效|boolean|false|
|showPassword|是否显示切换密码图标，仅`type`非`textarea`时有效|boolean|false|
|autosize|自适应内容高度，只在 `type="textarea"` 时有效，可输入对象，入 `{ minRows: 2, maxRows: 3 }`|boolean、object|false|
|autofocus|是否自动获取焦点|boolean|`false`|

## Slots [​]()

|属性|说明|
|---|---|
|prefix|前缀，只在 `type="text"` 时有效|
|suffix|后缀，只在 `type="text"` 时有效|
|prepend|前置内容，只在 `type="text"` 时有效|
|append|后置内容，只在 `type="text"` 时有效|

## Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|仅在输入框失去焦点或用户按下回车时触发|(event) => void|
|input|内容变更触发|(event) => void|
|blur|失去焦点|(event) => void|
|focus|获取焦点|(event) => void|
|clear|点击 `clearable` 属性生成的清空按钮时触发，仅`type`非`textarea`时有效|\-|
|keydown|按下键盘时触发|(event) => void|

## Methods [​]()

|名称|说明|
|---|---|
|blur|取消焦点|
|focus|获取焦点|

阅读原文：http://fe.weoa.com/fes-design/zh/components/input.html