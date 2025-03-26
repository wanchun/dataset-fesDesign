import type { IPublicModelSettingField, IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const isCircle = (target: IPublicModelSettingField) => target.top.getPropValue('type') === 'circle';
const isLine = (target: IPublicModelSettingField) => target.top.getPropValue('type') === 'line';

const meta: IPublicTypeComponentDescription = {
    title: '进度条',
    componentName: 'FProgress',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FProgress',
        destructuring: true,
    },
    configure: {
        supports: {
            style: true,
            class: true,
        },
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'type',
                title: '类型',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '水平',
                                value: 'line',
                            },
                            {
                                label: '环形',
                                value: 'circle',
                            },
                        ],
                    },
                },
                defaultValue: 'line',
            },
            {
                name: 'percent',
                title: '百分比',
                setter: 'NumberSetter',
            },
            {
                name: 'color',
                title: '颜色',
                setter: 'ColorSetter',
            },
            {
                title: '百分比内显',
                name: 'showInnerPercent',
                condition: isLine,
                setter: 'BoolSetter',
            },
            {
                title: '百分比外显',
                name: 'showOutPercent',
                condition: isLine,
                setter: 'BoolSetter',
            },
            {
                name: 'height',
                title: '高度',
                condition: isLine,
                setter: 'NumberSetter',
                defaultValue: 8,
            },
            {
                name: 'width',
                title: '宽度',
                condition: isCircle,
                setter: 'NumberSetter',
                defaultValue: 8,
            },
            {
                name: 'circleSize',
                title: '环形大小',
                condition: isCircle,
                setter: 'NumberSetter',
                defaultValue: 160,
            },
            {
                name: 'showCircleText',
                title: '显示文本',
                condition: isCircle,
                setter: 'BoolSetter',
            },
            {
                name: 'text',
                title: '自定义文本',
                setter: 'SlotSetter',
            },
        ],
    },
    snippets: [
        {
            title: '进度条',
            schema: {
                componentName: 'FProgress',
                props: {
                    type: 'line',
                    percent: 60,
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 0,
};

export default meta;
