import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文本输入',
    componentName: 'FInput',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FInput',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model',
            propType: 'string',
        },
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'clearable',
            propType: 'bool',
        },
        {
            name: 'maxlength',
            propType: 'number',
        },
        {
            name: 'placeholder',
            propType: 'string',
        },
        {
            name: 'showPassword',
            propType: 'bool',
        },
        {
            name: 'rows',
            propType: 'number',
        },
        {
            name: 'showWordLimit',
            propType: 'bool',
        },
        {
            name: 'autosize',
            propType: {
                type: 'oneOfType',
                value: ['bool', 'object'],
            },
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
                name: 'maxlength',
                title: '最大长度',
                setter: 'NumberSetter',
            },
            {
                name: 'placeholder',
                title: '输入提示',
                setter: 'StringSetter',
                defaultValue: '请输入',
            },
            {
                name: 'rows',
                title: '行数',
                setter: 'NumberSetter',
                defaultValue: 2,
                condition: (target) => {
                    const val = target.top.getPropValue('type');
                    return val === 'textarea';
                },
            },
            {
                name: 'autosize',
                title: '高度自适应',
                setter: {
                    componentName: 'BoolSetter',
                    props: {
                        extraSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                                items: [
                                    {
                                        name: 'minRows',
                                        title: '最小行数',
                                        setter: 'NumberSetter',
                                    },
                                    {
                                        name: 'maxRows',
                                        title: '最大行数',
                                        setter: 'NumberSetter',
                                    },
                                ],
                            },
                        },
                    },
                },
                defaultValue: false,
                condition: (target) => {
                    const val = target.top.getPropValue('type');
                    return val === 'textarea';
                },
            },
            {
                name: 'resize',
                title: '缩放',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                label: '水平方向',
                                value: 'horizontal',
                            },
                            {
                                label: '垂直方向',
                                value: 'vertical',
                            },
                            {
                                label: '水平垂直方向',
                                value: 'both',
                            },
                            {
                                label: '禁止',
                                value: 'none',
                            },
                        ],
                    },
                },
                condition: (target) => {
                    const val = target.top.getPropValue('type');
                    return val === 'textarea';
                },
            },
            {
                name: 'showWordLimit',
                title: '是否统计',
                description: '开启时会显示输入数字统计',
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
                name: 'autofocus',
                title: '自动聚焦',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'clearable',
                title: '可清空',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'showPassword',
                title: '密码图标',
                setter: 'BoolSetter',
                condition(target) {
                    return target.top.getPropValue('type') === 'password';
                },
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
                    {
                        name: 'prepend',
                        title: '前置内容',
                        setter: 'SlotSetter',
                    },
                    {
                        name: 'append',
                        title: '后置内容',
                        setter: 'SlotSetter',
                    },
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
                            type: 'string',
                        },
                    ],
                },
                {
                    name: 'onInput',
                    params: [
                        {
                            name: 'value',
                            type: 'string',
                        },
                    ],
                },
                {
                    name: 'onKeydown',
                    params: [
                        {
                            name: 'event',
                            type: 'KeyboardEvent',
                        },
                    ],
                },
                {
                    name: 'onClear',
                    params: [],
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
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
