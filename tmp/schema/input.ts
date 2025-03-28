import type { IComponentMetadata } from '../type';

export const inputMeta: IComponentMetadata = {
  "title": "文本输入",
  "componentName": "FInput",
  "description": "基础输入框组件，支持文本、密码、文本域等多种输入类型。提供丰富的交互功能包括清空、字数统计、前缀后缀等，适用于表单数据录入、搜索框等场景。",
  "scenarios": [
    "表单数据录入：在表单中使用标准输入框收集用户信息，配合验证规则确保数据有效性",
    "搜索框场景：结合前置/后置内容实现复合搜索框，提升用户搜索体验",
    "密码输入：使用密码类型和切换显示功能保障敏感信息安全输入",
    "多行文本输入：通过文本域类型支持长文本输入，适用于评论、描述等场景",
    "字数限制场景：结合maxlength和showWordLimit实现输入内容长度控制与提示"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "表单场景下建议放在表单项组件内以支持表单验证"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "type",
      "target": [
        "rows",
        "autosize",
        "resize",
        "showWordLimit"
      ],
      "effect": "当type为textarea时相关属性生效",
      "notes": [
        "文本域特有属性需要type=textarea时才生效",
        "确保在切换输入类型时同步更新相关属性"
      ]
    },
    {
      "source": "type",
      "target": "showPassword",
      "effect": "仅当type为password时显示密码切换图标",
      "notes": [
        "密码显示切换功能仅对密码输入类型有效"
      ]
    }
  ],
  "props": [
    {
      "name": "modelValue",
      "title": "绑定值",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "string",
          "number"
        ]
      },
      "description": "输入框的双向绑定值，支持v-model语法糖",
      "example": "'hello'"
    },
    {
      "name": "type",
      "title": "输入类型",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "text",
            "title": "文本",
            "usage": "常规文本输入"
          },
          {
            "value": "password",
            "title": "密码",
            "usage": "密码输入，可配合showPassword切换显示"
          },
          {
            "value": "textarea",
            "title": "文本域",
            "usage": "多行文本输入"
          }
        ]
      },
      "description": "输入框的类型，影响输入行为和样式表现",
      "defaultValue": "text",
      "example": "text"
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "valueType": "bool",
      "description": "是否禁用输入框交互",
      "defaultValue": false,
      "example": false
    },
    {
      "name": "clearable",
      "title": "可清空",
      "valueType": "bool",
      "description": "是否显示清空按钮，点击可快速清空内容",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "maxlength",
      "title": "最大长度",
      "valueType": "number",
      "description": "输入内容的最大字符数限制",
      "example": 100
    },
    {
      "name": "placeholder",
      "title": "占位文本",
      "valueType": "string",
      "description": "输入框为空时显示的提示文本",
      "defaultValue": "请输入",
      "example": "请输入用户名"
    },
    {
      "name": "showPassword",
      "title": "显示密码",
      "valueType": "bool",
      "description": "是否显示密码切换图标（仅type=password时有效）",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "rows",
      "title": "行数",
      "valueType": "number",
      "description": "文本域默认显示行数（仅type=textarea时有效）",
      "defaultValue": 2,
      "example": 4
    },
    {
      "name": "showWordLimit",
      "title": "字数统计",
      "valueType": "bool",
      "description": "是否显示字数统计（仅type=textarea时有效）",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "autosize",
      "title": "高度自适应",
      "valueType": {
        "type": "oneOfType",
        "value": [
          "bool",
          {
            "type": "shape",
            "value": [
              {
                "name": "minRows",
                "title": "最小行数",
                "valueType": "number",
                "example": 2
              },
              {
                "name": "maxRows",
                "title": "最大行数",
                "valueType": "number",
                "example": 5
              }
            ]
          }
        ]
      },
      "description": "文本域高度自适应配置（仅type=textarea时有效）",
      "defaultValue": false,
      "example": "{ minRows: 2, maxRows: 5 }"
    },
    {
      "name": "autofocus",
      "title": "自动聚焦",
      "valueType": "bool",
      "description": "是否在组件挂载后自动获取焦点",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "resize",
      "title": "缩放方向",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "none",
            "title": "禁止缩放",
            "usage": "固定文本域尺寸"
          },
          {
            "value": "both",
            "title": "双向缩放",
            "usage": "允许水平和垂直方向调整"
          },
          {
            "value": "horizontal",
            "title": "水平缩放",
            "usage": "仅允许水平方向调整"
          },
          {
            "value": "vertical",
            "title": "垂直缩放",
            "usage": "仅允许垂直方向调整"
          }
        ]
      },
      "description": "文本域缩放方向控制（仅type=textarea时有效）",
      "example": "both"
    }
  ],
  "events": [
    {
      "name": "change",
      "description": "输入框失去焦点或按下回车时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string",
          "description": "当前输入值"
        }
      ]
    },
    {
      "name": "input",
      "description": "输入内容变化时实时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string",
          "description": "当前输入值"
        }
      ]
    },
    {
      "name": "keydown",
      "description": "键盘按键按下时触发",
      "parameters": [
        {
          "name": "event",
          "type": "KeyboardEvent",
          "description": "键盘事件对象"
        }
      ]
    },
    {
      "name": "clear",
      "description": "点击清空按钮时触发"
    },
    {
      "name": "focus",
      "description": "输入框获取焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    },
    {
      "name": "blur",
      "description": "输入框失去焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "焦点事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "prefix",
      "description": "输入框前缀内容（仅type=text时有效）",
      "example": "<template #prefix>¥</template>"
    },
    {
      "name": "suffix",
      "description": "输入框后缀内容（仅type=text时有效）",
      "example": "<template #suffix>RMB</template>"
    },
    {
      "name": "prepend",
      "description": "输入框前置内容（仅type=text时有效）",
      "example": "<template #prepend>http://</template>"
    },
    {
      "name": "append",
      "description": "输入框后置内容（仅type=text时有效）",
      "example": "<template #append><FButton>搜索</FButton></template>"
    }
  ],
  "exposes": [
    {
      "name": "focus",
      "description": "手动使输入框获取焦点"
    },
    {
      "name": "blur",
      "description": "手动使输入框失去焦点"
    }
  ],
  "templates": [
    {
      "input": "基础文本输入框",
      "output": "[场景说明] 标准文本输入场景\n[代码实现]\n<!-- correct -->\n<FInput v-model=\"inputValue\" placeholder=\"请输入用户名\" />\n[最佳实践] 配合v-model实现双向绑定，设置合理的placeholder引导用户输入"
    },
    {
      "input": "带清空功能的搜索框",
      "output": "[场景说明] 搜索场景需要快速清空输入内容\n[代码实现]\n<!-- correct -->\n<FInput v-model=\"searchText\" placeholder=\"搜索内容\" clearable>\n  <template #append>\n    <FButton type=\"primary\">搜索</FButton>\n  </template>\n</FInput>\n[最佳实践] 结合clearable和append插槽实现完整的搜索体验"
    },
    {
      "input": "密码输入框",
      "output": "[场景说明] 需要安全输入密码并支持显示切换\n[代码实现]\n<!-- correct -->\n<FInput \n  v-model=\"password\" \n  type=\"password\" \n  placeholder=\"请输入密码\" \n  showPassword\n/>\n[最佳实践] 使用password类型保障安全，showPassword提供显示切换功能"
    },
    {
      "input": "多行文本输入",
      "output": "[场景说明] 用户评论等需要长文本输入的场景\n[代码实现]\n<!-- correct -->\n<FInput\n  v-model=\"comment\"\n  type=\"textarea\"\n  :rows=\"4\"\n  placeholder=\"请输入您的评论\"\n  showWordLimit\n  :maxlength=\"200\"\n/>\n[最佳实践] 设置合理的行数和字数限制，showWordLimit提供实时反馈"
    },
    {
      "input": "自适应高度文本域",
      "output": "[场景说明] 需要根据内容自动调整高度的文本输入\n[代码实现]\n<!-- correct -->\n<FInput\n  v-model=\"dynamicContent\"\n  type=\"textarea\"\n  :autosize=\"{ minRows: 2, maxRows: 6 }\"\n  placeholder=\"请输入内容\"\n/>\n[最佳实践] 通过autosize配置动态调整高度范围，提升用户体验"
    },
    {
      "input": "错误示例：缺少必要v-model绑定",
      "output": "[错误分析] 输入框缺少v-model绑定导致无法获取用户输入\n[正确代码]\n<!-- correct -->\n<FInput v-model=\"inputValue\" placeholder=\"请输入\" />\n[注意事项] 必须使用v-model或value+@input实现双向数据绑定"
    },
    {
      "input": "错误示例：无效的showPassword配置",
      "output": "[错误分析] showPassword在非password类型下无效\n[正确代码]\n<!-- correct -->\n<FInput \n  v-model=\"password\" \n  type=\"password\" \n  showPassword\n  placeholder=\"请输入密码\"\n/>\n[注意事项] showPassword仅对type=password的输入框有效"
    },
    {
      "input": "错误示例：textarea特有属性误用",
      "output": "[错误分析] rows属性在非textarea类型下无效\n[正确代码]\n<!-- correct -->\n<FInput \n  v-model=\"content\" \n  type=\"textarea\" \n  :rows=\"4\"\n  placeholder=\"请输入\"\n/>\n[注意事项] rows、autosize等属性仅对type=textarea有效"
    },
    {
      "input": "空状态处理",
      "output": "[场景说明] 输入框初始为空时的占位提示\n[代码实现]\n<!-- correct -->\n<FInput \n  v-model=\"username\" \n  placeholder=\"请输入用户名\"\n  :clearable=\"!!username\"\n/>\n[最佳实践] 动态控制clearable显示，避免空状态显示清空按钮"
    },
    {
      "input": "极值测试：超长输入",
      "output": "[场景说明] 测试输入框对超长内容的处理能力\n[代码实现]\n<!-- correct -->\n<FInput\n  v-model=\"longText\"\n  type=\"textarea\"\n  :maxlength=\"1000\"\n  showWordLimit\n  placeholder=\"请输入长文本\"\n/>\n[最佳实践] 设置合理的maxlength防止过度输入，显示字数统计"
    },
    {
      "input": "异常数据：数字类型输入",
      "output": "[场景说明] 处理数字类型的输入验证\n[代码实现]\n<!-- correct -->\n<FInput \n  v-model.number=\"age\" \n  placeholder=\"请输入年龄\"\n  @input=\"validateNumberInput\"\n/>\n[最佳实践] 使用v-model.number修饰符，配合输入验证确保数据类型正确"
    },
    {
      "input": "怎么让输入框可以清空？",
      "output": "[场景说明] 需要允许用户快速清空已输入内容\n[代码实现]\n<!-- correct -->\n<FInput v-model=\"text\" clearable placeholder=\"请输入\" />\n[最佳实践] 设置clearable属性即可显示清空按钮，注意在空状态时按钮会自动隐藏"
    },
    {
      "input": "输入框为啥不显示密码小眼睛？",
      "output": "[错误分析] 未设置type=password导致showPassword无效\n[正确代码]\n<!-- correct -->\n<FInput \n  type=\"password\" \n  v-model=\"pwd\" \n  showPassword\n  placeholder=\"输入密码\"\n/>\n[注意事项] showPassword必须与type=password配合使用"
    },
    {
      "input": "文本框怎么换行啊",
      "output": "[场景说明] 需要多行文本输入功能\n[代码实现]\n<!-- correct -->\n<FInput \n  v-model=\"content\" \n  type=\"textarea\" \n  placeholder=\"请输入多行内容\"\n/>\n[最佳实践] 使用type=\"textarea\"实现多行文本输入，可通过rows属性控制默认显示行数"
    },
    {
      "input": "自定义输入框样式",
      "output": "[场景说明] 需要定制化输入框样式\n[代码实现]\n<!-- correct -->\n<FInput \n  v-model=\"customInput\" \n  class=\"custom-style\" \n  placeholder=\"自定义样式\"\n/>\n\n<style>\n.custom-style {\n  border-color: #1890ff;\n  border-radius: 20px;\n  padding: 10px 15px;\n}\n</style>\n[最佳实践] 通过class属性覆盖默认样式，注意保持可用性"
    },
    {
      "input": "表单组合：输入框与选择器",
      "output": "[场景说明] 复合输入框结合下拉选择\n[代码实现]\n<!-- correct -->\n<FInput placeholder=\"请选择\">\n  <template #prepend>\n    <FSelect v-model=\"prefix\" style=\"width: 100px\">\n      <FOption value=\"86\">+86</FOption>\n      <FOption value=\"852\">+852</FOption>\n    </FSelect>\n  </template>\n</FInput>\n[最佳实践] 利用prepend插槽整合其他表单组件，保持样式一致性"
    },
    {
      "input": "表单验证场景",
      "output": "[场景说明] 配合表单验证的输入框\n[代码实现]\n<!-- correct -->\n<FForm :model=\"form\" :rules=\"rules\">\n  <FFormItem label=\"用户名\" prop=\"username\">\n    <FInput v-model=\"form.username\" placeholder=\"请输入用户名\" />\n  </FFormItem>\n</FForm>\n[最佳实践] 在FFormItem中包裹输入框以支持表单验证，设置合理的校验规则"
    }
  ]
};
