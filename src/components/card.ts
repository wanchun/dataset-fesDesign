import type { IComponentMetadata } from '../type';

export const cardMeta: IComponentMetadata = {
    title: '卡片',
    componentName: 'FCard',
    description: '基础卡片组件，用于在用户界面中展示信息内容。支持多种尺寸、边框、分割线和阴影效果，适用于信息展示、内容分组等场景。',
    scenarios: [
        '信息展示：使用卡片组件展示详细信息，如用户信息、产品信息等，保持界面整洁和结构化。',
        '内容分组：在复杂布局中使用卡片组件对相关内容进行分组，提高信息的可读性和组织性。',
        '数据统计：在仪表盘或数据面板中使用卡片组件展示统计数据，如KPI、图表等，突出重要信息。',
        '图片展示：使用卡片组件展示图片集或画廊，结合阴影效果提升视觉层次感。',
        '表单布局：在表单中使用卡片组件对相关输入项进行分组，提高表单的可读性和用户体验。',
        '悬浮效果：在需要交互的场景中使用hover阴影效果，增强卡片的交互性和视觉反馈。',
        '无边框设计：在简洁风格的设计中使用无边框卡片，保持界面干净和现代感。',
        '大尺寸卡片：在需要突出显示的场景中使用大尺寸卡片，如公告、通知等，吸引用户注意。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [],
    props: [
        {
            name: 'header',
            title: '标题',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'node',
                ],
            },
            description: '卡片的标题，可以是字符串或React节点',
        },
        {
            name: 'size',
            title: '卡片尺寸',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如侧边栏或列表中的卡片',
                    },
                    {
                        name: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        name: 'large',
                        title: '大',
                        usage: '需要突出显示的场景，如公告或通知',
                    },
                ],
            },
            description: '卡片的尺寸大小，影响卡片的展示尺寸',
            defaultValue: 'middle',
        },
        {
            name: 'bordered',
            title: '显示边框',
            propType: 'bool',
            description: '是否显示卡片的边框',
            defaultValue: true,
        },
        {
            name: 'divider',
            title: '显示分割线',
            propType: 'bool',
            description: '是否显示卡片内容之间的分割线',
            defaultValue: true,
        },
        {
            name: 'shadow',
            title: '阴影效果',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'always',
                        title: '总是',
                        usage: '需要突出卡片的场景，如重要通知或公告',
                    },
                    {
                        name: 'never',
                        title: '没有',
                        usage: '简洁风格的设计，保持界面干净',
                    },
                    {
                        name: 'hover',
                        title: '悬浮显示',
                        usage: '需要交互的场景，增强卡片的交互性和视觉反馈',
                    },
                ],
            },
            description: '卡片的阴影效果，影响卡片的视觉层次感',
            defaultValue: 'always',
        },
        {
            name: 'bodyStyle',
            title: '内容样式',
            propType: 'object',
            description: '卡片内容的样式对象，用于自定义卡片内容的样式',
        },
    ],
    events: [
        {
            name: 'onClick',
            description: '点击卡片时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '点击事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'header',
            description: '卡片的标题内容，可以是字符串或其他元素',
            required: false,
        },
        {
            name: 'default',
            description: '卡片的主体内容，可以是文本、图片或其他元素',
            required: true,
        },
    ],
};
