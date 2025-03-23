import { IComponentMetadata } from '../type';

export const selectMeta: IComponentMetadata = {
    title: '选择器',
    componentName: 'FSelect',
    description: '基础选择器组件，用于从预设的选项列表中选择一个或多个选项。支持单选、多选、搜索、远程数据等功能，适用于各种数据选择场景。',
    scenarios: [
        '表单选择：在表单中用于选择预设选项，如性别、状态等固定选项。',
        '数据筛选：在列表页面用于条件筛选，支持单选或多选过滤数据。',
        '远程搜索：结合后端接口实现数据搜索，适用于大数据量选择场景。',
        '标签选择：使用多选模式进行标签选择，可折叠展示多个选中项。',
        '动态创建：在过滤模式下允许创建新选项，满足动态选项需求。'
    ],
    parent: {
        types: ['container', 'layout'],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单场景下必须放在表单项组件内'
            },
            {
                parent: 'FSpace',
                description: '间距布局场景下必须放在间距组件内'
            }
        ]
    },
    children: [],
    propRelations: [
        {
            source: 'multiple',
            target: 'collapseTags',
            effect: '多选模式下可启用选中项折叠展示',
            notes: [
                '仅在multiple为true时collapseTags配置才生效',
                '建议选项较多时开启折叠以节省空间'
            ]
        },
        {
            source: 'filterable',
            target: 'tag',
            effect: '过滤模式下可启用新建选项',
            notes: [
                '必须开启filterable才能使用tag功能',
                '适用于选项不完全固定的场景'
            ]
        },
        {
            source: 'remote',
            target: 'filter',
            effect: '远程搜索模式下需配置过滤函数',
            notes: [
                '开启remote后filter用于处理搜索逻辑',
                '通常需要调用接口获取过滤后的选项'
            ]
        }
    ],
    props: [
        {
            name: 'options',
            title: '选项数据',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'exact',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            propType: {
                                type: 'oneOfType',
                                value: ['string', 'number']
                            },
                            description: '选项的唯一标识值'
                        },
                        {
                            name: 'label',
                            title: '选项标签',
                            propType: 'string',
                            description: '选项的显示文本'
                        },
                        {
                            name: 'disabled',
                            title: '禁用状态',
                            propType: 'bool',
                            description: '是否禁用该选项',
                            defaultValue: false
                        }
                    ]
                }
            },
            description: '选择器的选项列表，每个选项包含value和label',
            defaultValue: []
        },
        {
            name: 'v-model',
            title: '绑定值',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number']
            },
            description: '选择器的当前选中值',
            required: true
        },
        {
            name: 'multiple',
            title: '多选模式',
            propType: 'bool',
            description: '是否允许多选',
            defaultValue: false
        },
        {
            name: 'disabled',
            title: '禁用状态',
            propType: 'bool',
            description: '是否禁用选择器',
            defaultValue: false
        },
        {
            name: 'clearable',
            title: '可清除',
            propType: 'bool',
            description: '是否显示清除按钮',
            defaultValue: false
        },
        {
            name: 'placeholder',
            title: '占位提示',
            propType: 'string',
            description: '选择器占位符',
            defaultValue: '请选择'
        },
        {
            name: 'filterable',
            title: '可过滤',
            propType: 'bool',
            description: '是否支持搜索过滤选项',
            defaultValue: false
        },
        {
            name: 'remote',
            title: '远程搜索',
            propType: 'bool',
            description: '是否为远程搜索',
            defaultValue: false
        },
        {
            name: 'tag',
            title: '允许创建',
            propType: 'bool',
            description: '是否允许创建新选项',
            defaultValue: false
        },
        {
            name: 'multipleLimit',
            title: '多选上限',
            propType: 'number',
            description: '多选时用户最多可以选择的项目数，为0则不限制',
            defaultValue: 0
        },
        {
            name: 'collapseTags',
            title: '折叠选中项',
            propType: 'bool',
            description: '多选时是否折叠展示选中项',
            defaultValue: false
        },
        {
            name: 'collapseTagsLimit',
            title: '折叠阈值',
            propType: 'number',
            description: '超出多少个选项后开始折叠',
            defaultValue: 1
        },
        {
            name: 'tagBordered',
            title: '标签边框',
            propType: 'bool',
            description: '选中项是否显示边框',
            defaultValue: false
        },
        {
            name: 'valueField',
            title: '值字段',
            propType: 'string',
            description: '选项数据中value的字段名',
            defaultValue: 'value'
        },
        {
            name: 'labelField',
            title: '标签字段',
            propType: 'string',
            description: '选项数据中label的字段名',
            defaultValue: 'label'
        },
        {
            name: 'emptyText',
            title: '空提示',
            propType: 'string',
            description: '无选项时显示的文字',
            defaultValue: '无数据'
        },
        {
            name: 'popperClass',
            title: '弹窗类名',
            propType: 'string',
            description: '下拉菜单的自定义类名'
        },
        {
            name: 'appendToContainer',
            title: '挂载容器',
            propType: 'bool',
            description: '是否将弹层挂载到指定容器',
            defaultValue: true
        },
        {
            name: 'getContainer',
            title: '指定容器',
            propType: 'func',
            description: '指定下拉菜单挂载的HTML节点'
        }
    ],
    events: [
        {
            name: 'onChange',
            description: '选中值发生变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string|number|array',
                    description: '当前选中值'
                }
            ]
        },
        {
            name: 'onSearch',
            description: '搜索关键词变化时触发',
            parameters: [
                {
                    name: 'query',
                    type: 'string',
                    description: '搜索关键词'
                }
            ]
        },
        {
            name: 'onVisibleChange',
            description: '下拉框显示状态变化时触发',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '是否显示下拉框'
                }
            ]
        },
        {
            name: 'onRemoveTag',
            description: '多选模式下移除tag时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string|number',
                    description: '移除的选项值'
                }
            ]
        },
        {
            name: 'onClear',
            description: '点击清除按钮时触发'
        },
        {
            name: 'onFocus',
            description: '选择器获得焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'FocusEvent',
                    description: '焦点事件对象'
                }
            ]
        },
        {
            name: 'onBlur',
            description: '选择器失去焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'FocusEvent',
                    description: '焦点事件对象'
                }
            ]
        }
    ],
    slots: [
        {
            name: 'empty',
            description: '无选项时的自定义内容'
        },
        {
            name: 'option',
            description: '自定义选项内容的插槽',
            scope: {
                value: 'any',
                label: 'string',
                disabled: 'boolean',
                isSelected: 'boolean'
            }
        },
        {
            name: 'tag',
            description: '自定义选中项标签的插槽',
            scope: {
                option: 'SelectOption',
                handleClose: 'function'
            }
        },
        {
            name: 'header',
            description: '下拉框顶部内容的插槽'
        },
        {
            name: 'footer',
            description: '下拉框底部内容的插槽'
        }
    ]
};