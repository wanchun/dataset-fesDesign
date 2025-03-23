import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

const meta: IPublicTypeComponentDescription = {
    title: '头像组',
    componentName: 'FAvatarGroup',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FAvatarGroup',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'shape',
                title: '组形状',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { value: 'circle', label: '圆形' },
                            { value: 'square', label: '方形' },
                        ],
                    },
                },
                defaultValue: 'circle',
            },
            {
                name: 'size',
                title: '尺寸',
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    label: '小',
                                    value: 'small',
                                },
                                {
                                    label: '中',
                                    value: 'medium',
                                },
                                {
                                    label: '大',
                                    value: 'large',
                                },
                            ],
                        },
                    },
                    'NumberSetter',
                ],
                defaultValue: 'medium',
            },
            {
                name: 'options',
                title: '头像配置',
                display: 'block',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                                items: [
                                    {
                                        name: 'src',
                                        title: '图片头像',
                                        setter: ['StringSetter', 'UrlSetter'],
                                    },
                                    {
                                        name: 'text',
                                        title: '文字头像',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'name',
                                        title: '提示信息',
                                        setter: 'StringSetter',
                                    },
                                    {
                                        name: 'icon',
                                        title: '图标头像',
                                        setter: 'StringSetter',
                                    },
                                ],
                            },
                        },
                        columns: ['src', 'text'],
                    },
                },
            },
            {
                name: 'max',
                title: '最大展示头像数',
                setter: 'NumberSetter',
                defaultValue: 3,
            },
            {
                name: 'expandOnHover',
                title: '悬停时展开',
                setter: 'BoolSetter',
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '头像组',
            schema: {
                componentName: 'FAvatarGroup',
                props: {
                    options: [{ text: 'Z' }, { text: 'M' }, { text: 'Q' }],
                },
                children: [
                    {
                        componentName: 'FAvatar',
                        children: {
                            componentName: 'FText',
                            props: {
                                children: 'F',
                            },
                        },
                    },
                    {
                        componentName: 'FAvatar',
                        children: {
                            componentName: 'FText',
                            props: {
                                children: 'L',
                            },
                        },
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 1,
};

export default meta;
