import type { IComponentMetadata } from '../type';

export const skeletonMeta: IComponentMetadata = {
  "title": "骨架屏",
  "componentName": "FSkeleton",
  "description": "骨架屏组件，用于在数据加载过程中提供占位效果，提升用户体验。支持多种形状和尺寸，适用于图片、文本等内容的加载占位。",
  "scenarios": [
    "图片加载：在图片加载时使用圆形或矩形的骨架屏，提供平滑的加载过渡效果。",
    "文本加载：在文本内容加载时使用文本骨架屏，保持页面布局的稳定性。",
    "列表加载：在列表数据加载时使用重复的骨架屏，提供一致的用户体验。",
    "卡片加载：在卡片内容加载时使用自定义尺寸的骨架屏，确保布局的一致性。",
    "复杂布局加载：在复杂布局加载时使用多种形状的骨架屏，保持页面的结构完整。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "text",
      "title": "文本",
      "propType": "bool",
      "description": "是否为文本骨架屏",
      "defaultValue": false
    },
    {
      "name": "round",
      "title": "圆角",
      "propType": "bool",
      "description": "是否为圆角骨架屏",
      "defaultValue": false
    },
    {
      "name": "circle",
      "title": "圆形",
      "propType": "bool",
      "description": "是否为圆形骨架屏",
      "defaultValue": false
    },
    {
      "name": "height",
      "title": "高度",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "骨架屏的高度，可以是字符串或数字",
      "defaultValue": null
    },
    {
      "name": "width",
      "title": "宽度",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "骨架屏的宽度，可以是字符串或数字",
      "defaultValue": null
    },
    {
      "name": "size",
      "title": "大小",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "small",
            "title": "小",
            "usage": "紧凑场景使用，如表单内联骨架屏"
          },
          {
            "name": "middle",
            "title": "中",
            "usage": "常规尺寸，适合大多数场景"
          },
          {
            "name": "large",
            "title": "大",
            "usage": "需要突出操作的页面重点区域"
          }
        ]
      },
      "description": "骨架屏的尺寸大小，影响骨架屏的展示尺寸",
      "defaultValue": "middle"
    },
    {
      "name": "repeat",
      "title": "重复次数",
      "propType": "number",
      "description": "骨架屏的重复次数",
      "defaultValue": 1
    },
    {
      "name": "animated",
      "title": "启用动画",
      "propType": "bool",
      "description": "是否启用骨架屏的动画效果",
      "defaultValue": true
    },
    {
      "name": "sharp",
      "title": "直角",
      "propType": "bool",
      "description": "是否为直角骨架屏",
      "defaultValue": true
    }
  ],
  "events": [],
  "slots": []
};
