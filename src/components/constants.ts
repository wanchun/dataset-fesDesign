import type { IComponentMetadata } from '../type';

export const constantsMeta: IComponentMetadata = {
    title: 'FesDesign版本信息',
    componentName: 'FesDesignVersion',
    description: '用于管理和获取FesDesign组件库的版本信息，包含库名称和版本号，便于在项目中统一管理和使用。',
    scenarios: [
        '版本管理：在项目中集成FesDesign组件库时，通过该组件获取当前使用的版本信息，确保开发环境的一致性。',
        '依赖检查：在项目构建或部署时，通过该组件验证FesDesign的版本是否符合项目要求，避免版本不兼容问题。',
        '日志记录：在应用程序的日志系统中记录FesDesign的版本信息，便于问题排查和版本追溯。',
        '文档生成：在自动生成的文档中包含FesDesign的版本信息，帮助开发者了解项目依赖的组件库版本。',
        '环境配置：在项目的环境配置文件中使用FesDesign的版本信息，确保不同环境下的依赖版本一致。',
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
            name: 'FesDesignName',
            title: '库名称',
            propType: 'string',
            description: 'FesDesign组件库的名称，用于标识组件库的唯一性',
            defaultValue: '@fesjs/fes-design',
        },
        {
            name: 'FesDesignVersion',
            title: '版本号',
            propType: 'string',
            description: 'FesDesign组件库的版本号，用于标识当前使用的版本',
            defaultValue: '0.8.74',
        },
    ],
    events: [],
    slots: [],
    exposes: [],
};
