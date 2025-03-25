import type { IComponentMetadata } from '../type';

export const tooltipMeta: IComponentMetadata = {
    title: '文字提示',
    componentName: 'FTooltip',
    description: '文字提示组件，用于在用户界面中展示简短的提示信息、确认信息或自定义内容。支持多种触发方式和展示位置，适用于帮助说明、操作确认等场景。',
    scenarios: [
        '帮助说明：在表单项旁使用text模式，提供字段填写说明或验证规则提示。',
        '操作确认：在删除按钮旁使用confirm模式，二次确认用户的删除意图。',
        '内容展示：使用popover模式展示更多详细信息，保持界面简洁。',
        '状态提示：在禁用元素旁提示禁用原因，增强用户体验。',
        '链接提示：在链接文本上提示完整的URL或相关信息。',
        '图标提示：为功能图标添加操作说明，提高功能可发现性。',
    ],
    parent: {
        types: ['container', 'layout'],
    },
    children: [],
    propRelations: [
        {
            source: 'mode',
            target: 'confirmOption',
            effect: 'confirm模式时启用确认选项配置',
            notes: [
                '仅在mode为confirm时confirmOption配置才会生效',
                '用于自定义确认框的按钮文字和图标',
            ],
        },
        {
            source: 'disabled',
            target: 'trigger',
            effect: '禁用状态时触发方式失效',
            notes: [
                '组件处于禁用状态时不响应任何触发方式',
                '适用于临时禁用提示功能的场景',
            ],
        },
    ],
    props: [
        {
            name: 'modelValue',
            title: '显示提示',
            propType: 'bool',
            description: '是否显示提示框',
            defaultValue: false,
        },
        {
            name: 'mode',
            title: '弹出模式',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'text',
                        title: '文本提示',
                        usage: '用于展示简单的文本提示信息',
                    },
                    {
                        name: 'confirm',
                        title: '确认提示',
                        usage: '用于操作确认场景，提供确认和取消按钮',
                    },
                    {
                        name: 'popover',
                        title: '自定义提示',
                        usage: '用于展示复杂的自定义内容',
                    },
                ],
            },
            description: '提示框的展示模式',
            defaultValue: 'text',
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
            description: '提示框的标题文本',
        },
        {
            name: 'content',
            title: '内容',
            propType: 'string',
            description: '提示框的内容文本',
        },
        {
            name: 'placement',
            title: '位置',
            propType: {
                type: 'oneOf',
                items: [
                    { name: 'auto', title: '自动', usage: '自动计算最佳展示位置' },
                    { name: 'top', title: '顶部', usage: '显示在目标元素上方' },
                    { name: 'top-start', title: '顶部左对齐', usage: '显示在目标元素上方并左对齐' },
                    { name: 'top-end', title: '顶部右对齐', usage: '显示在目标元素上方并右对齐' },
                    { name: 'bottom', title: '底部', usage: '显示在目标元素下方' },
                    { name: 'bottom-start', title: '底部左对齐', usage: '显示在目标元素下方并左对齐' },
                    { name: 'bottom-end', title: '底部右对齐', usage: '显示在目标元素下方并右对齐' },
                    { name: 'left', title: '左侧', usage: '显示在目标元素左侧' },
                    { name: 'left-start', title: '左侧顶部对齐', usage: '显示在目标元素左侧并顶部对齐' },
                    { name: 'left-end', title: '左侧底部对齐', usage: '显示在目标元素左侧并底部对齐' },
                    { name: 'right', title: '右侧', usage: '显示在目标元素右侧' },
                    { name: 'right-start', title: '右侧顶部对齐', usage: '显示在目标元素右侧并顶部对齐' },
                    { name: 'right-end', title: '右侧底部对齐', usage: '显示在目标元素右侧并底部对齐' },
                ],
            },
            description: '提示框的弹出位置，支持12个方向',
            defaultValue: 'auto',
        },
        {
            name: 'trigger',
            title: '触发方式',
            propType: {
                type: 'oneOf',
                items: [
                    { name: 'hover', title: '悬停', usage: '鼠标悬停时显示提示' },
                    { name: 'click', title: '点击', usage: '点击元素时显示提示' },
                    { name: 'focus', title: '聚焦', usage: '元素获得焦点时显示提示' },
                    { name: 'contextmenu', title: '右键', usage: '右键点击时显示提示' },
                    { name: 'manual', title: '手动', usage: '完全受控模式，需要手动控制显示状态' },
                ],
            },
            description: '触发提示框显示的方式，支持多种交互模式',
            defaultValue: 'hover',
        },
        {
            name: 'disabled',
            title: '禁用',
            propType: 'bool',
            description: '是否禁用提示框',
            defaultValue: false,
        },
        {
            name: 'offset',
            title: '偏移量',
            propType: 'number',
            description: '提示框的偏移距离（像素）',
            defaultValue: 8,
        },
        {
            name: 'showAfter',
            title: '显示延迟',
            propType: 'number',
            description: '提示框显示的延迟时间（毫秒）',
            defaultValue: 0,
        },
        {
            name: 'hideAfter',
            title: '消失延迟',
            propType: 'number',
            description: '提示框消失的延迟时间（毫秒）',
            defaultValue: 200,
        },
        {
            name: 'arrow',
            title: '箭头',
            propType: 'bool',
            description: '是否显示指向箭头',
            defaultValue: true,
        },
        {
            name: 'confirmOption',
            title: '确认模式选项',
            propType: {
                type: 'exact',
                value: [
                    {
                        name: 'okText',
                        title: '确认按钮文字',
                        propType: 'string',
                        description: '确认按钮的文本内容',
                        defaultValue: '确定',
                    },
                    {
                        name: 'cancelText',
                        title: '取消按钮文字',
                        propType: 'string',
                        description: '取消按钮的文本内容',
                        defaultValue: '取消',
                    },
                    {
                        name: 'icon',
                        title: '图标',
                        propType: 'node',
                        description: '确认框的图标组件',
                        defaultValue: null,
                    },
                ],
            },
            description: '确认模式的配置选项，包括按钮文字和图标',
        },
        {
            name: 'getContainer',
            title: '渲染容器节点',
            propType: 'func',
            description: '指定提示框渲染的父级容器',
        },
    ],
    events: [
        {
            name: 'onOk',
            description: '点击确认按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '点击事件对象',
                },
            ],
        },
        {
            name: 'onCancel',
            description: '点击取消按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '点击事件对象',
                },
            ],
        },
        {
            name: 'onClickOutside',
            description: '点击外部区域时触发',
            parameters: [],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '触发提示的元素内容',
            required: true,
        },
        {
            name: 'title',
            description: '自定义标题内容',
        },
        {
            name: 'content',
            description: '自定义提示内容',
        },
    ],
};
