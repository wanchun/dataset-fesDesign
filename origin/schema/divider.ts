import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '分割线',
    componentName: 'FDivider',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FDivider',
        destructuring: true,
    },
    props: [
        {
            name: 'children',
            title: '标题',
            propType: 'string',
        },
        {
            name: 'vertical',
            title: '是否垂直方向',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'titlePlacement',
            title: '文字位置',
            propType: {
                type: 'oneOf',
                value: ['center', 'left', 'right'],
            },
            defaultValue: 'center',
        },
    ],
    configure: {
        props: [
            {
                name: 'children',
                title: '标题',
                setter: 'StringSetter',
            },
            {
                name: 'titlePlacement',
                title: '文字位置',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                value: 'left',
                                label: '起点',
                            },
                            {
                                value: 'center',
                                label: '中间',
                            },
                            {
                                value: 'right',
                                label: '终点',
                            },
                        ],
                    },
                },
                defaultValue: 'center',
            },
            {
                name: 'vertical',
                title: '是否垂直方向',
                setter: 'BoolSetter',
                defaultValue: false,
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '分割线',
            schema: {
                componentName: 'FDivider',
                props: {},
            },
        },
    ],
    group: '原子组件',
    category: '布局组件',
    priority: 0,
};

export default meta;
