import type { IComponentMetadata } from '../type';

export const avatarGroupMeta: IComponentMetadata = {
  "title": "头像组",
  "componentName": "FAvatarGroup",
  "description": "用于展示一组头像的容器组件，支持圆形和方形两种形状，可控制显示数量和悬停展开效果。适用于团队成员展示、用户列表等场景。",
  "scenarios": [
    "团队成员展示：在团队介绍页面使用圆形头像组展示团队成员，增强团队凝聚力展示效果。",
    "用户列表缩略：在评论区域使用头像组展示参与用户，通过max属性控制显示数量保持界面整洁。",
    "协作成员展示：在协作工具中使用方形头像组展示当前协作成员，配合expandOnHover实现悬停展开查看全部。",
    "用户头像墙：在个人主页使用大尺寸头像组展示用户社交关系，通过options配置实现多样化头像展示。",
    "权限管理界面：在权限设置中使用头像组展示具有特定权限的用户，通过text属性实现简洁标识。"
  ],
  "parent": {
    "types": [
      "container",
      "layout"
    ]
  },
  "children": [
    "FAvatar"
  ],
  "propRelations": [
    {
      "source": "max",
      "target": "options",
      "effect": "当options数量超过max时，会显示+{剩余数量}的提示",
      "notes": [
        "max属性必须小于options数组长度才会生效",
        "适用于需要控制显示数量的场景"
      ]
    },
    {
      "source": "expandOnHover",
      "target": "max",
      "effect": "当expandOnHover为true时，max属性控制的显示数量会在悬停时展开",
      "notes": [
        "需要同时设置max和expandOnHover才能生效",
        "适用于需要节省空间但又需要完整展示的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "shape",
      "title": "组形状",
      "valueType": {
        "type": "oneOf",
        "items": [
          {
            "value": "circle",
            "title": "圆形",
            "usage": "适用于大多数用户头像展示场景"
          },
          {
            "value": "square",
            "title": "方形",
            "usage": "适用于需要与方形设计语言保持一致的场景"
          }
        ]
      },
      "description": "头像组的整体形状，影响所有子头像的显示方式",
      "defaultValue": "circle",
      "example": "circle"
    },
    {
      "name": "size",
      "title": "尺寸",
      "valueType": {
        "type": "oneOfType",
        "value": [
          {
            "type": "oneOf",
            "items": [
              {
                "value": "small",
                "title": "小",
                "usage": "适用于紧凑布局或次要信息展示"
              },
              {
                "value": "medium",
                "title": "中",
                "usage": "标准尺寸，适合大多数场景"
              },
              {
                "value": "large",
                "title": "大",
                "usage": "适用于需要突出显示的场景"
              }
            ]
          },
          "number"
        ]
      },
      "description": "头像组的尺寸，可以是预设值或具体像素值",
      "defaultValue": "medium",
      "example": "medium"
    },
    {
      "name": "options",
      "title": "头像配置",
      "valueType": {
        "type": "arrayOf",
        "value": {
          "type": "shape",
          "value": [
            {
              "name": "src",
              "title": "图片头像",
              "valueType": "string",
              "description": "头像图片URL",
              "example": "https://example.com/avatar.jpg"
            },
            {
              "name": "text",
              "title": "文字头像",
              "valueType": "string",
              "description": "当没有图片时显示的文字",
              "example": "A"
            },
            {
              "name": "name",
              "title": "提示信息",
              "valueType": "string",
              "description": "鼠标悬停时显示的名称提示",
              "example": "Alice"
            },
            {
              "name": "icon",
              "title": "图标头像",
              "valueType": "string",
              "description": "当没有图片时显示的图标名称",
              "example": "user"
            }
          ]
        }
      },
      "description": "头像配置数组，支持图片、文字、图标等多种形式",
      "example": [
        {
          "src": "https://example.com/avatar1.jpg",
          "name": "张三"
        },
        {
          "text": "李",
          "name": "李四"
        }
      ]
    },
    {
      "name": "max",
      "title": "最大展示头像数",
      "valueType": "number",
      "description": "最大显示的头像数量，超出部分会显示+{剩余数量}",
      "defaultValue": 3,
      "example": 3
    },
    {
      "name": "expandOnHover",
      "title": "悬停时展开",
      "valueType": "bool",
      "description": "是否在鼠标悬停时展开显示所有头像",
      "example": false
    }
  ],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "自定义子头像内容，通常放置FAvatar组件",
      "required": false
    }
  ],
  "exposes": [],
  "templates": [
    {
      "input": "基础圆形头像组",
      "output": "[场景说明] 展示3个圆形头像\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"[{text:'A'},{text:'B'},{text:'C'}]\" />\n[最佳实践] 使用默认圆形形状，适合大多数用户展示场景"
    },
    {
      "input": "方形头像组带悬停展开",
      "output": "[场景说明] 展示5个方形头像，悬停时展开\n[代码实现] \n<!-- correct -->\n<FAvatarGroup shape=\"square\" :max=\"3\" :expandOnHover=\"true\" :options=\"avatars\" />\n[最佳实践] 适合空间有限但需要完整展示的场景"
    },
    {
      "input": "自定义尺寸头像组",
      "output": "[场景说明] 大尺寸头像组展示\n[代码实现] \n<!-- correct -->\n<FAvatarGroup size=\"large\" :options=\"[{src:'/avatar1.jpg'},{src:'/avatar2.jpg'}]\" />\n[最佳实践] 适用于需要突出显示的场景"
    },
    {
      "input": "混合类型头像组",
      "output": "[场景说明] 同时包含图片、文字和图标头像\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"[\n  {src:'/avatar1.jpg',name:'张三'},\n  {text:'李',name:'李四'},\n  {icon:'user',name:'王五'}\n]\" />\n[最佳实践] 适用于多样化的头像展示需求"
    },
    {
      "input": "头像组数量控制",
      "output": "[场景说明] 控制只显示2个头像\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :max=\"2\" :options=\"avatars\" />\n[最佳实践] 适用于需要保持界面简洁的场景"
    },
    {
      "input": "自定义子头像",
      "output": "[场景说明] 使用slot自定义子头像\n[代码实现] \n<!-- correct -->\n<FAvatarGroup>\n  <FAvatar>F</FAvatar>\n  <FAvatar>L</FAvatar>\n</FAvatarGroup>\n[最佳实践] 需要更灵活控制子头像时的方案"
    },
    {
      "input": "头像组带提示信息",
      "output": "[场景说明] 头像带悬停提示\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"[{text:'A',name:'Alice'},{text:'B',name:'Bob'}]\" />\n[最佳实践] 增强用户体验，显示完整信息"
    },
    {
      "input": "像素级尺寸控制",
      "output": "[场景说明] 精确控制头像尺寸为40px\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :size=\"40\" :options=\"avatars\" />\n[最佳实践] 需要与设计稿精确匹配的场景"
    },
    {
      "input": "错误示例：缺少options",
      "output": "[错误分析] 必须提供options或子组件\n[正确代码] \n<!-- correct -->\n<FAvatarGroup :options=\"avatars\" />\n[注意事项] 必须至少提供options属性或FAvatar子组件"
    },
    {
      "input": "错误示例：max大于options长度",
      "output": "[错误分析] max属性无效\n[正确代码] \n<!-- correct -->\n<FAvatarGroup :max=\"2\" :options=\"[{text:'A'},{text:'B'}]\" />\n[注意事项] max必须小于options数组长度才会生效"
    },
    {
      "input": "错误示例：无效shape值",
      "output": "[错误分析] shape只能是circle或square\n[正确代码] \n<!-- correct -->\n<FAvatarGroup shape=\"circle\" :options=\"avatars\" />\n[注意事项] shape属性只接受预定义值"
    },
    {
      "input": "边界条件：空头像组",
      "output": "[场景说明] 处理空数据情况\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"[]\" v-if=\"avatars.length > 0\" />\n[最佳实践] 应该添加空状态处理"
    },
    {
      "input": "边界条件：大量头像",
      "output": "[场景说明] 处理大量头像的性能优化\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :max=\"5\" :options=\"largeAvatars\" />\n[最佳实践] 使用max控制显示数量避免性能问题"
    },
    {
      "input": "边界条件：极小尺寸",
      "output": "[场景说明] 极小尺寸下的显示效果\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :size=\"16\" :options=\"avatars\" />\n[最佳实践] 最小建议尺寸为24px以保证可识别性"
    },
    {
      "input": "怎么用头像组展示团队人员",
      "output": "[场景说明] 团队人员展示\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"teamMembers.map(m => ({text:m.initials,name:m.name}))\" />\n[最佳实践] 使用姓名首字母作为文字头像"
    },
    {
      "input": "头像组能放图片吗",
      "output": "[场景说明] 使用图片头像\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :options=\"[{src:'/avatar.jpg',name:'张三'}]\" />\n[最佳实践] 通过options.src属性设置图片URL"
    },
    {
      "input": "悬停展开怎么设置",
      "output": "[场景说明] 设置悬停展开效果\n[代码实现] \n<!-- correct -->\n<FAvatarGroup :max=\"3\" :expandOnHover=\"true\" :options=\"avatars\" />\n[注意事项] 需要同时设置max属性才会生效"
    },
    {
      "input": "样式覆盖：自定义间距",
      "output": "[场景说明] 自定义头像间距\n[代码实现] \n<!-- correct -->\n<FAvatarGroup class=\"custom-group\" :options=\"avatars\" />\n<style>\n.custom-group { gap: 8px; }\n</style>\n[最佳实践] 通过CSS gap属性控制间距"
    },
    {
      "input": "与弹窗组件组合使用",
      "output": "[场景说明] 点击头像组显示详情弹窗\n[代码实现] \n<!-- correct -->\n<FAvatarGroup @click=\"showDetail\" :options=\"avatars\" />\n<FModal v-model=\"visible\">...</FModal>\n[最佳实践] 适合需要查看详情的场景"
    },
    {
      "input": "与列表组件组合使用",
      "output": "[场景说明] 在列表项中显示头像组\n[代码实现] \n<!-- correct -->\n<FList>\n  <FListItem v-for=\"item in items\">\n    <FAvatarGroup :options=\"item.members\" />\n  </FListItem>\n</FList>\n[最佳实践] 适合成员列表展示"
    }
  ]
};
