import type { IComponentMetadata } from '../type';

export const modalMeta: IComponentMetadata = {
    title: '模态框',
    componentName: 'FModal',
    description: '模态框组件，用于在用户界面中以模态形式展示重要信息或引导用户操作。支持多种配置选项和自定义内容，适用于对话框、弹窗等场景。',
    scenarios: [
        '基础对话框：用于展示重要信息或进行简单操作确认，通过show属性控制显示/隐藏。',
        '无标题对话框：适用于不需要标题的简单提示场景，通过省略title属性实现。',
        '不可关闭对话框：通过设置closable为false防止用户意外关闭重要操作对话框。',
        '无遮罩对话框：通过设置mask为false实现无遮罩的对话框展示，适用于需要同时操作背景内容的场景。',
        '内容居中对话框：通过center属性使对话框内容居中显示，提升视觉体验。',
        '全屏对话框：通过fullScreen属性实现全屏展示，适用于内容较多的场景。',
        '垂直居中对话框：通过verticalCenter属性使对话框在垂直方向居中显示。',
        '自定义头部：通过title插槽实现自定义头部内容，满足个性化需求。',
        '自定义页脚：通过footer插槽实现自定义底部按钮和操作，提供更灵活的操作方式。',
        '确认对话框：通过type=\'confirm\'实现确认对话框，用于重要操作确认。',
        '信息反馈：通过全局方法实现不同类型(info/success/error/warning)的信息提示对话框。',
        '异步提交：处理异步操作时的加载状态和结果反馈，提升用户体验。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'mask',
            target: 'maskClosable',
            effect: '当mask为false时，maskClosable设置无效',
            notes: [
                '无遮罩时无法通过点击遮罩关闭对话框',
            ],
        },
        {
            source: 'fullScreen',
            target: [
                'width',
                'top',
                'verticalCenter',
            ],
            effect: '全屏模式下width、top和verticalCenter设置无效',
            notes: [
                '全屏对话框会覆盖其他尺寸和位置设置',
            ],
        },
        {
            source: 'okLoading',
            target: 'okText',
            effect: '加载状态下确认按钮文本会显示加载状态',
            notes: [
                '用于异步操作时的状态反馈',
            ],
        },
    ],
    props: [
        {
            name: 'show',
            title: '显示',
            valueType: 'bool',
            description: '控制模态框的显示/隐藏状态',
            defaultValue: false,
            required: true,
            example: true,
        },
        {
            name: 'displayDirective',
            title: '渲染指令',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'show',
                        title: '显示/隐藏',
                        usage: '使用v-show指令，模态框不会被重置',
                    },
                    {
                        value: 'if',
                        title: '条件渲染',
                        usage: '使用v-if指令，每次显示会重新渲染',
                    },
                ],
            },
            description: '控制模态框的渲染方式',
            defaultValue: 'show',
            example: 'show',
        },
        {
            name: 'closable',
            title: '可关闭',
            valueType: 'bool',
            description: '是否显示右上角关闭按钮',
            defaultValue: true,
            example: true,
        },
        {
            name: 'mask',
            title: '蒙层',
            valueType: 'bool',
            description: '是否显示背景遮罩',
            defaultValue: true,
            example: true,
        },
        {
            name: 'maskClosable',
            title: '点击蒙层关闭',
            valueType: 'bool',
            description: '点击背景遮罩是否可以关闭模态框',
            defaultValue: true,
            example: true,
        },
        {
            name: 'title',
            title: '标题',
            valueType: 'string',
            description: '模态框的标题文本',
            example: '提示信息',
        },
        {
            name: 'width',
            title: '宽度',
            valueType: 'number',
            description: '模态框的宽度(px)',
            defaultValue: 520,
            example: 600,
        },
        {
            name: 'top',
            title: '距离顶部',
            valueType: 'number',
            description: '模态框距离顶部的距离(px)',
            defaultValue: 50,
            example: 100,
        },
        {
            name: 'verticalCenter',
            title: '垂直居中',
            valueType: 'bool',
            description: '是否垂直居中显示',
            defaultValue: false,
            example: true,
        },
        {
            name: 'center',
            title: '内容居中',
            valueType: 'bool',
            description: '是否使内容居中显示',
            defaultValue: false,
            example: true,
        },
        {
            name: 'fullScreen',
            title: '全屏',
            valueType: 'bool',
            description: '是否全屏显示',
            defaultValue: false,
            example: true,
        },
        {
            name: 'footer',
            title: '底部',
            valueType: 'bool',
            description: '是否显示底部区域',
            defaultValue: true,
            example: true,
        },
        {
            name: 'okText',
            title: '确认按钮文字',
            valueType: 'string',
            description: '确认按钮的显示文本',
            defaultValue: '确认',
            example: '确定',
        },
        {
            name: 'okLoading',
            title: '确认按钮Loading',
            valueType: 'bool',
            description: '确认按钮是否显示加载状态',
            defaultValue: false,
            example: true,
        },
        {
            name: 'cancelText',
            title: '取消按钮文字',
            valueType: 'string',
            description: '取消按钮的显示文本',
            defaultValue: '取消',
            example: '关闭',
        },
        {
            name: 'getContainer',
            title: '挂载节点',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '指定模态框挂载的DOM节点',
            defaultValue: '() => document.body',
            example: '() => document.getElementById(\'modal-container\')',
        },
        {
            name: 'contentClass',
            title: '内容样式名称',
            valueType: 'string',
            description: '自定义内容区域的样式类名',
            example: 'custom-content',
        },
        {
            name: 'maxHeight',
            title: '最大高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '内容区域的最大高度，超出会显示滚动条',
            example: '60%',
        },
        {
            name: 'escClosable',
            title: 'ESC关闭',
            valueType: 'bool',
            description: '是否允许通过ESC键关闭模态框',
            defaultValue: true,
            example: false,
        },
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'info',
                        title: '信息',
                        usage: '普通信息提示',
                    },
                    {
                        value: 'success',
                        title: '成功',
                        usage: '操作成功提示',
                    },
                    {
                        value: 'error',
                        title: '错误',
                        usage: '操作错误提示',
                    },
                    {
                        value: 'warning',
                        title: '警告',
                        usage: '操作警告提示',
                    },
                    {
                        value: 'confirm',
                        title: '确认',
                        usage: '操作确认对话框',
                    },
                ],
            },
            description: '预设的模态框类型',
            example: 'confirm',
        },
        {
            name: 'showCancel',
            title: '显示取消按钮',
            valueType: 'bool',
            description: '是否显示取消按钮',
            defaultValue: true,
            example: false,
        },
    ],
    events: [
        {
            name: 'update:show',
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
            name: 'ok',
            description: '点击确认按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '事件对象',
                },
            ],
        },
        {
            name: 'cancel',
            description: '点击取消按钮或关闭按钮时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '事件对象',
                },
            ],
        },
        {
            name: 'afterEnter',
            description: '模态框完全显示后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '模态框DOM元素',
                },
            ],
        },
        {
            name: 'afterLeave',
            description: '模态框完全关闭后触发',
            parameters: [
                {
                    name: 'el',
                    type: 'Element',
                    description: '模态框DOM元素',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '模态框的主要内容区域',
            required: false,
        },
        {
            name: 'title',
            description: '自定义标题区域内容',
            required: false,
        },
        {
            name: 'footer',
            description: '自定义底部区域内容',
            required: false,
        },
    ],
    exposes: [
        {
            name: 'confirm',
            description: '全局方法，显示确认对话框',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'info',
            description: '全局方法，显示信息提示对话框',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'success',
            description: '全局方法，显示成功提示对话框',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'error',
            description: '全局方法，显示错误提示对话框',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'warning',
            description: '全局方法，显示警告提示对话框',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '配置选项',
                },
            ],
        },
        {
            name: 'update',
            description: '更新已显示的模态框配置',
            parameters: [
                {
                    name: 'options',
                    type: 'object',
                    description: '新的配置选项',
                },
            ],
        },
        {
            name: 'destroy',
            description: '销毁已显示的模态框',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '如何创建一个基础模态框？',
            output: '[场景说明] 创建一个基础模态框，包含标题和内容\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开模态框</FButton>\n  <FModal v-model:show="show" title="基础模态框">\n    <p>这是模态框的内容</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 使用v-model:show控制显示状态，确保可关闭',
        },
        {
            input: '怎么设置模态框宽度为800px？',
            output: '[场景说明] 设置自定义宽度的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开宽模态框</FButton>\n  <FModal v-model:show="show" title="宽模态框" :width="800">\n    <p>宽度设置为800px的模态框</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 通过width属性设置自定义宽度，注意响应式设计',
        },
        {
            input: '如何创建一个全屏模态框？',
            output: '[场景说明] 创建全屏显示的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开全屏模态框</FButton>\n  <FModal v-model:show="show" title="全屏模态框" full-screen>\n    <p>全屏显示的模态框内容</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 使用full-screen属性实现全屏显示，适合内容较多的场景',
        },
        {
            input: '怎么自定义模态框的标题？',
            output: '[场景说明] 使用插槽自定义模态框标题\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开自定义标题模态框</FButton>\n  <FModal v-model:show="show">\n    <template #title>\n      <div style="display: flex; align-items: center;">\n        <span style="color: red;">自定义</span>\n        <span>标题</span>\n      </div>\n    </template>\n    <p>使用插槽自定义标题的模态框</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 通过title插槽实现完全自定义的标题区域',
        },
        {
            input: '如何禁用点击遮罩关闭？',
            output: '[场景说明] 禁用通过点击遮罩关闭模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开安全模态框</FButton>\n  <FModal v-model:show="show" title="安全模态框" :mask-closable="false">\n    <p>必须通过按钮关闭的模态框</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 设置mask-closable为false防止误操作关闭重要模态框',
        },
        {
            input: '怎么创建确认对话框？',
            output: '[场景说明] 创建确认操作的对话框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">删除数据</FButton>\n  <FModal \n    v-model:show="show" \n    title="确认删除" \n    type="confirm"\n    @ok="handleOk"\n    @cancel="show = false"\n  >\n    <p>确定要删除这条数据吗？</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst handleOk = () => {\n  // 执行删除操作\n  show.value = false;\n};\n</script>\n[最佳实践] 使用type=\'confirm\'创建确认对话框，处理ok和cancel事件',
        },
        {
            input: '如何显示加载状态的确认按钮？',
            output: '[场景说明] 异步操作时显示加载状态\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">提交数据</FButton>\n  <FModal \n    v-model:show="show" \n    title="数据提交"\n    :ok-loading="loading"\n    @ok="handleSubmit"\n  >\n    <p>请确认提交的数据</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst loading = ref(false);\nconst handleSubmit = async () => {\n  loading.value = true;\n  await submitData(); // 模拟异步操作\n  loading.value = false;\n  show.value = false;\n};\n</script>\n[最佳实践] 使用ok-loading控制按钮加载状态，提升用户体验',
        },
        {
            input: '怎么使用全局方法显示提示？',
            output: '[场景说明] 使用全局方法显示信息提示\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="showInfo">显示提示</FButton>\n</template>\n\n<script setup>\nimport { FModal } from \'@fesjs/fes-design\';\nconst showInfo = () => {\n  FModal.info({\n    title: \'提示\',\n    content: \'操作成功完成\',\n    okText: \'知道了\'\n  });\n};\n</script>\n[最佳实践] 使用全局方法快速显示简单提示，无需维护状态',
        },
        {
            input: '我设置了width但没效果',
            output: '[错误分析] 可能在全屏模式下设置了width属性，全屏模式下width无效\n[正确代码] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开模态框</FButton>\n  <FModal v-model:show="show" title="正确示例" :width="600">\n    <p>正常宽度的模态框</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[注意事项] 1. 确保没有设置full-screen属性 2. width值应为数字类型',
        },
        {
            input: '点击遮罩无法关闭模态框',
            output: '[错误分析] 可能同时设置了mask=false和maskClosable=true\n[正确代码] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开模态框</FButton>\n  <FModal \n    v-model:show="show" \n    title="正确示例" \n    :mask="true"\n    :mask-closable="true"\n  >\n    <p>可点击遮罩关闭的模态框</p>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[注意事项] 1. mask必须为true 2. maskClosable控制关闭行为',
        },
        {
            input: '模态框内容不滚动',
            output: '[错误分析] 可能未设置maxHeight或内容高度不足\n[正确代码] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开长内容模态框</FButton>\n  <FModal \n    v-model:show="show" \n    title="长内容" \n    :max-height="300"\n  >\n    <div v-for="i in 20" :key="i">内容行 {{i}}</div>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[注意事项] 1. 确保内容高度超过maxHeight 2. maxHeight可以是像素值或百分比',
        },
        {
            input: '空状态下的模态框怎么处理？',
            output: '[场景说明] 处理内容可能为空的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开模态框</FButton>\n  <FModal v-model:show="show" title="空状态处理">\n    <template v-if="items.length">\n      <div v-for="item in items" :key="item.id">{{item.name}}</div>\n    </template>\n    <FEmpty v-else description="暂无数据" />\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst items = ref([]); // 可能为空的数据\n</script>\n[最佳实践] 使用条件渲染处理空状态，保持良好用户体验',
        },
        {
            input: '超大内容怎么在模态框中展示？',
            output: '[场景说明] 展示超长内容的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开长内容模态框</FButton>\n  <FModal \n    v-model:show="show" \n    title="长内容" \n    full-screen\n    :footer="false"\n  >\n    <div style="padding: 20px;">\n      <!-- 非常长的内容 -->\n    </div>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 1. 使用full-screen全屏显示 2. 移除footer增加空间 3. 添加内边距',
        },
        {
            input: '怎么同时打开多个模态框？',
            output: '[场景说明] 实现多层模态框叠加\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show1 = true">打开第一层</FButton>\n  <FModal v-model:show="show1" title="第一层">\n    <FButton @click="show2 = true">打开第二层</FButton>\n    <FModal v-model:show="show2" title="第二层">\n      <p>第二层模态框内容</p>\n    </FModal>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show1 = ref(false);\nconst show2 = ref(false);\n</script>\n[注意事项] 1. 避免过多层级影响体验 2. 考虑使用抽屉组件替代深层模态',
        },
        {
            input: '模态框怎么覆盖默认样式？',
            output: '[场景说明] 自定义模态框样式\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开自定义样式模态框</FButton>\n  <FModal \n    v-model:show="show" \n    title="自定义样式"\n    content-class="custom-modal"\n  >\n    <p>自定义样式的模态框内容</p>\n  </FModal>\n</template>\n\n<style>\n.custom-modal {\n  background: #f0f0f0;\n  border-radius: 8px;\n}\n</style>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\n</script>\n[最佳实践] 1. 使用content-class添加自定义类名 2. 避免直接修改组件内部样式',
        },
        {
            input: '怎么和表单组件一起使用？',
            output: '[场景说明] 模态框中嵌入表单\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">打开表单模态框</FButton>\n  <FModal \n    v-model:show="show" \n    title="表单提交"\n    @ok="handleSubmit"\n    @cancel="resetForm"\n  >\n    <FForm :model="form">\n      <FFormItem label="用户名">\n        <FInput v-model="form.username" />\n      </FFormItem>\n      <!-- 更多表单项 -->\n    </FForm>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst form = ref({ username: \'\' });\nconst handleSubmit = () => {\n  // 提交表单逻辑\n  show.value = false;\n};\nconst resetForm = () => {\n  form.value = { username: \'\' };\n  show.value = false;\n};\n</script>\n[最佳实践] 1. 处理ok和cancel事件 2. 重置表单状态',
        },
        {
            input: '怎么实现动态更新模态框内容？',
            output: '[场景说明] 动态更新已显示的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="showModal">动态更新模态框</FButton>\n</template>\n\n<script setup>\nimport { FModal } from \'@fesjs/fes-design\';\nconst showModal = () => {\n  const modal = FModal.info({\n    title: \'初始标题\',\n    content: \'初始内容\'\n  });\n  \n  setTimeout(() => {\n    modal.update({\n      title: \'更新后的标题\',\n      content: \'3秒后更新的内容\'\n    });\n  }, 3000);\n};\n</script>\n[最佳实践] 1. 保存modal实例 2. 使用update方法动态更新',
        },
        {
            input: '模态框怎么显示表格数据？',
            output: '[场景说明] 在模态框中展示表格数据\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">查看数据</FButton>\n  <FModal \n    v-model:show="show" \n    title="数据表格" \n    :width="800"\n    :max-height="500"\n  >\n    <FTable \n      :columns="columns" \n      :data="data" \n      size="small"\n    />\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst columns = [\n  { title: \'ID\', dataIndex: \'id\' },\n  // 更多列定义\n];\nconst data = [\n  { id: 1, name: \'Item 1\' },\n  // 更多数据\n];\n</script>\n[最佳实践] 1. 设置合适宽度和maxHeight 2. 使用小型表格(size="small")',
        },
        {
            input: '怎么用模态框展示图片？',
            output: '[场景说明] 在模态框中展示大图\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">查看图片</FButton>\n  <FModal \n    v-model:show="show" \n    :footer="false"\n    :closable="true"\n    :mask-closable="true"\n  >\n    <img \n      :src="imageUrl" \n      style="max-width: 100%; max-height: 80vh; display: block; margin: 0 auto;"\n    />\n  </FModal>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nconst show = ref(false);\nconst imageUrl = ref(\'path/to/image.jpg\');\n</script>\n[最佳实践] 1. 移除footer增加空间 2. 控制图片最大尺寸 3. 允许通过多种方式关闭',
        },
        {
            input: '模态框怎么实现步骤引导？',
            output: '[场景说明] 实现分步引导的模态框\n[代码实现] <!-- correct -->\n<template>\n  <FButton @click="show = true">开始引导</FButton>\n  <FModal \n    v-model:show="show" \n    :title="steps[currentStep].title"\n    @ok="nextStep"\n    :ok-text="isLastStep ? \'完成\' : \'下一步\'"\n    @cancel="show = false"\n  >\n    <div>{{ steps[currentStep].content }}</div>\n    <div style="margin-top: 20px; text-align: center;">\n      步骤 {{currentStep + 1}}/{{steps.length}}\n    </div>\n  </FModal>\n</template>\n\n<script setup>\nimport { ref, computed } from \'vue\';\nconst show = ref(false);\nconst currentStep = ref(0);\nconst steps = [\n  { title: \'欢迎\', content: \'这是第一步引导内容\' },\n  // 更多步骤\n];\nconst isLastStep = computed(() => currentStep.value === steps.length - 1);\nconst nextStep = () => {\n  if (isLastStep.value) {\n    show.value = false;\n    currentStep.value = 0;\n  } else {\n    currentStep.value++;\n  }\n};\n</script>\n[最佳实践] 1. 管理当前步骤状态 2. 动态更新标题和按钮文本',
        },
    ],
};
