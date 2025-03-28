import type { IComponentMetadata } from '../type';

export const menuMeta: IComponentMetadata = {
  "title": "菜单",
  "componentName": "FMenu",
  "description": "为网站提供导航功能的菜单组件，支持水平、垂直两种布局模式，可配置折叠、反色、手风琴等多种交互效果。适用于系统导航、功能分类等场景。",
  "scenarios": [
    "系统主导航：使用水平模式作为页面顶部导航菜单，清晰展示系统功能模块",
    "侧边栏导航：使用垂直模式作为侧边栏导航，支持折叠功能节省空间",
    "多级分类：通过子菜单实现多级分类导航，适用于复杂业务系统",
    "权限控制：根据用户权限动态生成菜单选项，实现权限控制",
    "响应式布局：在不同屏幕尺寸下自动切换水平/垂直模式"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FSubMenu",
    "FMenuItem",
    "FMenuGroup"
  ],
  "propRelations": [
    {
      "source": "mode",
      "target": "collapsed",
      "effect": "仅在垂直模式下支持折叠功能",
      "notes": [
        "水平模式下折叠属性无效",
        "适用于需要响应式布局的场景"
      ]
    },
    {
      "source": "expandedKeys",
      "target": "defaultExpandAll",
      "effect": "当设置expandedKeys时defaultExpandAll失效",
      "notes": [
        "优先级：expandedKeys > defaultExpandAll",
        "适用于需要精确控制展开状态的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "选中菜单",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "当前选中菜单项的value值，支持双向绑定",
      "example": "1"
    },
    {
      "name": "mode",
      "title": "布局模式",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "horizontal",
            "title": "水平",
            "usage": "适用于顶部导航栏等场景"
          },
          {
            "value": "vertical",
            "title": "垂直",
            "usage": "适用于侧边栏导航等场景"
          }
        ]
      },
      "description": "菜单的布局方向",
      "defaultValue": "horizontal",
      "example": "vertical"
    },
    {
      "name": "collapsed",
      "title": "折叠状态",
      "valueType": "bool",
      "description": "是否折叠收起菜单（仅在垂直模式下有效）",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "inverted",
      "title": "反色样式",
      "valueType": "bool",
      "description": "是否使用反色主题样式",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "defaultExpandAll",
      "title": "默认展开全部",
      "valueType": "bool",
      "description": "是否默认展开所有子菜单",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "expandedKeys",
      "title": "展开菜单项",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "oneOfType",
          "value": [
            "string",
            "number"
          ]
        }
      },
      "description": "当前展开的子菜单value数组，支持双向绑定",
      "example": [
        "1",
        "2"
      ]
    },
    {
      "name": "accordion",
      "title": "手风琴模式",
      "valueType": "bool",
      "description": "是否只允许同时展开一个子菜单",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "options",
      "title": "菜单配置",
      "valueType": "array",
      "description": "通过配置生成菜单的数据数组",
      "example": [
        {
          "label": "首页",
          "value": "home"
        }
      ]
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "returnType": "HTMLElement"
      },
      "description": "自定义菜单弹出层的挂载容器",
      "example": "() => document.getElementById('container')"
    },
    {
      "name": "appendToContainer",
      "title": "附加到容器",
      "valueType": "bool",
      "description": "是否将弹出层附加到指定容器",
      "defaultValue": true,
      "example": false
    }
  ],
  "events": [
    {
      "name": "select",
      "description": "当菜单项被选中时触发",
      "parameters": [
        {
          "name": "item",
          "type": "{value: string | number}",
          "description": "包含选中菜单项的value值"
        }
      ]
    }
  ],
  "templates": [
    {
      "input": "基础水平菜单",
      "output": "<!-- correct -->\n<FMenu>\n  <FMenuItem value=\"home\" label=\"首页\" />\n  <FMenuItem value=\"about\" label=\"关于\" />\n</FMenu>\n[场景说明] 创建基础水平导航菜单\n[最佳实践] 适用于简单的顶部导航场景"
    },
    {
      "input": "带图标的垂直菜单",
      "output": "<!-- correct -->\n<FMenu mode=\"vertical\">\n  <FSubMenu value=\"products\">\n    <template #icon><AppstoreOutlined /></template>\n    <template #label>产品</template>\n    <FMenuItem value=\"product1\" label=\"产品1\" />\n  </FSubMenu>\n</FMenu>\n[场景说明] 创建带图标的垂直菜单\n[最佳实践] 图标使用插槽方式传入，保持样式统一"
    },
    {
      "input": "折叠菜单",
      "output": "<!-- correct -->\n<FMenu mode=\"vertical\" :collapsed=\"true\">\n  <FSubMenu value=\"products\">\n    <template #icon><AppstoreOutlined /></template>\n  </FSubMenu>\n</FMenu>\n[场景说明] 创建折叠状态的垂直菜单\n[注意事项] 必须设置mode为vertical才有效"
    },
    {
      "input": "手风琴菜单",
      "output": "<!-- correct -->\n<FMenu mode=\"vertical\" accordion>\n  <FSubMenu value=\"1\" label=\"菜单1\" />\n  <FSubMenu value=\"2\" label=\"菜单2\" />\n</FMenu>\n[场景说明] 创建手风琴效果的菜单\n[最佳实践] 适用于需要节省空间的场景"
    },
    {
      "input": "反色主题菜单",
      "output": "<!-- correct -->\n<FMenu inverted>\n  <FMenuItem value=\"home\" label=\"首页\" />\n</FMenu>\n[场景说明] 创建深色主题的菜单\n[注意事项] 需要配合适当的背景色使用"
    },
    {
      "input": "配置式菜单",
      "output": "<!-- correct -->\n<FMenu :options=\"[\n  {label:'首页',value:'home'},\n  {label:'关于',value:'about'}\n]\" />\n[场景说明] 通过配置生成菜单\n[最佳实践] 适合动态菜单场景"
    },
    {
      "input": "默认展开全部",
      "output": "<!-- correct -->\n<FMenu defaultExpandAll>\n  <FSubMenu value=\"1\" label=\"菜单1\">\n    <FMenuItem value=\"1-1\" label=\"子项1\" />\n  </FSubMenu>\n</FMenu>\n[场景说明] 创建默认展开所有子菜单的菜单\n[注意事项] 与expandedKeys同时使用时优先级较低"
    },
    {
      "input": "控制展开项",
      "output": "<!-- correct -->\n<FMenu :expandedKeys=\"['1']\">\n  <FSubMenu value=\"1\" label=\"菜单1\">\n    <FMenuItem value=\"1-1\" label=\"子项1\" />\n  </FSubMenu>\n</FMenu>\n[场景说明] 精确控制展开的子菜单\n[最佳实践] 适合需要编程控制展开状态的场景"
    },
    {
      "input": "错误的mode值",
      "output": "<!-- error -->\n<FMenu mode=\"diagonal\">\n[错误分析] mode只能取值horizontal或vertical\n[正确代码] <FMenu mode=\"horizontal\">\n[注意事项] 使用枚举值确保兼容性"
    },
    {
      "input": "缺少必要value",
      "output": "<!-- error -->\n<FMenuItem label=\"首页\" />\n[错误分析] MenuItem必须设置value属性\n[正确代码] <FMenuItem value=\"home\" label=\"首页\" />\n[注意事项] value是菜单项的唯一标识"
    },
    {
      "input": "无效的折叠设置",
      "output": "<!-- error -->\n<FMenu mode=\"horizontal\" :collapsed=\"true\">\n[错误分析] 水平模式不支持折叠\n[正确代码] <FMenu mode=\"vertical\" :collapsed=\"true\">\n[注意事项] 折叠功能仅在垂直模式下有效"
    },
    {
      "input": "空菜单",
      "output": "<!-- correct -->\n<FMenu />\n[场景说明] 空状态菜单\n[最佳实践] 适合动态加载菜单的场景"
    },
    {
      "input": "极深嵌套",
      "output": "<!-- correct -->\n<FMenu>\n  <FSubMenu value=\"1\">\n    <FSubMenu value=\"1-1\">\n      <FSubMenu value=\"1-1-1\">\n        <!-- 更多层级 -->\n      </FSubMenu>\n    </FSubMenu>\n  </FSubMenu>\n</FMenu>\n[场景说明] 测试菜单的深度限制\n[注意事项] 过深嵌套可能影响用户体验"
    },
    {
      "input": "超长菜单项",
      "output": "<!-- correct -->\n<FMenu>\n  <FMenuItem value=\"long\" label=\"这是一个非常非常非常非常非常非常长的菜单项名称\" />\n</FMenu>\n[场景说明] 测试菜单项文本溢出处理\n[最佳实践] 考虑添加tooltip或截断处理"
    },
    {
      "input": "怎么搞个菜单？",
      "output": "<!-- correct -->\n<FMenu>\n  <FMenuItem value=\"home\" label=\"首页\" />\n</FMenu>\n[场景说明] 创建基础菜单\n[最佳实践] 最简单的菜单实现方式"
    },
    {
      "input": "菜单咋折叠啊",
      "output": "<!-- correct -->\n<FMenu mode=\"vertical\" :collapsed=\"true\">\n  <FMenuItem value=\"home\" label=\"首页\" />\n</FMenu>\n[场景说明] 创建可折叠的垂直菜单\n[注意事项] 必须设置mode为vertical"
    },
    {
      "input": "菜单颜色不对",
      "output": "<!-- correct -->\n<FMenu inverted>\n  <FMenuItem value=\"home\" label=\"首页\" />\n</FMenu>\n[场景说明] 使用反色主题\n[注意事项] 需要配合适当的背景色使用"
    },
    {
      "input": "自定义菜单样式",
      "output": "<!-- correct -->\n<FMenu class=\"custom-menu\">\n  <FMenuItem value=\"home\" label=\"首页\" />\n</FMenu>\n<style>\n.custom-menu {\n  background: #f0f0f0;\n}\n</style>\n[场景说明] 自定义菜单样式\n[最佳实践] 通过class覆盖默认样式"
    },
    {
      "input": "菜单与布局组合",
      "output": "<!-- correct -->\n<FLayout>\n  <FHeader>\n    <FMenu>\n      <FMenuItem value=\"home\" label=\"首页\" />\n    </FMenu>\n  </FHeader>\n</FLayout>\n[场景说明] 菜单在布局系统中的使用\n[最佳实践] 与布局组件配合实现完整页面"
    },
    {
      "input": "菜单与路由集成",
      "output": "<!-- correct -->\n<template>\n  <FMenu v-model=\"currentRoute\">\n    <FMenuItem value=\"/home\" label=\"首页\" />\n  </FMenu>\n</template>\n<script setup>\nimport { useRouter } from 'vue-router';\nconst router = useRouter();\nconst currentRoute = ref('');\nwatch(currentRoute, (val) => {\n  router.push(val);\n});\n</script>\n[场景说明] 菜单与路由集成\n[最佳实践] 通过v-model实现路由跳转"
    }
  ]
};
