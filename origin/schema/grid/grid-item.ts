import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const GridItemMeta: IPublicTypeComponentDescription = {
    title: '栅格子项',
    componentName: 'FGridItem',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FGridItem',
        destructuring: true,
    },
    group: '原子组件',
    category: '布局组件',
    priority: 0,
    props: [
        {
            name: 'flex',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'offset',
            propType: 'number',
        },
        {
            name: 'span',
            propType: 'number',
        },
        {
            name: 'pull',
            propType: 'number',
        },
        {
            name: 'push',
            propType: 'number',
        },
        {
            name: 'order',
            propType: 'number',
        },
    ],
    configure: {
        props: [
            {
                name: 'span',
                title: '占位格数',
                setter: 'NumberSetter',
            },
            {
                name: 'offset',
                title: '左侧间隔',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'pull',
                title: '向左移动',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'push',
                title: '向右移动',
                setter: 'NumberSetter',
                defaultValue: 0,
            },
            {
                name: 'order',
                title: '顺序',
                setter: 'NumberSetter',
            },
            {
                name: 'flex',
                title: '自定义flex',
                setter: ['StringSetter', 'NumberSetter'],
            },
        ],
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: ['FGrid'],
            },
        },
        supports: {
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '栅格子项',
            schema: {
                componentName: 'FGridItem',
            },
        },
    ],
};
