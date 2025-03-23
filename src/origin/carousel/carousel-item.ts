import { FesDesignName, FesDesignVersion } from '../constants';
import type { IPublicTypeComponentDescription } from '@webank/letgo-types';

export const CarouselItemMeta: IPublicTypeComponentDescription = {
    title: '走马灯选项',
    componentName: 'FCarouselItem',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCarouselItem',
        destructuring: true,
    },
    props: [],
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: ['FCarousel'],
            },
        },
    },
    snippets: [
        {
            title: '走马灯选项',
            schema: {
                componentName: 'FCarouselItem',
                children: [],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
