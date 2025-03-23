import { FesDesignName, FesDesignVersion } from '../constants';
import type { IPublicTypeComponentDescription } from '@webank/letgo-types';

export const CollapseItemMeta: IPublicTypeComponentDescription = {
    title: '折叠面板选项',
    componentName: 'FCollapseItem',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCollapseItem',
        destructuring: true,
    },
    props: [
        {
            name: 'name',
            title: '标识符',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
        },
        {
            name: 'disabled',
            title: '禁用',
            propType: 'bool',
            defaultValue: false,
        },
    ],
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: ['FCollapse'],
            },
        },
    },
    snippets: [
        {
            title: '折叠面板选项',
            schema: {
                componentName: 'FCollapseItem',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
