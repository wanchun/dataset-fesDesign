import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '单选框',
    componentName: 'FRadio',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FRadio',
        destructuring: true,
    },
    group: '原子组件',
    category: '数据录入',
    priority: 4,
    props: [
        {
            name: 'v-model',
            propType: 'bool',
        },
        {
            name: 'value',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number', 'bool'],
            },
        },
        {
            name: 'label',
            propType: 'string',
        },
        {
            name: 'disabled',
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
                name: 'value',
                title: '内容',
                setter: ['StringSetter', 'NumberSetter'],
                condition: (target) => {
                    return target.top.getNode().parent.componentName === 'FRadioGroup';
                },
            },
            {
                name: 'label',
                title: '描述',
                setter: 'StringSetter',
            },
            {
                name: 'disabled',
                title: '禁用',
                setter: 'BoolSetter',
                defaultValue: false,
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
