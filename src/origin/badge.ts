import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '徽标',
    componentName: 'FBadge',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FBadge',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'value',
                title: '显示值',
                setter: ['StringSetter', 'NumberSetter'],
            },
            {
                name: 'dot',
                title: '红点模式',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'hidden',
                title: '隐藏徽标',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'showZero',
                title: '展示数值0',
                description: '是否展示数值0，如果隐藏徽标时，该属性不会生效',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'max',
                title: '阈值',
                description: '设定封顶阈值，只有显示值是数字的情况下才会生效',
                setter: 'NumberSetter',
                defaultValue: 99,
            },
            {
                name: 'size',
                title: '大小',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { value: 'medium', label: '中' },
                            { value: 'small', label: '小' },
                        ],
                    },
                },
                defaultValue: 'medium',
            },
            {
                name: 'type',
                title: '类型',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { value: 'primary', label: '重要' },
                            { value: 'success', label: '成功' },
                            { value: 'warning', label: '警告' },
                            { value: 'danger', label: '危险' },
                        ],
                    },
                },
                defaultValue: 'danger',
            },
            {
                name: 'backgroundColor',
                title: '背景色',
                setter: 'ColorSetter',
            },
            {
                name: 'content',
                title: '自定义',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'content',
                    value: [],
                },
            },
        ],
        supports: {
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '徽标',
            schema: {
                componentName: 'FBadge',
                children: [],
                props: {
                    value: 10,
                },
            },
        },
    ],
    group: '原子组件',
    category: '信息展示',
    priority: 1,
};

export default meta;
