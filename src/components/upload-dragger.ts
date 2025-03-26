import type { IComponentMetadata } from '../type';

export const uploadDraggerMeta: IComponentMetadata = {
    title: '拖拽上传容器',
    componentName: 'FUploadDragger',
    description: '拖拽上传容器组件，用于在用户界面中实现文件拖拽上传功能。支持自定义内容，适用于文件上传、图片上传等场景。',
    scenarios: [
        '文件上传：在文件管理系统中使用拖拽上传容器，方便用户快速上传文件，提升操作效率。',
        '图片上传：在图片管理系统中使用拖拽上传容器，支持用户拖拽图片进行上传，简化操作流程。',
        '批量上传：在需要批量上传文件的场景中使用拖拽上传容器，支持一次性拖拽多个文件进行上传。',
        '数据导入：在数据导入功能中使用拖拽上传容器，支持用户拖拽数据文件进行导入，提高数据处理的便捷性。',
        '多媒体上传：在多媒体管理系统中使用拖拽上传容器，支持用户拖拽音频、视频等多媒体文件进行上传。',
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
            title: '内容',
            propType: 'string',
            description: '拖拽上传容器的内容，可以是文本或其他元素',
        },
    ],
    events: [],
    slots: [],
};
