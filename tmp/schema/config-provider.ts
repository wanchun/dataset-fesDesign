import type { IComponentMetadata } from '../type';

export const configProviderMeta: IComponentMetadata = {
  "title": "全局配置",
  "componentName": "FConfigProvider",
  "description": "全局配置组件，用于统一管理应用的语言、主题等全局配置。支持自定义挂载容器、多语言切换和主题覆盖功能。",
  "scenarios": [
    "多语言应用：通过locale属性配置不同语言包，实现应用国际化支持",
    "主题定制：通过themeOverrides属性覆盖默认主题变量，实现品牌化定制",
    "弹窗定位：通过getContainer指定弹窗挂载节点，解决复杂布局中的定位问题",
    "暗色模式：通过主题变量覆盖实现暗色主题切换",
    "微前端集成：在微前端场景下统一主子应用的主题和语言配置"
  ],
  "parent": {
    "types": [
      "root"
    ],
    "restrictions": []
  },
  "children": [
    "/.*/"
  ],
  "propRelations": [
    {
      "source": "locale",
      "target": "themeOverrides",
      "effect": "语言切换时自动应用对应语言的默认主题配置",
      "notes": [
        "当locale变化时会自动加载对应语言的默认主题",
        "适用于需要保持语言和主题一致性的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "getContainer",
      "title": "挂载容器",
      "valueType": {
        "type": "func",
        "parameters": [],
        "returnType": "object"
      },
      "description": "指定弹窗类组件挂载的DOM节点，默认为document.body",
      "defaultValue": "() => document.body",
      "example": "() => document.getElementById('modal-root')"
    },
    {
      "name": "locale",
      "title": "语言配置",
      "valueType": "object",
      "description": "应用语言包配置，支持中英文等多种语言",
      "defaultValue": "zhCN",
      "example": {
        "datePicker": {
          "selectDate": "选择日期",
          "selectTime": "选择时间"
        }
      }
    },
    {
      "name": "themeOverrides",
      "title": "主题覆盖",
      "valueType": "object",
      "description": "覆盖默认主题变量，支持颜色、尺寸等样式定制",
      "example": {
        "common": {
          "primaryColor": "#5384ff",
          "borderRadiusBase": "4px"
        }
      }
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "配置作用域内的子内容",
      "required": true
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "如何设置全局中文语言？",
      "output": "<!-- correct -->\n[场景说明] 设置应用默认语言为中文\n[代码实现]\n<template>\n  <FConfigProvider :locale=\"zhCN\">\n    <App />\n  </FConfigProvider>\n</template>\n\n<script setup>\nimport { zhCN } from '@fesjs/fes-design';\n</script>\n[最佳实践] 建议在应用根组件包裹FConfigProvider"
    },
    {
      "input": "怎么修改主题主色？",
      "output": "<!-- correct -->\n[场景说明] 自定义主题主色为蓝色\n[代码实现]\n<template>\n  <FConfigProvider :themeOverrides=\"{ common: { primaryColor: '#1890ff' } }\">\n    <App />\n  </FConfigProvider>\n</template>\n[最佳实践] 主题变量应在项目初始化时统一配置"
    },
    {
      "input": "弹窗挂载到指定div",
      "output": "<!-- correct -->\n[场景说明] 将模态框挂载到特定容器\n[代码实现]\n<template>\n  <FConfigProvider :getContainer=\"() => document.getElementById('modal-root')\">\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 确保挂载容器在DOM中存在"
    },
    {
      "input": "同时配置语言和主题",
      "output": "<!-- correct -->\n[场景说明] 统一配置英文语言和自定义主题\n[代码实现]\n<template>\n  <FConfigProvider \n    :locale=\"enUS\" \n    :themeOverrides=\"{ common: { primaryColor: '#5384ff' } }\">\n    <App />\n  </FConfigProvider>\n</template>\n\n<script setup>\nimport { enUS } from '@fesjs/fes-design';\n</script>"
    },
    {
      "input": "错误示例：缺少必填插槽",
      "output": "<!-- error -->\n[错误分析] FConfigProvider必须包含子内容\n[正确代码]\n<template>\n  <FConfigProvider>\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 必须提供default插槽内容"
    },
    {
      "input": "错误示例：无效的主题配置",
      "output": "<!-- error -->\n[错误分析] themeOverrides应为对象类型\n[正确代码]\n<template>\n  <FConfigProvider :themeOverrides=\"{}\">\n    <App />\n  </FConfigProvider>\n</template>"
    },
    {
      "input": "错误示例：getContainer返回非DOM节点",
      "output": "<!-- error -->\n[错误分析] getContainer必须返回有效的DOM元素\n[正确代码]\n<template>\n  <FConfigProvider :getContainer=\"() => document.body\">\n    <App />\n  </FConfigProvider>\n</template>"
    },
    {
      "input": "空状态处理",
      "output": "<!-- correct -->\n[场景说明] 空语言配置时的处理\n[代码实现]\n<template>\n  <FConfigProvider :locale=\"{}\">\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 空配置会回退到组件默认语言"
    },
    {
      "input": "极值测试：超大主题配置",
      "output": "<!-- correct -->\n[场景说明] 测试包含大量变量的主题配置\n[代码实现]\n<template>\n  <FConfigProvider :themeOverrides=\"largeThemeConfig\">\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 建议拆分大型主题配置为多个模块"
    },
    {
      "input": "组合使用：与路由配合",
      "output": "<!-- correct -->\n[场景说明] 根据路由切换语言\n[代码实现]\n<template>\n  <FConfigProvider :locale=\"currentLocale\">\n    <RouterView />\n  </FConfigProvider>\n</template>\n\n<script setup>\nimport { watch } from 'vue';\nimport { useRoute } from 'vue-router';\n\nconst route = useRoute();\nconst currentLocale = ref(zhCN);\n\nwatch(() => route.query.lang, (lang) => {\n  currentLocale.value = lang === 'en' ? enUS : zhCN;\n});\n</script>"
    },
    {
      "input": "样式覆盖案例",
      "output": "<!-- correct -->\n[场景说明] 覆盖按钮组件的默认样式\n[代码实现]\n<template>\n  <FConfigProvider :themeOverrides=\"{ \n    Button: { \n      colorPrimary: '#ff4d4f',\n      borderRadius: '8px'\n    }\n  }\">\n    <App />\n  </FConfigProvider>\n</template>"
    },
    {
      "input": "主题变量都有哪些可以改？",
      "output": "<!-- correct -->\n[场景说明] 查看可配置的主题变量\n[代码实现]\n主要可配置变量包括：\n- common: 基础样式变量\n- Button: 按钮组件变量\n- Input: 输入框组件变量\n完整列表请参考官方文档"
    },
    {
      "input": "怎么切换成英文？",
      "output": "<!-- correct -->\n[场景说明] 将应用语言切换为英文\n[代码实现]\n<template>\n  <FConfigProvider :locale=\"enUS\">\n    <App />\n  </FConfigProvider>\n</template>\n\n<script setup>\nimport { enUS } from '@fesjs/fes-design';\n</script>"
    },
    {
      "input": "弹窗不显示咋办",
      "output": "<!-- error -->\n[错误分析] 可能getContainer返回了不存在的节点\n[正确代码]\n<template>\n  <div id=\"modal-root\"></div>\n  <FConfigProvider :getContainer=\"() => document.getElementById('modal-root')\">\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 确保挂载容器已渲染"
    },
    {
      "input": "语言包在哪里下载",
      "output": "<!-- correct -->\n[场景说明] 获取官方语言包\n[代码实现]\n官方语言包位于：\nimport { zhCN, enUS } from '@fesjs/fes-design';\n也可自定义语言包对象"
    },
    {
      "input": "主题不生效怎么办",
      "output": "<!-- error -->\n[错误分析] 可能主题配置格式不正确\n[正确代码]\n<template>\n  <FConfigProvider :themeOverrides=\"{ \n    common: { primaryColor: '#1890ff' }\n  }\">\n    <App />\n  </FConfigProvider>\n</template>\n[注意事项] 确保主题配置是有效的对象"
    },
    {
      "input": "能动态切换主题吗",
      "output": "<!-- correct -->\n[场景说明] 实现主题动态切换\n[代码实现]\n<template>\n  <FConfigProvider :themeOverrides=\"currentTheme\">\n    <App />\n  </FConfigProvider>\n</template>\n\n<script setup>\nconst currentTheme = ref({});\n\nfunction toggleTheme() {\n  currentTheme.value = isDark.value \n    ? darkTheme \n    : lightTheme;\n}\n</script>"
    },
    {
      "input": "自定义语言包示例",
      "output": "<!-- correct -->\n[场景说明] 实现自定义语言包\n[代码实现]\n<template>\n  <FConfigProvider :locale=\"{\n    datePicker: {\n      selectDate: '请选择日期',\n      selectTime: '请选择时间'\n    }\n  }\">\n    <App />\n  </FConfigProvider>\n</template>"
    },
    {
      "input": "组合使用：与状态管理配合",
      "output": "<!-- correct -->\n[场景说明] 通过状态管理控制全局配置\n[代码实现]\n<template>\n  <FConfigProvider \n    :locale=\"store.locale\"\n    :themeOverrides=\"store.theme\">\n    <App />\n  </FConfigProvider>\n</template>\n\n<script setup>\nimport { useStore } from './store';\nconst store = useStore();\n</script>"
    }
  ]
};
