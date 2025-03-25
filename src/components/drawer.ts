import type { IComponentMetadata } from '../type';

export const drawerMeta: IComponentMetadata = {
    title: '抽屉',
    componentName: 'FDrawer',
    description: '抽屉组件，用于在屏幕边缘弹出临时的侧边栏，可以包含各种自定义内容。适用于需要快速展示或操作内容而不打断主页面流程的场景。',
    scenarios: [
        '表单编辑：在不离开当前页面的情况下，展开抽屉进行表单填写和编辑',
        '详情展示：从列表页快速查看某一项的详细信息',
        '高级筛选：展开抽屉显示更多的筛选条件和选项',
        '临时操作面板：需要执行一系列相关操作时，在侧边展开操作面板',
        '配置界面：展示应用设置、个性化配置等需要独立空间的内容',
        '预览窗口：在不跳转页面的情况下预览文档、图片等内容',
    ],
    parent: {
        types: ['container', 'layout'],
    },
    children: [],
    propRelations: [
        {
            source: 'show',
            target: 'displayDirective',
            effect: '显示状态与渲染方式的联动',
            notes: [
                '当displayDirective为if时，组件会在show为false时被销毁',
                '当displayDirective为show时，组件会被缓存而不销毁',
                '频繁切换的场景建议使用show以提高性能',
            ],
        },
        {
            source: 'placement',
            target: ['height', 'width'],
            effect: '方向与尺寸的关联',
            notes: [
                '当placement为top/bottom时，通过height控制抽屉高度',
                '当placement为left/right时，通过width控制抽屉宽度',
                '建议根据内容类型选择合适的方向和尺寸',
            ],
        },
        {
            source: 'mask',
            target: 'maskClosable',
            effect: '蒙层与点击关闭的关联',
            notes: [
                '只有开启mask时maskClosable配置才有效',
                '建议保持开启以提供更好的交互体验',
            ],
        },
    ],
    props: [
        {
            name: 'show',
            title: '显示状态',
            propType: 'bool',
            description: '控制抽屉是否显示',
            defaultValue: false,
            required: true,
        },
        {
            name: 'displayDirective',
            title: '渲染指令',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'show',
                        title: '显示/隐藏',
                        usage: '组件会被缓存，适用于频繁切换的场景',
                    },
                    {
                        name: 'if',
                        title: '条件渲染',
                        usage: '组件会被销毁，适用于内容较重的场景',
                    },
                ],
            },
            description: '控制抽屉的渲染方式',
            defaultValue: 'show',
        },
        {
            name: 'closable',
            title: '可关闭',
            propType: 'bool',
            description: '是否显示关闭按钮',
            defaultValue: true,
        },
        {
            name: 'mask',
            title: '蒙层',
            propType: 'bool',
            description: '是否显示遮罩层',
            defaultValue: true,
        },
        {
            name: 'maskClosable',
            title: '点击蒙层关闭',
            propType: 'bool',
            description: '是否允许点击蒙层关闭抽屉',
            defaultValue: true,
        },
        {
            name: 'title',
            title: '标题',
            propType: 'string',
            description: '抽屉的标题文本',
        },
        {
            name: 'placement',
            title: '方向',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'top',
                        title: '顶部',
                        usage: '从顶部滑出，适用于展示横向布局的内容',
                    },
                    {
                        name: 'bottom',
                        title: '底部',
                        usage: '从底部滑出，适用于移动端的操作面板',
                    },
                    {
                        name: 'left',
                        title: '左侧',
                        usage: '从左侧滑出，适用于导航菜单等场景',
                    },
                    {
                        name: 'right',
                        title: '右侧',
                        usage: '从右侧滑出，适用于详情展示等场景',
                    },
                ],
            },
            description: '抽屉弹出的方向',
            defaultValue: 'right',
        },
        {
            name: 'height',
            title: '高度',
            propType: 'number',
            description: '抽屉的高度，在placement为top/bottom时生效',
            defaultValue: 340,
        },
        {
            name: 'width',
            title: '宽度',
            propType: 'number',
            description: '抽屉的宽度，在placement为left/right时生效',
            defaultValue: 378,
        },
        {
            name: 'footer',
            title: '底部',
            propType: 'bool',
            description: '是否显示底部操作栏',
            defaultValue: false,
        },
        {
            name: 'okText',
            title: '确认按钮文字',
            propType: 'string',
            description: '确认按钮的文本内容',
            defaultValue: '确定',
        },
        {
            name: 'cancelText',
            title: '取消按钮文字',
            propType: 'string',
            description: '取消按钮的文本内容',
            defaultValue: '取消',
        },
        {
            name: 'contentClass',
            title: '内容样式名称',
            propType: 'string',
            description: '自定义内容区域的样式类名',
        },
        {
            name: 'getContainer',
            title: '挂载节点',
            propType: 'func',
            description: '指定抽屉挂载的HTML节点',
            defaultValue: '() => document.body',
        },
    ],
    events: [
        {
            name: 'onUpdate:show',
            description: '显示状态变化时触发',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '当前的显示状态',
                },
            ],
        },
        {
            name: 'onOk',
            description: '点击确定按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '点击事件对象',
                },
            ],
        },
        {
            name: 'onCancel',
            description: '点击取消按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '点击事件对象',
                },
            ],
        },
        {
            name: 'onAfterEnter',
            description: '抽屉打开动画结束后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '抽屉DOM元素',
                },
            ],
        },
        {
            name: 'onAfterLeave',
            description: '抽屉关闭动画结束后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '抽屉DOM元素',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '抽屉的主要内容区域',
            required: true,
        },
        {
            name: 'title',
            description: '自定义标题内容',
        },
        {
            name: 'footer',
            description: '自定义底部内容',
        },
    ],
};
