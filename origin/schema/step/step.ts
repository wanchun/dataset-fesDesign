import { FesDesignName, FesDesignVersion } from '../constants';

export const StepMeta = {
    title: '步骤条选项',
    componentName: 'FStep',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FStep',
        destructuring: true,
    },
    props: [
        {
            name: 'title',
            propType: {
                type: 'oneOfType',
                value: ['string', 'node'],
            },
        },
        {
            name: 'description',
            propType: {
                type: 'oneOfType',
                value: ['string', 'node'],
            },
        },
        {
            name: 'status',
            propType: 'number',
        },
        {
            name: 'icon',
            propType: 'node',
        },
    ],
    configure: {
        props: [
            {
                name: 'title',
                title: '标题',
                setter: ['StringSetter', 'SlotSetter'],
                defaultValue: '我是标题',
            },
            {
                name: 'description',
                title: '描述',
                setter: ['StringSetter', 'SlotSetter'],
                defaultValue: '我是描述',
            },
            {
                name: 'status',
                title: '状态',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
                            {
                                value: 'wait',
                                label: '待处理',
                            },
                            {
                                value: 'process',
                                label: '处理中',
                            },
                            {
                                value: 'error',
                                label: '处理错误',
                            },
                            {
                                value: 'finish',
                                label: '处理完成',
                            },
                        ],
                    },
                },
            },
            {
                name: 'icon',
                title: '图标',
                setter: {
                    componentName: 'IconSetter',
                    props: {
                        type: 'node',
                    },
                },
            },
        ],
        component: {
            nestingRule: {
                parentWhitelist: 'FSteps',
            },
        },
        supports: {
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '步骤条选项',
            schema: {
                componentName: 'FStep',
                props: {
                    title: '我是标题',
                    description: '我是描述',
                },
            },
        },
    ],
    group: '原子组件',
    category: '导航组件',
    priority: 0,
};
