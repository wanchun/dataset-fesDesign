import type { IComponentMetadata } from '../type';

export const gridItemMeta: IComponentMetadata = {
    title: '栅格子项',
    componentName: 'FGridItem',
    description: '栅格布局的子项组件，用于在栅格系统中定义子元素的布局方式。支持灵活的定位、间距和排序控制，适用于各种复杂的布局场景。',
    scenarios: [
        '响应式布局：通过span属性定义子项在不同断点下的占位格数，实现响应式布局。',
        '偏移布局：使用offset属性实现子项的水平偏移，创建不对称布局效果。',
        '元素排序：通过order属性调整子项的显示顺序，实现视觉上的重新排列。',
        '精细定位：利用push和pull属性微调子项的位置，实现精确的布局控制。',
        '弹性布局：使用flex属性自定义子项的弹性比例，实现更灵活的布局分配。',
        '表单布局：在表单场景中配合栅格系统使用，实现整齐的表单元素排列。',
        '卡片布局：在卡片列表中使用栅格子项，实现等高等宽的卡片排列效果。',
        '仪表盘布局：在数据可视化仪表盘中，使用栅格子项组织各种图表组件。',
    ],
    parent: {
        types: [],
        restrictions: [
            {
                parent: 'FGrid',
                description: '必须作为FGrid组件的直接子元素使用',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'span',
            target: [
                'offset',
                'pull',
                'push',
            ],
            effect: '当span值改变时，需要重新计算offset、pull和push的有效范围',
            notes: [
                'span值决定了子项的基本宽度',
                'offset、pull和push的值不能超过剩余可用空间',
            ],
        },
        {
            source: 'flex',
            target: [
                'span',
                'offset',
            ],
            effect: '当flex属性启用时，span和offset属性将失效',
            notes: [
                'flex布局和栅格布局是互斥的',
                '优先使用flex布局时需明确禁用栅格布局',
            ],
        },
    ],
    props: [
        {
            name: 'span',
            title: '占位格数',
            valueType: 'number',
            description: '定义子项占据的栅格列数，范围为1-24',
            defaultValue: 24,
            required: false,
            example: 12,
        },
        {
            name: 'offset',
            title: '左侧间隔',
            valueType: 'number',
            description: '栅格左侧的间隔格数，间隔内不可有栅格',
            defaultValue: 0,
            required: false,
            example: 2,
        },
        {
            name: 'pull',
            title: '向左移动',
            valueType: 'number',
            description: '栅格向左移动格数',
            defaultValue: 0,
            required: false,
            example: 1,
        },
        {
            name: 'push',
            title: '向右移动',
            valueType: 'number',
            description: '栅格向右移动格数',
            defaultValue: 0,
            required: false,
            example: 1,
        },
        {
            name: 'order',
            title: '顺序',
            valueType: 'number',
            description: '栅格顺序，用于调整显示顺序',
            defaultValue: 0,
            required: false,
            example: 1,
        },
        {
            name: 'flex',
            title: '自定义flex',
            valueType: {
                type: 'oneOfType',
                value: [
                    'string',
                    'number',
                ],
            },
            description: '自定义flex布局属性，设置后将覆盖栅格布局',
            defaultValue: null,
            required: false,
            example: '1 1 auto',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '栅格子项的内容区域',
            required: true,
        },
    ],
    exposes: [],
    templates: [
        {
            input: '基础栅格子项',
            output: '[场景说明] 创建一个占据12列的栅格子项\n[代码实现] <!-- correct -->\n<FGridItem span={12}>\n  内容区域\n</FGridItem>\n[最佳实践] 建议span值设为栅格总列数的约数，如12、8、6等',
        },
        {
            input: '带偏移的子项',
            output: '[场景说明] 创建向右偏移2列的栅格子项\n[代码实现] <!-- correct -->\n<FGridItem span={8} offset={2}>\n  偏移内容\n</FGridItem>\n[最佳实践] 确保span + offset不超过24，否则会换行',
        },
        {
            input: '弹性布局子项',
            output: '[场景说明] 使用flex布局替代栅格布局\n[代码实现] <!-- correct -->\n<FGridItem flex="1 1 200px">\n  弹性内容\n</FGridItem>\n[最佳实践] 在需要不等宽布局时使用flex属性',
        },
        {
            input: '排序子项',
            output: '[场景说明] 调整子项显示顺序\n[代码实现] <!-- correct -->\n<FGridItem span={8} order={1}>\n  第二个显示\n</FGridItem>\n<FGridItem span={8} order={0}>\n  第一个显示\n</FGridItem>\n[最佳实践] 使用order实现视觉顺序调整，不影响DOM结构',
        },
        {
            input: '响应式子项',
            output: '[场景说明] 在不同断点下设置不同的span值\n[代码实现] <!-- correct -->\n<FGridItem \n  xs={{ span: 24 }}\n  sm={{ span: 12 }}\n  md={{ span: 8 }}\n  lg={{ span: 6 }}\n>\n  响应式内容\n</FGridItem>\n[最佳实践] 使用响应式对象定义不同断点下的布局',
        },
        {
            input: '错误示例：span超过24',
            output: '[错误分析] span值超过24会导致布局异常\n[正确代码] <!-- correct -->\n<FGridItem span={24}>\n  最大宽度内容\n</FGridItem>\n[注意事项] span最大值应为24，超过此值会被自动限制',
        },
        {
            input: '错误示例：offset导致换行',
            output: '[错误分析] span + offset超过24会导致意外换行\n[正确代码] <!-- correct -->\n<FGridItem span={20} offset={4}>\n  合理偏移内容\n</FGridItem>\n[注意事项] 确保span + offset ≤ 24',
        },
        {
            input: '错误示例：同时使用flex和span',
            output: '[错误分析] flex和span属性同时使用会导致布局冲突\n[正确代码] <!-- correct -->\n<FGridItem flex="1">\n  弹性内容\n</FGridItem>\n[注意事项] flex和栅格属性是互斥的，应选择一种布局方式',
        },
        {
            input: '空状态栅格子项',
            output: '[场景说明] 处理空内容的栅格子项\n[代码实现] <!-- correct -->\n<FGridItem span={8}>\n  {isEmpty ? <Empty /> : content}\n</FGridItem>\n[最佳实践] 为空状态提供占位或提示信息',
        },
        {
            input: '极值测试：最小span',
            output: '[场景说明] 测试最小span值的效果\n[代码实现] <!-- correct -->\n<FGridItem span={1}>\n  最小宽度\n</FGridItem>\n[注意事项] span=1时内容可能溢出，需设置overflow处理',
        },
        {
            input: '极值测试：负offset',
            output: '[错误分析] offset不支持负值\n[正确代码] <!-- correct -->\n<FGridItem span={8} offset={0}>\n  正常偏移\n</FGridItem>\n[注意事项] offset必须为0或正整数',
        },
        {
            input: '栅格子项怎么用',
            output: '[场景说明] 栅格子项基本用法\n[代码实现] <!-- correct -->\n<FGrid>\n  <FGridItem span={12}>左侧</FGridItem>\n  <FGridItem span={12}>右侧</FGridItem>\n</FGrid>\n[最佳实践] 必须放在FGrid容器内使用',
        },
        {
            input: '怎么让格子左右移动',
            output: '[场景说明] 使用push/pull调整位置\n[代码实现] <!-- correct -->\n<FGridItem span={8} push={4}>\n  向右移动4格\n</FGridItem>\n[最佳实践] push和pull可以组合使用实现精确控制',
        },
        {
            input: '栅格顺序怎么调',
            output: '[场景说明] 使用order调整显示顺序\n[代码实现] <!-- correct -->\n<FGridItem span={8} order={2}>\n  第二个显示\n</FGridItem>\n<FGridItem span={8} order={1}>\n  第一个显示\n</FGridItem>\n[最佳实践] order值越小显示越靠前',
        },
        {
            input: '自定义样式覆盖',
            output: '[场景说明] 覆盖栅格子项默认样式\n[代码实现] <!-- correct -->\n<FGridItem \n  span={8}\n  style={{ \n    backgroundColor: \'#f0f\',\n    borderRadius: \'8px\'\n  }}\n>\n  自定义样式内容\n</FGridItem>\n[最佳实践] 使用style属性进行临时样式覆盖',
        },
        {
            input: '与表单组件组合',
            output: '[场景说明] 在表单中使用栅格布局\n[代码实现] <!-- correct -->\n<FGrid>\n  <FGridItem span={8}>\n    <FInput placeholder="用户名" />\n  </FGridItem>\n  <FGridItem span={8} offset={8}>\n    <FButton type="primary">提交</FButton>\n  </FGridItem>\n</FGrid>\n[最佳实践] 表单元素与栅格系统配合实现整齐布局',
        },
        {
            input: '与卡片组件组合',
            output: '[场景说明] 创建等宽卡片布局\n[代码实现] <!-- correct -->\n<FGrid>\n  <FGridItem span={6}>\n    <FCard title="卡片1" />\n  </FGridItem>\n  <FGridItem span={6}>\n    <FCard title="卡片2" />\n  </FGridItem>\n</FGrid>\n[最佳实践] 卡片等宽布局建议使用span=6(4列)或span=8(3列)',
        },
    ],
};
