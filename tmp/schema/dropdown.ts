import type { IComponentMetadata } from '../type';

export const dropdownMeta: IComponentMetadata = {
  "componentName": "FDropdown",
  "title": "下拉菜单",
  "description": "交互式下拉菜单组件，支持多种触发方式和位置配置，适用于导航选择、操作菜单、表单筛选等场景。提供选项禁用、图标嵌入、滚动监听等高级功能。",
  "scenarios": [
    "导航菜单：在页面顶部栏使用click触发方式，搭配图标选项实现多级导航菜单，需注意移动端适配问题",
    "表单选择：在表单中使用focus触发方式实现输入联想功能，需配置异步加载选项和防抖处理",
    "操作菜单：在表格行操作列使用contextmenu触发方式实现右键菜单，需处理菜单层级与z-index关系",
    "权限控制：通过disabled属性动态禁用无权限选项，需配合后端权限数据实时更新选项状态",
    "动态加载：结合滚动事件实现无限滚动菜单，需注意性能优化和加载状态提示"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FNav",
        "description": "导航栏场景下必须放在导航容器内"
      },
      {
        "parent": "FFormItem",
        "description": "表单场景下需要配合校验规则使用"
      }
    ]
  },
  "children": [
    "FButton",
    "FIcon"
  ],
  "propRelations": [
    {
      "source": "disabled",
      "target": [
        "trigger",
        "onClick"
      ],
      "effect": "禁用状态下自动关闭所有交互事件"
    },
    {
      "source": "arrow",
      "target": "offset",
      "effect": "显示箭头时自动增加8px偏移量"
    }
  ],
  "props": [
    {
      "name": "options",
      "title": "菜单选项",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "exact",
          "value": [
            {
              "name": "value",
              "title": "选项值",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "number"
                ]
              }
            },
            {
              "name": "label",
              "title": "显示文本",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "func"
                ]
              }
            },
            {
              "name": "disabled",
              "title": "禁用状态",
              "propType": "bool"
            },
            {
              "name": "icon",
              "title": "图标组件",
              "propType": "func"
            }
          ]
        }
      },
      "description": "菜单项数据结构，支持函数式label和自定义图标",
      "defaultValue": []
    },
    {
      "name": "trigger",
      "title": "触发方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "hover",
            "title": "悬停",
            "usage": "适合导航菜单等需要快速访问的场景"
          },
          {
            "name": "click",
            "title": "点击",
            "usage": "表单选择等需要明确操作意图的场景"
          },
          {
            "name": "focus",
            "title": "聚焦",
            "usage": "输入框联想等需要键盘交互的场景"
          },
          {
            "name": "contextmenu",
            "title": "右键",
            "usage": "表格行操作等需要二次确认的场景"
          }
        ]
      },
      "defaultValue": "click"
    },
    {
      "name": "placement",
      "title": "弹出位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "top",
            "title": "上中",
            "usage": "下拉内容向上展开"
          },
          {
            "name": "top-start",
            "title": "上左",
            "usage": "对齐触发元素左上角"
          },
          {
            "name": "top-end",
            "title": "上右",
            "usage": "对齐触发元素右上角"
          },
          {
            "name": "bottom",
            "title": "下中",
            "usage": "默认展开位置"
          },
          {
            "name": "bottom-start",
            "title": "下左",
            "usage": "适合左侧对齐布局"
          },
          {
            "name": "bottom-end",
            "title": "下右",
            "usage": "适合右侧对齐布局"
          },
          {
            "name": "left",
            "title": "左中",
            "usage": "横向导航菜单展开"
          },
          {
            "name": "left-start",
            "title": "左上",
            "usage": "多级菜单嵌套场景"
          },
          {
            "name": "left-end",
            "title": "左下",
            "usage": "底部对齐的侧边菜单"
          },
          {
            "name": "right",
            "title": "右中",
            "usage": "横向导航菜单反向展开"
          },
          {
            "name": "right-start",
            "title": "右上",
            "usage": "带图标的下拉菜单"
          },
          {
            "name": "right-end",
            "title": "右下",
            "usage": "底部对齐的右侧菜单"
          }
        ]
      },
      "defaultValue": "bottom"
    },
    {
      "name": "offset",
      "title": "弹出偏移",
      "propType": "number",
      "description": "菜单与触发器的间距（像素），开启箭头时自动增加8px",
      "defaultValue": 6
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "propType": "bool",
      "description": "全局禁用下拉功能，优先级高于选项级禁用",
      "defaultValue": false
    },
    {
      "name": "arrow",
      "title": "显示箭头",
      "propType": "bool",
      "description": "是否显示定位箭头，开启时会自动调整偏移量",
      "defaultValue": false
    }
  ],
  "events": [
    {
      "name": "onClick",
      "description": "点击菜单项时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number",
          "description": "选中项的值"
        }
      ]
    },
    {
      "name": "onVisibleChange",
      "description": "菜单显隐状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "当前可见状态"
        }
      ]
    },
    {
      "name": "onScroll",
      "description": "菜单容器滚动时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生滚动事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "触发元素插槽，通常放置按钮或图标",
      "required": true
    }
  ],
  "exposes": [
    {
      "name": "toggleMenu",
      "description": "手动切换菜单显示状态",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "可选参数强制指定状态"
        }
      ]
    }
  ]
};
