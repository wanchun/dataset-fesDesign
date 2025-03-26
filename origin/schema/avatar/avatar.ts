import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

const meta: IPublicTypeComponentDescription = {
    title: '头像',
    componentName: 'FAvatar',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FAvatar',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'src',
                title: '头像图片',
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
                name: 'shape',
                title: '头像形状',
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
                name: 'backgroundColor',
                title: '背景色',
                setter: 'ColorSetter',
            },
            {
                name: 'color',
                title: '文字颜色',
                setter: 'ColorSetter',
            },
            {
                name: 'fallbackSrc',
                title: '失败图片地址',
                setter: ['UrlSetter', 'StringSetter'],
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
        ],
        supports: {
            style: true,
            class: true,
            events: [
                {
                    name: 'onError',
                    params: [],
                },
            ],
        },
    },
    snippets: [
        {
            title: '头像',
            schema: {
                componentName: 'FAvatar',
                children: {
                    componentName: 'FText',
                    props: {
                        children: 'Fes',
                    },
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 1,
};

export default meta;
