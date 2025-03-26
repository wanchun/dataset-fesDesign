# Form 表单 [​]()

由输入框、单选框、复选框、下拉框等控件组成，用以收集、校验、提交数据。

## 组件注册 [​]()

js

```
import { FForm } from '@fesjs/fes-design';

app.use(FForm);
```

## 代码演示 [​]()

### 基本使用 [​]()

包括各种表单项，比如输入框、选择器、单选框、多选框等。

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="输入姓名">
            <FInput placeholder="请输入" />
        </FFormItem>
        <FFormItem label="选择城市">
            <FSelect clearable placeholder="请单选">
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="选择性别">
            <FRadioGroup>
                <FRadio :value="1">男</FRadio>
                <FRadio :value="2">女</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="这是一段长的表单项描述">
            <FInput placeholder="请输入" />
        </FFormItem>
        <FFormItem label="年龄范围">
            <FCheckboxGroup>
                <FCheckbox :value="1 - 5">1 - 5</FCheckbox>
                <FCheckbox :value="6 - 10">6 - 10</FCheckbox>
                <FCheckbox :value="11 - 15">11 - 15</FCheckbox>
                <FCheckbox :value="16 - 20">16 - 20</FCheckbox>
                <FCheckbox :value="21 - 25">21 - 25</FCheckbox>
                <FCheckbox :value="26 - 30">26 - 30</FCheckbox>
                <FCheckbox :value="31 - 35">31 - 35</FCheckbox>
                <FCheckbox :value="36 - 40">36 - 40</FCheckbox>
                <FCheckbox :value="41 - 45">41 - 45</FCheckbox>
                <FCheckbox :value="36 - 40">36 - 40</FCheckbox>
                <FCheckbox :value="41 - 45">41 - 45</FCheckbox>
                <FCheckbox :value="46 - 50">46 - 50</FCheckbox>
                <FCheckbox :value="51 - 55">51 - 55</FCheckbox>
                <FCheckbox :value="56 - 60">56 - 60</FCheckbox>
                <FCheckbox :value="61 - 65">61 - 65</FCheckbox>
            </FCheckboxGroup>
        </FFormItem>
        <FFormItem label="上传" :contentStyle="{ display: 'block' }">
            <FUpload>
                <template #tip>
                    <div class="f-upload__tip">
                        只能上传 jpg/png 等图片文件，且不超过 5KB
                    </div>
                </template>
            </FUpload>
        </FFormItem>
        <FFormItem label=" ">
            <FButton type="primary">Submit</FButton>
        </FFormItem>
    </FForm>
</template>

<script>
export default {
    setup() {
        return {
            optionList: [
                {
                    value: 'HuNan',
                    label: '湖南',
                },
                {
                    value: 'HuBei',
                    label: '湖北',
                },
                {
                    value: 'ZheJiang',
                    label: '浙江',
                },
                {
                    value: 'GuangDong',
                    label: '广东',
                },
                {
                    value: 'JiangSu',
                    label: '江苏',
                },
            ],
        };
    },
};
</script>

<style scoped></style>
```

### 行内表单 [​]()

当垂直方向空间受限且表单较简单时，可以使用行内表单模式。

play

```
<template>
    <FForm labelWidth="120px">
        <FFormItem label="行间距:">
            <FInputNumber
                v-model="inlineItemGap"
                :min="5"
                :max="30"
                :step="1"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem label="每项宽度设置方式:">
            <FRadioGroup
                v-model="itemWidthType"
                :options="[
                    { label: '占据列数', value: 'span' },
                    { label: '固定宽度', value: 'inlineItemWidth' },
                ]"
            />
        </FFormItem>
        <FFormItem v-if="itemWidthType === 'span'" label="占据列数：">
            <FInputNumber
                v-model="span"
                :min="6"
                :max="24"
                :step="1"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
        <FFormItem
            v-if="itemWidthType === 'inlineItemWidth'"
            label="固定宽度："
        >
            <FInputNumber
                v-model="inlineItemWidth"
                :min="100"
                :max="500"
                :step="10"
            />
            <span style="margin-left: 10px">px</span>
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm
        layout="inline"
        labelWidth="100px"
        labelPosition="right"
        :inlineItemGap="inlineItemGap"
        :span="itemWidthType === 'span' ? span : undefined"
        :inlineItemWidth="
            itemWidthType === 'inlineItemWidth' ? inlineItemWidth : undefined
        "
    >
        <FFormItem label="输入姓名">
            <FInput placeholder="请输入" />
        </FFormItem>
        <FFormItem label="选择城市">
            <FSelect clearable placeholder="请单选">
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="选择城市">
            <FSelect clearable placeholder="请单选">
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="选择性别">
            <FRadioGroup>
                <FRadio :value="0">未知</FRadio>
                <FRadio :value="1">男</FRadio>
                <FRadio :value="2">女</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="输入其他">
            <FInput placeholder="请输入" />
        </FFormItem>
        <FFormItem label="选择性别" align="center">
            <FRadioGroup>
                <FRadio :value="0">未知</FRadio>
                <FRadio :value="1">男</FRadio>
                <FRadio :value="2">女</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const inlineItemGap = ref(11);
        const itemWidthType = ref('span');
        const span = ref(12);
        const inlineItemWidth = ref(300);

        return {
            inlineItemGap,
            itemWidthType,
            span,
            inlineItemWidth,

            optionList: [
                {
                    value: 'HuNan',
                    label: '湖南湖南湖南湖南湖南湖南湖南',
                },
                {
                    value: 'HuBei',
                    label: '湖北湖北湖北湖北湖北湖北湖北',
                },
                {
                    value: 'ZheJiang',
                    label: '浙江',
                },
                {
                    value: 'GuangDong',
                    label: '广东',
                },
                {
                    value: 'JiangSu',
                    label: '江苏',
                },
            ],
        };
    },
});
</script>
```

### 对齐方式 [​]()

根据具体目标和制约因素，选择最佳的标签对齐方式。

play

```
<template>
    <FForm labelWidth="150px">
        <FFormItem label="表单布局:">
            <FRadioGroup
                v-model="layout"
                :options="[
                    { label: 'horizontal(默认)', value: 'horizontal' },
                    { label: 'inline', value: 'inline' },
                ]"
            />
        </FFormItem>
        <FFormItem label="标签位置:">
            <FRadioGroup
                v-model="labelPosition"
                :options="[
                    { label: '左对齐(默认)', value: 'left' },
                    { label: '右对齐', value: 'right' },
                    { label: '顶对齐', value: 'top' },
                ]"
            />
        </FFormItem>
        <FFormItem v-if="labelPosition !== 'top'" label="表单项对齐方式:">
            <FRadioGroup
                v-model="align"
                :options="[
                    { label: 'flex-start(默认)', value: 'flex-start' },
                    { label: 'baseline', value: 'baseline' },
                    { label: 'center', value: 'center' },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <div class="tab-content">
        <FForm
            :layout="layout"
            :labelWidth="labelPosition === 'top' ? undefined : 100"
            :labelPosition="labelPosition"
            :span="layout === 'inline' ? 12 : undefined"
            :align="currentAlign"
        >
            <FFormItem label="展示信息">
                <div>这是一段表单项内容信息</div>
            </FFormItem>
            <FFormItem label="姓名">
                <FInput placeholder="请输入姓名" />
            </FFormItem>
            <FFormItem label="手机号码">
                <FInput placeholder="请输入手机号码" />
            </FFormItem>
            <FFormItem label="这是一段长的表单项描述">
                <FInput placeholder="请输入" />
            </FFormItem>
            <FFormItem label="备注">
                <FInput type="textarea" placeholder="请输入备注信息" />
            </FFormItem>
            <FFormItem label="自定义对齐" align="center">
                <FCheckboxGroup>
                    <FCheckbox :value="1 - 5">1 - 5</FCheckbox>
                    <FCheckbox :value="6 - 10">6 - 10</FCheckbox>
                    <FCheckbox :value="11 - 15">11 - 15</FCheckbox>
                    <FCheckbox :value="16 - 20">16 - 20</FCheckbox>
                    <FCheckbox :value="21 - 25">21 - 25</FCheckbox>
                    <FCheckbox :value="26 - 30">26 - 30</FCheckbox>
                    <FCheckbox :value="31 - 35">31 - 35</FCheckbox>
                    <FCheckbox :value="36 - 40">36 - 40</FCheckbox>
                    <FCheckbox :value="41 - 45">41 - 45</FCheckbox>
                    <FCheckbox :value="36 - 40">36 - 40</FCheckbox>
                    <FCheckbox :value="41 - 45">41 - 45</FCheckbox>
                    <FCheckbox :value="46 - 50">46 - 50</FCheckbox>
                    <FCheckbox :value="51 - 55">51 - 55</FCheckbox>
                    <FCheckbox :value="56 - 60">56 - 60</FCheckbox>
                    <FCheckbox :value="61 - 65">61 - 65</FCheckbox>
                </FCheckboxGroup>
            </FFormItem>
        </FForm>
    </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const layout = ref('horizontal');
        const labelPosition = ref('right');
        const align = ref('flex-start');

        const currentAlign = computed(() =>
            labelPosition.value !== 'top' ? align.value : undefined,
        );

        return {
            layout,
            labelPosition,
            align,
            currentAlign,
        };
    },
});
</script>

<style scoped>
.tab-content {
    margin-top: 24px;
}
</style>
```

### 表单禁用 [​]()

当需要设置整个表单不可用的时候,可以设置 disabled 属性。表单包裹的组件均会设置为禁用状态。

play

```
<template>
    <FForm labelWidth="120px">
        <FFormItem label="表单禁用:">
            <FSwitch v-model="formDisabled" />
        </FFormItem>
        <FFormItem label="单项禁用:">
            <FRadioGroup
                v-model="formItemDisabled"
                :cancelable="true"
                :options="[
                    { label: '禁用', value: true },
                    { label: '不禁用', value: false },
                ]"
            />
            （{{ String(formItemDisabled) }}）
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm :labelWidth="80" :disabled="formDisabled">
        <FFormItem label="输入框" :disabled="formItemDisabled">
            <FInput placeholder="请输入" />
        </FFormItem>
        <FFormItem label="文本输入">
            <FInput placeholder="请输入文本内容" type="textarea" />
        </FFormItem>
        <FFormItem label="数字输入">
            <FInputNumber v-model="numVal" :max="100" />
        </FFormItem>
        <FFormItem label="选择器">
            <FSelect clearable placeholder="请单选">
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="单选框">
            <FRadioGroup>
                <FRadio :value="1">男</FRadio>
                <FRadio :value="2">女</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="单选按钮组">
            <FRadioGroup v-model="radioBtnVal">
                <FRadioButton :value="1">选项一</FRadioButton>
                <FRadioButton :value="2">选项二</FRadioButton>
                <FRadioButton :value="3">选项三</FRadioButton>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="复选框">
            <FCheckboxGroup>
                <FCheckbox :value="1 - 10">1-10</FCheckbox>
                <FCheckbox :value="11 - 30">11-30</FCheckbox>
                <FCheckbox :value="31 - 60">31-60</FCheckbox>
            </FCheckboxGroup>
        </FFormItem>
        <FFormItem label="开关">
            <FSwitch v-model="toggleVal" />
        </FFormItem>
        <FFormItem label="时间选择">
            <FTimePicker
                style="width: 200px"
                modelValue="22:22:22"
                placeholder="请输入"
            />
        </FFormItem>
        <FFormItem label="日期选择">
            <FDatePicker type="year" placeholder="选择年份" />
        </FFormItem>
        <FFormItem label="上传">
            <FUpload />
        </FFormItem>
        <FFormItem label="拖拽上传">
            <FUpload>
                <FUploadDragger> 点击或者拖拽文件到此区域 </FUploadDragger>
            </FUpload>
        </FFormItem>
        <FFormItem label="树形选择器">
            <FSelectTree />
        </FFormItem>
        <FFormItem label="级联选择器">
            <FSelectCascader />
        </FFormItem>
        <FFormItem label=" ">
            <FButton type="primary">Submit</FButton>
        </FFormItem>
    </FForm>
</template>

<script setup>
import { ref } from 'vue';

const formDisabled = ref(true);
const formItemDisabled = ref();
const toggleVal = ref();
const numVal = ref(0);
const radioBtnVal = ref(0);

const optionList = [
    {
        value: 'HuNan',
        label: '湖南',
    },
    {
        value: 'HuBei',
        label: '湖北',
    },
    {
        value: 'ZheJiang',
        label: '浙江',
    },
    {
        value: 'GuangDong',
        label: '广东',
    },
    {
        value: 'JiangSu',
        label: '江苏',
    },
];
</script>

<style scoped></style>
```

### 常规表单验证 [​]()

Form 组件提供表单验证的功能，通过 rules 属性传入约定的验证规则，并将 FormItem 的 prop 属性设置为需校验的字段名即可。表单验证目的在于尽可能让用户更早地发现并纠正错误。

play

```
<template>
    <FForm labelWidth="150px">
        <FFormItem label="表单禁用:">
            <FSwitch v-model="formDisabled" />
        </FFormItem>
        <FFormItem label="是否显示校验错误信息:">
            <FSwitch v-model="showMessage" />
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm
        ref="formRef"
        labelWidth="140px"
        labelPosition="right"
        :model="modelForm"
        :rules="rules"
        :disabled="formDisabled"
        :showMessage="showMessage"
    >
        <FFormItem prop="name">
            <template #label><span>姓名(slot)</span></template>
            <FSpace>
                <FInput
                    v-model="modelForm.name.first"
                    placeholder="请输入first name"
                    @input="changeHandler"
                />
                <FInput
                    v-model="modelForm.name.last"
                    placeholder="请输入last name"
                    @input="changeHandler"
                />
            </FSpace>
        </FFormItem>
        <FFormItem
            label="年龄"
            prop="age"
            :rules="[{ required: true, type: 'number', message: '请输入年龄' }]"
        >
            <FInputNumber
                v-model="modelForm.age"
                placeholder="请输入年龄"
            />
        </FFormItem>
        <FFormItem label="地址单选" prop="sregion">
            <FSelect
                v-model="modelForm.sregion"
                clearable
                placeholder="请单选"
                @change="changeHandler"
            >
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="地址多选" prop="mregion">
            <FSelect
                v-model="modelForm.mregion"
                multiple
                placeholder="请多选"
                @change="changeHandler"
            >
                <FOption
                    v-for="(item, index) in optionList"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                />
            </FSelect>
        </FFormItem>
        <FFormItem label="选择时间" prop="time">
            <FTimePicker
                v-model="modelForm.time"
                placeholder="请输入时间"
                format="HH:mm"
            />
        </FFormItem>
        <FFormItem label="选择性别" prop="sex">
            <FRadioGroup v-model="modelForm.sex" @change="changeHandler">
                <FRadio value="1">男</FRadio>
                <FRadio value="2">女</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="级联单选" prop="singleCity">
            <FSelectCascader
                v-model="modelForm.singleCity"
                :data="cascaderOptions"
                @change="changeHandler"
            />
        </FFormItem>
        <FFormItem label="级联多选" prop="multiCity">
            <FSelectCascader
                v-model="modelForm.multiCity"
                :data="cascaderOptions"
                :multiple="true"
                @change="changeHandler"
            />
        </FFormItem>
        <FFormItem
            label="备注 slot"
            labelClass="more-label-container"
            prop="desc"
        >
            <template #label>
                <span class="more-label-text" @click="descClickHandler">
                    <QuestionCircleFilled /> 备注(slot)
                </span>
            </template>
            <FInput
                v-model="modelForm.desc"
                type="textarea"
                placeholder="请输入备注信息，以填入的【姓名】开头"
            />
        </FFormItem>
        <FFormItem label=" ">
            <FSpace>
                <FButton type="primary" @click="submitHandler"> 提交 </FButton>
                <FButton type="primary" @click="clearHandler"> 清除 </FButton>
                <FButton type="primary" @click="resetHandler">重置</FButton>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const formRef = ref(null);
        const formDisabled = ref(false);
        const showMessage = ref(true);

        const modelForm = reactive({
            name: {
                first: '',
                last: '',
            },
            sregion: '',
            mregion: ['HuNan', 'HuBei'],
            time: '',
            sex: '2',
            show: true,
            permission: [],
            desc: '',
            singleCity: '',
            multiCity: [],
        });

        const validateContFun = (rule, value) => {
            return Boolean(value.startsWith(modelForm.name.first));
        };

        const rules = computed(() => {
            return {
                name: {
                    type: 'object',
                    required: true,
                    fields: {
                        first: {
                            type: 'string',
                            required: true,
                            min: 3,
                            max: 8,
                            message: 'first姓名长度在 3 到 8 个字符',
                            trigger: 'change',
                        },
                        last: {
                            type: 'string',
                            required: true,
                            min: 3,
                            max: 8,
                            message: 'last姓名长度在 3 到 8 个字符',
                            trigger: 'change',
                        },
                    },
                },
                sregion: [
                    {
                        required: true,
                        message: '请选择单选',
                        trigger: ['change', 'blur'],
                    },
                ],
                mregion: [
                    {
                        required: true,
                        type: 'array',
                        message: '请选择多选',
                        trigger: ['change', 'blur'],
                    },
                ],
                time: [
                    {
                        required: true,
                        message: '请选择时间',
                        trigger: ['change', 'blur'],
                    },
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别',
                        trigger: 'change',
                    },
                ],
                permission: [
                    {
                        required: true,
                        message: '请选择权限',
                        trigger: 'change',
                        type: 'array',
                    },
                ],
                desc: [
                    {
                        min: 3,
                        max: 8,
                        message: '长度在 3 到 8 个字符',
                        trigger: ['change'],
                    },
                    {
                        validator: validateContFun,
                        message: '请输入以【姓名】开头的备注信息',
                        trigger: ['change'],
                    },
                ],
                singleCity: [
                    {
                        required: true,
                        message: '请选择单选',
                        trigger: ['change', 'blur'],
                    },
                ],
                multiCity: [
                    {
                        required: true,
                        message: '请选择多选',
                        trigger: ['change', 'blur'],
                        type: 'array',
                    },
                ],
            };
        });

        const optionList = [
            {
                value: 'HuNan',
                label: '湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ];
        const cascaderOptions = [
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

        const changeHandler = (value) => {
            console.log('[form.validate] [changeHandler] value:', value);
        };

        const submitHandler = async () => {
            try {
                await formRef.value.validate();
                console.log('[form.validate] [submitHandler] 表单验证成功~');
            } catch (error) {
                console.log(
                    '[form.validate] [submitHandler] 表单验证失败, error:',
                    error,
                );
                FMessage.warn('请检查表单项');
            }
        };
        const clearHandler = () => {
            formRef.value.clearValidate();
        };
        const resetHandler = () => {
            formRef.value.resetFields();
        };

        const descClickHandler = () => {
            FMessage.success({ content: '你点击了备注<slot/>！' });
        };

        return {
            formRef,
            formDisabled,
            showMessage,
            modelForm,
            rules,
            optionList,
            changeHandler,
            submitHandler,
            clearHandler,
            resetHandler,
            descClickHandler,
            cascaderOptions,
        };
    },
};
</script>

<style scoped>
.more-label-text {
    color: #9e9e9e;
    display: flex;
    align-items: center;
}
.more-label-text > :first-child {
    margin-right: 5px;
}
</style>
```

### 复杂表单验证 [​]()

复杂表单校验场景：自定义规则、联动校验、动态组件单个选项/整体校验。

play

```
<template>
    <FForm
        ref="formRef"
        labelWidth="140px"
        labelPosition="right"
        :model="modelForm"
        :rules="rules"
    >
        <div class="complex-validate-item">
            <MoreCircleFilled /> 自定义 trigger、validator 场景:
        </div>
        <FFormItem label="密码" prop="password">
            <FInput
                v-model="modelForm.password"
                type="password"
                showPassword
                placeholder="请输入密码"
                @input="handlePasswordInput"
            />
        </FFormItem>
        <FFormItem ref="rePasswordRef" label="再次输入" prop="rePassword">
            <FInput
                v-model="modelForm.rePassword"
                type="password"
                showPassword
                placeholder="请再次输入密码"
            />
        </FFormItem>

        <div class="complex-validate-item">
            <MoreCircleFilled /> 联动校验场景:
        </div>
        <FFormItem label="类型选择" prop="type">
            <FRadioGroup v-model="modelForm.type">
                <FRadio value="admin">admin</FRadio>
                <FRadio value="edit">edit</FRadio>
                <FRadio value="run">run</FRadio>
            </FRadioGroup>
        </FFormItem>
        <!-- 在 FForm 维度【全局rules】绑定联动规则  -->
        <FFormItem
            v-if="modelForm.type === 'admin'"
            label="admin 详情"
            prop="adminDesc"
        >
            <FInput
                v-model="modelForm.adminDesc"
                placeholder="请输入adminDesc【在 FForm 维度绑定联动规则】"
            />
        </FFormItem>
        <!-- 在 FFormItem 维度绑定联动规则  -->
        <FFormItem
            v-if="modelForm.type === 'edit'"
            label="edit 详情"
            prop="editDesc"
            :rules="
                modelForm.type === 'edit'
                    ? [{ required: true, message: '请输入editDesc' }]
                    : []
            "
        >
            <FInput
                v-model="modelForm.editDesc"
                placeholder="请输入editDesc【在 FFormItem 维度绑定联动规则】"
            />
        </FFormItem>

        <div class="complex-validate-item">
            <MoreCircleFilled /> v-for 任意添加选项场景校验:
        </div>
        <FFormItem
            v-for="(item, index) in modelForm.options"
            :key="index"
            :label="item.label"
            :prop="`options[${index}].value`"
            :rules="[{ required: index % 2 !== 0, message: '请输入选项值' }]"
        >
            <FSpace>
                <FInput
                    v-model="modelForm.options[index].value"
                    placeholder="请输入选项"
                />
                <PlusSquareOutlined @click="addOptionItem" />
            </FSpace>
        </FFormItem>

        <div class="complex-validate-item">
            <MoreCircleFilled /> v-for 动态 ref 校验:
        </div>
        <div
            v-for="(item, index) in modelForm.scenes"
            :key="index"
            style="display: flex; margin-left: 65px"
        >
            <FFormItem
                :prop="`scenes[${index}].name`"
                :label="`场景${index + 1}名称：`"
                labelWidth="80px"
            >
                <FInput
                    v-model="modelForm.scenes[index].name"
                    :maxlength="10"
                    @input="validateScenesCont(index)"
                />
            </FFormItem>
            <FFormItem
                :ref="(el) => (sceneFormItemRefList[index] = el)"
                label="内容："
                labelWidth="80px"
                :prop="`scenes[${index}].content`"
                :rules="
                    modelForm.scenes[index].name
                        ? [{ required: true, message: '' }]
                        : []
                "
            >
                <FInput
                    v-model="modelForm.scenes[index].content"
                    :maxlength="10"
                    :placeholder="`名称${index + 1}填写，内容必填`"
                />
            </FFormItem>
        </div>

        <FFormItem label=" ">
            <FSpace>
                <FButton type="primary" @click="submitHandler"> 提交 </FButton>
                <FButton type="primary" @click="clearHandler"> 清除 </FButton>
                <FButton type="primary" @click="resetHandler">重置</FButton>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup() {
        const formRef = ref(null);
        const rePasswordRef = ref(null);
        const modelForm = reactive({
            password: '',
            rePassword: '',
            type: 'admin',
            typeDesc: '',
            options: [{ label: '选项1', value: '' }],
            scenes: [
                { name: '', content: '' },
                { name: '', content: '' },
            ],
        });
        const sceneFormItemRefList = ref([]);

        const validatePasswordStartWith = (rule, value) => {
            return Boolean(
                modelForm.password
                && modelForm.password.startsWith(value)
                && modelForm.password.length >= value.length,
            );
        };
        const rules = computed(() => {
            return {
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: ['blur', 'change'],
                    },
                ],
                rePassword: [
                    {
                        required: true,
                        message: '请再次输入密码',
                        trigger: ['change', 'blur'],
                    },
                    {
                        validator: validatePasswordStartWith,
                        message: '再次输入密码时，两次密码输入不一致',
                        trigger: ['change'],
                    },
                    {
                        validator: (rule, value) =>
                            value === modelForm.password,
                        message: '输入密码时，两次密码输入不一致',
                        trigger: 'password-input',
                    },
                ],
                adminDesc: [
                    modelForm.type === 'admin' && {
                        required: true,
                        message: '请输入adminDesc',
                        trigger: ['change', 'blur'],
                    },
                ],
            };
        });

        // 调用自定义的 password-input trigger
        const handlePasswordInput = () => {
            if (modelForm.rePassword) {
                rePasswordRef.value.validate('password-input');
            }
        };

        const addOptionItem = () => {
            modelForm.options.push({
                label: `选项${modelForm.options.length + 1}`,
                value: '',
            });
        };

        const validateScenesCont = (index) => {
            // 通过 FFormItem 的动态 ref 调用 validate 校验
            modelForm?.scenes[index]?.name
                ? sceneFormItemRefList.value[index].validate()
                : sceneFormItemRefList.value[index].clearValidate();
        };

        const submitHandler = async () => {
            // 通过 FForm 的 validate 直接校验
            try {
                await formRef.value.validate();
                console.log(
                    '[form.complexValidate] [submitHandler] 表单验证成功',
                );
            } catch (error) {
                console.log(
                    '[form.complexValidate] [submitHandler] 表单验证失败, error:',
                    error,
                );
            }
        };
        const clearHandler = () => {
            formRef.value.clearValidate();
        };
        const resetHandler = () => {
            formRef.value.resetFields();
        };

        return {
            formRef,
            rePasswordRef,
            modelForm,
            rules,
            sceneFormItemRefList,

            handlePasswordInput,
            validateScenesCont,
            addOptionItem,
            submitHandler,
            clearHandler,
            resetHandler,
        };
    },
};
</script>

<style scoped>
.complex-validate-item {
    margin: 10px 0 20px 60px;
    color: rgb(136 136 136);
    display: flex;
    align-items: center;
}
.complex-validate-item > :first-child {
    margin-right: 5px;
}
</style>
```

### 异步表单验证 [​]()

play

```
<template>
    <FForm
        ref="formRef"
        labelWidth="140px"
        labelPosition="right"
        :model="modelForm"
        :rules="rules"
    >
        <FFormItem prop="name" label="实时校验">
            <FInput
                v-model="modelForm.name"
                placeholder="请输入姓名"
                :maxlength="30"
                showWordLimit
            />
            <LoadingOutlined
                v-show="modelForm.nameLoading"
                style="margin-left: 10px"
            />
        </FFormItem>
        <FFormItem prop="phone" label="防抖校验">
            <FInput
                v-model="modelForm.phone"
                placeholder="请输入手机号"
                :maxlength="11"
                showWordLimit
            />
            <LoadingOutlined
                v-show="modelForm.phoneLoading"
                style="margin-left: 10px"
            />
        </FFormItem>
        <FFormItem label=" ">
            <FSpace>
                <FButton
                    type="primary"
                    :loading="modelForm.submitLoading"
                    @click="submitHandler"
                >
                    {{ modelForm.submitText }}
                </FButton>
                <FButton type="primary" @click="clearHandler"> 清除 </FButton>
                <FButton type="primary" @click="resetHandler">重置</FButton>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { debounce } from 'lodash-es';
import { FMessage } from '@fesjs/fes-design';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
    setup() {
        const formRef = ref(null);

        const modelForm = reactive({
            submitLoading: false,
            submitText: '提交',
            name: '',
            nameLoading: false,
            phone: '',
            phoneLoading: false,
        });

        const debounceValidator = debounce(async (value, resolve, reject) => {
            console.log(
                '[form.asyncValidator] [debounceValidator] phone:',
                value,
            );
            modelForm.phoneLoading = true;
            await sleep(2000);
            if (value.length < 11) {
                reject('异步校验手机号不完整');
            } else {
                resolve();
            }
            modelForm.phoneLoading = false;
        }, 300);

        const rules = computed(() => {
            return {
                name: [
                    {
                        required: true,
                        message: '姓名不能为空',
                    },
                    {
                        asyncValidator: (rule, value) => {
                            return new Promise(async (resolve, reject) => {
                                if (!value) {
                                    return reject('异步校验姓名不能为空');
                                }
                                console.log(
                                    '[form.asyncValidator] [asyncValidator] name:',
                                    value,
                                );

                                modelForm.nameLoading = true;
                                await sleep(3000);
                                modelForm.nameLoading = false;

                                if (value.length < 3) {
                                    return reject('异步校验姓名字符个数不足');
                                } else {
                                    return resolve();
                                }
                            });
                        },
                        message: '姓名至少三个字符长度',
                        trigger: ['change'],
                    },
                ],
                phone: [
                    {
                        required: true,
                        message: '手机号不能为空',
                    },
                    {
                        asyncValidator: (rule, value) => {
                            return new Promise(async (resolve, reject) => {
                                if (!value) {
                                    return reject('异步校验手机号不能为空');
                                }
                                debounceValidator(value, resolve, reject);
                            });
                        },
                        message: '手机号不完整',
                        trigger: ['change'],
                    },
                ],
            };
        });

        const submitHandler = async () => {
            try {
                modelForm.submitLoading = true;
                modelForm.submitText = '校验中';
                await formRef.value.validate();
                console.log(
                    '[form.asyncValidator] [submitHandler] 表单验证成功',
                );
            } catch (error) {
                console.log(
                    '[form.asyncValidator] [submitHandler] 表单验证失败, error:',
                    error,
                );
                FMessage.warn('请检查表单项');
            } finally {
                modelForm.submitLoading = false;
                modelForm.submitText = '提交';
            }
        };
        const clearHandler = () => {
            formRef.value.clearValidate();
        };
        const resetHandler = () => {
            formRef.value.resetFields();
        };

        return {
            formRef,
            modelForm,
            rules,
            submitHandler,
            clearHandler,
            resetHandler,
        };
    },
};
</script>

<style scoped></style>
```

### 嵌套验证 [​]()

play

```
<template>
    <FForm
        ref="formRef"
        labelWidth="140px"
        labelPosition="right"
        :model="modelForm"
        :rules="rules"
    >
        <FFormItem
            prop="name"
            label="表单项嵌套:"
            :showMessage="false"
            style="margin-bottom: 0"
        >
            <FSpace>
                <FFormItem prop="name.first" :rules="rules.name.fields.first">
                    <FInput
                        v-model="modelForm.name.first"
                        placeholder="请输入FirstName"
                    />
                </FFormItem>
                <FFormItem prop="name.last" :rules="rules.name.fields.last">
                    <FInput
                        v-model="modelForm.name.last"
                        placeholder="请输入LastName"
                    />
                </FFormItem>
            </FSpace>
        </FFormItem>
        <FFormItem prop="userList" label="子表单嵌套:">
            <FSpace vertical style="width: 100%">
                <FButton @click="() => handleAddUser()"> 添加 </FButton>

                <FCard v-for="(item, index) in modelForm.userList" :key="index">
                    <FForm
                        :ref="(el) => (userFormItemRefList[index] = el)"
                        :model="item"
                        :rules="subFormRules"
                    >
                        <FFormItem prop="name" label="姓名:">
                            <FSpace>
                                <FInput
                                    v-model="item.name.first"
                                    placeholder="请输入FirstName"
                                />
                                <FInput
                                    v-model="item.name.last"
                                    placeholder="请输入LastName"
                                />
                            </FSpace>
                        </FFormItem>
                        <FFormItem prop="desc" label="备注:">
                            <FInput
                                v-model="item.desc"
                                placeholder="请输入备注"
                            />
                        </FFormItem>
                    </FForm>
                </FCard>
            </FSpace>
        </FFormItem>

        <FFormItem label=" ">
            <FSpace>
                <FButton type="primary" @click="submitHandler"> 提交 </FButton>
                <FButton type="primary" @click="clearHandler"> 清除 </FButton>
                <FButton type="primary" @click="resetHandler">重置</FButton>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const formRef = ref(null);
        const userFormItemRefList = ref([]);

        const modelForm = reactive({
            name: {
                first: '',
                last: '',
            },
            userList: [],
        });

        const rules = computed(() => {
            return {
                name: {
                    type: 'object',
                    required: true,
                    fields: {
                        first: [
                            {
                                type: 'string',
                                required: true,
                                min: 3,
                                max: 8,
                                message: 'first姓名长度在 3 到 8 个字符',
                                trigger: 'change',
                            },
                        ],
                        last: [
                            {
                                type: 'string',
                                required: true,
                                min: 3,
                                max: 8,
                                message: 'last姓名长度在 3 到 8 个字符',
                                trigger: 'change',
                            },
                        ],
                    },
                },
                userList: {
                    type: 'array',
                    required: true,
                    message: '用户列表不能为空',
                    trigger: 'change',
                },
            };
        });

        const subFormRules = computed(() => {
            return {
                name: {
                    type: 'object',
                    required: true,
                    fields: {
                        first: [
                            {
                                type: 'string',
                                required: true,
                                min: 3,
                                max: 8,
                                message: 'first姓名长度在 3 到 8 个字符',
                                trigger: 'change',
                            },
                        ],
                        last: [
                            {
                                type: 'string',
                                required: true,
                                min: 3,
                                max: 8,
                                message: 'last姓名长度在 3 到 8 个字符',
                                trigger: 'change',
                            },
                        ],
                    },
                },
            };
        });

        const handleAddUser = async () => {
            modelForm.userList.push({
                name: {
                    first: '',
                    last: '',
                },
                desc: '',
            });
            // 触发单个表单项的校验
            await formRef.value.validate(['userList']);
        };

        const submitHandler = async () => {
            try {
                await formRef.value.validate();

                for (const userFormItemRef of userFormItemRefList.value) {
                    await userFormItemRef?.validate();
                }

                console.log(
                    '[form.subFormValidator] [submitHandler] 表单验证成功 || modelForm:',
                    modelForm,
                );
            } catch (error) {
                console.log(
                    '[form.subFormValidator] [submitHandler] 表单验证失败, error:',
                    error,
                );
                FMessage.warn('请检查表单项');
            }
        };
        const clearHandler = async () => {
            formRef.value.clearValidate();
            for (const userFormItemRef of userFormItemRefList.value) {
                await userFormItemRef?.clearValidate();
            }
        };
        const resetHandler = async () => {
            formRef.value.resetFields();
            for (const userFormItemRef of userFormItemRefList.value) {
                await userFormItemRef?.resetFields();
            }
        };

        return {
            formRef,
            userFormItemRefList,
            modelForm,
            rules,
            submitHandler,
            clearHandler,
            resetHandler,
            subFormRules,
            handleAddUser,
        };
    },
};
</script>

<style scoped></style>
```

### 变单项赋值验证 [​]()

play

```
<template>
    <FForm
        ref="formRef"
        labelWidth="140px"
        labelPosition="right"
        :model="modelForm"
        :showMessage="true"
        :rules="rules"
    >
        <FFormItem prop="name" label="姓名">
            <FInput
                v-model="modelForm.name"
                placeholder="请输入姓名"
            />
        </FFormItem>
        <FFormItem
            label="备注 slot"
            labelClass="more-label-container"
            prop="desc"
            :value="modelForm.desc"
        >
            <template #label>
                <span class="more-label-text" @click="descClickHandler">
                    <QuestionCircleFilled /> 备注(slot)
                </span>
            </template>
            <FInput
                v-model="modelForm.desc"
                type="textarea"
                placeholder="请输入备注信息"
                @input="changeHandler"
                @change="changeHandler"
            />
        </FFormItem>
        <FFormItem label=" ">
            <FSpace>
                <FButton type="primary" @click="submitHandler"> 提交 </FButton>
                <FButton type="primary" @click="clearHandler"> 清除 </FButton>
                <FButton type="primary" @click="resetHandler">重置</FButton>
                <FButton type="primary" @click="clearNameHandler"> 清除姓名 </FButton>
                <FButton type="primary" @click="resetNameHandler">重置姓名</FButton>
            </FSpace>
        </FFormItem>
    </FForm>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

const formRef = ref(null);

const modelForm = reactive({
    name: '',
    desc: '',
});

const validateContFun = (rule, value) => {
    console.log('[form.validate] [validateContFun] value:', value);
    return Boolean(value.length >= 3 && value.length <= 8);
};
const rules = computed(() => {
    return {
        name: [{
            required: true,
            message: '请输入姓名',
            trigger: ['change'],
        }],
        desc: [
            {
                required: true,
                message: '请输入备注',
                trigger: ['change'],
            },
            {
                validator: validateContFun,
                message: '长度在 3 到 8 个字符',
                trigger: ['change'],
            },
        ],
    };
});

const changeHandler = (value) => {
    console.log('[form.validate] [changeHandler] value:', value);
};

const submitHandler = async () => {
    try {
        await formRef.value.validate();
        console.log('[form.validate] [submitHandler] 表单验证成功~');
    } catch (error) {
        console.log(
            '[form.validate] [submitHandler] 表单验证失败, error:',
            error,
        );
        FMessage.warn('请检查表单项');
    }
};
const clearHandler = () => {
    formRef.value.clearValidate();
};
const resetHandler = () => {
    formRef.value.resetFields();
};

const clearNameHandler = () => {
    formRef.value.clearValidate(['name']);
};
const resetNameHandler = () => {
    formRef.value.resetFields(['name']);
};
</script>

<style scoped>
.more-label-text {
    color: #9e9e9e;
    display: flex;
    align-items: center;
}
.more-label-text > :first-child {
    margin-right: 5px;
}
</style>
```

## Form Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|model|表单数对象|object|\-|
|rules|表单验证规则，可查看`Form-Item Rule Type`|object|\-|
|layout|表单布局，可选值为`horizontal`、`inline`|string|`horizontal`|
|inlineItemWidth|仅在 `inline` 表单中有效。统一定义 FormItem 固定宽度|string、number|\-|
|inlineItemGap|仅在 `inline` 表单中有效。统一定义整行 FormItem 的间距|string、number|11px|
|span|仅在 `inline` 表单中有效。统一定义 FormItem 占据列数，共 24 列|number|6|
|labelPosition|表单域标签的位置，可选值为`left`、`top`、`right`|string|`left`|
|labelWidth|表单域标签的宽度。作为 Form 直接子元素的 form-item 会继承该值。|string(100px)、number(100)|\-|
|labelClass|表单域标签自定义 class|string|\-|
|showMessage|是否显示校验错误信息|boolean|`true`|
|disabled|表单是否可用|boolean|`false`|
|align|仅在 `labelPosition` 为 `left` 或 `right` 时有效。垂直排列方式，可选值为 `flex-start`、`baseline`、`center`|string|`flex-start`|

## Form Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|validate|对整体表单、部分表单（传入`fieldProps`数组）进行校验，返回一个 promise。校验失败时，返回 `valid`、`values`、`errorFields` 信息，其中 `valid` 表示校验结果，`values` 表示包含未校验通过的字段，`errorFields` 表示错误信息|`(fieldProps?: []) => Promise()`|
|clearValidate|移除表单项的校验结果|`(fieldProps?: []) => void`|
|resetFields|对整个表单进行重置，将所有字段值重置为初始值并移除校验结果|`(fieldProps?: []) => void`|

## Form Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|submit|表单原生提交事件触发|(event) => void|

## Form-Item Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|prop|表单域 `model` 字段，在使用 `validate`、`resetFields` 方法的情况下，该属性是必填的|string|\-|
|value|表单项的值。如果存在则优先取该属性|string|\-|
|rules|表单项验证规则，可查看`Form-Item Rule Type`|Array|\-|
|span|仅在 `inline` 表单中有效。自定义 FormItem 占据列数，共 24 列|number|\-|
|label|标签文本|string|\-|
|labelWidth|表单项标签的宽度|string(100px)、number(100)|\-|
|labelClass|表单项标签自定义 class|string|\-|
|showMessage|是否显示校验错误信息|boolean|`true`|
|align|仅在 `labelPosition` 为 `left` 或 `right` 时有效。垂直排列方式，可选值为 `flex-start`、`baseline`、`center`|string|`flex-start`|

## Form-Item Slots [​]()

|名称|说明|
|---|---|
|label|自定义表单项标签文本|

## Form-Item Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|validate|验证表单项。如果设定 trigger，该表项指定 trigger 规则会被使用；未设定 trigger，该表项所规则会被使用。shouldRuleBeApplied 可以用来进一步过滤已经经过 trigger 筛选的规则|`(trigger) => Promise()`|

## Form-Item Rule Type [​]()

以下并不是规则的全部用法，如果你想了解更多的用法，请参考 [async-validator](https://github.com/yiminghe/async-validator) 。

|属性|说明|类型|默认值|
|---|---|---|---|
|trigger|校验触发的时机|string、Array|\-|
|required|是否必填|boolean|false|
|message|校验失败时展示的信息|string|\-|
|type|内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) 【注意: 非`string`类型都需要指明 type】|string|`string`|
|min|最小长度|number|\-|
|max|最大长度|number|\-|
|validator|自定义校验【注意，[callback 必须被调用】](https://github.com/ant-design/ant-design/issues/5155)|function(rule, value, callback)|\-|

阅读原文：http://fe.weoa.com/fes-design/zh/components/form.html