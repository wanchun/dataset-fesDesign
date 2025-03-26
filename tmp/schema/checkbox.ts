import type { IComponentMetadata } from '../type';

export const checkboxMeta: IComponentMetadata = {
  "title": "多选框",
  "componentName": "FCheckbox",
  "description": "多选框组件，用于在用户界面中进行多选操作。支持绑定变量、禁用状态、部分选中状态等功能，适用于表单数据录入、选项选择等场景。",
  "scenarios": [
    "表单数据录入：在表单中使用多选框组件，允许用户选择多个选项，适用于问卷调查、偏好设置等场景。",
    "选项选择：在设置页面中使用多选框组件，允许用户选择多个配置项，适用于功能启用或禁用等场景。",
    "部分选中状态：在树形结构或嵌套选项中使用部分选中状态，表示部分子项被选中，适用于复杂的多级选择场景。",
    "禁用状态：在不可操作的情况下使用禁用状态，防止用户误操作，适用于条件不满足时的选项禁用场景。",
    "绑定变量：通过v-model绑定变量，实时获取用户选择状态，适用于需要实时反馈用户选择的场景。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FCheckboxGroup",
        "description": "在多选框组场景下必须放在多选框组组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
      "propType": "bool",
      "description": "绑定变量，用于实时获取或设置多选框的选中状态",
      "required": true
    },
    {
      "name": "value",
      "title": "内容",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number",
          "bool"
        ]
      },
      "description": "多选框的值，可以是字符串、数字或布尔值",
      "condition": "FCheckboxGroup === target.top.getNode().parent.componentName"
    },
    {
      "name": "label",
      "title": "描述",
      "propType": "string",
      "description": "多选框的描述文本，用于显示在选项旁边"
    },
    {
      "name": "disabled",
      "title": "禁用",
      "propType": "bool",
      "description": "是否禁用多选框",
      "defaultValue": false
    },
    {
      "name": "indeterminate",
      "title": "部分选中",
      "propType": "bool",
      "description": "是否显示部分选中状态",
      "defaultValue": false
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "多选框状态改变时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number | boolean",
          "description": "当前多选框的值"
        }
      ]
    }
  ],
  "slots": []
};
