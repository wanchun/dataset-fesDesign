import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文本',
    componentName: 'FText',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FText',
        destructuring: true,
    },
    props: [
        {
            name: 'children',
            propType: 'string',
        },
        {
            name: 'type',
            propType: 'string',
        },
        {
            name: 'strong',
            propType: 'bool',
        },
        {
            name: 'italic',
            propType: 'bool',
        },
        {
            name: 'tag',
            propType: 'string',
        },
    ],
    configure: {
        supports: {
            style: true,
            class: true,
        },
        props: [
            {
                name: 'children',
                title: '文本内容',
                setter: 'StringSetter',
            },
            {
                name: 'type',
                title: '排印类型',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: '默认',
                                value: 'default',
                            },
                            {
                                label: '成功',
                                value: 'success',
                            },
                            {
                                label: '信息',
                                value: 'info',
                            },
                            {
                                label: '警告',
                                value: 'warning',
                            },
                            {
                                label: '错误',
                                value: 'danger',
                            },
                        ],
                    },
                },
                defaultValue: 'default',
            },
            {
                name: 'strong',
                title: '加粗',
                setter: 'BoolSetter',
            },
            {
                name: 'italic',
                title: '斜体',
                setter: 'BoolSetter',
            },
            {
                name: 'tag',
                title: 'DOM 标签',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: 'p',
                                value: 'p',
                            },
                            {
                                label: 'span',
                                value: 'span',
                            },
                            {
                                label: 'label',
                                value: 'label',
                            },
                        ],
                    },
                    defaultValue: 'span',
                },
            },
            {
                name: 'gradient',
                title: '文本渐变',
                setter: 'StringSetter',
            },
        ],
    },
    snippets: [
        {
            title: '文本',
            schema: {
                componentName: 'FText',
                props: {
                    children: '文本内容',
                },
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};

export default meta;
