import type { IComponentMetadata } from '../type';

export const draggableMeta: IComponentMetadata = {
    title: '拖拽',
    componentName: 'FDraggable',
    description: '拖拽组件，用于实现元素的拖拽和放置功能。支持自定义拖拽项、禁止拖拽、禁止放置等配置，适用于列表排序、容器间拖拽等场景。',
    scenarios: [
        '列表排序：在列表中使用拖拽组件，允许用户通过拖拽调整列表项的顺序，提升用户体验。',
        '容器间拖拽：在多个容器间使用拖拽组件，允许用户将元素从一个容器拖拽到另一个容器，实现数据交换。',
        '表单布局：在表单设计器中使用拖拽组件，允许用户通过拖拽调整表单元素的布局，简化表单设计流程。',
        '看板管理：在看板系统中使用拖拽组件，允许用户通过拖拽任务卡片在不同状态列之间移动，提升任务管理效率。',
        '资源分配：在资源管理系统中使用拖拽组件，允许用户通过拖拽分配资源到不同的项目或团队，简化资源分配流程。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: 'droppable',
            effect: '当禁止拖拽时，自动禁止放置',
            notes: [
                '确保在禁止拖拽的情况下，元素也不能被放置到其他容器中',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'string',
            description: '绑定拖拽组件的变量，用于存储拖拽项的数据',
        },
        {
            name: 'tag',
            title: '根标签',
            propType: 'string',
            description: '指定组件的根DOM类型，默认为div',
            defaultValue: 'div',
        },
        {
            name: 'disabled',
            title: '禁止拖拽',
            propType: 'bool',
            description: '是否禁止拖拽',
            defaultValue: false,
        },
        {
            name: 'droppable',
            title: '禁止放置',
            propType: 'bool',
            description: '其他容器的项是否可以放置到当前容器，设置为droppable的容器都可以相互拖拽放置',
            defaultValue: false,
        },
        {
            name: 'beforeDragend',
            title: '拖拽结束前',
            propType: 'func',
            description: '拖拽结束之前回调，返回false、Promise.resolve(false)、Promise.reject()时，拖拽会恢复之前的状态',
        },
    ],
    events: [
        {
            name: 'onDragstart',
            description: '拖拽开始时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '拖拽开始事件对象',
                },
                {
                    name: 'item',
                    type: 'object',
                    description: '当前拖拽项的数据',
                },
                {
                    name: 'index',
                    type: 'number',
                    description: '当前拖拽项的索引',
                },
            ],
        },
        {
            name: 'onDragend',
            description: '拖拽结束时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '拖拽结束事件对象',
                },
                {
                    name: 'item',
                    type: 'object',
                    description: '当前拖拽项的数据',
                },
                {
                    name: 'index',
                    type: 'number',
                    description: '当前拖拽项的索引',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '拖拽项的自定义内容，支持通过slotProps访问当前项的数据',
            required: false,
            scope: {
                slotProps: 'object',
            },
        },
    ],
};
