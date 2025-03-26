import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '开关',
    componentName: 'FSwitch',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSwitch',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            title: '当前值',
            propType: {
                type: 'oneOfType',
                value: ['bool', 'string', 'number'],
            },
        },
        {
            name: 'activeValue',
            title: '开启对应值',
            propType: {
                type: 'oneOfType',
                value: ['bool', 'string', 'number'],
            },
            defaultValue: true,
        },
        {
            name: 'inactiveValue',
            title: '关闭的值',
            propType: {
                type: 'oneOfType',
                value: ['bool', 'string', 'number'],
            },
            defaultValue: false,
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
        },
        {
            name: 'size',
            title: '大小',
            propType: {
                type: 'oneOf',
                value: ['normal', 'small'],
            },
            defaultValue: 'normal',
        },
        {
            name: 'beforeChange',
            title: '值发生改变之前的事件钩子',
            propType: 'func',
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
                name: 'activeValue',
                title: '开启对应值',
                defaultValue: true,
                setter: {
                    componentName: 'MixedSetter',
                    props: {
                        setters: [
                            { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
                            { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                            { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
                        ],
                    },
                },
            },
            {
                name: 'inactiveValue',
                title: '关闭的值',
                defaultValue: false,
                setter: {
                    componentName: 'MixedSetter',
                    props: {
                        setters: [
                            { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
                            { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                            { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
                        ],
                    },
                },
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'size',
                title: '大小',
                defaultValue: 'normal',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        dataSource: [
                            { label: 'normal', value: 'normal' },
                            { label: 'small', value: 'small' },
                        ],
                        options: [
                            { label: 'normal', value: 'normal' },
                            { label: 'small', value: 'small' },
                        ],
                    },
                    defaultValue: 'normal',
                },
            },
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'string | [] | object | number | boolean',
                        },
                    ],
                },
            ],
            class: true,
            style: true,
        },
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
