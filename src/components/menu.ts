import type { IComponentMetadata } from '../type';

export const menuMeta: IComponentMetadata = {
    title: '菜单',
    componentName: 'FMenu',
    description: '菜单组件，用于在用户界面中展示导航选项。支持水平和垂直两种模式，适用于多种导航场景。',
    scenarios: [
        '网站导航：在网站顶部使用水平模式的菜单，用于展示主要页面链接，提供清晰的用户导航。',
        '侧边栏导航：在页面侧边使用垂直模式的菜单，用于展示详细的页面结构，帮助用户快速定位。',
        '多级菜单：使用多级菜单结构展示复杂的导航层次，适用于具有多个子页面的场景。',
        '折叠菜单：在空间有限的情况下使用折叠菜单，节省页面空间，同时保持导航功能。',
        '手风琴菜单：使用手风琴模式展示菜单项，允许用户展开和折叠不同的菜单组，提升交互体验。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'mode',
            target: 'collapsed',
            effect: '当模式为水平时，折叠属性生效',
            notes: [
                '水平模式下，菜单可以折叠以节省空间',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '选中菜单',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '当前选中的菜单项，支持字符串或数字类型',
        },
        {
            name: 'mode',
            title: '模式',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'horizontal',
                        title: '水平',
                        usage: '适用于顶部导航栏等场景',
                    },
                    {
                        name: 'vertical',
                        title: '垂直',
                        usage: '适用于侧边栏导航等场景',
                    },
                ],
            },
            description: '菜单的展示模式，支持水平和垂直两种模式',
            defaultValue: 'horizontal',
        },
        {
            name: 'collapsed',
            title: '是否折叠',
            propType: 'bool',
            description: '是否折叠菜单，仅在水平模式下生效',
            defaultValue: false,
        },
        {
            name: 'inverted',
            title: '反转样式',
            propType: 'bool',
            description: '是否反转菜单的样式',
            defaultValue: false,
        },
        {
            name: 'defaultExpandAll',
            title: '展开全部菜单',
            propType: 'bool',
            description: '是否默认展开所有菜单项',
            defaultValue: false,
        },
        {
            name: 'expandedKeys',
            title: '展开菜单',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'oneOfType',
                    value: [
                        'string',
                        'number',
                    ],
                },
            },
            description: '当前展开的菜单项，支持字符串或数字类型的数组',
        },
        {
            name: 'accordion',
            title: '手风琴模式',
            propType: 'bool',
            description: '是否启用手风琴模式，即每次只能展开一个菜单组',
            defaultValue: false,
        },
        {
            name: 'options',
            title: '选项配置',
            propType: 'array',
            description: '菜单项的配置数组，支持多级菜单结构',
        },
    ],
    events: [
        {
            name: 'onSelect',
            description: '选中菜单项时触发',
            parameters: [
                {
                    name: 'item',
                    type: '{value: string | number}',
                    description: '选中的菜单项，包含value属性',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'label',
            description: '菜单标题的插槽，允许自定义菜单项的标题',
            required: false,
        },
        {
            name: 'icon',
            description: '菜单图标的插槽，允许自定义菜单项的图标',
            required: false,
        },
    ],
};
