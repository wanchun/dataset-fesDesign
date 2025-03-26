import type { IComponentMetadata } from '../type';

export const componentMetaMeta: IComponentMetadata = {
  "title": "组件库",
  "componentName": "FComponentLibrary",
  "description": "一个全面的前端组件库，包含按钮、表单、布局、导航、数据展示等多种类型的组件，适用于构建复杂的企业级应用。",
  "scenarios": [
    "表单提交：使用按钮、输入框、选择器等组件构建复杂的表单，确保用户输入数据的完整性和准确性。",
    "数据展示：使用表格、卡片、进度条等组件展示数据，提供清晰的数据可视化效果。",
    "导航布局：使用菜单、标签页、面包屑等组件构建应用的导航结构，提升用户体验。",
    "模态交互：使用模态框、抽屉、下拉菜单等组件实现交互式操作，增强应用的交互性。",
    "文件上传：使用文件上传、拖拽上传等组件实现文件的上传功能，简化用户操作流程。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FButton",
    "FInput",
    "FSelect",
    "FTable",
    "FModal",
    "FMenu",
    "FTabs",
    "FUpload",
    "FProgress",
    "FTooltip"
  ],
  "propRelations": [],
  "props": [],
  "events": [],
  "slots": [],
  "exposes": []
};
