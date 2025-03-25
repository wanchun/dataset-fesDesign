import type { IComponentMetadata } from '../type';

export const configProviderMeta: IComponentMetadata = {
    title: '全局配置',
    componentName: 'FConfigProvider',
    description: '全局配置组件，用于设置应用级默认参数，包括主题定制、语言包配置、组件默认行为等全局性设置。作为应用的根组件，为整个组件树提供统一的配置能力。',
    scenarios: [
        '主题定制：通过themeOverrides属性覆盖组件库默认主题样式，实现应用级的样式统一',
        '多语言支持：通过locale属性配置组件库的国际化语言包，支持多语言切换',
        '容器挂载：通过getContainer指定弹出类组件的挂载节点，统一管理弹窗层级',
        '全局样式：统一配置组件库的基础样式，如字体、颜色、间距等',
        '默认行为：设置组件的默认交互行为，如加载状态、动画效果等',
    ],
    parent: {
        types: ['container'],
    },
    children: ['*'],
    propRelations: [
        {
            source: 'themeOverrides',
            target: 'locale',
            effect: '主题样式变更时需要同步调整语言包中的样式相关词汇',
            notes: [
                '仅影响包含样式描述的国际化词条',
                '建议主题切换时同步更新相关的语言描述',
            ],
        },
    ],
    props: [
        {
            name: 'themeOverrides',
            title: '主题覆盖',
            propType: {
                type: 'exact',
                value: [
                    {
                        name: 'common',
                        title: '通用配置',
                        propType: 'object',
                        description: '组件库通用样式配置，如主色、圆角等',
                    },
                    {
                        name: 'components',
                        title: '组件配置',
                        propType: 'object',
                        description: '各组件的样式变量配置',
                    },
                ],
            },
            description: '覆盖组件库默认主题样式，支持通用配置和组件级配置',
            defaultValue: {},
        },
        {
            name: 'locale',
            title: '语言配置',
            propType: {
                type: 'oneOfType',
                value: ['string', {
                    type: 'exact',
                    value: [
                        {
                            name: 'language',
                            title: '语言代码',
                            propType: 'string',
                            description: '语言包标识符',
                        },
                        {
                            name: 'messages',
                            title: '语言文案',
                            propType: 'object',
                            description: '自定义语言包内容',
                        },
                    ],
                }],
            },
            description: '国际化语言包配置，支持预设语言代码或自定义语言包',
            defaultValue: 'zh-CN',
        },
        {
            name: 'getContainer',
            title: '挂载容器',
            propType: {
                type: 'oneOfType',
                value: ['func', 'string'],
            },
            description: '指定弹出类组件的挂载容器节点，可以是函数或者选择器字符串',
            defaultValue: '() => document.body',
        },
    ],
};
