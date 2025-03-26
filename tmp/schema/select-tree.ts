import type { IComponentMetadata } from '../type';

export const selectTreeMeta: IComponentMetadata = {
  "title": "树形选择器",
  "componentName": "FSelectTree",
  "description": "树形选择器组件，用于从树形结构中选择一个或多个选项。支持多选、过滤、异步加载等功能，适用于需要层级选择的场景。",
  "scenarios": [
    "表单选择：在表单中使用树形选择器，用于选择具有层级关系的选项，如部门选择、分类选择等。",
    "权限配置：在权限管理系统中使用树形选择器，用于配置用户或角色的权限，支持多选和层级展示。",
    "商品分类：在电商平台中使用树形选择器，用于选择商品分类，支持异步加载和过滤功能。",
    "组织架构：在组织架构管理中使用树形选择器，用于选择部门或员工，支持父子节点关联选择。",
    "文件管理：在文件管理系统中使用树形选择器，用于选择文件夹或文件，支持手风琴模式和虚拟滚动。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单项场景下必须放在表单项组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "remote",
      "target": "loadData",
      "effect": "异步加载数据时，必须提供loadData函数",
      "notes": [
        "当remote为true时，loadData函数必须实现",
        "用于在异步加载数据时，根据父节点查询子节点数据"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "选中选项",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number",
          {
            "type": "arrayOf",
            "value": {
              "type": "oneOfType",
              "value": [
                "string",
                "number"
              ]
            }
          }
        ]
      },
      "description": "绑定选中的值，支持单选和多选"
    },
    {
      "name": "v-model:expandedKeys",
      "title": "展开选项",
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
      "description": "绑定展开的节点值，控制树形结构的展开状态"
    },
    {
      "name": "appendToContainer",
      "title": "弹窗是否挂载到容器",
      "propType": "bool",
      "description": "弹窗内容是否添加到指定的DOM元素",
      "defaultValue": true
    },
    {
      "name": "getContainer",
      "title": "配置挂载容器",
      "propType": "func",
      "description": "自定义弹窗挂载的容器"
    },
    {
      "name": "clearable",
      "title": "是否显示清除图标",
      "propType": "bool",
      "description": "是否显示清除按钮，用于清空选中的值",
      "defaultValue": false
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "propType": "bool",
      "description": "是否禁用树形选择器",
      "defaultValue": false
    },
    {
      "name": "collapseTags",
      "title": "选项是否折叠展示",
      "propType": "bool",
      "description": "多选时，是否将选中的选项折叠展示",
      "defaultValue": false
    },
    {
      "name": "collapseTagsLimit",
      "title": "超出多少折叠",
      "propType": "number",
      "description": "多选时，选中项超出限制个数后才会折叠",
      "defaultValue": 1
    },
    {
      "name": "tagBordered",
      "title": "选项是否有边框",
      "propType": "bool",
      "description": "多选时，选中的选项是否有边框",
      "defaultValue": false
    },
    {
      "name": "emptyText",
      "title": "选项为空的提示文字",
      "propType": "string",
      "description": "当选项为空时显示的提示文字",
      "defaultValue": "无数据"
    },
    {
      "name": "multiple",
      "title": "是否多选",
      "propType": "bool",
      "description": "是否支持多选",
      "defaultValue": false
    },
    {
      "name": "multipleLimit",
      "title": "最多选择几个",
      "propType": "number",
      "description": "多选时，用户最多可以选择的项目数，为0则不限制",
      "defaultValue": 0
    },
    {
      "name": "placeholder",
      "title": "未选择的提示语",
      "propType": "string",
      "description": "未选择时显示的提示语"
    },
    {
      "name": "filterable",
      "title": "是否支持过滤选项",
      "propType": "bool",
      "description": "是否支持通过输入框过滤选项",
      "defaultValue": false
    },
    {
      "name": "filter",
      "title": "自定义过滤函数",
      "propType": "func",
      "description": "自定义过滤函数，用于根据输入值过滤选项"
    },
    {
      "name": "data",
      "title": "选项数据",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "value",
              "title": "选项值",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "number"
                ]
              }
            },
            {
              "name": "label",
              "title": "选项名称",
              "propType": "string"
            },
            {
              "name": "selectable",
              "title": "选项是否可选中",
              "propType": "bool"
            },
            {
              "name": "disabled",
              "title": "选项是否禁用",
              "propType": "bool"
            },
            {
              "name": "checkable",
              "title": "选项是否可勾选",
              "propType": "bool"
            },
            {
              "name": "isLeaf",
              "title": "选项是否是叶子节点",
              "propType": "bool"
            },
            {
              "name": "prefix",
              "title": "节点前缀",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "node"
                ]
              }
            },
            {
              "name": "suffix",
              "title": "节点后缀",
              "propType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "node"
                ]
              }
            },
            {
              "name": "children",
              "title": "子选项数据",
              "propType": "array"
            }
          ]
        }
      },
      "description": "树形结构的选项数据"
    },
    {
      "name": "accordion",
      "title": "手风琴模式",
      "propType": "bool",
      "description": "是否开启手风琴模式，同一时间只能展开一个节点",
      "defaultValue": false
    },
    {
      "name": "defaultExpandAll",
      "title": "默认展开所有选项",
      "propType": "bool",
      "description": "是否默认展开所有节点",
      "defaultValue": false
    },
    {
      "name": "cascade",
      "title": "父子节点选中是否关联",
      "propType": "bool",
      "description": "父子节点选中状态是否关联，选中父节点也会选中子节点",
      "defaultValue": false
    },
    {
      "name": "checkStrictly",
      "title": "勾选策略",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "all",
            "title": "所有关联节点",
            "usage": "选中节点时，所有关联节点都会被选中"
          },
          {
            "name": "parent",
            "title": "关联父节点",
            "usage": "选中节点时，关联的父节点也会被选中"
          },
          {
            "name": "child",
            "title": "关联子节点",
            "usage": "选中节点时，关联的子节点也会被选中"
          }
        ]
      },
      "description": "勾选策略，控制节点选中时的关联行为",
      "defaultValue": "child"
    },
    {
      "name": "childrenField",
      "title": "children字段名",
      "propType": "string",
      "description": "子节点数据的字段名",
      "defaultValue": "children"
    },
    {
      "name": "valueField",
      "title": "value字段名",
      "propType": "string",
      "description": "节点值的字段名",
      "defaultValue": "value"
    },
    {
      "name": "labelField",
      "title": "label字段名",
      "propType": "string",
      "description": "节点名称的字段名",
      "defaultValue": "label"
    },
    {
      "name": "remote",
      "title": "是否异步加载",
      "propType": "bool",
      "description": "是否异步加载节点数据",
      "defaultValue": false
    },
    {
      "name": "loadData",
      "title": "异步加载数据函数",
      "propType": "func",
      "description": "异步加载数据的回调函数，用于根据父节点查询子节点数据"
    },
    {
      "name": "inline",
      "title": "叶子节点是否一行展示",
      "propType": "bool",
      "description": "叶子节点是否在同一行展示",
      "defaultValue": false
    },
    {
      "name": "virtualList",
      "title": "是否虚拟滚动",
      "propType": "bool",
      "description": "是否开启虚拟滚动，用于优化大量数据的渲染性能",
      "defaultValue": false
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "选中值发生变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number | []",
          "description": "当前选中的值"
        }
      ]
    },
    {
      "name": "onVisibleChange",
      "description": "弹窗显示状态发生变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "弹窗是否可见"
        }
      ]
    },
    {
      "name": "onRemoveTag",
      "description": "移除选中项时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number",
          "description": "被移除的选项值"
        }
      ]
    },
    {
      "name": "onClear",
      "description": "清空选中项时触发",
      "parameters": []
    },
    {
      "name": "onFocus",
      "description": "输入框获得焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    },
    {
      "name": "onBlur",
      "description": "输入框失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "默认插槽，用于自定义选项内容",
      "required": false
    }
  ]
};
