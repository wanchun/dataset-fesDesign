import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '日期选择',
    componentName: 'FDatePicker',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDatePicker',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            title: '选中时间',
            propType: 'string',
        },
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                value: [
                    'date',
                    'datetime',
                    'datemultiple',
                    'daterange',
                    'datetimerange',
                    'datemonthrange',
                    'year',
                    'month',
                    'quarter',
                ],
            },
            defaultValue: 'date',
        },
        {
            name: 'disabledDate',
            title: '禁止日期',
            propType: 'func',
        },
        {
            name: 'disabledTime',
            title: '禁止时间',
            propType: 'func',
        },
        {
            name: 'maxDate',
            title: '最大可选日期',
            propType: 'date',
        },
        {
            name: 'minDate',
            title: '最小可选日期',
            propType: 'date',
        },
        {
            name: 'maxRange',
            title: '可选区间',
            propType: 'string',
        },
        {
            name: 'defaultTime',
            title: '日期默认时间',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    {
                        type: 'arrayOf',
                        value: 'string',
                    },
                ],
            },
        },
        {
            name: 'popperClass',
            title: '弹窗样式',
            propType: 'string',
        },
        {
            name: 'appendToContainer',
            title: '弹窗是是否挂载到容器',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'getContainer',
            title: '配置挂载容器',
            propType: 'func',
        },
        {
            name: 'clearable',
            title: '是否展示清除图标',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'placeholder',
            title: '未选择提示',
            propType: 'string',
        },
        {
            name: 'format',
            title: '时间格式',
            propType: 'string',
        },
        {
            name: 'hourStep',
            title: '小时选项间隔',
            propType: 'number',
            defaultValue: 1,
        },
        {
            name: 'minuteStep',
            title: '分钟选项间隔',
            propType: 'number',
            defaultValue: 1,
        },
        {
            name: 'secondStep',
            title: '秒钟选项间隔',
            propType: 'number',
            defaultValue: 1,
        },
        {
            name: 'control',
            title: '是否显示控制区域',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'suffixIcon',
            title: '图标',
            propType: 'node',
        },
    ],
    configure: {
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'number | number[]',
                        },
                    ],
                },
                {
                    name: 'onClear',
                    params: [],
                },
                {
                    name: 'onBlur',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onFocus',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
            ],
        },
        props: [
            { name: 'v-model', title: '绑定变量', setter: 'VariableSetter' },
            {
                name: 'type',
                title: '类型',
                defaultValue: 'date',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { label: '日期', value: 'date' },
                            { label: '日期时间', value: 'datetime' },
                            { label: '日期多选', value: 'datemultiple' },
                            { label: '日期范围', value: 'daterange' },
                            { label: '日期时间范围', value: 'datetimerange' },
                            { label: '年月范围', value: 'datemonthrange' },
                            { label: '年', value: 'year' },
                            { label: '月', value: 'month' },
                            { label: '季度', value: 'quarter' },
                        ],
                    },
                    defaultValue: 'date',
                },
            },
            {
                name: 'disabledDate',
                title: '禁止日期',
                description: '禁止日期函数，参数为对应的时间 Date，执行结果为 true 则禁止',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: 'function(date) {\n\treturn true;\n}' },
                    isRequired: false,
                },
            },
            {
                name: 'disabledTime',
                title: '禁止时间',
                description:
                    '禁止时间函数，参数为对应的时间 Date，分别返回disableHours, disabledMinutes, disabledSeconds的判断函数',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder:
                            'function(date) {\n\t return {\n\t\tdisabledHours: () => true,\n\t\tdisabledMinutes: () => true,\n\t\tdisabledSeconds: () => true\n\t}\n}',
                    },
                    isRequired: false,
                },
            },
            {
                name: 'maxDate',
                title: '最大日期',
                description: '最大可选择时间',
                setter: { componentName: 'DateSetter', isRequired: false },
            },
            {
                name: 'minDate',
                title: '最小日期',
                description: '最小可选择时间',
                setter: { componentName: 'DateSetter', isRequired: false },
            },
            {
                name: 'maxRange',
                title: '可选区间',
                description: '最大可选区间，格式为 /\\d+[D]/, 如30D表示最多可选30天',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'defaultTime',
                description: '选中日期后默认具体时刻，非时间范围 string；时间范围 string[]，格式: 12:00:00',
                title: '默认时间',
                setter: {
                    componentName: 'MixedSetter',
                    props: {
                        setters: [
                            { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                            {
                                componentName: 'ArraySetter',
                                props: {
                                    itemSetter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                                },
                                defaultValue: [],
                            },
                        ],
                    },
                },
            },
            {
                name: 'shortcuts',
                description: `设置快捷选项，比如\n{ 今天: Date.now(), 昨天: () => Date.now() - 24 * 60 * 60 * 1000 }\n 日期范围形式：\n{ 今天: [Date.now(), Date.now()]}`,
                title: '快捷选项',
                setter: 'VariableSetter',
            },
            {
                name: 'popperClass',
                title: '弹窗样式',
                setter: {
                    componentName: 'StringSetter',
                    props: { placeholder: 'my-class' },
                    isRequired: false,
                    defaultValue: '',
                },
            },
            {
                name: 'appendToContainer',
                title: '弹窗可挂载',
                description: '弹窗内容是否添加到指定的 DOM 元素',
                defaultValue: true,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'getContainer',
                title: '挂载容器',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '() => document.body' },
                    isRequired: false,
                },
            },
            {
                name: 'clearable',
                title: '可清除',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'disabled',
                title: '是否禁用',
                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'placeholder',
                title: '未选择提示',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
            },
            {
                name: 'format',
                title: '时间格式',
                description:
                    'y-年，M-月份, d-日，H-小时，m-分，s-秒，常用格式：\nyyyy-MM-dd \nyyyy-MM-dd HH:mm:ss \nyyyy/MM/dd HH:mm:ss \nyyyy年MM月dd日 HH时mm分ss秒',
                setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    defaultValue: '',
                    props: { placeholder: 'yyyy-MM-dd HH:mm:ss' },
                },
            },
            {
                name: 'hourStep',
                title: '小时间隔',
                defaultValue: 1,
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'minuteStep',
                title: '分钟间隔',
                defaultValue: 1,
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'secondStep',
                title: '秒钟间隔',
                defaultValue: 1,
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'control',
                title: '显示控制',
                defaultValue: false,
                description: '是否显示确认按钮，在多选强制开启，其他情况默认为关闭',
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'suffixIcon',
                title: '图标',
                setter: {
                    componentName: 'SlotSetter',
                    props: { mode: 'node' },
                    isRequired: false,
                    defaultValue: { type: 'JSSlot', value: [] },
                },
            },
        ],
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
