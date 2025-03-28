import type { IComponentMetadata } from '../type';

export const layoutMeta: IComponentMetadata = {
  "title": "布局容器",
  "componentName": "FLayout",
  "description": "基础布局容器组件，提供页面整体布局结构。支持嵌套Header、Aside、Main、Footer等子组件，可灵活组合多种布局方式。默认水平布局，当包含Header或Footer时自动切换为垂直布局。",
  "scenarios": [
    "后台管理系统：使用FLayout构建整体框架，包含顶部导航栏(FHeader)、侧边菜单栏(FAside)和内容区域(FMain)，实现标准后台管理布局。",
    "门户网站首页：通过FLayout嵌套组合，实现复杂的多栏布局，包含页眉、内容区和页脚，支持响应式设计。",
    "移动端应用：利用fixed模式实现固定定位的头部和底部导航，中间内容区域可滚动，提升移动端用户体验。",
    "数据看板：使用embedded属性增强内容区域的视觉层次，突出数据展示区域，适合数据可视化场景。",
    "表单页面：通过FLayout组织表单结构，保持表单元素的整齐排列和合理间距，提升表单填写体验。",
    "文档网站：构建文档阅读页面，左侧为目录导航(FAside)，右侧为文档内容(FMain)，支持目录固定和内容滚动。",
    "仪表盘：使用多层FLayout嵌套，实现复杂的仪表盘布局，支持各区域独立配置样式和行为。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FHeader",
    "FAside",
    "FMain",
    "FFooter",
    "FLayout"
  ],
  "propRelations": [
    {
      "source": "fixed",
      "target": "containerStyle",
      "effect": "启用fixed模式时，建议设置top/bottom/left/right样式属性",
      "notes": [
        "fixed模式会将position设为absolute",
        "需要手动设置定位偏移量才能正确显示"
      ]
    },
    {
      "source": "embedded",
      "target": "containerStyle",
      "effect": "启用embedded模式时，建议设置背景色以增强视觉层次",
      "notes": [
        "embedded模式会使用更深的背景色",
        "适合需要突出内容区域的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "embedded",
      "title": "反色背景",
      "valueType": "bool",
      "description": "是否使用更深的背景色展现嵌入效果，增强内容区域的视觉层次",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "fixed",
      "title": "浮动模式",
      "valueType": "bool",
      "description": "是否启用固定定位模式，将position设为absolute并自动设置四边偏移为0",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "containerClass",
      "title": "容器类名",
      "valueType": "string",
      "description": "可滚动内容节点的自定义类名，用于覆盖默认样式",
      "example": "custom-container"
    },
    {
      "name": "containerStyle",
      "title": "容器样式",
      "valueType": "object",
      "description": "可滚动内容节点的内联样式对象，支持动态设置样式",
      "example": {
        "backgroundColor": "#f5f5f5",
        "padding": "20px"
      }
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "布局容器的内容区域，用于放置子组件",
      "required": true
    }
  ],
  "templates": [
    {
      "input": "基础上下布局",
      "output": "[场景说明] 构建包含顶部导航和底部页脚的标准页面布局\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FHeader />\n    <FMain />\n    <FFooter />\n  </FLayout>\n</template>\n[最佳实践] 适用于大多数网站的基本布局结构"
    },
    {
      "input": "左右布局带侧边栏",
      "output": "[场景说明] 实现左侧固定侧边栏和右侧内容区的经典布局\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FAside />\n    <FLayout>\n      <FHeader />\n      <FMain />\n    </FLayout>\n  </FLayout>\n</template>\n[最佳实践] 适合后台管理系统的主界面布局"
    },
    {
      "input": "固定定位布局",
      "output": "[场景说明] 创建固定头部和底部，中间内容可滚动的移动端友好布局\n[代码实现] <!-- correct -->\n<template>\n  <FLayout style=\"height: 100vh\">\n    <FHeader fixed />\n    <FMain />\n    <FFooter fixed />\n  </FLayout>\n</template>\n[最佳实践] 需要设置容器高度，fixed元素会自动吸附到顶部和底部"
    },
    {
      "input": "混合布局结构",
      "output": "[场景说明] 组合多种布局方式构建复杂的页面结构\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FHeader />\n    <FLayout>\n      <FAside />\n      <FLayout>\n        <FMain />\n        <FFooter />\n      </FLayout>\n    </FLayout>\n  </FLayout>\n</template>\n[最佳实践] 适用于需要多层级布局的复杂页面"
    },
    {
      "input": "嵌入效果布局",
      "output": "[场景说明] 使用embedded属性突出内容区域的视觉层次\n[代码实现] <!-- correct -->\n<template>\n  <FLayout embedded>\n    <FMain>\n      <div class=\"content\">主要内容</div>\n    </FMain>\n  </FLayout>\n</template>\n[最佳实践] 适合需要强调内容区域的场景，如数据看板"
    },
    {
      "input": "缺少子组件",
      "output": "[错误分析] FLayout必须包含至少一个子组件才能形成有效布局\n[正确代码] <!-- correct -->\n<template>\n  <FLayout>\n    <FMain>内容</FMain>\n  </FLayout>\n</template>\n[注意事项] 确保FLayout内部包含有效的布局子组件"
    },
    {
      "input": "错误嵌套顺序",
      "output": "[错误分析] FHeader不能直接嵌套在FAside内部，必须遵循布局组件的嵌套规则\n[正确代码] <!-- correct -->\n<template>\n  <FLayout>\n    <FHeader />\n    <FAside />\n  </FLayout>\n</template>\n[注意事项] 遵循FHeader/FAside/FMain/FFooter的标准嵌套顺序"
    },
    {
      "input": "fixed模式未设置高度",
      "output": "[错误分析] 使用fixed模式时必须显式设置容器高度，否则布局会失效\n[正确代码] <!-- correct -->\n<template>\n  <FLayout style=\"height: 100vh\" fixed>\n    <FHeader fixed />\n    <FMain />\n  </FLayout>\n</template>\n[注意事项] fixed布局需要明确的容器高度才能正确计算定位"
    },
    {
      "input": "怎么让布局背景变深色",
      "output": "[场景说明] 使用embedded属性实现深色背景的布局效果\n[代码实现] <!-- correct -->\n<template>\n  <FLayout embedded>\n    <FMain>深色背景内容</FMain>\n  </FLayout>\n</template>\n[最佳实践] embedded属性会自动应用深色背景样式"
    },
    {
      "input": "如何实现固定顶部导航",
      "output": "[场景说明] 使用fixed属性实现固定定位的顶部导航栏\n[代码实现] <!-- correct -->\n<template>\n  <FLayout style=\"height: 100vh\">\n    <FHeader fixed />\n    <FMain />\n  </FLayout>\n</template>\n[最佳实践] 需要同时设置容器高度和fixed属性"
    },
    {
      "input": "zuo you bu ju zen me zuo",
      "output": "[场景说明] 实现左右布局（带拼音错别字）\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FAside />\n    <FMain />\n  </FLayout>\n</template>\n[最佳实践] 使用FAside作为左侧栏，FMain作为右侧内容区"
    },
    {
      "input": "覆盖布局容器样式",
      "output": "[场景说明] 通过containerStyle自定义布局容器样式\n[代码实现] <!-- correct -->\n<template>\n  <FLayout :containerStyle=\"{ backgroundColor: '#f0f2f5', padding: '20px' }\">\n    <FMain>自定义样式内容</FMain>\n  </FLayout>\n</template>\n[最佳实践] 使用内联样式对象灵活覆盖默认样式"
    },
    {
      "input": "与表格组件组合使用",
      "output": "[场景说明] 在布局容器中嵌入表格组件\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FHeader />\n    <FMain>\n      <FTable :data=\"data\" />\n    </FMain>\n  </FLayout>\n</template>\n[最佳实践] 将数据展示组件放在FMain内容区域内"
    },
    {
      "input": "与表单组件组合使用",
      "output": "[场景说明] 在布局容器中构建表单页面\n[代码实现] <!-- correct -->\n<template>\n  <FLayout>\n    <FHeader title=\"表单页面\" />\n    <FMain>\n      <FForm :model=\"form\" />\n    </FMain>\n  </FLayout>\n</template>\n[最佳实践] 使用FLayout组织表单页面的整体结构"
    }
  ]
};
