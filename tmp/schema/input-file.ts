import type { IComponentMetadata } from '../type';

export const inputFileMeta: IComponentMetadata = {
  "title": "文件选择",
  "componentName": "FInputFile",
  "description": "文件上传输入组件，支持多文件选择、文件类型过滤和自定义文件列表展示。适用于表单文件上传、批量文件处理等场景。",
  "scenarios": [
    "表单文件上传：用于用户提交表单时的文件上传需求。通过设置accept属性限制上传文件类型，配合modelValue实现数据绑定。注意需要处理文件大小和服务端校验。",
    "多文件批量上传：在文档管理系统中使用multiple属性支持批量选择文件。需注意浏览器并发上传限制，建议分片上传。",
    "图片上传控件：通过accept=image/*限制只允许选择图片文件。建议配合预览功能使用，注意压缩大尺寸图片。",
    "禁用状态文件输入：在表单未完成时使用disabled属性禁用文件选择功能。需要保持视觉禁用状态的一致性。",
    "自定义文件列表展示：通过fileList插槽自定义已选文件的呈现方式。建议包含文件名称、大小和上传状态等关键信息。"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FForm",
        "description": "表单场景下必须放在表单组件内以保证数据绑定有效性"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "disabled",
      "target": [
        "multiple"
      ],
      "effect": "禁用状态下自动关闭多选功能",
      "notes": [
        "保持交互状态一致性"
      ]
    }
  ],
  "props": [
    {
      "name": "modelValue",
      "title": "绑定值",
      "propType": "object",
      "description": "双向绑定的文件列表数据，类型为File[]",
      "required": true
    },
    {
      "name": "multiple",
      "title": "多选模式",
      "propType": "bool",
      "description": "是否允许选择多个文件",
      "defaultValue": false
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "propType": "bool",
      "description": "是否禁用文件选择功能",
      "defaultValue": false
    },
    {
      "name": "accept",
      "title": "文件类型",
      "propType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "允许上传的文件类型，遵循MIME类型格式（如image/*,.pdf）",
      "defaultValue": []
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "文件选择变化时触发",
      "parameters": [
        {
          "name": "files",
          "type": "File[]",
          "description": "当前已选择的文件列表"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "fileList",
      "description": "自定义文件列表展示模板",
      "required": false,
      "scope": {
        "files": "File[]",
        "removeFile": "(index: number) => void"
      }
    }
  ],
  "exposes": [
    {
      "name": "clearFiles",
      "description": "清空已选文件列表",
      "parameters": []
    }
  ]
};
