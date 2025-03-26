import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '菜单',
    componentName: 'FMenu',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FMenu',
        destructuring: true,
    },
    group: '原子组件',
    category: '导航组件',
    priority: 0,
    props: [
        {
            name: 'v-model',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'mode',
            propType: {
                type: 'oneOf',
                value: ['horizontal', 'vertical'],
            },
        },
        {
            name: 'collapsed',
            propType: 'bool',
        },
        {
            name: 'inverted',
            propType: 'bool',
        },
        {
            name: 'defaultExpandAll',
            propType: 'bool',
        },
        {
            name: 'expandedKeys',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: ['string', 'number'],
                },
            },
        },
        {
            name: 'accordion',
            propType: 'bool',
        },
        {
            name: 'options',
            propType: 'array',
        },
    ],
    configure: {
        props: [
            {
                name: 'v-model',
                title: '选中菜单',
                setter: 'VariableSetter',
            },
            {
                name: 'v-model:expandedKeys',
                title: '展开菜单',
                setter: 'VariableSetter',
            },
            {
                name: 'options',
                title: '选项配置',
                display: 'block',
                setter: [
                    'JsonSetter',
                    {
                        componentName: 'ArraySetter',
                        props: {
                            itemSetter: {
                                componentName: 'ObjectSetter',
                                props: {
                                    items: [
                                        {
                                            name: 'label',
                                            title: '菜单标题',
                                            setter: ['StringSetter', 'SlotSetter'],
                                        },
                                        {
                                            name: 'value',
                                            title: '菜单值',
                                            setter: 'StringSetter',
                                        },
                                        {
                                            name: 'icon',
                                            title: '菜单icon',
                                            setter: 'SlotSetter',
                                        },
                                        {
                                            name: 'children',
                                            title: '子菜单',
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
                                    name: 'label',
                                    title: '菜单标题',
                                    setter: ['StringSetter', 'SlotSetter'],
                                },
                                {
                                    name: 'value',
                                    title: '菜单值',
                                    setter: 'StringSetter',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                name: 'mode',
                title: '模式',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                value: 'horizontal',
                                label: '水平',
                            },
                            {
                                value: 'vertical',
                                label: '垂直',
                            },
                        ],
                    },
                },
                defaultValue: 'horizontal',
            },
            {
                name: 'collapsed',
                title: '是否折叠',
                setter: 'BoolSetter',
                defaultValue: false,
                condition: (target) => {
                    const val = target.top.getPropValue('mode');
                    return val === 'horizontal';
                },
            },
            {
                name: 'inverted',
                title: '反转样式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'defaultExpandAll',
                title: '展开全部菜单',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'accordion',
                title: '手风琴模式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
        ],
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onSelect',
                    params: [
                        {
                            name: 'item',
                            type: '{value: string | number}',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '菜单',
            schema: {
                componentName: 'FMenu',
                props: {
                    options: [
                        {
                            label: '华中地区',
                            value: '1.0',
                            children: [
                                {
                                    value: '1.1',
                                    label: '湖南',
                                },
                                {
                                    value: '1.2',
                                    label: '湖北',
                                },
                            ],
                        },
                        {
                            label: '华南地区',
                            value: '2.0',
                            children: [
                                {
                                    value: '2.1',
                                    label: '广东',
                                },
                                {
                                    value: '2.2',
                                    label: '广西',
                                },
                            ],
                        },
                        {
                            value: '3',
                            label: '北京',
                        },
                    ],
                },
            },
        },
    ],
};

export default meta;
