# 调整主题 [​]()

`fes-design` 使用 `FConfigProvider` 调整主题。

## 暗色主题 [​]()

支持路上～

## 修改主题变量 [​]()

vue

```
<script setup>
import { FConfigProvider } from '@fesjs/fes-design';

const themeOverrides = {
    common: {
        primaryColor: '#5384ff',

        successColor: '#00cb91',
        dangerColor: '#ff4d4f',
        warningColor: '#f29360',
        tipColor: '#5384ff',

        white: '#fff',
        black: '#000',

        bodyBgColor: '#fff',

        fontColorBase: '#0f1222',
        fontSizeBase: '14px',

        borderRadiusBase: '4px',
        borderRadiusSm: '2px',
        borderWidthBase: '1px',
        borderStyleBase: 'solid',

        borderColorBase: '#cfd0d3',

        shadowColor: 'rgba(18, 18, 18, 0.1)',
        shadowColorSm: 'rgba(18, 18, 18, 0.2)',
        shadowRadius: '12px',
        shadowRadiusSm: '4px',

        maskColor: 'rgba(18, 18, 18, 0.45)',
    }
}
</script>

<template>
    <FConfigProvider :themeOverrides="themeOverrides">
        <my-app />
    </FConfigProvider>
</template>
```

阅读原文：<http://fe.weoa.com/fes-design/zh/guide/theme.html>


js

```
import { FConfigProvider } from '@fesjs/fes-design';

app.use(FConfigProvider);
```

## 组件使用 [​]()

vue

```
<template>
    <f-config-provider :getContainer="getContainer">
        <app />
    </f-config-provider>
</template>

<script setup>
const getContainer = () => {
    return document.body;
};
</script>
```

### 切换语言 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="语言切换：">
            <FRadioGroup v-model="lang">
                <FRadio key="cn" :value="zhCN.name">
                    {{ zhCN.desc }}(默认)
                </FRadio>
                <FRadio key="en" :value="enUS.name">{{ enUS.desc }}</FRadio>
                <FRadio key="zr" :value="zr.name">{{ zr.desc }}</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FConfigProvider :locale="locale">
        <FSpace vertical>
            <FPagination
                :total-count="1000"
                show-size-changer
                show-quick-jumper
                show-total
            />
            <FTimePicker />
            <FSpace>
                <FDatePicker :control="true" />
                <FDatePicker type="month" :control="true" />
                <FDatePicker type="year" :control="true" />
                <FDatePicker type="quarter" :control="true" />
                <FDatePicker type="datetime" :control="true" />
                <FDatePicker type="daterange" :control="true" />
                <FDatePicker type="datetimerange" :control="true" />
            </FSpace>

            <FUpload
                action="https://run.mocky.io/v3/2d9d9844-4a46-4145-8f57-07e13768f565"
            />
        </FSpace>
    </FConfigProvider>
</template>

<script setup>
import { ref, watch } from 'vue';
import { enUS, zhCN, zr } from '@fesjs/fes-design';

const lang = ref(zhCN.name);
const locale = ref(zhCN);

watch(lang, () => {
    if (!lang.value) {
        return;
    }
    if (lang.value === zhCN.name) {
        locale.value = zhCN;
    } else if (lang.value === zr.name) {
        locale.value = zr;
    } else {
        locale.value = enUS;
    }
});
</script>

<style scoped></style>
```

### 自定义语言 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="语言切换：">
            <FRadioGroup v-model="lang">
                <FRadio key="cn" :value="zhCN.name">{{ zhCN.desc }}</FRadio>
                <FRadio key="en" :value="enUS.name">{{ enUS.desc }}</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FConfigProvider :locale="locale">
        <FSpace vertical>
            <FDatePicker type="month" :control="true" />
            <FDatePicker type="datetimerange" :control="true" />
        </FSpace>
    </FConfigProvider>
</template>

<script>
import { computed, defineComponent, ref, watch } from 'vue';
import { mergeWith } from 'lodash-es';
import { enUS, zhCN } from '@fesjs/fes-design';

export default defineComponent({
    setup() {
        const lang = ref(zhCN.name);
        const locale = ref(zhCN);

        const CustomLang = computed(() => {
            return {
                [zhCN.name]: {
                    datePicker: {
                        selectStartDateTime: '请选择起始时间',
                        selectEndDateTime: '请选择结束时间',
                    },
                },
                [enUS.name]: {
                    datePicker: {
                        selectStartDateTime: 'Please Select Start Time',
                        selectEndDateTime: 'Please Select End Time',
                    },
                },
            };
        });

        watch(
            lang,
            () => {
                if (!lang.value) {
                    return;
                }
                if (lang.value === zhCN.name) {
                    locale.value = mergeWith(
                        {},
                        zhCN,
                        CustomLang.value[zhCN.name],
                    );
                } else {
                    locale.value = mergeWith(
                        {},
                        enUS,
                        CustomLang.value[enUS.name],
                    );
                }
            },
            {
                immediate: true,
            },
        );

        return {
            enUS,
            zhCN,
            lang,
            locale,
        };
    },
});
</script>

<style scoped></style>
```

## Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|getContainer|指定弹窗挂载的 DOM 节点|() => HTMLElement|`() => document.body`|
|locale|语言包配置，已支持语言包可到[这里](https://github.com/WeBankFinTech/fes-design/tree/main/components/locales)查看|object|中文|
|themeOverrides|主题覆盖的 css 选项|object|\-|

阅读原文：<http://fe.weoa.com/fes-design/zh/components/configProvider.html>
