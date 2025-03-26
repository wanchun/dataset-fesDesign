import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '时间轴',
    description: '通过不同的配置，实现不同效果的时间轴',
    componentName: 'FTimeline',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTimeline',
        destructuring: true,
    },
    configure: {
        props: [
            {
                name: 'data',
                title: '数据',
                display: 'block',
                setter: [
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {
                                    items: [
                                        {
                                            name: 'title',
                                            title: '标题',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'desc',
                                            title: '辅助说明',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'titlePosition',
                                            title: '标题位置',
                                            setter: {
                                                componentName: 'RadioGroupSetter',
                                                props: {
                                                    options: [
                                                        { value: 'start', label: '轴的上方' },
                                                        { value: 'end', label: '轴的下方' },
                                                    ],
                                                },
                                            },
                                        },
                                        {
                                            name: 'icon',
                                            title: '图标',
                                            setter: [
                                                {
                                                    componentName: 'SelectSetter',
                                                    props: {
                                                        options: [
                                                            { value: 'info', label: '重要' },
                                                            { value: 'success', label: '成功' },
                                                            { value: 'warning', label: '警告' },
                                                            { value: 'error', label: '错误' },
                                                        ],
                                                    },
                                                },
                                                'ColorSetter',
                                                {
                                                    componentName: 'FunctionSetter',
                                                    props: {
                                                        placeholder: '({ index }) => <Icon />',
                                                    },
                                                },
                                            ],
                                            defaultValue: 'info',
                                        },
                                    ],
                                },
                            },
                            columns: [
                                {
                                    name: 'title',
                                    title: '标题',
                                    setter: 'StringSetter',
                                },
                                {
                                    name: 'desc',
                                    title: '辅助说明',
                                    setter: 'StringSetter',
                                },
                            ],
                        },
                    },
                    'JsonSetter',
                ],
            },
            {
                name: 'direction',
                title: '方向',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { value: 'column', label: '垂直向下' },
                            { value: 'row', label: '水平向右' },
                            { value: 'row-reverse', label: '水平向左' },
                        ],
                    },
                },
                defaultValue: 'column',
            },
            {
                name: 'titlePosition',
                title: '标题位置',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { value: 'start', label: '轴的上方' },
                            { value: 'end', label: '轴的下方' },
                            { value: 'alternate', label: '上下交叉' },
                        ],
                    },
                },
                defaultValue: 'end',
            },
            {
                name: 'descPosition',
                title: '辅助说明位置',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            { value: 'under', label: '标题下方' },
                            { value: 'inline', label: '标题同行' },
                            { value: 'opposite', label: '标题不同侧' },
                        ],
                    },
                },
                defaultValue: 'under',
            },
            {
                name: 'titleClass',
                title: '标题样式类',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: 'my-class',
                    },
                },
            },
            {
                name: 'titleWidth',
                title: '标题宽度',
                setter: 'StringSetter',
                defaultValue: '50%',
                condition(target) {
                    const direction = target.top.getPropValue('direction')
                    const descPosition = target.top.getPropValue('descPosition')
                    const titlePosition = target.top.getPropValue('titlePosition')
                    return (!direction || direction === 'column') && titlePosition === 'start' && descPosition === 'opposite'
                },
            },
            {
                name: 'descClass',
                title: '辅助样式类',
                setter: {
                    componentName: 'StringSetter',
                    props: {
                        placeholder: 'my-class',
                    },
                },
            },
            {
                name: 'title',
                title: '自定义标题',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'title',
                    params: ['slotProps'],
                    value: [],
                },
            },
            {
                name: 'desc',
                title: '自定义辅助说明',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'desc',
                    params: ['slotProps'],
                    value: [],
                },
            },
            {
                name: 'icon',
                title: '自定义轴点图标',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'icon',
                    params: ['slotProps'],
                    value: [],
                },
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '时间轴',
            schema: {
                componentName: 'FTimeline',
                props: {
                    data: [
                        {
                            title: '2015-09-01',
                            desc: 'Create a services site',
                        },
                        {
                            title: '2015-09-01',
                            desc: 'Solve initial network problems',
                        },
                        {
                            title: '2015-09-01',
                            desc: 'Technical testing',
                        },
                    ],
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 3,
};

export default meta;
