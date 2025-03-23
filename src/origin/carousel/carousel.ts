import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const CarouselMeta: IPublicTypeComponentDescription = {
    title: '走马灯',
    componentName: 'FCarousel',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FCarousel',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                childWhitelist: ['FCarouselItem'],
            },
        },
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'number',
                        },
                        {
                            name: 'preValue',
                            type: 'number',
                        },
                    ],
                },
            ],
        },
    },
    props: [
        {
            name: 'type',
            title: '类型',
            propType: {
                type: 'oneOf',
                value: ['default', 'card'],
            },
            defaultValue: 'default',
        },
        {
            name: 'height',
            title: '高度',
            propType: 'string',
        },
        {
            name: 'trigger',
            title: '指示器触发方式',
            propType: {
                type: 'oneOf',
                value: ['click', 'hover'],
            },
            defaultValue: 'click',
        },
        {
            name: 'autoplay',
            title: '自动切换',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'interval',
            title: '自动切换间隔',
            propType: 'number',
            defaultValue: 3000,
        },
        {
            name: 'loop',
            title: '是否循环',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'pauseOnHover',
            title: '悬浮暂停切换',
            propType: 'bool',
            defaultValue: true,
        },
        {
            name: 'indicatorType',
            title: '指示器类型',
            propType: {
                type: 'oneOf',
                value: ['linear', 'dot'],
            },
            defaultValue: 'linear',
        },
        {
            name: 'indicatorPosition',
            title: '指示器位置',
            propType: {
                type: 'oneOf',
                value: ['default', 'outside', 'none'],
            },
            defaultValue: 'default',
        },
        {
            name: 'indicatorPlacement',
            title: '指示器方向',
            propType: {
                type: 'oneOf',
                value: ['top', 'right', 'bottom', 'left'],
            },
            defaultValue: 'bottom',
        },
        {
            name: 'showArrow',
            title: '箭头显示时机',
            propType: {
                type: 'oneOf',
                value: ['always', 'hover', 'never'],
            },
            defaultValue: 'hover',
        },
        {
            name: 'initialIndex',
            title: '初始索引',
            propType: 'number',
            defaultValue: 0,
        },
    ],
    snippets: [
        {
            title: '走马灯',
            schema: {
                componentName: 'FCarousel',
                props: {
                    height: '240px',
                },
                children: [
                    {
                        componentName: 'FCarouselItem',
                        children: [
                            {
                                componentName: 'FImage',
                                props: {
                                    src: 'https://s3.bmp.ovh/imgs/2022/01/f615608955b707cd.png',
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                    },
                                },
                            },
                        ],
                    },
                    {
                        componentName: 'FCarouselItem',
                        children: [
                            {
                                componentName: 'FImage',
                                props: {
                                    src: 'https://s3.bmp.ovh/imgs/2022/01/5c8bf7eb1ef7a400.png',
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};
