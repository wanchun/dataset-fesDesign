import type { IComponentMetadata } from '../type';

export const tooltipMeta: IComponentMetadata = {
    title: '文字提示',
    componentName: 'FTooltip',
    description: '基于Popper组件封装的文字提示组件，用于在用户界面中提供辅助信息提示。支持多种模式（文本提示、确认提示、自定义弹出框）和丰富的配置选项，适用于表单字段说明、操作确认、复杂内容展示等场景。',
    scenarios: [
        '表单字段说明：在表单输入框旁使用文本提示模式，解释字段填写规则，提升表单填写体验。',
        '操作确认：在删除等危险操作前使用确认提示模式，防止用户误操作，增强操作安全性。',
        '复杂内容展示：使用自定义弹出框模式展示富文本内容或复杂UI结构，扩展提示信息的表现形式。',
        '交互引导：在功能按钮上使用悬停提示，引导用户理解功能用途，降低学习成本。',
        '状态说明：在状态图标旁使用提示说明，详细解释当前状态含义，提升信息传达效率。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        '/^F[A-Z]\\w+/',
    ],
    propRelations: [
        {
            source: 'mode',
            target: 'trigger',
            effect: '当mode为confirm时，trigger只能为click',
            notes: [
                '确认提示模式下必须使用点击触发',
                '确保用户明确操作意图',
            ],
        },
        {
            source: 'disabled',
            target: [
                'modelValue',
                'trigger',
            ],
            effect: '禁用状态下提示框不会显示且不响应触发事件',
            notes: [
                '用于动态控制提示可用性',
                '适用于权限控制场景',
            ],
        },
    ],
    props: [
        {
            name: 'modelValue',
            title: '显示控制',
            valueType: 'bool',
            description: '手动控制提示框显示状态，开启受控模式时使用',
            defaultValue: false,
            example: true,
        },
        {
            name: 'mode',
            title: '提示模式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'text',
                        title: '文本提示',
                        usage: '简单的文字说明场景',
                    },
                    {
                        value: 'confirm',
                        title: '确认提示',
                        usage: '需要用户确认的危险操作场景',
                    },
                    {
                        value: 'popover',
                        title: '自定义弹出',
                        usage: '需要展示复杂内容的场景',
                    },
                ],
            },
            description: '提示框的显示模式，影响交互方式和UI表现',
            defaultValue: 'text',
            example: 'confirm',
        },
        {
            name: 'popperClass',
            title: '弹出框样式类',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'object',
                    'array',
                ],
            },
            description: '自定义弹出框的样式类名，支持字符串、对象或数组格式',
            example: 'custom-tooltip',
        },
        {
            name: 'title',
            title: '标题内容',
            valueType: 'string',
            description: '提示框的标题内容，text模式下不可用',
            example: '操作确认',
        },
        {
            name: 'content',
            title: '提示内容',
            valueType: 'string',
            description: '提示框的主要内容文本',
            example: '确认要删除这条数据吗？',
        },
        {
            name: 'placement',
            title: '弹出位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'auto',
                        title: '自动',
                        usage: '由浏览器自动选择最佳位置',
                    },
                    {
                        value: 'top',
                        title: '上方居中',
                        usage: '目标元素上方居中显示',
                    },
                    {
                        value: 'top-start',
                        title: '上方左侧',
                        usage: '目标元素上方偏左显示',
                    },
                    {
                        value: 'top-end',
                        title: '上方右侧',
                        usage: '目标元素上方偏右显示',
                    },
                    {
                        value: 'bottom',
                        title: '下方居中',
                        usage: '目标元素下方居中显示',
                    },
                    {
                        value: 'bottom-start',
                        title: '下方左侧',
                        usage: '目标元素下方偏左显示',
                    },
                    {
                        value: 'bottom-end',
                        title: '下方右侧',
                        usage: '目标元素下方偏右显示',
                    },
                    {
                        value: 'left',
                        title: '左侧居中',
                        usage: '目标元素左侧居中显示',
                    },
                    {
                        value: 'left-start',
                        title: '左侧上方',
                        usage: '目标元素左侧偏上显示',
                    },
                    {
                        value: 'left-end',
                        title: '左侧下方',
                        usage: '目标元素左侧偏下显示',
                    },
                    {
                        value: 'right',
                        title: '右侧居中',
                        usage: '目标元素右侧居中显示',
                    },
                    {
                        value: 'right-start',
                        title: '右侧上方',
                        usage: '目标元素右侧偏上显示',
                    },
                    {
                        value: 'right-end',
                        title: '右侧下方',
                        usage: '目标元素右侧偏下显示',
                    },
                ],
            },
            description: '提示框相对于目标元素的显示位置',
            defaultValue: 'auto',
            example: 'top-start',
        },
        {
            name: 'trigger',
            title: '触发方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'hover',
                        title: '悬停',
                        usage: '鼠标悬停时显示提示',
                    },
                    {
                        value: 'click',
                        title: '点击',
                        usage: '点击时显示提示',
                    },
                    {
                        value: 'focus',
                        title: '聚焦',
                        usage: '元素获取焦点时显示提示',
                    },
                ],
            },
            description: '触发提示框显示的方式',
            defaultValue: 'hover',
            example: 'click',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用提示功能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'offset',
            title: '位置偏移量',
            valueType: 'number',
            description: '提示框与目标元素之间的像素偏移量',
            defaultValue: 8,
            example: 12,
        },
        {
            name: 'showAfter',
            title: '显示延迟',
            valueType: 'number',
            description: '触发后显示提示框的延迟时间（毫秒）',
            defaultValue: 0,
            example: 300,
        },
        {
            name: 'hideAfter',
            title: '隐藏延迟',
            valueType: 'number',
            description: '触发隐藏后提示框的延迟时间（毫秒）',
            defaultValue: 200,
            example: 500,
        },
        {
            name: 'arrow',
            title: '显示箭头',
            valueType: 'bool',
            description: '是否显示指向目标元素的箭头',
            defaultValue: true,
            example: false,
        },
        {
            name: 'confirmOption',
            title: '确认选项',
            valueType: {
                type: 'exact',
                value: [
                    {
                        name: 'okText',
                        title: '确认文本',
                        valueType: 'string',
                        example: '确定',
                    },
                    {
                        name: 'cancelText',
                        title: '取消文本',
                        valueType: 'string',
                        example: '取消',
                    },
                    {
                        name: 'showOk',
                        title: '显示确认',
                        valueType: 'bool',
                        example: true,
                    },
                    {
                        name: 'showCancel',
                        title: '显示取消',
                        valueType: 'bool',
                        example: true,
                    },
                    {
                        name: 'icon',
                        title: '图标',
                        valueType: 'node',
                        example: '<ExclamationCircleFilled />',
                    },
                ],
            },
            description: '确认模式下的配置选项',
            example: {
                okText: '确认删除',
                cancelText: '再想想',
            },
        },
        {
            name: 'getContainer',
            title: '容器节点',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '自定义提示框的挂载容器节点',
            example: '() => document.getElementById(\'tooltip-container\')',
        },
    ],
    events: [
        {
            name: 'ok',
            description: '确认按钮点击事件',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '当前提示框的显示状态',
                },
            ],
        },
        {
            name: 'cancel',
            description: '取消按钮点击事件',
            parameters: [
                {
                    name: 'visible',
                    type: 'boolean',
                    description: '当前提示框的显示状态',
                },
            ],
        },
        {
            name: 'clickOutside',
            description: '点击提示框外部区域事件',
            parameters: [],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '触发提示的元素内容',
            required: true,
        },
        {
            name: 'content',
            description: '自定义提示内容，覆盖content属性',
            required: false,
        },
        {
            name: 'title',
            description: '自定义提示标题，覆盖title属性',
            required: false,
        },
    ],
    exposes: [
        {
            name: 'updatePopperPosition',
            description: '手动更新提示框位置',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '基础文字提示',
            output: '<!-- correct -->\n[场景说明] 在按钮上添加简单的文字提示\n[代码实现]\n<FTooltip content="这是一条提示信息">\n  <FButton>悬停查看提示</FButton>\n</FTooltip>\n[最佳实践] 适用于简单的操作说明，内容应简洁明了',
        },
        {
            input: '确认删除提示',
            output: '<!-- correct -->\n[场景说明] 删除操作前的二次确认\n[代码实现]\n<FTooltip \n  mode="confirm"\n  title="确认删除"\n  content="删除后无法恢复，请谨慎操作"\n  :confirmOption="{ okText: \'确认删除\', cancelText: \'取消\' }"\n>\n  <FButton type="danger">删除</FButton>\n</FTooltip>\n[最佳实践] 危险操作必须使用确认提示，明确区分确认和取消操作',
        },
        {
            input: '自定义内容提示',
            output: '<!-- correct -->\n[场景说明] 展示复杂内容的弹出框\n[代码实现]\n<FTooltip mode="popover" placement="right">\n  <FButton>查看详情</FButton>\n  <template #title>\n    <div style="font-weight: bold">详细说明</div>\n  </template>\n  <template #content>\n    <div style="width: 300px">\n      <p>这里是详细的内容说明...</p>\n      <img src="example.png" width="100%">\n    </div>\n  </template>\n</FTooltip>\n[最佳实践] 适合展示图文混排等复杂内容，注意控制弹出框宽度',
        },
        {
            input: '表单字段提示',
            output: '<!-- correct -->\n[场景说明] 表单输入项的辅助说明\n[代码实现]\n<FFormItem label="用户名">\n  <FTooltip \n    content="4-16个字符，支持字母、数字和下划线"\n    placement="right"\n    trigger="focus"\n  >\n    <FInput placeholder="请输入用户名" />\n  </FTooltip>\n</FFormItem>\n[最佳实践] 使用focus触发方式，在用户聚焦输入框时显示提示',
        },
        {
            input: '禁用状态提示',
            output: '<!-- correct -->\n[场景说明] 根据权限控制提示显示\n[代码实现]\n<FTooltip \n  content="无权限操作"\n  :disabled="hasPermission"\n>\n  <FButton :disabled="!hasPermission">\n    敏感操作\n  </FButton>\n</FTooltip>\n[最佳实践] 权限控制场景下同步禁用按钮和提示功能',
        },
        {
            input: '延迟显示提示',
            output: '<!-- correct -->\n[场景说明] 防止频繁触发的提示\n[代码实现]\n<FTooltip \n  content="操作说明"\n  :show-after="500"\n  :hide-after="300"\n>\n  <FButton>操作按钮</FButton>\n</FTooltip>\n[最佳实践] 适当设置延迟可避免用户快速移动鼠标时频繁显示/隐藏提示',
        },
        {
            input: '自定义样式提示',
            output: '<!-- correct -->\n[场景说明] 品牌化定制的提示样式\n[代码实现]\n<FTooltip \n  content="品牌专属提示"\n  popper-class="brand-tooltip"\n  :arrow="false"\n>\n  <FButton>品牌按钮</FButton>\n</FTooltip>\n\n<style>\n.brand-tooltip {\n  background: linear-gradient(to right, #ff8a00, #da1b60);\n  color: white;\n  border-radius: 8px;\n}\n</style>\n[最佳实践] 通过自定义类名实现品牌化样式，注意保持可读性',
        },
        {
            input: '受控模式提示',
            output: '<!-- correct -->\n[场景说明] 通过程序控制提示显示\n[代码实现]\n<template>\n  <FTooltip \n    v-model="visible"\n    :passive="false"\n    @click-outside="visible = false"\n  >\n    <FButton @click="visible = !visible">\n      点击{{ visible ? \'隐藏\' : \'显示\' }}提示\n    </FButton>\n    <template #content>\n      这是一个受控的提示框\n    </template>\n  </FTooltip>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst visible = ref(false);\n</script>\n[最佳实践] 复杂交互场景下使用受控模式精确控制提示状态',
        },
        {
            input: '错误示例：缺少必要子元素',
            output: '<!-- error -->\n[错误分析] Tooltip组件必须包含子元素作为触发源\n[正确代码]\n<FTooltip content="提示内容">\n  <span>触发元素</span>\n</FTooltip>\n[注意事项] 确保Tooltip组件内部有且至少一个DOM元素',
        },
        {
            input: '错误示例：confirm模式使用hover触发',
            output: '<!-- error -->\n[错误分析] confirm模式必须使用click触发\n[正确代码]\n<FTooltip \n  mode="confirm"\n  trigger="click"\n  title="确认操作"\n>\n  <FButton>删除</FButton>\n</FTooltip>\n[注意事项] 确认提示需要明确的用户点击行为',
        },
        {
            input: '错误示例：text模式使用title插槽',
            output: '<!-- error -->\n[错误分析] text模式不支持标题显示\n[正确代码]\n<FTooltip \n  mode="popover"\n  content="内容"\n>\n  <template #title>\n    这是有效的标题\n  </template>\n  <FButton>按钮</FButton>\n</FTooltip>\n[注意事项] 只有confirm和popover模式支持标题',
        },
        {
            input: '边界条件：空内容提示',
            output: '<!-- correct -->\n[场景说明] 动态内容可能为空的情况\n[代码实现]\n<FTooltip \n  :content="dynamicContent || \'暂无说明\'"\n>\n  <FButton>操作按钮</FButton>\n</FTooltip>\n[最佳实践] 处理可能为空的内容，提供默认提示',
        },
        {
            input: '边界条件：极长内容提示',
            output: '<!-- correct -->\n[场景说明] 处理超长文本内容的显示\n[代码实现]\n<FTooltip \n  :content="longText"\n  placement="right"\n  popper-class="long-text-tooltip"\n>\n  <FButton>查看详情</FButton>\n</FTooltip>\n\n<style>\n.long-text-tooltip {\n  max-width: 400px;\n  word-wrap: break-word;\n}\n</style>\n[最佳实践] 限制最大宽度并允许自动换行，确保可读性',
        },
        {
            input: '边界条件：密集排列提示',
            output: '<!-- correct -->\n[场景说明] 密集UI中的提示防重叠\n[代码实现]\n<div style="display: flex; gap: 8px">\n  <FTooltip \n    v-for="item in items" \n    :key="item.id"\n    :content="item.tip"\n    :offset="16"\n    placement="top"\n  >\n    <FButton size="small">{{ item.label }}</FButton>\n  </FTooltip>\n</div>\n[最佳实践] 增加offset值防止提示重叠，统一placement方向',
        },
        {
            input: '怎么让提示框显示在左边？',
            output: '<!-- correct -->\n[场景说明] 控制提示框显示位置\n[代码实现]\n<FTooltip \n  content="左侧提示"\n  placement="left"\n>\n  <FButton>按钮</FButton>\n</FTooltip>\n[最佳实践] 使用placement="left"使提示显示在元素左侧',
        },
        {
            input: '点击按扭不显示题示',
            output: '<!-- error -->\n[错误分析] 可能是trigger设置错误或disabled为true\n[正确代码]\n<FTooltip \n  content="提示内容"\n  trigger="click"\n  :disabled="false"\n>\n  <FButton>点击显示</FButton>\n</FTooltip>\n[注意事项] 检查trigger和disabled属性设置',
        },
        {
            input: '如何自定义提示框样式？',
            output: '<!-- correct -->\n[场景说明] 自定义提示框外观\n[代码实现]\n<FTooltip \n  content="自定义样式"\n  popper-class="custom-style"\n>\n  <FButton>按钮</FButton>\n</FTooltip>\n\n<style>\n.custom-style {\n  background: #333;\n  color: #fff;\n  border-radius: 4px;\n  padding: 12px;\n}\n</style>\n[最佳实践] 通过popper-class注入自定义样式',
        },
        {
            input: '组合使用：表格操作列提示',
            output: '<!-- correct -->\n[场景说明] 表格操作按钮的提示组合\n[代码实现]\n<FTable :data="data">\n  <FTableColumn prop="name" label="名称" />\n  <FTableColumn label="操作">\n    <template #default="{ row }">\n      <FTooltip content="编辑" placement="top">\n        <FButton type="text" @click="edit(row)">\n          <EditOutlined />\n        </FButton>\n      </FTooltip>\n      <FTooltip \n        mode="confirm"\n        title="确认删除"\n        content="确定删除此项？"\n      >\n        <FButton type="text" danger>\n          <DeleteOutlined />\n        </FButton>\n      </FTooltip>\n    </template>\n  </FTableColumn>\n</FTable>\n[最佳实践] 根据操作类型选择适当的提示模式',
        },
        {
            input: '组合使用：表单验证提示',
            output: '<!-- correct -->\n[场景说明] 表单验证错误的提示组合\n[代码实现]\n<FForm :model="form" :rules="rules">\n  <FFormItem prop="username" :validate-status="error ? \'error\' : \'\'">\n    <FTooltip \n      :content="error"\n      :model-value="!!error"\n      placement="top"\n      :passive="false"\n    >\n      <FInput v-model="form.username" />\n    </FTooltip>\n  </FFormItem>\n</FForm>\n[最佳实践] 结合表单验证状态动态控制提示显示',
        },
    ],
};
