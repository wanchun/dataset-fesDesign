# InputFile 文件选择 [​]()

## 组件注册 [​]()

js

```
import { FInputFile } from '@fesjs/fes-design';

app.use(FInputFile);
```

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FForm layout="inline" :inlineItemWidth="120">
        <FFormItem label="多选:">
            <FSwitch v-model="multiple" />
        </FFormItem>
        <FFormItem label="禁用:">
            <FSwitch v-model="disabled" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FInputFile
        :multiple="multiple"
        :disabled="disabled"
        :accept="['image/*']"
        @change="handleChange"
    />
</template>

<script setup>
import { ref } from 'vue';

const multiple = ref(false);
const disabled = ref(false);

const handleChange = (files) =>
    console.log('[inputFile.basic]', '[handleChange]', files);
</script>
```

### 拖放文件 [​]()

play

```
<template>
    <FForm layout="inline" :inlineItemWidth="120">
        <FFormItem label="多选:">
            <FSwitch v-model="multiple" />
        </FFormItem>
        <FFormItem label="禁用:">
            <FSwitch v-model="disabled" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FInputFileDragger
        :multiple="multiple"
        :disabled="disabled"
        :accept="['.pdf']"
        @change="handleChange"
    >
        点击或者拖拽文件到此区域
    </FInputFileDragger>
</template>

<script setup>
import { ref } from 'vue';

const multiple = ref(false);
const disabled = ref(false);

const handleChange = (files) =>
    console.log('[inputFile.basic]', '[handleChange]', files);
</script>
```

### 自定义 [​]()

play

```
<template>
    <FForm layout="inline" :inlineItemWidth="120">
        <FFormItem label="多选:">
            <FSwitch v-model="multiple" />
        </FFormItem>
        <FFormItem label="禁用:">
            <FSwitch v-model="disabled" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FInputFile
        v-model="fileList"
        :multiple="multiple"
        :disabled="disabled"
        :accept="['image/*']"
        @change="handleChange"
    >
        <FButton type="info" :disabled="disabled">
            <template #icon>
                <UploadOutlined />
            </template>
            请选择文件
        </FButton>

        <template #fileList="{ files }">
            <div class="file-list">
                <div
                    v-for="file in files"
                    :key="file.uid"
                    class="file-list-item"
                >
                    <div class="file-list-name-wrapper">
                        <slot name="file" :file="file">
                            <FileOutlined />
                            <div class="file-list-name">{{ file.name }}</div>
                        </slot>
                    </div>
                    <div class="file-list-icon">
                        <CloseCircleFilled
                            v-if="!disabled"
                            class="file-list-icon-close"
                            @click="() => handleRemoveFile(file.uid)"
                        />
                    </div>
                </div>
            </div>
        </template>
    </FInputFile>
</template>

<script setup>
import { ref } from 'vue';

const multiple = ref(true);
const disabled = ref(false);
const fileList = ref([]);

const handleChange = (files) =>
    console.log('[inputFile.customSelect] [handleChange] files:', files, ', fileList:', fileList.value);

const handleRemoveFile = (uid) => {
    const targetIndex = fileList.value.findIndex((file) => file.uid === uid);
    fileList.value.splice(targetIndex, 1);
};
</script>

<style scoped>
.file-list {
    width: 100%;
    color: var(--f-sub-head-color);
    font-size: var(--f-font-size-base);
    line-height: 24px;
}
.file-list .file-list-item {
    display: flex;
    align-items: center;
    margin-top: 4px;
    border-radius: var(--f-border-radius-sm);
}
.file-list .file-list-item:first-child {
    margin-top: 8px;
}
.file-list .file-list-item:last-child {
    margin-bottom: 8px;
}
.file-list .file-list-item .file-list-name-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
}
.file-list .file-list-item .file-list-name-wrapper .file-list-name {
    margin-left: 6px;
}

.file-list .file-list-item .file-list-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40px;
    color: var(--f-text-color-secondary);
}
.file-list .file-list-item .file-list-icon .file-list-icon-close {
    display: none;
    padding: 2px;
}
.file-list .file-list-item:hover {
    background-color: var(--f-hover-color-light);
}
.file-list .file-list-item:hover .file-list-icon .file-list-icon-close {
    display: inline-block;
}

:deep(.fes-input-file .fes-input-file-visible-content) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
:deep(.fes-input-file .fes-input-file-visible-content .fes-input-file-file-list) {
    width: 100%;
    max-width: 500px;
}
</style>
```

## InputFile Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|v-model|选择的文件|`FileItem[]`|`[]`|
|multiple|是否支持多选文件|`boolean`|`false`|
|accept|接受的文件类型|`string[]`|`[]`|
|disabled|是否禁用|`boolean`|`false`|

## InputFile Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|选择文件后调用|`(files: FileItem[]) => void`|

## InputFile Slots [​]()

|名称|说明|参数|
|---|---|---|
|default|触发文件选择框的内容|\-|
|fileList|自定义选中文件的展示|`{ files }`|

## InputFileDragger Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|onFileTypeInvalid|拖拽文件类型不满足 `accept` 时的钩子函数，若未定义则使用内置提示|`(files: File[]) => void`|\-|

## 类型 [​]()

### FileItem [​]()

ts

```
interface FileItem extends File {
    uid?: number | string;
}
```

阅读原文：http://fe.weoa.com/fes-design/zh/components/inputFile.html