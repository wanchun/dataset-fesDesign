import type { IComponentMetadata } from '../type';

export const radioMeta: IComponentMetadata = {
  "title": "单选框",
  "componentName": "FRadio",
  "description": "单选框组件，用于在用户界面中选择单一选项。支持绑定变量、禁用状态和自定义描述，适用于表单选择、设置选项等场景。",
  "scenarios": [
    "表单选择：在表单中使用单选框组件，用于用户选择单一选项，确保数据的准确性和一致性。",
    "设置选项：在设置页面中使用单选框组件，用于用户选择不同的设置选项，提供清晰的用户界面。",
    "单选列表：在列表中使用单选框组件，用于用户选择列表中的单一选项，保持界面的简洁和易用性。",
    "条件选择：在条件选择场景中使用单选框组件，用于用户根据条件选择不同的选项，提供灵活的用户交互。",
    "禁用状态：在需要禁用选择的场景中使用单选框组件，通过设置disabled属性来禁用选择，确保用户界面的安全性。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FRadioGroup",
        "description": "单选组场景下必须放在单选组组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "disabled",
      "target": "v-model",
      "effect": "禁用状态时无法更改绑定变量",
      "notes": [
        "当单选框处于禁用状态时，无法更改绑定变量的值",
        "适用于需要保护数据完整性的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
      "propType": "bool",
      "description": "用于绑定单选框的选中状态",
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
      "description": "单选框的值，可以是字符串、数字或布尔值",
      "required": true
    },
    {
      "name": "label",
      "title": "描述",
      "propType": "string",
      "description": "单选框的描述文本，用于显示在单选框旁边",
      "required": false
    },
    {
      "name": "disabled",
      "title": "禁用",
      "propType": "bool",
      "description": "是否禁用单选框",
      "defaultValue": false,
      "required": false
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "单选框状态改变时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number | boolean",
          "description": "当前选中的值"
        }
      ]
    }
  ],
  "slots": [],
  "exposes": []
};
