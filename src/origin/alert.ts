import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '警告提示',
    componentName: 'FAlert',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FAlert',
        destructuring: true,
    },
    props: [
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                value: ['success', 'info', 'warning', 'error'],
            },
        },
        {
            name: 'message',
            title: '消息标题',
            propType: 'string',
        },
        {
            name: 'description',
            title: '消息内容',
            propType: 'string',
        },
        {
            name: 'showIcon',
            title: '显示图标',
            propType: 'bool',
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
        },
        {
            name: 'center',
            title: '居中',
            propType: 'bool',
        },
        {
            name: 'beforeClose',
            title: '关闭前钩子',
            propType: 'func',
        },
    ],
    configure: {
        props: [
            {
                name: 'type',
                title: '类型',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                value: 'info',
                                label: '信息',
                            },
                            {
                                value: 'success',
                                label: '成功',
                            },
                            {
                                value: 'warning',
                                label: '警告',
                            },
                            {
                                value: 'error',
                                label: '错误',
                            },
                        ],
                    },
                },
                defaultValue: 'info',
            },
            {
                name: 'message',
                title: '提示内容',
                setter: 'StringSetter',
            },
            {
                name: 'description',
                title: '辅助信息',
                setter: 'StringSetter',
            },
            {
                name: 'showIcon',
                title: '显示图标',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'closable',
                title: '可关闭',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'center',
                title: '是否居中',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'beforeClose',
                title: '关闭前钩子',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder: '() => true',
                    },
                },
            },
            {
                title: '插槽',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'default',
                        title: '自定义消息',
                        setter: 'SlotSetter',
                    },
                    {
                        name: 'descriptionSlot',
                        title: '自定义辅助消息',
                        setter: 'SlotSetter',
                        defaultValue: {
                            type: 'JSSlot',
                            name: 'description',
                            value: [],
                        },
                    },
                    {
                        name: 'icon',
                        title: '自定义图标',
                        setter: {
                            componentName: 'IconSetter',
                            props: {
                                type: 'node',
                            },
                        },
                    },
                    {
                        name: 'action',
                        title: '自定义操作',
                        setter: 'SlotSetter',
                    },
                ],
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '警告提示',
            schema: {
                componentName: 'FAlert',
                props: {
                    type: 'info',
                    message: '常规信息提示内容',
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息反馈',
    priority: 0,
};

export default meta;
