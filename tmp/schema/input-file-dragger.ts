import type { IComponentMetadata } from '../type';

export const inputFileDraggerMeta: IComponentMetadata = {
  "title": "文件选择",
  "componentName": "FInputFileDragger",
  "description": "文件选择组件，支持拖拽上传和多选文件。适用于需要上传文件的场景，如文件管理、图片上传等。",
  "scenarios": [
    "图片上传：在图片管理系统中使用，支持拖拽上传图片文件，提升用户体验。",
    "文件管理：在文件管理系统中使用，支持多选文件上传，提高操作效率。",
    "表单提交：在表单中使用，支持上传文件并提交表单，确保数据完整性。",
    "批量上传：在批量上传场景中使用，支持一次上传多个文件，简化操作流程。",
    "文件类型限制：在需要限制上传文件类型的场景中使用，确保上传文件的合规性。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [],
  "propRelations": [
    {
      "source": "disabled",
      "target": "onChange",
      "effect": "禁用状态下无法触发文件选择事件",
      "notes": [
        "当组件处于禁用状态时，文件选择事件将不会触发"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
      "propType": "string",
      "description": "绑定到组件的变量，用于获取或设置文件列表"
    },
    {
      "name": "multiple",
      "title": "可多选",
      "propType": "bool",
      "description": "是否支持多选文件",
      "defaultValue": false
    },
    {
      "name": "disabled",
      "title": "禁用",
      "propType": "bool",
      "description": "是否禁用文件选择",
      "defaultValue": false
    },
    {
      "name": "accept",
      "title": "文件类型",
      "propType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "允许上传的文件类型，如 'image/*'",
      "defaultValue": []
    },
    {
      "name": "onFileTypeInvalid",
      "title": "类型错误回调",
      "propType": "func",
      "description": "拖拽文件类型不满足 accept 时的钩子函数，若未定义则使用内置提示"
    },
    {
      "name": "_fileList",
      "title": "文件列表",
      "propType": {
        "type": "shape",
        "value": [
          {
            "name": "type",
            "title": "类型",
            "propType": "string"
          },
          {
            "name": "title",
            "title": "标题",
            "propType": "string"
          },
          {
            "name": "name",
            "title": "名称",
            "propType": "string"
          },
          {
            "name": "value",
            "title": "值",
            "propType": "array"
          }
        ]
      },
      "description": "文件列表的插槽配置",
      "defaultValue": {
        "type": "JSSlot",
        "title": "文件列表",
        "name": "fileList",
        "value": []
      }
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "文件选择或拖拽上传时触发",
      "parameters": [
        {
          "name": "files",
          "type": "File[]",
          "description": "选择的文件列表"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "fileList",
      "description": "文件列表的插槽，用于自定义文件列表的展示",
      "required": false
    }
  ]
};
