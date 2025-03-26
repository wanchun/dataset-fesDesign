import type { IComponentMetadata } from '../type';

export const transferMeta: IComponentMetadata = {
    title: '穿梭框',
    componentName: 'FTransfer',
    description: '穿梭框组件，用于在两个列表之间进行数据项的选择和移动。支持双向模式、过滤功能和自定义标签内容，适用于数据筛选、权限分配等场景。',
    scenarios: [
        '数据筛选：在数据管理系统中使用穿梭框进行多条件筛选，用户可以通过过滤功能快速找到所需数据。',
        '权限分配：在权限管理系统中使用穿梭框进行角色权限的分配和调整，支持双向模式方便权限的授予和回收。',
        '表单数据选择：在复杂表单中使用穿梭框进行多选数据的录入，用户可以通过过滤和选择功能快速完成数据录入。',
        '配置管理：在系统配置管理中使用穿梭框进行配置项的选择和调整，支持自定义标签内容以展示更多配置信息。',
        '数据迁移：在数据迁移工具中使用穿梭框进行数据项的迁移和调整，支持双向模式方便数据的导入和导出。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单项场景下必须放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'filterable',
            target: 'filter',
            effect: '当filterable为true时，filter函数生效',
            notes: [
                'filterable为true时，filter函数用于自定义过滤逻辑',
                'filterable为false时，filter函数无效',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            propType: 'string',
            description: '绑定穿梭框的选中值，用于双向数据绑定',
        },
        {
            name: 'options',
            title: '选项',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            propType: 'string',
                        },
                        {
                            name: 'label',
                            title: '选项名',
                            propType: 'string',
                        },
                        {
                            name: 'disabled',
                            title: '是否禁用',
                            propType: 'bool',
                        },
                        {
                            name: 'checkable',
                            title: '是否可选',
                            propType: 'bool',
                            defaultValue: true,
                        },
                        {
                            name: 'children',
                            title: '子项数据',
                            propType: {
                                type: 'arrayOf',
                                value: 'object',
                            },
                        },
                    ],
                },
            },
            description: '穿梭框的选项数据，支持嵌套结构',
        },
        {
            name: 'twoWay',
            title: '双向模式',
            propType: 'bool',
            description: '是否启用双向模式，启用后支持数据的双向移动',
            defaultValue: false,
        },
        {
            name: 'height',
            title: '固定高度',
            propType: 'number',
            description: '穿梭框的固定高度，单位为像素',
        },
        {
            name: 'filterable',
            title: '可过滤',
            propType: 'bool',
            description: '是否启用过滤功能，启用后支持对选项进行过滤',
            defaultValue: false,
        },
        {
            name: 'filter',
            title: '过滤函数',
            propType: 'func',
            description: '自定义过滤函数，参数: pattern-搜索值, option-选项',
            defaultValue: 'function(pattern, option) {\n\t return true\n}',
        },
        {
            name: 'transferLabel',
            title: '标签内容',
            propType: 'node',
            description: '自定义标签内容，用于展示更多选项信息',
            defaultValue: {
                type: 'JSSlot',
                title: '标签内容',
                name: 'label',
                value: [],
            },
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '当选中值发生变化时触发',
            parameters: [
                {
                    name: 'nextValue',
                    type: '(string | number)[]',
                    description: '新的选中值',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'label',
            description: '自定义标签内容，用于展示更多选项信息',
            required: false,
        },
    ],
};
