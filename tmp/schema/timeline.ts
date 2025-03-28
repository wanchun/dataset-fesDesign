import type { IComponentMetadata } from '../type';

export const timelineMeta: IComponentMetadata = {
  "title": "时间轴",
  "componentName": "FTimeline",
  "description": "用于展示时间序列信息的组件，支持垂直和水平布局，可自定义标题位置、辅助说明位置和轴点图标。适用于流程展示、历史记录等场景。",
  "scenarios": [
    "项目流程展示：使用垂直时间轴展示项目各阶段进展，通过不同颜色的轴点图标区分状态。",
    "历史记录：水平时间轴展示历史事件，交替显示标题位置增强可读性。",
    "操作日志：垂直时间轴展示用户操作记录，使用自定义图标和辅助说明增强信息展示。",
    "任务进度：水平时间轴展示任务完成情况，通过success和error图标直观显示状态。",
    "版本更新：垂直时间轴展示产品版本迭代信息，使用alternate布局优化空间利用。"
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
        "titlePosition",
        "descPosition"
      ],
      "effect": "方向变化会影响标题和辅助说明的位置表现",
      "notes": [
        "垂直方向时标题位置为左右关系",
        "水平方向时标题位置为上下关系",
        "水平方向不支持inline辅助说明位置"
      ]
    },
    {
      "source": "titlePosition",
      "target": "titleWidth",
      "effect": "当标题位置为start且辅助说明位置为opposite时，需要设置标题宽度",
      "notes": [
        "仅在垂直方向时生效"
      ]
    }
  ],
  "props": [
    {
      "name": "data",
      "title": "数据",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "title",
              "title": "标题",
              "valueType": "string",
              "example": "2023-01-01"
            },
            {
              "name": "desc",
              "title": "辅助说明",
              "valueType": "string",
              "example": "项目启动"
            },
            {
              "name": "titlePosition",
              "title": "标题位置",
              "valueType": {
                "type": "oneOf",
                "items": [
                  {
                    "value": "start",
                    "title": "轴的上方/左侧",
                    "usage": "标题显示在时间轴的上方或左侧"
                  },
                  {
                    "value": "end",
                    "title": "轴的下方/右侧",
                    "usage": "标题显示在时间轴的下方或右侧"
                  }
                ]
              },
              "example": "end"
            },
            {
              "name": "icon",
              "title": "图标",
              "valueType": {
                "type": "oneOfType",
                "value": [
                  {
                    "type": "oneOf",
                    "items": [
                      {
                        "value": "info",
                        "title": "信息",
                        "usage": "普通信息节点"
                      },
                      {
                        "value": "success",
                        "title": "成功",
                        "usage": "成功状态节点"
                      },
                      {
                        "value": "warning",
                        "title": "警告",
                        "usage": "警告状态节点"
                      },
                      {
                        "value": "error",
                        "title": "错误",
                        "usage": "错误状态节点"
                      }
                    ]
                  },
                  "string",
                  {
                    "type": "func",
                    "returnType": "node"
                  }
                ]
              },
              "example": "success"
            }
          ]
        }
      },
      "description": "时间轴节点数据，每个节点包含标题、描述和图标配置",
      "required": true,
      "example": [
        {
          "title": "2023-01-01",
          "desc": "项目启动",
          "icon": "success"
        }
      ]
    },
    {
      "name": "direction",
      "title": "方向",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "column",
            "title": "垂直向下",
            "usage": "默认方向，时间轴垂直排列"
          },
          {
            "value": "row",
            "title": "水平向右",
            "usage": "时间轴水平向右排列"
          },
          {
            "value": "row-reverse",
            "title": "水平向左",
            "usage": "时间轴水平向左排列"
          }
        ]
      },
      "description": "时间轴的排列方向",
      "defaultValue": "column",
      "example": "column"
    },
    {
      "name": "titlePosition",
      "title": "标题位置",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "start",
            "title": "轴的上方/左侧",
            "usage": "标题显示在时间轴的上方或左侧"
          },
          {
            "value": "end",
            "title": "轴的下方/右侧",
            "usage": "标题显示在时间轴的下方或右侧"
          },
          {
            "value": "alternate",
            "title": "上下/左右交叉",
            "usage": "标题在时间轴两侧交替显示"
          }
        ]
      },
      "description": "标题相对于时间轴的位置",
      "defaultValue": "end",
      "example": "end"
    },
    {
      "name": "descPosition",
      "title": "辅助说明位置",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "under",
            "title": "标题下方",
            "usage": "辅助说明显示在标题下方"
          },
          {
            "value": "inline",
            "title": "标题同行",
            "usage": "辅助说明与标题显示在同一行"
          },
          {
            "value": "opposite",
            "title": "轴的另一侧",
            "usage": "辅助说明显示在时间轴的另一侧"
          }
        ]
      },
      "description": "辅助说明相对于标题的位置",
      "defaultValue": "under",
      "example": "under"
    },
    {
      "name": "titleClass",
      "title": "标题样式类",
      "valueType": "string",
      "description": "自定义标题的CSS类名",
      "example": "custom-title"
    },
    {
      "name": "titleWidth",
      "title": "标题宽度",
      "valueType": "string",
      "description": "当标题位置为start且辅助说明位置为opposite时，设置标题的宽度",
      "defaultValue": "50%",
      "example": "200px"
    },
    {
      "name": "descClass",
      "title": "辅助样式类",
      "valueType": "string",
      "description": "自定义辅助说明的CSS类名",
      "example": "custom-desc"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "title",
      "description": "自定义标题内容",
      "scope": {
        "index": "number",
        "item": "object"
      }
    },
    {
      "name": "desc",
      "description": "自定义辅助说明内容",
      "scope": {
        "index": "number",
        "item": "object"
      }
    },
    {
      "name": "icon",
      "description": "自定义轴点图标",
      "scope": {
        "index": "number",
        "item": "object"
      }
    }
  ],
  "templates": [
    {
      "input": "基础时间轴",
      "output": "<!-- correct -->\n[场景说明] 展示简单的时间轴，包含三个节点\n[代码实现]\n<FTimeline :data=\"[\n  { title: '2023-01-01', desc: '项目启动' },\n  { title: '2023-02-01', desc: '需求分析' },\n  { title: '2023-03-01', desc: '开发阶段' }\n]\" />\n[最佳实践] 适用于简单的流程展示场景"
    },
    {
      "input": "水平时间轴",
      "output": "<!-- correct -->\n[场景说明] 水平排列的时间轴，适合空间有限的场景\n[代码实现]\n<FTimeline \n  direction=\"row\"\n  :data=\"[\n    { title: '阶段1', desc: '已完成', icon: 'success' },\n    { title: '阶段2', desc: '进行中', icon: 'info' },\n    { title: '阶段3', desc: '待开始' }\n  ]\"\n/>\n[最佳实践] 水平时间轴适合展示少量节点，节点过多会导致空间不足"
    },
    {
      "input": "交替标题位置",
      "output": "<!-- correct -->\n[场景说明] 标题在时间轴两侧交替显示，优化空间利用\n[代码实现]\n<FTimeline \n  titlePosition=\"alternate\"\n  :data=\"[\n    { title: '需求评审', desc: '通过' },\n    { title: 'UI设计', desc: '已完成' },\n    { title: '开发', desc: '进行中' }\n  ]\"\n/>\n[最佳实践] 交替布局适合节点较多且需要节省空间的场景"
    },
    {
      "input": "自定义轴点图标",
      "output": "<!-- correct -->\n[场景说明] 使用自定义颜色和图标作为轴点\n[代码实现]\n<FTimeline \n  :data=\"[\n    { title: '登录', icon: '#1890ff' },\n    { title: '验证', icon: '#52c41a' },\n    { title: '完成', icon: '#faad14' }\n  ]\"\n>\n  <template #icon=\"{ item }\">\n    <CustomIcon :color=\"item.icon\" />\n  </template>\n</FTimeline>\n[最佳实践] 自定义图标可以增强视觉表现，但需保持风格一致"
    },
    {
      "input": "错误示例：缺少必要数据",
      "output": "<!-- error -->\n[错误分析] 缺少必需的data属性\n[正确代码]\n<FTimeline :data=\"[]\" />\n[注意事项] data属性是必需的，即使为空数组也需要传递"
    },
    {
      "input": "错误示例：无效的方向值",
      "output": "<!-- error -->\n[错误分析] direction属性值无效\n[正确代码]\n<FTimeline direction=\"column\" :data=\"[...]\" />\n[注意事项] direction必须是'column'、'row'或'row-reverse'之一"
    },
    {
      "input": "边界条件：空数据",
      "output": "<!-- correct -->\n[场景说明] 处理空数据的情况\n[代码实现]\n<FTimeline :data=\"[]\" v-if=\"data.length > 0\" />\n<div v-else>暂无数据</div>\n[最佳实践] 空数据时应提供友好的提示信息"
    },
    {
      "input": "如何让时间轴水平显示？",
      "output": "<!-- correct -->\n[场景说明] 设置水平方向的时间轴\n[代码实现]\n<FTimeline direction=\"row\" :data=\"[...]\" />\n[最佳实践] 水平时间轴适合展示少量节点，节点过多会导致空间不足"
    },
    {
      "input": "怎么自定义时间轴的样式？",
      "output": "<!-- correct -->\n[场景说明] 通过CSS类名自定义时间轴样式\n[代码实现]\n<FTimeline \n  titleClass=\"custom-title\"\n  descClass=\"custom-desc\"\n  :data=\"[...]\"\n/>\n<style>\n.custom-title { color: #1890ff; }\n.custom-desc { font-size: 12px; }\n</style>\n[最佳实践] 自定义样式时应保持与整体设计风格一致"
    }
  ]
};
