import type { IComponentMetadata } from '../type';

export const badgeMeta: IComponentMetadata = {
  "title": "徽标",
  "componentName": "FBadge",
  "description": "用于展示数字和自定义标识的徽标组件，支持红点模式、数值显示、阈值限制等功能，适用于消息提醒、状态标识等场景。",
  "scenarios": [
    "消息提醒：在导航栏或通知图标上显示未读消息数量，使用数字徽标直观展示消息数量。",
    "状态标识：在用户头像旁显示在线状态，使用红点模式简洁标识用户活跃状态。",
    "数据统计：在数据卡片上展示统计数值，通过阈值限制避免数值过大影响展示效果。",
    "操作提示：在功能按钮上显示新功能提示，使用自定义内容徽标吸引用户注意。",
    "表单验证：在表单字段旁显示验证状态，通过不同类型徽标区分成功、警告和错误状态。",
    "任务进度：在任务列表项上显示任务进度，使用数值徽标直观展示完成情况。",
    "系统通知：在系统菜单上显示重要通知，通过自定义背景色突出显示关键信息。"
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
      "source": "hidden",
      "target": "showZero",
      "effect": "当hidden为true时，showZero属性不会生效",
      "notes": [
        "隐藏徽标时优先级高于showZero属性",
        "适用于需要动态控制徽标显示的场景"
      ]
    },
    {
      "source": "dot",
      "target": "value",
      "effect": "红点模式下value属性不会显示",
      "notes": [
        "dot为true时仅显示红点不显示数值",
        "适用于只需要状态标识不需要具体数值的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "value",
      "title": "显示值",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "徽标显示的内容，可以是数字或字符串",
      "example": 10
    },
    {
      "name": "dot",
      "title": "红点模式",
      "valueType": "bool",
      "description": "是否以红点形式显示徽标",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "hidden",
      "title": "隐藏徽标",
      "valueType": "bool",
      "description": "是否隐藏徽标，优先级高于showZero属性",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "showZero",
      "title": "展示数值0",
      "valueType": "bool",
      "description": "是否展示数值0，当hidden为true时该属性不生效",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "max",
      "title": "阈值",
      "valueType": "number",
      "description": "数值显示的最大阈值，超过阈值显示为max+",
      "defaultValue": 99,
      "example": 99
    },
    {
      "name": "size",
      "title": "大小",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "small",
            "title": "小",
            "usage": "紧凑场景使用，如表格行内徽标"
          },
          {
            "value": "middle",
            "title": "中",
            "usage": "常规尺寸，适合大多数场景"
          }
        ]
      },
      "description": "徽标的尺寸大小",
      "defaultValue": "middle",
      "example": "middle"
    },
    {
      "name": "type",
      "title": "类型",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "primary",
            "title": "重要",
            "usage": "用于主要操作或重要信息提示"
          },
          {
            "value": "success",
            "title": "成功",
            "usage": "用于成功状态或完成提示"
          },
          {
            "value": "warning",
            "title": "警告",
            "usage": "用于警告或需要注意的状态"
          },
          {
            "value": "danger",
            "title": "危险",
            "usage": "用于错误或危险操作提示"
          }
        ]
      },
      "description": "徽标的类型，影响默认背景色",
      "defaultValue": "danger",
      "example": "danger"
    },
    {
      "name": "backgroundColor",
      "title": "背景色",
      "valueType": "string",
      "description": "自定义徽标背景色，优先级高于type属性",
      "example": "#1890ff"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "content",
      "description": "自定义徽标内容，可以是图标或文本",
      "required": false
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基本数字徽标",
      "output": "<!-- correct -->\n[场景说明] 在按钮上显示未读消息数量\n[代码实现]\n<FBadge :value=\"10\">\n  <FButton>消息</FButton>\n</FBadge>\n[最佳实践] 适用于消息通知等需要显示数量的场景"
    },
    {
      "input": "红点模式徽标",
      "output": "<!-- correct -->\n[场景说明] 在用户头像旁显示在线状态\n[代码实现]\n<FBadge dot>\n  <FAvatar />\n</FBadge>\n[最佳实践] 适用于状态标识等不需要显示具体数值的场景"
    },
    {
      "input": "自定义内容徽标",
      "output": "<!-- correct -->\n[场景说明] 在功能按钮上显示新功能提示\n[代码实现]\n<FBadge>\n  <template #content>\n    <span>New</span>\n  </template>\n  <FButton>功能</FButton>\n</FBadge>\n[最佳实践] 适用于需要自定义显示内容的场景"
    },
    {
      "input": "阈值限制徽标",
      "output": "<!-- correct -->\n[场景说明] 在数据卡片上显示统计数值\n[代码实现]\n<FBadge :value=\"150\" :max=\"99\">\n  <FCard>数据统计</FCard>\n</FBadge>\n[最佳实践] 适用于数值可能较大的场景，避免显示过长数字"
    },
    {
      "input": "类型徽标",
      "output": "<!-- correct -->\n[场景说明] 在表单字段旁显示验证状态\n[代码实现]\n<FBadge :value=\"\" type=\"success\">\n  <FInput placeholder=\"已验证\" />\n</FBadge>\n[最佳实践] 通过不同颜色区分不同状态，提高可识别性"
    },
    {
      "input": "自定义背景色徽标",
      "output": "<!-- correct -->\n[场景说明] 在特殊功能上显示自定义颜色徽标\n[代码实现]\n<FBadge :value=\"5\" backgroundColor=\"purple\">\n  <FButton>VIP</FButton>\n</FBadge>\n[最佳实践] 适用于需要突出品牌色的场景"
    },
    {
      "input": "单独使用徽标",
      "output": "<!-- correct -->\n[场景说明] 在页面角落显示全局通知\n[代码实现]\n<FBadge :value=\"99\" class=\"corner-badge\" />\n[最佳实践] 适用于需要全局提示的场景，注意定位样式设置"
    },
    {
      "input": "显示零值徽标",
      "output": "<!-- correct -->\n[场景说明] 在统计面板上显示零值\n[代码实现]\n<FBadge :value=\"0\" :showZero=\"true\">\n  <FButton>统计</FButton>\n</FBadge>\n[最佳实践] 适用于需要明确显示零值的场景"
    },
    {
      "input": "错误示例：同时使用dot和value",
      "output": "<!-- error -->\n[错误分析] 同时设置dot和value属性会导致冲突，红点模式下不会显示数值\n[正确代码]\n<FBadge dot>\n  <FButton>消息</FButton>\n</FBadge>\n[注意事项] 红点模式和数值显示是互斥的，应根据场景选择其中一种方式"
    },
    {
      "input": "错误示例：隐藏徽标时设置showZero",
      "output": "<!-- error -->\n[错误分析] hidden为true时showZero属性不会生效，徽标仍会被隐藏\n[正确代码]\n<FBadge :hidden=\"false\" :showZero=\"true\" :value=\"0\">\n  <FButton>消息</FButton>\n</FBadge>\n[注意事项] hidden属性的优先级高于showZero，需要确保逻辑正确"
    },
    {
      "input": "错误示例：max属性用于非数字value",
      "output": "<!-- error -->\n[错误分析] max属性只在value为数字时生效，字符串value不会触发阈值限制\n[正确代码]\n<FBadge :value=\"100\" :max=\"99\">\n  <FButton>消息</FButton>\n</FBadge>\n[注意事项] 确保max属性与数字类型的value配合使用"
    },
    {
      "input": "边界条件：超大数值显示",
      "output": "<!-- correct -->\n[场景说明] 处理超大数值的显示\n[代码实现]\n<FBadge :value=\"10000\" :max=\"999\">\n  <FButton>消息</FButton>\n</FBadge>\n[最佳实践] 合理设置max值避免显示过长的数字"
    },
    {
      "input": "边界条件：空值处理",
      "output": "<!-- correct -->\n[场景说明] 处理value为空的情况\n[代码实现]\n<FBadge :value=\"null\">\n  <FButton>消息</FButton>\n</FBadge>\n[最佳实践] 空值不会显示徽标，等同于hidden为true的效果"
    },
    {
      "input": "边界条件：极小尺寸显示",
      "output": "<!-- correct -->\n[场景说明] 在极小空间内显示徽标\n[代码实现]\n<FBadge size=\"small\" :value=\"9\">\n  <FButton size=\"mini\">消息</FButton>\n</FBadge>\n[最佳实践] 小尺寸适合紧凑布局，注意可读性"
    },
    {
      "input": "怎么用徽章组件？",
      "output": "<!-- correct -->\n[场景说明] 基础徽标组件使用\n[代码实现]\n<FBadge :value=\"5\">\n  <FButton>消息</FButton>\n</FBadge>\n[最佳实践] 最简单的徽标用法，显示数字5"
    },
    {
      "input": "徽章不显示怎么办？",
      "output": "<!-- error -->\n[错误分析] 可能原因：1) value为空 2) hidden为true 3) value为0且showZero为false\n[正确代码]\n<FBadge :value=\"10\" :hidden=\"false\" :showZero=\"true\">\n  <FButton>消息</FButton>\n</FBadge>\n[注意事项] 检查value、hidden和showZero属性设置"
    },
    {
      "input": "徽章太大能调小点吗",
      "output": "<!-- correct -->\n[场景说明] 调整徽标尺寸\n[代码实现]\n<FBadge size=\"small\" :value=\"5\">\n  <FButton>消息</FButton>\n</FBadge>\n[最佳实践] 使用size=\"small\"设置小尺寸徽标"
    },
    {
      "input": "样式覆盖案例",
      "output": "<!-- correct -->\n[场景说明] 自定义徽标样式\n[代码实现]\n<FBadge :value=\"5\" class=\"custom-badge\">\n  <FButton>消息</FButton>\n</FBadge>\n<style>\n.custom-badge {\n  transform: scale(1.2);\n  box-shadow: 0 0 5px rgba(0,0,0,0.2);\n}\n</style>\n[最佳实践] 通过CSS类名覆盖默认样式，注意样式优先级"
    },
    {
      "input": "与表格组合使用",
      "output": "<!-- correct -->\n[场景说明] 在表格行内显示状态徽标\n[代码实现]\n<FTable>\n  <FTableColumn>\n    <template #default=\"{ row }\">\n      <FBadge :value=\"row.unread\" dot>\n        <span>{{ row.name }}</span>\n      </FBadge>\n    </template>\n  </FTableColumn>\n</FTable>\n[最佳实践] 表格内使用小尺寸徽标，保持布局紧凑"
    },
    {
      "input": "与导航菜单组合使用",
      "output": "<!-- correct -->\n[场景说明] 在导航菜单上显示未读数量\n[代码实现]\n<FMenu>\n  <FMenuItem>\n    <FBadge :value=\"10\">\n      消息中心\n    </FBadge>\n  </FMenuItem>\n</FMenu>\n[最佳实践] 注意菜单项的padding设置，确保徽标位置合适"
    }
  ]
};
