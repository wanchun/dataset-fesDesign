import type { IComponentMetadata } from '../type';

export const uploadDraggerMeta: IComponentMetadata = {
  "title": "拖拽上传容器",
  "componentName": "FUploadDragger",
  "description": "拖拽上传容器组件，提供可视化的拖拽区域用于文件上传操作。支持自定义内容展示，适用于需要直观文件上传体验的场景。",
  "scenarios": [
    "文件上传：作为文件上传的主要交互区域，提供拖拽和点击两种上传方式，提升用户体验。",
    "批量上传：支持多文件拖拽上传，适用于需要批量处理文件的业务场景。",
    "图片上传：专门优化图片上传体验，支持预览和拖拽排序功能。",
    "文档管理：在文档管理系统中作为文档上传入口，提供清晰的交互反馈。",
    "云存储：作为云存储服务的文件上传入口，支持大文件分片上传。",
    "表单集成：嵌入表单中作为文件上传字段，保持与表单其他元素的样式一致性。",
    "多媒体上传：支持音视频文件的拖拽上传，提供文件类型校验功能。",
    "教育平台：在教育平台中用于课件和作业的上传，提供进度显示功能。",
    "企业应用：在企业内部系统中用于各类文档和报表的上传处理。"
  ],
  "parent": {
    "types": [
      "container",
      "form-item"
    ],
    "restrictions": [
      {
        "parent": "FUpload",
        "description": "通常需要作为上传组件的子组件使用"
      }
    ]
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "children",
      "title": "内容",
      "valueType": "string",
      "description": "拖拽区域显示的内容，可以是提示文本或自定义元素",
      "example": "拖拽文件到此处或点击上传"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "拖拽区域的内容插槽，用于自定义显示内容",
      "required": false
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基础拖拽上传区域",
      "output": "[场景说明] 基本文件上传场景\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  拖拽文件到此处或点击上传\n</FUploadDragger>\n[最佳实践] 建议配合上传组件使用，提供清晰的用户指引"
    },
    {
      "input": "自定义样式拖拽区",
      "output": "[场景说明] 需要品牌定制的上传区域\n[代码实现] <!-- correct -->\n<FUploadDragger style={{ background: '#f5f5f5', border: '2px dashed #1890ff' }}>\n  <div style={{ color: '#1890ff' }}>自定义拖拽区域</div>\n</FUploadDragger>\n[最佳实践] 保持与整体设计风格一致，确保交互状态可见"
    },
    {
      "input": "带图标的拖拽区",
      "output": "[场景说明] 需要视觉强化的上传引导\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  <UploadOutlined style={{ fontSize: '48px', color: '#999' }} />\n  <div>点击或拖拽文件到此处上传</div>\n</FUploadDragger>\n[最佳实践] 使用大尺寸图标提高视觉吸引力"
    },
    {
      "input": "多文件上传提示",
      "output": "[场景说明] 支持批量上传的业务需求\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  可拖拽多个文件到此处\n  <div style={{ fontSize: '12px', color: '#999' }}>支持jpg/png/pdf等格式</div>\n</FUploadDragger>\n[最佳实践] 明确说明支持的文件类型和数量限制"
    },
    {
      "input": "表单集成示例",
      "output": "[场景说明] 在表单中使用上传组件\n[代码实现] <!-- correct -->\n<FFormItem label=\"附件上传\">\n  <FUploadDragger>拖拽文件到此处</FUploadDragger>\n</FFormItem>\n[最佳实践] 保持与表单其他元素的间距和样式统一"
    },
    {
      "input": "禁用状态",
      "output": "[场景说明] 上传功能临时不可用\n[代码实现] <!-- correct -->\n<FUploadDragger disabled>\n  当前不可上传文件\n</FUploadDragger>\n[最佳实践] 明确显示禁用状态并提供原因说明"
    },
    {
      "input": "上传进度显示",
      "output": "[场景说明] 需要显示上传进度的场景\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  <FProgress percent={30} />\n  正在上传...\n</FUploadDragger>\n[最佳实践] 提供实时反馈增强用户体验"
    },
    {
      "input": "文件类型限制提示",
      "output": "[场景说明] 需要限制特定文件类型的场景\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  仅支持.jpg/.png文件\n  <div style={{ fontSize: '12px', color: 'red' }}>其他格式将被自动过滤</div>\n</FUploadDragger>\n[最佳实践] 提前告知限制条件减少用户错误操作"
    },
    {
      "input": "children属性错误使用数字",
      "output": "[错误分析] children属性应为字符串类型\n[正确代码] <!-- correct -->\n<FUploadDragger>\n  请拖拽文件到此处\n</FUploadDragger>\n[注意事项] 内容应该使用字符串或合法的React节点"
    },
    {
      "input": "缺少必要内容",
      "output": "[错误分析] 拖拽区域缺少用户指引内容\n[正确代码] <!-- correct -->\n<FUploadDragger>\n  拖拽文件到此处上传\n</FUploadDragger>\n[注意事项] 必须提供明确的操作指引"
    },
    {
      "input": "嵌套复杂组件导致交互问题",
      "output": "[错误分析] 嵌套过多交互元素可能影响拖拽功能\n[正确代码] <!-- correct -->\n<FUploadDragger>\n  <div>简单明确的指引文本</div>\n</FUploadDragger>\n[注意事项] 保持内容简洁，避免嵌套复杂交互元素"
    },
    {
      "input": "空状态处理",
      "output": "[场景说明] 上传完成后的空状态\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  {files.length === 0 ? '拖拽文件到此处' : '可继续添加更多文件'}\n</FUploadDragger>\n[最佳实践] 根据状态变化提供动态提示"
    },
    {
      "input": "超大文件提示",
      "output": "[场景说明] 处理大文件上传的特殊情况\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  最大支持2GB文件上传\n  <div style={{ fontSize: '12px' }}>大文件上传可能需要较长时间</div>\n</FUploadDragger>\n[最佳实践] 提前告知文件大小限制"
    },
    {
      "input": "异常文件类型处理",
      "output": "[场景说明] 用户上传不支持的文件类型\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  {error ? '不支持该文件类型' : '拖拽文件到此处'}\n</FUploadDragger>\n[最佳实践] 提供友好的错误提示而非系统报错"
    },
    {
      "input": "怎么搞个拖拽上传",
      "output": "[场景说明] 不专业的自然语言提问\n[代码实现] <!-- correct -->\n<FUploadDragger>\n  拖拽文件到此处上传\n</FUploadDragger>\n[最佳实践] 提供最简单的实现方案"
    },
    {
      "input": "上传的框框怎么弄",
      "output": "[场景说明] 非技术术语的需求描述\n[代码实现] <!-- correct -->\n<FUploadDragger style={{ border: '2px dashed #d9d9d9' }}>\n  拖拽文件到此处\n</FUploadDragger>\n[最佳实践] 使用标准边框样式实现拖拽区域"
    },
    {
      "input": "传文件的地方要好看点",
      "output": "[场景说明] 模糊的视觉需求\n[代码实现] <!-- correct -->\n<FUploadDragger \n  style={{ \n    background: '#fafafa', \n    border: '2px dashed #1890ff',\n    borderRadius: '4px'\n  }}>\n  <UploadOutlined style={{ color: '#1890ff', fontSize: '32px' }} />\n  <div style={{ color: '#1890ff' }}>拖拽文件到此处上传</div>\n</FUploadDragger>\n[最佳实践] 使用品牌色和适当间距提升视觉效果"
    },
    {
      "input": "覆盖默认样式",
      "output": "[场景说明] 自定义拖拽区域样式\n[代码实现] <!-- correct -->\n<FUploadDragger className=\"custom-upload-dragger\">\n  自定义样式拖拽区\n</FUploadDragger>\n\n<style>\n.custom-upload-dragger {\n  background: #f0f9ff;\n  border: 2px dashed #69b1ff;\n}\n.custom-upload-dragger:hover {\n  border-color: #1677ff;\n}\n</style>\n[最佳实践] 使用CSS类名覆盖保持代码可维护性"
    },
    {
      "input": "与上传列表组合使用",
      "output": "[场景说明] 带文件列表的上传功能\n[代码实现] <!-- correct -->\n<div>\n  <FUploadDragger>拖拽文件到此处</FUploadDragger>\n  <FUploadList files={files} />\n</div>\n[最佳实践] 分开布局拖拽区和文件列表"
    },
    {
      "input": "表单验证集成",
      "output": "[场景说明] 带验证的文件上传表单\n[代码实现] <!-- correct -->\n<FForm onFinish={handleSubmit}>\n  <FFormItem \n    name=\"files\" \n    label=\"项目文档\" \n    rules={[{ required: true, message: '请上传至少一个文件' }]}\n  >\n    <FUploadDragger>拖拽项目文档到此处</FUploadDragger>\n  </FFormItem>\n</FForm>\n[最佳实践] 结合表单验证确保必填字段"
    }
  ]
};
