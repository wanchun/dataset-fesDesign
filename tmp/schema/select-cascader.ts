import type { IComponentMetadata } from '../type';

export const selectCascaderMeta: IComponentMetadata = {
  "title": "级联选择器",
  "componentName": "FSelectCascader",
  "description": "级联选择器组件，用于处理具有层级结构的数据选择场景。支持单选、多选、异步加载、自定义节点渲染等功能，适用于地区选择、分类选择等复杂数据场景。",
  "scenarios": [
    "地区选择：用于省市区三级联动选择，展示清晰的层级结构",
    "商品分类：多级商品分类选择，支持快速定位到具体分类",
    "组织架构：选择公司部门层级，支持异步加载子部门",
    "权限配置：多选配置权限树，支持父子节点关联选择",
    "数据筛选：通过级联选择器筛选多维数据"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下必须放在表单项组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "remote",
      "target": "loadData",
      "effect": "当remote为true时，必须提供loadData函数",
      "notes": [
        "异步加载场景下必须配置"
      ]
    },
    {
      "source": "multiple",
      "target": [
        "collapseTags",
        "collapseTagsLimit"
      ],
      "effect": "多选模式下才需要配置折叠标签相关属性",
      "notes": [
        "单选框模式下这些属性无效"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定值",
      "valueType": {
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
      "description": "当前选中的值，支持单选和多选模式",
      "example": "'value1'"
    },
    {
      "name": "appendToContainer",
      "title": "挂载到容器",
      "valueType": "bool",
      "description": "是否将下拉菜单挂载到指定容器",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "clearable",
      "title": "可清除",
      "valueType": "bool",
      "description": "是否显示清除按钮",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用选择器",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "multiple",
      "title": "多选模式",
      "valueType": "bool",
      "description": "是否开启多选模式",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "placeholder",
      "title": "占位文本",
      "valueType": "string",
      "description": "未选择时的提示文本",
      "example": "请选择"
    },
    {
      "name": "data",
      "title": "选项数据",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "value",
              "title": "选项值",
              "valueType": {
                "type": "oneOfType",
                "value": [
                  "string",
                  "number"
                ]
              },
              "example": "value1"
            },
            {
              "name": "label",
              "title": "选项标签",
              "valueType": "string",
              "example": "选项1"
            },
            {
              "name": "children",
              "title": "子选项",
              "valueType": "array",
              "example": []
            }
          ]
        }
      },
      "description": "级联选择器的数据源",
      "example": "[{value:'1',label:'选项1',children:[]}]"
    },
    {
      "name": "expandTrigger",
      "title": "展开方式",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "click",
            "title": "点击展开",
            "usage": "默认方式，点击节点展开子菜单"
          },
          {
            "value": "hover",
            "title": "悬停展开",
            "usage": "鼠标悬停时自动展开子菜单"
          }
        ]
      },
      "description": "次级菜单的展开方式",
      "defaultValue": "click",
      "example": "hover"
    },
    {
      "name": "remote",
      "title": "异步加载",
      "valueType": "bool",
      "description": "是否异步加载选项数据",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "loadData",
      "title": "加载函数",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "node",
            "type": "object",
            "description": "当前节点数据"
          }
        ],
        "returnType": "array"
      },
      "description": "异步加载数据的回调函数",
      "example": "(node) => fetchData(node)"
    }
  ],
  "events": [
    {
      "name": "change",
      "description": "选中值变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "any",
          "description": "当前选中的值"
        }
      ]
    },
    {
      "name": "visibleChange",
      "description": "下拉框显示/隐藏状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "是否可见"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "tag",
      "description": "自定义选中标签的渲染",
      "scope": {
        "option": "object",
        "handleClose": "function"
      }
    }
  ],
  "templates": [
    {
      "input": "基础单选级联选择器",
      "output": "[场景说明] 基础单选场景，展示三级联动选择\n[代码实现] \n<!-- correct -->\n<FSelectCascader \n  :data=\"options\" \n  v-model=\"selectedValue\" \n  placeholder=\"请选择\"/>\n[最佳实践] 确保data数据结构正确，value和label字段对应"
    },
    {
      "input": "多选带折叠标签",
      "output": "[场景说明] 多选场景，选中项超出限制后折叠显示\n[代码实现] \n<!-- correct -->\n<FSelectCascader \n  :data=\"options\" \n  v-model=\"selectedValues\" \n  multiple \n  collapseTags \n  collapseTagsLimit=\"2\"/>\n[最佳实践] 多选模式下建议设置collapseTagsLimit控制显示数量"
    },
    {
      "input": "异步加载数据",
      "output": "[场景说明] 异步加载子节点数据\n[代码实现] \n<!-- correct -->\n<FSelectCascader \n  v-model=\"selectedValue\" \n  remote \n  :loadData=\"loadData\" \n  emitPath/>\n[注意事项] 异步加载必须设置emitPath为true"
    },
    {
      "input": "错误示例：缺少必要属性",
      "output": "[错误分析] 异步加载场景下未提供loadData函数\n[正确代码] \n<!-- correct -->\n<FSelectCascader \n  remote \n  :loadData=\"fetchData\"/>\n[注意事项] remote为true时必须提供loadData函数"
    },
    {
      "input": "自定义标签渲染",
      "output": "[场景说明] 自定义选中标签的显示格式\n[代码实现] \n<!-- correct -->\n<FSelectCascader v-model=\"value\">\n  <template #tag=\"{option}\">\n    <span>{{ option.label }} (ID:{{ option.value }})</span>\n  </template>\n</FSelectCascader>"
    }
  ]
};
