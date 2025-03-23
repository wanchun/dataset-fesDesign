import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const FooterMeta: IPublicTypeComponentDescription = {
    title: '容器底部',
    componentName: 'FFooter',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FFooter',
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
            name: 'embedded',
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
                name: 'embedded',
                title: '反色背景',
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
