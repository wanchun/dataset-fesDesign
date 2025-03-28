import type { IComponentMetadata } from '../type';

export const carouselItemMeta: IComponentMetadata = {
  "title": "走马灯选项",
  "componentName": "FCarouselItem",
  "description": "走马灯轮播项组件，用于构建轮播内容项，必须作为FCarousel组件的直接子元素使用。支持自定义内容展示，适用于图片轮播、内容展示等场景。",
  "scenarios": [
    "图片轮播：作为图片展示容器，支持自动轮播和手动切换，适用于产品展示、广告推广等场景。",
    "内容展示：作为内容区块容器，支持多内容轮播展示，适用于新闻头条、公告通知等场景。",
    "特色推荐：作为特色内容展示项，支持自定义样式和交互，适用于产品特色、活动推荐等场景。",
    "数据可视化：作为数据展示容器，支持多图表轮播展示，适用于数据报表、统计信息等场景。",
    "操作引导：作为操作引导步骤项，支持分步引导用户操作，适用于新手引导、功能教程等场景。"
  ],
  "parent": {
    "types": [],
    "restrictions": [
      {
        "parent": "FCarousel",
        "description": "必须作为走马灯组件的直接子元素使用"
      }
    ]
  },
  "children": [],
  "propRelations": [],
  "props": [],
  "events": [],
  "slots": [
    {
      "name": "default",
      "description": "走马灯项的内容区域",
      "required": false
    }
  ],
  "templates": [
    {
      "input": "基础图片轮播项",
      "output": "[场景说明] 创建基础图片轮播项\n[代码实现] <!-- correct -->\n<FCarouselItem>\n  <img src=\"image1.jpg\" alt=\"轮播图片1\" />\n</FCarouselItem>\n[最佳实践] 建议图片保持统一尺寸比例"
    },
    {
      "input": "带标题的内容轮播项",
      "output": "[场景说明] 创建带标题的内容轮播项\n[代码实现] <!-- correct -->\n<FCarouselItem>\n  <h3>标题</h3>\n  <p>内容描述文本</p>\n</FCarouselItem>\n[最佳实践] 保持内容简洁，避免过多文本"
    },
    {
      "input": "自定义样式轮播项",
      "output": "[场景说明] 创建自定义样式轮播项\n[代码实现] <!-- correct -->\n<FCarouselItem style={{ background: '#f0f0f0' }}>\n  <div className=\"custom-content\">自定义内容</div>\n</FCarouselItem>\n[最佳实践] 确保自定义样式不影响轮播动画效果"
    },
    {
      "input": "错误示例：单独使用轮播项",
      "output": "[错误分析] 轮播项必须作为FCarousel的子组件使用\n[正确代码] <!-- correct -->\n<FCarousel>\n  <FCarouselItem>内容1</FCarouselItem>\n  <FCarouselItem>内容2</FCarouselItem>\n</FCarousel>\n[注意事项] 单独使用轮播项不会显示任何效果"
    },
    {
      "input": "空状态轮播项",
      "output": "[场景说明] 处理空状态轮播项\n[代码实现] <!-- correct -->\n<FCarouselItem>\n  {content || <div className=\"empty-placeholder\">暂无内容</div>}\n</FCarouselItem>\n[最佳实践] 为空状态提供友好的占位提示"
    },
    {
      "input": "轮播项怎么用",
      "output": "[场景说明] 基础轮播项使用方式\n[代码实现] <!-- correct -->\n<FCarousel>\n  <FCarouselItem>内容1</FCarouselItem>\n  <FCarouselItem>内容2</FCarouselItem>\n</FCarousel>\n[最佳实践] 建议至少包含2个轮播项以获得最佳效果"
    },
    {
      "input": "轮播相片不显示",
      "output": "[错误分析] 可能原因：1.未正确嵌套在FCarousel中 2.图片路径错误\n[正确代码] <!-- correct -->\n<FCarousel>\n  <FCarouselItem>\n    <img src=\"correct-path.jpg\" alt=\"轮播图片\" />\n  </FCarouselItem>\n</FCarousel>\n[注意事项] 检查图片路径和父容器是否正确"
    },
    {
      "input": "轮播项与其他组件组合使用",
      "output": "[场景说明] 轮播项与卡片组件组合使用\n[代码实现] <!-- correct -->\n<FCarousel>\n  <FCarouselItem>\n    <FCard title=\"卡片标题\">卡片内容</FCard>\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 确保组合组件尺寸适配轮播容器"
    }
  ]
};
