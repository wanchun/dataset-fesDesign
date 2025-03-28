import type { IComponentMetadata } from '../type';

export const imageMeta: IComponentMetadata = {
    title: '图片',
    componentName: 'FImage',
    description: '图片展示组件，支持多种图片格式展示、自适应容器、懒加载、预览等功能。提供丰富的配置选项和事件处理，适用于各种图片展示场景。',
    scenarios: [
        '商品展示：在电商平台中展示商品图片，支持预览和下载功能，提升用户体验。',
        '相册管理：构建图片相册，支持多图预览和切换查看，方便用户浏览大量图片。',
        '内容配图：在文章或新闻中插入配图，支持自适应容器和懒加载，优化页面性能。',
        '头像展示：用于用户头像显示，支持加载状态和错误处理，保证界面完整性。',
        '广告轮播：作为广告图片展示组件，支持预览和自定义容器，满足营销需求。',
        '数据可视化：在数据报表中展示图表图片，支持多种适应方式，确保清晰展示。',
        '移动端适配：在移动端页面中展示图片，支持懒加载和响应式尺寸，优化移动体验。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [],
    propRelations: [
        {
            source: 'lazy',
            target: 'scrollContainer',
            effect: '开启懒加载时需要指定滚动容器',
            notes: [
                '当lazy为true时，scrollContainer属性生效',
                '适用于需要优化性能的长页面场景',
            ],
        },
        {
            source: 'preview',
            target: [
                'hideOnClickModal',
                'previewContainer',
                'name',
                'download',
            ],
            effect: '开启预览功能时，相关预览配置属性生效',
            notes: [
                '当preview为true时，预览相关配置属性才会起作用',
                '适用于需要自定义预览行为的场景',
            ],
        },
    ],
    props: [
        {
            name: 'src',
            title: '图片地址',
            valueType: 'string',
            description: '图片资源路径，支持相对路径和绝对URL',
            required: true,
            example: '/images/1.jpg',
        },
        {
            name: 'width',
            title: '宽度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    'string',
                ],
            },
            description: '图片显示宽度，支持数字(px)或带单位字符串',
            example: 200,
        },
        {
            name: 'height',
            title: '高度',
            valueType: {
                type: 'oneOfType',
                value: [
                    'number',
                    'string',
                ],
            },
            description: '图片显示高度，支持数字(px)或带单位字符串',
            example: '150px',
        },
        {
            name: 'fit',
            title: '适应方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'fill',
                        title: '填充',
                        usage: '拉伸图片以填满容器，可能改变宽高比',
                    },
                    {
                        value: 'contain',
                        title: '包含',
                        usage: '保持宽高比缩放，完整显示在容器内',
                    },
                    {
                        value: 'cover',
                        title: '覆盖',
                        usage: '保持宽高比缩放，填满容器，可能裁剪图片',
                    },
                    {
                        value: 'none',
                        title: '原始尺寸',
                        usage: '保持图片原始尺寸，不进行缩放',
                    },
                    {
                        value: 'scale-down',
                        title: '缩小适应',
                        usage: '类似contain，但不会放大超过原始尺寸',
                    },
                ],
            },
            description: '图片在容器中的适应方式，同CSS object-fit属性',
            defaultValue: 'fill',
            example: 'cover',
        },
        {
            name: 'alt',
            title: '描述文本',
            valueType: 'string',
            description: '图片替代文本，用于无障碍访问和SEO优化',
            example: '商品展示图',
        },
        {
            name: 'preview',
            title: '预览功能',
            valueType: 'bool',
            description: '是否启用图片预览功能',
            defaultValue: false,
            example: true,
        },
        {
            name: 'lazy',
            title: '懒加载',
            valueType: 'bool',
            description: '是否启用懒加载，当图片进入视口时再加载',
            defaultValue: false,
            example: true,
        },
        {
            name: 'name',
            title: '预览名称',
            valueType: 'string',
            description: '预览时显示的图片名称，也作为下载文件名',
            example: '产品展示图.jpg',
        },
        {
            name: 'download',
            title: '下载功能',
            valueType: 'bool',
            description: '是否允许下载图片，需配合name属性使用',
            defaultValue: false,
            example: true,
        },
        {
            name: 'hideOnClickModal',
            title: '点击遮罩关闭',
            valueType: 'bool',
            description: '是否可以通过点击遮罩层关闭预览',
            defaultValue: false,
            example: true,
        },
        {
            name: 'scrollContainer',
            title: '懒加载容器',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '指定懒加载的滚动监听容器，返回DOM元素',
            example: '() => document.querySelector(\'.scroll-container\')',
        },
        {
            name: 'previewContainer',
            title: '预览容器',
            valueType: {
                type: 'func',
                returnType: 'HTMLElement',
            },
            description: '指定预览弹窗挂载的DOM节点',
            defaultValue: '() => document.body',
            example: '() => document.getElementById(\'preview-root\')',
        },
        {
            name: 'placeholder',
            title: '占位内容',
            valueType: 'node',
            description: '图片加载前显示的占位内容',
            example: '<div>加载中...</div>',
        },
        {
            name: 'error',
            title: '错误内容',
            valueType: 'node',
            description: '图片加载失败时显示的内容',
            example: '<div>加载失败</div>',
        },
    ],
    events: [
        {
            name: 'load',
            description: '图片加载成功时触发',
            parameters: [
                {
                    name: 'event',
                    type: 'Event',
                    description: '图片加载事件对象',
                },
            ],
        },
        {
            name: 'error',
            description: '图片加载失败时触发',
            parameters: [
                {
                    name: 'error',
                    type: 'Error',
                    description: '加载错误信息',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'placeholder',
            description: '图片加载前的占位内容插槽',
            required: false,
        },
        {
            name: 'error',
            description: '图片加载失败时的显示内容插槽',
            required: false,
        },
    ],
    templates: [
        {
            input: '基本图片展示',
            output: '[场景说明] 展示一张固定尺寸的图片\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/product.jpg" \n  width="200" \n  height="150"\n  alt="产品展示图"\n/>\n[最佳实践] 建议始终设置alt属性以提高可访问性',
        },
        {
            input: '自适应容器图片',
            output: '[场景说明] 图片自适应不同尺寸容器\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/banner.jpg" \n  fit="cover"\n  style="width: 100%; height: 300px"\n/>\n[最佳实践] 使用cover模式可确保图片填满容器',
        },
        {
            input: '懒加载图片列表',
            output: '[场景说明] 长页面中的图片懒加载\n[代码实现] <!-- correct -->\n<div class="gallery">\n  <FImage \n    v-for="img in images"\n    :key="img.id"\n    :src="img.url"\n    lazy\n    :scrollContainer="() => document.querySelector(\'.gallery\')"\n  />\n</div>\n[最佳实践] 为提升性能，建议对长列表使用懒加载',
        },
        {
            input: '图片预览功能',
            output: '[场景说明] 带预览功能的图片展示\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/detail.jpg" \n  preview\n  name="产品细节图.jpg"\n  download\n  hideOnClickModal\n/>\n[最佳实践] 预览时建议设置name属性作为下载文件名',
        },
        {
            input: '自定义占位内容',
            output: '[场景说明] 图片加载时的自定义占位\n[代码实现] <!-- correct -->\n<FImage src="/images/large.jpg">\n  <template #placeholder>\n    <div class="loading-placeholder">\n      <FSpin />\n      <span>图片加载中...</span>\n    </div>\n  </template>\n</FImage>\n[最佳实践] 占位内容应与图片尺寸保持一致',
        },
        {
            input: '错误处理示例',
            output: '[场景说明] 图片加载失败时的处理\n[代码实现] <!-- correct -->\n<FImage src="invalid-url.jpg">\n  <template #error>\n    <div class="error-tip">\n      <FIcon type="warning" />\n      <span>图片加载失败</span>\n    </div>\n  </template>\n</FImage>\n[最佳实践] 建议为重要图片提供错误处理',
        },
        {
            input: '多图预览组',
            output: '[场景说明] 多张图片的预览组\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <FImage \n    v-for="img in gallery"\n    :key="img.id"\n    :src="img.url"\n    preview\n    width="150"\n    height="150"\n  />\n</FPreviewGroup>\n[最佳实践] 预览组中的图片尺寸应保持一致',
        },
        {
            input: '自定义预览容器',
            output: '[场景说明] 指定预览弹窗的挂载节点\n[代码实现] <!-- correct -->\n<template>\n  <div ref="previewRoot">\n    <FImage \n      src="/images/special.jpg" \n      preview\n      :previewContainer="() => previewRoot"\n    />\n  </div>\n</template>\n[最佳实践] 在复杂布局中可自定义预览容器位置',
        },
        {
            input: '缺少必填src属性',
            output: '[错误分析] 缺少必填的src属性会导致组件无法显示图片\n[正确代码] <!-- correct -->\n<FImage src="/images/required.jpg" />\n[注意事项] src是必填属性，必须提供有效的图片地址',
        },
        {
            input: '无效的fit属性值',
            output: '[错误分析] 使用了不支持的fit值会导致样式异常\n[正确代码] <!-- correct -->\n<FImage \n  src="/images/valid.jpg" \n  fit="contain"\n/>\n[注意事项] fit只能使用fill/contain/cover/none/scale-down之一',
        },
        {
            input: '懒加载未指定容器',
            output: '[错误分析] 开启懒加载但未指定scrollContainer会导致功能异常\n[正确代码] <!-- correct -->\n<FImage \n  src="/images/lazy.jpg" \n  lazy\n  :scrollContainer="() => document.querySelector(\'.scroll-area\')"\n/>\n[注意事项] 使用懒加载时必须指定正确的滚动容器',
        },
        {
            input: '图片显示太小看不清',
            output: '[场景说明] 小尺寸图片放大显示\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/small.jpg" \n  width="300"\n  height="300"\n  fit="none"\n  style="image-rendering: crisp-edges"\n/>\n[最佳实践] 小图放大时建议关闭缩放并优化渲染质量',
        },
        {
            input: '超大图片性能优化',
            output: '[场景说明] 超大尺寸图片的性能优化\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/huge.jpg" \n  width="800"\n  height="600"\n  lazy\n  :scrollContainer="() => window"\n  placeholder="加载高清大图..."\n/>\n[最佳实践] 超大图片应使用懒加载和占位提示',
        },
        {
            input: '怎么让图片自适应高度',
            output: '[场景说明] 图片高度自适应容器\n[代码实现] <!-- correct -->\n<div style="height: 400px">\n  <FImage \n    src="/images/auto-height.jpg" \n    fit="contain"\n    style="height: 100%"\n  />\n</div>\n[最佳实践] 使用contain模式并设置百分比高度',
        },
        {
            input: '图片预览不能关闭',
            output: '[错误分析] 可能是hideOnClickModal设置不当\n[正确代码] <!-- correct -->\n<FImage \n  src="/images/preview.jpg" \n  preview\n  hideOnClickModal\n/>\n[注意事项] 确保hideOnClickModal设置为true才能点击遮罩关闭',
        },
        {
            input: '图片加载不出来咋办',
            output: '[场景说明] 图片加载失败处理\n[代码实现] <!-- correct -->\n<FImage src="可能失效的地址.jpg">\n  <template #error>\n    <div style="color: red">图片加载失败</div>\n  </template>\n</FImage>\n[最佳实践] 建议为重要图片提供错误处理插槽',
        },
        {
            input: '覆盖图片组件样式',
            output: '[场景说明] 自定义图片组件样式\n[代码实现] <!-- correct -->\n<FImage \n  src="/images/style.jpg" \n  class="custom-image"\n/>\n<style>\n.custom-image img {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n</style>\n[最佳实践] 通过CSS选择器覆盖内部img元素样式',
        },
        {
            input: '图片和文字组合展示',
            output: '[场景说明] 图文混排布局\n[代码实现] <!-- correct -->\n<div class="media">\n  <FImage \n    src="/images/avatar.jpg" \n    width="80"\n    height="80"\n    fit="cover"\n  />\n  <div class="content">\n    <h3>标题</h3>\n    <p>描述文字...</p>\n  </div>\n</div>\n[最佳实践] 使用flex布局实现图文混排',
        },
        {
            input: '相册组件集成',
            output: '[场景说明] 构建相册组件\n[代码实现] <!-- correct -->\n<FPreviewGroup>\n  <FSpace>\n    <FImage \n      v-for="photo in photos"\n      :key="photo.id"\n      :src="photo.url"\n      width="120"\n      height="120"\n      preview\n    />\n  </FSpace>\n</FPreviewGroup>\n[最佳实践] 结合FPreviewGroup实现相册预览功能',
        },
    ],
};
