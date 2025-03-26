import type { IComponentMetadata } from '../type';

export const ellipsisMeta: IComponentMetadata = {
  "title": "文本省略",
  "componentName": "FEllipsis",
  "description": "文本省略组件，用于在有限的空间内显示长文本，并通过省略号表示被截断的内容。支持单行和多行省略，并可通过工具提示展示完整内容。",
  "scenarios": [
    "表格单元格：在表格的单元格中使用单行省略，确保内容在有限的空间内显示完整，避免表格变形。",
    "卡片标题：在卡片的标题中使用多行省略，确保标题在有限的空间内显示完整，同时保持卡片的整洁。",
    "导航菜单：在导航菜单的项中使用单行省略，确保菜单项在有限的空间内显示完整，避免菜单项过长。",
    "列表项：在列表的项中使用多行省略，确保列表项在有限的空间内显示完整，同时保持列表的整洁。",
    "工具提示：在需要展示完整内容的地方使用工具提示，确保用户可以通过悬停查看完整内容。"
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
      "name": "content",
      "title": "文本内容",
      "propType": "string",
      "description": "需要显示的文本内容"
    },
    {
      "name": "tooltip",
      "title": "弹出内容",
      "propType": "bool",
      "description": "是否显示工具提示，用于展示完整内容",
      "defaultValue": false
    },
    {
      "name": "line",
      "title": "多行省略",
      "propType": "number",
      "description": "设置省略的行数，默认为1行",
      "defaultValue": 1
    },
    {
      "name": "tooltipSlot",
      "title": "自定义弹出内容",
      "propType": {
        "type": "shape",
        "value": [
          {
            "name": "type",
            "title": "类型",
            "propType": "string"
          },
          {
            "name": "title",
            "title": "标题",
            "propType": "string"
          },
          {
            "name": "name",
            "title": "名称",
            "propType": "string"
          },
          {
            "name": "params",
            "title": "参数",
            "propType": {
              "type": "arrayOf",
              "value": "string"
            }
          },
          {
            "name": "value",
            "title": "值",
            "propType": {
              "type": "arrayOf",
              "value": "string"
            }
          }
        ]
      },
      "description": "自定义工具提示的内容",
      "defaultValue": {
        "type": "JSSlot",
        "title": "自定义弹出内容",
        "name": "tooltip",
        "params": [],
        "value": []
      }
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "tooltip",
      "description": "自定义工具提示的内容",
      "required": false
    }
  ],
  "exposes": []
};
