import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '日历',
    componentName: 'FCalendar',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCalendar',
        destructuring: true,
    },
    configure: {
        props: [
            {
                name: 'v-model',
                title: '选中日期',
                setter: 'VariableSetter',
            },
            {
                name: 'v-model:mode',
                title: '显示模式',
                setter: [
                    {
                        componentName: 'RadioGroupSetter',
                        props: {
                            options: [
                                { value: 'date', label: '日期' },
                                { value: 'month', label: '月份' },
                            ],
                        },
                    },
                    'VariableSetter',
                ],
                defaultValue: 'date',
            },
            {
                name: 'splitLine',
                title: '展示分割线',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'height',
                title: '高度',
                setter: ['NumberSetter', 'StringSetter'],
            },
            {
                name: 'shortcuts',
                title: '快捷选项',
                description:
                    '给日历添加快捷日期选项，{ label: string, time: number }[]，\n如 [{ label: "今天", time: Date.now()}, {label: "今天2", time: () => Date.now() }]',
                setter: 'VariableSetter',
            },
            {
                name: 'cellMain',
                title: '单元格主要内容',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'cellMain',
                    value: [],
                },
            },
            {
                name: 'cellAppendant',
                title: '单元格附加内容',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'cellAppendant',
                    value: [],
                },
            },
        ],
        supports: {
            events: [
                {
                    name: 'onCellClick',
                    params: [
                        {
                            name: 'date',
                            type: 'number',
                        },
                        {
                            name: 'mode',
                            type: 'string',
                        },
                    ],
                },
            ],
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '日历',
            schema: {
                componentName: 'FCalendar',
                props: {},
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 2,
};

export default meta;
