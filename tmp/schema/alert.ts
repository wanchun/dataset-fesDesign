import type { IComponentMetadata } from '../type';

export const alertMeta: IComponentMetadata = {
  "title": "警告提示",
  "componentName": "FAlert",
  "description": "用于向用户显示需要关注的重要信息，支持多种类型和自定义配置，可常驻显示或允许用户关闭。适用于系统通知、操作反馈等场景。",
  "scenarios": [
    "系统通知：使用info类型显示常规系统消息，帮助用户了解当前状态",
    "操作成功反馈：使用success类型展示操作成功信息，增强用户信心",
    "风险警示：使用warning类型提示潜在风险，引起用户注意",
    "错误提示：使用error类型显示操作错误或系统异常，引导用户正确处理",
    "表单验证：在表单提交后显示验证结果，帮助用户快速定位问题",
    "系统公告：使用可关闭的提示展示临时公告信息，不影响用户操作",
    "引导提示：使用带图标的提示引导新用户完成操作流程",
    "数据状态：展示数据加载或处理状态，提供即时反馈",
    "权限提示：当用户无权限操作时显示提示，避免无效操作"
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
      "source": "closable",
      "target": "beforeClose",
      "effect": "当closable为true时，beforeClose属性才会生效",
      "notes": [
        "需要自定义关闭逻辑时才需配置beforeClose",
        "适用于需要确认关闭或异步关闭的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "type",
      "title": "类型",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "success",
            "title": "成功",
            "usage": "用于展示操作成功的反馈信息"
          },
          {
            "value": "info",
            "title": "信息",
            "usage": "用于展示常规系统消息或通知"
          },
          {
            "value": "warning",
            "title": "警告",
            "usage": "用于提示潜在风险或需要注意的情况"
          },
          {
            "value": "error",
            "title": "错误",
            "usage": "用于展示操作错误或系统异常信息"
          }
        ]
      },
      "description": "指定警告提示的样式类型，影响颜色和图标",
      "defaultValue": "info",
      "example": "info"
    },
    {
      "name": "message",
      "title": "消息标题",
      "valueType": "string",
      "description": "提示的主要内容，简明扼要地描述问题或状态",
      "required": true,
      "example": "系统维护通知"
    },
    {
      "name": "description",
      "title": "消息内容",
      "valueType": "string",
      "description": "辅助说明信息，可提供更详细的解释或解决方案",
      "example": "系统将于今晚23:00-24:00进行维护升级，请提前保存工作"
    },
    {
      "name": "showIcon",
      "title": "显示图标",
      "valueType": "bool",
      "description": "是否在提示左侧显示类型对应的图标",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "closable",
      "title": "可关闭",
      "valueType": "bool",
      "description": "是否显示关闭按钮，允许用户手动关闭提示",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "center",
      "title": "居中",
      "valueType": "bool",
      "description": "是否将提示内容居中显示",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "beforeClose",
      "title": "关闭前钩子",
      "valueType": {
        "type": "func",
        "returnType": "bool",
        "parameters": []
      },
      "description": "关闭前的回调函数，返回false可阻止关闭",
      "example": "() => confirm('确定要关闭吗？')"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "自定义提示内容，覆盖message属性",
      "required": false
    },
    {
      "name": "descriptionSlot",
      "description": "自定义辅助信息内容，覆盖description属性",
      "required": false
    },
    {
      "name": "icon",
      "description": "自定义图标，覆盖默认的类型图标",
      "required": false
    },
    {
      "name": "action",
      "description": "自定义操作区域，可添加按钮等交互元素",
      "required": false
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基础信息提示",
      "output": "<!-- correct -->\n[场景说明] 展示常规系统信息提示\n[代码实现] <FAlert type=\"info\" message=\"系统通知\" />\n[最佳实践] 适用于不需要用户操作的纯信息展示"
    },
    {
      "input": "带图标的成功提示",
      "output": "<!-- correct -->\n[场景说明] 操作成功后的反馈提示\n[代码实现] <FAlert type=\"success\" message=\"提交成功\" showIcon />\n[最佳实践] 图标可以增强视觉识别度，适合重要操作反馈"
    },
    {
      "input": "可关闭的警告提示",
      "output": "<!-- correct -->\n[场景说明] 需要用户确认的风险提示\n[代码实现] <FAlert type=\"warning\" message=\"数据未保存\" closable />\n[最佳实践] 允许用户关闭非关键性提示，减少界面干扰"
    },
    {
      "input": "带详细说明的错误提示",
      "output": "<!-- correct -->\n[场景说明] 表单验证失败提示\n[代码实现] <FAlert type=\"error\" message=\"提交失败\" description=\"请检查用户名和密码是否正确\" />\n[最佳实践] 使用description提供具体错误原因和解决方案"
    },
    {
      "input": "居中显示的维护公告",
      "output": "<!-- correct -->\n[场景说明] 系统维护公告\n[代码实现] <FAlert type=\"info\" message=\"系统维护\" description=\"维护时间：今晚23:00-24:00\" center />\n[最佳实践] 居中显示重要公告，增强视觉焦点"
    },
    {
      "input": "自定义图标和操作",
      "output": "<!-- correct -->\n[场景说明] 带自定义操作的通知\n[代码实现] <FAlert type=\"info\" message=\"新版本可用\">\n  <template #icon><BellOutlined /></template>\n  <template #action><FButton type=\"link\">立即更新</FButton></template>\n</FAlert>\n[最佳实践] 通过插槽扩展功能，提供更多交互可能"
    },
    {
      "input": "异步关闭的提示",
      "output": "<!-- correct -->\n[场景说明] 需要确认的关闭操作\n[代码实现] <FAlert \n  type=\"warning\" \n  message=\"未保存更改\" \n  closable \n  :beforeClose=\"() => confirm('确定要离开吗？未保存的更改将丢失')\" \n/>\n[最佳实践] 重要提示应确认用户意图后再关闭"
    },
    {
      "input": "自定义内容的提示",
      "output": "<!-- correct -->\n[场景说明] 复杂内容的信息提示\n[代码实现] <FAlert type=\"info\">\n  <div>自定义<b>富文本</b>内容</div>\n  <template #description>\n    <div>支持<code>HTML</code>和组件</div>\n  </template>\n</FAlert>\n[最佳实践] 通过插槽实现灵活的内容展示"
    },
    {
      "input": "缺少message属性的错误用法",
      "output": "<!-- error -->\n[错误分析] message是必填属性，缺少会导致提示无内容\n[正确代码] <FAlert type=\"info\" message=\"必填内容\" />\n[注意事项] 必须提供message或default插槽内容"
    },
    {
      "input": "错误使用beforeClose但不设置closable",
      "output": "<!-- error -->\n[错误分析] beforeClose只在closable为true时生效\n[正确代码] <FAlert type=\"info\" message=\"提示\" closable :beforeClose=\"handler\" />\n[注意事项] 需要先设置closable才能使用beforeClose"
    },
    {
      "input": "错误地使用数字作为type值",
      "output": "<!-- error -->\n[错误分析] type必须是预定义的字符串值\n[正确代码] <FAlert type=\"success\" message=\"正确类型\" />\n[注意事项] type只能从success/info/warning/error中选择"
    },
    {
      "input": "空状态下的提示",
      "output": "<!-- correct -->\n[场景说明] 无数据时的占位提示\n[代码实现] <FAlert type=\"info\" message=\"暂无数据\" v-if=\"!data.length\" />\n[最佳实践] 配合条件渲染提供友好的空状态提示"
    },
    {
      "input": "极长内容的提示处理",
      "output": "<!-- correct -->\n[场景说明] 长文本提示的展示\n[代码实现] <FAlert \n  type=\"info\" \n  message=\"重要通知\" \n  description=\"非常长的文本内容...\" \n  style=\"max-height: 200px; overflow-y: auto;\" \n/>\n[最佳实践] 对长文本添加滚动控制，避免破坏布局"
    },
    {
      "input": "异常数据下的提示",
      "output": "<!-- correct -->\n[场景说明] 数据加载失败提示\n[代码实现] <FAlert \n  type=\"error\" \n  message=\"加载失败\" \n  :description=\"error.message\" \n  v-if=\"error\" \n/>\n[最佳实践] 动态绑定错误信息，提供详细的错误诊断"
    },
    {
      "input": "怎么搞个提示框",
      "output": "<!-- correct -->\n[场景说明] 基础信息提示实现\n[代码实现] <FAlert type=\"info\" message=\"这是提示信息\" />\n[最佳实践] 最简单的提示实现方式"
    },
    {
      "input": "警告提示能不能加个按钮",
      "output": "<!-- correct -->\n[场景说明] 带操作的警告提示\n[代码实现] <FAlert type=\"warning\" message=\"确认操作\">\n  <template #action>\n    <FButton size=\"small\">确认</FButton>\n  </template>\n</FAlert>\n[最佳实践] 使用action插槽添加交互元素"
    },
    {
      "input": "提示框的图标不好看，能换吗",
      "output": "<!-- correct -->\n[场景说明] 自定义图标提示\n[代码实现] <FAlert type=\"info\" message=\"自定义图标\">\n  <template #icon><SmileOutlined /></template>\n</FAlert>\n[最佳实践] 通过icon插槽替换默认图标"
    },
    {
      "input": "覆盖默认样式",
      "output": "<!-- correct -->\n[场景说明] 自定义样式的提示\n[代码实现] <FAlert \n  type=\"info\" \n  message=\"自定义样式\" \n  style=\"background: #f0f5ff; border-color: #adc6ff;\" \n/>\n[最佳实践] 通过style属性覆盖默认样式，保持品牌一致性"
    },
    {
      "input": "和表单一起使用的提示",
      "output": "<!-- correct -->\n[场景说明] 表单验证错误提示\n[代码实现] <FForm>\n  <FFormItem>\n    <FInput />\n    <FAlert \n      type=\"error\" \n      message=\"验证错误\" \n      v-if=\"error\" \n      style=\"margin-top: 8px;\" \n    />\n  </FFormItem>\n</FForm>\n[最佳实践] 与表单组件配合使用，提供即时反馈"
    },
    {
      "input": "和表格操作配合的批量提示",
      "output": "<!-- correct -->\n[场景说明] 批量操作结果提示\n[代码实现] <div>\n  <FAlert \n    type=\"success\" \n    message=\"操作成功\" \n    description=\"已成功处理10条数据\" \n    v-if=\"success\" \n    closable \n  />\n  <FTable :data=\"data\" />\n</div>\n[最佳实践] 在数据表格上方显示操作结果，提升用户体验"
    }
  ]
};
