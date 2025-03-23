import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '多选框组',
    componentName: 'FCheckboxGroup',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCheckboxGroup',
        destructuring: true,
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
    props: [
        {
            name: 'v-model',
            propType: 'array',
        },
        {
            name: 'vertical',
            propType: 'bool',
        },
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'options',
            propType: 'array',
        },
        {
            name: 'valueField',
            propType: 'string',
        },
        {
            name: 'labelField',
            propType: 'string',
        },
    ],
    configure: {
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'vertical',
                title: '垂直排列',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'options',
                title: '选项配置',
                extraProps: {
                    display: 'block',
                },
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
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'string | number | boolean',
                        },
                    ],
                },
            ],
            class: true,
            style: true,
        },
    },
};

export default meta;
