import type { IComponentMetadata } from '../type';

export const inputFileDraggerMeta: IComponentMetadata = {
  "title": "文件选择",
  "componentName": "FInputFileDragger",
  "description": "拖拽式文件选择组件，支持多选、文件类型过滤和自定义文件列表展示。适用于需要上传文件的场景，提供直观的拖拽交互体验。",
  "scenarios": [
    "图片上传：设置accept为image/*，限制只能上传图片文件，并显示缩略图预览",
    "批量上传：启用multiple属性，允许用户一次性选择多个文件进行上传",
    "文件类型验证：通过onFileTypeInvalid回调自定义文件类型不匹配时的处理逻辑",
    "禁用状态：在表单未完成时禁用文件上传功能，防止误操作",
    "自定义文件列表：通过fileList插槽自定义文件列表的展示样式和交互"
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
      "target": "multiple",
      "effect": "禁用状态下无法进行多选操作",
      "notes": [
        "当disabled为true时，multiple属性将失效",
        "适用于需要临时禁用上传功能的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
      "valueType": "array",
      "description": "双向绑定的文件列表，用于获取或设置当前选中的文件",
      "required": true,
      "example": "[]"
    },
    {
      "name": "multiple",
      "title": "可多选",
      "valueType": "bool",
      "description": "是否允许选择多个文件",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用",
      "valueType": "bool",
      "description": "是否禁用文件选择功能",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "accept",
      "title": "文件类型",
      "valueType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "允许上传的文件类型，如['image/*', '.pdf']",
      "defaultValue": [],
      "example": [
        "image/*"
      ]
    },
    {
      "name": "onFileTypeInvalid",
      "title": "类型错误回调",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "files",
            "type": "File[]",
            "description": "不符合类型的文件列表"
          }
        ],
        "returnType": "any"
      },
      "description": "当拖拽的文件类型不符合accept设置时的回调函数",
      "example": "(files) => alert('文件类型不匹配')"
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "文件选择发生变化时触发",
      "parameters": [
        {
          "name": "files",
          "type": "File[]",
          "description": "当前选中的文件列表"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "fileList",
      "description": "自定义文件列表的展示方式",
      "required": false,
      "scope": {
        "files": "File[]",
        "removeFile": "(index: number) => void"
      }
    }
  ],
  "templates": [
    {
      "input": "基本文件上传",
      "output": "[场景说明] 基础文件上传功能\n[代码实现] <FInputFileDragger v-model=\"files\" />\n[最佳实践] 配合v-model实现双向绑定，获取用户选择的文件"
    },
    {
      "input": "图片上传",
      "output": "[场景说明] 限制只能上传图片\n[代码实现] <FInputFileDragger v-model=\"files\" accept=\"image/*\" />\n[最佳实践] 设置accept属性过滤非图片文件"
    },
    {
      "input": "多文件上传",
      "output": "[场景说明] 允许选择多个文件\n[代码实现] <FInputFileDragger v-model=\"files\" multiple />\n[最佳实践] 启用multiple属性支持批量上传"
    },
    {
      "input": "禁用状态",
      "output": "[场景说明] 表单未完成时禁用上传\n[代码实现] <FInputFileDragger v-model=\"files\" :disabled=\"!formValid\" />\n[最佳实践] 根据业务状态动态控制组件可用性"
    },
    {
      "input": "自定义错误提示",
      "output": "[场景说明] 自定义文件类型错误处理\n[代码实现] <FInputFileDragger \n  v-model=\"files\" \n  accept=\"image/*\" \n  :onFileTypeInvalid=\"handleInvalid\" \n/>\n[最佳实践] 通过回调函数实现更友好的错误提示"
    },
    {
      "input": "自定义文件列表",
      "output": "[场景说明] 自定义文件列表展示\n[代码实现] <FInputFileDragger v-model=\"files\">\n  <template #fileList=\"{ files, removeFile }\">\n    <div v-for=\"(file, index) in files\" :key=\"index\">\n      {{ file.name }}\n      <button @click=\"removeFile(index)\">删除</button>\n    </div>\n  </template>\n</FInputFileDragger>\n[最佳实践] 利用插槽实现更灵活的文件列表展示"
    },
    {
      "input": "错误示例：缺少v-model",
      "output": "[错误分析] 缺少必要的v-model绑定\n[正确代码] <FInputFileDragger v-model=\"files\" />\n[注意事项] 必须提供v-model来获取用户选择的文件"
    },
    {
      "input": "错误示例：无效的accept格式",
      "output": "[错误分析] accept应为数组格式\n[正确代码] <FInputFileDragger v-model=\"files\" :accept=\"['image/*']\" />\n[注意事项] accept属性需要数组格式，即使只有一个类型"
    },
    {
      "input": "错误示例：错误使用插槽",
      "output": "[错误分析] 直接使用children而不是插槽\n[正确代码] <FInputFileDragger v-model=\"files\">\n  <template #fileList=\"{ files }\">\n    <!-- 自定义内容 -->\n  </template>\n</FInputFileDragger>\n[注意事项] 自定义文件列表必须使用fileList插槽"
    },
    {
      "input": "空状态处理",
      "output": "[场景说明] 处理空文件列表\n[代码实现] <FInputFileDragger v-model=\"files\" @change=\"handleEmpty(files)\" />\n[最佳实践] 监听change事件处理空状态"
    },
    {
      "input": "大文件上传",
      "output": "[场景说明] 处理大文件上传\n[代码实现] <FInputFileDragger v-model=\"files\" @change=\"checkFileSize(files)\" />\n[最佳实践] 在change事件中检查文件大小"
    },
    {
      "input": "文件上传按钮怎么用",
      "output": "[场景说明] 基础使用方式\n[代码实现] <FInputFileDragger v-model=\"files\" />\n[最佳实践] 最简单的文件上传实现"
    },
    {
      "input": "上传文件组件咋使",
      "output": "[场景说明] 基础使用方式\n[代码实现] <FInputFileDragger v-model=\"files\" />\n[最佳实践] 通过v-model获取用户选择的文件"
    },
    {
      "input": "怎么限制上传类型",
      "output": "[场景说明] 文件类型限制\n[代码实现] <FInputFileDragger v-model=\"files\" accept=\"['image/*']\" />\n[最佳实践] 使用accept属性限制文件类型"
    },
    {
      "input": "自定义样式",
      "output": "[场景说明] 自定义拖拽区域样式\n[代码实现] <FInputFileDragger \n  v-model=\"files\" \n  class=\"custom-style\" \n  style=\"border: 2px dashed #1890ff\" \n/>\n[最佳实践] 通过class和style属性自定义外观"
    },
    {
      "input": "与表单组件配合",
      "output": "[场景说明] 在表单中使用\n[代码实现] <FForm>\n  <FFormItem label=\"文件上传\">\n    <FInputFileDragger v-model=\"formData.files\" />\n  </FFormItem>\n</FForm>\n[最佳实践] 放在FFormItem中实现表单集成"
    },
    {
      "input": "与进度条组件配合",
      "output": "[场景说明] 显示上传进度\n[代码实现] <template>\n  <FInputFileDragger v-model=\"files\" @change=\"startUpload\" />\n  <FProgress :percent=\"uploadPercent\" />\n</template>\n[最佳实践] 结合进度条组件提升用户体验"
    }
  ]
};
