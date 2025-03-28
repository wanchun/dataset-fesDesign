import type { IComponentMetadata } from '../type';

export const floatPaneMeta: IComponentMetadata = {
  "title": "浮动面板",
  "componentName": "FFloatPane",
  "description": "可拖动的浮动面板组件，支持自定义位置、尺寸和渲染方式，适用于需要临时展示或交互的浮动内容场景。",
  "scenarios": [
    "临时信息展示：用于展示临时通知、帮助信息或辅助内容，用户可拖动查看",
    "表单辅助输入：作为浮动输入面板，提供额外的输入选项或复杂表单控件",
    "工具面板：作为可移动的工具面板，如颜色选择器、计算器等",
    "调试面板：开发环境下用于展示调试信息的浮动面板",
    "数据可视化：作为浮动图表展示面板，用户可拖动查看不同位置的数据"
  ],
  "parent": {
    "types": [
      "container"
    ],
    "restrictions": []
  },
  "children": [],
  "propRelations": [
    {
      "source": "displayDirective",
      "target": "cachePosition",
      "effect": "当displayDirective为'if'时，cachePosition不会生效",
      "notes": [
        "使用v-if指令会销毁和重建组件，导致位置缓存失效",
        "建议需要缓存位置时使用v-show指令"
      ]
    },
    {
      "source": "draggable",
      "target": "defaultPosition",
      "effect": "当draggable为false时，defaultPosition仅用于初始定位",
      "notes": [
        "不可拖动状态下用户无法改变面板位置",
        "适用于固定位置的浮动面板场景"
      ]
    }
  ],
  "props": [
    {
      "name": "visible",
      "title": "显示状态",
      "valueType": "bool",
      "description": "控制浮动面板的显示与隐藏",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "title",
      "title": "标题",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "node"
        ]
      },
      "description": "面板标题内容，支持字符串或自定义节点",
      "example": "信息面板"
    },
    {
      "name": "displayDirective",
      "title": "渲染方式",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "show",
            "title": "缓存渲染",
            "usage": "使用v-show指令，保持组件状态但隐藏"
          },
          {
            "value": "if",
            "title": "重置渲染",
            "usage": "使用v-if指令，完全销毁和重建组件"
          }
        ]
      },
      "description": "控制面板的渲染方式，影响组件状态保持",
      "defaultValue": "show",
      "example": "show"
    },
    {
      "name": "draggable",
      "title": "可拖动",
      "valueType": "bool",
      "description": "是否允许用户拖动面板",
      "defaultValue": true,
      "example": true
    },
    {
      "name": "width",
      "title": "宽度",
      "valueType": "number",
      "description": "面板的宽度，单位为px",
      "defaultValue": 520,
      "example": 600
    },
    {
      "name": "zIndex",
      "title": "层级",
      "valueType": "number",
      "description": "控制面板的z-index层级",
      "defaultValue": 3000,
      "example": 3000
    },
    {
      "name": "defaultPosition",
      "title": "默认位置",
      "valueType": {
        "type": "shape",
        "value": [
          {
            "name": "top",
            "title": "顶部距离",
            "valueType": "string",
            "example": "50px"
          },
          {
            "name": "right",
            "title": "右侧距离",
            "valueType": "string",
            "example": "50px"
          },
          {
            "name": "bottom",
            "title": "底部距离",
            "valueType": "string",
            "example": "50px"
          },
          {
            "name": "left",
            "title": "左侧距离",
            "valueType": "string",
            "example": "50px"
          }
        ]
      },
      "description": "面板的初始位置，支持top/right/bottom/left定位",
      "example": {
        "top": "50px",
        "right": "50px"
      }
    },
    {
      "name": "cachePosition",
      "title": "位置缓存方式",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "session",
            "title": "会话级缓存",
            "usage": "仅在当前浏览器会话期间保持位置"
          },
          {
            "value": "local",
            "title": "永久缓存",
            "usage": "长期保存面板位置信息"
          }
        ]
      },
      "description": "控制拖动位置的缓存方式",
      "defaultValue": "local",
      "example": "local"
    },
    {
      "name": "contentClass",
      "title": "内容样式类",
      "valueType": "string",
      "description": "自定义内容区域的样式类名",
      "example": "custom-content"
    },
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "returnType": "HTMLElement"
      },
      "description": "自定义面板的挂载容器节点",
      "example": "() => document.getElementById('app')"
    }
  ],
  "events": [
    {
      "name": "onUpdate:show",
      "description": "显示状态变化时触发",
      "parameters": [
        {
          "name": "visible",
          "type": "boolean",
          "description": "当前的显示状态"
        }
      ]
    },
    {
      "name": "onAfterEnter",
      "description": "面板完全显示后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "面板DOM元素"
        }
      ]
    },
    {
      "name": "onAfterLeave",
      "description": "面板完全隐藏后触发",
      "parameters": [
        {
          "name": "el",
          "type": "Element",
          "description": "面板DOM元素"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "面板的主要内容区域",
      "required": false
    },
    {
      "name": "title",
      "description": "自定义标题内容",
      "required": false
    }
  ],
  "exposes": [
    {
      "name": "show",
      "description": "显示面板",
      "parameters": []
    },
    {
      "name": "hide",
      "description": "隐藏面板",
      "parameters": []
    },
    {
      "name": "resetPosition",
      "description": "重置面板位置到默认值",
      "parameters": []
    }
  ],
  "templates": [
    {
      "input": "基础浮动面板",
      "output": "[场景说明] 创建一个基本的可拖动浮动面板\n[代码实现] <!-- correct -->\n<FFloatPane v-model:visible=\"show\" title=\"基础面板\">\n  <div>这里是面板内容</div>\n</FFloatPane>\n[最佳实践] 使用v-model控制显示状态，提供清晰的标题"
    },
    {
      "input": "固定位置面板",
      "output": "[场景说明] 创建一个不可拖动且固定位置的浮动面板\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\" \n  :draggable=\"false\"\n  :defaultPosition=\"{ top: '100px', left: '100px' }\"\n  title=\"固定面板\">\n  <div>固定位置的内容</div>\n</FFloatPane>\n[最佳实践] 禁用拖动时明确指定位置，避免用户困惑"
    },
    {
      "input": "自定义样式面板",
      "output": "[场景说明] 自定义面板内容和样式\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\" \n  title=\"样式面板\"\n  contentClass=\"custom-style\">\n  <template #title>\n    <span style=\"color: red\">自定义标题</span>\n  </template>\n  <div class=\"content\">自定义样式内容</div>\n</FFloatPane>\n[最佳实践] 使用插槽和样式类实现高度自定义"
    },
    {
      "input": "会话级缓存面板",
      "output": "[场景说明] 创建一个仅在当前会话期间缓存位置的面板\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\" \n  title=\"会话面板\"\n  cachePosition=\"session\">\n  <div>关闭浏览器后位置重置</div>\n</FFloatPane>\n[最佳实践] 适合临时性工具面板使用"
    },
    {
      "input": "全屏浮动面板",
      "output": "[场景说明] 创建一个宽度100%的浮动面板\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\" \n  title=\"全屏面板\"\n  :width=\"window.innerWidth\">\n  <div>全屏内容区域</div>\n</FFloatPane>\n[最佳实践] 动态计算宽度适应不同屏幕尺寸"
    },
    {
      "input": "错误示例：缺少v-model",
      "output": "[错误分析] 必须使用v-model控制显示状态\n[正确代码] <!-- correct -->\n<FFloatPane v-model:visible=\"show\" title=\"正确示例\">\n  <div>内容</div>\n</FFloatPane>\n[注意事项] 浮动面板必须受控，不能仅依赖内部状态"
    },
    {
      "input": "错误示例：无效的位置单位",
      "output": "[错误分析] 位置值必须包含px单位\n[正确代码] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\"\n  :defaultPosition=\"{ top: '50px', left: '50px' }\">\n  <div>内容</div>\n</FFloatPane>\n[注意事项] 位置值必须是带单位的字符串"
    },
    {
      "input": "错误示例：同时使用top和bottom定位",
      "output": "[错误分析] 避免同时使用对立方向的定位属性\n[正确代码] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\"\n  :defaultPosition=\"{ top: '50px', left: '50px' }\">\n  <div>内容</div>\n</FFloatPane>\n[注意事项] 选择单一方向定位更可预测"
    },
    {
      "input": "空状态处理",
      "output": "[场景说明] 处理面板内容为空的情况\n[代码实现] <!-- correct -->\n<FFloatPane v-model:visible=\"show\" title=\"空面板\">\n  <div v-if=\"hasContent\">内容</div>\n  <div v-else>暂无数据</div>\n</FFloatPane>\n[最佳实践] 始终提供有意义的空状态提示"
    },
    {
      "input": "极值测试：超大zIndex",
      "output": "[场景说明] 测试极大层级值\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\"\n  title=\"顶层面板\"\n  :zIndex=\"999999\">\n  <div>确保在最上层显示</div>\n</FFloatPane>\n[最佳实践] 避免过度使用极大值，合理规划层级"
    },
    {
      "input": "组合使用：表单+浮动面板",
      "output": "[场景说明] 表单与浮动面板组合使用\n[代码实现] <!-- correct -->\n<FForm>\n  <FFormItem label=\"复杂选项\">\n    <FButton @click=\"showPanel = true\">选择</FButton>\n    <FFloatPane v-model:visible=\"showPanel\" title=\"选项面板\">\n      <div>复杂选项内容</div>\n    </FFloatPane>\n  </FFormItem>\n</FForm>\n[最佳实践] 保持面板与主表单的交互一致性"
    },
    {
      "input": "浮动面板怎么用？",
      "output": "[场景说明] 基础浮动面板使用方式\n[代码实现] <!-- correct -->\n<FFloatPane v-model:visible=\"show\" title=\"帮助\">\n  <div>这里是帮助内容</div>\n</FFloatPane>\n[最佳实践] 使用v-model控制显示，提供明确标题"
    },
    {
      "input": "浮动面版位置不对",
      "output": "[错误分析] 可能是拼写错误或单位缺失\n[正确代码] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\"\n  :defaultPosition=\"{ top: '100px', left: '100px' }\">\n  <div>正确位置的内容</div>\n</FFloatPane>\n[注意事项] 确保属性名和值格式正确"
    },
    {
      "input": "怎么让浮动窗不能拖动",
      "output": "[场景说明] 创建固定位置的浮动面板\n[代码实现] <!-- correct -->\n<FFloatPane \n  v-model:visible=\"show\"\n  :draggable=\"false\"\n  title=\"固定面板\">\n  <div>不可拖动内容</div>\n</FFloatPane>\n[最佳实践] 明确设置draggable为false"
    }
  ]
};
