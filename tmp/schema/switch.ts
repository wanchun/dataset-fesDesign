import type { IComponentMetadata } from '../type';

export const switchMeta: IComponentMetadata = {
  "title": "开关",
  "componentName": "FSwitch",
  "description": "开关组件用于在两种状态之间进行切换，支持布尔值、字符串和数字类型的值，适用于表单中的开关操作和状态切换。",
  "scenarios": [
    "表单状态切换：在表单中使用开关组件来控制某个功能的启用或禁用状态，提供直观的交互体验。",
    "设置页面：在设置页面中使用开关组件来切换不同的配置选项，方便用户进行个性化设置。",
    "权限管理：在权限管理系统中使用开关组件来控制用户权限的开启或关闭，简化权限管理操作。",
    "开关控制：在设备控制面板中使用开关组件来控制设备的开关状态，提供便捷的操作方式。",
    "状态显示：在状态显示面板中使用开关组件来展示某个功能的当前状态，增强信息的可读性。"
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
      "source": "disabled",
      "target": "v-model",
      "effect": "禁用状态下无法切换开关状态",
      "notes": [
        "当开关被禁用时，无法通过交互改变其状态",
        "适用于需要临时禁用开关的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "当前值",
      "propType": {
        "type": "oneOfType",
        "value": [
          "bool",
          "string",
          "number"
        ]
      },
      "description": "开关的当前值，可以是布尔值、字符串或数字类型"
    },
    {
      "name": "activeValue",
      "title": "开启对应值",
      "propType": {
        "type": "oneOfType",
        "value": [
          "bool",
          "string",
          "number"
        ]
      },
      "description": "开关开启时对应的值，可以是布尔值、字符串或数字类型",
      "defaultValue": true
    },
    {
      "name": "inactiveValue",
      "title": "关闭的值",
      "propType": {
        "type": "oneOfType",
        "value": [
          "bool",
          "string",
          "number"
        ]
      },
      "description": "开关关闭时对应的值，可以是布尔值、字符串或数字类型",
      "defaultValue": false
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "propType": "bool",
      "description": "是否禁用开关",
      "defaultValue": false
    },
    {
      "name": "size",
      "title": "大小",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "normal",
            "title": "正常",
            "usage": "常规尺寸，适合大多数场景"
          },
          {
            "name": "small",
            "title": "小",
            "usage": "紧凑场景使用，如表单内联开关"
          }
        ]
      },
      "description": "开关的尺寸大小，影响开关的展示尺寸",
      "defaultValue": "normal"
    },
    {
      "name": "beforeChange",
      "title": "值发生改变之前的事件钩子",
      "propType": "func",
      "description": "在开关值发生改变之前触发的事件钩子，可用于拦截或处理状态切换"
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "开关状态改变时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | [] | object | number | boolean",
          "description": "开关改变后的值"
        }
      ]
    }
  ],
  "slots": [],
  "exposes": []
};
