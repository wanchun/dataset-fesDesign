import type { IComponentMetadata } from '../type';

export const footerMeta: IComponentMetadata = {
  "title": "容器底部",
  "componentName": "FFooter",
  "description": "布局容器底部组件，用于页面底部区域的固定或浮动展示。支持边框样式和背景色配置，适用于页面布局的底部固定区域。",
  "scenarios": [
    "页面底部固定：使用fixed模式固定在页面底部，适合需要常驻底部操作栏的场景。",
    "表单底部操作：在表单底部使用bordered模式，清晰区分操作区域和内容区域。",
    "暗色主题布局：使用embedded模式适配暗色主题的页面底部布局。",
    "管理后台布局：作为管理后台页面布局的底部容器，承载版权信息等固定内容。",
    "移动端页面：在移动端页面中作为底部导航栏的容器，保持固定位置。"
  ],
  "parent": {
    "types": [],
    "restrictions": [
      {
        "parent": "FLayout",
        "description": "必须作为布局组件的子组件使用"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "fixed",
      "target": "embedded",
      "effect": "固定模式下反色背景效果更明显",
      "notes": [
        "当fixed为true时，建议配合embedded使用增强视觉层次"
      ]
    }
  ],
  "props": [
    {
      "name": "fixed",
      "title": "浮动模式",
      "valueType": "bool",
      "description": "是否固定在页面底部",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "bordered",
      "title": "边框",
      "valueType": "bool",
      "description": "是否显示顶部边框",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "embedded",
      "title": "反色背景",
      "valueType": "bool",
      "description": "是否使用深色背景",
      "defaultValue": false,
      "example": false
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "底部内容区域",
      "required": false
    }
  ],
  "templates": [
    {
      "input": "基础底部容器",
      "output": "<!-- correct -->\n[场景说明] 基本页面底部容器\n[代码实现]\n<FFooter>\n  版权信息 © 2023\n</FFooter>\n[最佳实践] 用于展示简单的版权信息"
    },
    {
      "input": "固定底部操作栏",
      "output": "<!-- correct -->\n[场景说明] 固定底部的操作按钮栏\n[代码实现]\n<FFooter fixed>\n  <FButton type=\"primary\">提交</FButton>\n</FFooter>\n[最佳实践] 适合表单提交等需要固定操作按钮的场景"
    },
    {
      "input": "带边框的底部",
      "output": "<!-- correct -->\n[场景说明] 带分隔线的底部区域\n[代码实现]\n<FFooter bordered>\n  页脚内容\n</FFooter>\n[最佳实践] 用于需要视觉分隔的场景"
    },
    {
      "input": "暗色主题底部",
      "output": "<!-- correct -->\n[场景说明] 适配暗色主题的底部\n[代码实现]\n<FFooter embedded>\n  暗色底部内容\n</FFooter>\n[最佳实践] 在暗色主题下使用增强视觉对比"
    },
    {
      "input": "复合底部布局",
      "output": "<!-- correct -->\n[场景说明] 包含多元素的底部布局\n[代码实现]\n<FFooter fixed bordered>\n  <div>左侧内容</div>\n  <div>右侧内容</div>\n</FFooter>\n[最佳实践] 适合需要分栏布局的复杂底部"
    },
    {
      "input": "错误：缺少父容器",
      "output": "<!-- error -->\n[错误分析] FFooter必须作为FLayout的子组件使用\n[正确代码]\n<FLayout>\n  <FFooter>正确用法</FFooter>\n</FLayout>\n[注意事项] 布局组件需要正确的父子关系"
    },
    {
      "input": "错误：同时使用fixed和embedded",
      "output": "<!-- error -->\n[错误分析] 同时使用fixed和embedded可能导致样式冲突\n[正确代码]\n<FFooter fixed>\n  推荐单独使用fixed\n</FFooter>\n[注意事项] 根据实际需求选择单一模式"
    },
    {
      "input": "空状态底部",
      "output": "<!-- correct -->\n[场景说明] 空内容的底部容器\n[代码实现]\n<FFooter />\n[最佳实践] 可用于占位或动态内容加载场景"
    },
    {
      "input": "如何让底部固定在下面",
      "output": "<!-- correct -->\n[场景说明] 固定底部实现\n[代码实现]\n<FFooter fixed>\n  固定内容\n</FFooter>\n[最佳实践] 使用fixed属性实现固定效果"
    },
    {
      "input": "底部有边框怎么弄",
      "output": "<!-- correct -->\n[场景说明] 带边框的底部实现\n[代码实现]\n<FFooter bordered>\n  带边框内容\n</FFooter>\n[最佳实践] 使用bordered属性添加顶部边框"
    },
    {
      "input": "底部背景色不对",
      "output": "<!-- error -->\n[错误分析] 可能需要使用embedded属性\n[正确代码]\n<FFooter embedded>\n  深色背景内容\n</FFooter>\n[注意事项] embedded会改变背景色系"
    },
    {
      "input": "底部内容太多放不下",
      "output": "<!-- correct -->\n[场景说明] 内容过载处理\n[代码实现]\n<FFooter style=\"height: auto; padding: 16px 0\">\n  长内容区域\n</FFooter>\n[最佳实践] 通过自定义样式调整高度和间距"
    },
    {
      "input": "底部和布局组合使用",
      "output": "<!-- correct -->\n[场景说明] 完整布局结构\n[代码实现]\n<FLayout>\n  <FHeader>头部</FHeader>\n  <FContent>内容</FContent>\n  <FFooter>底部</FFooter>\n</FLayout>\n[最佳实践] 完整的布局组件组合方案"
    },
    {
      "input": "自定义底部样式",
      "output": "<!-- correct -->\n[场景说明] 自定义样式的底部\n[代码实现]\n<FFooter style={{ background: '#f0f0f0', padding: '24px' }}>\n  自定义样式内容\n</FFooter>\n[最佳实践] 通过style属性覆盖默认样式"
    }
  ]
};
