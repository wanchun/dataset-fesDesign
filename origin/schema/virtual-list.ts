import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '虚拟列表',
    componentName: 'FVirtualList',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FVirtualList',
        destructuring: true,
    },
    group: '原子组件',
    category: '通用组件',
    priority: 0,
    props: [
        {
            name: 'dataSources',
            propType: 'array',
        },
        {
            name: 'dataKey',
            propType: {
                type: 'oneOfType',
                value: ['string', 'func'],
            },
        },
        {
            name: 'keeps',
            propType: 'number',
        },
        {
            name: 'estimateSize',
            propType: 'number',
        },
        {
            name: 'start',
            propType: 'number',
        },
        {
            name: 'offset',
            propType: 'number',
        },
        {
            name: 'direction',
            propType: {
                type: 'oneOf',
                value: ['vertical', 'horizontal'],
            },
        },
        {
            name: 'wrapTag',
            propType: 'string',
        },
        {
            name: 'wrapClass',
            propType: 'string',
        },
        {
            name: 'wrapStyle',
            propType: 'object',
        },
        {
            name: 'height',
            propType: 'number',
        },
        {
            name: 'maxHeight',
            propType: 'number',
        },
        {
            name: 'topThreshold',
            propType: 'number',
        },
        {
            name: 'bottomThreshold',
            propType: 'number',
        },
    ],
    configure: {
        props: [
            {
                name: 'dataSources',
                title: '数据源',
                setter: 'JsonSetter',
            },
            {
                name: 'dataKey',
                title: 'key',
                setter: ['StringSetter', 'FunctionSetter'],
            },
            {
                name: 'direction',
                title: '方向',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '垂直',
                                value: 'vertical',
                            },
                            {
                                label: '水平',
                                value: 'horizontal',
                            },
                        ],
                    },
                },
                defaultValue: 'vertical',
            },
            {
                name: 'keeps',
                title: '真实渲染量',
                setter: 'NumberSetter',
                defaultValue: 30,
            },
            {
                name: 'estimateSize',
                title: '每项平均高度或者宽度',
                setter: 'NumberSetter',
                defaultValue: 50,
            },
            {
                name: 'height',
                title: '固定高度',
                setter: 'NumberSetter',
            },
            {
                name: 'maxHeight',
                title: '最大高度',
                setter: 'NumberSetter',
            },
            {
                name: 'topThreshold',
                title: '触发totop阈值',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'bottomThreshold',
                title: '触发tobottom阈值',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'start',
                title: '开始索引',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'offset',
                title: '偏移',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'wrapTag',
                title: '包裹元素',
                setter: 'StringSetter',
                defaultValue: 'div',
            },
            {
                name: 'wrapClass',
                title: '包裹元素样式类名',
                setter: 'StringSetter',
            },
            {
                name: 'wrapStyle',
                title: '包裹元素样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
            {
                name: 'default',
                title: '子项插槽',
                setter: 'SlotSetter',
            },
        ],
        supports: {
            style: true,
            class: true,
            events: [
                {
                    name: 'onScroll',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onToTop',
                    params: [],
                },
                {
                    name: 'onToBottom',
                    params: [],
                },
                {
                    name: 'onResized',
                    params: [
                        {
                            name: 'id',
                            type: 'string | number',
                        },
                        {
                            name: 'size',
                            type: 'number',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '虚拟列表',
            schema: {
                componentName: 'FVirtualList',
                props: {
                    dataSources: [],
                    dataKey: 'id',
                },
            },
        },
    ],
};

export default meta;
