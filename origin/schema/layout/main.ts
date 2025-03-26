import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const MainMeta: IPublicTypeComponentDescription = {
    title: '容器主体',
    componentName: 'FMain',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FMain',
        destructuring: true,
    },
    props: [
        {
            name: 'embedded',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
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
