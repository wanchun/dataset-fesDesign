import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '骨架屏',
    componentName: 'FSkeleton',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSkeleton',
        destructuring: true,
    },
    props: [
        {
            name: 'text',
            propType: 'bool',
        },
        {
            name: 'round',
            propType: 'bool',
        },
        {
            name: 'circle',
            propType: 'bool',
        },
        {
            name: 'height',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'width',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
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
            name: 'repeat',
            propType: 'number',
        },
        {
            name: 'animated',
            propType: 'bool',
        },
        {
            name: 'sharp',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                name: 'sharp',
                title: '直角',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'text',
                title: '文本',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'round',
                title: '圆角',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'circle',
                title: '圆形',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'height',
                title: '高度',
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'width',
                title: '宽度',
                setter: ['NumberSetter', 'StringSetter'],
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
                name: 'repeat',
                title: '重复次数',
                setter: 'NumberSetter',
                defaultValue: 1,
            },
            {
                name: 'animated',
                title: '启用动画',
                setter: 'BoolSetter',
                defaultValue: true,
            },
        ],
    },
    snippets: [
        {
            title: '骨架屏',
            schema: {
                componentName: 'FSkeleton',
                props: {
                    text: true,
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息反馈',
    priority: 0,
};

export default meta;
