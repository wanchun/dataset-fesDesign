import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '穿梭框',
    componentName: 'FTransfer',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTransfer',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'options',
                title: '选项',
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
                                            name: 'value',
                                            title: '选项值',
                                            setter: ['StringSetter', 'NumberSetter'],
                                        },
                                        {
                                            name: 'label',
                                            title: '选项名',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'disabled',
                                            title: '是否禁用',
                                            setter: ['BoolSetter', 'ExpressionSetter'],
                                        },
                                        {
                                            name: 'checkable',
                                            title: '是否可选',
                                            setter: ['BoolSetter', 'ExpressionSetter'],
                                            defaultValue: true,
                                        },
                                        {
                                            name: 'children',
                                            title: '子项数据',
                                            display: 'block',
                                            setter: {
                                                componentName: 'ArraySetter',
                                                props: {
                                                    infinite: true,
                                                },
                                            },
                                        },
                                    ],
                                },
                            },
                            columns: [
                                {
                                    name: 'value',
                                    title: '选项值',
                                    setter: ['StringSetter', 'NumberSetter'],
                                },
                                {
                                    name: 'label',
                                    title: '选项名',
                                    setter: 'StringSetter',
                                },
                            ],
                        },
                    },
                    'JsonSetter',
                ],
            },
            {
                name: 'twoWay',
                title: '双向模式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'height',
                title: '固定高度	',
                setter: 'NumberSetter',
            },
            {
                name: 'filterable',
                title: '可过滤',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'filter',
                title: '过滤函数',
                description: '自定义过滤函数，参数: \npattern-搜索值\n option-选项',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: 'function(pattern, option) {\n\t return true\n}' },
                },
            },
            {
                name: 'transferLabel',
                title: '标签内容',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    title: '标签内容',
                    name: 'label',
                    value: [],
                },
            },
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'nextValue',
                            type: '(string | number)[]',
                        },
                    ],
                },
            ],
            style: true,
            class: true,
        },
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
