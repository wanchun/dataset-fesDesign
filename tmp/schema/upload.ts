import type { IComponentMetadata } from '../type';

export const uploadMeta: IComponentMetadata = {
  "title": "上传",
  "componentName": "FUpload",
  "description": "文件上传组件，支持多种上传方式和文件类型限制，提供丰富的上传状态控制和回调函数。适用于图片、文档等多种文件的上传场景。",
  "scenarios": [
    "表单文件上传：在表单中使用上传组件，用于用户提交图片、文档等附件，支持文件类型和大小限制。",
    "头像上传：单独使用上传组件实现头像裁剪上传功能，支持预览和重新上传。",
    "批量文件上传：在文件管理系统中使用多选上传功能，支持同时上传多个文件。",
    "拖拽上传：使用拖拽区域实现更友好的文件上传体验，适合大文件上传场景。",
    "自定义上传：通过自定义请求方法实现特殊上传需求，如分片上传、断点续传等。",
    "文件预览：上传后显示文件列表并支持预览功能，适用于图片、PDF等可预览文件类型。",
    "禁用状态：在特定条件下禁用上传功能，防止用户误操作。",
    "单文件覆盖：实现单文件上传时的自动替换功能，保持文件列表简洁。"
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
    "FUploadDragger"
  ],
  "propRelations": [
    {
      "source": "disabled",
      "target": [
        "beforeUpload",
        "beforeRemove"
      ],
      "effect": "禁用状态下上传和删除操作将被阻止",
      "notes": [
        "当disabled为true时，所有上传和删除操作都将被禁用"
      ]
    },
    {
      "source": "multiple",
      "target": "multipleLimit",
      "effect": "多选状态下才需要设置最大上传数量限制",
      "notes": [
        "multiple为true时multipleLimit才生效"
      ]
    }
  ],
  "props": [
    {
      "name": "accept",
      "title": "上传文件类型",
      "valueType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "指定接受上传的文件类型，如['image/*', '.pdf']",
      "defaultValue": [],
      "example": [
        "image/*"
      ]
    },
    {
      "name": "action",
      "title": "上传接口地址",
      "valueType": "string",
      "description": "上传服务器的API地址",
      "required": true,
      "example": "https://example.com/upload"
    },
    {
      "name": "beforeUpload",
      "title": "上传前钩子",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "file",
            "type": "File",
            "description": "待上传的文件对象"
          }
        ],
        "returnType": "bool"
      },
      "description": "上传前的校验函数，返回false或Promise.reject可阻止上传",
      "example": "(file) => file.size < 1024 * 1024"
    },
    {
      "name": "beforeRemove",
      "title": "删除前钩子",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "file",
            "type": "FileItem",
            "description": "待删除的文件项"
          },
          {
            "name": "fileList",
            "type": "FileItem[]",
            "description": "当前文件列表"
          }
        ],
        "returnType": "bool"
      },
      "description": "删除前的确认函数，返回false或Promise.reject可阻止删除",
      "example": "(file) => confirm('确定删除吗？')"
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "valueType": "bool",
      "description": "禁用上传功能",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "fileList",
      "title": "已上传列表",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "name",
              "title": "文件名",
              "valueType": "string",
              "required": true,
              "example": "example.jpg"
            },
            {
              "name": "url",
              "title": "文件路径",
              "valueType": "string",
              "example": "https://example.com/files/example.jpg"
            },
            {
              "name": "status",
              "title": "上传状态",
              "valueType": {
                "type": "oneOf",
                "items": [
                  {
                    "value": "uploading",
                    "title": "上传中"
                  },
                  {
                    "value": "done",
                    "title": "已完成"
                  },
                  {
                    "value": "error",
                    "title": "错误"
                  }
                ]
              },
              "example": "done"
            }
          ]
        }
      },
      "description": "已上传的文件列表，支持双向绑定",
      "defaultValue": [],
      "example": [
        {
          "name": "example.jpg",
          "url": "https://example.com/files/example.jpg",
          "status": "done"
        }
      ]
    },
    {
      "name": "data",
      "title": "额外数据",
      "valueType": "object",
      "description": "上传时附加的额外参数",
      "defaultValue": {},
      "example": {
        "token": "abc123"
      }
    },
    {
      "name": "headers",
      "title": "请求头",
      "valueType": "object",
      "description": "上传请求的自定义headers",
      "defaultValue": {},
      "example": {
        "Authorization": "Bearer token"
      }
    },
    {
      "name": "multiple",
      "title": "是否多选",
      "valueType": "bool",
      "description": "是否允许选择多个文件",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "multipleLimit",
      "title": "最大允许上传个数",
      "valueType": "number",
      "description": "多选时限制的最大上传数量",
      "example": 5
    },
    {
      "name": "name",
      "title": "上传文件字段名",
      "valueType": "string",
      "description": "上传文件的字段名称",
      "defaultValue": "file",
      "example": "avatar"
    },
    {
      "name": "showFileList",
      "title": "是否显示已上传文件列表",
      "valueType": "bool",
      "description": "是否显示已上传文件列表",
      "defaultValue": true,
      "example": false
    },
    {
      "name": "withCredentials",
      "title": "是否跨域发送cookie",
      "valueType": "bool",
      "description": "上传请求是否携带cookie",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "timeout",
      "title": "超时时间",
      "valueType": "number",
      "description": "上传请求超时时间(毫秒)",
      "example": 5000
    },
    {
      "name": "transformResponse",
      "title": "自定义响应",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "response",
            "type": "any",
            "description": "原始响应数据"
          }
        ],
        "returnType": "any"
      },
      "description": "自定义处理上传响应数据",
      "example": "(res) => res.data"
    },
    {
      "name": "httpRequest",
      "title": "自定义请求",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "options",
            "type": "RequestOptions",
            "description": "上传请求配置"
          }
        ],
        "returnType": "any"
      },
      "description": "自定义上传请求实现",
      "example": "(options) => customUpload(options)"
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
          "description": "变更的文件和当前文件列表"
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
          "description": "被移除的文件和当前文件列表"
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
          "description": "响应数据、上传成功的文件和当前文件列表"
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
          "description": "错误信息、上传失败的文件和当前文件列表"
        }
      ]
    },
    {
      "name": "onExceed",
      "description": "文件超出限制时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{files: FileList, fileList: FileItem[]}",
          "description": "超限的文件列表和当前文件列表"
        }
      ]
    },
    {
      "name": "onProgress",
      "description": "上传进度变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{event: UploadProgressEvent, file: FileItem, fileList: FileItem[]}",
          "description": "进度事件、上传中的文件和当前文件列表"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "自定义上传触发区域",
      "scope": {
        "uploadFiles": "FileItem[]"
      }
    },
    {
      "name": "tip",
      "description": "上传提示信息",
      "required": false
    },
    {
      "name": "fileList",
      "description": "自定义文件列表展示",
      "scope": {
        "uploadFiles": "FileItem[]"
      }
    },
    {
      "name": "file",
      "description": "自定义单个文件展示",
      "scope": {
        "file": "FileItem"
      }
    }
  ],
  "exposes": [
    {
      "name": "clearFiles",
      "description": "清空已上传的文件列表",
      "parameters": []
    },
    {
      "name": "addFile",
      "description": "手动添加文件到上传列表",
      "parameters": [
        {
          "name": "rawFile",
          "type": "File",
          "description": "要添加的文件对象"
        }
      ]
    },
    {
      "name": "removeFile",
      "description": "手动移除文件",
      "parameters": [
        {
          "name": "file",
          "type": "FileItem",
          "description": "要移除的文件项"
        }
      ]
    }
  ],
  "templates": [
    {
      "input": "基础文件上传",
      "output": "<!-- correct -->\n[场景说明] 实现基本的文件上传功能\n[代码实现] \n<FUpload \n  action=\"/upload\" \n  @change=\"handleChange\"\n>\n  <FButton>点击上传</FButton>\n</FUpload>\n[最佳实践] 确保action地址正确，处理change事件更新文件列表"
    },
    {
      "input": "图片上传限制",
      "output": "<!-- correct -->\n[场景说明] 限制只能上传图片且不超过2MB\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  accept=\"image/*\"\n  :beforeUpload=\"file => file.size <= 2 * 1024 * 1024\"\n>\n  <FButton>上传图片</FButton>\n</FUpload>\n[最佳实践] 使用beforeUpload进行文件校验，给出明确的错误提示"
    },
    {
      "input": "多文件上传",
      "output": "<!-- correct -->\n[场景说明] 实现多文件上传功能，限制最多5个文件\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  multiple\n  :multipleLimit=\"5\"\n  @exceed=\"handleExceed\"\n>\n  <FButton>上传多个文件</FButton>\n</FUpload>\n[最佳实践] 处理exceed事件提示用户超出限制"
    },
    {
      "input": "拖拽上传",
      "output": "<!-- correct -->\n[场景说明] 实现拖拽上传图片功能\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  accept=\"image/*\"\n>\n  <FUploadDragger>\n    拖拽图片到此处上传\n  </FUploadDragger>\n</FUpload>\n[最佳实践] 提供清晰的拖拽区域视觉反馈"
    },
    {
      "input": "自定义文件列表",
      "output": "<!-- correct -->\n[场景说明] 自定义上传后的文件列表展示\n[代码实现] \n<FUpload v-model:fileList=\"fileList\">\n  <template #fileList=\"{ uploadFiles }\">\n    <div v-for=\"file in uploadFiles\" :key=\"file.uid\">\n      {{ file.name }} - {{ file.status }}\n    </div>\n  </template>\n</FUpload>\n[最佳实践] 保持自定义样式与整体设计风格一致"
    },
    {
      "input": "文件预览",
      "output": "<!-- correct -->\n[场景说明] 上传图片后可预览\n[代码实现] \n<FUpload v-model:fileList=\"fileList\">\n  <template #file=\"{ file }\">\n    <FImage :src=\"file.url\" preview />\n  </template>\n</FUpload>\n[最佳实践] 对于大图片提供加载状态和错误处理"
    },
    {
      "input": "禁用状态",
      "output": "<!-- correct -->\n[场景说明] 表单提交后禁用上传功能\n[代码实现] \n<FUpload \n  action=\"/upload\" \n  :disabled=\"isSubmitting\"\n>\n  <FButton>上传文件</FButton>\n</FUpload>\n[最佳实践] 禁用时提供视觉反馈和提示信息"
    },
    {
      "input": "自定义请求",
      "output": "<!-- correct -->\n[场景说明] 实现分片上传功能\n[代码实现] \n<FUpload\n  :httpRequest=\"chunkUpload\"\n>\n  <FButton>分片上传</FButton>\n</FUpload>\n[最佳实践] 处理上传进度和错误情况，提供良好的用户体验"
    },
    {
      "input": "缺少action属性",
      "output": "<!-- error -->\n[错误分析] 缺少必填的action属性会导致上传失败\n[正确代码] \n<FUpload action=\"/upload\">\n  <FButton>上传文件</FButton>\n</FUpload>\n[注意事项] action是必填属性，必须提供有效的上传接口地址"
    },
    {
      "input": "错误的多选限制设置",
      "output": "<!-- error -->\n[错误分析] 未启用multiple时设置multipleLimit无效\n[正确代码] \n<FUpload\n  action=\"/upload\"\n  multiple\n  :multipleLimit=\"5\"\n>\n[注意事项] 只有multiple为true时multipleLimit才会生效"
    },
    {
      "input": "无效的文件类型限制",
      "output": "<!-- error -->\n[错误分析] accept格式不正确导致文件类型限制失效\n[正确代码] \n<FUpload\n  action=\"/upload\"\n  :accept=\"['image/*', '.pdf']\"\n>\n[注意事项] accept应为数组格式，包含有效的MIME类型或文件扩展名"
    },
    {
      "input": "空文件列表处理",
      "output": "<!-- correct -->\n[场景说明] 处理空文件列表状态\n[代码实现] \n<FUpload v-model:fileList=\"files\">\n  <div v-if=\"!files.length\">暂无文件</div>\n</FUpload>\n[最佳实践] 为空状态提供友好的提示和操作引导"
    },
    {
      "input": "大文件上传",
      "output": "<!-- correct -->\n[场景说明] 处理大文件上传时的性能和体验\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  :beforeUpload=\"checkFileSize\"\n  :httpRequest=\"chunkUpload\"\n>\n[最佳实践] 对大文件进行分片上传，显示上传进度，处理超时和重试"
    },
    {
      "input": "上传错误处理",
      "output": "<!-- correct -->\n[场景说明] 处理上传失败情况\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  @error=\"handleError\"\n>\n[最佳实践] 捕获并显示错误信息，提供重试选项"
    },
    {
      "input": "怎么让上传按钮更好看",
      "output": "<!-- correct -->\n[场景说明] 自定义上传按钮样式\n[代码实现] \n<FUpload action=\"/upload\">\n  <FButton type=\"primary\" icon=\"upload\">\n    上传文件\n  </FButton>\n</FUpload>\n[最佳实践] 使用主题色按钮和图标增强视觉吸引力"
    },
    {
      "input": "上传太慢了咋办",
      "output": "<!-- correct -->\n[场景说明] 优化上传性能\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  :httpRequest=\"optimizedUpload\"\n  :timeout=\"30000\"\n>\n[最佳实践] 使用压缩、分片等技术优化上传速度，适当增加超时时间"
    },
    {
      "input": "上传组件样式覆盖",
      "output": "<!-- correct -->\n[场景说明] 自定义上传组件样式\n[代码实现] \n<FUpload class=\"custom-upload\">\n  <style>\n    .custom-upload .f-upload-dragger {\n      border: 2px dashed #1890ff;\n    }\n  </style>\n</FUpload>\n[最佳实践] 使用scoped样式避免污染全局样式"
    },
    {
      "input": "与表单组合使用",
      "output": "<!-- correct -->\n[场景说明] 在表单中使用上传组件\n[代码实现] \n<FForm>\n  <FFormItem label=\"附件\" prop=\"files\">\n    <FUpload v-model:fileList=\"form.files\">\n      <FButton>选择文件</FButton>\n    </FUpload>\n  </FFormItem>\n</FForm>\n[最佳实践] 配合表单验证规则确保必填项"
    },
    {
      "input": "与表格组合使用",
      "output": "<!-- correct -->\n[场景说明] 在表格行内使用上传组件\n[代码实现] \n<FTable>\n  <template #bodyCell=\"{ record }\">\n    <FUpload :action=\"getUploadUrl(record.id)\">\n      <FButton size=\"small\">上传</FButton>\n    </FUpload>\n  </template>\n</FTable>\n[最佳实践] 根据行数据动态设置上传参数"
    },
    {
      "input": "单文件覆盖上传",
      "output": "<!-- correct -->\n[场景说明] 实现单文件自动替换功能\n[代码实现] \n<FUpload\n  action=\"/upload\"\n  :multipleLimit=\"1\"\n  @exceed=\"(files) => {\n    fileList.value = [files[0]]\n  }\"\n>\n[最佳实践] 通过exceed事件处理文件替换逻辑"
    }
  ]
};
