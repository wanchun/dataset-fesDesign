import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '按钮',
    componentName: 'FButton',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FButton',
        destructuring: true,
    },
    props: [
        {
            name: 'children',
            propType: 'string',
        },
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'size',
            propType: 'string',
        },
        {
            name: 'htmlType',
            propType: 'string',
        },
        {
            name: 'loading',
            propType: 'bool',
        },
        {
            name: 'long',
            propType: 'bool',
        },
        {
            name: 'throttle',
            propType: 'number',
        },
        {
            name: 'type',
            propType: 'string',
        },
    ],
    configure: {
        props: [
            {
                title: '按钮功能',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'children',
                        title: '按钮内容',
                        setter: 'StringSetter',
                    },
                    {
                        name: 'disabled',
                        title: '是否禁用',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'loading',
                        title: '显示加载状态',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'throttle',
                        title: '截流',
                        setter: 'NumberSetter',
                        defaultValue: 300,
                    },
                    {
                        name: 'htmlType',
                        title: '按钮功能',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        label: '普通按钮',
                                        value: 'button',
                                    },
                                    {
                                        label: '表单提交',
                                        value: 'submit',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'button',
                    },
                ],
            },
            {
                name: 'action',
                title: '按钮样式',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'type',
                        title: '按钮的类型',
                        setter: {
                            componentName: 'SelectSetter',
                            props: {
                                options: [
                                    {
                                        label: '默认',
                                        value: 'default',
                                    },
                                    {
                                        label: '重要',
                                        value: 'primary',
                                    },
                                    {
                                        label: '文本',
                                        value: 'text',
                                    },
                                    {
                                        label: '链接',
                                        value: 'link',
                                    },
                                    {
                                        label: '信息',
                                        value: 'info',
                                    },
                                    {
                                        label: '成功',
                                        value: 'success',
                                    },
                                    {
                                        label: '警告',
                                        value: 'warning',
                                    },
                                    {
                                        label: '危险',
                                        value: 'danger',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'default',
                    },
                    {
                        name: 'size',
                        title: '按钮的尺寸',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        label: '小',
                                        value: 'small',
                                    },
                                    {
                                        label: '中',
                                        value: 'middle',
                                    },
                                    {
                                        label: '大',
                                        value: 'large',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'middle',
                    },
                    {
                        name: 'long',
                        title: '长按钮',
                        setter: 'BoolSetter',
                        defaultValue: false,
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
        ],
        supports: {
            style: true,
            class: true,
            loop: true,
            events: [
                {
                    name: 'onClick',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '按钮',
            schema: {
                componentName: 'FButton',
                props: {
                    children: '按钮',
                },
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};

export default meta;
