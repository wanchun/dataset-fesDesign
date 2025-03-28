import type { IComponentMetadata } from '../type';

export const virtualListMeta: IComponentMetadata = {
  "title": "虚拟列表",
  "componentName": "FVirtualList",
  "description": "高性能虚拟滚动列表组件，用于处理大数据量列表渲染场景。通过动态渲染可视区域内的元素，大幅提升渲染性能和用户体验。支持垂直和水平滚动、自定义滚动条、动态尺寸计算等功能。",
  "scenarios": [
    "大数据表格：处理数千行数据的表格渲染，保持流畅滚动体验",
    "聊天记录：展示大量聊天消息时保持高性能渲染",
    "商品列表：电商平台展示海量商品时优化性能",
    "日志查看器：处理大量日志数据的实时滚动展示",
    "时间轴：展示大量时间节点信息时保持流畅交互"
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
      "source": "height",
      "target": "maxHeight",
      "effect": "当height设置时maxHeight无效",
      "notes": [
        "高度设置优先级高于最大高度",
        "适用于需要精确控制高度的场景"
      ]
    },
    {
      "source": "native",
      "target": [
        "always",
        "minSize",
        "shadow"
      ],
      "effect": "使用原生滚动条时，自定义滚动条相关属性无效",
      "notes": [
        "原生滚动条不支持自定义样式",
        "适用于需要保持浏览器默认滚动行为的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "dataSources",
      "title": "数据源",
      "valueType": "array",
      "description": "列表数据源数组，每个元素必须包含唯一标识字段",
      "required": true,
      "example": "[{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}]"
    },
    {
      "name": "dataKey",
      "title": "数据键",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "func",
            "parameters": [
              {
                "name": "data",
                "type": "object",
                "description": "数据项对象"
              }
            ],
            "returnType": "string"
          }
        ]
      },
      "description": "从数据源中获取唯一键的方式，可以是字段名或函数",
      "required": true,
      "example": "id"
    },
    {
      "name": "keeps",
      "title": "渲染数量",
      "valueType": "number",
      "description": "保持渲染的DOM节点数量，影响滚动性能和内存占用",
      "defaultValue": 30,
      "example": 50
    },
    {
      "name": "estimateSize",
      "title": "预估尺寸",
      "valueType": "number",
      "description": "列表项预估尺寸，用于计算滚动条位置",
      "defaultValue": 50,
      "example": 80
    },
    {
      "name": "start",
      "title": "起始索引",
      "valueType": "number",
      "description": "初始滚动位置的起始索引",
      "defaultValue": 0,
      "example": 10
    },
    {
      "name": "offset",
      "title": "起始偏移",
      "valueType": "number",
      "description": "初始滚动位置的偏移量",
      "defaultValue": 0,
      "example": 100
    },
    {
      "name": "direction",
      "title": "滚动方向",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "vertical",
            "title": "垂直",
            "usage": "常规垂直滚动列表"
          },
          {
            "value": "horizontal",
            "title": "水平",
            "usage": "横向滚动列表"
          }
        ]
      },
      "description": "列表滚动方向",
      "defaultValue": "vertical",
      "example": "vertical"
    },
    {
      "name": "wrapTag",
      "title": "容器标签",
      "valueType": "string",
      "description": "列表容器的HTML标签名",
      "defaultValue": "div",
      "example": "ul"
    },
    {
      "name": "wrapClass",
      "title": "容器类名",
      "valueType": "string",
      "description": "列表容器的CSS类名",
      "example": "custom-list"
    },
    {
      "name": "wrapStyle",
      "title": "容器样式",
      "valueType": "object",
      "description": "列表容器的内联样式",
      "defaultValue": {},
      "example": "{ backgroundColor: '#f5f5f5' }"
    },
    {
      "name": "height",
      "title": "固定高度",
      "valueType": "number",
      "description": "列表的固定高度，优先级高于maxHeight",
      "example": 500
    },
    {
      "name": "maxHeight",
      "title": "最大高度",
      "valueType": "number",
      "description": "列表的最大高度，当height未设置时生效",
      "example": 800
    },
    {
      "name": "topThreshold",
      "title": "顶部阈值",
      "valueType": "number",
      "description": "触发toTop事件的滚动距离阈值",
      "defaultValue": 0,
      "example": 20
    },
    {
      "name": "bottomThreshold",
      "title": "底部阈值",
      "valueType": "number",
      "description": "触发toBottom事件的滚动距离阈值",
      "defaultValue": 0,
      "example": 20
    },
    {
      "name": "observeResize",
      "title": "观察尺寸变化",
      "valueType": "bool",
      "description": "是否监听列表项尺寸变化",
      "defaultValue": true,
      "example": false
    },
    {
      "name": "native",
      "title": "原生滚动",
      "valueType": "bool",
      "description": "是否使用原生滚动条",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "always",
      "title": "常显滚动条",
      "valueType": "bool",
      "description": "是否始终显示滚动条",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "minSize",
      "title": "滑块最小尺寸",
      "valueType": "number",
      "description": "滚动条滑块的最小尺寸",
      "defaultValue": 20,
      "example": 10
    },
    {
      "name": "shadow",
      "title": "滚动阴影",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "bool",
          {
            "type": "shape",
            "value": [
              {
                "name": "x",
                "title": "水平阴影",
                "valueType": "bool",
                "example": true
              },
              {
                "name": "y",
                "title": "垂直阴影",
                "valueType": "bool",
                "example": true
              }
            ]
          }
        ]
      },
      "description": "是否显示待滚动区域的阴影",
      "defaultValue": false,
      "example": true
    }
  ],
  "events": [
    {
      "name": "scroll",
      "description": "列表滚动时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "滚动事件对象"
        },
        {
          "name": "range",
          "type": "object",
          "description": "当前可视范围信息"
        }
      ]
    },
    {
      "name": "toTop",
      "description": "滚动到顶部时触发",
      "parameters": []
    },
    {
      "name": "toBottom",
      "description": "滚动到底部时触发",
      "parameters": []
    },
    {
      "name": "resized",
      "description": "列表项尺寸变化时触发",
      "parameters": [
        {
          "name": "id",
          "type": "string|number",
          "description": "变化项的唯一标识"
        },
        {
          "name": "size",
          "type": "number",
          "description": "变化后的尺寸"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "列表项渲染插槽",
      "required": true,
      "scope": {
        "source": "object",
        "description": "当前索引",
        "index": "number"
      }
    }
  ],
  "exposes": [
    {
      "name": "reset",
      "description": "重置列表滚动状态",
      "parameters": []
    },
    {
      "name": "scrollToBottom",
      "description": "滚动到底部",
      "parameters": []
    },
    {
      "name": "scrollToIndex",
      "description": "滚动到指定索引",
      "parameters": [
        {
          "name": "index",
          "type": "number",
          "description": "目标索引位置"
        }
      ]
    },
    {
      "name": "scrollToOffset",
      "description": "滚动到指定偏移量",
      "parameters": [
        {
          "name": "offset",
          "type": "number",
          "description": "目标偏移量"
        }
      ]
    },
    {
      "name": "getSize",
      "description": "获取指定项的尺寸",
      "parameters": [
        {
          "name": "id",
          "type": "string|number",
          "description": "数据项的唯一标识"
        }
      ],
      "returnType": "number"
    },
    {
      "name": "getSizes",
      "description": "获取所有已渲染项的尺寸",
      "parameters": [],
      "returnType": "number"
    },
    {
      "name": "getOffset",
      "description": "获取当前滚动偏移量",
      "parameters": [],
      "returnType": "number"
    },
    {
      "name": "getClientSize",
      "description": "获取可视区域尺寸",
      "parameters": [],
      "returnType": "number"
    },
    {
      "name": "getScrollSize",
      "description": "获取滚动区域总尺寸",
      "parameters": [],
      "returnType": "number"
    }
  ],
  "templates": [
    {
      "input": "基础垂直虚拟列表",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"400\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"item\">{{ source.name }}</div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：基础垂直虚拟列表实现，适合展示大量数据 -->\n<!-- 最佳实践：设置合理的estimateSize和height以获得最佳性能 -->"
    },
    {
      "input": "水平滚动虚拟列表",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"120\"\n  direction=\"horizontal\"\n  :height=\"150\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"horizontal-item\">{{ source.name }}</div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：水平滚动虚拟列表，适合横向展示大量数据 -->\n<!-- 最佳实践：设置direction为horizontal，并调整estimateSize为平均宽度 -->"
    },
    {
      "input": "动态高度虚拟列表",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n  @resized=\"handleResized\"\n>\n  <template #default=\"{ source }\">\n    <div \n      class=\"dynamic-item\" \n      :style=\"{ height: source.height + 'px' }\"\n    >\n      {{ source.content }}\n    </div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：动态高度虚拟列表，每项高度可能不同 -->\n<!-- 最佳实践：监听resized事件更新尺寸缓存，设置合理的estimateSize -->"
    },
    {
      "input": "固定高度和最大高度同时设置",
      "output": "<!-- error -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n  :maxHeight=\"600\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 错误分析：height和maxHeight同时设置时，maxHeight不会生效 -->\n<!-- 正确代码：根据需求选择使用height或maxHeight -->\n<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 注意事项：height优先级高于maxHeight，两者同时设置时maxHeight无效 -->"
    },
    {
      "input": "缺少dataKey属性",
      "output": "<!-- error -->\n<FVirtualList\n  :dataSources=\"items\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 错误分析：缺少必需的dataKey属性，虚拟列表无法正确识别和定位列表项 -->\n<!-- 正确代码：必须提供dataKey属性 -->\n<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 注意事项：dataKey是必需属性，可以是字段名或函数 -->"
    },
    {
      "input": "错误的数据源格式",
      "output": "<!-- error -->\n<FVirtualList\n  :dataSources=\"[1, 2, 3]\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 错误分析：数据源必须是对象数组，且每个对象必须包含dataKey指定的字段 -->\n<!-- 正确代码：提供正确的数据源格式 -->\n<!-- correct -->\n<FVirtualList\n  :dataSources=\"[{id: 1}, {id: 2}, {id: 3}]\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <!-- ... -->\n</FVirtualList>\n\n<!-- 注意事项：数据源必须是对象数组，且每个对象必须包含唯一标识字段 -->"
    },
    {
      "input": "空状态虚拟列表",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"[]\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"500\"\n>\n  <template #default>\n    <div class=\"empty-state\">暂无数据</div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：空状态虚拟列表处理 -->\n<!-- 最佳实践：提供友好的空状态提示，保持组件结构一致 -->"
    },
    {
      "input": "极大数据量虚拟列表",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"largeDataSet\"\n  dataKey=\"id\"\n  :estimateSize=\"50\"\n  :height=\"600\"\n  :keeps=\"100\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"compact-item\">{{ source.id }}</div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：处理极大数据量(10万+)的虚拟列表 -->\n<!-- 最佳实践：适当增加keeps值，优化estimateSize精度，使用简单DOM结构 -->"
    },
    {
      "input": "虚拟列表怎么用？",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"400\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"item\">{{ source.name }}</div>\n  </template>\n</FVirtualList>\n\n<!-- 场景说明：虚拟列表基础用法 -->\n<!-- 最佳实践：必须提供dataSources和dataKey，设置合理的estimateSize和height -->"
    },
    {
      "input": "虚拟列表滚动不流畅",
      "output": "<!-- error -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :height=\"400\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"complex-item\">\n      <!-- 复杂DOM结构 -->\n    </div>\n  </template>\n</FVirtualList>\n\n<!-- 错误分析：缺少estimateSize或DOM结构过于复杂导致性能问题 -->\n<!-- 正确代码：优化DOM结构并设置estimateSize -->\n<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"400\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"simple-item\">{{ source.name }}</div>\n  </template>\n</FVirtualList>\n\n<!-- 注意事项：保持列表项DOM结构简单，设置准确的estimateSize -->"
    },
    {
      "input": "虚拟列表样式覆盖",
      "output": "<!-- correct -->\n<FVirtualList\n  :dataSources=\"items\"\n  dataKey=\"id\"\n  :estimateSize=\"80\"\n  :height=\"400\"\n  wrapClass=\"custom-list\"\n  :wrapStyle=\"{ backgroundColor: '#f8f8f8' }\"\n>\n  <template #default=\"{ source }\">\n    <div class=\"custom-item\">{{ source.name }}</div>\n  </template>\n</FVirtualList>\n\n<style>\n.custom-list {\n  border: 1px solid #eee;\n}\n.custom-item {\n  padding: 12px;\n  border-bottom: 1px solid #eee;\n}\n</style>\n\n<!-- 场景说明：自定义虚拟列表样式 -->\n<!-- 最佳实践：使用wrapClass和wrapStyle自定义容器样式，避免影响内部滚动逻辑 -->"
    },
    {
      "input": "虚拟列表与分页组件组合",
      "output": "<!-- correct -->\n<template>\n  <FVirtualList\n    ref=\"virtualList\"\n    :dataSources=\"pagedData\"\n    dataKey=\"id\"\n    :estimateSize=\"80\"\n    :height=\"500\"\n  >\n    <template #default=\"{ source }\">\n      <div class=\"item\">{{ source.name }}</div>\n    </template>\n  </FVirtualList>\n  \n  <FPagination\n    :total=\"totalItems\"\n    :pageSize=\"pageSize\"\n    @change=\"handlePageChange\"\n  />\n</template>\n\n<!-- 场景说明：虚拟列表与分页组件组合使用 -->\n<!-- 最佳实践：分页变化时重置虚拟列表滚动位置，保持良好用户体验 -->"
    },
    {
      "input": "虚拟列表与搜索功能组合",
      "output": "<!-- correct -->\n<template>\n  <FInputSearch\n    v-model=\"searchText\"\n    @search=\"handleSearch\"\n  />\n  \n  <FVirtualList\n    :dataSources=\"filteredData\"\n    dataKey=\"id\"\n    :estimateSize=\"80\"\n    :height=\"500\"\n    ref=\"virtualList\"\n  >\n    <template #default=\"{ source }\">\n      <div class=\"item\">{{ source.name }}</div>\n    </template>\n  </FVirtualList>\n</template>\n\n<!-- 场景说明：虚拟列表与搜索功能组合 -->\n<!-- 最佳实践：搜索后自动滚动到顶部，优化搜索体验 -->"
    }
  ]
};
