import type { IComponentMetadata } from '../type';

export const datePickerMeta: IComponentMetadata = {
  "componentName": "FDatePicker",
  "title": "日期选择",
  "description": "多功能日期时间选择组件，支持单日期、日期范围、时间选择等多种模式，适用于表单提交、数据筛选等场景。",
  "scenarios": [
    "表单日期选择：在订单表单中使用date类型选择交货日期，配合minDate限制最早可选日期，确保业务逻辑有效性",
    "数据统计范围选择：使用daterange类型选择分析时间段，结合maxRange限制最大可选区间，保证数据查询合理性",
    "会议时间安排：通过datetime类型选择具体会议时间，利用hourStep设置时间间隔为30分钟，提升时间选择效率",
    "生日信息录入：使用year类型选择出生年份，配合自定义格式显示为'YYYY年'，符合中文日期习惯",
    "项目季度规划：采用quarter类型选择项目季度，结合快捷选项实现快速选择当前季度和下一季度"
  ],
  "parent": {
    "types": [
      "container",
      "form"
    ],
    "restrictions": [
      {
        "parent": "FFormItem",
        "description": "在表单布局中必须作为表单项的子组件"
      }
    ]
  },
  "props": [
    {
      "name": "v-model",
      "title": "绑定值",
      "propType": "string",
      "description": "双向绑定的日期值，格式与format属性保持一致"
    },
    {
      "name": "type",
      "title": "选择类型",
      "propType": {
        "type": "oneOf",
        "items": [
          {
            "name": "date",
            "title": "单日期",
            "usage": "选择单个日期，默认格式为YYYY-MM-DD"
          },
          {
            "name": "datetime",
            "title": "日期时间",
            "usage": "选择具体到秒的日期时间，适合需要精确时间的场景"
          },
          {
            "name": "datemultiple",
            "title": "多选日期",
            "usage": "支持选择多个独立日期，适用于排班、日程安排"
          },
          {
            "name": "daterange",
            "title": "日期范围",
            "usage": "选择连续的日期区间，常用于统计时间段选择"
          },
          {
            "name": "datetimerange",
            "title": "时间范围",
            "usage": "选择精确到秒的时间区间，适合会议时间安排"
          },
          {
            "name": "datemonthrange",
            "title": "月份范围",
            "usage": "选择连续的月份区间，适用于财务周期选择"
          },
          {
            "name": "year",
            "title": "年份",
            "usage": "单独选择年份，适合生日年份选择"
          },
          {
            "name": "month",
            "title": "月份",
            "usage": "单独选择月份，适用于月度报告生成"
          },
          {
            "name": "quarter",
            "title": "季度",
            "usage": "选择财务季度，适合企业季度规划"
          }
        ]
      },
      "defaultValue": "date"
    },
    {
      "name": "disabledDate",
      "title": "禁用日期",
      "propType": "func",
      "description": "接收Date参数，返回boolean决定是否禁用该日期"
    },
    {
      "name": "disabledTime",
      "title": "禁用时间",
      "propType": "func",
      "description": "返回包含禁用小时、分钟、秒的函数对象，格式：{ disabledHours, disabledMinutes, disabledSeconds }"
    },
    {
      "name": "maxDate",
      "title": "最大日期",
      "propType": "string",
      "description": "最大可选日期（ISO 8601格式），如'2024-12-31'"
    },
    {
      "name": "minDate",
      "title": "最小日期",
      "propType": "string",
      "description": "最小可选日期（ISO 8601格式），如'2023-01-01'"
    },
    {
      "name": "maxRange",
      "title": "最大区间",
      "propType": "string",
      "description": "最大可选天数区间（例如'30D表示30天），仅范围选择类型有效"
    },
    {
      "name": "defaultTime",
      "title": "默认时间",
      "propType": {
        "type": "oneOfType",
        "value": [
          "string",
          {
            "type": "arrayOf",
            "value": "string"
          }
        ]
      },
      "description": "日期选择的默认具体时刻，范围选择时为[string, string]"
    },
    {
      "name": "format",
      "title": "格式",
      "propType": "string",
      "description": "日期显示格式，例如：'yyyy-MM-dd HH:mm:ss'",
      "defaultValue": "yyyy-MM-dd"
    },
    {
      "name": "clearable",
      "title": "可清除",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否显示清除按钮"
    },
    {
      "name": "disabled",
      "title": "禁用状态",
      "propType": "bool",
      "defaultValue": false,
      "description": "完全禁用组件交互"
    },
    {
      "name": "hourStep",
      "title": "小时间隔",
      "propType": "number",
      "defaultValue": 1,
      "description": "时间选择器的小时选项间隔"
    },
    {
      "name": "control",
      "title": "控制面板",
      "propType": "bool",
      "defaultValue": false,
      "description": "是否显示底部确认/取消控制栏"
    }
  ],
  "events": [
    {
      "name": "onChange",
      "description": "日期变化时触发",
      "parameters": [
        {
          "name": "value",
          "type": "string | string[]",
          "description": "当前选择的日期值，格式由format属性决定"
        }
      ]
    },
    {
      "name": "onClear",
      "description": "点击清除按钮时触发",
      "parameters": []
    },
    {
      "name": "onFocus",
      "description": "获得焦点时触发",
      "parameters": [
        {
          "name": "event",
          "type": "FocusEvent",
          "description": "焦点事件对象"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "suffixIcon",
      "description": "自定义后缀图标，替换默认日历图标",
      "required": false
    }
  ],
  "propRelations": [
    {
      "source": "type",
      "target": [
        "control",
        "defaultTime"
      ],
      "effect": "当类型为datemultiple时强制开启control属性"
    },
    {
      "source": "disabled",
      "target": "clearable",
      "effect": "禁用状态下自动隐藏清除按钮"
    }
  ],
  "children": []
};
