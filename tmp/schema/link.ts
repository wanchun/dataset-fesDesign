import type { IComponentMetadata } from '../type';

export const linkMeta: IComponentMetadata = {
  "title": "超链接",
  "componentName": "FLink",
  "description": "超链接组件，用于在页面中创建可点击的链接，支持跳转、图标、不同尺寸和样式类型，适用于导航、跳转等场景。",
  "scenarios": [
    "页面导航：在页面中使用超链接进行内部或外部页面的跳转，提供清晰的用户引导。",
    "操作提示：使用带有图标的超链接，提示用户进行特定操作，如查看详情、下载文件等。",
    "状态展示：通过不同类型的超链接展示不同状态的信息，如成功、警告、错误等。",
    "禁用状态：在特定条件下禁用超链接，防止用户进行无效操作。",
    "新窗口打开：通过设置target属性，使链接在新窗口或标签页中打开，保持当前页面的上下文。"
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
      "name": "children",
      "title": "文本内容",
      "propType": "string",
      "description": "超链接的文本内容"
    },
    {
      "name": "href",
      "title": "跳转链接",
      "propType": "string",
      "description": "超链接的目标地址"
    },
    {
      "name": "icon",
      "title": "图标",
      "propType": "string",
      "description": "超链接的图标，用于增强视觉效果"
    },
    {
      "name": "size",
      "title": "尺寸",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "small",
            "title": "小",
            "usage": "紧凑场景使用，如表格内的链接"
          },
          {
            "name": "medium",
            "title": "中",
            "usage": "常规尺寸，适合大多数场景"
          },
          {
            "name": "large",
            "title": "大",
            "usage": "需要突出链接的页面重点区域"
          }
        ]
      },
      "description": "超链接的尺寸大小，影响链接的展示尺寸",
      "defaultValue": "medium"
    },
    {
      "name": "type",
      "title": "排印类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "default",
            "title": "默认",
            "usage": "常规场景的默认链接样式，适用于一般导航"
          },
          {
            "name": "primary",
            "title": "重要",
            "usage": "需要突出强调的主要链接，如重要操作提示"
          },
          {
            "name": "success",
            "title": "成功",
            "usage": "表示成功状态的链接样式，用于操作成功的反馈"
          },
          {
            "name": "info",
            "title": "信息",
            "usage": "用于展示信息的链接样式，传达中性的信息状态"
          },
          {
            "name": "warning",
            "title": "警告",
            "usage": "表示警告状态的链接样式，提醒用户需要注意"
          },
          {
            "name": "danger",
            "title": "错误",
            "usage": "表示错误状态的链接样式，如删除等破坏性操作"
          }
        ]
      },
      "description": "超链接的样式风格，影响链接的外观和语义",
      "defaultValue": "default"
    },
    {
      "name": "underline",
      "title": "下划线",
      "propType": "bool",
      "description": "是否显示下划线",
      "defaultValue": false
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "propType": "bool",
      "description": "是否禁用超链接",
      "defaultValue": false
    },
    {
      "name": "target",
      "title": "跳转行为",
      "propType": "string",
      "description": "跳转行为，同原生 target，如 '_blank' 表示在新窗口打开",
      "defaultValue": "_self"
    }
  ],
  "events": [
    {
      "name": "onClick",
      "description": "点击超链接时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "点击事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "超链接的文本内容，可以是文本或其他元素",
      "required": true
    }
  ],
  "exposes": []
};
