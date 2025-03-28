import type { IComponentMetadata } from '../type';

export const drawerMeta: IComponentMetadata = {
  "title": "抽屉",
  "componentName": "FDrawer",
  "description": "抽屉组件用于在当前页面承载较多操作内容的场景，支持从不同方向滑出，提供丰富的配置选项和交互控制。",
  "scenarios": [
    "表单扩展：在表单需要展示额外配置项时使用抽屉，保持页面上下文同时扩展操作空间。",
    "详情查看：点击列表项后从右侧滑出详情抽屉，避免页面跳转带来的上下文丢失。",
    "配置面板：从底部滑出配置面板，支持复杂参数调整和实时预览。",
    "多步骤操作：在复杂流程中分步骤展示操作内容，通过抽屉保持流程连贯性。",
    "侧边导航：在移动端或紧凑布局中作为侧边导航容器使用。",
    "批量操作：从顶部滑出批量操作面板，支持对列表项进行批量处理。",
    "临时编辑：在表格行内点击编辑时滑出编辑抽屉，保持数据上下文。",
    "向导流程：分步骤展示向导内容，通过抽屉保持流程引导的连续性。",
    "设置中心：从右侧滑出系统设置面板，集中管理系统配置项。"
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
      "source": "mask",
      "target": "operable",
      "effect": "当mask为false时operable才生效",
      "notes": [
        "不显示蒙层时才需要考虑页面交互状态"
      ]
    },
    {
      "source": "resizable",
      "target": [
        "resizeMax",
        "resizeMin"
      ],
      "effect": "当resizable为true时才需要配置尺寸限制",
      "notes": [
        "可拖拽功能开启后才需要设置最大最小尺寸"
      ]
    }
  ],
  "props": [
    {
      "name": "show",
      "title": "显示状态",
      "valueType": "bool",
      "description": "控制抽屉的显示与隐藏，使用v-model双向绑定",
      "defaultValue": false,
      "required": true,
      "example": false
    },
    {
      "name": "displayDirective",
      "title": "渲染指令",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "show",
            "title": "显示指令",
            "usage": "使用v-show指令，保持组件状态不被重置"
          },
          {
            "value": "if",
            "title": "条件指令",
            "usage": "使用v-if指令，每次打开会重新渲染组件"
          }
        ]
      },
      "description": "选择渲染使用的指令，影响组件的生命周期行为",
      "defaultValue": "show",
      "example": "show"
    },
    {
      "name": "closable",
      "title": "可关闭",
      "valueType": "bool",
      "description": "是否显示右上角关闭图标",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "mask",
      "title": "蒙层",
      "valueType": "bool",
      "description": "是否显示遮罩层",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "maskClosable",
      "title": "点击蒙层关闭",
      "valueType": "bool",
      "description": "点击遮罩层是否允许关闭抽屉",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "escClosable",
      "title": "ESC关闭",
      "valueType": "bool",
      "description": "按下ESC键是否允许关闭抽屉",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "operable",
      "title": "页面可交互",
      "valueType": "bool",
      "description": "仅mask为false时生效，控制不显示蒙层时页面是否可交互",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "title",
      "title": "标题",
      "valueType": "string",
      "description": "抽屉的标题文字",
      "example": "设置面板"
    },
    {
      "name": "footer",
      "title": "显示底部",
      "valueType": "bool",
      "description": "是否显示底部操作区域",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "footerBorder",
      "title": "底部分割线",
      "valueType": "bool",
      "description": "是否显示底部分割线",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "okText",
      "title": "确认文字",
      "valueType": "string",
      "description": "确认按钮显示的文字",
      "defaultValue": "确定",
      "example": "确定"
    },
    {
      "name": "okLoading",
      "title": "确认加载",
      "valueType": "bool",
      "description": "确认按钮的加载状态",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "showCancel",
      "title": "显示取消",
      "valueType": "bool",
      "description": "是否显示取消按钮",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "cancelText",
      "title": "取消文字",
      "valueType": "string",
      "description": "取消按钮显示的文字",
      "defaultValue": "取消",
      "example": "取消"
    },
    {
      "name": "dimension",
      "title": "尺寸",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "抽屉的尺寸，支持像素值或百分比",
      "defaultValue": "520",
      "example": "600px"
    },
    {
      "name": "placement",
      "title": "位置",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "top",
            "title": "顶部",
            "usage": "从顶部滑出，适合通知类内容"
          },
          {
            "value": "bottom",
            "title": "底部",
            "usage": "从底部滑出，适合操作面板"
          },
          {
            "value": "left",
            "title": "左侧",
            "usage": "从左侧滑出，适合导航菜单"
          },
          {
            "value": "right",
            "title": "右侧",
            "usage": "从右侧滑出，适合详情展示"
          }
        ]
      },
      "description": "抽屉的弹出方向",
      "defaultValue": "right",
      "example": "right"
    },
    {
      "name": "contentClass",
      "title": "内容类名",
      "valueType": "string",
      "description": "自定义内容区域的样式类名",
      "example": "custom-content"
    },
    {
      "name": "wrapperClass",
      "title": "容器类名",
      "valueType": "string",
      "description": "自定义抽屉根容器的样式类名",
      "example": "custom-wrapper"
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "returnType": "HTMLElement"
      },
      "description": "指定抽屉挂载的DOM节点",
      "example": "() => document.body"
    },
    {
      "name": "resizable",
      "title": "可调整尺寸",
      "valueType": "bool",
      "description": "是否支持宽度/高度拖拽调整",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "resizeMax",
      "title": "最大尺寸",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "可拖拽的最大尺寸限制",
      "example": "800px"
    },
    {
      "name": "resizeMin",
      "title": "最小尺寸",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "可拖拽的最小尺寸限制",
      "example": "300px"
    }
  ],
  "events": [
    {
      "name": "onUpdate:show",
      "description": "显示状态变化事件",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "当前的显示状态"
        }
      ]
    },
    {
      "name": "onOk",
      "description": "确认按钮点击事件",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        }
      ]
    },
    {
      "name": "onCancel",
      "description": "取消按钮点击事件",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        }
      ]
    },
    {
      "name": "onAfterEnter",
      "description": "打开动画完成事件",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "抽屉DOM元素"
        }
      ]
    },
    {
      "name": "onAfterLeave",
      "description": "关闭动画完成事件",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "抽屉DOM元素"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "抽屉的主要内容区域",
      "required": true
    },
    {
      "name": "title",
      "description": "自定义标题区域内容",
      "required": false
    },
    {
      "name": "footer",
      "description": "自定义底部操作区域内容",
      "required": false
    }
  ],
  "templates": [
    {
      "input": "基础抽屉",
      "output": "<!-- correct -->\n[场景说明] 最基本的抽屉使用方式，包含标题和内容区域\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"基础抽屉\">\n  <div>这里是抽屉内容...</div>\n</FDrawer>\n[最佳实践] 适用于简单的信息展示场景"
    },
    {
      "input": "没有标题的抽屉",
      "output": "<!-- correct -->\n[场景说明] 不显示标题的简洁抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\">\n  <div>无标题的抽屉内容...</div>\n</FDrawer>\n[最佳实践] 适用于不需要强调标题的简单场景"
    },
    {
      "input": "从顶部弹出的抽屉",
      "output": "<!-- correct -->\n[场景说明] 从顶部滑出的通知类抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"通知\" placement=\"top\">\n  <div>这里是顶部抽屉内容...</div>\n</FDrawer>\n[最佳实践] 适合展示系统通知或快捷操作"
    },
    {
      "input": "自定义底部按钮",
      "output": "<!-- correct -->\n[场景说明] 自定义底部操作按钮的抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"设置\" :footer=\"true\">\n  <template #footer>\n    <FSpace justify=\"end\">\n      <FButton>取消</FButton>\n      <FButton type=\"primary\">确认</FButton>\n    </FSpace>\n  </template>\n  <div>设置内容...</div>\n</FDrawer>\n[最佳实践] 适用于需要自定义操作的复杂场景"
    },
    {
      "input": "可拖拽尺寸的抽屉",
      "output": "<!-- correct -->\n[场景说明] 支持调整尺寸的抽屉\n[代码实现]\n<FDrawer \n  v-model:show=\"show\" \n  title=\"可调整\" \n  resizable \n  :resizeMin=\"300\" \n  :resizeMax=\"800\">\n  <div>可拖拽调整大小的内容...</div>\n</FDrawer>\n[最佳实践] 适合需要灵活调整大小的场景"
    },
    {
      "input": "异步提交的抽屉",
      "output": "<!-- correct -->\n[场景说明] 处理异步提交操作的抽屉\n[代码实现]\n<FDrawer \n  v-model:show=\"show\" \n  title=\"提交\" \n  :okLoading=\"loading\" \n  @ok=\"handleSubmit\">\n  <div>表单内容...</div>\n</FDrawer>\n[最佳实践] 处理需要等待服务器响应的提交操作"
    },
    {
      "input": "没有遮罩的抽屉",
      "output": "<!-- correct -->\n[场景说明] 不显示遮罩层的抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"无遮罩\" :mask=\"false\">\n  <div>无遮罩的内容...</div>\n</FDrawer>\n[最佳实践] 适用于需要同时操作背景内容的场景"
    },
    {
      "input": "自定义标题的抽屉",
      "output": "<!-- correct -->\n[场景说明] 自定义标题区域的抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\">\n  <template #title>\n    <div style=\"display: flex; align-items: center;\">\n      <EditOutlined style=\"margin-right: 8px\" />\n      <span>自定义标题</span>\n    </div>\n  </template>\n  <div>内容区域...</div>\n</FDrawer>\n[最佳实践] 需要增强标题展示效果的场景"
    },
    {
      "input": "抽屉没有绑定show属性",
      "output": "<!-- error -->\n[错误分析] 缺少必要的v-model:show绑定，抽屉无法控制显示状态\n[正确代码]\n<FDrawer v-model:show=\"show\" title=\"正确示例\">\n  <div>内容...</div>\n</FDrawer>\n[注意事项] show属性是必填项，必须使用v-model双向绑定"
    },
    {
      "input": "给抽屉设置了错误的placement值",
      "output": "<!-- error -->\n[错误分析] placement值必须是'top'/'bottom'/'left'/'right'之一\n[正确代码]\n<FDrawer v-model:show=\"show\" placement=\"right\" title=\"正确示例\">\n  <div>内容...</div>\n</FDrawer>\n[注意事项] placement属性有严格的枚举值限制"
    },
    {
      "input": "在mask为true时设置operable",
      "output": "<!-- error -->\n[错误分析] operable仅在mask为false时生效\n[正确代码]\n<FDrawer v-model:show=\"show\" :mask=\"false\" :operable=\"true\" title=\"正确示例\">\n  <div>内容...</div>\n</FDrawer>\n[注意事项] 需要先关闭mask才能启用页面交互"
    },
    {
      "input": "超大尺寸的抽屉",
      "output": "<!-- correct -->\n[场景说明] 全屏尺寸的抽屉\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"全屏\" placement=\"right\" dimension=\"100%\">\n  <div>全屏内容...</div>\n</FDrawer>\n[最佳实践] 适合需要最大化展示空间的场景"
    },
    {
      "input": "空内容的抽屉",
      "output": "<!-- correct -->\n[场景说明] 内容为空的抽屉边界情况\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"空内容\">\n  <!-- 空内容 -->\n</FDrawer>\n[最佳实践] 需要处理空状态的边界情况"
    },
    {
      "input": "极窄的抽屉",
      "output": "<!-- correct -->\n[场景说明] 极小尺寸的抽屉边界情况\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"窄抽屉\" dimension=\"100px\">\n  <div style=\"white-space: nowrap;\">窄内容...</div>\n</FDrawer>\n[最佳实践] 测试极端尺寸下的显示效果"
    },
    {
      "input": "抽屉怎么用",
      "output": "<!-- correct -->\n[场景说明] 基础抽屉使用方式\n[代码实现]\n<template>\n  <FButton @click=\"show = true\">打开抽屉</FButton>\n  <FDrawer v-model:show=\"show\" title=\"帮助\">\n    <div>这里是帮助内容...</div>\n  </FDrawer>\n</template>\n\n<script setup>\nconst show = ref(false);\n</script>\n[最佳实践] 最简单的抽屉使用示例"
    },
    {
      "input": "抽屉关不掉咋办",
      "output": "<!-- error -->\n[错误分析] 缺少v-model:show绑定或事件处理\n[正确代码]\n<FDrawer v-model:show=\"show\" title=\"可关闭\" :closable=\"true\">\n  <div>内容...</div>\n</FDrawer>\n[注意事项] 确保正确绑定show属性和处理关闭事件"
    },
    {
      "input": "抽屉样式怎么改",
      "output": "<!-- correct -->\n[场景说明] 自定义抽屉样式\n[代码实现]\n<FDrawer \n  v-model:show=\"show\" \n  title=\"自定义样式\" \n  wrapperClass=\"custom-drawer\"\n  contentClass=\"custom-content\">\n  <div>内容...</div>\n</FDrawer>\n\n<style>\n.custom-drawer {\n  /* 根容器样式 */\n}\n.custom-content {\n  /* 内容区域样式 */\n  padding: 20px;\n}\n</style>\n[最佳实践] 通过提供的类名钩子自定义样式"
    },
    {
      "input": "抽屉和表单一起用",
      "output": "<!-- correct -->\n[场景说明] 抽屉内嵌表单的组合使用\n[代码实现]\n<FDrawer v-model:show=\"show\" title=\"表单抽屉\" :footer=\"true\">\n  <FForm :model=\"form\" :rules=\"rules\">\n    <FFormItem label=\"名称\" prop=\"name\">\n      <FInput v-model=\"form.name\" />\n    </FFormItem>\n    <!-- 更多表单项 -->\n  </FForm>\n  <template #footer>\n    <FSpace justify=\"end\">\n      <FButton @click=\"show = false\">取消</FButton>\n      <FButton type=\"primary\" @click=\"handleSubmit\">提交</FButton>\n    </FSpace>\n  </template>\n</FDrawer>\n[最佳实践] 表单和抽屉的典型组合场景"
    },
    {
      "input": "抽屉和表格组合",
      "output": "<!-- correct -->\n[场景说明] 点击表格行展示详情的组合使用\n[代码实现]\n<FTable :data=\"tableData\" @row-click=\"handleRowClick\">\n  <!-- 表格列定义 -->\n</FTable>\n\n<FDrawer v-model:show=\"show\" title=\"详情\">\n  <div v-if=\"currentRow\">\n    <p>ID: {{ currentRow.id }}</p>\n    <!-- 更多详情字段 -->\n  </div>\n</FDrawer>\n\n<script setup>\nconst show = ref(false);\nconst currentRow = ref(null);\n\nconst handleRowClick = (row) => {\n  currentRow.value = row;\n  show.value = true;\n};\n</script>\n[最佳实践] 表格和抽屉查看详情的典型组合"
    }
  ]
};
