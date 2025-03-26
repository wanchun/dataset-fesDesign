import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文字提示',
    componentName: 'FTooltip',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTooltip',
        destructuring: true,
    },
    props: [
        {
            name: 'modelValue',
            title: '显示提示',
            propType: 'bool',
        },
        {
            name: 'model',
            title: '弹出模式',
            propType: {
                type: 'oneOf',
                value: ['text', 'confirm', 'popover'],
            },
        },
        {
            name: 'popperClass',
            title: '弹出框class',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object', 'array'],
            },
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
        },
        {
            name: 'content',
            title: '内容',
            propType: 'string',
        },
        {
            name: 'placement',
            title: '位置',
            propType: {
                type: 'oneOf',
                value: [
                    'auto',
                    'top',
                    'top-start',
                    'top-end',
                    'bottom',
                    'bottom-start',
                    'bottom-end',
                    'right',
                    'right-start',
                    'right-end',
                    'left',
                    'left-start',
                    'left-end',
                ],
            },
        },
        {
            name: 'trigger',
            title: '触发方式',
            propType: {
                type: 'oneOf',
                value: ['hover', 'click', 'focus'],
            },
        },
        {
            name: 'disabled',
            title: '禁用',
            propType: 'bool',
        },
        {
            name: 'offset',
            title: '偏移量',
            propType: 'number',
        },
        {
            name: 'showAfter',
            title: '显示延迟',
            propType: 'number',
        },
        {
            name: 'hideAfter',
            title: '消失延迟',
            propType: 'number',
        },
        {
            name: 'arrow',
            title: '箭头',
            propType: 'bool',
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
                    },
                    {
                        name: 'cancelText',
                        title: '取消按钮文字',
                        propType: 'string',
                    },
                    {
                        name: 'icon',
                        title: '图标',
                        propType: 'node',
                    },
                ],
            },
        },
        {
            name: 'getContainer',
            title: '渲染容器节点',
            propType: 'func',
        },
    ],
    configure: {
        props: [
            {
                name: 'modelValue',
                title: '是否显示',
                setter: 'BoolSetter',
            },
            {
                name: 'mode',
                title: '模式',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                value: 'text',
                                label: '文本提示',
                            },
                            {
                                value: 'confirm',
                                label: '确认提示',
                            },
                            {
                                value: 'popover',
                                label: '自定义提示',
                            },
                        ],
                    },
                },
                defaultValue: 'text',
            },
            {
                title: '内容配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'title',
                        title: '标题',
                        setter: ['StringSetter', 'SlotSetter'],
                    },
                    {
                        name: 'content',
                        title: '内容',
                        setter: ['StringSetter', 'SlotSetter'],
                    },
                ],
            },
            {
                name: 'confirmOption',
                title: '确认提示选项',
                condition: (target) => target.top.getPropValue('mode') === 'confirm',
                display: 'block',
                setter: {
                    componentName: 'ObjectSetter',
                    props: {
                        items: [
                            {
                                name: 'okText',
                                title: '确认按钮文字',
                                setter: 'StringSetter',
                                defaultValue: '确定',
                            },
                            {
                                name: 'cancelText',
                                title: '取消按钮文字',
                                setter: 'StringSetter',
                                defaultValue: '取消',
                            },
                            {
                                name: 'icon',
                                title: '图标',
                                setter: {
                                    componentName: 'IconSetter',
                                    props: {
                                        type: 'node',
                                    },
                                },
                            },
                        ],
                    },
                },
            },
            {
                title: '弹出配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'disabled',
                        title: '禁用',
                        setter: 'BoolSetter',
                    },
                    {
                        name: 'trigger',
                        title: '触发方式',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'hover',
                                        label: '鼠标悬浮',
                                    },
                                    {
                                        value: 'click',
                                        label: '点击',
                                    },
                                    {
                                        value: 'focus',
                                        label: '选中',
                                    },
                                ],
                            },
                        },
                    },
                    {
                        name: 'placement',
                        title: '弹出位置',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        value: 'auto',
                                        label: 'auto',
                                    },
                                    {
                                        value: 'top',
                                        label: 'top',
                                    },
                                    {
                                        value: 'top-start',
                                        label: 'top-start',
                                    },
                                    {
                                        value: 'top-end',
                                        label: 'top-end',
                                    },
                                    {
                                        value: 'bottom',
                                        label: 'bottom',
                                    },
                                    {
                                        value: 'bottom-start',
                                        label: 'bottom-start',
                                    },
                                    {
                                        value: 'bottom-end',
                                        label: 'bottom-end',
                                    },
                                    {
                                        value: 'left',
                                        label: 'left',
                                    },
                                    {
                                        value: 'left-start',
                                        label: 'left-start',
                                    },
                                    {
                                        value: 'left-end',
                                        label: 'left-end',
                                    },
                                    {
                                        value: 'right',
                                        label: 'right',
                                    },
                                    {
                                        value: 'right-start',
                                        label: 'right-start',
                                    },
                                    {
                                        value: 'right-end',
                                        label: 'right-end',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'auto',
                    },
                    {
                        name: 'arrow',
                        title: '箭头',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'offset',
                        title: '偏移量',
                        setter: 'NumberSetter',
                        defaultValue: 8,
                    },
                    {
                        name: 'showAfter',
                        title: '显示延迟(ms)',
                        setter: 'NumberSetter',
                        defaultValue: 0,
                    },
                    {
                        name: 'hideAfter',
                        title: '消失延迟(ms)',
                        setter: 'NumberSetter',
                        defaultValue: 200,
                    },
                    {
                        name: 'popperClass',
                        title: '弹出框样式类',
                        setter: {
                            componentName: 'StringSetter',
                            props: {
                                placeholder: 'my-class',
                            },
                        },
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
                ],
            },
        ],
        component: {
            isContainer: true,
            dialogControlProp: 'modelValue',
        },
        supports: {
            events: [
                {
                    name: 'onOk',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onCancel',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onClickOutside',
                    params: [],
                },
            ],
        },
    },
    snippets: [
        {
            title: '文字提示',
            schema: {
                componentName: 'FTooltip',
                props: {
                    content: '在一件事情的关键部分做出精妙的补充，使整个事情更加完美',
                },
                children: [
                    {
                        componentName: 'FText',
                        props: {
                            children: '画龙点睛',
                        },
                    },
                ],
            },
        },
        {
            title: '确认提示',
            schema: {
                componentName: 'FTooltip',
                props: {
                    mode: 'confirm',
                    title: '是否删除当前工单？',
                    content: '删除后无法恢复哦',
                },
                children: [
                    {
                        componentName: 'FButton',
                        props: {
                            children: '删除',
                        },
                    },
                ],
            },
        },
        {
            title: '内容提示',
            schema: {
                componentName: 'FTooltip',
                props: {
                    mode: 'popover',
                    title: '我是标题',
                    content: '我是内容',
                },
                children: [
                    {
                        componentName: 'FButton',
                        props: {
                            children: '查看更多',
                        },
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '信息反馈',
    priority: 0,
};

export default meta;
