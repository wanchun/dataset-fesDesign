import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '时间选择',
    componentName: 'FTimePicker',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTimePicker',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            title: '选中时间',
            propType: 'string',
        },
        {
            name: 'v-model:open',
            title: '显示面板',
            propType: 'bool',
        },
        {
            name: 'appendToContainer',
            title: '弹窗是是否挂载到容器',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'getContainer',
            title: '配置挂载容器',
            propType: 'func',
        },
        {
            name: 'clearable',
            title: '可清除',
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
            title: '提示词',
            propType: 'string',
        },
        {
            name: 'format',
            title: '时间格式',
            propType: 'string',
            defaultValue: 'HH:mm:ss',
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
            name: 'disabledHours',
            title: '禁止选择部分小时选项',
            propType: 'func',
        },
        {
            name: 'disabledMinutes',
            title: '禁止选择部分分钟选项',
            propType: 'func',
        },
        {
            name: 'disabledSeconds',
            title: '禁止选择部分秒钟选项',
            propType: 'func',
        },
        {
            name: 'control',
            title: '是否显示控制区域',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'addon',
            title: '自定义底部',
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
                            type: 'string',
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
                {
                    name: 'onBlur',
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
            { name: 'v-model:open', title: '显示面板', setter: 'VariableSetter' },
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
                description: 'H-小时，m-分，s-秒，常用格式：\nHH:mm:ss \n HH时mm分ss秒',
                defaultValue: 'HH:mm:ss',
                setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
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
                name: 'disabledHours',
                title: '禁止小时',
                description: '禁止选择部分小时选项函数，参数是小时，返回true时禁止',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(hour) => true' },
                    isRequired: false,
                },
            },
            {
                name: 'disabledMinutes',
                title: '禁止分钟',
                description: '禁止选择部分分钟选项函数，参数是小时、分钟，返回true时禁止',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(hour, minute) => true' },
                    isRequired: false,
                },
            },
            {
                name: 'disabledSeconds',
                title: '禁止秒',
                description: '禁止选择部分秒钟选项函数，参数是小时、分钟、秒，返回true时禁止',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(hour, minute, second) => true' },
                    isRequired: false,
                },
            },
            {
                name: 'control',
                title: '显示控制',
                defaultValue: true,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'addon',
                title: '自定义底部',
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
