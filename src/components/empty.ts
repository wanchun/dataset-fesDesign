import type { IComponentMetadata } from '../type';

export const emptyMeta: IComponentMetadata = {
    title: '空数据',
    componentName: 'FEmpty',
    description: '空数据时的占位提示组件，用于在数据为空时提供友好的用户提示，支持自定义图像和描述信息。',
    scenarios: [
        '数据加载中：在数据加载过程中显示空数据提示，告知用户数据正在加载。',
        '无数据展示：当查询结果为空时，使用空数据提示组件，避免页面空白，提升用户体验。',
        '自定义图像：通过自定义图像功能，展示与业务场景相关的图标或图片，增强提示的视觉效果。',
        '自定义描述：通过自定义描述功能，提供更具体的提示信息，帮助用户理解当前状态。',
        '样式定制：通过自定义样式功能，调整空数据提示的布局和外观，使其与页面风格保持一致。',
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
            source: 'imageSrc',
            target: 'image',
            effect: '当imageSrc存在时，优先使用imageSrc指定的图像，忽略image插槽的内容。',
            notes: [
                'imageSrc和image属性存在冲突时，优先使用imageSrc。',
            ],
        },
        {
            source: 'description',
            target: 'descriptionSlot',
            effect: '当description存在时，优先使用description指定的描述信息，忽略descriptionSlot插槽的内容。',
            notes: [
                'description和descriptionSlot属性存在冲突时，优先使用description。',
            ],
        },
    ],
    props: [
        {
            name: 'description',
            title: '描述信息',
            propType: 'string',
            description: '空数据提示的描述信息，用于向用户解释当前状态。',
        },
        {
            name: 'imageSrc',
            title: '图像地址',
            propType: 'string',
            description: '空数据提示的图像地址，支持本地或远程图片资源。',
        },
        {
            name: 'imageStyle',
            title: '自定义样式',
            propType: 'object',
            description: '自定义空数据提示图像的样式，支持CSS属性。',
        },
    ],
    events: [],
    slots: [
        {
            name: 'image',
            description: '自定义空数据提示的图像，可以是图标、图片或其他元素。',
            required: false,
        },
        {
            name: 'description',
            description: '自定义空数据提示的描述信息，可以是文本或其他元素。',
            required: false,
        },
    ],
    exposes: [],
};
