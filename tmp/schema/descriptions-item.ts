import type { IComponentMetadata } from '../type';

export const descriptionsItemMeta: IComponentMetadata = {
  "title": "描述列表选项",
  "componentName": "FDescriptionsItem",
  "description": "描述列表的单项组件，用于在FDescriptions组件中定义每一项的标签和内容。支持自定义样式和列数控制。",
  "scenarios": [
    "用户信息展示：用于展示用户基本信息如姓名、年龄、联系方式等，通过label和内容清晰呈现",
    "商品详情展示：在电商场景中展示商品规格、价格、库存等关键信息",
    "系统配置查看：展示系统配置项的当前值和说明",
    "数据报表展示：以键值对形式展示报表数据",
    "表单预览：在表单提交后展示用户填写的信息"
  ],
  "parent": {
    "types": [],
    "restrictions": [
      {
        "parent": "FDescriptions",
        "description": "必须作为FDescriptions组件的直接子元素使用"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "span",
      "target": "contentStyle",
      "effect": "当span值大于1时，内容样式可能需要调整以适应多列布局",
      "notes": [
        "在多列布局时需要考虑内容样式的适应性"
      ]
    }
  ],
  "props": [
    {
      "name": "label",
      "title": "标签",
      "valueType": "string",
      "description": "描述项的标签文本",
      "required": true,
      "example": "姓名"
    },
    {
      "name": "span",
      "title": "占的列数",
      "valueType": "number",
      "description": "该项占据的列数，默认为1",
      "defaultValue": 1,
      "example": 2
    },
    {
      "name": "contentStyle",
      "title": "内容样式",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "shape",
            "value": []
          }
        ]
      },
      "description": "内容区域的样式，可以是字符串或样式对象",
      "example": "{ color: 'red', fontSize: '14px' }"
    },
    {
      "name": "labelStyle",
      "title": "标签样式",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "shape",
            "value": []
          }
        ]
      },
      "description": "标签区域的样式，可以是字符串或样式对象",
      "example": "{ fontWeight: 'bold' }"
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "描述项的内容区域",
      "required": true
    }
  ],
  "templates": [
    {
      "input": "基础用法",
      "output": "[场景说明] 展示用户基本信息\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem label=\"姓名\">张三</FDescriptionsItem>\n  <FDescriptionsItem label=\"年龄\">28</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 保持标签简洁明了，内容清晰可读"
    },
    {
      "input": "多列布局",
      "output": "[场景说明] 需要跨多列显示的内容\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem label=\"地址\" span={2}>北京市海淀区</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 对于较长内容使用多列布局，避免内容换行"
    },
    {
      "input": "自定义样式",
      "output": "[场景说明] 突出显示重要信息\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem \n    label=\"紧急联系人\" \n    labelStyle={{ color: 'red' }}\n    contentStyle={{ fontWeight: 'bold' }}\n  >李四</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 使用样式区分重要程度，但不要过度使用"
    },
    {
      "input": "复杂内容",
      "output": "[场景说明] 展示包含多个元素的内容\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem label=\"联系方式\">\n    <div>\n      <span>电话: 13800138000</span>\n      <span>邮箱: example@example.com</span>\n    </div>\n  </FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 对于复杂内容使用div包裹，保持结构清晰"
    },
    {
      "input": "缺少label属性",
      "output": "[错误分析] 缺少必需的label属性\n[正确代码] \n<FDescriptions>\n  <FDescriptionsItem label=\"必填项\">内容</FDescriptionsItem>\n</FDescriptions>\n[注意事项] label是必填属性，必须提供描述性文本"
    },
    {
      "input": "span值错误",
      "output": "[错误分析] span值应为正整数\n[正确代码] \n<FDescriptions>\n  <FDescriptionsItem label=\"测试\" span={1}>内容</FDescriptionsItem>\n</FDescriptions>\n[注意事项] span值必须为正整数，默认为1"
    },
    {
      "input": "样式类型错误",
      "output": "[错误分析] 样式属性应为字符串或对象\n[正确代码] \n<FDescriptions>\n  <FDescriptionsItem \n    label=\"测试\" \n    contentStyle={{ color: 'blue' }}\n  >内容</FDescriptionsItem>\n</FDescriptions>\n[注意事项] 样式属性接受字符串或样式对象，不支持其他类型"
    },
    {
      "input": "怎么用这个组件展示商品信息",
      "output": "[场景说明] 商品详情展示\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem label=\"商品名称\">iPhone 13</FDescriptionsItem>\n  <FDescriptionsItem label=\"价格\">¥5999</FDescriptionsItem>\n  <FDescriptionsItem label=\"库存\" span={2}>100件</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 关键信息突出显示，价格等重要数据可加粗"
    },
    {
      "input": "这个组件能单独使用吗",
      "output": "[错误分析] 不能单独使用\n[正确代码] \n<FDescriptions>\n  <FDescriptionsItem label=\"说明\">必须放在FDescriptions组件内使用</FDescriptionsItem>\n</FDescriptions>\n[注意事项] 本组件必须作为FDescriptions的子组件使用"
    },
    {
      "input": "如何让标签和内容对齐",
      "output": "[场景说明] 对齐样式调整\n[代码实现] \n<FDescriptions>\n  <FDescriptionsItem \n    label=\"测试\" \n    labelStyle={{ width: '100px', textAlign: 'right' }}\n    contentStyle={{ paddingLeft: '20px' }}\n  >内容</FDescriptionsItem>\n</FDescriptions>\n[最佳实践] 通过labelStyle和contentStyle控制对齐方式"
    }
  ]
};
