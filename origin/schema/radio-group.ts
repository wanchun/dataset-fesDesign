import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '单选组',
    componentName: 'FRadioGroup',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FRadioGroup',
        destructuring: true,
    },
    group: '原子组件',
    category: '数据录入',
    priority: 5,
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
            name: 'cancelable',
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
        {
            name: 'optionType',
            propType: 'string',
        },
        {
            name: 'type',
            propType: 'string',
        },
        {
            name: 'size',
            propType: 'string',
        },
        {
            name: 'bordered',
            propType: 'bool',
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
                name: 'cancelable',
                title: '是否可取消',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'options',
                title: '选项配置',
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
                title: '类型配置',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'optionType',
                        title: '选项类型',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        value: 'default',
                                        label: '单选框',
                                    },
                                    {
                                        value: 'button',
                                        label: '按钮',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'default',
                    },
                    {
                        name: 'type',
                        title: '按钮样式',
                        setter: {
                            componentName: 'RadioGroupSetter',
                            props: {
                                options: [
                                    {
                                        value: 'default',
                                        label: '默认',
                                    },
                                    {
                                        value: 'primary',
                                        label: '重要',
                                    },
                                ],
                            },
                        },
                        defaultValue: 'default',
                        condition: (target) => {
                            const val = target.top.getPropValue('optionType');
                            return val === 'button';
                        },
                    },
                    {
                        name: 'size',
                        title: '按钮大小',
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
                                ],
                            },
                        },
                        defaultValue: 'middle',
                        condition: (target) => {
                            const val = target.top.getPropValue('optionType');
                            return val === 'button';
                        },
                    },
                    {
                        name: 'bordered',
                        title: '按钮是否边框',
                        setter: 'BoolSetter',
                        defaultValue: true,
                        condition: (target) => {
                            const val = target.top.getPropValue('optionType');
                            return val === 'button';
                        },
                    },
                ],
            },
        ],
        component: {},
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
