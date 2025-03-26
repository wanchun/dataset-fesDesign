import type { IComponentMetadata } from '../type';

export const scrollbarMeta: IComponentMetadata = {
  "componentName": "FScrollbar",
  "title": "滚动条",
  "description": "自定义滚动条组件，提供灵活的滚动区域控制能力。支持原生滚动条样式、动态尺寸调整、阴影效果等特性，适用于需要定制化滚动行为的复杂容器场景。",
  "scenarios": [
    "长列表滚动：当内容区域高度超过容器可视区域时自动显示滚动条，支持鼠标滚轮和拖拽操作",
    "固定高度容器：通过设置height属性创建固定高度的滚动容器，适用于需要精确控制可视区域的布局场景",
    "动态内容高度：配合maxHeight属性实现内容高度自适应，当内容超出最大高度时自动显示滚动条",
    "原生滚动条需求：在需要浏览器原生滚动行为时启用native模式，保持与操作系统一致的滚动体验",
    "阴影效果配置：通过shadow属性控制滚动区域边缘的视觉指示，提升滚动位置的可视化感知"
  ],
  "parent": {
    "types": [
      "container"
    ],
    "restrictions": [
      {
        "parent": "FPopup",
        "description": "弹窗内容滚动场景下必须作为弹窗内容区域的直接子元素"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "native",
      "target": [
        "shadow",
        "minSize"
      ],
      "effect": "启用原生滚动条时将禁用自定义阴影效果和最小滑块尺寸配置"
    },
    {
      "source": "noresize",
      "target": "always",
      "effect": "禁用容器尺寸监听时强制关闭持续显示滚动条功能"
    }
  ],
  "props": [
    {
      "name": "height",
      "title": "容器高度",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "设置滚动容器的固定高度，支持数字（单位px）或CSS字符串格式（如'100vh'）",
      "defaultValue": "undefined"
    },
    {
      "name": "maxHeight",
      "title": "最大高度",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "容器的最大高度限制，内容超出时显示滚动条，支持响应式调整",
      "defaultValue": "undefined"
    },
    {
      "name": "native",
      "title": "原生模式",
      "propType": "bool",
      "description": "启用浏览器原生滚动条样式，禁用自定义滚动条渲染",
      "defaultValue": false
    },
    {
      "name": "noresize",
      "title": "禁用尺寸监听",
      "propType": "bool",
      "description": "关闭容器尺寸变化监听，提升性能但可能导致滚动条状态不更新",
      "defaultValue": false
    },
    {
      "name": "always",
      "title": "持续显示",
      "propType": "bool",
      "description": "始终显示滚动条轨道（仅非原生模式生效）",
      "defaultValue": false
    },
    {
      "name": "minSize",
      "title": "滑块最小尺寸",
      "propType": "number",
      "description": "设置滚动滑块的最小高度/宽度（单位px），防止过小导致操作困难",
      "defaultValue": 20
    },
    {
      "name": "shadow",
      "title": "边缘阴影",
      "propType": {
        "type": "oneOfType",
        "value": [
          "bool",
          {
            "type": "shape",
            "value": [
              {
                "name": "x",
                "propType": "bool",
                "title": "水平轴",
                "description": "水平滚动时显示左右边缘阴影"
              },
              {
                "name": "y",
                "propType": "bool",
                "title": "垂直轴",
                "description": "垂直滚动时显示上下边缘阴影"
              }
            ]
          }
        ]
      },
      "description": "配置滚动区域边缘的视觉阴影效果，支持布尔值或分轴配置",
      "defaultValue": false
    },
    {
      "name": "containerClass",
      "title": "容器类名",
      "propType": {
        "type": "oneOfType",
        "value": [
          "array",
          "object",
          "string"
        ]
      },
      "description": "自定义外层容器的CSS类名，支持字符串、数组或对象格式"
    },
    {
      "name": "containerStyle",
      "title": "容器样式",
      "propType": {
        "type": "oneOfType",
        "value": [
          "array",
          "object",
          "string"
        ]
      },
      "description": "外层容器的行内样式，支持CSS字符串、对象或数组格式"
    },
    {
      "name": "contentStyle",
      "title": "内容样式",
      "propType": {
        "type": "oneOfType",
        "value": [
          "array",
          "object",
          "string"
        ]
      },
      "description": "内容区域的自定义样式，用于调整内部元素布局"
    },
    {
      "name": "horizontalRatioStyle",
      "title": "水平滚动条样式",
      "propType": {
        "type": "oneOfType",
        "value": [
          "array",
          "object",
          "string"
        ]
      },
      "description": "自定义水平滚动条的轨道和滑块样式"
    },
    {
      "name": "verticalRatioStyle",
      "title": "垂直滚动条样式",
      "propType": {
        "type": "oneOfType",
        "value": [
          "array",
          "object",
          "string"
        ]
      },
      "description": "自定义垂直滚动条的轨道和滑块样式"
    }
  ],
  "events": [
    {
      "name": "onScroll",
      "description": "滚动发生时触发的事件",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "包含滚动位置信息的原生事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "滚动容器的内容区域",
      "required": true
    }
  ]
};
