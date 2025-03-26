import type { IComponentMetadata } from '../type';

export const tableMeta: IComponentMetadata = {
  "title": "表格",
  "componentName": "FTable",
  "description": "FTable 是一个功能强大的表格组件，支持数据展示、排序、筛选、拖拽、虚拟滚动等多种功能。适用于需要展示大量结构化数据的场景，如数据管理、报表展示等。",
  "scenarios": [
    "数据展示：用于展示结构化数据，支持自定义列配置和样式，适用于数据管理后台、报表系统等场景。",
    "数据排序：通过配置排序函数或使用内置排序功能，实现表格数据的升序或降序排列，适用于需要动态排序的数据展示场景。",
    "数据筛选：通过自定义列配置实现数据筛选功能，适用于需要过滤特定数据的场景。",
    "拖拽排序：通过启用拖拽功能，允许用户通过拖拽行或列来重新排序数据，适用于需要手动调整数据顺序的场景。",
    "虚拟滚动：通过启用虚拟滚动功能，优化大数据量下的表格渲染性能，适用于需要展示大量数据的场景。"
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
      "source": "draggable",
      "target": "beforeDragend",
      "effect": "当启用拖拽功能时，可以通过 beforeDragend 钩子控制拖拽结束前的行为。",
      "notes": [
        "beforeDragend 钩子可以返回 false 或 Promise.resolve(false) 来取消拖拽操作。"
      ]
    },
    {
      "source": "virtualScroll",
      "target": "height",
      "effect": "启用虚拟滚动时，必须设置表格的固定高度以确保滚动效果正常。"
    }
  ],
  "props": [
    {
      "name": "bordered",
      "title": "边框",
      "propType": "bool",
      "description": "是否显示表格边框",
      "defaultValue": false
    },
    {
      "name": "data",
      "title": "数据源",
      "propType": "array",
      "description": "表格的数据源，通常是一个对象数组"
    },
    {
      "name": "rowClassName",
      "title": "行样式类名",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "object",
          "array",
          "func"
        ]
      },
      "description": "自定义行样式类名，可以是字符串、对象、数组或函数"
    },
    {
      "name": "rowStyle",
      "title": "行样式",
      "propType": {
        "type": "oneOfType",
        "value": [
          "object",
          "func"
        ]
      },
      "description": "自定义行样式，可以是对象或函数"
    },
    {
      "name": "emptyText",
      "title": "空数据提示",
      "propType": "string",
      "description": "当数据为空时显示的提示文本"
    },
    {
      "name": "empty",
      "title": "空数据插槽",
      "propType": "node",
      "description": "当数据为空时显示的自定义插槽内容"
    },
    {
      "name": "height",
      "title": "高度",
      "propType": "number",
      "description": "表格的固定高度，通常用于虚拟滚动场景"
    },
    {
      "name": "rowKey",
      "title": "行 key",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "func"
        ]
      },
      "description": "指定行的唯一标识，可以是字符串或函数"
    },
    {
      "name": "showHeader",
      "title": "显示表头",
      "propType": "bool",
      "description": "是否显示表格表头",
      "defaultValue": true
    },
    {
      "name": "spanMethod",
      "title": "合并列",
      "propType": "func",
      "description": "用于合并行或列的函数，返回一个包含 rowspan 和 colspan 的对象"
    },
    {
      "name": "virtualScroll",
      "title": "虚拟滚动",
      "propType": "bool",
      "description": "是否启用虚拟滚动以优化大数据量下的性能",
      "defaultValue": false
    },
    {
      "name": "size",
      "title": "间距大小",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "middle",
            "title": "默认",
            "usage": "常规表格间距"
          },
          {
            "name": "small",
            "title": "小",
            "usage": "紧凑型表格间距"
          }
        ]
      },
      "description": "表格的间距大小，影响表格的整体布局",
      "defaultValue": "middle"
    },
    {
      "name": "layout",
      "title": "布局方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "fixed",
            "title": "等分",
            "usage": "列宽等分布局"
          },
          {
            "name": "auto",
            "title": "自适应",
            "usage": "列宽自适应内容"
          }
        ]
      },
      "description": "表格列的布局方式，影响列的宽度分配",
      "defaultValue": "fixed"
    },
    {
      "name": "draggable",
      "title": "拖拽",
      "propType": "bool",
      "description": "是否启用行或列的拖拽功能",
      "defaultValue": false
    },
    {
      "name": "beforeDragend",
      "title": "拖拽结束前钩子",
      "propType": "func",
      "description": "拖拽结束前调用的钩子函数，可以控制是否允许拖拽结束"
    },
    {
      "name": "v-model:expandedKeys",
      "title": "展开行的key",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "oneOfType",
          "value": [
            "string",
            "number"
          ]
        }
      },
      "description": "控制展开行的 key 数组，通常用于树形表格"
    },
    {
      "name": "v-model:checkedKeys",
      "title": "勾选行的key",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "oneOfType",
          "value": [
            "string",
            "number"
          ]
        }
      },
      "description": "控制勾选行的 key 数组，通常用于多选表格"
    },
    {
      "name": "columns",
      "title": "列配置",
      "propType": "array",
      "description": "表格的列配置，包含列标题、字段、类型、宽度等信息"
    },
    {
      "name": "alwaysScrollbar",
      "title": "是否总是显示滚动条",
      "propType": "bool",
      "description": "是否始终显示表格的滚动条，即使内容不足以滚动",
      "defaultValue": false
    }
  ],
  "events": [
    {
      "name": "onCellClick",
      "description": "当单元格被点击时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{row, column, cellValue, event}",
          "description": "包含行、列、单元格值和事件对象的参数"
        }
      ]
    },
    {
      "name": "onExpandChange",
      "description": "当行展开状态发生变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{row, expanded}",
          "description": "包含行和展开状态的参数"
        }
      ]
    },
    {
      "name": "onHeaderClick",
      "description": "当表头被点击时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{column, event}",
          "description": "包含列和事件对象的参数"
        }
      ]
    },
    {
      "name": "onRowClick",
      "description": "当行被点击时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{row, event}",
          "description": "包含行和事件对象的参数"
        }
      ]
    },
    {
      "name": "onSelect",
      "description": "当行被选中时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ selection, row, checked}",
          "description": "包含选中行、当前行和选中状态的参数"
        }
      ]
    },
    {
      "name": "onSelectAll",
      "description": "当全选或取消全选时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ selection, checked}",
          "description": "包含所有选中行和选中状态的参数"
        }
      ]
    },
    {
      "name": "onSelectionChange",
      "description": "当选中行发生变化时触发",
      "parameters": [
        {
          "name": "selection",
          "type": "number[] | string[]",
          "description": "包含所有选中行的 key 数组"
        }
      ]
    },
    {
      "name": "onDragstart",
      "description": "当拖拽开始时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "拖拽事件对象"
        },
        {
          "name": "item",
          "type": "IRow",
          "description": "被拖拽的行对象"
        },
        {
          "name": "index",
          "type": "number",
          "description": "被拖拽行的索引"
        }
      ]
    },
    {
      "name": "onDragend",
      "description": "当拖拽结束时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "拖拽事件对象"
        },
        {
          "name": "item",
          "type": "IRow",
          "description": "被拖拽的行对象"
        },
        {
          "name": "index",
          "type": "number",
          "description": "被拖拽行的索引"
        }
      ]
    },
    {
      "name": "onSortChange",
      "description": "当排序发生变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{prop?: string; order?: 'descend' | 'ascend'; sorter?: Function | 'default'}",
          "description": "包含排序字段、排序方向和排序函数的参数"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "empty",
      "description": "当数据为空时显示的自定义内容",
      "required": false
    }
  ]
};
