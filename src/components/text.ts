import type { IComponentMetadata } from '../type';

export const textMeta: IComponentMetadata = {
    title: '文本',
    componentName: 'FText',
    description: '基础文本组件，用于在用户界面中展示各种类型的文本内容。支持多种样式和排版效果，适用于信息展示、状态提示等场景。',
    scenarios: [
        '信息展示：使用默认类型的文本组件展示普通信息，适用于大多数文本展示场景。',
        '成功提示：使用成功类型的文本组件展示操作成功的反馈信息，增强用户操作信心。',
        '信息提示：使用信息类型的文本组件展示中性信息，传达友好的用户反馈。',
        '警告提示：使用警告类型的文本组件展示警告信息，提醒用户注意潜在风险。',
        '错误提示：使用错误类型的文本组件展示错误信息，明确提示用户操作失败。',
        '加粗文本：使用加粗属性突出重要文本内容，吸引用户注意力。',
        '斜体文本：使用斜体属性强调文本内容，增加视觉层次感。',
        '自定义标签：使用自定义标签属性灵活控制文本的DOM结构，适应不同布局需求。',
        '文本渐变：使用文本渐变属性为文本添加渐变效果，提升视觉吸引力。',
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
            name: 'children',
            title: '文本内容',
            propType: 'string',
            description: '文本组件的内容，可以是纯文本或其他HTML元素',
            required: true,
        },
        {
            name: 'type',
            title: '排印类型',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'default',
                        title: '默认',
                        usage: '常规场景的默认文本样式，适用于一般信息展示',
                    },
                    {
                        name: 'success',
                        title: '成功',
                        usage: '表示成功状态的文本样式，用于操作成功的反馈',
                    },
                    {
                        name: 'info',
                        title: '信息',
                        usage: '用于展示信息的文本样式，传达中性的信息状态',
                    },
                    {
                        name: 'warning',
                        title: '警告',
                        usage: '表示警告状态的文本样式，提醒用户需要注意',
                    },
                    {
                        name: 'danger',
                        title: '错误',
                        usage: '表示错误状态的文本样式，明确提示用户操作失败',
                    },
                ],
            },
            description: '文本的排印类型，影响文本的外观和语义',
            defaultValue: 'default',
        },
        {
            name: 'strong',
            title: '加粗',
            propType: 'bool',
            description: '是否加粗文本',
            defaultValue: false,
        },
        {
            name: 'italic',
            title: '斜体',
            propType: 'bool',
            description: '是否使用斜体文本',
            defaultValue: false,
        },
        {
            name: 'tag',
            title: 'DOM 标签',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'p',
                        title: '段落',
                        usage: '用于段落文本，适合长文本内容',
                    },
                    {
                        name: 'span',
                        title: '内联',
                        usage: '用于内联文本，适合短文本内容',
                    },
                    {
                        name: 'label',
                        title: '标签',
                        usage: '用于标签文本，适合表单标签等场景',
                    },
                ],
            },
            description: '文本的DOM标签，影响文本的HTML结构',
            defaultValue: 'span',
        },
        {
            name: 'gradient',
            title: '文本渐变',
            propType: 'string',
            description: '文本的渐变效果，支持CSS渐变语法',
            defaultValue: '',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '文本的内容，可以是文本或其他元素',
            required: true,
        },
    ],
    exposes: [],
};
