import type { IComponentMetadata } from '../type';

export const radioGroupMeta: IComponentMetadata = {
  "title": "单选组",
  "componentName": "FRadioGroup",
  "description": "单选组组件，用于在一组互斥选项中进行单项选择。支持标准单选框和按钮样式两种展示形式，适用于表单选择、设置切换等场景。",
  "scenarios": [
    "表单选择：在表单中使用标准单选框样式，用于用户必须做出单项选择的场景，如性别选择、协议同意等。",
    "设置切换：使用按钮样式的单选组，用于直观展示选项切换，如视图模式选择、排序方式切换等。",
    "筛选条件：在数据筛选场景中使用单选组，提供明确的筛选维度选择，如时间范围、状态筛选等。",
    "配置选项：在系统配置中使用单选组，用于开关类选项的设置，如主题切换、语言选择等。",
    "步骤导航：使用按钮样式的单选组作为步骤指示器，直观展示当前步骤和可选步骤。"
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
  "children": [
    "FRadio"
  ],
  "propRelations": [
    {
      "source": "optionType",
      "target": [
        "type",
        "size",
        "bordered"
      ],
      "effect": "当optionType为button时，type/size/bordered属性才生效",
      "notes": [
        "按钮样式单选组支持额外的样式配置",
        "标准单选框样式忽略这些属性"
      ]
    },
    {
      "source": "disabled",
      "target": "cancelable",
      "effect": "禁用状态下无法取消选择",
      "notes": [
        "disabled优先级高于cancelable"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定值",
      "valueType": "array",
      "description": "当前选中的值，使用v-model进行双向绑定",
      "required": true,
      "example": [
        "option1"
      ]
    },
    {
      "name": "vertical",
      "title": "垂直排列",
      "valueType": "bool",
      "description": "是否垂直排列选项",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用整个单选组",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "cancelable",
      "title": "可取消选择",
      "valueType": "bool",
      "description": "是否允许取消已选中的选项",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "options",
      "title": "选项配置",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "value",
              "title": "选项值",
              "valueType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "number"
                ]
              },
              "example": "option1"
            },
            {
              "name": "label",
              "title": "选项标签",
              "valueType": "string",
              "example": "选项1"
            },
            {
              "name": "disabled",
              "title": "禁用选项",
              "valueType": "bool",
              "example": false
            }
          ]
        }
      },
      "description": "选项数据配置，支持动态生成选项",
      "example": [
        {
          "value": "option1",
          "label": "选项1"
        },
        {
          "value": "option2",
          "label": "选项2",
          "disabled": true
        }
      ]
    },
    {
      "name": "valueField",
      "title": "值字段名",
      "valueType": "string",
      "description": "指定options中哪个字段作为选项的值字段",
      "example": "id"
    },
    {
      "name": "labelField",
      "title": "标签字段名",
      "valueType": "string",
      "description": "指定options中哪个字段作为选项的显示文本",
      "example": "name"
    },
    {
      "name": "optionType",
      "title": "选项类型",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "default",
            "title": "单选框",
            "usage": "标准单选框样式，适合表单场景"
          },
          {
            "value": "button",
            "title": "按钮",
            "usage": "按钮样式，适合需要突出选项的场景"
          }
        ]
      },
      "description": "选项的展示类型，支持单选框和按钮两种样式",
      "defaultValue": "default",
      "example": "button"
    },
    {
      "name": "type",
      "title": "按钮样式",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "default",
            "title": "默认",
            "usage": "普通按钮样式"
          },
          {
            "value": "primary",
            "title": "主要",
            "usage": "强调按钮样式"
          }
        ]
      },
      "description": "当optionType为button时生效，设置按钮的样式类型",
      "defaultValue": "default",
      "example": "primary"
    },
    {
      "name": "size",
      "title": "按钮大小",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "small",
            "title": "小",
            "usage": "紧凑布局使用"
          },
          {
            "value": "middle",
            "title": "中",
            "usage": "常规尺寸"
          }
        ]
      },
      "description": "当optionType为button时生效，设置按钮的尺寸",
      "defaultValue": "middle",
      "example": "small"
    },
    {
      "name": "bordered",
      "title": "显示边框",
      "valueType": "bool",
      "description": "当optionType为button时生效，是否显示边框",
      "defaultValue": true,
      "example": false
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "选项变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number | boolean",
          "description": "当前选中的值"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "自定义选项内容，当不使用options属性时生效",
      "required": false
    }
  ],
  "templates": [
    {
      "input": "基础单选组",
      "output": "[场景说明] 表单中的基础单选组\n[代码实现] \n<FRadioGroup v-model=\"selectedValue\">\n  <FRadio value=\"1\">选项1</FRadio>\n  <FRadio value=\"2\">选项2</FRadio>\n</FRadioGroup>\n[最佳实践] 适用于简单的单选场景，直接使用FRadio子组件"
    },
    {
      "input": "选项数据绑定",
      "output": "[场景说明] 通过options属性动态生成选项\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\" \n  :options=\"[\n    {value: '1', label: '选项1'},\n    {value: '2', label: '选项2'}\n  ]\"\n/>\n[最佳实践] 适合选项数据来自后端或需要动态变化的场景"
    },
    {
      "input": "按钮样式单选组",
      "output": "[场景说明] 使用按钮样式的单选组\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  option-type=\"button\"\n  type=\"primary\"\n  :options=\"options\"\n/>\n[最佳实践] 适合需要突出选项的场景，如视图切换"
    },
    {
      "input": "禁用状态",
      "output": "[场景说明] 禁用整个单选组\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  disabled\n  :options=\"options\"\n/>\n[最佳实践] 在表单未满足条件时禁用选择"
    },
    {
      "input": "垂直排列",
      "output": "[场景说明] 垂直排列的单选组\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  vertical\n  :options=\"options\"\n/>\n[最佳实践] 适合选项较多或空间有限的场景"
    },
    {
      "input": "自定义字段名",
      "output": "[场景说明] 使用自定义字段名的数据\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  value-field=\"id\"\n  label-field=\"name\"\n  :options=\"[\n    {id: 1, name: '选项1'},\n    {id: 2, name: '选项2'}\n  ]\"\n/>\n[最佳实践] 适应不同数据结构"
    },
    {
      "input": "不可取消选择",
      "output": "[场景说明] 不允许取消已选中的选项\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  :cancelable=\"false\"\n  :options=\"options\"\n/>\n[最佳实践] 适用于必须选择的场景"
    },
    {
      "input": "带边框按钮样式",
      "output": "[场景说明] 带边框的按钮样式单选组\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  option-type=\"button\"\n  :bordered=\"true\"\n  :options=\"options\"\n/>\n[最佳实践] 增强按钮的视觉层次感"
    },
    {
      "input": "错误示例：缺少v-model",
      "output": "[错误分析] 单选组必须绑定v-model\n[正确代码] \n<FRadioGroup v-model=\"selectedValue\" :options=\"options\" />\n[注意事项] v-model是必填属性，用于双向绑定选中的值"
    },
    {
      "input": "错误示例：无效的optionType",
      "output": "[错误分析] optionType只能是default或button\n[正确代码] \n<FRadioGroup v-model=\"selectedValue\" option-type=\"button\" />\n[注意事项] 检查optionType的值是否合法"
    },
    {
      "input": "错误示例：按钮样式属性用在标准单选框上",
      "output": "[错误分析] type/size/bordered属性只在optionType为button时生效\n[正确代码] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  option-type=\"button\"\n  type=\"primary\"\n/>\n[注意事项] 确保属性使用场景正确"
    },
    {
      "input": "边界条件：空选项",
      "output": "[场景说明] 处理空选项的情况\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  :options=\"[]\"\n/>\n[最佳实践] 应该显示无数据的提示或隐藏组件"
    },
    {
      "input": "边界条件：所有选项禁用",
      "output": "[场景说明] 所有选项都被禁用\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  :options=\"[\n    {value: '1', label: '选项1', disabled: true},\n    {value: '2', label: '选项2', disabled: true}\n  ]\"\n/>\n[最佳实践] 应该给予用户明确的禁用提示"
    },
    {
      "input": "边界条件：初始值为null",
      "output": "[场景说明] 初始值为null时的处理\n[代码实现] \n<FRadioGroup \n  v-model=\"selectedValue\"\n  :options=\"options\"\n/>\n[最佳实践] 应该设置合理的默认值或允许空值"
    },
    {
      "input": "怎么用单选按钮",
      "output": "[场景说明] 基础单选按钮使用\n[代码实现] \n<FRadioGroup v-model=\"value\">\n  <FRadio value=\"1\">选项1</FRadio>\n  <FRadio value=\"2\">选项2</FRadio>\n</FRadioGroup>\n[最佳实践] 使用FRadio作为子组件创建单选按钮"
    },
    {
      "input": "单选组能不能取消选择",
      "output": "[场景说明] 控制是否可取消选择\n[代码实现] \n<FRadioGroup \n  v-model=\"value\"\n  :cancelable=\"true\"\n  :options=\"options\"\n/>\n[最佳实践] 通过cancelable属性控制是否允许取消选择"
    },
    {
      "input": "单选按钮样式不好看",
      "output": "[场景说明] 使用按钮样式替代标准单选框\n[代码实现] \n<FRadioGroup \n  v-model=\"value\"\n  option-type=\"button\"\n  type=\"primary\"\n  :options=\"options\"\n/>\n[最佳实践] 通过optionType=\"button\"使用按钮样式"
    },
    {
      "input": "覆盖单选组样式",
      "output": "[场景说明] 自定义单选组样式\n[代码实现] \n<FRadioGroup \n  v-model=\"value\"\n  class=\"custom-radio-group\"\n  :options=\"options\"\n/>\n<style>\n.custom-radio-group {\n  /* 自定义样式 */\n}\n</style>\n[最佳实践] 通过class或style属性覆盖默认样式"
    },
    {
      "input": "与表单组件组合使用",
      "output": "[场景说明] 在表单中使用单选组\n[代码实现] \n<FForm>\n  <FFormItem label=\"性别\">\n    <FRadioGroup v-model=\"gender\">\n      <FRadio value=\"male\">男</FRadio>\n      <FRadio value=\"female\">女</FRadio>\n    </FRadioGroup>\n  </FFormItem>\n</FForm>\n[最佳实践] 配合FFormItem使用，实现表单验证和标签"
    },
    {
      "input": "与表格筛选组合",
      "output": "[场景说明] 在表格筛选中使用单选组\n[代码实现] \n<FSpace>\n  <span>状态筛选：</span>\n  <FRadioGroup \n    v-model=\"filterStatus\"\n    option-type=\"button\"\n    :options=\"statusOptions\"\n    @change=\"handleFilter\"\n  />\n</FSpace>\n<FTable :data=\"filteredData\" />\n[最佳实践] 使用按钮样式单选组作为表格筛选条件"
    }
  ]
};
