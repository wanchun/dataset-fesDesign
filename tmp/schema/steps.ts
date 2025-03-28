import type { IComponentMetadata } from '../type';

export const stepsMeta: IComponentMetadata = {
  "title": "步骤条",
  "componentName": "FSteps",
  "description": "拆分某项流程的步骤，引导用户按流程完成任务。支持水平、垂直布局，可自定义步骤状态和图标。",
  "scenarios": [
    "订单流程：展示订单从创建到完成的各个阶段，帮助用户了解当前进度",
    "注册流程：引导用户完成多步骤的注册或设置过程",
    "审批流程：展示审批流程的各个节点，明确当前审批状态",
    "数据导入：分步骤展示数据导入的进度和状态",
    "错误处理：当流程出现错误时，高亮显示错误步骤"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "FStep"
  ],
  "propRelations": [
    {
      "source": "vertical",
      "target": "layout",
      "effect": "切换步骤条为垂直或水平布局",
      "notes": [
        "垂直布局适合侧边栏或高度受限的场景",
        "水平布局适合宽度充足的场景"
      ]
    },
    {
      "source": "status",
      "target": "FStep.status",
      "effect": "当子步骤未单独设置状态时，继承父组件的状态设置",
      "notes": [
        "子步骤可覆盖父组件的状态设置",
        "适用于需要统一管理步骤状态的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model:current",
      "title": "当前步骤",
      "valueType": "number",
      "description": "指定当前激活的步骤索引，从0开始计数",
      "defaultValue": 0,
      "required": false,
      "example": 1
    },
    {
      "name": "status",
      "title": "当前步骤状态",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "wait",
            "title": "等待",
            "usage": "步骤尚未开始处理"
          },
          {
            "value": "process",
            "title": "处理中",
            "usage": "步骤正在处理中"
          },
          {
            "value": "finish",
            "title": "已完成",
            "usage": "步骤已成功完成"
          },
          {
            "value": "error",
            "title": "错误",
            "usage": "步骤处理出现错误"
          }
        ]
      },
      "description": "指定当前步骤的状态",
      "defaultValue": "process",
      "required": false,
      "example": "process"
    },
    {
      "name": "vertical",
      "title": "垂直方向",
      "valueType": "bool",
      "description": "是否垂直显示步骤条",
      "defaultValue": false,
      "required": false,
      "example": true
    },
    {
      "name": "initial",
      "title": "起始序号",
      "valueType": "number",
      "description": "步骤的起始序号",
      "defaultValue": 1,
      "required": false,
      "example": 1
    }
  ],
  "events": [
    {
      "name": "change",
      "description": "点击切换步骤时触发",
      "parameters": [
        {
          "name": "current",
          "type": "number",
          "description": "当前激活的步骤索引"
        }
      ]
    }
  ],
  "slots": [],
  "templates": [
    {
      "input": "基础步骤条",
      "output": "<!-- correct -->\n[场景说明] 展示一个包含4个步骤的水平步骤条\n[代码实现]\n<FSteps :current=\"1\">\n  <FStep title=\"第一步\" description=\"填写基本信息\" />\n  <FStep title=\"第二步\" description=\"验证身份信息\" />\n  <FStep title=\"第三步\" description=\"设置密码\" />\n  <FStep title=\"第四步\" description=\"完成注册\" />\n</FSteps>\n[最佳实践] 使用current属性控制当前激活步骤，description提供额外说明"
    },
    {
      "input": "垂直步骤条",
      "output": "<!-- correct -->\n[场景说明] 在侧边栏使用垂直步骤条\n[代码实现]\n<FSteps vertical :current=\"2\">\n  <FStep title=\"需求收集\" />\n  <FStep title=\"方案设计\" />\n  <FStep title=\"开发实现\" />\n  <FStep title=\"测试验收\" />\n</FSteps>\n[最佳实践] 垂直布局适合高度受限的场景，如侧边导航"
    },
    {
      "input": "带图标的步骤",
      "output": "<!-- correct -->\n[场景说明] 使用自定义图标增强步骤可视化\n[代码实现]\n<FSteps :current=\"1\">\n  <FStep title=\"登录\">\n    <template #icon><UserOutlined /></template>\n  </FStep>\n  <FStep title=\"验证\">\n    <template #icon><SafetyOutlined /></template>\n  </FStep>\n</FSteps>\n[最佳实践] 通过插槽自定义图标，提升用户体验"
    },
    {
      "input": "错误状态步骤",
      "output": "<!-- correct -->\n[场景说明] 高亮显示流程中的错误步骤\n[代码实现]\n<FSteps :current=\"2\" status=\"error\">\n  <FStep title=\"提交订单\" />\n  <FStep title=\"支付\" />\n  <FStep title=\"发货\" />\n</FSteps>\n[最佳实践] 使用error状态明确标识问题步骤"
    },
    {
      "input": "动态切换步骤",
      "output": "<!-- correct -->\n[场景说明] 实现步骤的前后切换功能\n[代码实现]\n<template>\n  <FSteps :current=\"current\">\n    <FStep v-for=\"step in steps\" :key=\"step\" :title=\"step\" />\n  </FSteps>\n  <FButton @click=\"prev\">上一步</FButton>\n  <FButton @click=\"next\">下一步</FButton>\n</template>\n\n<script setup>\nconst current = ref(0);\nconst steps = ['步骤1', '步骤2', '步骤3'];\n\nconst prev = () => current.value > 0 && current.value--;\nconst next = () => current.value < steps.length - 1 && current.value++;\n</script>\n[最佳实践] 结合按钮实现步骤导航，注意边界控制"
    },
    {
      "input": "缺少current属性",
      "output": "<!-- error -->\n[错误分析] 未指定current属性导致无法确定当前步骤\n[正确代码]\n<FSteps :current=\"0\">\n  <FStep title=\"步骤1\" />\n</FSteps>\n[注意事项] current是必填属性，应从0开始计数"
    },
    {
      "input": "错误的status值",
      "output": "<!-- error -->\n[错误分析] 使用了非法的status值'processing'\n[正确代码]\n<FSteps :current=\"1\" status=\"process\">\n  <FStep title=\"步骤1\" />\n</FSteps>\n[注意事项] status必须是wait/process/finish/error之一"
    },
    {
      "input": "步骤条咋用啊？",
      "output": "<!-- correct -->\n[场景说明] 基础步骤条使用示例\n[代码实现]\n<FSteps :current=\"0\">\n  <FStep title=\"第一步\" />\n  <FStep title=\"第二步\" />\n</FSteps>\n[最佳实践] 最少需要两个步骤，current从0开始计数"
    },
    {
      "input": "步骤条能竖着放不",
      "output": "<!-- correct -->\n[场景说明] 垂直步骤条实现\n[代码实现]\n<FSteps vertical :current=\"0\">\n  <FStep title=\"垂直步骤1\" />\n  <FStep title=\"垂直步骤2\" />\n</FSteps>\n[最佳实践] 添加vertical属性即可实现垂直布局"
    },
    {
      "input": "步骤条报错了咋办",
      "output": "<!-- correct -->\n[场景说明] 错误状态处理示例\n[代码实现]\n<FSteps :current=\"1\" status=\"error\">\n  <FStep title=\"正常步骤\" />\n  <FStep title=\"错误步骤\" />\n</FSteps>\n[最佳实践] 使用status=\"error\"标记错误步骤"
    }
  ]
};
