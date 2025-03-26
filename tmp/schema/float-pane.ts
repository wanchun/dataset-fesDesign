import type { IComponentMetadata } from '../type';

export const floatPaneMeta: IComponentMetadata = {
  "title": "浮动面板",
  "componentName": "FFloatPane",
  "description": "浮动面板组件，用于在页面中显示可拖动的浮动窗口。支持自定义位置、大小和渲染方式，适用于信息展示、操作面板等场景。",
  "scenarios": [
    "信息展示：使用浮动面板展示详细信息或操作提示，保持页面内容不受干扰。",
    "操作面板：在复杂操作流程中使用浮动面板提供操作选项，提升用户体验。",
    "临时通知：使用浮动面板展示临时通知或警告信息，确保用户及时获取重要信息。",
    "配置面板：在配置界面中使用浮动面板提供详细的配置选项，保持界面整洁。",
    "调试工具：在开发环境中使用浮动面板展示调试信息，方便开发者快速定位问题。"
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
      "source": "visible",
      "target": "displayDirective",
      "effect": "控制面板的渲染方式，visible为true时根据displayDirective决定渲染方式",
      "notes": [
        "当visible为true时，displayDirective决定面板是缓存渲染还是重置渲染"
      ]
    }
  ],
  "props": [
    {
      "name": "visible",
      "title": "显示",
      "propType": "bool",
      "description": "是否显示浮动面板",
      "defaultValue": false
    },
    {
      "name": "title",
      "title": "标题",
      "propType": "string",
      "description": "浮动面板的标题",
      "defaultValue": ""
    },
    {
      "name": "displayDirective",
      "title": "渲染方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "show",
            "title": "缓存渲染",
            "usage": "面板显示时保留之前的状态，适用于需要保持状态的场景"
          },
          {
            "name": "if",
            "title": "重置渲染",
            "usage": "面板显示时重新渲染，适用于每次显示都需要重置的场景"
          }
        ]
      },
      "description": "控制浮动面板的渲染方式",
      "defaultValue": "show"
    },
    {
      "name": "draggable",
      "title": "可拖动",
      "propType": "bool",
      "description": "是否允许拖动浮动面板",
      "defaultValue": true
    },
    {
      "name": "width",
      "title": "宽度",
      "propType": "number",
      "description": "浮动面板的宽度",
      "defaultValue": 520
    },
    {
      "name": "zIndex",
      "title": "层级",
      "propType": "number",
      "description": "浮动面板的层级",
      "defaultValue": 3000
    },
    {
      "name": "defaultPosition",
      "title": "默认位置",
      "propType": {
        "type": "shape",
        "value": [
          {
            "name": "top",
            "title": "顶部(px)",
            "propType": "string"
          },
          {
            "name": "right",
            "title": "右侧(px)",
            "propType": "string"
          },
          {
            "name": "bottom",
            "title": "底部(px)",
            "propType": "string"
          },
          {
            "name": "left",
            "title": "左侧(px)",
            "propType": "string"
          }
        ]
      },
      "description": "浮动面板的默认位置",
      "defaultValue": {
        "top": "50px",
        "right": "50px"
      }
    },
    {
      "name": "cachePosition",
      "title": "缓存位置方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "session",
            "title": "会话",
            "usage": "在当前会话中缓存面板位置，适用于临时保存位置信息的场景"
          },
          {
            "name": "local",
            "title": "永久",
            "usage": "永久缓存面板位置，适用于需要长期保存位置信息的场景"
          }
        ]
      },
      "description": "浮动面板位置的缓存方式",
      "defaultValue": "local"
    },
    {
      "name": "contentClass",
      "title": "内容样式类名",
      "propType": "string",
      "description": "浮动面板内容的样式类名",
      "defaultValue": ""
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "propType": "func",
      "description": "获取浮动面板挂载的容器",
      "defaultValue": "() => document.body"
    }
  ],
  "events": [
    {
      "name": "onUpdate:show",
      "description": "面板显示状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "当前面板的显示状态"
        }
      ]
    },
    {
      "name": "onAfterEnter",
      "description": "面板进入动画完成后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "面板的DOM元素"
        }
      ]
    },
    {
      "name": "onAfterLeave",
      "description": "面板离开动画完成后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "面板的DOM元素"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "浮动面板的内容",
      "required": true
    }
  ]
};
