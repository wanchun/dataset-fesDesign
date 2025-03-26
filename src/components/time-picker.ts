import type { IComponentMetadata } from '../type';

export const timePickerMeta: IComponentMetadata = {
    title: '时间选择',
    componentName: 'FTimePicker',
    description: '时间选择器组件，用于在用户界面中选择具体的时间。支持多种时间格式、自定义时间间隔、禁用特定时间选项等功能，适用于表单录入、时间筛选等场景。',
    scenarios: [
        '表单录入：在表单中使用时间选择器，允许用户选择具体的时间，确保时间格式统一。',
        '时间筛选：在数据筛选场景中使用时间选择器，允许用户选择时间范围，提高数据查询效率。',
        '日程安排：在日程管理系统中使用时间选择器，帮助用户安排具体的时间点，提升用户体验。',
        '会议预定：在会议预定系统中使用时间选择器，允许用户选择会议开始和结束时间，确保会议时间准确。',
        '数据报表：在数据报表系统中使用时间选择器，允许用户选择特定时间范围的数据，提升数据分析效率。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'clearable',
            effect: '禁用状态下无法清除时间',
            notes: [
                '当时间选择器处于禁用状态时，清除功能将不可用',
                '确保在禁用状态下用户无法修改或清除时间',
            ],
        },
        {
            source: 'format',
            target: 'placeholder',
            effect: '时间格式影响提示词显示',
            notes: [
                '时间格式的变化会影响提示词的显示内容',
                '确保提示词与时间格式保持一致',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '选中时间',
            propType: 'string',
            description: '绑定选中的时间值，支持双向绑定',
        },
        {
            name: 'v-model:open',
            title: '显示面板',
            propType: 'bool',
            description: '控制时间选择面板的显示与隐藏',
        },
        {
            name: 'appendToContainer',
            title: '弹窗是否挂载到容器',
            propType: 'bool',
            description: '是否将弹窗内容挂载到指定的DOM元素',
            defaultValue: false,
        },
        {
            name: 'getContainer',
            title: '配置挂载容器',
            propType: 'func',
            description: '自定义弹窗挂载的DOM元素',
        },
        {
            name: 'clearable',
            title: '可清除',
            propType: 'bool',
            description: '是否显示清除按钮，允许用户清除已选时间',
            defaultValue: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            description: '是否禁用时间选择器',
            defaultValue: false,
        },
        {
            name: 'placeholder',
            title: '提示词',
            propType: 'string',
            description: '未选择时间时的提示文本',
        },
        {
            name: 'format',
            title: '时间格式',
            propType: 'string',
            description: '时间的显示格式，支持多种时间格式',
            defaultValue: 'HH:mm:ss',
        },
        {
            name: 'hourStep',
            title: '小时选项间隔',
            propType: 'number',
            description: '小时选项之间的间隔',
            defaultValue: 1,
        },
        {
            name: 'minuteStep',
            title: '分钟选项间隔',
            propType: 'number',
            description: '分钟选项之间的间隔',
            defaultValue: 1,
        },
        {
            name: 'secondStep',
            title: '秒钟选项间隔',
            propType: 'number',
            description: '秒钟选项之间的间隔',
            defaultValue: 1,
        },
        {
            name: 'disabledHours',
            title: '禁止选择部分小时选项',
            propType: 'func',
            description: '禁止选择部分小时选项的函数',
        },
        {
            name: 'disabledMinutes',
            title: '禁止选择部分分钟选项',
            propType: 'func',
            description: '禁止选择部分分钟选项的函数',
        },
        {
            name: 'disabledSeconds',
            title: '禁止选择部分秒钟选项',
            propType: 'func',
            description: '禁止选择部分秒钟选项的函数',
        },
        {
            name: 'control',
            title: '是否显示控制区域',
            propType: 'bool',
            description: '是否显示时间选择器的控制区域',
            defaultValue: true,
        },
        {
            name: 'addon',
            title: '自定义底部',
            propType: 'node',
            description: '自定义时间选择器底部的内容',
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '时间值发生变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string',
                    description: '当前选中的时间值',
                },
            ],
        },
        {
            name: 'onFocus',
            description: '时间选择器获得焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '焦点事件对象',
                },
            ],
        },
        {
            name: 'onBlur',
            description: '时间选择器失去焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '焦点事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'addon',
            description: '自定义时间选择器底部的内容',
            required: false,
        },
    ],
};
