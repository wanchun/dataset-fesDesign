import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '模态框',
    componentName: 'FModal',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FModal',
        destructuring: true,
    },
    props: [
        {
            name: 'show',
            title: '显示',
            propType: 'bool',
        },
        {
            name: 'displayDirective',
            title: '渲染指令',
            propType: {
                type: 'oneOf',
                value: ['show', 'if'],
            },
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
        },
        {
            name: 'mask',
            title: '蒙层',
            propType: 'bool',
        },
        {
            name: 'maskClosable',
            title: '点击蒙层关闭',
            propType: 'bool',
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
        },
        {
            name: 'width',
            title: '宽度',
            propType: 'number',
        },
        {
            name: 'top',
            title: '距离顶部',
            propType: 'number',
        },
        {
            name: 'verticalCenter',
            title: '垂直居中',
            propType: 'bool',
        },
        {
            name: 'center',
            title: '内容居中',
            propType: 'bool',
        },
        {
            name: 'fullScreen',
            title: '全屏',
            propType: 'bool',
        },
        {
            name: 'footer',
            title: '底部',
            propType: 'bool',
        },
        {
            name: 'okText',
            title: '确认按钮文字',
            propType: 'string',
        },
        {
            name: 'okLoading',
            title: '确认按钮 Loading',
            propType: 'bool',
        },
        {
            name: 'cancelText',
            title: '取消按钮文字',
            propType: 'string',
        },
        {
            name: 'getContainer',
            title: '挂载节点',
            propType: 'func',
        },
        {
            name: 'contentClass',
            title: '内容样式名称',
            propType: 'string',
        },
    ],
    configure: {
        props: [
            {
                name: 'show',
                title: '显示',
                setter: 'BoolSetter',
            },
            {
                name: 'title',
                title: '标题',
                setter: ['StringSetter', 'SlotSetter'],
            },
            {
                name: 'displayDirective',
                title: '渲染方式',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '缓存渲染',
                                value: 'show',
                            },
                            {
                                label: '重置渲染',
                                value: 'if',
                            },
                        ],
                    },
                },
                defaultValue: 'show',
            },
            {
                name: 'closable',
                title: '可关闭',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'mask',
                title: '蒙层',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'maskClosable',
                title: '点击蒙层关闭',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'width',
                title: '宽度',
                setter: 'NumberSetter',
                defaultValue: 520,
            },
            {
                name: 'top',
                title: '距离顶部',
                setter: 'NumberSetter',
                defaultValue: 50,
            },
            {
                name: 'verticalCenter',
                title: '垂直居中',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'center',
                title: '内容居中',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'fullScreen',
                title: '全屏',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'footer',
                title: '底部',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'footer',
                title: '自定底部',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'footer',
                    value: [],
                },
            },
            {
                name: 'okText',
                title: '确认按钮文字',
                setter: 'StringSetter',
                defaultValue: '确认',
            },
            {
                name: 'okLoading',
                title: '确认按钮 Loading',
                setter: 'BoolSetter',
            },
            {
                name: 'cancelText',
                title: '取消按钮文字',
                setter: 'StringSetter',
                defaultValue: '取消',
            },
            {
                name: 'contentClass',
                title: '内容样式名称',
                setter: 'StringSetter',
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
        component: {
            isContainer: true,
            isModal: true,
            dialogControlProp: 'show',
        },
        supports: {
            // TODO: StyleSetter会出错
            events: [
                {
                    name: 'onUpdate:show',
                    params: [
                        {
                            name: 'visible',
                            type: 'boolean',
                        },
                    ],
                },
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
                    name: 'onAfterEnter',
                    params: [
                        {
                            name: 'el',
                            type: 'Element',
                        },
                    ],
                },
                {
                    name: 'onAfterLeave',
                    params: [
                        {
                            name: 'el',
                            type: 'Element',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '模态框',
            schema: {
                componentName: 'FModal',
                props: {
                    show: true,
                },
            },
        },
    ],
    group: '原子组件',
    category: '对话框类',
    priority: 0,
};

export default meta;
