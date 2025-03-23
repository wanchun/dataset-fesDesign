import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '卡片',
    componentName: 'FCard',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCard',
        destructuring: true,
    },
    props: [
        {
            name: 'header',
            propType: {
                type: 'oneOfType',
                value: ['string', 'node'],
            },
        },
        {
            name: 'size',
            propType: {
                type: 'oneOf',
                value: ['small', 'middle', 'large'],
            },
        },
        {
            name: 'bordered',
            propType: 'bool',
        },
        {
            name: 'divider',
            propType: 'bool',
        },
        {
            name: 'shadow',
            propType: {
                type: 'oneOf',
                value: ['always', 'never', 'hover'],
            },
        },
        {
            name: 'bodyStyle',
            propType: 'object',
        },
    ],
    configure: {
        supports: {
            style: true,
            class: true,
            events: ['onClick'],
        },
        component: {
            isContainer: true,
        },
        props: [
            {
                title: '卡片内容',
                type: 'group',
                extraProps: {
                    display: 'block',
                },
                items: [
                    {
                        name: 'header',
                        title: '标题',
                        setter: [
                            {
                                componentName: 'StringSetter',
                            },
                            {
                                componentName: 'SlotSetter',
                                defaultValue: {
                                    type: 'JSSlot',
                                    title: '头部',
                                    value: [],
                                },
                            },
                        ],
                    },
                ],
            },
            {
                type: 'group',
                title: '卡片样式',
                display: 'block',
                items: [
                    {
                        name: 'size',
                        title: '卡片尺寸',
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
                        name: 'bordered',
                        title: '显示边框',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'divider',
                        title: '显示分割线',
                        setter: 'BoolSetter',
                        defaultValue: true,
                    },
                    {
                        name: 'shadow',
                        title: '阴影效果',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        label: '总是',
                                        value: 'always',
                                    },
                                    {
                                        label: '没有',
                                        value: 'never',
                                    },
                                    {
                                        label: '悬浮显示',
                                        value: 'hover',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'always',
                    },
                    {
                        name: 'bodyStyle',
                        title: '内容样式',
                        setter: 'StyleSetter',
                        display: 'popup',
                    },
                ],
            },
        ],
    },
    snippets: [
        {
            // screenshot:
            //     'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/card.png',
            title: '卡片',
            schema: {
                componentName: 'FCard',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};

export default meta;
