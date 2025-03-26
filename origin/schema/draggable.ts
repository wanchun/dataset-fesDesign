import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '拖拽',
    componentName: 'FDraggable',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDraggable',
        destructuring: true,
    },
    configure: {
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'tag',
                title: '根标签',
                description: '指定组件的root dom 类型',
                setter: 'StringSetter',
            },
            {
                name: 'disabled',
                title: '禁止拖拽',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'droppable',
                title: '禁止放置',
                description: '其他容器的项是否可以放置到当前容器，设置为 droppable 的容器都可以相互拖拽放置',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'beforeDragend',
                title: '拖拽结束前',
                description:
                    '拖拽结束之前回调，返回 false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder: '(drag, drop) => Promise.resolve(false)',
                    },
                },
            },
            {
                name: 'item',
                title: '拖拽项自定义',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'default',
                    params: ['slotProps'],
                },
            },
        ],
        component: {
            isContainer: true,
        },
        supports: {
            style: true,
            class: true,
            events: [
                {
                    name: 'onDragstart',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                        {
                            name: 'item',
                            type: 'object',
                        },
                        {
                            name: 'index',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onDragend',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                        {
                            name: 'item',
                            type: 'object',
                        },
                        {
                            name: 'index',
                            type: 'number',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '拖拽容器',
            schema: {
                componentName: 'FDraggable',
                props: {
                    'v-model': {
                        type: 'JSExpression',
                        value: '[1, 2]',
                    },
                    tag: 'div',
                    item: {
                        name: 'default',
                        type: 'JSSlot',
                        params: ['slotProps'],
                        value: [
                            {
                                componentName: 'FText',
                                props: {
                                    children: {
                                        type: 'JSExpression',
                                        value: 'slotProps.item',
                                    },
                                    tag: 'p',
                                },
                            },
                        ],
                    },
                },
            },
        },
    ],
    group: '原子组件',
    category: '通用组件',
    priority: 0,
};

export default meta;
