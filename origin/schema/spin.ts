import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '加载中',
    componentName: 'FSpin',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSpin',
        destructuring: true,
    },
    props: [
        {
            name: 'show',
            title: '显示',
            propType: 'bool',
        },
        {
            name: 'size',
            title: '大小',
            propType: {
                type: 'oneOf',
                value: ['middle', 'small', 'large'],
            },
        },
        {
            name: 'description',
            title: '描述',
            propType: 'string',
        },
        {
            name: 'stroke',
            title: '边框颜色',
            propType: 'string',
        },
        {
            name: 'delay',
            title: '延迟显示',
            propType: 'number',
        },
        {
            name: 'icon',
            title: '图标',
            propType: 'node',
        },
    ],
    configure: {
        props: [
            {
                name: 'show',
                title: '显示',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'size',
                title: '大小',
                setter: {
                    componentName: 'SelectSetter',
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
                name: 'description',
                title: '描述',
                setter: ['StringSetter', 'SlotSetter'],
            },
            {
                name: 'stroke',
                title: '边框颜色',
                setter: 'ColorSetter',
            },
            {
                name: 'delay',
                title: '延迟显示',
                setter: 'NumberSetter',
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
                name: 'default',
                title: '包裹内容',
                setter: 'SlotSetter',
            },
        ],
        supports: {
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '加载中',
            schema: {
                componentName: 'FSpin',
            },
        },
    ],
    group: '原子组件',
    category: '信息反馈',
    priority: 0,
};

export default meta;
