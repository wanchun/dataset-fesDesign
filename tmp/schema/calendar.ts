import type { IComponentMetadata } from '../type';

export const calendarMeta: IComponentMetadata = {
  "title": "日历",
  "componentName": "FCalendar",
  "description": "日历组件用于展示日期信息，支持日期和月份两种显示模式，提供快捷日期选项和自定义单元格内容的功能。适用于日程管理、日期选择等场景。",
  "scenarios": [
    "日程管理：在日程管理系统中使用日历组件展示用户的日程安排，支持点击单元格查看详细信息。",
    "日期选择：在表单中使用日历组件选择日期，提供快捷选项如“今天”等，提升用户体验。",
    "数据展示：在数据可视化系统中使用日历组件展示时间序列数据，通过自定义单元格内容突出关键信息。",
    "计划安排：在项目管理工具中使用日历组件展示项目计划，支持按月或按日查看任务进度。",
    "活动日历：在活动管理系统中使用日历组件展示活动安排，支持快速跳转到特定日期查看活动详情。"
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
      "source": "mode",
      "target": "onCellClick",
      "effect": "切换显示模式时，onCellClick事件的mode参数会相应变化",
      "notes": [
        "当mode为'date'时，onCellClick事件的mode参数为'date'",
        "当mode为'month'时，onCellClick事件的mode参数为'month'"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "选中日期",
      "propType": "number",
      "description": "当前选中的日期，以时间戳形式表示"
    },
    {
      "name": "v-model:mode",
      "title": "显示模式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "date",
            "title": "日期",
            "usage": "按日显示日历，适用于需要查看具体日期的场景"
          },
          {
            "name": "month",
            "title": "月份",
            "usage": "按月显示日历，适用于需要查看整体月份安排的场景"
          }
        ]
      },
      "description": "日历的显示模式，支持日期和月份两种模式",
      "defaultValue": "date"
    },
    {
      "name": "splitLine",
      "title": "展示分割线",
      "propType": "bool",
      "description": "是否显示单元格之间的分割线",
      "defaultValue": true
    },
    {
      "name": "height",
      "title": "高度",
      "propType": {
        "type": "oneOfType",
        "value": [
          "number",
          "string"
        ]
      },
      "description": "日历的高度，可以是数字或字符串形式"
    },
    {
      "name": "shortcuts",
      "title": "快捷选项",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "label",
              "title": "标签",
              "propType": "string"
            },
            {
              "name": "time",
              "title": "时间",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "number",
                  "func"
                ]
              }
            }
          ]
        }
      },
      "description": "添加快捷日期选项，如“今天”，支持静态时间戳或动态计算时间"
    },
    {
      "name": "cellMain",
      "title": "单元格主要内容",
      "propType": "node",
      "description": "自定义单元格的主要内容，支持插入文本、图标等元素",
      "defaultValue": []
    },
    {
      "name": "cellAppendant",
      "title": "单元格附加内容",
      "propType": "node",
      "description": "自定义单元格的附加内容，通常用于展示次要信息",
      "defaultValue": []
    }
  ],
  "events": [
    {
      "name": "onCellClick",
      "description": "点击单元格时触发",
      "parameters": [
        {
          "name": "date",
          "type": "number",
          "description": "点击的日期，以时间戳形式表示"
        },
        {
          "name": "mode",
          "type": "string",
          "description": "当前的显示模式，值为'date'或'month'"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "cellMain",
      "description": "单元格的主要内容，支持自定义内容",
      "required": false
    },
    {
      "name": "cellAppendant",
      "description": "单元格的附加内容，通常用于展示次要信息",
      "required": false
    }
  ],
  "exposes": []
};
