import type { IComponentMetadata } from '../type';

export const spaceMeta: IComponentMetadata = {
    title: '间距',
    componentName: 'FSpace',
    description: '间距组件用于在布局中控制子元素之间的间距，支持水平和垂直方向，适用于各种布局场景。通过设置间距大小、对齐方式等属性，可以灵活调整子元素的排列和分布。',
    scenarios: [
        '表单布局：在表单中使用间距组件控制表单项之间的间距，确保表单布局整齐美观。',
        '工具栏布局：在工具栏中使用间距组件控制按钮和图标之间的间距，保持工具栏的紧凑性和一致性。',
        '卡片布局：在卡片列表中使用间距组件控制卡片之间的间距，增强页面的层次感和可读性。',
        '导航栏布局：在导航栏中使用间距组件控制导航项之间的间距，提供清晰的导航结构。',
        '网格布局：在网格布局中使用间距组件控制网格项之间的间距，确保网格布局的均匀性和美观性。',
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
            name: 'align',
            title: '交叉轴对齐',
            propType: 'string',
            description: '子元素在交叉轴上的对齐方式，支持多种对齐选项',
            defaultValue: 'start',
        },
        {
            name: 'justify',
            title: '主轴对齐',
            propType: 'string',
            description: '子元素在主轴上的对齐方式，支持多种对齐选项',
            defaultValue: 'start',
        },
        {
            name: 'size',
            title: '间距大小',
            propType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '子元素之间的间距大小，可以是预定义的大小值或具体的像素值',
            defaultValue: 'small',
        },
        {
            name: 'inline',
            title: '行内元素',
            propType: 'bool',
            description: '是否将间距组件作为行内元素显示',
            defaultValue: false,
        },
        {
            name: 'vertical',
            title: '垂直方向',
            propType: 'bool',
            description: '是否将子元素垂直排列',
            defaultValue: false,
        },
        {
            name: 'wrap',
            title: '超出换行',
            propType: 'bool',
            description: '当子元素超出容器宽度时是否换行',
            defaultValue: true,
        },
    ],
    events: [
        {
            name: 'onClick',
            description: '点击间距组件时触发',
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
            name: 'default',
            description: '间距组件的内容，可以是任意子元素',
            required: true,
        },
    ],
};
