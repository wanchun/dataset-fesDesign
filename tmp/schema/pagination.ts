import type { IComponentMetadata } from '../type';

export const paginationMeta: IComponentMetadata = {
  "title": "分页",
  "componentName": "FPagination",
  "description": "分页组件，用于在数据量较大的情况下进行分页展示和导航。支持自定义每页条数、快速跳转、简洁模式等功能，适用于表格、列表等需要分页的场景。",
  "scenarios": [
    "表格分页：在数据表格底部使用分页组件，支持用户浏览大量数据，提供便捷的导航功能。",
    "列表分页：在长列表底部使用分页组件，帮助用户快速定位和浏览数据，提升用户体验。",
    "搜索结果分页：在搜索结果页面使用分页组件，支持用户逐页查看搜索结果，提供高效的浏览方式。",
    "数据报表分页：在数据报表页面使用分页组件，支持用户分页查看报表数据，确保页面性能。",
    "简洁模式分页：在移动端或紧凑布局中使用简洁模式分页，减少空间占用，保持界面简洁。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FTable",
        "description": "表格场景下必须放在表格组件内"
      },
      {
        "parent": "FList",
        "description": "列表场景下必须放在列表组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "showSizeChanger",
      "target": "pageSizeOption",
      "effect": "开启每页条数选择器时，必须配置pageSizeOption",
      "notes": [
        "当showSizeChanger为true时，pageSizeOption必须提供有效的选项"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model:pageSize",
      "title": "每页个数",
      "propType": "number",
      "description": "每页显示的数据条数，支持双向绑定"
    },
    {
      "name": "v-model:currentPage",
      "title": "当前页码",
      "propType": "number",
      "description": "当前显示的页码，支持双向绑定"
    },
    {
      "name": "totalCount",
      "title": "总条数",
      "propType": "number",
      "description": "数据的总条数，用于计算总页数"
    },
    {
      "name": "pageSizeOption",
      "title": "每页条数选项",
      "propType": "array",
      "description": "每页条数的可选值列表，仅在showSizeChanger为true时有效"
    },
    {
      "name": "showTotal",
      "title": "显示总条数",
      "propType": "bool",
      "description": "是否显示总条数信息",
      "defaultValue": false
    },
    {
      "name": "showQuickJumper",
      "title": "快速跳转",
      "propType": "bool",
      "description": "是否显示快速跳转输入框",
      "defaultValue": false
    },
    {
      "name": "small",
      "title": "小型样式",
      "propType": "bool",
      "description": "是否使用小型样式，适用于紧凑布局",
      "defaultValue": false
    },
    {
      "name": "simple",
      "title": "简洁样式",
      "propType": "bool",
      "description": "是否使用简洁样式，适用于移动端或紧凑布局",
      "defaultValue": false
    },
    {
      "name": "showSizeChanger",
      "title": "开启每页条数选择器",
      "propType": "bool",
      "description": "是否显示每页条数选择器",
      "defaultValue": false
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "页码或每页条数发生变化时触发",
      "parameters": [
        {
          "name": "currentPage",
          "type": "number",
          "description": "当前页码"
        },
        {
          "name": "pageSize",
          "type": "number",
          "description": "每页条数"
        }
      ]
    },
    {
      "name": "onPageSizeChange",
      "description": "每页条数发生变化时触发",
      "parameters": [
        {
          "name": "pageSize",
          "type": "number",
          "description": "每页条数"
        }
      ]
    }
  ],
  "slots": [],
  "exposes": []
};
