import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '评分',
    componentName: 'FRate',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FRate',
        destructuring: true,
    },
    configure: {
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'readonly',
                title: '只读',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'allowHalf',
                title: '可选半星',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'colorFilled',
                title: '填充风格',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'clearable',
                title: '可清除',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'size',
                title: '大小',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            { value: 'large', label: '大' },
                            { value: 'medium', label: '中' },
                            { value: 'small', label: '小' },
                        ],
                    },
                },
                defaultValue: 'medium',
            },
            {
                name: 'color',
                title: '颜色',
                setter: 'ColorSetter',
                defaultValue: '#f29360',
            },
            {
                name: 'count',
                title: '图标个数',
                setter: 'NumberSetter',
                defaultValue: 5,
            },
            {
                name: 'showText',
                title: '是否展示文字',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'texts',
                title: '辅助文字',
                description:
                    '会在右侧显示辅助文字。 \n通过该设置可以为每一个分值指定对应的辅助文字。\n这是一个数组，长度应等于评级图标个数。\n未匹配文字的评级，则不展示文字部分。',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: 'StringSetter',
                    },
                },
                condition: (target) => target.top.getPropValue('showText') === true,
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
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onClear',
                    params: [],
                },
            ],
            style: true,
            class: true,
        },
    },
    snippets: [
        {
            title: '评分',
            schema: {
                componentName: 'FRate',
                props: {},
            },
        },
    ],
    group: '原子组件',
    category: '录入组件',
    priority: 0,
};

export default meta;
