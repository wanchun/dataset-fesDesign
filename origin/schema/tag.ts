import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '标签',
    componentName: 'FTag',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTag',
        destructuring: true,
    },
    props: [
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                value: ['default', 'success', 'info', 'warning', 'danger'],
            },
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
        },
        {
            name: 'backgroundColor',
            title: '背景色',
            propType: 'string',
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
        },
        {
            name: 'size',
            title: '大小',
            propType: {
                type: 'oneOf',
                value: ['small', 'middle', 'large'],
            },
        },
        {
            name: 'effect',
            title: '主题',
            propType: {
                type: 'oneOf',
                value: ['dark', 'light', 'plain'],
            },
        },
        {
            name: 'bordered',
            title: '边框',
            propType: 'bool',
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
                                value: 'default',
                                label: '默认',
                            },
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
                                value: 'danger',
                                label: '错误',
                            },
                        ],
                    },
                },
                defaultValue: 'default',
            },
            {
                name: 'children',
                title: '内容',
                setter: 'StringSetter',
            },
            {
                name: 'bordered',
                title: '边框',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'closable',
                title: '可关闭',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'backgroundColor',
                title: '背景色',
                setter: 'ColorSetter',
            },
            {
                name: 'size',
                title: '大小',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                value: 'small',
                                label: '小',
                            },
                            {
                                value: 'middle',
                                label: '中',
                            },
                            {
                                value: 'large',
                                label: '大',
                            },
                        ],
                    },
                },
                defaultValue: 'middle',
            },
            {
                name: 'effect',
                title: '主题',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                value: 'dark',
                                label: '深色',
                            },
                            {
                                value: 'light',
                                label: '亮色',
                            },
                            {
                                value: 'plain',
                                label: '无色',
                            },
                        ],
                    },
                },
                defaultValue: 'light',
            },
            {
                name: 'icon',
                title: '按钮',
                setter: {
                    componentName: 'IconSetter',
                    props: {
                        type: 'node',
                    },
                },
            },
        ],
        supports: {
            style: true,
            class: true,
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
                {
                    name: 'onClose',
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
            title: '标签',
            schema: {
                componentName: 'FTag',
                props: {
                    children: '我是标签',
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};

export default meta;
