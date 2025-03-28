import type { IComponentMetadata } from '../type';

export const calendarMeta: IComponentMetadata = {
    title: '日历',
    componentName: 'FCalendar',
    description: '日历组件用于按照日期规划日程并查看日程安排，支持日期和月份两种显示模式，可自定义单元格内容和快捷选项。',
    scenarios: [
        '个人日程管理：用于展示个人每日/每月日程安排，支持快速跳转到特定日期',
        '项目计划排期：在项目管理中可视化展示项目里程碑和关键日期',
        '会议预约系统：允许用户选择可用日期进行会议预约',
        '数据统计展示：按日期展示业务数据统计结果，如销售数据、访问量等',
        '节假日管理：标记和展示节假日信息，支持自定义节假日样式',
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
            source: 'mode',
            target: 'cellMain',
            effect: '显示模式改变时单元格内容需要相应调整',
            notes: [
                'date模式下显示完整日期',
                'month模式下只显示月份',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '选中日期',
            valueType: 'number',
            description: '当前高亮标记的日期，使用Unix时间戳格式',
            defaultValue: '当前日期',
            example: 1672531200000,
        },
        {
            name: 'v-model:mode',
            title: '显示模式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'date',
                        title: '日期',
                        usage: '显示完整日期视图',
                    },
                    {
                        value: 'month',
                        title: '月份',
                        usage: '只显示月份视图',
                    },
                ],
            },
            description: '日历的显示模式，支持日期和月份两种视图',
            defaultValue: 'date',
            example: 'date',
        },
        {
            name: 'splitLine',
            title: '展示分割线',
            valueType: 'bool',
            description: '是否显示单元格之间的分割线',
            defaultValue: true,
            example: true,
        },
        {
            name: 'height',
            title: '高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    'string',
                ],
            },
            description: '日历组件的高度，支持数字或CSS字符串格式',
            example: 500,
        },
        {
            name: 'shortcuts',
            title: '快捷选项',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'label',
                            title: '标签',
                            valueType: 'string',
                            example: '今天',
                        },
                        {
                            name: 'time',
                            title: '时间',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'number',
                                    {
                                        type: 'func',
                                        returnType: 'number',
                                    },
                                ],
                            },
                            example: 'Date.now()',
                        },
                    ],
                },
            },
            description: '快捷日期选项数组，支持静态时间戳或返回时间戳的函数',
            defaultValue: [],
            example: '[{ label: \'今天\', time: Date.now() }]',
        },
    ],
    events: [
        {
            name: 'cellClick',
            description: '点击日历单元格时触发',
            parameters: [
                {
                    name: 'date',
                    type: 'number',
                    description: '点击的日期时间戳',
                },
                {
                    name: 'mode',
                    type: 'string',
                    description: '当前显示模式(date/month)',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'cellMain',
            description: '单元格主要内容，用于自定义日期/月份的显示',
            required: false,
            scope: {
                date: 'number',
                mode: 'string',
            },
        },
        {
            name: 'cellAppendant',
            description: '单元格附加内容，用于在日期下方显示额外信息',
            required: false,
            scope: {
                date: 'number',
                mode: 'string',
            },
        },
    ],
    templates: [
        {
            input: '基础日历',
            output: '<!-- correct -->\n[场景说明] 基本日历展示，使用默认配置\n[代码实现]\n<template>\n  <FCalendar />\n</template>\n[最佳实践] 适用于简单的日期展示需求',
        },
        {
            input: '带快捷选项的日历',
            output: '<!-- correct -->\n[场景说明] 添加常用日期快捷选项\n[代码实现]\n<template>\n  <FCalendar \n    :shortcuts="[\n      { label: \'今天\', time: Date.now() },\n      { label: \'下周一\', time: getNextMonday() }\n    ]"\n  />\n</template>\n[最佳实践] 提供常用日期快速访问功能',
        },
        {
            input: '月份视图日历',
            output: '<!-- correct -->\n[场景说明] 按月显示日历\n[代码实现]\n<template>\n  <FCalendar v-model:mode="month" />\n</template>\n[最佳实践] 适用于需要按月查看的场景',
        },
        {
            input: '自定义单元格内容',
            output: '<!-- correct -->\n[场景说明] 自定义日期单元格显示\n[代码实现]\n<template>\n  <FCalendar>\n    <template #cellMain="{ date }">\n      <div>{{ formatDate(date) }}</div>\n    </template>\n  </FCalendar>\n</template>\n[最佳实践] 灵活定制日期显示样式',
        },
        {
            input: '标记特殊日期',
            output: '<!-- correct -->\n[场景说明] 标记节假日或特殊日期\n[代码实现]\n<template>\n  <FCalendar>\n    <template #cellAppendant="{ date }">\n      <FTag v-if="isHoliday(date)">休</FTag>\n    </template>\n  </FCalendar>\n</template>\n[最佳实践] 直观展示特殊日期',
        },
        {
            input: '错误的v-model类型',
            output: '<!-- error -->\n[错误分析] v-model应该使用时间戳数字类型\n[正确代码]\n<template>\n  <FCalendar v-model="1672531200000" />\n</template>\n[注意事项] 确保传入的时间戳是有效的数字类型',
        },
        {
            input: '缺少必要的slot参数',
            output: '<!-- error -->\n[错误分析] 使用slot时未正确处理scope参数\n[正确代码]\n<template>\n  <FCalendar>\n    <template #cellMain="{ date }">\n      {{ date }}\n    </template>\n  </FCalendar>\n</template>\n[注意事项] 必须使用解构语法获取slot参数',
        },
        {
            input: '如何让日历显示月份模式',
            output: '<!-- correct -->\n[场景说明] 切换日历为月份视图\n[代码实现]\n<template>\n  <FCalendar v-model:mode="month" />\n</template>\n[最佳实践] 使用v-model:mode控制显示模式',
        },
        {
            input: '怎么隐藏分割线',
            output: '<!-- correct -->\n[场景说明] 隐藏日历单元格分割线\n[代码实现]\n<template>\n  <FCalendar :splitLine="false" />\n</template>\n[最佳实践] 通过splitLine属性控制分割线显示',
        },
        {
            input: '日历高度设置无效',
            output: '<!-- error -->\n[错误分析] 高度值类型不正确\n[正确代码]\n<template>\n  <FCalendar :height="500" />\n</template>\n[注意事项] 高度可以是数字(像素)或CSS字符串(如\'500px\')',
        },
    ],
};
