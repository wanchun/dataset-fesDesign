import type { IComponentMetadata } from '../type';

export const textMeta: IComponentMetadata = {
  "title": "文本",
  "componentName": "FText",
  "description": "基础文本组件，用于展示各种类型的文本内容。支持多种排版样式、字体效果和自定义标签，适用于信息展示、状态提示等场景。",
  "scenarios": [
    "状态提示：使用不同type展示成功、警告、错误等状态信息，增强用户感知",
    "排版设计：通过strong和italic属性实现加粗和斜体效果，突出重点内容",
    "语义化标签：使用tag属性选择合适的HTML标签，提升页面可访问性和SEO效果",
    "混合内容：在文本中嵌入图标、按钮等组件，实现丰富的交互式文本内容",
    "渐变效果：通过gradient属性实现文字颜色渐变，增强视觉吸引力"
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
      "source": "strong",
      "target": "italic",
      "effect": "当同时设置加粗和斜体时，会组合应用两种字体效果",
      "notes": [
        "加粗和斜体可以独立使用或组合使用",
        "适用于需要强调文本内容的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "children",
      "title": "文本内容",
      "valueType": "string",
      "description": "需要展示的文本内容，支持字符串或HTML",
      "required": true,
      "example": "示例文本"
    },
    {
      "name": "type",
      "title": "排印类型",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "default",
            "title": "默认",
            "usage": "普通文本展示"
          },
          {
            "value": "success",
            "title": "成功",
            "usage": "成功状态提示"
          },
          {
            "value": "info",
            "title": "信息",
            "usage": "信息提示"
          },
          {
            "value": "warning",
            "title": "警告",
            "usage": "警告提示"
          },
          {
            "value": "danger",
            "title": "错误",
            "usage": "错误提示"
          }
        ]
      },
      "description": "文本的类型，影响文本的颜色和样式",
      "defaultValue": "default",
      "example": "success"
    },
    {
      "name": "size",
      "title": "尺寸",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "small",
            "title": "小",
            "usage": "紧凑场景使用"
          },
          {
            "value": "middle",
            "title": "中",
            "usage": "常规尺寸"
          },
          {
            "value": "large",
            "title": "大",
            "usage": "需要突出显示的文本"
          }
        ]
      },
      "description": "文本的尺寸大小",
      "defaultValue": "middle",
      "example": "middle"
    },
    {
      "name": "strong",
      "title": "加粗",
      "valueType": "bool",
      "description": "是否加粗显示文本",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "italic",
      "title": "斜体",
      "valueType": "bool",
      "description": "是否斜体显示文本",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "tag",
      "title": "DOM标签",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "span",
            "title": "span",
            "usage": "行内文本"
          },
          {
            "value": "p",
            "title": "p",
            "usage": "段落文本"
          },
          {
            "value": "label",
            "title": "label",
            "usage": "表单标签"
          }
        ]
      },
      "description": "渲染文本使用的HTML标签",
      "defaultValue": "span",
      "example": "p"
    },
    {
      "name": "gradient",
      "title": "文本渐变",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "shape",
            "value": [
              {
                "name": "from",
                "title": "起始颜色",
                "valueType": "string",
                "example": "#5384ff"
              },
              {
                "name": "to",
                "title": "结束颜色",
                "valueType": "string",
                "example": "#00cb91"
              },
              {
                "name": "deg",
                "title": "渐变角度",
                "valueType": {
                  "type": "oneOfType",
                  "value": [
                    "number",
                    "string"
                  ]
                },
                "example": "90deg"
              }
            ]
          }
        ]
      },
      "description": "文本颜色渐变配置，可以是颜色字符串或渐变对象",
      "example": {
        "from": "#5384ff",
        "to": "#00cb91",
        "deg": "90deg"
      }
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "文本内容插槽，支持混合内容",
      "required": true
    }
  ],
  "templates": [
    {
      "input": "基础文本",
      "output": "[场景说明] 最基本的文本展示\n[代码实现] <!-- correct -->\n<FText>默认文本</FText>\n[最佳实践] 适用于不需要特殊样式的普通文本展示"
    },
    {
      "input": "成功提示文本",
      "output": "[场景说明] 展示成功状态的文本\n[代码实现] <!-- correct -->\n<FText type=\"success\">操作成功</FText>\n[最佳实践] 适用于表单提交成功等场景"
    },
    {
      "input": "加粗斜体文本",
      "output": "[场景说明] 强调文本内容\n[代码实现] <!-- correct -->\n<FText strong italic>重要提示</FText>\n[最佳实践] 适用于需要特别强调的文本内容"
    },
    {
      "input": "段落文本",
      "output": "[场景说明] 段落文本展示\n[代码实现] <!-- correct -->\n<FText tag=\"p\">这是一个段落文本内容...</FText>\n[最佳实践] 适用于长文本内容展示"
    },
    {
      "input": "渐变文本",
      "output": "[场景说明] 增强视觉效果的渐变文本\n[代码实现] <!-- correct -->\n<FText :gradient=\"{ from: '#5384ff', to: '#00cb91', deg: '90deg' }\">渐变文本</FText>\n[最佳实践] 适用于需要吸引用户注意的标题或重要提示"
    },
    {
      "input": "混合内容文本",
      "output": "[场景说明] 包含图标和按钮的交互式文本\n[代码实现] <!-- correct -->\n<FText>\n  点击<FButton size=\"small\">这里</FButton>查看<BellOutlined />详情\n</FText>\n[最佳实践] 适用于需要嵌入交互元素的文本场景"
    },
    {
      "input": "错误提示文本",
      "output": "[场景说明] 错误状态提示\n[代码实现] <!-- correct -->\n<FText type=\"danger\">操作失败，请重试</FText>\n[最佳实践] 适用于表单验证失败等错误提示场景"
    },
    {
      "input": "小尺寸文本",
      "output": "[场景说明] 紧凑空间的文本展示\n[代码实现] <!-- correct -->\n<FText size=\"small\">辅助说明文字</FText>\n[最佳实践] 适用于表单说明、注释等次要文本"
    },
    {
      "input": "缺少文本内容",
      "output": "[错误分析] 必须提供文本内容\n[正确代码] <!-- correct -->\n<FText>必须有内容</FText>\n[注意事项] children属性是必填的，不能为空"
    },
    {
      "input": "错误的type值",
      "output": "[错误分析] type必须是预定义的值之一\n[正确代码] <!-- correct -->\n<FText type=\"warning\">警告文本</FText>\n[注意事项] type只能从default/success/info/warning/danger中选择"
    },
    {
      "input": "无效的渐变配置",
      "output": "[错误分析] gradient必须为颜色字符串或包含from/to的对象\n[正确代码] <!-- correct -->\n<FText gradient=\"#5384ff\">纯色文本</FText>\n[注意事项] 渐变对象必须包含from和to属性"
    },
    {
      "input": "空文本",
      "output": "[边界条件] 空文本处理\n[代码实现] <!-- correct -->\n<FText></FText>\n[注意事项] 虽然允许空文本，但建议提供有意义的文本内容"
    },
    {
      "input": "极长文本",
      "output": "[边界条件] 超长文本处理\n[代码实现] <!-- correct -->\n<FEllipsis>\n  <FText>这是一段非常非常长的文本内容...</FText>\n</FEllipsis>\n[注意事项] 建议配合FEllipsis组件处理超长文本"
    },
    {
      "input": "特殊字符文本",
      "output": "[边界条件] 特殊字符处理\n[代码实现] <!-- correct -->\n<FText>特殊字符：&<>\"'</FText>\n[注意事项] 会自动转义HTML特殊字符"
    },
    {
      "input": "怎么让字变粗",
      "output": "[自然语言提问] 如何实现文本加粗\n[代码实现] <!-- correct -->\n<FText strong>加粗文本</FText>\n[最佳实践] 使用strong属性实现文本加粗效果"
    },
    {
      "input": "文字颜色渐变咋弄",
      "output": "[自然语言提问] 如何实现文字颜色渐变\n[代码实现] <!-- correct -->\n<FText :gradient=\"{ from: '#5384ff', to: '#00cb91' }\">渐变文本</FText>\n[最佳实践] 使用gradient属性配置颜色渐变"
    },
    {
      "input": "文本能放按钮不",
      "output": "[自然语言提问] 文本中能否嵌入按钮\n[代码实现] <!-- correct -->\n<FText>\n  点击<FButton size=\"small\">这里</FButton>继续\n</FText>\n[最佳实践] 支持在文本中嵌入其他组件"
    },
    {
      "input": "自定义文本样式",
      "output": "[样式覆盖] 自定义文本样式\n[代码实现] <!-- correct -->\n<FText style=\"font-family: monospace; letter-spacing: 2px;\">自定义样式文本</FText>\n[注意事项] 可以通过style属性覆盖默认样式"
    },
    {
      "input": "文本与按钮组合",
      "output": "[组合使用] 文本与按钮组合\n[代码实现] <!-- correct -->\n<FSpace>\n  <FText>操作说明：</FText>\n  <FButton>确认</FButton>\n</FSpace>\n[最佳实践] 配合FSpace组件实现间距布局"
    },
    {
      "input": "表单标签文本",
      "output": "[组合使用] 表单标签文本\n[代码实现] <!-- correct -->\n<FFormItem label=\"用户名\">\n  <FInput />\n</FFormItem>\n[最佳实践] 配合FFormItem组件实现表单标签"
    }
  ]
};
