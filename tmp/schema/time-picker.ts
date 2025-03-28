import type { IComponentMetadata } from '../type';

export const timePickerMeta: IComponentMetadata = {
  "title": "时间选择",
  "componentName": "FTimePicker",
  "description": "时间选择组件，用于选择或输入时间值。支持自定义时间格式、步长间隔、禁用特定时间选项等功能，适用于各种需要时间输入的场景。",
  "scenarios": [
    "表单时间输入：在表单中使用基础时间选择器，收集用户输入的时间数据，确保数据格式统一。",
    "预约系统：在预约系统中使用自定义格式的时间选择器，限制可选时间范围，防止选择无效时间。",
    "数据报表：在数据报表过滤条件中使用带控制区域的时间选择器，方便用户快速选择常用时间范围。",
    "后台管理：在后台管理系统使用禁用状态的时间选择器，展示不可编辑的时间数据。",
    "移动端适配：使用挂载到特定容器的模式，解决移动端弹窗位置问题。"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下建议放在表单项组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "disabled",
      "target": [
        "clearable",
        "control"
      ],
      "effect": "禁用状态下清除按钮和控制区域无效",
      "notes": [
        "当disabled为true时，clearable和control属性不会生效",
        "适用于需要只读展示时间的场景"
      ]
    },
    {
      "source": "format",
      "target": [
        "hourStep",
        "minuteStep",
        "secondStep"
      ],
      "effect": "时间格式影响步长属性的有效性",
      "notes": [
        "当format不包含小时时，hourStep无效",
        "当format不包含分钟时，minuteStep无效",
        "当format不包含秒时，secondStep无效"
      ]
    }
  ],
  "props": [
    {
      "name": "modelValue",
      "title": "选中时间",
      "valueType": "string",
      "description": "当前选中的时间值，使用v-model双向绑定",
      "example": "12:30:45"
    },
    {
      "name": "open",
      "title": "显示面板",
      "valueType": "bool",
      "description": "控制时间选择面板的显示状态",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "appendToContainer",
      "title": "挂载到容器",
      "valueType": "bool",
      "description": "是否将弹窗内容添加到指定的DOM元素",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "parameters": [],
        "returnType": "HTMLElement"
      },
      "description": "自定义弹窗挂载的容器节点",
      "example": "() => document.getElementById('container')"
    },
    {
      "name": "clearable",
      "title": "可清除",
      "valueType": "bool",
      "description": "是否显示清除按钮",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用时间选择器",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "placeholder",
      "title": "提示文本",
      "valueType": "string",
      "description": "未选择时的提示文字",
      "example": "请选择时间"
    },
    {
      "name": "format",
      "title": "时间格式",
      "valueType": "string",
      "description": "显示的时间格式，如HH:mm:ss",
      "defaultValue": "HH:mm:ss",
      "example": "HH时mm分"
    },
    {
      "name": "hourStep",
      "title": "小时间隔",
      "valueType": "number",
      "description": "小时选项的间隔步长",
      "defaultValue": 1,
      "example": 2
    },
    {
      "name": "minuteStep",
      "title": "分钟间隔",
      "valueType": "number",
      "description": "分钟选项的间隔步长",
      "defaultValue": 1,
      "example": 5
    },
    {
      "name": "secondStep",
      "title": "秒钟间隔",
      "valueType": "number",
      "description": "秒钟选项的间隔步长",
      "defaultValue": 1,
      "example": 10
    },
    {
      "name": "disabledHours",
      "title": "禁用小时",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "hour",
            "type": "number",
            "description": "当前小时值"
          }
        ],
        "returnType": "bool"
      },
      "description": "禁用特定小时选项的函数",
      "example": "(hour) => hour < 8 || hour > 20"
    },
    {
      "name": "disabledMinutes",
      "title": "禁用分钟",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "hour",
            "type": "number",
            "description": "当前小时值"
          },
          {
            "name": "minute",
            "type": "number",
            "description": "当前分钟值"
          }
        ],
        "returnType": "bool"
      },
      "description": "禁用特定分钟选项的函数",
      "example": "(hour, minute) => minute % 15 !== 0"
    },
    {
      "name": "disabledSeconds",
      "title": "禁用秒钟",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "hour",
            "type": "number",
            "description": "当前小时值"
          },
          {
            "name": "minute",
            "type": "number",
            "description": "当前分钟值"
          },
          {
            "name": "second",
            "type": "number",
            "description": "当前秒钟值"
          }
        ],
        "returnType": "bool"
      },
      "description": "禁用特定秒钟选项的函数",
      "example": "(h, m, s) => s > 30"
    },
    {
      "name": "control",
      "title": "控制区域",
      "valueType": "bool",
      "description": "是否显示下方的控制按钮区域",
      "defaultValue": true,
      "example": false
    }
  ],
  "events": [
    {
      "name": "change",
      "description": "时间值变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string",
          "description": "当前选择的时间值"
        }
      ]
    },
    {
      "name": "focus",
      "description": "获取焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    },
    {
      "name": "blur",
      "description": "失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "addon",
      "description": "自定义底部内容",
      "scope": {
        "activeTime": "string",
        "closePanel": "function"
      }
    }
  ],
  "templates": [
    {
      "input": "基础时间选择器",
      "output": "<!-- correct -->\n[场景说明] 基础时间选择场景，用于表单时间输入\n[代码实现]\n<FTimePicker \n  v-model=\"time\" \n  placeholder=\"请选择时间\"\n/>\n[最佳实践] 建议设置合理的placeholder提示用户输入格式"
    },
    {
      "input": "禁用特定时间选项",
      "output": "<!-- correct -->\n[场景说明] 预约系统限制可选时间范围\n[代码实现]\n<FTimePicker\n  :disabled-hours=\"(h) => h < 9 || h > 18\"\n  :disabled-minutes=\"(h, m) => h === 12 && m < 30\"\n/>\n[最佳实践] 提供清晰的禁用提示，避免用户困惑"
    },
    {
      "input": "自定义时间格式",
      "output": "<!-- correct -->\n[场景说明] 需要显示中文格式的时间\n[代码实现]\n<FTimePicker\n  format=\"HH时mm分\"\n  placeholder=\"请选择时间\"\n/>\n[注意事项] 确保format与后台接口格式兼容"
    },
    {
      "input": "不带控制区域",
      "output": "<!-- correct -->\n[场景说明] 需要即时反馈的时间选择\n[代码实现]\n<FTimePicker\n  :control=\"false\"\n  @change=\"handleTimeChange\"\n/>\n[最佳实践] 适合不需要确认按钮的即时选择场景"
    },
    {
      "input": "自定义底部内容",
      "output": "<!-- correct -->\n[场景说明] 需要添加额外操作按钮\n[代码实现]\n<FTimePicker>\n  <template #addon=\"{ activeTime, closePanel }\">\n    <FButton @click=\"handleConfirm(activeTime)\">\n      确认\n    </FButton>\n  </template>\n</FTimePicker>\n[注意事项] 确保自定义内容不影响原有功能"
    },
    {
      "input": "错误示例：缺少v-model",
      "output": "<!-- error -->\n[错误分析] 时间选择器缺少双向绑定，无法获取用户选择的值\n[正确代码]\n<FTimePicker v-model=\"time\" />\n[注意事项] 必须使用v-model或modelValue绑定数据"
    },
    {
      "input": "错误示例：无效的format格式",
      "output": "<!-- error -->\n[错误分析] 使用了无效的时间格式符号\n[正确代码]\n<FTimePicker format=\"HH:mm:ss\" />\n[注意事项] 格式字符串只能包含H、m、s等有效符号"
    },
    {
      "input": "边界条件：空值处理",
      "output": "<!-- correct -->\n[场景说明] 处理初始值为空的情况\n[代码实现]\n<FTimePicker\n  v-model=\"time\"\n  :clearable=\"true\"\n  @change=\"handleTimeChange\"\n/>\n[最佳实践] 建议设置clearable允许用户清空选择"
    },
    {
      "input": "如何让时间选择器显示中文格式？",
      "output": "<!-- correct -->\n[场景说明] 需要显示中文格式的时间选择器\n[代码实现]\n<FTimePicker format=\"HH时mm分ss秒\" />\n[最佳实践] 使用format属性自定义显示格式，注意与后台数据格式的转换"
    },
    {
      "input": "怎么禁用中午12点到1点的时间？",
      "output": "<!-- correct -->\n[场景说明] 需要禁用特定时间段\n[代码实现]\n<FTimePicker\n  :disabled-hours=\"(h) => h === 12\"\n  :disabled-minutes=\"(h, m) => h === 12 && m >= 0\"\n/>\n[注意事项] 需要同时处理小时和分钟禁用逻辑"
    },
    {
      "input": "样式覆盖案例",
      "output": "<!-- correct -->\n[场景说明] 自定义时间选择器样式\n[代码实现]\n<style>\n.custom-picker .fes-time-picker-panel {\n  background: #f0f0f0;\n}\n</style>\n<FTimePicker class=\"custom-picker\" />\n[注意事项] 使用合适的选择器避免样式污染"
    },
    {
      "input": "与表单组件组合使用",
      "output": "<!-- correct -->\n[场景说明] 在表单中使用时间选择器\n[代码实现]\n<FForm>\n  <FFormItem label=\"预约时间\">\n    <FTimePicker v-model=\"form.time\" />\n  </FFormItem>\n</FForm>\n[最佳实践] 配合表单验证规则使用"
    }
  ]
};
