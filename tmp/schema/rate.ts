import type { IComponentMetadata } from '../type';

export const rateMeta: IComponentMetadata = {
  "title": "评分",
  "componentName": "FRate",
  "description": "评分组件用于用户对内容进行星级评价的场景。支持整星/半星选择、自定义图标、辅助文字展示等功能，适用于商品评价、服务满意度调查等需要量化评分的业务场景。",
  "scenarios": [
    "商品评价：在电商平台商品详情页使用，允许用户选择1-5星进行商品满意度评分",
    "服务评价：在客服系统会话结束后展示评分组件，收集用户服务满意度反馈",
    "内容质量评分：在内容管理系统中用于管理员对文章质量进行星级评定",
    "教学评价：在线教育平台课程结束后，学员对课程内容进行星级评分",
    "满意度调查：在问卷系统中使用带文字描述的评分组件进行多维度的满意度调查"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下必须放在表单项组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "showText",
      "target": "texts",
      "effect": "当showText为true时texts属性生效",
      "notes": [
        "需要保证texts数组长度与count值一致"
      ]
    },
    {
      "source": "allowHalf",
      "target": "colorFilled",
      "effect": "半星模式下自动启用填充效果",
      "notes": [
        "当allowHalf为true时colorFilled默认生效"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
      "propType": "number",
      "description": "双向绑定的当前评分值，支持0到count的数值（包含半星时的0.5增量）"
    },
    {
      "name": "readonly",
      "title": "只读模式",
      "propType": "bool",
      "description": "是否只读不可交互",
      "defaultValue": false
    },
    {
      "name": "allowHalf",
      "title": "半星选择",
      "propType": "bool",
      "description": "是否允许选择半星",
      "defaultValue": false
    },
    {
      "name": "colorFilled",
      "title": "填充效果",
      "propType": "bool",
      "description": "是否使用填充风格图标",
      "defaultValue": true
    },
    {
      "name": "clearable",
      "title": "可清除",
      "propType": "bool",
      "description": "是否允许清除已选值",
      "defaultValue": false
    },
    {
      "name": "size",
      "title": "尺寸规格",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "large",
            "title": "大尺寸",
            "usage": "适用于页面重点区域或需要突出显示的场景"
          },
          {
            "name": "medium",
            "title": "常规尺寸",
            "usage": "默认尺寸，适合大多数使用场景"
          },
          {
            "name": "small",
            "title": "紧凑尺寸",
            "usage": "适用于表格行内等空间有限的场景"
          }
        ]
      },
      "description": "设置评分组件的整体尺寸",
      "defaultValue": "medium"
    },
    {
      "name": "color",
      "title": "图标颜色",
      "propType": "string",
      "description": "设置选中状态的图标颜色，支持HEX颜色值",
      "defaultValue": "#f29360"
    },
    {
      "name": "count",
      "title": "图标数量",
      "propType": "number",
      "description": "设置评分图标的数量",
      "defaultValue": 5
    },
    {
      "name": "showText",
      "title": "显示文字",
      "propType": "bool",
      "description": "是否在右侧显示辅助文字",
      "defaultValue": false
    },
    {
      "name": "texts",
      "title": "辅助文字",
      "propType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "自定义每个分值对应的文字描述，数组长度应与count值一致",
      "defaultValue": []
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "评分值变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "number",
          "description": "当前选择的评分值"
        }
      ]
    },
    {
      "name": "onClear",
      "description": "清除已选值时触发",
      "parameters": []
    }
  ],
  "slots": [
    {
      "name": "content",
      "description": "自定义评分图标内容，可替换默认的星星图标",
      "required": false,
      "scope": {
        "index": "number",
        "value": "number"
      }
    }
  ],
  "exposes": [
    {
      "name": "clear",
      "description": "清除当前选中的值",
      "parameters": []
    }
  ]
};
