import { FesDesignName, FesDesignVersion } from '../constants';

export const StepsMeta = {
    title: '步骤条',
    componentName: 'FSteps',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FSteps',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model:current',
            propType: 'number',
        },
        {
            name: 'status',
            propType: 'string',
        },
        {
            name: 'vertical',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                name: 'v-model:current',
                title: '当前步骤',
                setter: 'VariableSetter',
            },
            {
                name: 'status',
                title: '当前步骤状态',
                setter: {
                    componentName: 'SelectSetter',
                    props: {
                        options: [
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
                defaultValue: 'process',
            },
            {
                name: 'vertical',
                title: '是否垂直方向',
                setter: 'BoolSetter',
                defaultValue: false,
            },
        ],
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: 'FStep',
            },
        },
        supports: {
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '步骤条',
            schema: {
                componentName: 'FSteps',
                props: {},
                children: [
                    {
                        componentName: 'FStep',
                        props: {
                            title: '进行中',
                            description: '我是描述',
                        },
                    },
                    {
                        componentName: 'FStep',
                        props: {
                            title: '待处理',
                            description: '我是描述',
                        },
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '导航组件',
    priority: 0,
};
