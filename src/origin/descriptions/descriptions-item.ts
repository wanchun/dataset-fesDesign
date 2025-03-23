import { FesDesignName, FesDesignVersion } from '../constants';
import type { IPublicTypeComponentDescription } from '@webank/letgo-types';

export const DescriptionsItemMeta: IPublicTypeComponentDescription = {
    title: '描述列表选项',
    componentName: 'FDescriptionsItem',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDescriptionsItem',
        destructuring: true,
    },
    props: [
        {
            name: 'label',
            title: '标签',
            propType: 'string',
        },
        {
            name: 'span',
            title: '占的列数',
            propType: 'number',
            defaultValue: 1,
        },
        {
            name: 'contentStyle',
            title: '内容样式',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object'],
            },
        },
        {
            name: 'labelStyle',
            title: '标签样式',
            propType: {
                type: 'oneOfType',
                value: ['string', 'object'],
            },
        },
    ],
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: ['FDescriptions'],
            },
        },
    },
    snippets: [
        {
            title: '描述列表选项',
            schema: {
                componentName: 'FDescriptionsItem',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
