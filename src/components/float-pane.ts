import { IComponentMetadata } from '../type';

export const floatPaneMeta: IComponentMetadata = {
    title: '浮动面板',
    componentName: 'FFloatPane',
    description: '可拖拽的浮动面板组件，用于展示独立于主界面的内容。支持自定义位置、大小调整、位置缓存等功能，适用于需要灵活布局的辅助界面展示。',
    scenarios: [
        '工具面板：用于展示工具栏、属性面板等可拖拽的辅助界面，方便用户随时调整位置',
        '临时信息：展示临时性的详细信息，如预览窗口、帮助文档等需要独立空间的内容',
        '悬浮窗口：创建可拖拽的独立窗口，支持多窗口并行展示，适用于多任务处理场景',
        '配置面板：展示应用配置、个性化设置等可调整位置的面板，提供更灵活的操作体验',
        '辅助工具：放置频繁使用的功能模块，用户可以根据使用习惯自定义位置',
        '状态监控：展示系统状态、性能指标等需要持续关注的信息面板'
    ],
    parent: {
        types: ['container', 'layout'],
    },
    children: ['*'],
    propRelations: [
        {
            source: 'visible',
            target: 'displayDirective',
            effect: '控制面板的显示和渲染方式',
            notes: [
                '当visible为false时，根据displayDirective决定是否保留DOM',
                'show模式下保留DOM但隐藏，适用于频繁切换的场景',
                'if模式下直接移除DOM，适用于内容较重的场景'
            ]
        },
        {
            source: 'resizable',
            target: ['minWidth', 'maxWidth', 'minHeight', 'maxHeight'],
            effect: '尺寸调整的约束关系',
            notes: [
                '启用尺寸调整时，可以通过min/max配置限制调整范围',
                '建议设置合理的尺寸范围避免影响用户体验'
            ]
        },
        {
            source: 'cachePosition',
            target: 'cacheKey',
            effect: '位置缓存的依赖关系',
            notes: [
                '启用位置缓存时必须提供cacheKey',
                'cacheKey用于标识不同面板的缓存数据'
            ]
        }
    ],
    props: [
        {
            name: 'visible',
            title: '显示状态',
            propType: 'bool',
            description: '控制面板的显示/隐藏状态',
            defaultValue: true
        },
        {
            name: 'displayDirective',
            title: '显示指令',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'if',
                        title: '条件渲染',
                        usage: '适用于内容较重的场景，隐藏时直接移除DOM'
                    },
                    {
                        name: 'show',
                        title: '显示隐藏',
                        usage: '适用于频繁切换的场景，隐藏时保留DOM'
                    }
                ]
            },
            description: '控制面板显示/隐藏的渲染方式',
            defaultValue: 'show'
        },
        {
            name: 'draggable',
            title: '可拖拽',
            propType: 'bool',
            description: '是否允许通过拖拽调整面板位置',
            defaultValue: true
        },
        {
            name: 'defaultPosition',
            title: '默认位置',
            propType: {
                type: 'exact',
                value: [
                    {
                        name: 'x',
                        title: 'X坐标',
                        propType: 'number',
                        description: '面板的水平位置坐标'
                    },
                    {
                        name: 'y',
                        title: 'Y坐标',
                        propType: 'number',
                        description: '面板的垂直位置坐标'
                    }
                ]
            },
            description: '面板的默认显示位置'
        },
        {
            name: 'resizable',
            title: '可调整大小',
            propType: 'bool',
            description: '是否允许调整面板大小',
            defaultValue: false
        },
        {
            name: 'minWidth',
            title: '最小宽度',
            propType: 'number',
            description: '面板可调整的最小宽度',
            defaultValue: 200
        },
        {
            name: 'maxWidth',
            title: '最大宽度',
            propType: 'number',
            description: '面板可调整的最大宽度',
            defaultValue: 800
        },
        {
            name: 'minHeight',
            title: '最小高度',
            propType: 'number',
            description: '面板可调整的最小高度',
            defaultValue: 100
        },
        {
            name: 'maxHeight',
            title: '最大高度',
            propType: 'number',
            description: '面板可调整的最大高度',
            defaultValue: 600
        },
        {
            name: 'cachePosition',
            title: '缓存位置',
            propType: 'bool',
            description: '是否缓存面板位置，下次打开时恢复到上次的位置',
            defaultValue: false
        },
        {
            name: 'cacheKey',
            title: '缓存标识',
            propType: 'string',
            description: '位置缓存的唯一标识，当cachePosition为true时必填',
            required: false
        },
        {
            name: 'zIndex',
            title: '层级',
            propType: 'number',
            description: '面板的层叠顺序',
            defaultValue: 1000
        },
        {
            name: 'mask',
            title: '遮罩',
            propType: 'bool',
            description: '是否显示遮罩层',
            defaultValue: false
        },
        {
            name: 'maskClosable',
            title: '点击遮罩关闭',
            propType: 'bool',
            description: '是否允许点击遮罩层关闭面板',
            defaultValue: true
        }
    ],
    events: [
        {
            name: 'onDragStart',
            description: '开始拖拽时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'DragEvent',
                    description: '拖拽事件对象'
                },
                {
                    name: 'position',
                    type: '{ x: number, y: number }',
                    description: '开始拖拽时的位置坐标'
                }
            ]
        },
        {
            name: 'onDragEnd',
            description: '结束拖拽时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'DragEvent',
                    description: '拖拽事件对象'
                },
                {
                    name: 'position',
                    type: '{ x: number, y: number }',
                    description: '结束拖拽时的位置坐标'
                }
            ]
        },
        {
            name: 'onResizeStart',
            description: '开始调整尺寸时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '鼠标事件对象'
                },
                {
                    name: 'size',
                    type: '{ width: number, height: number }',
                    description: '开始调整时的尺寸'
                }
            ]
        },
        {
            name: 'onResizeEnd',
            description: '结束调整尺寸时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '鼠标事件对象'
                },
                {
                    name: 'size',
                    type: '{ width: number, height: number }',
                    description: '调整后的尺寸'
                }
            ]
        },
        {
            name: 'onClose',
            description: '面板关闭时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '鼠标事件对象'
                }
            ]
        }
    ],
    slots: [
        {
            name: 'default',
            description: '面板的主要内容区域',
            required: true
        },
        {
            name: 'header',
            description: '面板的头部区域，可用于自定义标题栏',
            required: false
        },
        {
            name: 'footer',
            description: '面板的底部区域，可用于放置操作按钮',
            required: false
        }
    ]
};
