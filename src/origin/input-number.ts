import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '数字输入框',
    componentName: 'FInputNumber',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FInputNumber',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            propType: 'number',
            title: '输入值',
        },
        {
            name: 'min',
            propType: 'number',
            title: '最小值',
        },
        {
            name: 'max',
            propType: 'number',
            title: '最大值',
        },
        {
            name: 'step',
            propType: 'number',
            defaultValue: 1,
            title: '计数器步长',
        },
        {
            name: 'placeholder',
            propType: 'string',
            title: '输入提示',
        },
        {
            name: 'precision',
            propType: 'number',
            title: '输入值精度',
        },
        {
            name: 'disabled',
            propType: 'bool',
            defaultValue: false,
            title: '是否禁用',
        },
    ],
    configure: {
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'val',
                            type: 'number',
                        },
                        {
                            name: 'oldVal',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onFocus',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
                {
                    name: 'onBlur',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
            ],
            style: true,
            class: true,
        },
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'min',
                title: '最小值',
                setter: 'NumberSetter',
            },
            {
                name: 'max',
                title: '最大值',
                setter: 'NumberSetter',
            },
            {
                name: 'precision',
                title: '值精度',
                setter: 'NumberSetter',
            },
            {
                name: 'step',
                title: '计数器步长',
                setter: 'NumberSetter',
                defaultValue: 1,
            },
            {
                name: 'placeholder',
                title: '输入提示',
                setter: 'StringSetter',
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'autofocus',
                title: '自动聚焦',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                type: 'group',
                title: '自定义前缀后缀',
                display: 'block',
                items: [
                    {
                        name: 'prefix',
                        title: '前缀',
                        setter: 'SlotSetter',
                    },
                    {
                        name: 'suffix',
                        title: '后缀',
                        setter: 'SlotSetter',
                    },
                ],
            },
        ],
    },
    group: '原子组件',
    category: '数据录入',
    priority: 3,
};

export default meta;
