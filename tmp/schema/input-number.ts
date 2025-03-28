import type { IComponentMetadata } from '../type';

export const inputNumberMeta: IComponentMetadata = {
  "title": "数字输入框",
  "componentName": "FInputNumber",
  "description": "数字输入框组件，用于精确输入数字值。支持设置范围、步长、精度控制，并提供前缀/后缀自定义插槽。适用于需要精确数值输入的场景。",
  "scenarios": [
    "表单数值输入：在表单中使用数字输入框收集用户输入的数值数据，如年龄、数量等",
    "参数配置界面：在系统配置界面中使用，允许用户设置精确的参数值",
    "金融金额输入：结合货币符号前缀，用于金融类应用的金额输入",
    "百分比输入：结合百分号后缀，用于比例类数据的输入",
    "科学计算：设置高精度数值，用于科学计算类应用的参数输入"
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
        "min",
        "max",
        "step",
        "precision"
      ],
      "effect": "禁用状态下所有数值限制属性无效",
      "notes": [
        "当disabled为true时，min/max/step/precision等属性不会生效"
      ]
    },
    {
      "source": "precision",
      "target": "step",
      "effect": "精度设置会影响步长的有效位数",
      "notes": [
        "当设置precision后，step的小数位数不应超过precision值"
      ]
    }
  ],
  "props": [
    {
      "name": "modelValue",
      "title": "绑定值",
      "valueType": "number",
      "description": "双向绑定的数值，表示当前输入框的值",
      "required": true,
      "example": 10
    },
    {
      "name": "min",
      "title": "最小值",
      "valueType": "number",
      "description": "允许输入的最小数值，默认无限制",
      "defaultValue": "-Infinity",
      "example": 0
    },
    {
      "name": "max",
      "title": "最大值",
      "valueType": "number",
      "description": "允许输入的最大数值，默认无限制",
      "defaultValue": "Infinity",
      "example": 100
    },
    {
      "name": "step",
      "title": "步长",
      "valueType": "number",
      "description": "每次点击增减按钮时的变化量",
      "defaultValue": 1,
      "example": 5
    },
    {
      "name": "showStepAction",
      "title": "显示步进按钮",
      "valueType": "bool",
      "description": "是否显示增减按钮",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用输入框",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "placeholder",
      "title": "提示文本",
      "valueType": "string",
      "description": "输入框为空时显示的提示文本",
      "example": "请输入数字"
    },
    {
      "name": "precision",
      "title": "数值精度",
      "valueType": "number",
      "description": "数值精度，即小数点后保留的位数",
      "example": 2
    },
    {
      "name": "autofocus",
      "title": "自动聚焦",
      "valueType": "bool",
      "description": "是否在组件挂载后自动获取焦点",
      "defaultValue": false,
      "example": true
    }
  ],
  "events": [
    {
      "name": "change",
      "description": "绑定值发生变化时触发",
      "parameters": [
        {
          "name": "currentValue",
          "type": "number",
          "description": "当前值"
        },
        {
          "name": "oldValue",
          "type": "number",
          "description": "旧值"
        }
      ]
    },
    {
      "name": "blur",
      "description": "输入框失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        }
      ]
    },
    {
      "name": "focus",
      "description": "输入框获得焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "prefix",
      "description": "输入框前缀内容",
      "required": false
    },
    {
      "name": "suffix",
      "description": "输入框后缀内容",
      "required": false
    }
  ],
  "templates": [
    {
      "input": "基础数字输入框",
      "output": "[场景说明] 基本数字输入场景\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" />\n[最佳实践] 使用v-model进行双向绑定，确保数据同步"
    },
    {
      "input": "带范围限制的输入框",
      "output": "[场景说明] 限制输入范围在0-100之间\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" :min=\"0\" :max=\"100\" />\n[最佳实践] 同时设置min和max可以确保输入值在合理范围内"
    },
    {
      "input": "高精度数值输入",
      "output": "[场景说明] 需要输入保留2位小数的数值\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" :precision=\"2\" />\n[注意事项] 精度设置会影响四舍五入规则"
    },
    {
      "input": "禁用状态的输入框",
      "output": "[场景说明] 不可编辑的数值展示\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" disabled />\n[最佳实践] 使用disabled状态防止用户误操作"
    },
    {
      "input": "带步长的输入框",
      "output": "[场景说明] 每次增减5个单位\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" :step=\"5\" />\n[注意事项] 步长值应为正数"
    },
    {
      "input": "带货币符号的输入框",
      "output": "[场景说明] 金额输入场景\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\">\n  <template #prefix>¥</template>\n</FInputNumber>\n[最佳实践] 使用prefix插槽添加货币符号"
    },
    {
      "input": "百分比输入框",
      "output": "[场景说明] 百分比数值输入\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\">\n  <template #suffix>%</template>\n</FInputNumber>\n[最佳实践] 使用suffix插槽添加百分比符号"
    },
    {
      "input": "自动聚焦的输入框",
      "output": "[场景说明] 页面加载后立即可输入\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" autofocus />\n[注意事项] 同一页面只应有一个autofocus元素"
    },
    {
      "input": "错误的精度设置",
      "output": "[错误分析] 精度值为负数\n[正确代码] <!-- correct -->\n<FInputNumber v-model=\"value\" :precision=\"2\" />\n[注意事项] precision必须是非负整数"
    },
    {
      "input": "错误的步长设置",
      "output": "[错误分析] 步长为0导致无法增减\n[正确代码] <!-- correct -->\n<FInputNumber v-model=\"value\" :step=\"1\" />\n[注意事项] step必须大于0"
    },
    {
      "input": "缺少v-model绑定",
      "output": "[错误分析] 缺少双向绑定\n[正确代码] <!-- correct -->\n<FInputNumber v-model=\"value\" />\n[注意事项] 必须使用v-model进行数据绑定"
    },
    {
      "input": "空值状态处理",
      "output": "[场景说明] 处理初始值为空的情况\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" :min=\"0\" />\n[注意事项] 空值会被视为0处理"
    },
    {
      "input": "极值测试",
      "output": "[场景说明] 测试极大值输入\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" :max=\"Number.MAX_SAFE_INTEGER\" />\n[注意事项] 注意JavaScript数值范围限制"
    },
    {
      "input": "数字输入框怎么用",
      "output": "[场景说明] 基本使用方式\n[代码实现] <!-- correct -->\n<FInputNumber v-model=\"value\" />\n[最佳实践] 最简单的数字输入框实现"
    },
    {
      "input": "输入框步进按钮不见了",
      "output": "[错误分析] 可能设置了showStepAction为false\n[正确代码] <!-- correct -->\n<FInputNumber v-model=\"value\" :showStepAction=\"true\" />\n[注意事项] 默认显示步进按钮，可通过showStepAction控制"
    },
    {
      "input": "数字输入框不能输入小数",
      "output": "[错误分析] 可能设置了precision为0\n[正确代码] <!-- correct -->\n<FInputNumber v-model=\"value\" :precision=\"2\" />\n[注意事项] precision控制小数位数，0表示只允许整数"
    },
    {
      "input": "自定义样式",
      "output": "[场景说明] 自定义输入框样式\n[代码实现] <!-- correct -->\n<FInputNumber \n  v-model=\"value\" \n  class=\"custom-input\" \n  style=\"width: 200px\" \n/>\n[最佳实践] 通过class和style属性自定义外观"
    },
    {
      "input": "表单组合使用",
      "output": "[场景说明] 在表单中使用\n[代码实现] <!-- correct -->\n<FForm>\n  <FFormItem label=\"数量\">\n    <FInputNumber v-model=\"value\" />\n  </FFormItem>\n</FForm>\n[最佳实践] 配合表单组件实现完整的数据收集"
    },
    {
      "input": "与空间布局组件配合",
      "output": "[场景说明] 多个输入框排列\n[代码实现] <!-- correct -->\n<FSpace>\n  <FInputNumber v-model=\"value1\" />\n  <FInputNumber v-model=\"value2\" />\n</FSpace>\n[最佳实践] 使用FSpace组件实现间距布局"
    }
  ]
};
