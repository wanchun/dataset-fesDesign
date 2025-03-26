import type { IComponentMetadata } from '../type';

export const uploadMeta: IComponentMetadata = {
  "title": "上传",
  "componentName": "FUpload",
  "description": "文件上传组件，支持多种文件类型、多选、自定义请求和响应处理等功能，适用于文件上传场景。",
  "scenarios": [
    "单文件上传：在表单中使用，上传单个文件，适用于简单的文件上传需求。",
    "多文件上传：在需要上传多个文件的场景中使用，支持批量上传，提高效率。",
    "自定义请求：在需要自定义上传请求的场景中使用，如添加自定义请求头或跨域配置。",
    "文件类型限制：在需要限制上传文件类型的场景中使用，如仅允许上传图片或文档。",
    "上传进度监控：在需要实时监控上传进度的场景中使用，如大文件上传时显示进度条。",
    "文件删除前确认：在需要确认删除文件的场景中使用，防止误删重要文件。",
    "上传前校验：在需要在上传前进行文件校验的场景中使用，如文件大小或格式校验。",
    "跨域上传：在需要跨域上传文件的场景中使用，支持跨域发送cookie等配置。",
    "自定义响应处理：在需要自定义处理上传响应的场景中使用，如解析上传后的返回数据。"
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
      "source": "multiple",
      "target": "multipleLimit",
      "effect": "多选模式下，限制最大上传文件数量",
      "notes": [
        "当multiple为true时，multipleLimit生效，限制上传文件的最大数量"
      ]
    },
    {
      "source": "beforeUpload",
      "target": "disabled",
      "effect": "上传前钩子返回false时，禁用上传按钮",
      "notes": [
        "beforeUpload钩子返回false时，上传按钮将被禁用，防止用户重复上传"
      ]
    }
  ],
  "props": [
    {
      "name": "accept",
      "title": "上传文件类型",
      "propType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "允许上传的文件类型，如'image/*'或'.pdf'"
    },
    {
      "name": "action",
      "title": "上传接口地址",
      "propType": "string",
      "description": "文件上传的接口地址"
    },
    {
      "name": "beforeUpload",
      "title": "上传前钩子",
      "propType": "func",
      "description": "上传文件之前的钩子函数，返回false或Promise.reject将停止上传"
    },
    {
      "name": "beforeRemove",
      "title": "删除前钩子",
      "propType": "func",
      "description": "删除文件之前的钩子函数，返回false或Promise.reject将停止删除"
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "propType": "bool",
      "description": "是否禁用上传功能",
      "defaultValue": false
    },
    {
      "name": "fileList",
      "title": "已上传列表",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "name",
              "title": "文件名",
              "propType": "string"
            },
            {
              "name": "url",
              "title": "文件路径",
              "propType": "string"
            }
          ]
        }
      },
      "description": "已上传的文件列表，包含文件名和文件路径"
    },
    {
      "name": "data",
      "title": "额外数据",
      "propType": "object",
      "description": "上传接口附带的额外数据"
    },
    {
      "name": "headers",
      "title": "请求头",
      "propType": "object",
      "description": "上传请求的请求头配置"
    },
    {
      "name": "multiple",
      "title": "是否多选",
      "propType": "bool",
      "description": "是否允许上传多个文件"
    },
    {
      "name": "multipleLimit",
      "title": "最大允许上传个数",
      "propType": "number",
      "description": "多选模式下，最大允许上传的文件数量"
    },
    {
      "name": "name",
      "title": "上传文件字段名",
      "propType": "string",
      "description": "上传文件的字段名，用于接口接收文件的属性名"
    },
    {
      "name": "showFileList",
      "title": "是否显示已上传文件列表",
      "propType": "bool",
      "description": "是否显示已上传的文件列表"
    },
    {
      "name": "withCredentials",
      "title": "是否跨域发送cookie",
      "propType": "bool",
      "description": "是否跨域发送cookie凭证信息"
    },
    {
      "name": "timeout",
      "title": "超时时间",
      "propType": "number",
      "description": "上传请求的超时时间（毫秒）"
    },
    {
      "name": "transformResponse",
      "title": "自定义响应",
      "propType": "func",
      "description": "自定义处理上传请求的响应内容"
    },
    {
      "name": "httpRequest",
      "title": "自定义请求",
      "propType": "func",
      "description": "自定义文件上传方法"
    },
    {
      "name": "tip",
      "title": "提示文字",
      "propType": "node",
      "description": "上传组件的提示文字，可以是文本或其他元素",
      "defaultValue": {
        "type": "JSSlot",
        "value": [
          {
            "componentName": "FText",
            "props": {
              "children": "我是提示文字"
            }
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "文件状态改变时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{file: FileItem, fileList: FileItem[]}",
          "description": "当前文件及文件列表"
        }
      ]
    },
    {
      "name": "onRemove",
      "description": "文件被移除时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{file: FileItem, fileList: FileItem[]}",
          "description": "被移除的文件及文件列表"
        }
      ]
    },
    {
      "name": "onSuccess",
      "description": "文件上传成功时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{response: any, file: FileItem, fileList: FileItem[]}",
          "description": "上传成功的响应、文件及文件列表"
        }
      ]
    },
    {
      "name": "onError",
      "description": "文件上传失败时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{error: UploadError, file: FileItem, fileList: FileItem[]}",
          "description": "上传失败的错误信息、文件及文件列表"
        }
      ]
    },
    {
      "name": "onExceed",
      "description": "文件超出最大上传数量时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{files: FileList, fileList: FileItem[]}",
          "description": "超出限制的文件及文件列表"
        }
      ]
    },
    {
      "name": "onProgress",
      "description": "文件上传过程中触发",
      "parameters": [
        {
          "name": "value",
          "type": "{event: UploadProgressEvent, file: FileItem, fileList: FileItem[]}",
          "description": "上传进度事件、文件及文件列表"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "上传触发内容，可以是按钮或其他元素",
      "required": true
    },
    {
      "name": "tip",
      "description": "上传组件的提示文字，可以是文本或其他元素",
      "required": false
    }
  ]
};
