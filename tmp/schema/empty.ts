import type { IComponentMetadata } from '../type';

export const emptyMeta: IComponentMetadata = {
  "title": "空数据",
  "componentName": "FEmpty",
  "description": "空数据时的占位提示组件，用于在数据为空时展示友好的提示信息。支持自定义图片、描述内容和底部操作区域。",
  "scenarios": [
    "列表空状态：当表格、列表等数据为空时，展示统一的空数据提示，保持界面一致性。",
    "下拉选项空状态：在下拉选择器等组件中，当选项为空时展示空数据提示，引导用户操作。",
    "自定义空状态：通过插槽自定义空状态图片和描述，满足品牌化设计需求。",
    "操作引导：在空状态区域添加操作按钮，引导用户进行下一步操作。",
    "异常处理：在网络请求失败或数据加载异常时，展示友好的空状态提示。"
  ],
  "parent": {
    "types": [
      "container"
    ],
    "restrictions": [
      {
        "parent": "FSelect",
        "description": "下拉选择器场景下必须放在选择器组件内"
      }
    ]
  },
  "children": [],
  "propRelations": [
    {
      "source": "image",
      "target": "imageSrc",
      "effect": "当使用image插槽时，imageSrc属性将失效",
      "notes": [
        "插槽优先级高于属性配置",
        "适用于需要完全自定义图片的场景"
      ]
    },
    {
      "source": "descriptionSlot",
      "target": "description",
      "effect": "当使用descriptionSlot插槽时，description属性将失效",
      "notes": [
        "插槽优先级高于属性配置",
        "适用于需要完全自定义描述内容的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "description",
      "title": "描述信息",
      "valueType": "string",
      "description": "空状态的描述文字，支持HTML字符串",
      "example": "暂无数据"
    },
    {
      "name": "imageSrc",
      "title": "图像地址",
      "valueType": "string",
      "description": "空状态图片的URL地址，优先级低于image插槽",
      "example": "/images/empty.svg"
    },
    {
      "name": "imageStyle",
      "title": "自定义样式",
      "valueType": "object",
      "description": "自定义空状态图片的样式，支持CSS属性",
      "example": {
        "width": "200px",
        "height": "auto"
      }
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "底部内容区域，可用于放置操作按钮等",
      "required": false
    },
    {
      "name": "image",
      "description": "自定义空状态图片内容，优先级高于imageSrc属性",
      "required": false
    },
    {
      "name": "description",
      "description": "自定义描述内容，优先级高于description属性",
      "required": false
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基础空状态",
      "output": "<!-- correct -->\n[场景说明] 基本空状态展示\n[代码实现]\n<FEmpty />\n[最佳实践] 适用于简单的空数据提示场景"
    },
    {
      "input": "自定义图片URL",
      "output": "<!-- correct -->\n[场景说明] 通过属性配置自定义图片\n[代码实现]\n<FEmpty \n  image-src=\"/custom-empty.png\" \n  description=\"暂无数据\"\n/>\n[最佳实践] 适用于需要更换默认图片但不需要完全自定义的场景"
    },
    {
      "input": "自定义图片样式",
      "output": "<!-- correct -->\n[场景说明] 调整空状态图片大小\n[代码实现]\n<FEmpty \n  :image-style=\"{ width: '300px' }\"\n  description=\"数据加载中...\"\n/>\n[最佳实践] 适用于需要调整图片尺寸的场景"
    },
    {
      "input": "插槽自定义图片",
      "output": "<!-- correct -->\n[场景说明] 完全自定义空状态图片\n[代码实现]\n<FEmpty>\n  <template #image>\n    <img src=\"/custom-image.png\" alt=\"empty\">\n  </template>\n</FEmpty>\n[最佳实践] 适用于需要完全控制图片展示的场景"
    },
    {
      "input": "自定义描述内容",
      "output": "<!-- correct -->\n[场景说明] 使用插槽自定义描述\n[代码实现]\n<FEmpty>\n  <template #description>\n    <span style=\"color: red\">数据加载失败</span>\n  </template>\n</FEmpty>\n[最佳实践] 适用于需要特殊样式或内容的描述场景"
    },
    {
      "input": "添加底部操作",
      "output": "<!-- correct -->\n[场景说明] 空状态带操作按钮\n[代码实现]\n<FEmpty description=\"暂无权限\">\n  <FButton type=\"primary\">申请权限</FButton>\n</FEmpty>\n[最佳实践] 适用于需要引导用户操作的场景"
    },
    {
      "input": "下拉选择器空状态",
      "output": "<!-- correct -->\n[场景说明] 下拉选择器的空状态\n[代码实现]\n<FSelect>\n  <template #empty>\n    <FEmpty \n      image-style=\"width: 80px;\" \n      description=\"暂无选项\"\n    />\n  </template>\n</FSelect>\n[最佳实践] 适用于下拉选择器的空状态定制"
    },
    {
      "input": "网络错误提示",
      "output": "<!-- correct -->\n[场景说明] 网络错误时的空状态\n[代码实现]\n<FEmpty \n  image-src=\"/error.png\"\n  description=\"网络连接失败，请重试\"\n>\n  <FButton @click=\"reload\">重新加载</FButton>\n</FEmpty>\n[最佳实践] 适用于网络错误时的用户提示"
    },
    {
      "input": "图片地址类型错误",
      "output": "<!-- error -->\n[错误分析] imageSrc属性应为字符串类型\n[正确代码]\n<FEmpty :image-src=\"'/empty.png'\" />\n[注意事项] 图片地址必须为字符串类型，否则会导致加载失败"
    },
    {
      "input": "同时使用image属性和插槽",
      "output": "<!-- error -->\n[错误分析] image插槽和imageSrc属性同时使用时，插槽会覆盖属性\n[正确代码]\n<FEmpty>\n  <template #image>\n    <!-- 自定义图片内容 -->\n  </template>\n</FEmpty>\n[注意事项] 插槽优先级高于属性，同时使用时属性配置无效"
    },
    {
      "input": "缺少必要的容器",
      "output": "<!-- error -->\n[错误分析] 在下拉选择器场景中未正确放置空状态组件\n[正确代码]\n<FSelect>\n  <template #empty>\n    <FEmpty />\n  </template>\n</FSelect>\n[注意事项] 在下拉选择器场景中必须使用#empty插槽"
    },
    {
      "input": "空状态极简展示",
      "output": "<!-- correct -->\n[场景说明] 最小化空状态展示\n[代码实现]\n<FEmpty :image-src=\"null\" description=\"\" />\n[最佳实践] 适用于需要极简风格的空状态"
    },
    {
      "input": "超大图片处理",
      "output": "<!-- correct -->\n[场景说明] 处理超大尺寸图片\n[代码实现]\n<FEmpty \n  :image-style=\"{ \n    maxWidth: '100%', \n    height: 'auto' \n  }\"\n/>\n[最佳实践] 防止图片超出容器范围"
    },
    {
      "input": "国际化空状态",
      "output": "<!-- correct -->\n[场景说明] 多语言空状态\n[代码实现]\n<FEmpty \n  :description=\"$t('empty.description')\"\n  :image-src=\"locale === 'en' ? '/empty-en.png' : '/empty-zh.png'\"\n/>\n[最佳实践] 适用于多语言应用场景"
    },
    {
      "input": "咋个搞个没得数据的提示嘛",
      "output": "<!-- correct -->\n[场景说明] 非专业表述转换为标准实现\n[代码实现]\n<FEmpty description=\"暂无数据\" />\n[最佳实践] 使用标准属性配置实现空状态"
    },
    {
      "input": "空数据图片太小了怎么办",
      "output": "<!-- correct -->\n[场景说明] 调整空状态图片大小\n[代码实现]\n<FEmpty :image-style=\"{ width: '200px' }\" />\n[最佳实践] 通过imageStyle属性控制图片尺寸"
    },
    {
      "input": "空数据组件怎么加按钮",
      "output": "<!-- correct -->\n[场景说明] 在空状态中添加操作按钮\n[代码实现]\n<FEmpty description=\"暂无数据\">\n  <FButton>刷新</FButton>\n</FEmpty>\n[最佳实践] 使用默认插槽添加底部内容"
    },
    {
      "input": "自定义空状态样式",
      "output": "<!-- correct -->\n[场景说明] 覆盖默认样式\n[代码实现]\n<FEmpty class=\"custom-empty\" />\n\n<style>\n.custom-empty {\n  background: #f5f5f5;\n  padding: 20px;\n}\n</style>\n[最佳实践] 通过class和style属性自定义样式"
    },
    {
      "input": "表格和下拉选择器的空状态组合",
      "output": "<!-- correct -->\n[场景说明] 组合使用空状态组件\n[代码实现]\n<template>\n  <FTable :data=\"[]\">\n    <template #empty>\n      <FEmpty />\n    </template>\n  </FTable>\n  \n  <FSelect>\n    <template #empty>\n      <FEmpty image-style=\"width: 80px;\" />\n    </template>\n  </FSelect>\n</template>\n[最佳实践] 在不同容器中使用定制化的空状态"
    }
  ]
};
