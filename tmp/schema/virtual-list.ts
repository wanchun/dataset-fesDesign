import type { IComponentMetadata } from '../type';

export const virtualListMeta: IComponentMetadata = {
  "title": "虚拟列表",
  "componentName": "FVirtualList",
  "description": "虚拟列表组件，用于高效渲染大量数据，通过仅渲染可见区域的内容来优化性能。适用于需要展示大量数据的场景，如表格、列表等。",
  "scenarios": [
    "数据表格：在表格中使用虚拟列表，提升大量数据渲染时的性能，确保用户流畅滚动浏览。",
    "长列表：在长列表中使用虚拟列表，优化渲染性能，避免页面卡顿。",
    "动态数据加载：在动态加载数据的场景中使用虚拟列表，结合分页或懒加载，提升用户体验。",
    "复杂布局：在复杂布局中使用虚拟列表，确保每个子项的高度或宽度动态调整，保持布局一致性。",
    "无限滚动：在无限滚动场景中使用虚拟列表，结合顶部和底部阈值，实现流畅的无限滚动效果。"
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
      "name": "dataSources",
      "title": "数据源",
      "propType": "array",
      "description": "虚拟列表的数据源，通常为一个数组，包含需要渲染的每一项数据。"
    },
    {
      "name": "dataKey",
      "title": "key",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "func"
        ]
      },
      "description": "用于唯一标识每一项的key，可以是字符串或函数。"
    },
    {
      "name": "keeps",
      "title": "真实渲染量",
      "propType": "number",
      "description": "虚拟列表中实际渲染的项数，通常大于可见区域的数量，以确保滚动时的流畅性。",
      "defaultValue": 30
    },
    {
      "name": "estimateSize",
      "title": "每项平均高度或者宽度",
      "propType": "number",
      "description": "虚拟列表中每一项的平均高度或宽度，用于计算滚动位置和渲染范围。",
      "defaultValue": 50
    },
    {
      "name": "start",
      "title": "开始索引",
      "propType": "number",
      "description": "虚拟列表的起始渲染索引，用于控制从哪个位置开始渲染。",
      "defaultValue": 0
    },
    {
      "name": "offset",
      "title": "偏移",
      "propType": "number",
      "description": "虚拟列表的偏移量，用于调整渲染位置的起始点。",
      "defaultValue": 0
    },
    {
      "name": "direction",
      "title": "方向",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "vertical",
            "title": "垂直",
            "usage": "垂直方向的虚拟列表，适用于大多数列表场景。"
          },
          {
            "name": "horizontal",
            "title": "水平",
            "usage": "水平方向的虚拟列表，适用于横向滚动的场景。"
          }
        ]
      },
      "description": "虚拟列表的滚动方向，支持垂直和水平两种方向。",
      "defaultValue": "vertical"
    },
    {
      "name": "wrapTag",
      "title": "包裹元素",
      "propType": "string",
      "description": "虚拟列表的包裹元素标签，默认为div。",
      "defaultValue": "div"
    },
    {
      "name": "wrapClass",
      "title": "包裹元素样式类名",
      "propType": "string",
      "description": "虚拟列表的包裹元素的样式类名，用于自定义样式。"
    },
    {
      "name": "wrapStyle",
      "title": "包裹元素样式",
      "propType": "object",
      "description": "虚拟列表的包裹元素的样式对象，用于内联样式设置。"
    },
    {
      "name": "height",
      "title": "固定高度",
      "propType": "number",
      "description": "虚拟列表的固定高度，用于控制列表的可见区域高度。"
    },
    {
      "name": "maxHeight",
      "title": "最大高度",
      "propType": "number",
      "description": "虚拟列表的最大高度，用于限制列表的可见区域高度。"
    },
    {
      "name": "topThreshold",
      "title": "触发totop阈值",
      "propType": "number",
      "description": "虚拟列表滚动到顶部时触发的阈值，用于控制何时触发onToTop事件。",
      "defaultValue": 0
    },
    {
      "name": "bottomThreshold",
      "title": "触发tobottom阈值",
      "propType": "number",
      "description": "虚拟列表滚动到底部时触发的阈值，用于控制何时触发onToBottom事件。",
      "defaultValue": 0
    }
  ],
  "events": [
    {
      "name": "onScroll",
      "description": "虚拟列表滚动时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "滚动事件对象"
        }
      ]
    },
    {
      "name": "onToTop",
      "description": "虚拟列表滚动到顶部时触发",
      "parameters": []
    },
    {
      "name": "onToBottom",
      "description": "虚拟列表滚动到底部时触发",
      "parameters": []
    },
    {
      "name": "onResized",
      "description": "虚拟列表项大小变化时触发",
      "parameters": [
        {
          "name": "id",
          "type": "string | number",
          "description": "变化项的id"
        },
        {
          "name": "size",
          "type": "number",
          "description": "变化项的新大小"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "虚拟列表的子项插槽，用于自定义每一项的渲染内容。",
      "required": true
    }
  ]
};
