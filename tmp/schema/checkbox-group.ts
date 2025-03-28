import type { IComponentMetadata } from '../type';

export const checkboxGroupMeta: IComponentMetadata = {
  "title": "多选框组",
  "componentName": "FCheckboxGroup",
  "description": "多选框组组件，用于在一组可选项中进行多项选择。支持垂直/水平布局、禁用状态和自定义选项配置，适用于表单数据收集、设置项选择等场景。",
  "scenarios": [
    "表单数据收集：在用户信息填写表单中使用，收集用户的多项选择数据，如兴趣爱好选择。",
    "权限配置：在系统权限配置界面使用，允许管理员勾选多项权限进行批量分配。",
    "筛选条件：在数据表格筛选区域使用，提供多条件组合筛选能力。",
    "设置项选择：在系统设置页面使用，允许用户同时启用多个功能选项。",
    "问卷调研：在调研问卷中使用，收集受访者的多项选择答案。"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单项场景下建议放在表单组件内以获取表单校验能力"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "disabled",
      "target": "options.disabled",
      "effect": "当组件禁用时，所有选项自动继承禁用状态",
      "notes": [
        "全局disabled优先级高于单个选项的disabled设置",
        "适用于需要批量禁用所有选项的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定值",
      "valueType": "array",
      "description": "绑定值，用于获取或设置当前选中的选项值数组",
      "required": true,
      "example": [
        "option1",
        "option2"
      ]
    },
    {
      "name": "vertical",
      "title": "垂直排列",
      "valueType": "bool",
      "description": "是否垂直排列选项，默认水平排列",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用整个多选框组",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "options",
      "title": "选项配置",
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
              "required": true,
              "example": "option1"
            },
            {
              "name": "label",
              "title": "选项标签",
              "valueType": "string",
              "required": true,
              "example": "选项1"
            },
            {
              "name": "disabled",
              "title": "禁用选项",
              "valueType": "bool",
              "example": false
            }
          ]
        }
      },
      "description": "配置选项数据，支持动态生成选项",
      "example": [
        {
          "value": "option1",
          "label": "选项1"
        },
        {
          "value": "option2",
          "label": "选项2",
          "disabled": true
        }
      ]
    },
    {
      "name": "valueField",
      "title": "值字段名",
      "valueType": "string",
      "description": "自定义选项值字段名，当options数据源字段不标准时使用",
      "defaultValue": "value",
      "example": "id"
    },
    {
      "name": "labelField",
      "title": "标签字段名",
      "valueType": "string",
      "description": "自定义选项标签字段名，当options数据源字段不标准时使用",
      "defaultValue": "label",
      "example": "name"
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "选项变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "array",
          "description": "当前选中的值数组"
        }
      ]
    }
  ],
  "templates": [
    {
      "input": "基础用法",
      "output": "<!-- correct -->\n[场景说明] 基本多选框组使用\n[代码实现]\n<template>\n  <FCheckboxGroup v-model=\"selectedValues\">\n    <FCheckbox value=\"option1\">选项1</FCheckbox>\n    <FCheckbox value=\"option2\">选项2</FCheckbox>\n  </FCheckboxGroup>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst selectedValues = ref([]);\n</script>\n[最佳实践] 使用v-model绑定数组来获取选中值"
    },
    {
      "input": "options配置用法",
      "output": "<!-- correct -->\n[场景说明] 使用options配置选项\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :options=\"options\"\n  />\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst selectedValues = ref([]);\nconst options = ref([\n  { value: 'option1', label: '选项1' },\n  { value: 'option2', label: '选项2', disabled: true }\n]);\n</script>\n[最佳实践] 动态生成选项时推荐使用options属性"
    },
    {
      "input": "垂直布局",
      "output": "<!-- correct -->\n[场景说明] 垂直排列的多选框组\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :vertical=\"true\"\n  >\n    <FCheckbox value=\"option1\">选项1</FCheckbox>\n    <FCheckbox value=\"option2\">选项2</FCheckbox>\n  </FCheckboxGroup>\n</template>\n[最佳实践] 在空间有限或选项较多时使用垂直布局"
    },
    {
      "input": "禁用状态",
      "output": "<!-- correct -->\n[场景说明] 禁用整个多选框组\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :disabled=\"true\"\n  >\n    <FCheckbox value=\"option1\">选项1</FCheckbox>\n    <FCheckbox value=\"option2\">选项2</FCheckbox>\n  </FCheckboxGroup>\n</template>\n[最佳实践] 表单提交后或只读场景下使用禁用状态"
    },
    {
      "input": "自定义字段名",
      "output": "<!-- correct -->\n[场景说明] 使用非标准字段名的数据源\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedIds\" \n    :options=\"items\"\n    value-field=\"id\"\n    label-field=\"name\"\n  />\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst selectedIds = ref([]);\nconst items = ref([\n  { id: 1, name: '项目1' },\n  { id: 2, name: '项目2' }\n]);\n</script>\n[最佳实践] 对接后端非标准接口时使用字段映射"
    },
    {
      "input": "错误示例：缺少v-model",
      "output": "<!-- error -->\n[错误分析] 多选框组必须使用v-model绑定值\n[正确代码]\n<template>\n  <FCheckboxGroup v-model=\"selectedValues\">\n    <FCheckbox value=\"option1\">选项1</FCheckbox>\n  </FCheckboxGroup>\n</template>\n[注意事项] 必须使用v-model绑定数组类型变量"
    },
    {
      "input": "错误示例：options格式错误",
      "output": "<!-- error -->\n[错误分析] options数组中缺少必需的value/label字段\n[正确代码]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :options=\"[\n      { value: '1', label: '选项1' },\n      { value: '2', label: '选项2' }\n    ]\"\n  />\n</template>\n[注意事项] options数组中的对象必须包含value和label字段"
    },
    {
      "input": "边界条件：空选项",
      "output": "<!-- correct -->\n[场景说明] 处理空选项情况\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :options=\"[]\"\n  />\n</template>\n[最佳实践] 动态数据加载时应处理空数组情况，可显示加载状态"
    },
    {
      "input": "如何让多选框竖着排列？",
      "output": "<!-- correct -->\n[场景说明] 垂直排列多选框组\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :vertical=\"true\"\n  >\n    <FCheckbox value=\"1\">选项1</FCheckbox>\n    <FCheckbox value=\"2\">选项2</FCheckbox>\n  </FCheckboxGroup>\n</template>\n[最佳实践] 设置vertical属性为true即可垂直排列"
    },
    {
      "input": "多选框组怎么禁用？",
      "output": "<!-- correct -->\n[场景说明] 禁用整个多选框组\n[代码实现]\n<template>\n  <FCheckboxGroup \n    v-model=\"selectedValues\" \n    :disabled=\"true\"\n  />\n</template>\n[最佳实践] 设置disabled属性为true可禁用整个组件"
    }
  ]
};
