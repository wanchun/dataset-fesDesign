import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '分页',
    componentName: 'FPagination',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FPagination',
        destructuring: true,
    },
    props: [
        {
            name: 'v-model:pageSize',
            propType: 'number',
        },
        {
            name: 'v-model:currentPage',
            propType: 'number',
        },
        {
            name: 'totalCount',
            propType: 'number',
        },
        {
            name: 'pageSizeOption',
            propType: 'array',
        },
        {
            name: 'showTotal',
            propType: 'bool',
        },
        {
            name: 'showQuickJumper',
            propType: 'bool',
        },
        {
            name: 'small',
            propType: 'bool',
        },
        {
            name: 'simple',
            propType: 'bool',
        },
        {
            name: 'showSizeChanger',
            propType: 'bool',
        },
    ],
    configure: {
        props: [
            {
                title: '基础功能',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'v-model:currentPage',
                        title: '当前页码',
                        setter: 'VariableSetter',
                    },
                    {
                        name: 'v-model:pageSize',
                        title: '每页个数',
                        setter: 'VariableSetter',
                    },
                    {
                        name: 'totalCount',
                        title: '总条数',
                        setter: 'NumberSetter',
                    },
                ],
            },
            {
                title: '样式',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'showQuickJumper',
                        title: '快速跳转',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'showTotal',
                        title: '总条数',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'small',
                        title: '小型样式',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'simple',
                        title: '简洁样式',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                ],
            },
            {
                title: '每页条数选择器',
                type: 'group',
                display: 'block',
                items: [
                    {
                        name: 'showSizeChanger',
                        title: '开启',
                        setter: 'BoolSetter',
                        defaultValue: false,
                    },
                    {
                        name: 'pageSizeOption',
                        condition: (target) => target.top.getPropValue('showSizeChanger') === true,
                        title: '选项',
                        setter: {
                            componentName: 'ArraySetter',
                            props: {
                                itemSetter: {
                                    componentName: 'NumberSetter',
                                },
                            },
                        },
                        // defaultValue: [10, 20, 30, 50, 100],
                    },
                ],
            },
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'currentPage',
                            type: 'number',
                        },
                        {
                            name: 'pageSize',
                            type: 'number',
                        },
                    ],
                },
                {
                    name: 'onPageSizeChange',
                    params: [
                        {
                            name: 'pageSize',
                            type: 'number',
                        },
                    ],
                },
            ],
            class: true,
            style: true,
        },
    },
    snippets: [
        {
            title: '分页',
            schema: {
                componentName: 'FPagination',
                props: {
                    totalCount: 1000,
                    pageSizeOption: [10, 20, 30, 50, 100],
                },
            },
        },
    ],
    group: '原子组件',
    category: '导航组件',
    priority: 0,
};

export default meta;
