import type { IComponentMetadata } from '../type';

export const textHighlightMeta: IComponentMetadata = {
  "title": "文本高亮",
  "componentName": "FTextHighlight",
  "description": "用于在文本中高亮显示指定的关键词或短语。支持自定义高亮样式和严格匹配模式，适用于搜索结果显示、关键词标记等场景。",
  "scenarios": [
    "搜索结果显示：在搜索结果页面中使用，高亮显示用户搜索的关键词，帮助用户快速定位信息。",
    "关键词标记：在文档或文章中使用，标记出特定的关键词或短语，突出显示重要信息。",
    "表单验证提示：在表单验证中使用，高亮显示不符合要求的输入内容，提供直观的反馈。",
    "数据筛选：在数据表格中使用，高亮显示符合筛选条件的数据，便于用户快速识别。",
    "文本分析：在文本分析工具中使用，高亮显示特定的词汇或短语，辅助用户进行文本分析。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FText"
  ],
  "propRelations": [
    {
      "source": "searchValues",
      "target": "markTextStyle",
      "effect": "当搜索内容存在时，应用高亮样式",
      "notes": [
        "高亮样式仅在搜索内容匹配时生效",
        "确保高亮样式与文本内容协调"
      ]
    },
    {
      "source": "strict",
      "target": "searchValues",
      "effect": "严格模式影响搜索内容的匹配规则",
      "notes": [
        "严格模式下区分大小写匹配",
        "非严格模式下不区分大小写匹配"
      ]
    }
  ],
  "props": [
    {
      "name": "searchValues",
      "title": "搜索内容",
      "propType": {
        "type": "arrayOf",
        "value": "string"
      },
      "description": "需要高亮显示的文本内容列表"
    },
    {
      "name": "strict",
      "title": "严格模式",
      "propType": "bool",
      "description": "是否区分大小写匹配",
      "defaultValue": false
    },
    {
      "name": "markTextStyle",
      "title": "高亮样式",
      "propType": "object",
      "description": "高亮文本的样式配置",
      "defaultValue": {}
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "需要高亮的文本内容",
      "required": true
    }
  ],
  "exposes": []
};
