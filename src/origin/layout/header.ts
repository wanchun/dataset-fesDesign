import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const HeaderMeta: IPublicTypeComponentDescription = {
    title: '容器头部',
    componentName: 'FHeader',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FHeader',
        destructuring: true,
    },
    props: [
        {
            name: 'fixed',
            propType: 'bool',
        },
        {
            name: 'bordered',
            propType: 'bool',
        },
        {
            name: 'inverted',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                name: 'fixed',
                title: '浮动模式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'bordered',
                title: '边框',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'inverted',
                title: '深色',
                setter: 'BoolSetter',
                defaultValue: false,
            },
        ],
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: 'FLayout',
            },
        },
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [],
    group: '原子组件',
    category: '布局组件',
    priority: 0,
};
