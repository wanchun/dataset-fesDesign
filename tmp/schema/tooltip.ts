import type { IComponentMetadata } from '../type';

export const tooltipMeta: IComponentMetadata = {
  "title": "文字提示",
  "componentName": "FTooltip",
  "description": "FTooltip 是一个用于显示提示信息的组件，支持多种触发方式和位置配置，适用于需要额外信息提示的场景。",
  "scenarios": [
    "表单字段提示：在表单输入框旁边使用 FTooltip 提供字段的额外说明，帮助用户正确填写信息。",
    "操作确认提示：在执行删除或其他危险操作前，使用 FTooltip 的确认模式提示用户确认操作，防止误操作。",
    "复杂信息展示：在需要展示复杂信息或额外内容的场景下，使用 FTooltip 的弹出模式，提供详细的信息展示。",
    "按钮提示：在按钮上使用 FTooltip 提供操作说明，帮助用户理解按钮的功能。",
    "图标提示：在图标上使用 FTooltip 提供图标的含义说明，增强用户体验。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FText",
    "FButton"
  ],
  "propRelations": [
    {
      "source": "modelValue",
      "target": "disabled",
      "effect": "当 modelValue 为 true 时，禁用提示框的显示",
      "notes": [
        "用于控制提示框的显示状态"
      ]
    }
  ],
  "props": [
    {
      "name": "modelValue",
      "title": "显示提示",
      "propType": "bool",
      "description": "控制提示框是否显示",
      "defaultValue": false
    },
    {
      "name": "model",
      "title": "弹出模式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "text",
            "title": "文本",
            "usage": "用于简单的文本提示"
          },
          {
            "name": "confirm",
            "title": "确认",
            "usage": "用于需要用户确认的操作提示"
          },
          {
            "name": "popover",
            "title": "弹出",
            "usage": "用于展示复杂信息或自定义内容"
          }
        ]
      },
      "description": "提示框的显示模式",
      "defaultValue": "text"
    },
    {
      "name": "popperClass",
      "title": "弹出框class",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "object",
          "array"
        ]
      },
      "description": "自定义提示框的样式类"
    },
    {
      "name": "title",
      "title": "标题",
      "propType": "string",
      "description": "提示框的标题内容"
    },
    {
      "name": "content",
      "title": "内容",
      "propType": "string",
      "description": "提示框的主要内容"
    },
    {
      "name": "placement",
      "title": "位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "auto",
            "title": "自动",
            "usage": "根据可用空间自动选择最佳位置"
          },
          {
            "name": "top",
            "title": "上",
            "usage": "提示框显示在目标元素的上方"
          },
          {
            "name": "top-start",
            "title": "上-开始",
            "usage": "提示框显示在目标元素的左上角"
          },
          {
            "name": "top-end",
            "title": "上-结束",
            "usage": "提示框显示在目标元素的右上角"
          },
          {
            "name": "bottom",
            "title": "下",
            "usage": "提示框显示在目标元素的下方"
          },
          {
            "name": "bottom-start",
            "title": "下-开始",
            "usage": "提示框显示在目标元素的左下角"
          },
          {
            "name": "bottom-end",
            "title": "下-结束",
            "usage": "提示框显示在目标元素的右下角"
          },
          {
            "name": "right",
            "title": "右",
            "usage": "提示框显示在目标元素的右侧"
          },
          {
            "name": "right-start",
            "title": "右-开始",
            "usage": "提示框显示在目标元素的右上侧"
          },
          {
            "name": "right-end",
            "title": "右-结束",
            "usage": "提示框显示在目标元素的右下侧"
          },
          {
            "name": "left",
            "title": "左",
            "usage": "提示框显示在目标元素的左侧"
          },
          {
            "name": "left-start",
            "title": "左-开始",
            "usage": "提示框显示在目标元素的左上侧"
          },
          {
            "name": "left-end",
            "title": "左-结束",
            "usage": "提示框显示在目标元素的左下侧"
          }
        ]
      },
      "description": "提示框的显示位置",
      "defaultValue": "auto"
    },
    {
      "name": "trigger",
      "title": "触发方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "hover",
            "title": "悬浮",
            "usage": "鼠标悬浮时触发提示框"
          },
          {
            "name": "click",
            "title": "点击",
            "usage": "点击时触发提示框"
          },
          {
            "name": "focus",
            "title": "聚焦",
            "usage": "元素聚焦时触发提示框"
          }
        ]
      },
      "description": "提示框的触发方式",
      "defaultValue": "hover"
    },
    {
      "name": "disabled",
      "title": "禁用",
      "propType": "bool",
      "description": "是否禁用提示框",
      "defaultValue": false
    },
    {
      "name": "offset",
      "title": "偏移量",
      "propType": "number",
      "description": "提示框与目标元素的偏移量",
      "defaultValue": 8
    },
    {
      "name": "showAfter",
      "title": "显示延迟",
      "propType": "number",
      "description": "提示框显示的延迟时间（毫秒）",
      "defaultValue": 0
    },
    {
      "name": "hideAfter",
      "title": "消失延迟",
      "propType": "number",
      "description": "提示框消失的延迟时间（毫秒）",
      "defaultValue": 200
    },
    {
      "name": "arrow",
      "title": "箭头",
      "propType": "bool",
      "description": "是否显示提示框的箭头",
      "defaultValue": true
    },
    {
      "name": "confirmOption",
      "title": "确认模式选项",
      "propType": {
        "type": "exact",
        "value": [
          {
            "name": "okText",
            "title": "确认按钮文字",
            "propType": "string"
          },
          {
            "name": "cancelText",
            "title": "取消按钮文字",
            "propType": "string"
          },
          {
            "name": "icon",
            "title": "图标",
            "propType": "node"
          }
        ]
      },
      "description": "确认模式下的选项配置"
    },
    {
      "name": "getContainer",
      "title": "渲染容器节点",
      "propType": "func",
      "description": "自定义提示框的渲染容器"
    }
  ],
  "events": [
    {
      "name": "onOk",
      "description": "确认按钮点击时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "事件对象"
        }
      ]
    },
    {
      "name": "onCancel",
      "description": "取消按钮点击时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "事件对象"
        }
      ]
    },
    {
      "name": "onClickOutside",
      "description": "点击提示框外部时触发",
      "parameters": []
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "提示框的内容",
      "required": true
    }
  ],
  "exposes": []
};
