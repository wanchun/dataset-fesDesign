import type { IComponentMetadata } from '../type';

export const linkMeta: IComponentMetadata = {
    title: '超链接',
    componentName: 'FLink',
    description: '文字超链接组件，用于页面导航和跳转。支持多种样式、尺寸和状态，可配置图标和下划线效果。',
    scenarios: [
        '页面导航：在内容区域使用primary类型链接，用于重要页面跳转，提供清晰的导航路径。',
        '文档引用：使用default类型链接引用外部文档，通过target属性控制新窗口打开。',
        '操作引导：在表单说明区域使用info类型链接，提供相关操作的帮助文档链接。',
        '状态提示：使用success/danger/warning类型链接展示操作结果状态，增强用户感知。',
        '图标链接：在导航菜单中使用带图标的链接，提升视觉识别度和用户体验。',
        '禁用状态：在权限控制场景使用disabled属性禁用无权限访问的链接。',
        '简洁展示：在密集信息区域使用small尺寸链接，保持界面整洁。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FSpace',
                description: '间距布局场景下建议放在间距组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: [
                'href',
                'target',
            ],
            effect: '禁用状态下跳转功能失效',
            notes: [
                '当disabled为true时href和target属性无效',
                '适用于权限控制场景',
            ],
        },
    ],
    props: [
        {
            name: 'size',
            title: '尺寸',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表格操作列',
                    },
                    {
                        value: 'medium',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出显示的导航区域',
                    },
                ],
            },
            description: '链接的尺寸大小，影响文字和间距',
            defaultValue: 'medium',
            example: 'medium',
        },
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'default',
                        title: '默认',
                        usage: '普通文字链接',
                    },
                    {
                        value: 'primary',
                        title: '主要',
                        usage: '重要导航链接',
                    },
                    {
                        value: 'success',
                        title: '成功',
                        usage: '成功状态提示',
                    },
                    {
                        value: 'info',
                        title: '信息',
                        usage: '信息提示链接',
                    },
                    {
                        value: 'warning',
                        title: '警告',
                        usage: '警告提示链接',
                    },
                    {
                        value: 'danger',
                        title: '危险',
                        usage: '危险操作链接',
                    },
                ],
            },
            description: '链接的类型，影响颜色样式',
            defaultValue: 'default',
            example: 'primary',
        },
        {
            name: 'underline',
            title: '下划线',
            valueType: 'bool',
            description: '是否显示下划线',
            defaultValue: false,
            example: true,
        },
        {
            name: 'disabled',
            title: '禁用',
            valueType: 'bool',
            description: '是否禁用链接',
            defaultValue: false,
            example: false,
        },
        {
            name: 'href',
            title: '跳转链接',
            valueType: 'string',
            description: '链接的目标地址',
            example: 'https://example.com',
        },
        {
            name: 'target',
            title: '跳转行为',
            valueType: 'string',
            description: '同原生a标签的target属性',
            example: '_blank',
        },
    ],
    events: [
        {
            name: 'click',
            description: '点击链接时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '点击事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '链接的文本内容',
            required: true,
        },
        {
            name: 'icon',
            description: '链接的图标内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础链接',
            output: '<!-- correct -->\n[场景说明] 普通文字链接\n[代码实现] <FLink>默认链接</FLink>\n[最佳实践] 适用于常规文本链接场景',
        },
        {
            input: '主要链接',
            output: '<!-- correct -->\n[场景说明] 重要导航链接\n[代码实现] <FLink type="primary">主要链接</FLink>\n[最佳实践] 用于需要突出显示的导航项',
        },
        {
            input: '带下划线的链接',
            output: '<!-- correct -->\n[场景说明] 强调可点击性的链接\n[代码实现] <FLink :underline="true">带下划线链接</FLink>\n[最佳实践] 适合在段落文本中突出可点击元素',
        },
        {
            input: '禁用链接',
            output: '<!-- correct -->\n[场景说明] 无权限访问的链接\n[代码实现] <FLink disabled>禁用链接</FLink>\n[最佳实践] 用于权限控制场景',
        },
        {
            input: '新窗口打开链接',
            output: '<!-- correct -->\n[场景说明] 外部链接跳转\n[代码实现] <FLink href="https://example.com" target="_blank">新窗口打开</FLink>\n[最佳实践] 适合跳转到第三方网站',
        },
        {
            input: '带图标的链接',
            output: '<!-- correct -->\n[场景说明] 增强视觉识别的链接\n[代码实现] <FLink>\n  <template #icon><ProductOutlined /></template>\n  带图标链接\n</FLink>\n[最佳实践] 适用于导航菜单等需要图标辅助的场景',
        },
        {
            input: '小尺寸链接',
            output: '<!-- correct -->\n[场景说明] 紧凑空间内的链接\n[代码实现] <FLink size="small">小链接</FLink>\n[最佳实践] 适合表格操作列等空间有限的场景',
        },
        {
            input: '错误状态链接',
            output: '<!-- correct -->\n[场景说明] 错误提示链接\n[代码实现] <FLink type="danger">错误链接</FLink>\n[最佳实践] 用于展示错误或危险操作',
        },
        {
            input: '缺少href的target',
            output: '<!-- error -->\n[错误分析] target属性需要配合href使用\n[正确代码] <FLink href="#" target="_blank">有效链接</FLink>\n[注意事项] target单独使用不会生效',
        },
        {
            input: '错误类型值',
            output: '<!-- error -->\n[错误分析] type属性值不在可选范围内\n[正确代码] <FLink type="primary">主要链接</FLink>\n[注意事项] type必须为default/primary/success/info/warning/danger之一',
        },
        {
            input: '缺少内容',
            output: '<!-- error -->\n[错误分析] 必须提供默认插槽内容\n[正确代码] <FLink>有效内容</FLink>\n[注意事项] 链接必须包含文本内容',
        },
        {
            input: '空href',
            output: '<!-- correct -->\n[场景说明] 无跳转功能的链接\n[代码实现] <FLink href="">空链接</FLink>\n[最佳实践] 可用于仅触发点击事件的场景',
        },
        {
            input: '极长文本',
            output: '<!-- correct -->\n[场景说明] 超长文本链接\n[代码实现] <FLink>这是一个非常非常非常非常非常非常非常非常长的链接文本</FLink>\n[最佳实践] 应考虑使用ellipsis处理过长的链接文本',
        },
        {
            input: '怎么搞个链结',
            output: '<!-- correct -->\n[场景说明] 非专业表述的链接需求\n[代码实现] <FLink href="#">这是一个链接</FLink>\n[最佳实践] 基础链接实现方式',
        },
        {
            input: '链结下划线咋弄',
            output: '<!-- correct -->\n[场景说明] 带下划线的链接\n[代码实现] <FLink :underline="true">带下划线链接</FLink>\n[最佳实践] 使用underline属性控制下划线显示',
        },
        {
            input: '我要个不能点的链结',
            output: '<!-- correct -->\n[场景说明] 禁用状态的链接\n[代码实现] <FLink disabled>禁用链接</FLink>\n[最佳实践] 使用disabled属性禁用链接',
        },
        {
            input: '自定义链接样式',
            output: '<!-- correct -->\n[场景说明] 自定义样式的链接\n[代码实现] <FLink class="custom-link">自定义样式</FLink>\n<style>\n.custom-link {\n  color: purple;\n  font-weight: bold;\n}\n</style>\n[最佳实践] 通过class覆盖默认样式',
        },
        {
            input: '表单中的链接',
            output: '<!-- correct -->\n[场景说明] 表单内的帮助链接\n[代码实现] <FForm>\n  <FFormItem label="密码">\n    <FInput />\n    <FLink type="info" size="small">忘记密码?</FLink>\n  </FFormItem>\n</FForm>\n[最佳实践] 与表单组件配合使用',
        },
        {
            input: '导航菜单组合',
            output: '<!-- correct -->\n[场景说明] 导航菜单链接组\n[代码实现] <FSpace>\n  <FLink>首页</FLink>\n  <FLink type="primary">产品</FLink>\n  <FLink>关于</FLink>\n</FSpace>\n[最佳实践] 与Space组件配合实现导航菜单',
        },
    ],
};
