import type { IComponentMetadata } from '../type';

export const collapseMeta: IComponentMetadata = {
  "title": "折叠面板",
  "componentName": "FCollapse",
  "description": "用于收纳内容区域的折叠面板组件，支持手风琴模式、自定义箭头位置和背景色，适用于内容分类展示和空间优化场景。",
  "scenarios": [
    "内容分类展示：在设置页面使用折叠面板分类展示不同配置项，保持界面整洁有序。",
    "FAQ页面：在帮助中心使用手风琴模式展示常见问题，便于用户快速查找信息。",
    "表单分组：在复杂表单中使用折叠面板分组字段，提升表单填写体验。",
    "产品详情：在产品详情页使用折叠面板展示规格参数、使用说明等信息。",
    "侧边栏菜单：在后台管理系统侧边栏使用折叠面板实现多级菜单导航。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FCollapseItem"
  ],
  "propRelations": [
    {
      "source": "accordion",
      "target": "v-model",
      "effect": "手风琴模式时v-model类型必须为string，非手风琴模式时为array",
      "notes": [
        "模式切换时需要同步调整v-model类型",
        "适用于需要动态切换展示模式的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "当前激活面板",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "arrayOf",
            "value": "string"
          }
        ]
      },
      "description": "控制当前展开的面板，手风琴模式时为string类型，否则为string数组",
      "example": [
        "1",
        "2"
      ]
    },
    {
      "name": "accordion",
      "title": "手风琴模式",
      "valueType": "bool",
      "description": "是否每次只展开一个面板",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "arrow",
      "title": "箭头位置",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "left",
            "title": "左侧",
            "usage": "需要与左侧内容对齐时使用"
          },
          {
            "value": "right",
            "title": "右侧",
            "usage": "默认位置，符合大多数用户习惯"
          }
        ]
      },
      "description": "控制展开箭头的显示位置",
      "defaultValue": "right",
      "example": "left"
    },
    {
      "name": "embedded",
      "title": "深色背景",
      "valueType": "bool",
      "description": "是否使用深色背景突出内容区域",
      "defaultValue": true,
      "example": false
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "折叠面板的内容区域",
      "required": true
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基础折叠面板",
      "output": "<!-- correct -->\n[场景说明] 基本折叠面板使用，同时展开多个面板\n[代码实现]\n<FCollapse v-model=\"activeNames\">\n  <FCollapseItem title=\"面板1\" name=\"1\">内容1</FCollapseItem>\n  <FCollapseItem title=\"面板2\" name=\"2\">内容2</FCollapseItem>\n</FCollapse>\n[最佳实践] 适用于需要同时查看多个面板内容的场景"
    },
    {
      "input": "手风琴模式",
      "output": "<!-- correct -->\n[场景说明] 每次只展开一个面板的手风琴模式\n[代码实现]\n<FCollapse v-model=\"activeName\" accordion>\n  <FCollapseItem title=\"面板1\" name=\"1\">内容1</FCollapseItem>\n  <FCollapseItem title=\"面板2\" name=\"2\">内容2</FCollapseItem>\n</FCollapse>\n[最佳实践] 适用于FAQ等需要限制同时展开面板数量的场景"
    },
    {
      "input": "左侧箭头",
      "output": "<!-- correct -->\n[场景说明] 箭头显示在左侧的折叠面板\n[代码实现]\n<FCollapse v-model=\"activeNames\" arrow=\"left\">\n  <FCollapseItem title=\"面板1\" name=\"1\">内容1</FCollapseItem>\n</FCollapse>\n[最佳实践] 需要与左侧内容对齐时使用"
    },
    {
      "input": "自定义标题",
      "output": "<!-- correct -->\n[场景说明] 使用插槽自定义面板标题\n[代码实现]\n<FCollapse>\n  <FCollapseItem name=\"1\">\n    <template #title>\n      <span>自定义标题 <FIcon name=\"info\" /></span>\n    </template>\n    内容\n  </FCollapseItem>\n</FCollapse>\n[最佳实践] 需要在标题中添加图标或其他自定义内容时使用"
    },
    {
      "input": "禁用深色背景",
      "output": "<!-- correct -->\n[场景说明] 不使用嵌入式深色背景的折叠面板\n[代码实现]\n<FCollapse v-model=\"activeNames\" :embedded=\"false\">\n  <FCollapseItem title=\"面板1\" name=\"1\">内容1</FCollapseItem>\n</FCollapse>\n[最佳实践] 需要更简洁的视觉风格时使用"
    },
    {
      "input": "错误示例：手风琴模式使用数组v-model",
      "output": "<!-- error -->\n[错误分析] 手风琴模式下v-model应为string类型，但使用了array类型\n[正确代码]\n<FCollapse v-model=\"activeName\" accordion>\n  <FCollapseItem title=\"面板1\" name=\"1\">内容1</FCollapseItem>\n</FCollapse>\n[注意事项] 手风琴模式与普通模式的v-model类型不同，需特别注意"
    },
    {
      "input": "错误示例：缺少必要name属性",
      "output": "<!-- error -->\n[错误分析] FCollapseItem缺少必需的name属性\n[正确代码]\n<FCollapse>\n  <FCollapseItem name=\"1\" title=\"面板1\">内容1</FCollapseItem>\n</FCollapse>\n[注意事项] 每个FCollapseItem必须设置唯一的name标识"
    },
    {
      "input": "边界条件：空折叠面板",
      "output": "<!-- correct -->\n[场景说明] 没有内容的折叠面板处理\n[代码实现]\n<FCollapse v-model=\"activeNames\">\n  <!-- 无FCollapseItem -->\n</FCollapse>\n[最佳实践] 需要处理空状态时添加占位提示"
    },
    {
      "input": "边界条件：大量面板",
      "output": "<!-- correct -->\n[场景说明] 包含大量面板时的性能优化\n[代码实现]\n<FCollapse>\n  <template v-for=\"item in 50\" :key=\"item\">\n    <FCollapseItem :title=\"'面板' + item\" :name=\"item\">\n      内容{{item}}\n    </FCollapseItem>\n  </template>\n</FCollapse>\n[最佳实践] 使用虚拟滚动优化大量面板的性能"
    },
    {
      "input": "组合使用：与表单组件配合",
      "output": "<!-- correct -->\n[场景说明] 折叠面板内嵌表单组件\n[代码实现]\n<FCollapse>\n  <FCollapseItem title=\"个人信息\" name=\"1\">\n    <FForm>\n      <FFormItem label=\"姓名\"><FInput /></FFormItem>\n    </FForm>\n  </FCollapseItem>\n</FCollapse>\n[最佳实践] 适用于分组表单场景"
    },
    {
      "input": "折叠面版怎么用？",
      "output": "<!-- correct -->\n[场景说明] 基础折叠面板使用示例\n[代码实现]\n<FCollapse v-model=\"activeNames\">\n  <FCollapseItem title=\"帮助\" name=\"1\">\n    这里是帮助内容\n  </FCollapseItem>\n</FCollapse>\n[最佳实践] 注意每个FCollapseItem需要设置唯一的name"
    },
    {
      "input": "我想让箭头在左边",
      "output": "<!-- correct -->\n[场景说明] 箭头显示在左侧的配置\n[代码实现]\n<FCollapse arrow=\"left\">\n  <FCollapseItem title=\"面板\" name=\"1\">内容</FCollapseItem>\n</FCollapse>\n[最佳实践] 需要与左侧内容对齐时使用此配置"
    },
    {
      "input": "背景太深了能改吗",
      "output": "<!-- correct -->\n[场景说明] 禁用深色背景的配置\n[代码实现]\n<FCollapse :embedded=\"false\">\n  <FCollapseItem title=\"面板\" name=\"1\">内容</FCollapseItem>\n</FCollapse>\n[最佳实践] 需要更简洁的视觉风格时使用"
    },
    {
      "input": "样式覆盖：自定义面板样式",
      "output": "<!-- correct -->\n[场景说明] 通过CSS覆盖默认样式\n[代码实现]\n<style>\n.f-collapse-item {\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n</style>\n<FCollapse>\n  <FCollapseItem title=\"面板\" name=\"1\">内容</FCollapseItem>\n</FCollapse>\n[最佳实践] 使用scoped样式避免污染全局样式"
    }
  ]
};
