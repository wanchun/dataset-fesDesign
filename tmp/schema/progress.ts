import type { IComponentMetadata } from '../type';

export const progressMeta: IComponentMetadata = {
  "title": "进度条",
  "componentName": "FProgress",
  "description": "用于展示任务或操作的进度情况，支持水平和环形两种类型，可根据需求自定义颜色、大小和文本显示。",
  "scenarios": [
    "文件上传：使用水平进度条展示文件上传进度，提供实时反馈，提升用户体验。",
    "任务完成度：在任务管理系统中使用环形进度条展示任务完成百分比，直观显示任务进展。",
    "数据加载：在数据加载过程中使用水平进度条，告知用户当前加载进度，减少等待焦虑。",
    "技能展示：在个人简历或技能展示页面使用环形进度条展示技能掌握程度，增强视觉表现力。",
    "目标达成：在目标管理应用中使用进度条展示目标达成情况，激励用户持续努力。"
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
      "source": "type",
      "target": [
        "showInnerPercent",
        "showOutPercent",
        "height"
      ],
      "effect": "当类型为水平时，显示百分比内显、外显和高度属性",
      "notes": [
        "水平进度条支持显示百分比内显和外显",
        "水平进度条的高度可自定义"
      ]
    },
    {
      "source": "type",
      "target": [
        "width",
        "circleSize",
        "showCircleText"
      ],
      "effect": "当类型为环形时，显示宽度、环形大小和显示文本属性",
      "notes": [
        "环形进度条的宽度和大小可自定义",
        "环形进度条支持显示文本"
      ]
    }
  ],
  "props": [
    {
      "name": "type",
      "title": "类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "line",
            "title": "水平",
            "usage": "适用于水平展示进度，如文件上传、数据加载等场景"
          },
          {
            "name": "circle",
            "title": "环形",
            "usage": "适用于环形展示进度，如技能展示、目标达成等场景"
          }
        ]
      },
      "description": "进度条的类型，影响进度条的展示方式",
      "defaultValue": "line"
    },
    {
      "name": "percent",
      "title": "百分比",
      "propType": "number",
      "description": "进度条的百分比值，范围在0到100之间",
      "required": true
    },
    {
      "name": "color",
      "title": "颜色",
      "propType": "string",
      "description": "进度条的颜色，支持自定义颜色值"
    },
    {
      "name": "showInnerPercent",
      "title": "百分比内显",
      "propType": "bool",
      "description": "是否在水平进度条内部显示百分比",
      "condition": "isLine"
    },
    {
      "name": "showOutPercent",
      "title": "百分比外显",
      "propType": "bool",
      "description": "是否在水平进度条外部显示百分比",
      "condition": "isLine"
    },
    {
      "name": "height",
      "title": "高度",
      "propType": "number",
      "description": "水平进度条的高度",
      "defaultValue": 8,
      "condition": "isLine"
    },
    {
      "name": "width",
      "title": "宽度",
      "propType": "number",
      "description": "环形进度条的宽度",
      "defaultValue": 8,
      "condition": "isCircle"
    },
    {
      "name": "circleSize",
      "title": "环形大小",
      "propType": "number",
      "description": "环形进度条的大小",
      "defaultValue": 160,
      "condition": "isCircle"
    },
    {
      "name": "showCircleText",
      "title": "显示文本",
      "propType": "bool",
      "description": "是否在环形进度条中显示文本",
      "condition": "isCircle"
    },
    {
      "name": "text",
      "title": "自定义文本",
      "propType": "node",
      "description": "自定义进度条的文本内容"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "text",
      "description": "自定义进度条的文本内容",
      "required": false
    }
  ],
  "exposes": []
};
