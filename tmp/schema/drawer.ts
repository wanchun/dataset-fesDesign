import type { IComponentMetadata } from '../type';

export const drawerMeta: IComponentMetadata = {
  "title": "抽屉",
  "componentName": "FDrawer",
  "description": "抽屉组件用于从屏幕边缘滑出的内容展示，常用于侧边导航、表单填写、设置面板等场景。支持多种位置、尺寸和自定义内容，提供灵活的交互方式。",
  "scenarios": [
    "侧边导航：使用左侧或右侧抽屉展示导航菜单，适用于移动端或需要节省空间的场景。",
    "表单填写：在抽屉中展示复杂的表单内容，保持页面整洁的同时提供充足的填写空间。",
    "设置面板：使用抽屉展示应用设置或配置选项，方便用户快速访问和修改。",
    "信息展示：在抽屉中展示详细信息或帮助文档，避免打断用户当前操作。",
    "操作确认：使用抽屉进行关键操作确认，如删除或提交，确保用户明确操作意图。"
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
      "source": "resizable",
      "target": [
        "resizeMax",
        "resizeMin"
      ],
      "effect": "当可调整尺寸为true时，最大和最小尺寸属性生效",
      "notes": [
        "确保resizable为true时，resizeMax和resizeMin属性有效",
        "用于控制抽屉的可调整尺寸范围"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model:show",
      "title": "显示",
      "propType": "bool",
      "description": "控制抽屉的显示与隐藏"
    },
    {
      "name": "displayDirective",
      "title": "渲染指令",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "show",
            "title": "缓存渲染",
            "usage": "适用于需要保留抽屉状态的场景，如表单填写"
          },
          {
            "name": "if",
            "title": "重置渲染",
            "usage": "适用于每次打开抽屉都需要重新初始化的场景"
          }
        ]
      },
      "description": "控制抽屉的渲染方式，影响性能与状态保留",
      "defaultValue": "show"
    },
    {
      "name": "closable",
      "title": "可关闭",
      "propType": "bool",
      "description": "是否显示关闭按钮",
      "defaultValue": true
    },
    {
      "name": "mask",
      "title": "蒙层",
      "propType": "bool",
      "description": "是否显示蒙层",
      "defaultValue": true
    },
    {
      "name": "maskClosable",
      "title": "点击蒙层关闭",
      "propType": "bool",
      "description": "点击蒙层是否关闭抽屉",
      "defaultValue": true
    },
    {
      "name": "title",
      "title": "标题",
      "propType": "string",
      "description": "抽屉的标题内容"
    },
    {
      "name": "placement",
      "title": "方向",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "top",
            "title": "上",
            "usage": "适用于从顶部滑出的抽屉"
          },
          {
            "name": "bottom",
            "title": "下",
            "usage": "适用于从底部滑出的抽屉"
          },
          {
            "name": "left",
            "title": "左",
            "usage": "适用于从左侧滑出的抽屉"
          },
          {
            "name": "right",
            "title": "右",
            "usage": "适用于从右侧滑出的抽屉"
          }
        ]
      },
      "description": "抽屉的弹出方向",
      "defaultValue": "right"
    },
    {
      "name": "height",
      "title": "高度",
      "propType": "number",
      "description": "抽屉的高度，适用于上下方向的抽屉"
    },
    {
      "name": "width",
      "title": "宽度",
      "propType": "number",
      "description": "抽屉的宽度，适用于左右方向的抽屉"
    },
    {
      "name": "footer",
      "title": "底部",
      "propType": "bool",
      "description": "是否显示底部区域",
      "defaultValue": false
    },
    {
      "name": "okText",
      "title": "确认按钮文字",
      "propType": "string",
      "description": "确认按钮的文本内容",
      "defaultValue": "确定"
    },
    {
      "name": "cancelText",
      "title": "取消按钮文字",
      "propType": "string",
      "description": "取消按钮的文本内容",
      "defaultValue": "取消"
    },
    {
      "name": "contentClass",
      "title": "内容样式名称",
      "propType": "string",
      "description": "自定义抽屉内容的样式类名"
    },
    {
      "name": "resizable",
      "title": "可调整尺寸",
      "propType": "bool",
      "description": "是否允许调整抽屉的尺寸",
      "defaultValue": false
    },
    {
      "name": "resizeMax",
      "title": "最大尺寸",
      "propType": "number",
      "description": "调整抽屉尺寸的最大值",
      "condition": "resizable === true"
    },
    {
      "name": "resizeMin",
      "title": "最小尺寸",
      "propType": "number",
      "description": "调整抽屉尺寸的最小值",
      "condition": "resizable === true"
    }
  ],
  "events": [
    {
      "name": "onUpdate:show",
      "description": "抽屉显示状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "当前的显示状态"
        }
      ]
    },
    {
      "name": "onOk",
      "description": "点击确认按钮时触发",
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
      "description": "点击取消按钮时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "事件对象"
        }
      ]
    },
    {
      "name": "onAfterEnter",
      "description": "抽屉完全打开后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "抽屉的DOM元素"
        }
      ]
    },
    {
      "name": "onAfterLeave",
      "description": "抽屉完全关闭后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "抽屉的DOM元素"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "title",
      "description": "自定义抽屉标题内容",
      "required": false
    },
    {
      "name": "footer",
      "description": "自定义抽屉底部内容",
      "required": false
    }
  ]
};
