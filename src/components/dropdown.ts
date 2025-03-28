import type { IComponentMetadata } from '../type';

export const dropdownMeta: IComponentMetadata = {
    title: '下拉菜单',
    componentName: 'FDropdown',
    description: '向下弹出的列表组件，支持多种触发方式和位置配置，适用于菜单选择、操作列表等场景。',
    scenarios: [
        '操作菜单：在表格行操作列使用，提供编辑、删除等操作选项，保持界面简洁。',
        '表单选择：在表单中使用作为选择器，提供多选项选择功能。',
        '导航菜单：作为二级导航菜单使用，支持图标和禁用状态。',
        '上下文菜单：通过右键触发，提供上下文相关操作选项。',
        '工具栏操作：在工具栏中使用，提供批量操作选项。',
        '用户菜单：在用户头像旁使用，提供个人中心、退出登录等选项。',
        '筛选菜单：在数据表格上方使用，提供数据筛选功能。',
        '语言切换：在页面顶部使用，提供多语言切换选项。',
        '主题切换：在设置区域使用，提供主题切换选项。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FButton',
    ],
    propRelations: [
        {
            source: 'disabled',
            target: 'trigger',
            effect: '禁用状态下所有触发方式无效',
            notes: [
                '当disabled为true时，任何触发方式都不会生效',
                '适用于需要临时禁用下拉菜单的场景',
            ],
        },
        {
            source: 'arrow',
            target: 'offset',
            effect: '显示箭头时建议增加offset值',
            notes: [
                '当arrow为true时，建议offset至少为10',
                '确保箭头与内容之间有足够间距',
            ],
        },
    ],
    props: [
        {
            name: 'options',
            title: '下拉选项',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'exact',
                    value: [
                        {
                            name: 'value',
                            title: '选项值',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'number',
                                ],
                            },
                            example: '1',
                        },
                        {
                            name: 'label',
                            title: '选项标签',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    {
                                        type: 'func',
                                        returnType: 'string',
                                    },
                                ],
                            },
                            example: '删除',
                        },
                        {
                            name: 'disabled',
                            title: '禁用状态',
                            valueType: 'bool',
                            example: false,
                        },
                        {
                            name: 'icon',
                            title: '图标',
                            valueType: {
                                type: 'func',
                                returnType: 'node',
                            },
                            example: '() => h(DeleteOutlined)',
                        },
                    ],
                },
            },
            description: '下拉菜单的选项配置，支持自定义图标和禁用状态',
            defaultValue: [],
            example: [
                {
                    value: '1',
                    label: '删除',
                    disabled: true,
                },
                {
                    value: '2',
                    label: '修改',
                },
            ],
        },
        {
            name: 'trigger',
            title: '触发方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'hover',
                        title: '鼠标悬停',
                        usage: '适用于需要快速访问的场景',
                    },
                    {
                        value: 'click',
                        title: '鼠标点击',
                        usage: '适用于需要明确用户意图的场景',
                    },
                    {
                        value: 'focus',
                        title: '获取焦点',
                        usage: '适用于表单输入场景',
                    },
                    {
                        value: 'contextmenu',
                        title: '右键菜单',
                        usage: '适用于上下文操作场景',
                    },
                ],
            },
            description: '触发下拉菜单显示的方式',
            defaultValue: 'hover',
            example: 'click',
        },
        {
            name: 'placement',
            title: '弹出位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'top',
                        title: '上边居中',
                        usage: '适用于按钮位于页面底部的场景',
                    },
                    {
                        value: 'top-start',
                        title: '上边起始位置',
                        usage: '适用于需要对齐左侧的场景',
                    },
                    {
                        value: 'top-end',
                        title: '上边终点位置',
                        usage: '适用于需要对齐右侧的场景',
                    },
                    {
                        value: 'bottom',
                        title: '下边居中',
                        usage: '默认位置，适用于大多数场景',
                    },
                    {
                        value: 'bottom-start',
                        title: '下边起始位置',
                        usage: '适用于需要对齐左侧的场景',
                    },
                    {
                        value: 'bottom-end',
                        title: '下边终点位置',
                        usage: '适用于需要对齐右侧的场景',
                    },
                    {
                        value: 'left',
                        title: '左边居中',
                        usage: '适用于按钮位于右侧的场景',
                    },
                    {
                        value: 'left-start',
                        title: '左边起始位置',
                        usage: '适用于需要对齐顶部的场景',
                    },
                    {
                        value: 'left-end',
                        title: '左边终点位置',
                        usage: '适用于需要对齐底部的场景',
                    },
                    {
                        value: 'right',
                        title: '右边居中',
                        usage: '适用于按钮位于左侧的场景',
                    },
                    {
                        value: 'right-start',
                        title: '右边起始位置',
                        usage: '适用于需要对齐顶部的场景',
                    },
                    {
                        value: 'right-end',
                        title: '右边终点位置',
                        usage: '适用于需要对齐底部的场景',
                    },
                ],
            },
            description: '下拉菜单相对于触发器的位置',
            defaultValue: 'bottom',
            example: 'bottom-start',
        },
        {
            name: 'offset',
            title: '弹窗距离',
            valueType: 'number',
            description: '下拉菜单与触发元素之间的距离(px)',
            defaultValue: 6,
            example: 10,
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用下拉菜单',
            defaultValue: false,
            example: true,
        },
        {
            name: 'arrow',
            title: '显示箭头',
            valueType: 'bool',
            description: '是否显示指向触发器的箭头',
            defaultValue: false,
            example: true,
        },
        {
            name: 'visible',
            title: '是否显示',
            valueType: 'bool',
            description: '是否显示下拉菜单(受控模式)',
            defaultValue: false,
            example: false,
        },
        {
            name: 'showSelectedOption',
            title: '显示选中项',
            valueType: 'bool',
            description: '是否在触发区域显示当前选中的选项',
            defaultValue: false,
            example: true,
        },
        {
            name: 'popperClass',
            title: '弹窗类名',
            valueType: 'string',
            description: '自定义下拉菜单容器的类名',
            example: 'custom-dropdown',
        },
    ],
    events: [
        {
            name: 'onClick',
            description: '点击选项时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'string | number',
                    description: '被点击选项的值',
                },
            ],
        },
        {
            name: 'onVisibleChange',
            description: '下拉菜单显示状态变化时触发',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '当前是否可见',
                },
            ],
        },
        {
            name: 'onScroll',
            description: '下拉菜单滚动时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '滚动事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '触发下拉菜单的内容',
            required: true,
        },
    ],
    templates: [
        {
            input: '基础下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建一个包含基本选项的下拉菜单\n[代码实现]\n<FDropdown :options="[\n  {value: \'1\', label: \'删除\'},\n  {value: \'2\', label: \'修改\'}\n]">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 保持选项简洁明了，重要操作放在前面',
        },
        {
            input: '带图标的下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建带有图标的下拉菜单\n[代码实现]\n<FDropdown :options="[\n  {value: \'1\', label: \'删除\', icon: () => h(DeleteOutlined)},\n  {value: \'2\', label: \'修改\', icon: () => h(EditOutlined)}\n]">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 使用直观的图标增强选项的可识别性',
        },
        {
            input: '禁用状态的下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建禁用的下拉菜单\n[代码实现]\n<FDropdown disabled :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 禁用状态下应提供视觉反馈，如按钮变灰',
        },
        {
            input: '右键触发的上下文菜单',
            output: '<!-- correct -->\n[场景说明] 创建右键触发的上下文菜单\n[代码实现]\n<FDropdown trigger="contextmenu" :options="options">\n  <div style="padding: 20px; border: 1px dashed #ccc">\n    右键点击此处\n  </div>\n</FDropdown>\n[最佳实践] 上下文菜单应包含与当前内容相关的操作',
        },
        {
            input: '顶部弹出的下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建顶部弹出的下拉菜单\n[代码实现]\n<FDropdown placement="top" :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 当按钮位于页面底部时使用顶部弹出',
        },
        {
            input: '显示选中项的下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建显示当前选中项的下拉菜单\n[代码实现]\n<FDropdown v-model="selectedValue" showSelectedOption :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 适用于需要显示当前状态的场景',
        },
        {
            input: '自定义样式的下拉菜单',
            output: '<!-- correct -->\n[场景说明] 创建自定义样式的下拉菜单\n[代码实现]\n<FDropdown popperClass="custom-dropdown" :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n<style>\n.custom-dropdown {\n  background: #f0f0f0;\n  border-radius: 8px;\n}\n</style>\n[最佳实践] 自定义样式应与整体设计风格保持一致',
        },
        {
            input: '表单中的下拉选择器',
            output: '<!-- correct -->\n[场景说明] 在表单中使用下拉菜单作为选择器\n[代码实现]\n<FForm>\n  <FFormItem label="操作">\n    <FDropdown v-model="formData.action" :options="options">\n      <FButton>{{ formData.action || \'请选择\' }}</FButton>\n    </FDropdown>\n  </FFormItem>\n</FForm>\n[最佳实践] 表单中使用时应提供清晰的标签和默认提示',
        },
        {
            input: '错误示例：缺少options属性',
            output: '<!-- error -->\n[错误分析] 缺少必填的options属性\n[正确代码]\n<FDropdown :options="[]">\n  <FButton>操作</FButton>\n</FDropdown>\n[注意事项] options属性是必填的，即使为空数组也应提供',
        },
        {
            input: '错误示例：错误的trigger类型',
            output: '<!-- error -->\n[错误分析] trigger属性值不合法\n[正确代码]\n<FDropdown trigger="click" :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n[注意事项] trigger必须是\'hover\',\'click\',\'focus\'或\'contextmenu\'之一',
        },
        {
            input: '错误示例：options格式不正确',
            output: '<!-- error -->\n[错误分析] options数组中缺少必填的value和label属性\n[正确代码]\n<FDropdown :options="[\n  {value: \'1\', label: \'选项1\'}\n]">\n  <FButton>操作</FButton>\n</FDropdown>\n[注意事项] 每个选项必须包含value和label属性',
        },
        {
            input: '边界条件：空选项列表',
            output: '<!-- correct -->\n[场景说明] 处理空选项列表的情况\n[代码实现]\n<FDropdown :options="[]">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 空状态应提供友好提示或禁用下拉菜单',
        },
        {
            input: '边界条件：超长选项文本',
            output: '<!-- correct -->\n[场景说明] 处理超长选项文本\n[代码实现]\n<FDropdown :options="[\n  {value: \'1\', label: \'这是一个非常非常非常非常非常非常非常长的选项名称\'}\n]">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 应设置最大宽度和文本截断样式',
        },
        {
            input: '边界条件：大量选项',
            output: '<!-- correct -->\n[场景说明] 处理大量选项的情况\n[代码实现]\n<FDropdown :options="Array(100).fill(0).map((_,i) => ({value: i, label: `选项${i}`}))">\n  <FButton>操作</FButton>\n</FDropdown>\n[最佳实践] 应设置最大高度和滚动条',
        },
        {
            input: '怎么用下拉菜单？',
            output: '<!-- correct -->\n[场景说明] 基础下拉菜单使用\n[代码实现]\n<FDropdown :options="[\n  {value: \'1\', label: \'选项1\'},\n  {value: \'2\', label: \'选项2\'}\n]">\n  <FButton>点击我</FButton>\n</FDropdown>\n[最佳实践] 确保options属性包含有效的选项数组',
        },
        {
            input: '下拉菜单不显示怎么办',
            output: '<!-- correct -->\n[场景说明] 排查下拉菜单不显示的问题\n[代码实现]\n<FDropdown :options="options" trigger="click">\n  <FButton>点击我</FButton>\n</FDropdown>\n[最佳实践] 检查options是否正确、disabled是否为false、trigger是否匹配',
        },
        {
            input: '下拉菜单样式怎么改',
            output: '<!-- correct -->\n[场景说明] 自定义下拉菜单样式\n[代码实现]\n<FDropdown popperClass="my-dropdown" :options="options">\n  <FButton>操作</FButton>\n</FDropdown>\n<style>\n.my-dropdown {\n  background: #f5f5f5;\n  border-radius: 4px;\n}\n</style>\n[最佳实践] 使用popperClass自定义样式，避免影响其他组件',
        },
        {
            input: '下拉菜单和按钮组合使用',
            output: '<!-- correct -->\n[场景说明] 下拉菜单与按钮组合使用\n[代码实现]\n<FSpace>\n  <FButton>主要操作</FButton>\n  <FDropdown :options="options">\n    <FButton>更多操作</FButton>\n  </FDropdown>\n</FSpace>\n[最佳实践] 保持视觉风格一致，区分主要操作和次要操作',
        },
        {
            input: '下拉菜单在表格中的应用',
            output: '<!-- correct -->\n[场景说明] 在表格行中使用下拉菜单\n[代码实现]\n<FTable :data="data">\n  <FTableColumn prop="name" label="名称"/>\n  <FTableColumn label="操作">\n    <template #default>\n      <FDropdown :options="options">\n        <FButton size="small">操作</FButton>\n      </FDropdown>\n    </template>\n  </FTableColumn>\n</FTable>\n[最佳实践] 表格中的下拉菜单应使用较小尺寸，保持界面整洁',
        },
    ],
};
