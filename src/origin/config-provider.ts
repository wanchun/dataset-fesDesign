import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '全局配置',
    componentName: 'FConfigProvider',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FConfigProvider',
        destructuring: true,
    },
    props: [
        {
            name: 'getContainer',
            propType: 'func',
        },
        {
            name: 'locale',
            propType: 'object',
        },
        {
            name: 'themeOverrides',
            propType: 'object',
        },
    ],
    configure: {
        props: [
            {
                name: 'getContainer',
                title: '挂载容器',
                setter: 'FunctionSetter',
            },
            {
                name: 'locale',
                title: '语言',
                setter: 'JsonSetter',
            },
            {
                name: 'themeOverrides',
                title: '主题覆盖',
                setter: 'JsonSetter',
            },
        ],
        component: {
            isContainer: true,
        },
    },
    snippets: [
        {
            title: '全局配置',
            schema: {
                componentName: 'FConfigProvider',
                props: {},
            },
        },
    ],
    group: '原子组件',
    category: '通用组件',
    priority: 0,
};

export default meta;
