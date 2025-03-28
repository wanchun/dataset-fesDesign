import type { IComponentMetadata } from '../type';

export const spaceMeta: IComponentMetadata = {
  "title": "间距",
  "componentName": "FSpace",
  "description": "布局组件，用于在子组件之间提供统一的间距控制。支持水平和垂直布局，可自定义间距大小和对齐方式，适用于各种布局场景。",
  "scenarios": [
    "表单布局：在表单中使用水平间距组件排列表单项，保持一致的间距和美观的布局",
    "工具栏布局：在工具栏中使用间距组件控制按钮之间的间隔，确保操作区域整洁有序",
    "卡片列表：在卡片列表中使用垂直间距组件分隔各个卡片，提高可读性和视觉层次",
    "导航菜单：在导航菜单中使用间距组件控制菜单项之间的距离，提升用户体验",
    "响应式布局：结合换行属性实现响应式布局，在不同屏幕尺寸下自动调整元素排列"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ],
    "restrictions": []
  },
  "children": [
    "/^F[A-Z]\\w+/"
  ],
  "propRelations": [
    {
      "source": "vertical",
      "target": [
        "justify",
        "align"
      ],
      "effect": "垂直布局时主轴对齐和交叉轴对齐的含义会互换",
      "notes": [
        "当vertical为true时，justify控制垂直方向对齐，align控制水平方向对齐",
        "适用于需要动态切换布局方向的场景"
      ]
    },
    {
      "source": "inline",
      "target": "wrap",
      "effect": "行内元素模式下换行属性可能无效",
      "notes": [
        "当inline为true时，某些浏览器可能不支持flex容器的换行",
        "适用于需要行内布局但不需要换行的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "align",
      "title": "交叉轴对齐",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "start",
            "title": "起始对齐",
            "usage": "水平布局时顶部对齐，垂直布局时左侧对齐"
          },
          {
            "value": "end",
            "title": "末尾对齐",
            "usage": "水平布局时底部对齐，垂直布局时右侧对齐"
          },
          {
            "value": "center",
            "title": "居中对齐",
            "usage": "在交叉轴上居中对齐"
          },
          {
            "value": "baseline",
            "title": "基线对齐",
            "usage": "按文本基线对齐，适用于包含文本的元素"
          },
          {
            "value": "stretch",
            "title": "拉伸填充",
            "usage": "拉伸子元素以填满容器"
          }
        ]
      },
      "description": "交叉轴上的对齐方式，影响子元素在垂直于主轴方向上的排列",
      "example": "center"
    },
    {
      "name": "justify",
      "title": "主轴对齐",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "start",
            "title": "起始对齐",
            "usage": "默认值，从主轴起始位置开始排列"
          },
          {
            "value": "end",
            "title": "末尾对齐",
            "usage": "从主轴末尾位置开始排列"
          },
          {
            "value": "center",
            "title": "居中对齐",
            "usage": "在主轴上居中对齐"
          },
          {
            "value": "space-around",
            "title": "均匀分布",
            "usage": "子元素周围有相等的空间"
          },
          {
            "value": "space-between",
            "title": "两端对齐",
            "usage": "首尾子元素贴边，中间均匀分布"
          }
        ]
      },
      "description": "主轴上的对齐方式，控制子元素在主轴方向上的分布",
      "defaultValue": "start",
      "example": "space-between"
    },
    {
      "name": "size",
      "title": "间距大小",
      "valueType": {
        "type": "oneOfType",
        "value": [
          {
            "type": "oneOf",
            "items": [
              {
                "value": "xsmall",
                "title": "超小间距",
                "usage": "4px间距，适用于紧凑布局"
              },
              {
                "value": "small",
                "title": "小间距",
                "usage": "8px间距，默认值，适用于大多数场景"
              },
              {
                "value": "middle",
                "title": "中间距",
                "usage": "16px间距，适用于需要明显分隔的场景"
              },
              {
                "value": "large",
                "title": "大间距",
                "usage": "24px间距，适用于需要强调分隔的场景"
              }
            ]
          },
          "number",
          {
            "type": "arrayOf",
            "value": "number"
          }
        ]
      },
      "description": "子元素之间的间距大小，可以是预设值、具体像素值或[垂直间距,水平间距]数组",
      "defaultValue": "small",
      "example": [
        "middle",
        20
      ]
    },
    {
      "name": "inline",
      "title": "行内元素",
      "valueType": "bool",
      "description": "是否作为行内元素显示，影响布局方式",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "vertical",
      "title": "垂直布局",
      "valueType": "bool",
      "description": "是否垂直排列子元素，默认为水平排列",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "wrap",
      "title": "自动换行",
      "valueType": "bool",
      "description": "子元素超出容器宽度时是否自动换行",
      "defaultValue": true,
      "example": false
    },
    {
      "name": "itemStyle",
      "title": "节点样式",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "object"
        ]
      },
      "description": "自定义子元素的样式，可以是样式字符串或样式对象",
      "example": "{ margin: '4px' }"
    }
  ],
  "events": [
    {
      "name": "onClick",
      "description": "点击间距容器时触发",
      "parameters": [
        {
          "name": "event",
          "type": "MouseEvent",
          "description": "鼠标事件对象"
        }
      ]
    }
  ],
  "templates": [
    {
      "input": "基础水平间距",
      "output": "<!-- correct -->\n[场景说明] 基础水平布局，使用默认间距和对齐方式\n[代码实现]\n<FSpace>\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n  <FButton>按钮3</FButton>\n</FSpace>\n[最佳实践] 适用于简单的按钮组布局"
    },
    {
      "input": "垂直布局带自定义间距",
      "output": "<!-- correct -->\n[场景说明] 垂直布局，自定义间距为20px\n[代码实现]\n<FSpace vertical :size=\"20\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n  <FButton>按钮3</FButton>\n</FSpace>\n[最佳实践] 适用于表单等需要垂直排列的场景"
    },
    {
      "input": "两端对齐带换行",
      "output": "<!-- correct -->\n[场景说明] 水平布局，两端对齐，允许换行\n[代码实现]\n<FSpace justify=\"space-between\" wrap>\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n  <FButton>按钮3</FButton>\n</FSpace>\n[最佳实践] 适用于工具栏等需要充分利用空间的场景"
    },
    {
      "input": "行内元素间距",
      "output": "<!-- correct -->\n[场景说明] 行内元素模式，小间距\n[代码实现]\n<FSpace inline size=\"small\">\n  <span>标签1</span>\n  <span>标签2</span>\n  <span>标签3</span>\n</FSpace>\n[最佳实践] 适用于文本标签等行内元素的布局"
    },
    {
      "input": "复杂间距控制",
      "output": "<!-- correct -->\n[场景说明] 自定义垂直和水平间距分别为10px和20px\n[代码实现]\n<FSpace :size=\"[10, 20]\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n  <FButton>按钮3</FButton>\n</FSpace>\n[最佳实践] 适用于需要不同垂直和水平间距的场景"
    },
    {
      "input": "居中对齐布局",
      "output": "<!-- correct -->\n[场景说明] 主轴和交叉轴都居中对齐\n[代码实现]\n<FSpace justify=\"center\" align=\"center\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n  <FButton>按钮3</FButton>\n</FSpace>\n[最佳实践] 适用于需要完全居中的布局"
    },
    {
      "input": "垂直布局带基线对齐",
      "output": "<!-- correct -->\n[场景说明] 垂直布局，文本基线对齐\n[代码实现]\n<FSpace vertical align=\"baseline\">\n  <span style=\"font-size: 14px\">小文本</span>\n  <span style=\"font-size: 18px\">大文本</span>\n</FSpace>\n[最佳实践] 适用于需要文本对齐的场景"
    },
    {
      "input": "响应式卡片布局",
      "output": "<!-- correct -->\n[场景说明] 响应式卡片布局，自动换行\n[代码实现]\n<FSpace wrap :size=\"[16, 16]\">\n  <FCard v-for=\"i in 6\" :key=\"i\">卡片{{i}}</FCard>\n</FSpace>\n[最佳实践] 适用于响应式卡片列表"
    },
    {
      "input": "size属性类型错误",
      "output": "<!-- error -->\n[错误分析] size属性应为string/number/array，不能使用boolean类型\n[正确代码]\n<FSpace :size=\"20\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[注意事项] 确保size属性的类型正确"
    },
    {
      "input": "缺少必要子元素",
      "output": "<!-- error -->\n[错误分析] 间距组件需要至少一个子元素才能生效\n[正确代码]\n<FSpace>\n  <FButton>按钮1</FButton>\n</FSpace>\n[注意事项] 确保组件包含子元素"
    },
    {
      "input": "垂直布局错误使用",
      "output": "<!-- error -->\n[错误分析] 垂直布局时错误理解justify和align的含义\n[正确代码]\n<FSpace vertical justify=\"center\" align=\"start\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[注意事项] 垂直布局时justify控制垂直方向，align控制水平方向"
    },
    {
      "input": "空状态处理",
      "output": "<!-- correct -->\n[场景说明] 动态渲染子元素，空状态处理\n[代码实现]\n<FSpace>\n  <template v-if=\"items.length\">\n    <FButton v-for=\"item in items\" :key=\"item.id\">{{item.name}}</FButton>\n  </template>\n  <span v-else>暂无数据</span>\n</FSpace>\n[最佳实践] 处理动态数据的空状态"
    },
    {
      "input": "极值间距处理",
      "output": "<!-- correct -->\n[场景说明] 使用极大间距值测试布局\n[代码实现]\n<FSpace :size=\"100\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[最佳实践] 确保极端值下布局仍然合理"
    },
    {
      "input": "异常数据类型",
      "output": "<!-- correct -->\n[场景说明] 处理可能为null或undefined的size属性\n[代码实现]\n<FSpace :size=\"sizeValue || 'small'\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[最佳实践] 提供默认值处理异常数据"
    },
    {
      "input": "怎么设置按钮之间的距离？",
      "output": "<!-- correct -->\n[场景说明] 使用间距组件控制按钮间距\n[代码实现]\n<FSpace size=\"middle\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[最佳实践] 通过size属性控制间距大小"
    },
    {
      "input": "如何让元素竖着排列？",
      "output": "<!-- correct -->\n[场景说明] 使用垂直布局模式\n[代码实现]\n<FSpace vertical>\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[最佳实践] 设置vertical属性为true"
    },
    {
      "input": "为什么我的间距没效果？",
      "output": "<!-- error -->\n[错误分析] 可能原因：1.没有子元素 2.使用了错误的size类型 3.父容器限制了宽度\n[正确代码]\n<FSpace size=\"small\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[注意事项] 确保组件有子元素且size属性类型正确"
    },
    {
      "input": "自定义间距样式",
      "output": "<!-- correct -->\n[场景说明] 通过itemStyle自定义子元素样式\n[代码实现]\n<FSpace :itemStyle=\"{ padding: '8px' }\">\n  <FButton>按钮1</FButton>\n  <FButton>按钮2</FButton>\n</FSpace>\n[最佳实践] 结合itemStyle实现更精细的样式控制"
    },
    {
      "input": "与表单组件组合使用",
      "output": "<!-- correct -->\n[场景说明] 在表单中排列表单项\n[代码实现]\n<FForm>\n  <FSpace vertical :size=\"16\">\n    <FFormItem label=\"用户名\">\n      <FInput />\n    </FFormItem>\n    <FFormItem label=\"密码\">\n      <FInput type=\"password\" />\n    </FFormItem>\n  </FSpace>\n</FForm>\n[最佳实践] 适用于表单布局"
    },
    {
      "input": "与表格工具栏组合",
      "output": "<!-- correct -->\n[场景说明] 在表格工具栏中排列操作按钮\n[代码实现]\n<FSpace>\n  <FButton type=\"primary\">新增</FButton>\n  <FButton>导出</FButton>\n  <FButton>刷新</FButton>\n</FSpace>\n<FTable />\n[最佳实践] 适用于工具栏按钮布局"
    }
  ]
};
