import type { IComponentMetadata } from '../type';

export const timelineMeta: IComponentMetadata = {
  "title": "时间轴",
  "componentName": "FTimeline",
  "description": "时间轴组件，用于展示一系列按时间顺序排列的事件或步骤。支持自定义标题、辅助说明、图标等，适用于展示项目进度、历史事件等场景。",
  "scenarios": [
    "项目进度展示：使用时间轴展示项目的各个阶段和里程碑，帮助团队成员了解项目进展。",
    "历史事件记录：通过时间轴展示历史事件的详细信息，适用于历史回顾、新闻时间线等场景。",
    "任务管理：使用时间轴展示任务的完成情况，帮助用户跟踪任务进度。",
    "产品发布计划：通过时间轴展示产品发布的时间节点和关键信息，适用于产品管理场景。",
    "学习进度跟踪：使用时间轴展示学习计划和进度，适用于教育类应用。"
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
      "source": "direction",
      "target": [
        "titleWidth"
      ],
      "effect": "当方向为垂直且标题位置为上方、辅助说明位置为不同侧时，标题宽度生效",
      "notes": [
        "仅在特定条件下显示标题宽度配置",
        "确保布局的合理性"
      ]
    }
  ],
  "props": [
    {
      "name": "data",
      "title": "数据",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "title",
              "title": "标题",
              "propType": "string",
              "description": "时间轴节点的标题"
            },
            {
              "name": "desc",
              "title": "辅助说明",
              "propType": "string",
              "description": "时间轴节点的辅助说明"
            },
            {
              "name": "titlePosition",
              "title": "标题位置",
              "propType": {
                "type": "oneOf",
                "items": [
                  {
                    "name": "start",
                    "title": "轴的上方",
                    "usage": "标题显示在时间轴的上方"
                  },
                  {
                    "name": "end",
                    "title": "轴的下方",
                    "usage": "标题显示在时间轴的下方"
                  }
                ]
              },
              "description": "标题相对于时间轴的位置"
            },
            {
              "name": "icon",
              "title": "图标",
              "propType": {
                "type": "oneOf",
                "items": [
                  {
                    "name": "info",
                    "title": "重要",
                    "usage": "表示重要信息"
                  },
                  {
                    "name": "success",
                    "title": "成功",
                    "usage": "表示成功状态"
                  },
                  {
                    "name": "warning",
                    "title": "警告",
                    "usage": "表示警告信息"
                  },
                  {
                    "name": "error",
                    "title": "错误",
                    "usage": "表示错误状态"
                  }
                ]
              },
              "description": "时间轴节点的图标",
              "defaultValue": "info"
            }
          ]
        }
      },
      "description": "时间轴的数据源，包含标题、辅助说明、图标等信息"
    },
    {
      "name": "direction",
      "title": "方向",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "column",
            "title": "垂直向下",
            "usage": "时间轴垂直排列，节点从上到下显示"
          },
          {
            "name": "row",
            "title": "水平向右",
            "usage": "时间轴水平排列，节点从左到右显示"
          },
          {
            "name": "row-reverse",
            "title": "水平向左",
            "usage": "时间轴水平排列，节点从右到左显示"
          }
        ]
      },
      "description": "时间轴的排列方向",
      "defaultValue": "column"
    },
    {
      "name": "titlePosition",
      "title": "标题位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "start",
            "title": "轴的上方",
            "usage": "标题显示在时间轴的上方"
          },
          {
            "name": "end",
            "title": "轴的下方",
            "usage": "标题显示在时间轴的下方"
          },
          {
            "name": "alternate",
            "title": "上下交叉",
            "usage": "标题在时间轴上下交替显示"
          }
        ]
      },
      "description": "标题相对于时间轴的位置",
      "defaultValue": "end"
    },
    {
      "name": "descPosition",
      "title": "辅助说明位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "under",
            "title": "标题下方",
            "usage": "辅助说明显示在标题下方"
          },
          {
            "name": "inline",
            "title": "标题同行",
            "usage": "辅助说明与标题同行显示"
          },
          {
            "name": "opposite",
            "title": "标题不同侧",
            "usage": "辅助说明显示在标题的相反侧"
          }
        ]
      },
      "description": "辅助说明相对于标题的位置",
      "defaultValue": "under"
    },
    {
      "name": "titleClass",
      "title": "标题样式类",
      "propType": "string",
      "description": "自定义标题的样式类",
      "defaultValue": ""
    },
    {
      "name": "titleWidth",
      "title": "标题宽度",
      "propType": "string",
      "description": "标题的宽度，仅在特定条件下生效",
      "defaultValue": "50%"
    },
    {
      "name": "descClass",
      "title": "辅助样式类",
      "propType": "string",
      "description": "自定义辅助说明的样式类",
      "defaultValue": ""
    }
  ],
  "slots": [
    {
      "name": "title",
      "description": "自定义标题内容",
      "required": false,
      "scope": {
        "slotProps": "any"
      }
    },
    {
      "name": "desc",
      "description": "自定义辅助说明内容",
      "required": false,
      "scope": {
        "slotProps": "any"
      }
    },
    {
      "name": "icon",
      "description": "自定义轴点图标",
      "required": false,
      "scope": {
        "slotProps": "any"
      }
    }
  ]
};
