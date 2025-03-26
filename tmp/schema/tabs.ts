import type { IComponentMetadata } from '../type';

export const tabsMeta: IComponentMetadata = {
  "title": "Tab页",
  "componentName": "FTabs",
  "description": "用于组织和切换不同内容区域的导航组件，支持多种样式和布局方式，适用于内容分类展示、功能模块切换等场景。",
  "scenarios": [
    "内容分类展示：使用line类型的Tab页，将不同类别的内容组织在各自的Tab页中，提升内容的可读性和可访问性。",
    "功能模块切换：使用card类型的Tab页，将不同功能模块放置在各自的Tab页中，方便用户快速切换和操作。",
    "垂直布局：将Tab页位置设置为left或right，适用于侧边栏导航或内容区域较宽的场景。",
    "动态Tab页：通过配置panes属性动态生成Tab页，适用于需要根据数据动态生成Tab页的场景。",
    "可关闭Tab页：启用closable属性，允许用户关闭不需要的Tab页，适用于多标签管理的场景。"
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
      "name": "v-model",
      "title": "激活面板",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "当前激活的Tab页的key值，支持字符串或数字类型。"
    },
    {
      "name": "panes",
      "title": "页签配置",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "name",
              "title": "名称",
              "propType": "string"
            },
            {
              "name": "value",
              "title": "值",
              "propType": "string"
            },
            {
              "name": "disabled",
              "title": "禁用",
              "propType": "bool"
            },
            {
              "name": "closable",
              "title": "关闭按钮",
              "propType": "bool"
            },
            {
              "name": "displayDirective",
              "title": "关闭按钮",
              "propType": {
                "type": "oneOf",
                "items": [
                  {
                    "name": "if",
                    "title": "切换重新加载",
                    "usage": "每次切换Tab页时重新加载内容"
                  },
                  {
                    "name": "show",
                    "title": "默认加载",
                    "usage": "默认加载所有Tab页的内容"
                  },
                  {
                    "name": "show:lazy",
                    "title": "显示时才加载",
                    "usage": "仅在Tab页显示时加载内容"
                  }
                ]
              }
            },
            {
              "name": "render",
              "title": "渲染内容",
              "propType": "node"
            },
            {
              "name": "renderTab",
              "title": "渲染页签",
              "propType": "node"
            }
          ]
        }
      },
      "description": "Tab页的配置项，包括名称、值、禁用状态、关闭按钮、内容渲染等。"
    },
    {
      "name": "position",
      "title": "页签位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "left",
            "title": "左",
            "usage": "页签位于左侧，适用于侧边栏导航"
          },
          {
            "name": "top",
            "title": "上",
            "usage": "页签位于顶部，适用于常规布局"
          },
          {
            "name": "right",
            "title": "右",
            "usage": "页签位于右侧，适用于侧边栏导航"
          },
          {
            "name": "bottom",
            "title": "下",
            "usage": "页签位于底部，适用于特殊布局"
          }
        ]
      },
      "description": "Tab页的位置，支持左、上、右、下四个方向。",
      "defaultValue": "top"
    },
    {
      "name": "type",
      "title": "页签类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "line",
            "title": "线型",
            "usage": "适用于常规的Tab页样式"
          },
          {
            "name": "card",
            "title": "卡片样式",
            "usage": "适用于需要突出显示的Tab页样式"
          }
        ]
      },
      "description": "Tab页的样式类型，支持线型和卡片样式。",
      "defaultValue": "line"
    },
    {
      "name": "closable",
      "title": "可关闭",
      "propType": "bool",
      "description": "是否显示关闭按钮，允许用户关闭Tab页。",
      "defaultValue": false
    },
    {
      "name": "closeMode",
      "title": "关闭按钮显示类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "visible",
            "title": "一直显示",
            "usage": "关闭按钮始终显示"
          },
          {
            "name": "hover",
            "title": "悬浮显示",
            "usage": "关闭按钮仅在悬浮时显示"
          }
        ]
      },
      "description": "关闭按钮的显示方式，支持一直显示和悬浮显示。",
      "defaultValue": "visible"
    },
    {
      "name": "transition",
      "title": "动画",
      "propType": "bool",
      "description": "是否启用切换动画，提升用户体验。",
      "defaultValue": true
    },
    {
      "name": "prefix",
      "title": "前置内容",
      "propType": "node",
      "description": "Tab页前置内容，可以是图标、按钮等元素。"
    },
    {
      "name": "suffix",
      "title": "后置内容",
      "propType": "node",
      "description": "Tab页后置内容，可以是图标、按钮等元素。"
    }
  ],
  "events": [
    {
      "name": "onClose",
      "description": "关闭Tab页时触发",
      "parameters": [
        {
          "name": "key",
          "type": "string | number",
          "description": "被关闭的Tab页的key值"
        }
      ]
    },
    {
      "name": "onChange",
      "description": "切换Tab页时触发",
      "parameters": [
        {
          "name": "key",
          "type": "string | number",
          "description": "当前激活的Tab页的key值"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "prefix",
      "description": "Tab页前置内容，可以是图标、按钮等元素。",
      "required": false
    },
    {
      "name": "suffix",
      "description": "Tab页后置内容，可以是图标、按钮等元素。",
      "required": false
    }
  ]
};
