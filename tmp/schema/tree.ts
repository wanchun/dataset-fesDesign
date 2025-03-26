import type { IComponentMetadata } from '../type';

export const treeMeta: IComponentMetadata = {
  "title": "树形控件",
  "componentName": "FTree",
  "description": "树形控件用于展示层级结构数据，支持节点展开、选中、勾选、拖拽等操作。适用于文件目录、组织架构、分类管理等场景。",
  "scenarios": [
    "文件目录管理：使用树形控件展示文件夹和文件的层级结构，支持节点展开、选中和拖拽操作，便于用户管理文件系统。",
    "组织架构展示：通过树形控件展示公司或部门的层级关系，支持节点展开和选中，便于查看组织架构信息。",
    "分类管理：在电商平台中使用树形控件展示商品分类，支持节点展开、选中和勾选，便于管理商品分类。",
    "权限配置：在权限管理系统中使用树形控件展示权限层级，支持节点勾选和父子关联，便于配置用户权限。",
    "异步加载：在需要动态加载数据的场景中，使用树形控件的异步加载功能，根据用户操作动态加载子节点数据。"
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
      "effect": "当remote为true时，需要提供loadData函数用于异步加载数据",
      "notes": [
        "异步加载数据时，需确保loadData函数返回正确的子节点数据"
      ]
    },
    {
      "source": "checkable",
      "target": "cascade",
      "effect": "当checkable为true时，cascade属性控制父子节点的勾选状态是否关联",
      "notes": [
        "cascade为true时，勾选父节点会自动勾选所有子节点"
      ]
    }
  ],
  "props": [
    {
      "name": "data",
      "title": "节点数据",
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
      "description": "树形控件的节点数据，支持嵌套结构，每个节点可以包含子节点。"
    },
    {
      "name": "defaultExpandAll",
      "title": "默认展开所有选项",
      "propType": "bool",
      "description": "是否默认展开所有节点",
      "defaultValue": false
    },
    {
      "name": "v-model:expandedKeys",
      "title": "展开的节点",
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
      "description": "当前展开的节点key数组，支持双向绑定"
    },
    {
      "name": "selectable",
      "title": "可选中",
      "propType": "bool",
      "description": "是否允许节点被选中",
      "defaultValue": true
    },
    {
      "name": "v-model:selectedKeys",
      "title": "选中的节点",
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
      "description": "当前选中的节点key数组，支持双向绑定"
    },
    {
      "name": "multiple",
      "title": "可多选",
      "propType": "bool",
      "description": "是否允许多选节点",
      "defaultValue": false
    },
    {
      "name": "cancelable",
      "title": "可取消",
      "propType": "bool",
      "description": "是否允许取消选中节点",
      "defaultValue": true
    },
    {
      "name": "checkable",
      "title": "可勾选",
      "propType": "bool",
      "description": "是否允许节点被勾选",
      "defaultValue": false
    },
    {
      "name": "cascade",
      "title": "父子关联",
      "propType": "bool",
      "description": "是否启用父子节点勾选状态关联",
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
            "usage": "勾选父节点时，所有关联的子节点都会被勾选"
          },
          {
            "name": "parent",
            "title": "关联父节点",
            "usage": "勾选子节点时，父节点也会被勾选"
          },
          {
            "name": "child",
            "title": "关联子节点",
            "usage": "勾选父节点时，子节点也会被勾选"
          }
        ]
      },
      "description": "控制勾选策略，决定父子节点的勾选状态如何关联",
      "defaultValue": "child"
    },
    {
      "name": "v-model:checkedKeys",
      "title": "勾选的节点",
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
      "description": "当前勾选的节点key数组，支持双向绑定"
    },
    {
      "name": "childrenField",
      "title": "children字段",
      "propType": "string",
      "description": "指定子节点数据的字段名",
      "defaultValue": "children"
    },
    {
      "name": "valueField",
      "title": "value字段",
      "propType": "string",
      "description": "指定节点值的字段名",
      "defaultValue": "value"
    },
    {
      "name": "labelField",
      "title": "label字段",
      "propType": "string",
      "description": "指定节点名称的字段名",
      "defaultValue": "label"
    },
    {
      "name": "remote",
      "title": "是否异步加载",
      "propType": "bool",
      "description": "是否启用异步加载子节点数据",
      "defaultValue": false
    },
    {
      "name": "loadData",
      "title": "异步数据",
      "propType": "func",
      "description": "异步加载子节点数据的回调函数，参数是父节点，返回子节点数据",
      "defaultValue": null
    },
    {
      "name": "accordion",
      "title": "手风琴模式",
      "propType": "bool",
      "description": "是否启用手风琴模式，同一层级下只能展开一个节点",
      "defaultValue": false
    },
    {
      "name": "draggable",
      "title": "可拖拽",
      "propType": "bool",
      "description": "是否允许节点拖拽",
      "defaultValue": false
    },
    {
      "name": "inline",
      "title": "叶节点横排列",
      "propType": "bool",
      "description": "是否将叶子节点横向排列",
      "defaultValue": false
    },
    {
      "name": "virtualList",
      "title": "是否虚拟滚动",
      "propType": "bool",
      "description": "是否启用虚拟滚动，用于优化大量节点时的性能",
      "defaultValue": false
    },
    {
      "name": "filterMethod",
      "title": "过滤函数",
      "propType": "func",
      "description": "自定义过滤函数，用于筛选树节点",
      "defaultValue": null
    }
  ],
  "events": [
    {
      "name": "onCheck",
      "description": "节点勾选状态变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ checkedKeys, node, event, checked }",
          "description": "包含勾选节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onExpand",
      "description": "节点展开状态变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ expandedKeys, node, event, expanded }",
          "description": "包含展开节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onSelect",
      "description": "节点选中状态变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ selectedKeys, node, event, selected }",
          "description": "包含选中节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDragstart",
      "description": "节点开始拖拽时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDragend",
      "description": "节点结束拖拽时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDragenter",
      "description": "节点进入拖拽区域时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDragleave",
      "description": "节点离开拖拽区域时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDragover",
      "description": "节点在拖拽区域上方移动时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    },
    {
      "name": "onDrop",
      "description": "节点拖拽释放时触发",
      "parameters": [
        {
          "name": "value",
          "type": "{ node: TreeOption, dragNode: TreeOption, originNode, originDragNode, position: 'before' | 'inside' | 'after', event: DragEvent }",
          "description": "包含拖拽节点信息的事件对象"
        }
      ]
    }
  ],
  "slots": [],
  "exposes": []
};
