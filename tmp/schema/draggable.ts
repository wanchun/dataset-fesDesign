import type { IComponentMetadata } from '../type';

export const draggableMeta: IComponentMetadata = {
  "title": "拖拽",
  "componentName": "FDraggable",
  "description": "提供拖拽排序功能的容器组件，支持垂直/水平方向拖拽、多容器间拖拽、动态增删项等功能。可通过指令或组件形式使用，适用于列表排序、看板任务管理等场景。",
  "scenarios": [
    "列表排序：在任务管理系统中使用垂直拖拽对任务优先级进行排序，提供直观的交互体验。",
    "看板管理：在看板系统中实现多列卡片拖拽，支持跨列移动任务卡片。",
    "表单构建：在低代码平台中拖拽表单组件进行布局调整，实现可视化编排。",
    "图片排序：在相册管理中对图片进行拖拽排序，优化用户操作流程。",
    "菜单配置：在后台系统中拖拽菜单项调整导航顺序，简化配置操作。",
    "商品分类：在电商后台拖拽调整商品分类顺序，提升运营效率。",
    "问卷编辑：在问卷系统中拖拽问题调整顺序，优化问卷逻辑流。",
    "课程章节：在教育系统中拖拽调整课程章节顺序，方便内容管理。"
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
      "source": "disabled",
      "target": "droppable",
      "effect": "当disabled为true时，droppable属性无效",
      "notes": [
        "禁用状态下无法进行任何拖拽操作",
        "适用于需要临时锁定布局的场景"
      ]
    }
  ],
  "props": [
    {
      "name": "v-model",
      "title": "绑定值",
      "valueType": "array",
      "description": "绑定的数据数组，拖拽排序后会实时更新",
      "required": true,
      "example": "[1, 2, 3]"
    },
    {
      "name": "tag",
      "title": "根标签",
      "valueType": "string",
      "description": "指定组件的根DOM元素类型",
      "defaultValue": "div",
      "example": "ul"
    },
    {
      "name": "disabled",
      "title": "禁止拖拽",
      "valueType": "bool",
      "description": "是否禁用拖拽功能",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "droppable",
      "title": "允许放置",
      "valueType": "bool",
      "description": "是否允许其他容器的项放置到当前容器",
      "defaultValue": false,
      "example": true
    },
    {
      "name": "beforeDragend",
      "title": "拖拽结束前回调",
      "valueType": {
        "type": "func",
        "parameters": [
          {
            "name": "drag",
            "type": "object",
            "description": "拖拽源信息"
          },
          {
            "name": "drop",
            "type": "object",
            "description": "放置目标信息"
          }
        ],
        "returnType": "any"
      },
      "description": "拖拽结束前的回调函数，返回false可阻止拖拽",
      "example": "(drag, drop) => false"
    }
  ],
  "events": [
    {
      "name": "onDragstart",
      "description": "拖拽开始时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        },
        {
          "name": "item",
          "type": "object",
          "description": "当前拖拽项数据"
        },
        {
          "name": "index",
          "type": "number",
          "description": "当前拖拽项索引"
        }
      ]
    },
    {
      "name": "onDragend",
      "description": "拖拽结束时触发",
      "parameters": [
        {
          "name": "event",
          "type": "Event",
          "description": "原生事件对象"
        },
        {
          "name": "item",
          "type": "object",
          "description": "当前拖拽项数据"
        },
        {
          "name": "index",
          "type": "number",
          "description": "当前拖拽项索引"
        }
      ]
    }
  ],
  "slots": [
    {
      "name": "default",
      "description": "自定义拖拽项内容",
      "required": false,
      "scope": {
        "item": "any",
        "index": "number"
      }
    }
  ],
  "templates": [
    {
      "input": "基础垂直拖拽列表",
      "output": "[场景说明] 实现简单的垂直拖拽排序功能\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div class=\"item\">{{ item }}</div>\n    </template>\n  </FDraggable>\n</template>\n\n<script setup>\nconst list = ref([1, 2, 3, 4, 5]);\n</script>\n[最佳实践] 为拖拽项添加适当的视觉反馈样式"
    },
    {
      "input": "水平拖拽布局",
      "output": "[场景说明] 实现水平方向的拖拽排序\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\" class=\"horizontal\">\n    <template #default=\"{ item }\">\n      <div class=\"item\">{{ item }}</div>\n    </template>\n  </FDraggable>\n</template>\n\n<style>\n.horizontal {\n  display: flex;\n  flex-wrap: wrap;\n}\n</style>\n[注意事项] 需要手动设置flex布局样式"
    },
    {
      "input": "跨容器拖拽",
      "output": "[场景说明] 实现多个容器间的拖拽交互\n[代码实现]\n<!-- correct -->\n<template>\n  <div class=\"container\">\n    <FDraggable v-model=\"list1\" droppable>\n      <!-- 内容 -->\n    </FDraggable>\n    <FDraggable v-model=\"list2\" droppable>\n      <!-- 内容 -->\n    </FDraggable>\n  </div>\n</template>\n[最佳实践] 为不同容器添加视觉区分"
    },
    {
      "input": "动态增删项",
      "output": "[场景说明] 支持动态增减拖拽项\n[代码实现]\n<!-- correct -->\n<template>\n  <div>\n    <button @click=\"addItem\">添加</button>\n    <button @click=\"removeItem\">删除</button>\n    <FDraggable v-model=\"list\">\n      <!-- 内容 -->\n    </FDraggable>\n  </div>\n</template>\n[注意事项] 需要确保key的唯一性"
    },
    {
      "input": "禁用特定容器",
      "output": "[场景说明] 选择性禁用某些容器的拖拽功能\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable \n    v-model=\"list\" \n    :disabled=\"isDisabled\"\n  >\n    <!-- 内容 -->\n  </FDraggable>\n</template>\n[最佳实践] 提供禁用状态的视觉提示"
    },
    {
      "input": "拖拽指令用法",
      "output": "[场景说明] 使用指令实现简单拖拽\n[代码实现]\n<!-- correct -->\n<template>\n  <div v-drag=\"list\">\n    <div v-for=\"item in list\" :key=\"item\">\n      {{ item }}\n    </div>\n  </div>\n</template>\n[注意事项] 指令方式功能较组件方式简单"
    },
    {
      "input": "拖拽验证",
      "output": "[场景说明] 拖拽操作前进行验证\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable \n    v-model=\"list\" \n    :beforeDragend=\"validateDrop\"\n  >\n    <!-- 内容 -->\n  </FDraggable>\n</template>\n\n<script>\nconst validateDrop = (drag, drop) => {\n  return drop.index < 5; // 只允许在前5项放置\n}\n</script>\n[最佳实践] 提供验证失败的提示信息"
    },
    {
      "input": "拖拽动画",
      "output": "[场景说明] 为拖拽添加过渡动画\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div class=\"item\" :class=\"{ 'dragging': isDragging }\">\n        {{ item }}\n      </div>\n    </template>\n  </FDraggable>\n</template>\n\n<style>\n.item {\n  transition: all 0.3s;\n}\n.dragging {\n  opacity: 0.5;\n}\n</style>\n[注意事项] 避免过度复杂的动画影响性能"
    },
    {
      "input": "错误：缺少v-model",
      "output": "[错误分析] 缺少必要的v-model绑定\n[正确代码]\n<!-- correct -->\n<FDraggable v-model=\"list\">\n  <!-- 内容 -->\n</FDraggable>\n[注意事项] v-model是必填属性，用于数据绑定"
    },
    {
      "input": "错误：错误的数据类型",
      "output": "[错误分析] v-model绑定了非数组类型数据\n[正确代码]\n<!-- correct -->\n<FDraggable v-model=\"list\">\n  <!-- 内容 -->\n</FDraggable>\n\n<script>\nconst list = ref([1, 2, 3]); // 必须是数组\n</script>\n[注意事项] v-model必须绑定数组类型数据"
    },
    {
      "input": "错误：无效的tag属性",
      "output": "[错误分析] 使用了不支持的HTML标签\n[正确代码]\n<!-- correct -->\n<FDraggable tag=\"div\" v-model=\"list\">\n  <!-- 内容 -->\n</FDraggable>\n[注意事项] tag属性必须是有效的HTML标签名"
    },
    {
      "input": "空状态处理",
      "output": "[场景说明] 处理空列表状态\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div class=\"item\">{{ item }}</div>\n    </template>\n    <div v-if=\"!list.length\" class=\"empty\">暂无数据</div>\n  </FDraggable>\n</template>\n[最佳实践] 提供友好的空状态提示"
    },
    {
      "input": "大数据量优化",
      "output": "[场景说明] 优化大数据量下的性能\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable \n    v-model=\"list\"\n    :item-key=\"item => item.id\"\n  >\n    <!-- 内容 -->\n  </FDraggable>\n</template>\n[注意事项] 为大量数据项设置稳定的key"
    },
    {
      "input": "怎么让拖拽更顺滑",
      "output": "[场景说明] 优化拖拽体验\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div class=\"item\" style=\"cursor: move;\">\n        {{ item }}\n      </div>\n    </template>\n  </FDraggable>\n</template>\n\n<style>\n.item {\n  transition: transform 0.2s;\n  user-select: none;\n}\n</style>\n[最佳实践] 添加适当的CSS过渡和光标提示"
    },
    {
      "input": "拖拽项能不能自定义样式",
      "output": "[场景说明] 自定义拖拽项样式\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div \n        class=\"custom-item\" \n        :class=\"{ 'active': item.active }\"\n      >\n        {{ item.name }}\n      </div>\n    </template>\n  </FDraggable>\n</template>\n\n<style>\n.custom-item {\n  /* 自定义样式 */\n}\n</style>\n[注意事项] 避免过度复杂的样式影响拖拽体验"
    },
    {
      "input": "怎么禁止某些项被拖拽",
      "output": "[场景说明] 选择性禁用某些项的拖拽\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable v-model=\"list\">\n    <template #default=\"{ item }\">\n      <div \n        class=\"item\" \n        :class=\"{ 'disabled': item.locked }\"\n        @mousedown=\"item.locked ? $event.preventDefault() : null\"\n      >\n        {{ item.name }}\n      </div>\n    </template>\n  </FDraggable>\n</template>\n[注意事项] 需要提供禁用状态的视觉提示"
    },
    {
      "input": "样式覆盖案例",
      "output": "[场景说明] 覆盖默认拖拽样式\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable \n    v-model=\"list\" \n    class=\"custom-draggable\"\n  >\n    <!-- 内容 -->\n  </FDraggable>\n</template>\n\n<style>\n.custom-draggable {\n  /* 覆盖样式 */\n}\n\n.custom-draggable .item {\n  /* 项样式 */\n}\n\n.custom-draggable .dragging {\n  /* 拖拽中样式 */\n}\n</style>\n[最佳实践] 使用作用域样式避免污染"
    },
    {
      "input": "与表格组合使用",
      "output": "[场景说明] 实现表格行拖拽排序\n[代码实现]\n<!-- correct -->\n<template>\n  <FTable>\n    <tbody v-drag=\"list\">\n      <tr v-for=\"item in list\" :key=\"item.id\">\n        <td>{{ item.name }}</td>\n        <!-- 其他列 -->\n      </tr>\n    </tbody>\n  </FTable>\n</template>\n[注意事项] 确保表格结构完整性"
    },
    {
      "input": "与树形组件组合",
      "output": "[场景说明] 实现树形结构拖拽\n[代码实现]\n<!-- correct -->\n<template>\n  <FTree>\n    <FTreeNode \n      v-for=\"node in treeData\" \n      :key=\"node.id\"\n      v-drag=\"node.children\"\n    >\n      {{ node.name }}\n    </FTreeNode>\n  </FTree>\n</template>\n[注意事项] 处理嵌套数据结构"
    },
    {
      "input": "拖拽时怎么获取数据",
      "output": "[场景说明] 获取拖拽过程中的数据\n[代码实现]\n<!-- correct -->\n<template>\n  <FDraggable \n    v-model=\"list\"\n    @dragstart=\"handleDragStart\"\n    @dragend=\"handleDragEnd\"\n  >\n    <!-- 内容 -->\n  </FDraggable>\n</template>\n\n<script>\nconst handleDragStart = (event, item) => {\n  console.log('开始拖拽:', item);\n};\n</script>\n[最佳实践] 合理使用事件处理程序"
    }
  ]
};
