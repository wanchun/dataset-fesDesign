import type { IComponentMetadata } from '../type';

export const configProviderMeta: IComponentMetadata = {
  "title": "全局配置",
  "componentName": "FConfigProvider",
  "description": "全局配置组件，用于统一管理应用的容器挂载、语言设置和主题覆盖等全局配置。",
  "scenarios": [
    "多语言支持：通过locale属性配置应用的语言包，实现国际化支持，适用于多语言场景。",
    "主题定制：通过themeOverrides属性覆盖默认主题样式，实现自定义主题，适用于品牌定制需求。",
    "容器挂载：通过getContainer属性指定组件的挂载容器，适用于弹窗、下拉等需要自定义挂载位置的场景。",
    "全局配置管理：作为应用的根组件，统一管理所有子组件的全局配置，确保配置一致性。",
    "主题切换：动态修改themeOverrides属性，实现应用主题的实时切换，适用于夜间模式等场景。"
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
      "name": "getContainer",
      "title": "挂载容器",
      "propType": "func",
      "description": "指定组件的挂载容器，返回一个DOM节点，用于自定义组件的挂载位置。"
    },
    {
      "name": "locale",
      "title": "语言",
      "propType": "object",
      "description": "配置应用的语言包，支持多语言切换，通常包含翻译文本和语言相关的配置。"
    },
    {
      "name": "themeOverrides",
      "title": "主题覆盖",
      "propType": "object",
      "description": "覆盖默认主题样式，支持自定义主题，通常包含颜色、字体、间距等样式配置。"
    }
  ],
  "events": [],
  "slots": [],
  "exposes": []
};
