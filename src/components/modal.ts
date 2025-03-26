import type { IComponentMetadata } from '../type';

export const modalMeta: IComponentMetadata = {
    title: '模态框',
    componentName: 'FModal',
    description: '模态框组件，用于在页面中弹出对话框，常用于表单提交、信息确认等场景。支持多种配置选项，包括显示控制、蒙层设置、尺寸调整等。',
    scenarios: [
        '表单提交：在用户填写表单后，使用模态框进行确认提交，确保用户明确提交意图。',
        '信息提示：在需要向用户展示重要信息时，使用模态框进行提示，确保信息不会被忽略。',
        '操作确认：在执行关键操作前，使用模态框进行二次确认，防止误操作。',
        '全屏展示：在需要展示大量内容时，使用全屏模态框，提供更好的用户体验。',
        '自定义底部：在需要自定义底部按钮时，使用插槽进行灵活配置，满足不同业务需求。',
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
            source: 'show',
            target: 'mask',
            effect: '当show为true时，自动显示蒙层',
            notes: [
                '蒙层用于防止用户与页面其他元素交互',
                '适用于需要用户专注操作的场景',
            ],
        },
        {
            source: 'maskClosable',
            target: 'closable',
            effect: '当maskClosable为true时，closable必须为true',
            notes: [
                '确保用户可以通过点击蒙层关闭模态框',
                '适用于需要提供便捷关闭方式的场景',
            ],
        },
    ],
    props: [
        {
            name: 'show',
            title: '显示',
            propType: 'bool',
            description: '控制模态框的显示与隐藏',
            defaultValue: false,
        },
        {
            name: 'displayDirective',
            title: '渲染指令',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'show',
                        title: '缓存渲染',
                        usage: '适用于需要频繁切换显示的场景，减少渲染开销',
                    },
                    {
                        name: 'if',
                        title: '重置渲染',
                        usage: '适用于需要每次显示时重新渲染的场景，确保内容最新',
                    },
                ],
            },
            description: '控制模态框的渲染方式，影响性能与内容更新',
            defaultValue: 'show',
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
            description: '是否显示关闭按钮',
            defaultValue: true,
        },
        {
            name: 'mask',
            title: '蒙层',
            propType: 'bool',
            description: '是否显示蒙层',
            defaultValue: true,
        },
        {
            name: 'maskClosable',
            title: '点击蒙层关闭',
            propType: 'bool',
            description: '是否允许点击蒙层关闭模态框',
            defaultValue: true,
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
            description: '模态框的标题内容',
        },
        {
            name: 'width',
            title: '宽度',
            propType: 'number',
            description: '模态框的宽度',
            defaultValue: 520,
        },
        {
            name: 'top',
            title: '距离顶部',
            propType: 'number',
            description: '模态框距离顶部的距离',
            defaultValue: 50,
        },
        {
            name: 'verticalCenter',
            title: '垂直居中',
            propType: 'bool',
            description: '是否垂直居中显示',
            defaultValue: false,
        },
        {
            name: 'center',
            title: '内容居中',
            propType: 'bool',
            description: '是否将内容居中显示',
            defaultValue: false,
        },
        {
            name: 'fullScreen',
            title: '全屏',
            propType: 'bool',
            description: '是否全屏显示',
            defaultValue: false,
        },
        {
            name: 'footer',
            title: '底部',
            propType: 'bool',
            description: '是否显示底部区域',
            defaultValue: true,
        },
        {
            name: 'okText',
            title: '确认按钮文字',
            propType: 'string',
            description: '确认按钮的文本内容',
            defaultValue: '确认',
        },
        {
            name: 'okLoading',
            title: '确认按钮 Loading',
            propType: 'bool',
            description: '确认按钮是否显示加载状态',
        },
        {
            name: 'cancelText',
            title: '取消按钮文字',
            propType: 'string',
            description: '取消按钮的文本内容',
            defaultValue: '取消',
        },
        {
            name: 'getContainer',
            title: '挂载节点',
            propType: 'func',
            description: '指定模态框挂载的DOM节点',
        },
        {
            name: 'contentClass',
            title: '内容样式名称',
            propType: 'string',
            description: '自定义模态框内容的样式类名',
        },
    ],
    events: [
        {
            name: 'onUpdate:show',
            description: '模态框显示状态变化时触发',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '当前的显示状态',
                },
            ],
        },
        {
            name: 'onOk',
            description: '点击确认按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '事件对象',
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
                    description: '事件对象',
                },
            ],
        },
        {
            name: 'onAfterEnter',
            description: '模态框完全显示后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '模态框的DOM元素',
                },
            ],
        },
        {
            name: 'onAfterLeave',
            description: '模态框完全隐藏后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '模态框的DOM元素',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'footer',
            description: '自定义底部内容',
            required: false,
        },
    ],
};
