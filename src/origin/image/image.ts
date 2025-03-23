import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const ImageMeta: IPublicTypeComponentDescription = {
    title: '图片',
    componentName: 'FImage',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FImage',
        destructuring: true,
    },
    props: [
        {
            name: 'src',
            title: '图片地址',
            propType: 'string',
        },
        {
            name: 'width',
            title: '宽度',
            propType: {
                type: 'oneOfType',
                value: ['number', 'string'],
            },
        },
        {
            name: 'height',
            title: '高度',
            propType: {
                type: 'oneOfType',
                value: ['number', 'string'],
            },
        },
        {
            name: 'fit',
            title: '适应容器',
            propType: {
                type: 'oneOf',
                value: ['fill', 'contain', 'cover', 'scale-down', 'none'],
            },
        },
        {
            name: 'alt',
            title: '描述',
            propType: 'string',
        },
        {
            name: 'preview',
            title: '是否预览',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'lazy',
            title: '懒加载',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'name',
            title: '预览名称',
            propType: 'string',
        },
        {
            name: 'download',
            title: '是否下载',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'hideOnClickModal',
            title: '点击遮罩层关闭预览',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'scrollContainer',
            title: '懒加载监听节点',
            propType: 'func',
        },
        {
            name: 'previewContainer',
            title: '预览挂载节点',
            propType: 'func',
        },
        {
            name: 'placeholder',
            title: '图片未加载占位内容',
            propType: 'node',
        },
        {
            name: 'error',
            title: '加载失败显示内容',
            propType: 'node',
        },
    ],
    configure: {
        supports: {
            events: [
                {
                    name: 'onLoad',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onError',
                    params: [
                        {
                            name: 'error',
                            type: 'Error',
                        },
                    ],
                },
            ],
        },
        props: [
            {
                name: 'src',
                title: '图片地址',
                setter: [
                    'UrlSetter',
                    {
                        componentName: 'StringSetter',
                        isRequired: false,
                        defaultValue: '',
                    },
                ],
            },
            {
                name: 'width',
                title: '宽度',
                setter: [
                    {
                        componentName: 'NumberSetter',
                        isRequired: false,
                        defaultValue: 0,
                    },
                    {
                        componentName: 'StringSetter',
                        isRequired: false,
                        defaultValue: '',
                    },
                ],
            },
            {
                name: 'height',
                title: '高度',
                setter: [
                    {
                        componentName: 'NumberSetter',
                        isRequired: false,
                        defaultValue: 0,
                    },
                    {
                        componentName: 'StringSetter',
                        isRequired: false,
                        defaultValue: '',
                    },
                ],
            },
            {
                name: 'fit',
                title: '适应容器',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { label: 'fill', value: 'fill' },
                            { label: 'contain', value: 'contain' },
                            { label: 'cover', value: 'cover' },
                            { label: 'scale-down', value: 'scale-down' },
                            { label: 'none', value: 'none' },
                        ],
                    },
                    defaultValue: 'fill',
                },
            },
            {
                name: 'alt',
                title: '描述',
                setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    defaultValue: '',
                },
            },
            {
                name: 'preview',
                title: '是否预览',
                defaultValue: false,
                setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    defaultValue: false,
                },
            },
            {
                name: 'lazy',
                title: '懒加载',
                defaultValue: false,
                setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    defaultValue: false,
                },
            },
            {
                name: 'name',
                title: '预览名称',
                setter: {
                    componentName: 'StringSetter',
                    isRequired: false,
                    defaultValue: '',
                },
            },
            {
                name: 'download',
                title: '是否下载',
                defaultValue: false,
                setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    defaultValue: false,
                },
            },
            {
                name: 'hideOnClickModal',
                title: '点击遮罩关闭',
                description: '是否可以通过点击遮罩层关闭预览',
                defaultValue: false,
                setter: {
                    componentName: 'BoolSetter',
                    isRequired: false,
                    defaultValue: false,
                },
            },
            {
                name: 'scrollContainer',
                title: '懒加载容器',
                description: '开启懒加载后，监听 scroll 事件的容器',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder: '() => document.querySelector("#imagesContainer")',
                    },
                    isRequired: false,
                },
            },
            {
                name: 'previewContainer',
                title: '预览容器',
                description: '指定预览弹窗挂载的 HTML 节点	',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder: '() => document.body',
                    },
                    isRequired: false,
                },
            },
            {
                name: 'placeholder',
                title: '图片未加载占位内容',
                setter: {
                    componentName: 'SlotSetter',
                    props: {
                        mode: 'node',
                    },
                    isRequired: false,
                    defaultValue: {
                        type: 'JSSlot',
                        value: [],
                    },
                },
            },
            {
                name: 'error',
                title: '加载失败显示内容',
                setter: {
                    componentName: 'SlotSetter',
                    props: {
                        mode: 'node',
                    },
                    isRequired: false,
                    defaultValue: {
                        type: 'JSSlot',
                        value: [],
                    },
                },
            },
        ],
    },
    snippets: [
        {
            title: '图片',
            schema: {
                componentName: 'FImage',
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};
