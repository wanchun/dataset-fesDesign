import type { IComponentMetadata } from '../type';

export const selectCascaderMeta: IComponentMetadata = {
  "title": "级联选择器",
  "componentName": "FSelectCascader",
  "description": "级联选择器组件，支持多级数据的选择和展示。适用于需要选择层级数据的场景，如地区选择、分类选择等。",
  "scenarios": [
    "地区选择：用于选择省、市、区等多级地区数据，支持异步加载和动态展开。",
    "分类选择：用于选择商品分类、文章分类等多级分类数据，支持父子节点关联选择。",
    "权限配置：用于配置多级权限，支持勾选策略和异步加载数据。",
    "组织架构：用于选择组织架构中的部门和员工，支持动态加载和路径显示。",
    "产品配置：用于配置产品的多级属性，支持多选和折叠展示。"
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
      "source": "remote",
      "target": "loadData",
      "effect": "当remote为true时，loadData函数必须提供，用于异步加载数据"
    },
    {
      "source": "multiple",
      "target": "collapseTags",
      "effect": "当multiple为true时，collapseTags控制多选时选中项的折叠展示"
    },
    {
      "source": "collapseTags",
      "target": "collapseTagsLimit",
      "effect": "当collapseTags为true时，collapseTagsLimit控制折叠展示的个数"
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定变量",
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
      "description": "绑定选中的值，可以是单个值或数组"
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
      "description": "控制展开的节点，值为节点的key数组"
    },
    {
      "name": "appendToContainer",
      "title": "弹窗是否挂载到容器",
      "propType": "bool",
      "defaultValue": true,
      "description": "弹窗内容是否添加到指定的DOM元素"
    },
    {
      "name": "getContainer",
      "title": "配置挂载容器",
      "propType": "func",
      "description": "自定义挂载容器的函数"
    },
    {
      "name": "clearable",
      "title": "是否显示清除图标",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否显示清除图标，用于清空选择"
    },
    {
      "name": "disabled",
      "title": "是否禁用",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否禁用选择器"
    },
    {
      "name": "collapseTags",
      "title": "选项是否折叠展示",
      "propType": "bool",
      "defaultValue": false,
      "description": "多选时选中项是否折叠展示"
    },
    {
      "name": "collapseTagsLimit",
      "title": "超出多少折叠",
      "propType": "number",
      "defaultValue": 1,
      "description": "多选时选中项超出限制个数后才会折叠"
    },
    {
      "name": "tagBordered",
      "title": "选项是否有边框",
      "propType": "bool",
      "defaultValue": false,
      "description": "多选时，选中项展示是否有边框"
    },
    {
      "name": "emptyText",
      "title": "选项为空的提示文字",
      "propType": "string",
      "defaultValue": "无数据",
      "description": "当选项为空时显示的提示文字"
    },
    {
      "name": "multiple",
      "title": "是否多选",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否支持多选"
    },
    {
      "name": "placeholder",
      "title": "未选择的提示语",
      "propType": "string",
      "description": "未选择时的提示语"
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
                  "func"
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
                  "func"
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
      "description": "级联选择器的选项数据"
    },
    {
      "name": "cascade",
      "title": "父子节点选中是否关联",
      "propType": "bool",
      "defaultValue": false,
      "description": "父子节点选中状态是否关联"
    },
    {
      "name": "checkStrictly",
      "title": "勾选策略",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "all",
            "title": "全部",
            "usage": "回调函数值为全部选中节点"
          },
          {
            "name": "parent",
            "title": "父节点",
            "usage": "回调函数值为父节点（当父节点下所有子节点都选中时）"
          },
          {
            "name": "child",
            "title": "子节点",
            "usage": "回调函数值为子节点"
          }
        ]
      },
      "defaultValue": "child",
      "description": "设置勾选策略来指定勾选回调返回的值"
    },
    {
      "name": "childrenField",
      "title": "children字段名",
      "propType": "string",
      "defaultValue": "children",
      "description": "指定子节点数据的字段名"
    },
    {
      "name": "valueField",
      "title": "value字段名",
      "propType": "string",
      "defaultValue": "value",
      "description": "指定节点值的字段名"
    },
    {
      "name": "labelField",
      "title": "label字段名",
      "propType": "string",
      "defaultValue": "label",
      "description": "指定节点名称的字段名"
    },
    {
      "name": "remote",
      "title": "是否异步加载",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否异步加载数据"
    },
    {
      "name": "loadData",
      "title": "异步加载数据函数",
      "propType": "func",
      "description": "异步加载数据的回调函数，参数是node，表示父节点，根据父节点查询子节点数据并返回"
    },
    {
      "name": "expandTrigger",
      "title": "次级菜单的展开方式",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "click",
            "title": "点击",
            "usage": "点击时展开次级菜单"
          },
          {
            "name": "hover",
            "title": "悬停",
            "usage": "悬停时展开次级菜单"
          }
        ]
      },
      "defaultValue": "click",
      "description": "次级菜单的展开方式"
    },
    {
      "name": "emitPath",
      "title": "值是否包含路径",
      "propType": "bool",
      "defaultValue": false,
      "description": "选中值是否包含路径"
    },
    {
      "name": "showPath",
      "title": "是否显示路径",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否显示选中值的路径"
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
          "description": "弹窗是否显示"
        }
      ]
    },
    {
      "name": "onRemoveTag",
      "description": "移除标签时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number",
          "description": "被移除的标签值"
        }
      ]
    },
    {
      "name": "onClear",
      "description": "清空选择时触发",
      "parameters": []
    },
    {
      "name": "onFocus",
      "description": "获得焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "事件对象"
        }
      ]
    },
    {
      "name": "onBlur",
      "description": "失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "事件对象"
        }
      ]
    }
  ],
  "slots": [],
  "exposes": []
};
