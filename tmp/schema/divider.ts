import type { IComponentMetadata } from '../type';

export const dividerMeta: IComponentMetadata = {
  "title": "分割线",
  "componentName": "FDivider",
  "description": "分割线组件用于在页面中创建视觉上的分隔，支持水平和垂直方向，并可添加标题文字。适用于布局分隔、内容分组等场景。",
  "scenarios": [
    "页面布局分隔：在页面不同模块之间使用水平分割线，清晰划分内容区域，提升页面可读性。",
    "垂直分隔：在列表或表格中使用垂直分割线，区分不同列的内容，保持界面整洁。",
    "带标题分隔：在需要强调分隔内容时，使用带标题的分割线，明确分隔的意图。",
    "表单分组：在表单中使用分割线将不同类别的输入项分组，提升表单的条理性。",
    "内容分组：在长文段中使用分割线将不同主题的内容分隔，提高阅读体验。"
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
      "name": "children",
      "title": "标题",
      "propType": "string",
      "description": "分割线中显示的标题文字"
    },
    {
      "name": "vertical",
      "title": "是否垂直方向",
      "propType": "bool",
      "description": "设置分割线是否为垂直方向",
      "defaultValue": false
    },
    {
      "name": "titlePlacement",
      "title": "文字位置",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "center",
            "title": "中间",
            "usage": "标题文字居中显示，适用于常规分隔场景"
          },
          {
            "name": "left",
            "title": "起点",
            "usage": "标题文字靠左显示，适用于左对齐布局"
          },
          {
            "name": "right",
            "title": "终点",
            "usage": "标题文字靠右显示，适用于右对齐布局"
          }
        ]
      },
      "description": "标题文字在分割线上的位置",
      "defaultValue": "center"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "分割线的标题内容",
      "required": false
    }
  ],
  "exposes": []
};
