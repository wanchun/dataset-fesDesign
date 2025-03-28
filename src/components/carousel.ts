import type { IComponentMetadata } from '../type';

export const carouselMeta: IComponentMetadata = {
    title: '走马灯',
    componentName: 'FCarousel',
    description: '轮播组件，用于展示一组内容以轮播方式切换。支持多种指示器样式、自动播放、循环播放等功能，适用于图片展示、广告轮播等场景。',
    scenarios: [
        '图片展示：用于产品图片轮播展示，支持自动切换和手动切换，提升用户体验。',
        '广告轮播：在首页或活动页面展示多个广告内容，通过自动轮播提高广告曝光率。',
        '内容推荐：展示推荐内容或新闻，通过轮播方式提高内容展示效率。',
        '产品特性展示：通过轮播方式展示产品的多个特性，节省页面空间。',
        '卡片式轮播：在空间受限的场景下使用卡片式轮播，提供更好的交互体验。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [],
    },
    children: [
        'FCarouselItem',
    ],
    propRelations: [
        {
            source: 'autoplay',
            target: 'interval',
            effect: '当autoplay为true时，interval属性生效',
            notes: [
                '自动播放模式下需要设置合理的切换间隔时间',
                '适用于需要自动轮播的场景',
            ],
        },
        {
            source: 'type',
            target: 'showArrow',
            effect: '当type为card时，showArrow默认显示为always',
            notes: [
                '卡片模式下需要更明显的切换箭头',
                '适用于需要直接点击切换的场景',
            ],
        },
    ],
    props: [
        {
            name: 'type',
            title: '类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'default',
                        title: '默认',
                        usage: '常规轮播模式，适用于大多数场景',
                    },
                    {
                        value: 'card',
                        title: '卡片',
                        usage: '卡片式轮播，适用于空间受限的场景',
                    },
                ],
            },
            description: '轮播的类型，影响轮播的展示方式和交互方式',
            defaultValue: 'default',
            example: 'default',
        },
        {
            name: 'height',
            title: '高度',
            valueType: 'string',
            description: '轮播组件的高度，支持CSS单位',
            example: '240px',
        },
        {
            name: 'trigger',
            title: '指示器触发方式',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'click',
                        title: '点击',
                        usage: '通过点击指示器切换轮播项',
                    },
                    {
                        value: 'hover',
                        title: '悬停',
                        usage: '通过悬停指示器切换轮播项',
                    },
                ],
            },
            description: '指示器的触发方式，影响用户交互体验',
            defaultValue: 'click',
            example: 'click',
        },
        {
            name: 'autoplay',
            title: '自动切换',
            valueType: 'bool',
            description: '是否自动切换轮播项',
            defaultValue: true,
            example: true,
        },
        {
            name: 'interval',
            title: '自动切换间隔',
            valueType: 'number',
            description: '自动切换的时间间隔，单位为毫秒',
            defaultValue: 3000,
            example: 3000,
        },
        {
            name: 'loop',
            title: '是否循环',
            valueType: 'bool',
            description: '是否循环播放轮播项',
            defaultValue: true,
            example: true,
        },
        {
            name: 'pauseOnHover',
            title: '悬浮暂停切换',
            valueType: 'bool',
            description: '鼠标悬停时是否暂停自动切换',
            defaultValue: true,
            example: true,
        },
        {
            name: 'indicatorType',
            title: '指示器类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'linear',
                        title: '线性',
                        usage: '常规线性指示器，适用于大多数场景',
                    },
                    {
                        value: 'dot',
                        title: '圆点',
                        usage: '圆点指示器，适用于简洁风格的界面',
                    },
                ],
            },
            description: '指示器的显示类型，影响视觉样式',
            defaultValue: 'linear',
            example: 'linear',
        },
        {
            name: 'indicatorPosition',
            title: '指示器位置',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'default',
                        title: '默认',
                        usage: '指示器显示在轮播区域内',
                    },
                    {
                        value: 'outside',
                        title: '外部',
                        usage: '指示器显示在轮播区域外部',
                    },
                    {
                        value: 'none',
                        title: '无',
                        usage: '不显示指示器',
                    },
                ],
            },
            description: '指示器的显示位置',
            defaultValue: 'default',
            example: 'default',
        },
        {
            name: 'indicatorPlacement',
            title: '指示器方向',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'top',
                        title: '顶部',
                        usage: '指示器显示在顶部',
                    },
                    {
                        value: 'right',
                        title: '右侧',
                        usage: '指示器显示在右侧',
                    },
                    {
                        value: 'bottom',
                        title: '底部',
                        usage: '指示器显示在底部',
                    },
                    {
                        value: 'left',
                        title: '左侧',
                        usage: '指示器显示在左侧',
                    },
                ],
            },
            description: '指示器的摆放方向',
            defaultValue: 'bottom',
            example: 'bottom',
        },
        {
            name: 'showArrow',
            title: '箭头显示时机',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'always',
                        title: '总是显示',
                        usage: '箭头始终显示',
                    },
                    {
                        value: 'hover',
                        title: '悬停显示',
                        usage: '鼠标悬停时显示箭头',
                    },
                    {
                        value: 'never',
                        title: '从不显示',
                        usage: '不显示箭头',
                    },
                ],
            },
            description: '切换箭头的显示时机',
            defaultValue: 'hover',
            example: 'hover',
        },
        {
            name: 'initialIndex',
            title: '初始索引',
            valueType: 'number',
            description: '初始显示的轮播项索引，从0开始',
            defaultValue: 0,
            example: 0,
        },
    ],
    events: [
        {
            name: 'change',
            description: '轮播项切换时触发',
            parameters: [
                {
                    name: 'value',
                    type: 'number',
                    description: '当前激活的轮播项索引',
                },
                {
                    name: 'preValue',
                    type: 'number',
                    description: '上一个激活的轮播项索引',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '轮播项内容',
            required: true,
        },
    ],
    exposes: [
        {
            name: 'setActiveItem',
            description: '手动切换轮播项',
            parameters: [
                {
                    name: 'index',
                    type: 'number',
                    description: '需要切换到的轮播项索引',
                },
            ],
        },
        {
            name: 'prev',
            description: '切换到上一个轮播项',
            parameters: [],
        },
        {
            name: 'next',
            description: '切换到下一个轮播项',
            parameters: [],
        },
    ],
    templates: [
        {
            input: '基础轮播图',
            output: '<!-- correct -->\n[场景说明] 展示一组图片的基础轮播效果\n[代码实现]\n<FCarousel height="240px">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 设置合适的高度，确保图片比例协调',
        },
        {
            input: '自动轮播',
            output: '<!-- correct -->\n[场景说明] 实现自动切换的轮播效果\n[代码实现]\n<FCarousel height="240px" :autoplay="true" :interval="3000">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 设置合理的切换间隔时间，避免过快或过慢',
        },
        {
            input: '卡片式轮播',
            output: '<!-- correct -->\n[场景说明] 在有限空间内展示卡片式轮播\n[代码实现]\n<FCarousel height="200px" type="card">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 卡片模式下建议设置较小的高度',
        },
        {
            input: '自定义指示器',
            output: '<!-- correct -->\n[场景说明] 使用圆点指示器和外部位置\n[代码实现]\n<FCarousel \n  height="240px" \n  indicator-type="dot" \n  indicator-position="outside"\n>\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 外部指示器需要预留足够的空间',
        },
        {
            input: '垂直方向指示器',
            output: '<!-- correct -->\n[场景说明] 在左侧显示垂直方向指示器\n[代码实现]\n<FCarousel \n  height="240px" \n  indicator-placement="left"\n>\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 垂直指示器适合窄长型的轮播区域',
        },
        {
            input: '手动控制轮播',
            output: '<!-- correct -->\n[场景说明] 通过API手动控制轮播切换\n[代码实现]\n<template>\n  <FCarousel ref="carouselRef" height="240px">\n    <FCarouselItem>\n      <img src="https://example.com/image1.jpg" />\n    </FCarouselItem>\n    <FCarouselItem>\n      <img src="https://example.com/image2.jpg" />\n    </FCarouselItem>\n  </FCarousel>\n  <button @click="carouselRef.next()">下一张</button>\n</template>\n\n<script setup>\nconst carouselRef = ref();\n</script>\n[最佳实践] 暴露的方法适合与自定义控制按钮配合使用',
        },
        {
            input: '轮播内容不是图片',
            output: '<!-- correct -->\n[场景说明] 轮播项包含复杂内容而非简单图片\n[代码实现]\n<FCarousel height="300px">\n  <FCarouselItem>\n    <div class="content">\n      <h3>标题1</h3>\n      <p>详细内容描述...</p>\n    </div>\n  </FCarouselItem>\n  <FCarouselItem>\n    <div class="content">\n      <h3>标题2</h3>\n      <p>详细内容描述...</p>\n    </div>\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 复杂内容需要设置足够的高度和样式',
        },
        {
            input: '监听切换事件',
            output: '<!-- correct -->\n[场景说明] 监听轮播切换事件并执行操作\n[代码实现]\n<template>\n  <FCarousel height="240px" @change="handleChange">\n    <FCarouselItem>\n      <img src="https://example.com/image1.jpg" />\n    </FCarouselItem>\n    <FCarouselItem>\n      <img src="https://example.com/image2.jpg" />\n    </FCarouselItem>\n  </FCarousel>\n</template>\n\n<script setup>\nconst handleChange = (current, pre) => {\n  console.log(`从${pre}切换到${current}`);\n};\n</script>\n[最佳实践] 事件处理适合用于统计或联动其他组件',
        },
        {
            input: '轮播高度未设置',
            output: '<!-- error -->\n[错误分析] 未设置height属性会导致轮播区域高度为0\n[正确代码]\n<FCarousel height="240px">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[注意事项] height是必填属性，否则内容无法显示',
        },
        {
            input: '错误的轮播项类型',
            output: '<!-- error -->\n[错误分析] 直接使用非FCarouselItem作为子组件\n[正确代码]\n<FCarousel height="240px">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[注意事项] 子组件必须是FCarouselItem，其他组件无效',
        },
        {
            input: '自动播放间隔太短',
            output: '<!-- error -->\n[错误分析] interval设置过小会导致切换过快影响用户体验\n[正确代码]\n<FCarousel height="240px" :interval="2000">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[注意事项] 建议interval不小于2000毫秒',
        },
        {
            input: '空轮播状态',
            output: '<!-- correct -->\n[场景说明] 处理没有轮播项的空状态\n[代码实现]\n<FCarousel height="240px" v-if="items.length > 0">\n  <FCarouselItem v-for="item in items" :key="item.id">\n    <img :src="item.image" />\n  </FCarouselItem>\n</FCarousel>\n<div v-else class="empty">暂无数据</div>\n[最佳实践] 空状态需要提供友好的提示',
        },
        {
            input: '大量轮播项',
            output: '<!-- correct -->\n[场景说明] 处理大量轮播项的性能优化\n[代码实现]\n<FCarousel height="240px" :loop="false">\n  <FCarouselItem v-for="(item, index) in items" :key="index">\n    <img :src="item.image" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 大量数据时建议关闭循环模式',
        },
        {
            input: '动态修改轮播项',
            output: '<!-- correct -->\n[场景说明] 动态更新轮播内容\n[代码实现]\n<template>\n  <FCarousel height="240px" ref="carousel">\n    <FCarouselItem v-for="item in items" :key="item.id">\n      <img :src="item.image" />\n    </FCarouselItem>\n  </FCarousel>\n  <button @click="addItem">添加项</button>\n</template>\n\n<script setup>\nconst items = ref([...]);\nconst addItem = () => {\n  items.value.push({...});\n};\n</script>\n[最佳实践] 动态更新时确保key值唯一',
        },
        {
            input: '轮播图怎么用',
            output: '<!-- correct -->\n[场景说明] 基础轮播图使用方式\n[代码实现]\n<FCarousel height="240px">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n  <FCarouselItem>\n    <img src="https://example.com/image2.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 必须设置height属性，子组件必须是FCarouselItem',
        },
        {
            input: '轮播不自动播放',
            output: '<!-- correct -->\n[场景说明] 手动控制的轮播图\n[代码实现]\n<FCarousel height="240px" :autoplay="false">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n</FCarousel>\n[最佳实践] 需要用户手动交互时关闭autoplay',
        },
        {
            input: '轮播图样式覆盖',
            output: '<!-- correct -->\n[场景说明] 自定义轮播组件样式\n[代码实现]\n<FCarousel height="240px" class="custom-carousel">\n  <FCarouselItem>\n    <img src="https://example.com/image1.jpg" />\n  </FCarouselItem>\n</FCarousel>\n\n<style>\n.custom-carousel .fes-carousel-item {\n  background-color: #f5f5f5;\n}\n</style>\n[最佳实践] 使用深度选择器覆盖内部样式',
        },
        {
            input: '轮播和分页组合',
            output: '<!-- correct -->\n[场景说明] 轮播与分页组件联动\n[代码实现]\n<template>\n  <FCarousel height="240px" @change="handleChange" ref="carousel">\n    <FCarouselItem v-for="item in items" :key="item.id">\n      <img :src="item.image" />\n    </FCarouselItem>\n  </FCarousel>\n  <FPagination \n    :total="items.length" \n    :current="current" \n    @change="carousel.setActiveItem"\n  />\n</template>\n\n<script setup>\nconst current = ref(0);\nconst handleChange = (index) => {\n  current.value = index;\n};\n</script>\n[最佳实践] 通过事件实现组件间联动',
        },
        {
            input: '轮播和缩略图组合',
            output: '<!-- correct -->\n[场景说明] 轮播主图与缩略图联动\n[代码实现]\n<template>\n  <FCarousel height="400px" ref="mainCarousel">\n    <FCarouselItem v-for="item in items" :key="item.id">\n      <img :src="item.image" />\n    </FCarouselItem>\n  </FCarousel>\n  <FCarousel height="100px" ref="thumbCarousel">\n    <FCarouselItem \n      v-for="(item, index) in items" \n      :key="item.id"\n      @click="mainCarousel.setActiveItem(index)"\n    >\n      <img :src="item.thumbnail" />\n    </FCarouselItem>\n  </FCarousel>\n</template>\n[最佳实践] 通过ref调用组件方法实现联动',
        },
    ],
};
