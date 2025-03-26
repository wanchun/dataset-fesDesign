# Icon 图标 [​]()

## Icon 使用 [​]()

点击具体 icon 可直接复制代码。

vue

```
<template>
    <CloseCircleFilled />
</template>

<script setup>
import { CloseCircleFilled } from '@fesjs/fes-design/icon';
</script>
```

## Icons 列表 [​]()

AppstoreOutlined

ArrowDownOutlined

ArrowUpOutlined

BellOffOutlined

BellOutlined

CaretDownOutlined

CaretLeftOutlined

CaretOrderOutlined

CaretRightOutlined

CaretUpOutlined

CheckCircleFilled

CheckCircleOutlined

CheckOutlined

CheckSquareOutlined

ClockCircleOutlined

CloseCircleFilled

CloseCircleOutlined

CloseOutlined

CloseSquareOutlined

ClusterOutlined

CodeOutlined

CommentOutlined

DateOutlined

DeleteOutlined

DoubleDownOutlined

DoubleLeftOutlined

DoubleRightOutlined

DoubleUpOutlined

DownCircleFilled

DownOutlined

DownSquareOutlined

DownloadOutlined

DragOutlined

EditOutlined

ExclamationCircleFilled

ExclamationCircleOutlined

EyeInvisibleOutlined

EyeOutlined

FileOutlined

FilterOutlined

FolderAddOutlined

FolderOutlined

HomeOutlined

IndentOutlined

InfoCircleFilled

InfoCircleOutlined

LanguageOutlined

LeftCircleFilled

LeftCircleOutlined

LeftOutlined

LeftSquareOutlined

LikeFilled

LikeOutlined

LinkOutlined

LoadingOutlined

MailOutlined

ManagementOutlined

MinusCircleFilled

MinusCircleOutlined

MinusOutlined

MinusSquareOutlined

MoreCircleFilled

MoreCircleOutlined

MoreOutlined

OutdentOutlined

PasswordOutlined

PictureFailOutlined

PictureOutlined

PlayFilled

PlayOutlined

PlusCircleFilled

PlusCircleOutlined

PlusOutlined

PlusSquareOutlined

ProductOutlined

QuestionCircleFilled

QuestionCircleOutlined

QuitOutlined

ReloadOutlined

RightCircleFilled

RightCircleOutlined

RightOutlined

RightSquareOutlined

RotateLeftOutlined

RotateRightOutlined

SearchMinusOutlined

SearchOutlined

SearchPlusOutlined

SettingOutlined

ShareOutlined

SortOutlined

StarFilled

StarOutlined

StopFilled

StopOutlined

SwapLeftOutlined

SwapOutlined

SwapRightOutlined

UnorderedListOutlined

UpCircleFilled

UpCircleOutlined

UpOutlined

UpSquareOutlined

UploadOutlined

UserManagementOutlined

UserOutlined

VerticalLeftOutlined

VerticalRightOutlined

## 代码演示 [​]()

### 基础用法 [​]()

play

```
<template>
    <FSpace>
        <FButton type="primary"> <SearchOutlined />查询 </FButton>
        <FDivider vertical />
        <FButton>
            <template #icon>
                <DownloadOutlined />
            </template>
            下载
        </FButton>
    </FSpace>
</template>

<script setup>
import { DownloadOutlined, SearchOutlined } from '@fesjs/fes-design/icon';
</script>
```

### 加载状态 [​]()

play

```
<template>
    <FSpace>
        <LoadingOutlined />
        <RotateRightOutlined :spin="true" />
    </FSpace>
</template>

<script setup>
import { LoadingOutlined, RotateRightOutlined } from '@fesjs/fes-design/icon';
</script>
```

### 自定义 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="大小：">
            <FInputNumber
                v-model="size"
                :min="12"
                :max="30"
                :step="1"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="颜色：">
            <FRadioGroup v-model="color">
                <FRadio value="#5384ff">primary</FRadio>
                <FRadio value="#00cb91">success</FRadio>
                <FRadio value="#ff4d4f">danger</FRadio>
                <FRadio value="#f29360">warning</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="旋转：">
            <FInputNumber
                v-model="rotate"
                :min="0"
                :max="360"
                :step="10"
            />
            <span style="margin-left: 10px">deg</span>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <EditOutlined :size="size" :rotate="rotate" :color="color" />
    </FSpace>
</template>

<script setup>
import { ref } from 'vue';
import { EditOutlined } from '@fesjs/fes-design/icon';

const size = ref(24);
const rotate = ref(45);
const color = ref('#5384ff');
</script>
```

## Icon Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|spin|是否不停转动|boolean|`false`|
|rotate|旋转|number|`-`|
|tabIndex|tabIndex，设置后会可被选中|number|`-`|
|size|大小|number|`-`|
|color|颜色|string|`-`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/icon.html