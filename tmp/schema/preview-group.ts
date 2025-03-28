import type { IComponentMetadata } from '../type';

export const previewGroupMeta: IComponentMetadata = {
  "title": "图片组",
  "componentName": "FPreviewGroup",
  "description": "图片预览组组件，用于管理一组图片的预览行为。支持点击遮罩层关闭预览功能，必须包含FImage子组件。",
  "scenarios": [
    "商品详情页：用于展示商品的多张图片，支持点击预览和切换查看",
    "相册管理：在相册应用中组织和管理多张照片的预览功能",
    "文档预览：支持文档截图的多图预览功能",
    "报表展示：用于展示报表的多张截图，方便用户切换查看",
    "教学资料：在教学系统中展示多张教学资料的预览"
  ],
  "parent": {
    "types": [
      "container"
    ],
    "restrictions": []
  },
  "children": [
    "FImage"
  ],
  "propRelations": [],
  "props": [
    {
      "name": "hideOnClickModal",
      "title": "点击遮罩层关闭预览",
      "valueType": "bool",
      "description": "控制是否可以通过点击遮罩层关闭图片预览",
      "defaultValue": false,
      "example": true
    }
  ],
  "events": [],
  "slots": [],
  "templates": [
    {
      "input": "基础图片组",
      "output": "[场景说明] 创建一个基本的图片预览组\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <FImage src=\"image1.jpg\" />\n  <FImage src=\"image2.jpg\" />\n</FPreviewGroup>\n[最佳实践] 确保每个FImage都有有效的src属性"
    },
    {
      "input": "点击遮罩层关闭",
      "output": "[场景说明] 配置点击遮罩层关闭预览功能\n[代码实现] <!-- correct -->\n<FPreviewGroup hideOnClickModal>\n  <FImage src=\"image1.jpg\" />\n</FPreviewGroup>\n[最佳实践] 该功能适合需要快速关闭预览的场景"
    },
    {
      "input": "错误示例：空图片组",
      "output": "[错误分析] 图片组必须包含至少一个FImage子组件\n[正确代码] <!-- correct -->\n<FPreviewGroup>\n  <FImage src=\"image1.jpg\" />\n</FPreviewGroup>\n[注意事项] 图片组不能为空，必须包含有效的FImage子组件"
    },
    {
      "input": "错误示例：使用非FImage子组件",
      "output": "[错误分析] 图片组只能包含FImage子组件\n[正确代码] <!-- correct -->\n<FPreviewGroup>\n  <FImage src=\"image1.jpg\" />\n</FPreviewGroup>\n[注意事项] 图片组的子组件必须是FImage类型"
    },
    {
      "input": "边界条件：单张图片",
      "output": "[场景说明] 图片组只包含一张图片的情况\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <FImage src=\"image1.jpg\" />\n</FPreviewGroup>\n[最佳实践] 单张图片也可以使用图片组，保持功能一致性"
    },
    {
      "input": "边界条件：大量图片",
      "output": "[场景说明] 图片组包含大量图片的情况\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <FImage src=\"image1.jpg\" />\n  <FImage src=\"image2.jpg\" />\n  <!-- 更多图片... -->\n</FPreviewGroup>\n[最佳实践] 大量图片时考虑性能优化，如懒加载"
    },
    {
      "input": "自然语言提问：怎么让点背景能关图片？",
      "output": "[场景说明] 配置点击遮罩层关闭预览功能\n[代码实现] <!-- correct -->\n<FPreviewGroup hideOnClickModal>\n  <FImage src=\"image1.jpg\" />\n</FPreviewGroup>\n[最佳实践] 使用hideOnClickModal属性控制该功能"
    },
    {
      "input": "自然语言提问：图片组最多能放多少图？",
      "output": "[场景说明] 图片组没有严格的数量限制\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <!-- 可以放置任意数量的FImage -->\n</FPreviewGroup>\n[最佳实践] 实际数量应考虑性能和用户体验"
    },
    {
      "input": "组合使用：与模态框配合",
      "output": "[场景说明] 在模态框中使用图片组\n[代码实现] <!-- correct -->\n<FModal>\n  <FPreviewGroup>\n    <FImage src=\"image1.jpg\" />\n  </FPreviewGroup>\n</FModal>\n[最佳实践] 模态框和图片组可以很好地配合使用"
    }
  ]
};
