import type { IComponentMetadata } from '../type';

export const datePickerMeta: IComponentMetadata = {
    title: '日期选择',
    componentName: 'FDatePicker',
    description: '功能强大的日期选择组件，支持多种日期格式选择、范围选择、多选等场景。提供丰富的日期限制功能，可精确控制可选日期范围和时间段。',
    scenarios: [
        '表单日期选择：在表单中使用基础日期选择器，用于收集用户输入的日期信息，如生日、预约日期等。',
        '报表时间范围选择：在数据报表页面使用日期范围选择器，方便用户自定义查询时间范围。',
        '排班系统：使用日期多选功能实现员工排班管理，支持批量选择多个日期。',
        '预约系统：结合禁用日期功能，限制不可预约的日期和时间段。',
        '数据统计：使用季度/年度选择器进行周期性数据统计和分析。',
        '项目管理：使用日期范围选择器设置项目起止时间，并限制最大可选区间。',
        '考勤系统：结合快捷选项功能，快速选择常用日期范围进行考勤查询。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单场景下建议放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'type',
            target: 'control',
            effect: '当type为datemultiple时，control属性强制为true',
            notes: [
                '多选模式下必须显示控制区域',
                '确保用户能够明确完成多选操作',
            ],
        },
        {
            source: 'disabled',
            target: [
                'clearable',
                'control',
            ],
            effect: '禁用状态下清除按钮和控制区域无效',
            notes: [
                '保持禁用状态的一致性',
                '防止用户误操作',
            ],
        },
    ],
    props: [
        {
            name: 'modelValue',
            title: '选中值',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    {
                        type: 'arrayOf',
                        value: 'number',
                    },
                ],
            },
            description: '日期值，支持v-model双向绑定',
            example: 'Date.now()',
        },
        {
            name: 'type',
            title: '选择类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'date',
                        title: '日期',
                        usage: '基础日期选择',
                    },
                    {
                        value: 'datetime',
                        title: '日期时间',
                        usage: '精确到秒的时间选择',
                    },
                    {
                        value: 'datemultiple',
                        title: '日期多选',
                        usage: '同时选择多个日期',
                    },
                    {
                        value: 'daterange',
                        title: '日期范围',
                        usage: '选择开始和结束日期',
                    },
                    {
                        value: 'datetimerange',
                        title: '日期时间范围',
                        usage: '精确到秒的时间范围选择',
                    },
                    {
                        value: 'datemonthrange',
                        title: '年月范围',
                        usage: '选择月份范围',
                    },
                    {
                        value: 'year',
                        title: '年',
                        usage: '仅选择年份',
                    },
                    {
                        value: 'month',
                        title: '月',
                        usage: '仅选择月份',
                    },
                    {
                        value: 'quarter',
                        title: '季度',
                        usage: '选择季度',
                    },
                ],
            },
            defaultValue: 'date',
            description: '选择器类型，影响可选的日期格式和交互方式',
            example: 'date',
        },
        {
            name: 'disabledDate',
            title: '禁用日期',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'date',
                        type: 'Date',
                        description: '待判断的日期对象',
                    },
                ],
                returnType: 'bool',
            },
            description: '自定义禁用日期规则，返回true表示禁用该日期',
            example: '(date) => date.getDay() === 0',
        },
        {
            name: 'disabledTime',
            title: '禁用时间',
            valueType: {
                type: 'func',
                parameters: [
                    {
                        name: 'date',
                        type: 'Date',
                        description: '待判断的日期对象',
                    },
                ],
                returnType: {
                    type: 'shape',
                    value: [
                        {
                            name: 'disabledHours',
                            title: '禁用小时',
                            valueType: {
                                type: 'func',
                                returnType: 'bool',
                            },
                            example: '(date) => true',
                        },
                        {
                            name: 'disabledMinutes',
                            title: '禁用分钟',
                            valueType: {
                                type: 'func',
                                returnType: 'bool',
                            },
                            example: '(date) => true',
                        },
                        {
                            name: 'disabledSeconds',
                            title: '禁用秒',
                            valueType: {
                                type: 'func',
                                returnType: 'bool',
                            },
                            example: '(date) => true',
                        },
                    ],

                },
            },
            description: '自定义禁用时间规则，可分别控制小时、分钟、秒的禁用状态',
            example: '(date) => ({ disabledHours: () => false })',
        },
        {
            name: 'maxDate',
            title: '最大日期',
            valueType: 'date',
            description: '可选择的最大日期，超过该日期的选项将被禁用',
            example: new Date('2025-12-31'),
        },
        {
            name: 'minDate',
            title: '最小日期',
            valueType: 'date',
            description: '可选择的最小日期，早于该日期的选项将被禁用',
            example: new Date('2020-01-01'),
        },
        {
            name: 'maxRange',
            title: '最大区间',
            valueType: 'string',
            description: '日期范围选择时的最大可选天数，格式如\'7D\'表示7天',
            example: '30D',
        },
        {
            name: 'defaultTime',
            title: '默认时间',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    {
                        type: 'arrayOf',
                        value: 'string',
                    },
                ],
            },
            description: '选中日期后的默认时间，非范围选择时为string，范围选择时为string数组',
            example: '09:00:00',
        },
        {
            name: 'popperClass',
            title: '弹窗样式',
            valueType: 'string',
            description: '自定义日期选择弹窗的样式类名',
            example: 'custom-picker',
        },
        {
            name: 'appendToContainer',
            title: '挂载到容器',
            valueType: 'bool',
            defaultValue: true,
            description: '是否将弹窗内容添加到指定的DOM元素',
            example: true,
        },
        {
            name: 'getContainer',
            title: '挂载容器',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '自定义弹窗挂载的DOM节点',
            example: '() => document.getElementById(\'container\')',
        },
        {
            name: 'clearable',
            title: '可清除',
            valueType: 'bool',
            defaultValue: false,
            description: '是否显示清除按钮',
            example: true,
        },
        {
            name: 'disabled',
            title: '禁用',
            valueType: 'bool',
            defaultValue: false,
            description: '是否禁用选择器',
            example: false,
        },
        {
            name: 'placeholder',
            title: '占位文本',
            valueType: 'string',
            description: '未选择时的提示文本，范围选择时可传入数组',
            example: '请选择日期',
        },
        {
            name: 'format',
            title: '时间格式',
            valueType: 'string',
            description: '展示的时间格式，支持date-fns格式字符串',
            example: 'yyyy-MM-dd',
        },
        {
            name: 'hourStep',
            title: '小时步长',
            valueType: 'number',
            defaultValue: 1,
            description: '时间选择时的小时间隔',
            example: 2,
        },
        {
            name: 'minuteStep',
            title: '分钟步长',
            valueType: 'number',
            defaultValue: 1,
            description: '时间选择时的分钟间隔',
            example: 15,
        },
        {
            name: 'secondStep',
            title: '秒钟步长',
            valueType: 'number',
            defaultValue: 1,
            description: '时间选择时的秒钟间隔',
            example: 10,
        },
        {
            name: 'control',
            title: '显示控制',
            valueType: 'bool',
            defaultValue: false,
            description: '是否显示确认按钮，多选模式下强制显示',
            example: true,
        },
        {
            name: 'suffixIcon',
            title: '后缀图标',
            valueType: 'node',
            description: '自定义输入框后缀图标',
            example: '<CalendarOutlined />',
        },
    ],
    events: [
        {
            name: 'change',
            description: '日期值变化时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'number | number[]',
                    description: '当前选中的日期值',
                },
            ],
        },
        {
            name: 'clear',
            description: '点击清除按钮时触发',
            parameters: [],
        },
        {
            name: 'blur',
            description: '输入框失去焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生事件对象',
                },
            ],
        },
        {
            name: 'focus',
            description: '输入框获取焦点时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '原生事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'suffixIcon',
            description: '自定义输入框后缀图标',
            required: false,
        },
        {
            name: 'separator',
            description: '范围选择时的分隔符内容',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础日期选择',
            output: '<!-- correct -->\n[场景说明] 简单的日期选择场景\n[代码实现]\n<FDatePicker v-model="dateValue" />\n[最佳实践] 适用于大多数基础日期选择需求，默认格式为yyyy-MM-dd',
        },
        {
            input: '日期时间选择',
            output: '<!-- correct -->\n[场景说明] 需要精确到秒的时间选择\n[代码实现]\n<FDatePicker \n  v-model="datetimeValue" \n  type="datetime" \n  :hourStep="2" \n  :minuteStep="15" \n/>\n[最佳实践] 通过步长控制提高时间选择效率',
        },
        {
            input: '日期范围选择',
            output: '<!-- correct -->\n[场景说明] 选择日期范围用于报表查询\n[代码实现]\n<FDatePicker \n  v-model="rangeValue" \n  type="daterange" \n  :maxRange="30D" \n  :shortcuts="rangeShortcuts" \n/>\n[最佳实践] 结合快捷选项和最大范围限制提升用户体验',
        },
        {
            input: '禁用周末日期',
            output: '<!-- correct -->\n[场景说明] 预约系统需要禁用周末\n[代码实现]\n<FDatePicker \n  :disabledDate="date => [0, 6].includes(date.getDay())" \n/>\n[最佳实践] 使用disabledDate灵活控制可选日期',
        },
        {
            input: '季度选择',
            output: '<!-- correct -->\n[场景说明] 财务数据按季度统计\n[代码实现]\n<FDatePicker \n  v-model="quarterValue" \n  type="quarter" \n  :minDate="new Date(\'2023-01-01\')" \n/>\n[最佳实践] 结合minDate限制最早可选季度',
        },
        {
            input: '日期多选',
            output: '<!-- correct -->\n[场景说明] 员工排班需要选择多个日期\n[代码实现]\n<FDatePicker \n  v-model="multipleDates" \n  type="datemultiple" \n  :maxDate="new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)" \n/>\n[最佳实践] 限制最多可选30天内的日期',
        },
        {
            input: '自定义时间范围',
            output: '<!-- correct -->\n[场景说明] 限制可选时间为工作日9:00-18:00\n[代码实现]\n<FDatePicker \n  type="datetimerange" \n  :disabledTime="date => ({\n    disabledHours: () => hour < 9 || hour > 18,\n    disabledMinutes: () => date.getDay() === 0\n  })" \n/>\n[最佳实践] 结合disabledTime实现复杂时间限制',
        },
        {
            input: '快捷选项',
            output: '<!-- correct -->\n[场景说明] 提供常用日期范围快捷选择\n[代码实现]\n<FDatePicker \n  :shortcuts="{\n    \'今天\': Date.now(),\n    \'本周\': [startOfWeek, endOfWeek],\n    \'本月\': [startOfMonth, endOfMonth]\n  }" \n/>\n[最佳实践] 根据业务需求定制快捷选项',
        },
        {
            input: '错误的日期格式',
            output: '<!-- error -->\n[错误分析] 使用了不支持的日期格式字符串\n[错误代码]\n<FDatePicker format="DD/MM/YYYY" />\n[正确代码]\n<FDatePicker format="dd/MM/yyyy" />\n[注意事项] 必须使用date-fns支持的格式字符串',
        },
        {
            input: '缺少必要属性',
            output: '<!-- error -->\n[错误分析] 多选模式下未使用数组类型绑定值\n[错误代码]\n<FDatePicker type="datemultiple" v-model="singleDate" />\n[正确代码]\n<FDatePicker type="datemultiple" v-model="dateArray" />\n[注意事项] 多选模式必须使用数组类型v-model',
        },
        {
            input: '错误的时间范围',
            output: '<!-- error -->\n[错误分析] 时间范围选择器使用了字符串默认时间\n[错误代码]\n<FDatePicker type="datetimerange" defaultTime="09:00:00" />\n[正确代码]\n<FDatePicker type="datetimerange" :defaultTime="[\'09:00:00\', \'18:00:00\']" />\n[注意事项] 范围选择器需要数组形式的默认时间',
        },
        {
            input: '空状态处理',
            output: '<!-- correct -->\n[场景说明] 处理未选择日期的空状态\n[代码实现]\n<FDatePicker \n  v-model="dateValue" \n  placeholder="请选择日期" \n  :clearable="true" \n/>\n[最佳实践] 提供清晰的占位提示和清除功能',
        },
        {
            input: '极值日期',
            output: '<!-- correct -->\n[场景说明] 处理接近时间戳极限值的日期\n[代码实现]\n<FDatePicker \n  :minDate="new Date(1970, 0, 1)" \n  :maxDate="new Date(2038, 0, 1)" \n/>\n[最佳实践] 避免使用超出安全范围的时间戳',
        },
        {
            input: '异常数据恢复',
            output: '<!-- correct -->\n[场景说明] 处理传入异常日期值的情况\n[代码实现]\n<FDatePicker \n  v-model="dateValue" \n  @change="handleInvalidDate" \n/>\n[最佳实践] 通过change事件监听并修正异常值',
        },
        {
            input: '怎么让日期选择器显示中文？',
            output: '<!-- correct -->\n[场景说明] 国际化需求显示中文格式\n[代码实现]\n<FConfigProvider locale="zhCN">\n  <FDatePicker />\n</FConfigProvider>\n[最佳实践] 使用FConfigProvider配置全局语言',
        },
        {
            input: '日期选择器能选以前的时间吗',
            output: '<!-- correct -->\n[场景说明] 限制只能选择未来日期\n[代码实现]\n<FDatePicker :disabledDate="date => date < new Date()" />\n[最佳实践] 使用disabledDate灵活控制可选日期范围',
        },
        {
            input: '日期选择器样式怎么改',
            output: '<!-- correct -->\n[场景说明] 自定义日期选择器样式\n[代码实现]\n<FDatePicker \n  class="custom-picker" \n  popperClass="custom-popper" \n/>\n<style>\n.custom-picker { width: 300px; }\n.custom-popper { background: #f0f0f0; }\n</style>\n[最佳实践] 通过class和popperClass分别控制输入框和弹窗样式',
        },
        {
            input: '样式覆盖案例',
            output: '<!-- correct -->\n[场景说明] 完全自定义日期选择器样式\n[代码实现]\n<FDatePicker \n  class="full-custom" \n  :style="{\n    \'--picker-color\': \'#1890ff\',\n    \'--picker-active-color\': \'#096dd9\'\n  }" \n/>\n[最佳实践] 通过CSS变量深度定制主题色',
        },
        {
            input: '与表单组件组合使用',
            output: '<!-- correct -->\n[场景说明] 在表单中使用日期选择器\n[代码实现]\n<FForm :model="formData">\n  <FFormItem label="出生日期" prop="birthday">\n    <FDatePicker \n      v-model="formData.birthday" \n      :maxDate="new Date()" \n    />\n  </FFormItem>\n</FForm>\n[最佳实践] 结合表单验证和日期限制',
        },
        {
            input: '与表格筛选组合使用',
            output: '<!-- correct -->\n[场景说明] 在表格筛选中使用日期范围\n[代码实现]\n<FTable>\n  <template #filter>\n    <FDatePicker \n      type="daterange" \n      v-model="filterDateRange" \n      @change="handleFilterChange" \n    />\n  </template>\n</FTable>\n[最佳实践] 通过change事件触发表格数据刷新',
        },
    ],
};
