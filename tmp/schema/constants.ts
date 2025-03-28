import type { IComponentMetadata } from '../type';

export const constantsMeta: IComponentMetadata = {
  "title": "FesDesign 版本信息",
  "componentName": "FesDesignVersion",
  "description": "提供 FesDesign 组件库的版本信息，用于版本检测和兼容性检查。包含版本号和组件库名称两个常量。",
  "scenarios": [
    "版本兼容性检查：在项目初始化时检查组件库版本是否符合要求，避免使用不兼容的API。",
    "调试信息展示：在开发环境中显示当前使用的组件库版本，便于问题排查。",
    "文档生成：自动生成文档时包含组件库版本信息，确保文档与版本匹配。",
    "依赖管理：在构建工具中作为依赖版本标识，确保正确的依赖解析。",
    "错误报告：在错误日志中包含组件库版本信息，便于问题定位和修复。"
  ],
  "parent": {
    "types": [],
    "restrictions": []
  },
  "children": [],
  "propRelations": [],
  "props": [
    {
      "name": "FesDesignVersion",
      "title": "版本号",
      "valueType": "string",
      "description": "FesDesign 组件库的当前版本号，遵循语义化版本规范",
      "example": "0.8.74"
    },
    {
      "name": "FesDesignName",
      "title": "组件库名称",
      "valueType": "string",
      "description": "FesDesign 组件库的npm包名称",
      "example": "@fesjs/fes-design"
    }
  ],
  "events": [],
  "slots": [],
  "exposes": [],
  "templates": [
    {
      "input": "如何获取当前组件库版本？",
      "output": "[场景说明] 在项目中需要获取当前使用的组件库版本信息\n[代码实现] import { FesDesignVersion } from '@fesjs/fes-design';\nconsole.log(FesDesignVersion);\n[最佳实践] 建议在项目初始化时进行版本检查"
    },
    {
      "input": "怎么显示组件库名称？",
      "output": "[场景说明] 需要在界面上展示当前使用的组件库名称\n[代码实现] import { FesDesignName } from '@fesjs/fes-design';\n<div>当前组件库: {FesDesignName}</div>\n[最佳实践] 建议在关于页面或调试信息中展示"
    },
    {
      "input": "版本号是什么类型？",
      "output": "[错误分析] 错误地将版本号当作数字类型使用\n[正确代码] const version = FesDesignVersion; // 字符串类型\n[注意事项] 版本号是字符串类型，不能直接进行数学运算"
    },
    {
      "input": "组件库名称可以修改吗？",
      "output": "[错误分析] 尝试修改组件库名称常量\n[正确代码] // FesDesignName 是常量，不可修改\n[注意事项] 组件库名称是只读常量，修改会导致运行时错误"
    },
    {
      "input": "版本比较怎么做？",
      "output": "[场景说明] 需要比较当前版本是否满足最低要求\n[代码实现] import { compareVersions } from 'compare-versions';\nconst isSupported = compareVersions(FesDesignVersion, '0.8.0') >= 0;\n[最佳实践] 使用专门的版本比较工具库"
    },
    {
      "input": "版本号包含哪些部分？",
      "output": "[场景说明] 需要解析语义化版本号\n[代码实现] const [major, minor, patch] = FesDesignVersion.split('.');\n[最佳实践] 遵循MAJOR.MINOR.PATCH的语义化版本规范"
    },
    {
      "input": "怎么判断是不是开发版本？",
      "output": "[场景说明] 需要判断当前是否是开发版本\n[代码实现] const isDev = FesDesignVersion.includes('-dev');\n[最佳实践] 开发版本通常带有-dev后缀"
    },
    {
      "input": "组件库名称有什么用？",
      "output": "[场景说明] 需要理解组件库名称的实际用途\n[代码实现] // 主要用于npm包管理和依赖解析\n[最佳实践] 在package.json中确保使用正确的名称"
    },
    {
      "input": "版本号能直接比较吗？",
      "output": "[错误分析] 直接使用字符串比较版本号\n[正确代码] // 应该使用专门的版本比较工具\n[注意事项] 字符串比较可能导致错误的版本顺序判断"
    },
    {
      "input": "怎么检查版本兼容性？",
      "output": "[场景说明] 需要确保组件库版本满足项目要求\n[代码实现] if (FesDesignVersion < '0.8.0') {\n  console.error('需要升级组件库版本');\n}\n[最佳实践] 在项目入口处进行版本检查"
    },
    {
      "input": "组件库名称包含什么信息？",
      "output": "[场景说明] 需要了解组件库名称的结构\n[代码实现] // @fesjs/表示组织名称，fes-design是包名\n[最佳实践] 完整的包名包含组织前缀"
    },
    {
      "input": "版本号格式不对怎么办？",
      "output": "[错误分析] 使用了非标准的版本号格式\n[正确代码] // 确保版本号遵循语义化版本规范\n[注意事项] 非标准版本号可能导致工具无法正确解析"
    },
    {
      "input": "怎么在错误报告中包含版本信息？",
      "output": "[场景说明] 需要在错误日志中包含组件库版本\n[代码实现] console.error(`Error with FesDesign v${FesDesignVersion}`);\n[最佳实践] 错误报告应包含环境信息"
    },
    {
      "input": "组件库名称可以自定义吗？",
      "output": "[错误分析] 尝试使用自定义名称引用组件库\n[正确代码] // 必须使用官方发布的包名\n[注意事项] 自定义名称会导致无法正确解析依赖"
    },
    {
      "input": "版本号能作为数字使用吗？",
      "output": "[错误分析] 将版本号字符串转为数字使用\n[正确代码] // 应该保持为字符串类型\n[注意事项] 转为数字会丢失补丁版本等信息"
    },
    {
      "input": "怎么在文档中显示版本？",
      "output": "[场景说明] 需要在文档中自动显示当前版本\n[代码实现] // 直接从FesDesignVersion导入\n[最佳实践] 文档生成工具可以自动注入版本信息"
    },
    {
      "input": "组件库名称和版本有什么关系？",
      "output": "[场景说明] 需要理解名称和版本的关联\n[代码实现] // 名称标识组件库，版本标识具体发布\n[最佳实践] 两者共同唯一标识一个组件库实例"
    },
    {
      "input": "版本号包含字母怎么办？",
      "output": "[场景说明] 处理包含预发布标识的版本号\n[代码实现] // 如0.8.74-alpha.1是有效的语义化版本\n[最佳实践] 预发布版本需要特殊处理"
    },
    {
      "input": "怎么检查是否是稳定版？",
      "output": "[场景说明] 需要判断当前是否是稳定版本\n[代码实现] const isStable = !FesDesignVersion.includes('-');\n[最佳实践] 稳定版本不包含预发布标识"
    },
    {
      "input": "组件库名称大小写敏感吗？",
      "output": "[场景说明] 需要了解包名的大小写敏感性\n[代码实现] // npm包名是大小写不敏感的\n[最佳实践] 但仍建议保持大小写一致"
    }
  ]
};
