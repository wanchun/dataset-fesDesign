import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '间距',
    componentName: 'FSpace',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSpace',
        destructuring: true,
    },
    props: [
        {
            name: 'align',
            propType: 'string',
        },
        {
            name: 'justify',
            propType: 'string',
        },
        {
            name: 'size',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'inline',
            propType: 'bool',
        },
        {
            name: 'vertical',
            propType: 'bool',
        },
        {
            name: 'wrap',
            propType: 'bool',
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
                name: 'vertical',
                title: '垂直方向',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'justify',
                title: '主轴对齐',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: 'start - 左对齐',
                                value: 'start',
                            },
                            {
                                label: 'end - 右对齐',
                                value: 'end',
                            },
                            {
                                label: 'center - 居中',
                                value: 'center',
                            },
                            {
                                label: 'space-around - 平均分布',
                                value: 'space-around',
                            },
                            {
                                label: 'space-between - 两端对齐',
                                value: 'space-between',
                            },
                        ],
                    },
                },
                defaultValue: 'start',
                condition: (target) => {
                    return !target.top.getPropValue('vertical');
                },
            },
            {
                name: 'justify',
                title: '主轴对齐',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: 'start - 上对齐',
                                value: 'start',
                            },
                            {
                                label: 'end - 下对齐',
                                value: 'end',
                            },
                            {
                                label: 'center - 居中',
                                value: 'center',
                            },
                            {
                                label: 'space-around - 平均分布',
                                value: 'space-around',
                            },
                            {
                                label: 'space-between - 两端对齐',
                                value: 'space-between',
                            },
                        ],
                    },
                },
                defaultValue: 'start',
                condition: (target) => {
                    return !!target.top.getPropValue('vertical');
                },
            },
            {
                name: 'align',
                title: '交叉轴对齐',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: 'start - 上对齐',
                                value: 'start',
                            },
                            {
                                label: 'end - 下对齐',
                                value: 'end',
                            },
                            {
                                label: 'center - 居中对齐',
                                value: 'center',
                            },
                            {
                                label: 'baseline - 基线对齐',
                                value: 'baseline',
                            },
                            {
                                label: 'stretch - 铺满',
                                value: 'stretch',
                            },
                        ],
                    },
                },
                condition: (target) => {
                    return !target.top.getPropValue('vertical');
                },
            },
            {
                name: 'align',
                title: '交叉轴对齐',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: 'start - 左对齐',
                                value: 'start',
                            },
                            {
                                label: 'end - 右对齐',
                                value: 'end',
                            },
                            {
                                label: 'center - 居中对齐',
                                value: 'center',
                            },
                            {
                                label: 'baseline - 基线对齐',
                                value: 'baseline',
                            },
                            {
                                label: 'stretch - 铺满',
                                value: 'stretch',
                            },
                        ],
                    },
                },
                condition: (target) => {
                    return !!target.top.getPropValue('vertical');
                },
            },
            {
                name: 'size',
                title: '间距大小',
                setter: [
                    {
                        componentName: 'SelectSetter',
                        props: {
                            options: [
                                {
                                    label: '超小',
                                    value: 'xsmall',
                                },
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
                    'NumberSetter',
                ],
                defaultValue: 'small',
            },
            {
                name: 'inline',
                title: '行内元素',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'wrap',
                title: '超出换行',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'itemStyle',
                title: '节点样式',
                display: 'popup',
                setter: 'StyleSetter',
            },
        ],
    },
    snippets: [
        {
            title: '间距',
            schema: {
                componentName: 'FSpace',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '布局组件',
    priority: 0,
};

export default meta;
