import type { IComponentMetadata } from '../type';

export const tagMeta: IComponentMetadata = {
  "title": "标签",
  "componentName": "FTag",
  "description": "标签组件，用于展示信息或分类内容。支持多种类型、大小和主题，适用于状态标识、分类标记等场景。",
  "scenarios": [
    "状态标识：使用不同类型的标签（如success、warning、danger）来表示任务或操作的状态，帮助用户快速识别状态。",
    "分类标记：在列表或表格中使用标签对内容进行分类，增强信息的可读性和组织性。",
    "可关闭标签：在需要用户手动移除标签的场景下使用可关闭标签，如过滤条件或标签云。",
    "主题切换：根据页面主题使用不同主题的标签（如dark、light、plain），确保与整体设计风格一致。",
    "自定义背景色：通过自定义背景色来突出显示特定标签，用于强调重要信息或特殊标记。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单项场景下必须放在表单项组件内"
      },
      {
        "parent": "FSpace",
        "description": "间距布局场景下必须放在间距组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "type",
      "title": "类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "default",
            "title": "默认",
            "usage": "常规场景的默认标签样式，适用于一般信息展示"
          },
          {
            "name": "success",
            "title": "成功",
            "usage": "表示成功状态的标签样式，用于操作成功的反馈"
          },
          {
            "name": "info",
            "title": "信息",
            "usage": "用于展示信息的标签样式，传达中性的信息状态"
          },
          {
            "name": "warning",
            "title": "警告",
            "usage": "表示警告状态的标签样式，提醒用户需要注意"
          },
          {
            "name": "danger",
            "title": "危险",
            "usage": "表示危险操作的标签样式，如删除等破坏性操作"
          }
        ]
      },
      "description": "标签的类型，影响标签的外观和语义",
      "defaultValue": "default"
    },
    {
      "name": "closable",
      "title": "可关闭",
      "propType": "bool",
      "description": "是否显示关闭按钮，允许用户手动关闭标签",
      "defaultValue": false
    },
    {
      "name": "backgroundColor",
      "title": "背景色",
      "propType": "string",
      "description": "标签的背景颜色，支持自定义颜色值",
      "defaultValue": ""
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
            "usage": "紧凑场景使用，如表格内联标签"
          },
          {
            "name": "middle",
            "title": "中",
            "usage": "常规尺寸，适合大多数场景"
          },
          {
            "name": "large",
            "title": "大",
            "usage": "需要突出显示的页面重点区域"
          }
        ]
      },
      "description": "标签的尺寸大小，影响标签的展示尺寸",
      "defaultValue": "middle"
    },
    {
      "name": "effect",
      "title": "主题",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "dark",
            "title": "深色",
            "usage": "深色主题，适用于深色背景的页面"
          },
          {
            "name": "light",
            "title": "亮色",
            "usage": "亮色主题，适用于浅色背景的页面"
          },
          {
            "name": "plain",
            "title": "无色",
            "usage": "无色主题，适用于极简风格的页面"
          }
        ]
      },
      "description": "标签的主题，影响标签的整体风格",
      "defaultValue": "light"
    },
    {
      "name": "bordered",
      "title": "边框",
      "propType": "bool",
      "description": "是否显示边框，影响标签的视觉效果",
      "defaultValue": true
    },
    {
      "name": "children",
      "title": "内容",
      "propType": "string",
      "description": "标签的文本内容",
      "defaultValue": "我是标签"
    }
  ],
  "events": [
    {
      "name": "onClick",
      "description": "点击标签时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "点击事件对象"
        }
      ]
    },
    {
      "name": "onClose",
      "description": "关闭标签时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "关闭事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "标签的内容，可以是文本或其他元素",
      "required": true
    }
  ]
};
