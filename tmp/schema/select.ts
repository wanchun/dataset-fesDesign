import type { IComponentMetadata } from '../type';

export const selectMeta: IComponentMetadata = {
  "title": "选择器",
  "componentName": "FSelect",
  "description": "多功能下拉选择组件，支持单选/多选、搜索过滤、远程加载、自定义选项渲染等功能。适用于表单数据录入、数据筛选、分类选择等交互场景。",
  "scenarios": [
    "表单数据选择：在用户注册表单中使用基础单选模式，提供预定义选项确保数据规范性",
    "商品分类筛选：在电商平台使用多选模式配合折叠标签功能，实现多维度商品分类筛选",
    "远程城市选择：结合远程搜索功能实现城市选择器，支持异步加载海量城市数据",
    "自定义标签展示：在用户权限管理中使用插槽自定义多选标签样式，增强可视化效果",
    "动态选项创建：在标签管理场景中启用tag模式，允许用户实时创建新选项",
    "大数据量虚拟滚动：使用虚拟滚动优化包含上千选项的性能表现",
    "级联选择控制：作为复合选择器组件的基础单元，实现级联选择交互"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下必须配合表单校验组件使用"
      },
      {
        "parent": "FPopupContainer",
        "description": "需要弹出层定位时必须包含在弹出层容器内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "multiple",
      "target": [
        "collapseTags",
        "multipleLimit"
      ],
      "effect": "开启多选模式后激活标签折叠和选择数量限制功能"
    },
    {
      "source": "filterable",
      "target": [
        "tag",
        "remote"
      ],
      "effect": "启用过滤功能后可配合创建新选项或远程搜索"
    },
    {
      "source": "appendToContainer",
      "target": "getContainer",
      "effect": "启用容器挂载时需要指定目标容器获取方法"
    }
  ],
  "props": [
    {
      "name": "options",
      "title": "选项数据",
      "propType": {
        "type": "arrayOf",
        "value": {
          "type": "exact",
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
              "title": "选项标签",
              "propType": "string"
            }
          ]
        }
      },
      "description": "选择器选项数据源，数组元素需包含value和label字段",
      "defaultValue": []
    },
    {
      "name": "multiple",
      "title": "多选模式",
      "propType": "bool",
      "description": "是否开启多选模式，启用后可选择多个选项",
      "defaultValue": false
    },
    {
      "name": "filterable",
      "title": "可过滤",
      "propType": "bool",
      "description": "是否启用选项过滤功能",
      "defaultValue": false
    },
    {
      "name": "remote",
      "title": "远程搜索",
      "propType": "bool",
      "description": "是否启用远程搜索模式，需配合onSearch事件使用",
      "defaultValue": false
    },
    {
      "name": "collapseTags",
      "title": "折叠标签",
      "propType": "bool",
      "description": "多选时是否折叠已选标签",
      "defaultValue": false
    },
    {
      "name": "tagBordered",
      "title": "标签边框",
      "propType": "bool",
      "description": "是否显示选中标签的边框",
      "defaultValue": false
    },
    {
      "name": "valueField",
      "title": "值字段名",
      "propType": "string",
      "description": "自定义选项值字段名称",
      "defaultValue": "value"
    },
    {
      "name": "labelField",
      "title": "标签字段名",
      "propType": "string",
      "description": "自定义选项标签字段名称",
      "defaultValue": "label"
    },
    {
      "name": "placeholder",
      "title": "占位文本",
      "propType": "string",
      "description": "未选择时的提示文字",
      "defaultValue": "请选择"
    },
    {
      "name": "popperClass",
      "title": "弹出层样式",
      "propType": "string",
      "description": "自定义下拉弹出层的样式类名"
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "选中值变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "any",
          "description": "当前选中的值，单选时返回单个值，多选时返回数组"
        }
      ]
    },
    {
      "name": "onSearch",
      "description": "搜索条件变化时触发",
      "parameters": [
        {
          "name": "query",
          "type": "string",
          "description": "当前搜索关键词"
        }
      ]
    },
    {
      "name": "onRemoveTag",
      "description": "移除多选标签时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number",
          "description": "被移除标签对应的值"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "option",
      "description": "自定义选项内容",
      "scope": {
        "value": "当前选项值",
        "label": "选项显示文本",
        "disabled": "是否禁用状态",
        "isSelected": "是否被选中"
      }
    },
    {
      "name": "tag",
      "description": "自定义多选标签显示",
      "scope": {
        "option": "当前标签对应的选项对象",
        "handleClose": "关闭标签的回调方法"
      }
    },
    {
      "name": "header",
      "description": "弹出层顶部内容"
    },
    {
      "name": "footer",
      "description": "弹出层底部内容"
    }
  ]
};
