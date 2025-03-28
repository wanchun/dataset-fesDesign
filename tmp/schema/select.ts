import type { IComponentMetadata } from '../type';

export const selectMeta: IComponentMetadata = {
  "title": "选择器",
  "componentName": "FSelect",
  "description": "下拉选择器组件，用于从一组选项中选择一个或多个值。支持单选、多选、过滤、远程搜索、虚拟滚动等功能，适用于表单数据录入和复杂选项选择场景。",
  "scenarios": [
    "表单数据录入：在表单中使用基础单选模式，提供清晰的可选项供用户选择。",
    "多选数据收集：使用多选模式收集用户的多项选择，如标签选择、权限配置等场景。",
    "大数据量展示：通过虚拟滚动功能高效展示大量选项，提升性能表现。",
    "远程数据搜索：结合远程搜索功能实现动态加载选项，适用于数据量大的异步场景。",
    "自定义选项展示：通过插槽自定义选项和标签的展示方式，满足特殊UI需求。",
    "分组选项展示：使用选项组功能对相关选项进行分类展示，提高选项的可读性。",
    "动态创建选项：允许用户输入并创建新的选项，适用于标签管理等场景。"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下建议放在表单项组件内"
      }
    ]
  },
  "children": [
    "FOption",
    "FSelectGroupOption"
  ],
  "propRelations": [
    {
      "source": "multiple",
      "target": [
        "collapseTags",
        "collapseTagsLimit",
        "multipleLimit"
      ],
      "effect": "多选模式下才会生效的属性",
      "notes": [
        "当multiple为true时，折叠标签相关属性才会生效",
        "多选限制属性multipleLimit仅在多选模式下有效"
      ]
    },
    {
      "source": "filterable",
      "target": [
        "tag",
        "remote"
      ],
      "effect": "可过滤模式下才能使用的功能",
      "notes": [
        "tag属性需要filterable为true才能生效",
        "remote远程搜索需要filterable为true"
      ]
    },
    {
      "source": "disabled",
      "target": "tagBordered",
      "effect": "禁用状态下强制显示标签边框",
      "notes": [
        "当disabled为true时，tagBordered会被强制设置为true"
      ]
    }
  ],
  "props": [
    {
      "name": "options",
      "title": "选项配置",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "exact",
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
              "example": "option1"
            },
            {
              "name": "label",
              "title": "选项标签",
              "valueType": "string",
              "example": "选项1"
            }
          ]
        }
      },
      "description": "选项数据数组，支持标准格式或自定义字段名格式",
      "defaultValue": [],
      "example": "[{value: 'option1', label: '选项1'}]"
    },
    {
      "name": "clearable",
      "title": "可清除",
      "valueType": "bool",
      "description": "是否显示清除按钮，点击可清空已选项",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用选择器，禁用状态下无法交互",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "collapseTags",
      "title": "折叠标签",
      "valueType": "bool",
      "description": "多选时是否折叠选中项标签",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "collapseTagsLimit",
      "title": "折叠限制",
      "valueType": "number",
      "description": "多选时选中项超出此数量才会折叠",
      "defaultValue": 1,
      "example": 3
    },
    {
      "name": "tagBordered",
      "title": "标签边框",
      "valueType": "bool",
      "description": "多选时选中项是否显示边框",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "emptyText",
      "title": "空数据提示",
      "valueType": "string",
      "description": "选项为空时显示的提示文本",
      "defaultValue": "无数据",
      "example": "暂无数据"
    },
    {
      "name": "appendToContainer",
      "title": "挂载到容器",
      "valueType": "bool",
      "description": "下拉选项是否挂载到指定DOM元素",
      "defaultValue": true,
      "example": false
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "returnType": "HTMLElement"
      },
      "description": "自定义下拉选项挂载的DOM元素",
      "example": "() => document.getElementById('container')"
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
      "name": "multipleLimit",
      "title": "多选限制",
      "valueType": "number",
      "description": "多选时最多可选择的项目数，0表示不限制",
      "defaultValue": 0,
      "example": 5
    },
    {
      "name": "placeholder",
      "title": "占位文本",
      "valueType": "string",
      "description": "未选择时的提示文本",
      "defaultValue": "请选择",
      "example": "请选择省份"
    },
    {
      "name": "v-model",
      "title": "绑定值",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "当前选中的值，支持v-model双向绑定",
      "example": "option1"
    },
    {
      "name": "filterable",
      "title": "可过滤",
      "valueType": "bool",
      "description": "是否允许输入过滤选项",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "filter",
      "title": "过滤函数",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "pattern",
            "type": "string",
            "description": "搜索关键词"
          },
          {
            "name": "option",
            "type": "object",
            "description": "当前选项数据"
          }
        ],
        "returnType": "bool"
      },
      "description": "自定义选项过滤逻辑",
      "example": "(pattern, option) => option.label.includes(pattern)"
    },
    {
      "name": "tag",
      "title": "可创建选项",
      "valueType": "bool",
      "description": "是否允许创建新选项，需配合filterable使用",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "remote",
      "title": "远程搜索",
      "valueType": "bool",
      "description": "是否开启远程搜索模式",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "valueField",
      "title": "值字段名",
      "valueType": "string",
      "description": "自定义选项值字段名，替代默认的value字段",
      "defaultValue": "value",
      "example": "id"
    },
    {
      "name": "labelField",
      "title": "标签字段名",
      "valueType": "string",
      "description": "自定义选项标签字段名，替代默认的label字段",
      "defaultValue": "label",
      "example": "name"
    },
    {
      "name": "popperClass",
      "title": "弹出框样式",
      "valueType": "string",
      "description": "自定义下拉弹出框的样式类名",
      "example": "custom-popper"
    },
    {
      "name": "virtualScroll",
      "title": "虚拟滚动",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "bool",
          "number"
        ]
      },
      "description": "是否开启虚拟滚动，可设置为布尔值或触发虚拟滚动的选项数量阈值",
      "defaultValue": true,
      "example": 50
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "选中值变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | number | boolean | object | array",
          "description": "当前选中的值"
        }
      ]
    },
    {
      "name": "onSearch",
      "description": "搜索关键词变化时触发",
      "parameters": [
        {
          "name": "query",
          "type": "string",
          "description": "搜索关键词"
        }
      ]
    },
    {
      "name": "onVisibleChange",
      "description": "下拉框显示状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "是否可见"
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
          "description": "被移除的选项值"
        }
      ]
    },
    {
      "name": "onClear",
      "description": "点击清除按钮时触发",
      "parameters": []
    },
    {
      "name": "onFocus",
      "description": "获得焦点时触发",
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
      "description": "失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    },
    {
      "name": "onScroll",
      "description": "滚动时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "滚动事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "empty",
      "description": "无选项时的内容",
      "required": false
    },
    {
      "name": "option",
      "description": "自定义选项内容",
      "required": false,
      "scope": {
        "value": "any",
        "label": "string",
        "disabled": "boolean",
        "isSelected": "boolean"
      }
    },
    {
      "name": "tag",
      "description": "自定义选中标签的展示方式",
      "required": false,
      "scope": {
        "option": "object",
        "handleClose": "function"
      }
    },
    {
      "name": "header",
      "description": "下拉框顶部内容",
      "required": false
    },
    {
      "name": "footer",
      "description": "下拉框底部内容",
      "required": false
    }
  ],
  "exposes": [
    {
      "name": "blur",
      "description": "使选择器失去焦点"
    },
    {
      "name": "focus",
      "description": "使选择器获得焦点"
    }
  ],
  "templates": [
    {
      "input": "基础单选选择器",
      "output": "[场景说明] 基础表单选择场景\n[代码实现]\n<FSelect v-model=\"value\" :options=\"options\" placeholder=\"请选择\" />\n[最佳实践] 适用于简单的单选场景，options配置性能更优"
    },
    {
      "input": "多选带折叠标签",
      "output": "[场景说明] 多选且选项较多时需要折叠展示\n[代码实现]\n<FSelect \n  v-model=\"values\" \n  :options=\"options\" \n  multiple \n  collapseTags \n  collapseTagsLimit=\"3\" \n  placeholder=\"请选择\" \n/>\n[最佳实践] 当选中项超过3个时会折叠显示，保持界面整洁"
    },
    {
      "input": "远程搜索选择器",
      "output": "[场景说明] 大数据量需要异步加载的场景\n[代码实现]\n<FSelect \n  v-model=\"value\" \n  filterable \n  remote \n  :options=\"options\" \n  @search=\"handleSearch\" \n  placeholder=\"请输入关键词搜索\" \n/>\n[最佳实践] 配合后端接口实现动态搜索，减轻前端压力"
    },
    {
      "input": "自定义选项模板",
      "output": "[场景说明] 需要自定义选项展示样式\n[代码实现]\n<FSelect v-model=\"value\">\n  <template #option=\"{ label, value }\">\n    <div style=\"display: flex; align-items: center\">\n      <span style=\"margin-right: 8px\">{{ value }}</span>\n      <span>{{ label }}</span>\n    </div>\n  </template>\n</FSelect>\n[最佳实践] 通过插槽完全控制选项的渲染方式"
    },
    {
      "input": "分组选项选择器",
      "output": "[场景说明] 需要对选项进行分类展示\n[代码实现]\n<FSelect v-model=\"value\">\n  <FSelectGroupOption label=\"华北地区\">\n    <FOption value=\"beijing\" label=\"北京\" />\n    <FOption value=\"tianjin\" label=\"天津\" />\n  </FSelectGroupOption>\n  <FSelectGroupOption label=\"华东地区\">\n    <FOption value=\"shanghai\" label=\"上海\" />\n    <FOption value=\"hangzhou\" label=\"杭州\" />\n  </FSelectGroupOption>\n</FSelect>\n[最佳实践] 对相关选项进行分组，提高可读性"
    },
    {
      "input": "虚拟滚动大数据量",
      "output": "[场景说明] 需要展示大量选项(1000+)的场景\n[代码实现]\n<FSelect \n  v-model=\"value\" \n  :options=\"largeOptions\" \n  virtualScroll \n  :virtualScroll=\"100\" \n/>\n[最佳实践] 当选项超过100条时自动启用虚拟滚动，保证性能"
    },
    {
      "input": "可创建新选项",
      "output": "[场景说明] 允许用户输入并创建新选项\n[代码实现]\n<FSelect \n  v-model=\"values\" \n  filterable \n  tag \n  multiple \n  placeholder=\"请输入并创建\" \n/>\n[最佳实践] 适用于标签管理等需要动态添加选项的场景"
    },
    {
      "input": "禁用状态选择器",
      "output": "[场景说明] 表单中某些条件下需要禁用选择\n[代码实现]\n<FSelect \n  v-model=\"value\" \n  :options=\"options\" \n  disabled \n  placeholder=\"已禁用\" \n/>\n[最佳实践] 通过disabled属性控制交互状态"
    },
    {
      "input": "错误示例：未设置v-model",
      "output": "[错误分析] 选择器缺少v-model绑定，无法获取用户选择的值\n[正确代码]\n<FSelect v-model=\"value\" :options=\"options\" />\n[注意事项] 必须使用v-model或value+onChange组合来管理选中状态"
    },
    {
      "input": "错误示例：tag未配合filterable使用",
      "output": "[错误分析] tag属性需要filterable为true才能生效\n[正确代码]\n<FSelect v-model=\"values\" filterable tag multiple />\n[注意事项] tag功能依赖filterable，必须同时开启"
    },
    {
      "input": "错误示例：remote未配合filterable使用",
      "output": "[错误分析] remote属性需要filterable为true才能生效\n[正确代码]\n<FSelect v-model=\"value\" filterable remote @search=\"handleSearch\" />\n[注意事项] 远程搜索功能需要同时开启filterable"
    },
    {
      "input": "边界条件：空选项",
      "output": "[场景说明] 选项数据为空时的处理\n[代码实现]\n<FSelect v-model=\"value\" :options=\"[]\" emptyText=\"暂无数据\" />\n[最佳实践] 提供友好的空状态提示，避免用户困惑"
    },
    {
      "input": "边界条件：默认选中第一个选项",
      "output": "[场景说明] 需要默认选中第一个选项\n[代码实现]\n<FSelect \n  v-model=\"value\" \n  :options=\"options\" \n  :value=\"options[0]?.value\" \n/>\n[最佳实践] 确保options已加载完成再设置默认值"
    },
    {
      "input": "边界条件：大量选中项",
      "output": "[场景说明] 多选模式下选中大量选项的性能优化\n[代码实现]\n<FSelect \n  v-model=\"values\" \n  multiple \n  collapseTags \n  collapseTagsLimit=\"5\" \n  :options=\"largeOptions\" \n/>\n[最佳实践] 使用折叠标签限制显示数量，避免界面溢出"
    },
    {
      "input": "怎么让下拉框可以搜索",
      "output": "[场景说明] 需要实现可搜索的选择器\n[代码实现]\n<FSelect v-model=\"value\" filterable :options=\"options\" />\n[最佳实践] 设置filterable属性即可启用搜索功能"
    },
    {
      "input": "选择器怎么多选",
      "output": "[场景说明] 需要实现多选功能\n[代码实现]\n<FSelect v-model=\"values\" multiple :options=\"options\" />\n[最佳实践] 设置multiple属性并确保v-model绑定的是数组"
    },
    {
      "input": "选项太多卡怎么办",
      "output": "[场景说明] 大数据量下的性能优化\n[代码实现]\n<FSelect v-model=\"value\" :options=\"largeOptions\" virtualScroll />\n[最佳实践] 使用virtualScroll属性启用虚拟滚动"
    },
    {
      "input": "自定义选择器样式",
      "output": "[场景说明] 需要自定义选择器外观\n[代码实现]\n<FSelect \n  v-model=\"value\" \n  :options=\"options\" \n  popperClass=\"custom-select\" \n  style=\"width: 300px\" \n/>\n<style>\n.custom-select { /* 自定义样式 */ }\n</style>\n[最佳实践] 通过popperClass和style属性控制样式"
    },
    {
      "input": "选择器与表单联动",
      "output": "[场景说明] 表单中的级联选择\n[代码实现]\n<FForm>\n  <FFormItem label=\"省份\">\n    <FSelect v-model=\"province\" :options=\"provinces\" @change=\"loadCities\" />\n  </FFormItem>\n  <FFormItem label=\"城市\">\n    <FSelect v-model=\"city\" :options=\"cities\" :disabled=\"!province\" />\n  </FFormItem>\n</FForm>\n[最佳实践] 通过change事件实现级联数据加载"
    }
  ]
};
