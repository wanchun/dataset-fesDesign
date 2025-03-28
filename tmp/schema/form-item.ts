import type { IComponentMetadata } from '../type';

export const formItemMeta: IComponentMetadata = {
  "title": "表单项",
  "componentName": "FFormItem",
  "description": "表单布局组件，用于包裹表单控件并提供标签、校验规则等功能。支持多种校验规则配置和布局控制，是表单系统的基础组件。",
  "scenarios": [
    "表单布局：作为表单控件的容器，提供统一的标签展示和校验规则配置，确保表单结构清晰。",
    "数据校验：通过配置rules属性实现多种校验规则，包括必填、类型、长度、正则等校验。",
    "响应式布局：通过span属性控制表单项在栅格系统中的占比，实现自适应布局。",
    "复杂校验：使用自定义validator函数实现业务特定的校验逻辑，满足复杂校验需求。",
    "错误提示：控制showMessage属性决定是否显示校验错误信息，提升用户体验。",
    "动态表单：结合prop属性实现动态表单字段绑定，支持复杂数据结构。",
    "国际化表单：通过labelWidth属性控制标签宽度，适应不同语言的表单布局需求。"
  ],
  "parent": {
    "types": [],
    "restrictions": [
      {
        "parent": "FForm",
        "description": "必须放在表单组件内使用"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "rules",
      "target": "showMessage",
      "effect": "当配置了校验规则时，showMessage控制是否显示错误信息",
      "notes": [
        "rules和showMessage配合使用实现校验反馈",
        "适用于需要灵活控制错误提示的场景"
      ]
    },
    {
      "source": "prop",
      "target": "rules",
      "effect": "prop属性指定字段路径，rules根据字段路径进行校验",
      "notes": [
        "prop和rules共同实现字段级校验",
        "适用于表单字段与校验规则绑定的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "label",
      "title": "标签内容",
      "valueType": "string",
      "description": "表单项的标签文本，用于描述字段用途",
      "example": "用户名"
    },
    {
      "name": "prop",
      "title": "值路径",
      "valueType": "string",
      "description": "表单字段的路径标识，用于数据绑定和校验规则匹配",
      "example": "user.name"
    },
    {
      "name": "rules",
      "title": "校验规则",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "required",
              "title": "必填",
              "valueType": "bool",
              "example": true
            },
            {
              "name": "type",
              "title": "值类型",
              "valueType": {
                "type": "oneOf",
                "items": [
                  {
                    "value": "string",
                    "title": "字符",
                    "usage": "文本类型字段校验"
                  },
                  {
                    "value": "number",
                    "title": "数字",
                    "usage": "数值类型字段校验"
                  },
                  {
                    "value": "array",
                    "title": "数组",
                    "usage": "数组类型字段校验"
                  },
                  {
                    "value": "integer",
                    "title": "整数",
                    "usage": "整数类型字段校验"
                  },
                  {
                    "value": "float",
                    "title": "浮点数",
                    "usage": "浮点数类型字段校验"
                  },
                  {
                    "value": "object",
                    "title": "对象",
                    "usage": "对象类型字段校验"
                  },
                  {
                    "value": "date",
                    "title": "日期",
                    "usage": "日期类型字段校验"
                  },
                  {
                    "value": "url",
                    "title": "URL",
                    "usage": "URL格式校验"
                  },
                  {
                    "value": "email",
                    "title": "邮箱",
                    "usage": "邮箱格式校验"
                  }
                ]
              },
              "example": "string"
            },
            {
              "name": "message",
              "title": "失败提示",
              "valueType": "string",
              "example": "请输入用户名"
            },
            {
              "name": "max",
              "title": "最大值",
              "valueType": "number",
              "example": 100
            },
            {
              "name": "min",
              "title": "最小值",
              "valueType": "number",
              "example": 0
            },
            {
              "name": "len",
              "title": "长度",
              "valueType": "number",
              "example": 10
            },
            {
              "name": "pattern",
              "title": "正则表达式",
              "valueType": "string",
              "example": "/^[a-zA-Z0-9]+$/"
            },
            {
              "name": "validator",
              "title": "校验函数",
              "valueType": {
                "type": "func",
                "parameters": [
                  {
                    "name": "rule",
                    "type": "object",
                    "description": "校验规则对象"
                  },
                  {
                    "name": "value",
                    "type": "any",
                    "description": "当前字段值"
                  },
                  {
                    "name": "callback",
                    "type": "function",
                    "description": "校验回调函数"
                  }
                ]
              },
              "example": "(rule, value, callback) => { if(!value) callback('必填项'); else callback(); }"
            },
            {
              "name": "trigger",
              "title": "触发时机",
              "valueType": {
                "type": "oneOf",
                "items": [
                  {
                    "value": "change",
                    "title": "值改变时",
                    "usage": "输入时实时校验"
                  },
                  {
                    "value": "blur",
                    "title": "焦点失去时",
                    "usage": "输入完成后校验"
                  }
                ]
              },
              "example": "change"
            }
          ]
        }
      },
      "description": "表单校验规则配置，支持多种校验类型和自定义校验函数",
      "defaultValue": [],
      "example": [
        {
          "required": true,
          "message": "请输入用户名",
          "trigger": "blur"
        }
      ]
    },
    {
      "name": "labelWidth",
      "title": "标签宽度",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "表单项标签的宽度，支持像素值或百分比",
      "defaultValue": "auto",
      "example": "120px"
    },
    {
      "name": "showMessage",
      "title": "显示错误",
      "valueType": "bool",
      "description": "是否显示校验错误信息",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "span",
      "title": "占据格数",
      "valueType": "number",
      "description": "在栅格布局中占据的列数（共24列）",
      "defaultValue": 6,
      "example": 8
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "表单项内容，通常放置表单控件",
      "required": true
    }
  ],
  "exposes": [
    {
      "name": "validate",
      "description": "手动触发表单项校验",
      "parameters": [
        {
          "name": "callback",
          "type": "function",
          "description": "校验完成后的回调函数"
        }
      ]
    }
  ],
  "templates": [
    {
      "input": "基础表单项",
      "output": "[场景说明] 创建带有标签的基础表单项\n[代码实现] <!-- correct -->\n<FFormItem label=\"用户名\">\n  <FInput />\n</FFormItem>\n[最佳实践] 始终为表单项提供有意义的label"
    },
    {
      "input": "必填校验项",
      "output": "[场景说明] 创建带有必填校验的表单项\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"密码\" \n  prop=\"password\"\n  :rules=\"[{ required: true, message: '请输入密码' }]\">\n  <FInput type=\"password\" />\n</FFormItem>\n[最佳实践] 必填校验应配合prop属性使用"
    },
    {
      "input": "自定义校验",
      "output": "[场景说明] 使用自定义函数校验\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"年龄\" \n  prop=\"age\"\n  :rules=\"[{\n    validator: (rule, value, callback) => {\n      if (value < 18) callback('年龄必须大于18岁');\n      else callback();\n    }\n  }]\">\n  <FInputNumber />\n</FFormItem>\n[最佳实践] 复杂校验逻辑推荐使用validator函数"
    },
    {
      "input": "栅格布局",
      "output": "[场景说明] 创建占据8列的表单项\n[代码实现] <!-- correct -->\n<FFormItem label=\"邮箱\" :span=\"8\">\n  <FInput />\n</FFormItem>\n[最佳实践] span值应为24的约数以保持布局整齐"
    },
    {
      "input": "隐藏错误提示",
      "output": "[场景说明] 创建不显示错误提示的表单项\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"验证码\" \n  :show-message=\"false\"\n  :rules=\"[{ required: true }]\">\n  <FInput />\n</FFormItem>\n[最佳实践] 当需要自定义错误提示位置时使用"
    },
    {
      "input": "正则校验",
      "output": "[场景说明] 使用正则表达式校验手机号\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"手机号\" \n  prop=\"phone\"\n  :rules=\"[{\n    pattern: /^1[3-9]\\d{9}$/,\n    message: '请输入正确的手机号'\n  }]\">\n  <FInput />\n</FFormItem>\n[最佳实践] 常用正则表达式应提取为常量复用"
    },
    {
      "input": "动态触发校验",
      "output": "[场景说明] 配置blur触发校验\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"邮箱\" \n  prop=\"email\"\n  :rules=\"[{\n    type: 'email',\n    message: '请输入正确的邮箱',\n    trigger: 'blur'\n  }]\">\n  <FInput />\n</FFormItem>\n[最佳实践] 输入类控件建议使用blur触发以减少校验频率"
    },
    {
      "input": "复合校验规则",
      "output": "[场景说明] 组合多种校验规则\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"密码\" \n  prop=\"password\"\n  :rules=\"[\n    { required: true, message: '请输入密码' },\n    { min: 6, message: '密码长度不能少于6位' },\n    { max: 20, message: '密码长度不能超过20位' }\n  ]\">\n  <FInput type=\"password\" />\n</FFormItem>\n[最佳实践] 按从简到繁的顺序排列校验规则"
    },
    {
      "input": "缺少prop属性的校验",
      "output": "[错误分析] 校验规则需要prop属性指定字段路径\n[正确代码] <!-- correct -->\n<FFormItem \n  label=\"用户名\" \n  prop=\"username\"\n  :rules=\"[{ required: true }]\">\n  <FInput />\n</FFormItem>\n[注意事项] 使用rules时必须配置prop属性"
    },
    {
      "input": "错误的span值",
      "output": "[错误分析] span值超出1-24范围\n[正确代码] <!-- correct -->\n<FFormItem label=\"邮箱\" :span=\"12\">\n  <FInput />\n</FFormItem>\n[注意事项] span值应在1-24之间且最好能被24整除"
    },
    {
      "input": "无效的正则表达式",
      "output": "[错误分析] 正则表达式格式不正确\n[正确代码] <!-- correct -->\n<FFormItem \n  label=\"手机号\" \n  :rules=\"[{ pattern: /^1[3-9]\\d{9}$/ }]\">\n  <FInput />\n</FFormItem>\n[注意事项] 正则表达式应以/开头和结尾"
    },
    {
      "input": "空表单项",
      "output": "[场景说明] 处理空值状态\n[代码实现] <!-- correct -->\n<FFormItem label=\"备注\">\n  <FInput placeholder=\"选填\" />\n</FFormItem>\n[最佳实践] 非必填项应提供placeholder说明"
    },
    {
      "input": "极长标签处理",
      "output": "[场景说明] 处理超长标签文本\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"这是一个非常非常长的标签名称字段\" \n  :label-width=\"200\">\n  <FInput />\n</FFormItem>\n[最佳实践] 超长标签应设置固定labelWidth避免布局错乱"
    },
    {
      "input": "特殊字符校验",
      "output": "[场景说明] 校验包含特殊字符的输入\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"密码\" \n  :rules=\"[{\n    pattern: /^[A-Za-z0-9@#$%^&+=]+$/,\n    message: '只能包含字母数字和特殊字符'\n  }]\">\n  <FInput type=\"password\" />\n</FFormItem>\n[最佳实践] 明确列出允许的特殊字符"
    },
    {
      "input": "怎么用表单验证",
      "output": "[场景说明] 基础表单验证实现\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"用户名\" \n  prop=\"username\"\n  :rules=\"[{ required: true, message: '请输入用户名' }]\">\n  <FInput />\n</FFormItem>\n[最佳实践] 1.设置prop 2.配置rules 3.确保在FForm内"
    },
    {
      "input": "表单项不显示",
      "output": "[错误分析] 可能缺少必要的label或子内容\n[正确代码] <!-- correct -->\n<FFormItem label=\"姓名\">\n  <FInput />\n</FFormItem>\n[注意事项] 确保提供label和默认插槽内容"
    },
    {
      "input": "校验不起效",
      "output": "[错误分析] 常见原因：1.缺少prop 2.不在FForm内 3.trigger配置错误\n[正确代码] <!-- correct -->\n<FForm>\n  <FFormItem \n    label=\"邮箱\" \n    prop=\"email\"\n    :rules=\"[{ type: 'email', trigger: 'blur' }]\">\n    <FInput />\n  </FFormItem>\n</FForm>\n[注意事项] 检查prop、FForm包裹和trigger配置"
    },
    {
      "input": "自定义表单项样式",
      "output": "[场景说明] 覆盖表单项样式\n[代码实现] <!-- correct -->\n<FFormItem \n  label=\"自定义样式\"\n  class=\"custom-form-item\"\n  :content-style=\"{ padding: '10px', background: '#f5f5f5' }\">\n  <FInput />\n</FFormItem>\n<style>\n.custom-form-item .fei-form-item__label { color: red; }\n</style>\n[最佳实践] 使用content-style控制内容区样式，class控制整体样式"
    },
    {
      "input": "与FSelect组合使用",
      "output": "[场景说明] 创建下拉选择表单项\n[代码实现] <!-- correct -->\n<FFormItem label=\"城市\" prop=\"city\">\n  <FSelect \n    :options=\"[\n      { value: 'bj', label: '北京' },\n      { value: 'sh', label: '上海' }\n    ]\" />\n</FFormItem>\n[最佳实践] 为选择类控件配置初始placeholder"
    },
    {
      "input": "与FCheckboxGroup组合",
      "output": "[场景说明] 创建多选框组表单项\n[代码实现] <!-- correct -->\n<FFormItem label=\"兴趣爱好\" prop=\"hobbies\">\n  <FCheckboxGroup \n    :options=\"[\n      { label: '音乐', value: 'music' },\n      { label: '运动', value: 'sports' }\n    ]\" />\n</FFormItem>\n[最佳实践] 多选类控件应明确min/max选择数量"
    }
  ]
};
