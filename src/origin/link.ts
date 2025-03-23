import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '超链接',
    componentName: 'FLink',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FLink',
        destructuring: true,
    },
    configure: {
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
            ],
        },
        props: [
            {
                name: 'children',
                title: '文本内容',
                setter: ['StringSetter', 'SlotSetter'],
            },
            {
                name: 'href',
                title: '跳转链接',
                setter: 'StringSetter',
            },
            {
                name: 'icon',
                title: '图标',
                setter: 'IconSetter',
            },
            {
                name: 'size',
                title: '尺寸',
                setter: {
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
                defaultValue: 'medium',
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
                                label: '重要',
                                value: 'primary',
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
                name: 'underline',
                title: '下划线',
                setter: 'BoolSetter',
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: 'BoolSetter',
            },
            {
                name: 'target',
                title: '跳转行为',
                description: '跳转行为，同原生 target',
                setter: 'StringSetter',
            },
        ],
    },
    snippets: [
        {
            title: '超链接',
            schema: {
                componentName: 'FLink',
                props: {
                    children: '这是一个超链接',
                    type: 'primary',
                },
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};

export default meta;
