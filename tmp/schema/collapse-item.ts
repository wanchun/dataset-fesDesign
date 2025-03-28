import type { IComponentMetadata } from '../type';

export const collapseItemMeta: IComponentMetadata = {
  "title": "折叠面板选项",
  "componentName": "FCollapseItem",
  "description": "折叠面板的单个选项组件，用于展示可折叠的内容区域。支持自定义标题和禁用状态，必须作为FCollapse组件的子组件使用。",
  "scenarios": [
    "内容分组展示：在需要分组展示大量内容时使用，通过折叠功能节省页面空间。",
    "FAQ页面：用于构建常见问题解答页面，每个问题作为可折叠的选项。",
    "设置面板：在系统设置等场景中，将不同类别的设置项分组到折叠面板中。",
    "数据报表：展示多维度数据时，将不同维度的数据分组到折叠面板中。",
    "移动端适配：在移动设备上使用折叠面板优化内容展示，提升用户体验。"
  ],
  "parent": {
    "types": [],
    "restrictions": [
      {
        "parent": "FCollapse",
        "description": "必须作为折叠面板组件的子组件使用"
      }
    ]
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "name",
      "title": "标识符",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "选项的唯一标识，用于控制展开状态",
      "example": "item1"
    },
    {
      "name": "title",
      "title": "标题",
      "valueType": "string",
      "description": "选项的标题文本",
      "example": "常见问题"
    },
    {
      "name": "disabled",
      "title": "禁用",
      "valueType": "bool",
      "description": "是否禁用该选项",
      "defaultValue": false,
      "example": false
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "折叠选项的内容区域",
      "required": true
    }
  ],
  "templates": [
    {
      "input": "基础折叠选项",
      "output": "[场景说明] 创建一个基本的折叠面板选项\n[代码实现] <!-- correct -->\n<FCollapseItem title=\"基础选项\">\n  这里是折叠内容\n</FCollapseItem>\n[最佳实践] 确保每个选项都有明确的标题和有意义的内容"
    },
    {
      "input": "禁用状态的选项",
      "output": "[场景说明] 创建一个不可操作的折叠选项\n[代码实现] <!-- correct -->\n<FCollapseItem title=\"禁用选项\" disabled>\n  不可操作的内容\n</FCollapseItem>\n[最佳实践] 使用disabled属性明确标识不可交互的选项"
    },
    {
      "input": "带标识符的选项",
      "output": "[场景说明] 创建可编程控制的折叠选项\n[代码实现] <!-- correct -->\n<FCollapseItem name=\"item1\" title=\"可控制选项\">\n  可通过标识符控制的内容\n</FCollapseItem>\n[最佳实践] 为需要编程控制的选项设置唯一的name属性"
    },
    {
      "input": "复杂内容选项",
      "output": "[场景说明] 创建包含复杂内容的折叠选项\n[代码实现] <!-- correct -->\n<FCollapseItem title=\"复杂内容\">\n  <div>\n    <p>段落1</p>\n    <p>段落2</p>\n    <img src=\"image.png\" />\n  </div>\n</FCollapseItem>\n[最佳实践] 在内容区域使用适当的HTML结构组织复杂内容"
    },
    {
      "input": "多个选项组合",
      "output": "[场景说明] 创建多个折叠选项的组合\n[代码实现] <!-- correct -->\n<FCollapse>\n  <FCollapseItem title=\"选项1\">内容1</FCollapseItem>\n  <FCollapseItem title=\"选项2\">内容2</FCollapseItem>\n  <FCollapseItem title=\"选项3\">内容3</FCollapseItem>\n</FCollapse>\n[最佳实践] 确保所有选项都包含在FCollapse组件内"
    },
    {
      "input": "缺少标题的选项",
      "output": "[错误分析] 折叠选项必须包含标题\n[正确代码] <!-- correct -->\n<FCollapseItem title=\"有效标题\">内容</FCollapseItem>\n[注意事项] 每个FCollapseItem必须设置title属性"
    },
    {
      "input": "错误的父组件",
      "output": "[错误分析] FCollapseItem必须作为FCollapse的子组件\n[正确代码] <!-- correct -->\n<FCollapse>\n  <FCollapseItem title=\"正确用法\">内容</FCollapseItem>\n</FCollapse>\n[注意事项] 确保FCollapseItem只出现在FCollapse组件内"
    },
    {
      "input": "空内容选项",
      "output": "[场景说明] 创建空内容的折叠选项测试边界条件\n[代码实现] <!-- correct -->\n<FCollapseItem title=\"空内容\"></FCollapseItem>\n[最佳实践] 即使没有内容也应保留闭合标签"
    },
    {
      "input": "如何制作可折叠的内容块？",
      "output": "[场景说明] 创建基本的可折叠内容块\n[代码实现] <!-- correct -->\n<FCollapse>\n  <FCollapseItem title=\"内容块\">\n    这里是可折叠的内容\n  </FCollapseItem>\n</FCollapse>\n[最佳实践] 使用FCollapse和FCollapseItem组合实现折叠功能"
    },
    {
      "input": "折叠面版怎么用",
      "output": "[场景说明] 创建基本的折叠面板使用示例\n[代码实现] <!-- correct -->\n<FCollapse>\n  <FCollapseItem title=\"第一部分\">内容1</FCollapseItem>\n  <FCollapseItem title=\"第二部分\">内容2</FCollapseItem>\n</FCollapse>\n[最佳实践] 注意'面板'的正确拼写为'FCollapse'"
    },
    {
      "input": "折叠项样式覆盖",
      "output": "[场景说明] 自定义折叠选项的样式\n[代码实现] <!-- correct -->\n<FCollapseItem \n  title=\"自定义样式\" \n  class=\"custom-style\"\n>\n  内容\n</FCollapseItem>\n[最佳实践] 通过class或style属性覆盖默认样式"
    },
    {
      "input": "与表格组合使用",
      "output": "[场景说明] 在折叠选项内嵌入表格\n[代码实现] <!-- correct -->\n<FCollapseItem title=\"数据表格\">\n  <FTable :columns=\"columns\" :data=\"data\" />\n</FCollapseItem>\n[最佳实践] 确保嵌套组件在折叠内容区域内"
    }
  ]
};
