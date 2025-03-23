import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '抽屉',
    componentName: 'FDrawer',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDrawer',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model:show',
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
            name: 'placement',
            title: '方向',
            propType: {
                type: 'oneOf',
                value: ['top', 'bottom', 'left', 'right'],
            },
        },
        {
            name: 'height',
            title: '高度',
            propType: 'number',
        },
        {
            name: 'width',
            title: '宽度',
            propType: 'number',
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
            name: 'cancelText',
            title: '取消按钮文字',
            propType: 'string',
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
                name: 'placement',
                title: '方向',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: '上',
                                value: 'top',
                            },
                            {
                                label: '下',
                                value: 'bottom',
                            },
                            {
                                label: '左',
                                value: 'left',
                            },
                            {
                                label: '右',
                                value: 'right',
                            },
                        ],
                    },
                },
                defaultValue: 'right',
            },
            {
                name: 'height',
                title: '高度',
                setter: 'NumberSetter',
            },
            {
                name: 'width',
                title: '宽度',
                setter: 'NumberSetter',
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
                title: '是否有蒙层',
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
                name: 'title',
                title: '标题',
                setter: 'StringSetter',
            },
            {
                name: 'titleSlot',
                title: '自定义标题',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'title',
                    value: [],
                },
            },
            {
                name: 'footer',
                title: '是否有底部',
                setter: 'BoolSetter',
                defaultValue: false,
            },
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
                name: 'resizable',
                title: '可调整尺寸',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'resizeMax',
                title: '最大尺寸',
                condition: (target) => !!target.top.getPropValue('resizable'),
                description: "可拖拽尺寸最大（如：100、'200px'、'30%'）",
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'resizeMin',
                title: '最小尺寸',
                condition: (target) => !!target.top.getPropValue('resizable'),
                description: "可拖拽最小尺寸（如：100、'200px'、'30%'）",
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'footerSlot',
                title: '自定义底部',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'footer',
                    value: [],
                },
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
            title: '抽屉',
            schema: {
                componentName: 'FDrawer',
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
