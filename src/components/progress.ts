import type { IComponentMetadata } from '../type';

export const progressMeta: IComponentMetadata = {
    title: '进度条',
    componentName: 'FProgress',
    description: '用于展示任务进度的可视化组件，支持水平和环形两种样式，可自定义颜色、尺寸和文本显示。',
    scenarios: [
        '文件上传进度：显示文件上传的实时进度，让用户了解上传状态',
        '任务处理进度：展示后台任务的执行进度，提供操作反馈',
        '表单填写进度：在多步骤表单中显示当前完成比例，引导用户完成',
        '系统资源监控：展示CPU、内存等系统资源的使用情况',
        '问卷调查进度：在长问卷中显示完成比例，提高用户完成率',
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
            source: 'type',
            target: [
                'showInnerPercent',
                'showOutPercent',
                'height',
                'width',
                'circleSize',
                'showCircleText',
            ],
            effect: '根据进度条类型控制相关属性的可用性',
            notes: [
                '当type为line时，showInnerPercent、showOutPercent和height属性生效',
                '当type为circle时，width、circleSize和showCircleText属性生效',
            ],
        },
        {
            source: 'height',
            target: 'showInnerPercent',
            effect: '高度小于12px时禁用百分比内显',
            notes: [
                '百分比内显需要足够的高度空间',
                '适用于需要紧凑布局但又要显示进度的场景',
            ],
        },
    ],
    props: [
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'line',
                        title: '水平',
                        usage: '适用于常规进度展示，如文件上传、任务处理等',
                    },
                    {
                        value: 'circle',
                        title: '环形',
                        usage: '适用于空间有限或需要视觉突出的场景',
                    },
                ],
            },
            description: '进度条的展示类型，影响整体布局和样式',
            defaultValue: 'line',
            example: 'line',
        },
        {
            name: 'percent',
            title: '百分比',
            valueType: 'number',
            description: '当前进度百分比，范围0-100',
            defaultValue: 0,
            example: 60,
        },
        {
            name: 'color',
            title: '颜色',
            valueType: 'string',
            description: '进度条颜色，支持CSS颜色值或十六进制色号',
            example: '#1890ff',
        },
        {
            name: 'showInnerPercent',
            title: '百分比内显',
            valueType: 'bool',
            description: '是否在进度条内部显示百分比（仅水平进度条有效）',
            defaultValue: false,
            example: true,
        },
        {
            name: 'showOutPercent',
            title: '百分比外显',
            valueType: 'bool',
            description: '是否在进度条外部显示百分比（仅水平进度条有效）',
            defaultValue: false,
            example: false,
        },
        {
            name: 'height',
            title: '高度',
            valueType: 'number',
            description: '水平进度条的高度（像素）',
            defaultValue: 8,
            example: 12,
        },
        {
            name: 'width',
            title: '宽度',
            valueType: 'number',
            description: '环形进度条的宽度（像素）',
            defaultValue: 8,
            example: 10,
        },
        {
            name: 'circleSize',
            title: '环形大小',
            valueType: 'number',
            description: '环形进度条的直径大小（像素）',
            defaultValue: 160,
            example: 200,
        },
        {
            name: 'showCircleText',
            title: '显示文本',
            valueType: 'bool',
            description: '是否在环形进度条中显示文本',
            defaultValue: false,
            example: true,
        },
    ],
    events: [],
    slots: [
        {
            name: 'text',
            description: '自定义进度条文本内容',
            required: false,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础水平进度条',
            output: '<FProgress :percent="60" />',
        },
        {
            input: '带颜色的环形进度条',
            output: '<FProgress type="circle" :percent="75" color="#52c41a" />',
        },
        {
            input: '显示内百分比的水平进度条',
            output: '<FProgress :percent="80" :height="16" :showInnerPercent="true" />',
        },
        {
            input: '自定义文本的进度条',
            output: '<FProgress :percent="50" showOutPercent>\n  <template #text>\n    <span style="color: #1890ff">处理中...</span>\n  </template>\n</FProgress>',
        },
        {
            input: '大尺寸环形进度条',
            output: '<FProgress type="circle" :percent="90" :circleSize="200" :width="12" />',
        },
        {
            input: '错误示例：环形进度条设置高度属性',
            output: '<!-- error -->\n[错误分析] 环形进度条不应设置height属性，应使用width和circleSize控制尺寸\n[正确代码] <FProgress type="circle" :percent="60" :width="10" :circleSize="180" />\n[注意事项] 环形进度条使用width控制线条粗细，circleSize控制整体直径',
        },
        {
            input: '错误示例：水平进度条设置环形属性',
            output: '<!-- error -->\n[错误分析] 水平进度条不应设置circleSize和showCircleText属性\n[正确代码] <FProgress type="line" :percent="40" :height="12" />\n[注意事项] 确保属性与进度条类型匹配，避免无效配置',
        },
        {
            input: '边界条件：0%进度',
            output: '<!-- correct -->\n[场景说明] 展示初始状态的进度条\n[代码实现] <FProgress :percent="0" />\n[最佳实践] 0%进度时应确保UI仍清晰可见，可考虑添加最小宽度',
        },
        {
            input: '边界条件：100%进度',
            output: '<!-- correct -->\n[场景说明] 展示完成状态的进度条\n[代码实现] <FProgress :percent="100" color="#52c41a" />\n[最佳实践] 完成状态可使用绿色等成功色增强视觉反馈',
        },
        {
            input: '边界条件：超过100%的进度',
            output: '<!-- correct -->\n[场景说明] 处理异常进度值\n[代码实现] <FProgress :percent="120" />\n[最佳实践] 组件应自动限制最大值为100%，避免UI溢出',
        },
        {
            input: '怎么让进度条变成红色的？',
            output: '<!-- correct -->\n[场景说明] 自定义进度条颜色\n[代码实现] <FProgress :percent="50" color="#ff4d4f" />\n[最佳实践] 危险操作可使用红色进度条，增强警示效果',
        },
        {
            input: '进度条怎么显示文字',
            output: '<!-- correct -->\n[场景说明] 在进度条上显示自定义文本\n[代码实现] <FProgress :percent="75" showOutPercent>\n  <template #text>\n    已完成75%\n  </template>\n</FProgress>\n[最佳实践] 确保文本颜色与背景有足够对比度',
        },
        {
            input: '环形进度条太小了怎么办',
            output: '<!-- correct -->\n[场景说明] 调整环形进度条尺寸\n[代码实现] <FProgress type="circle" :percent="60" :circleSize="200" />\n[最佳实践] 根据容器空间合理设置circleSize，确保内容清晰可见',
        },
        {
            input: '样式覆盖：圆角进度条',
            output: '<!-- correct -->\n[场景说明] 自定义进度条圆角样式\n[代码实现] <FProgress :percent="50" class="custom-progress" />\n<style>\n.custom-progress .fes-progress-line-inner {\n  border-radius: 10px;\n}\n</style>\n[最佳实践] 使用CSS选择器精准覆盖组件内部样式',
        },
        {
            input: '组合使用：表单中的进度条',
            output: '<!-- correct -->\n[场景说明] 在表单中展示上传进度\n[代码实现] <FForm>\n  <FFormItem label="文件上传">\n    <FUpload>\n      <template #uploaded>\n        <FProgress :percent="uploadPercent" />\n      </template>\n    </FUpload>\n  </FFormItem>\n</FForm>\n[最佳实践] 与上传组件配合使用，提供实时反馈',
        },
        {
            input: '组合使用：仪表盘中的进度环',
            output: '<!-- correct -->\n[场景说明] 在仪表盘中展示资源使用率\n[代码实现] <FCard title="CPU使用率">\n  <FProgress \n    type="circle" \n    :percent="cpuUsage" \n    :circleSize="120"\n    :showCircleText="true"\n  />\n</FCard>\n[最佳实践] 环形进度条适合在空间有限的卡片中展示关键指标',
        },
    ],
};
