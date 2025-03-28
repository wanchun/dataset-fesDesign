import type { IComponentMetadata } from '../type';

export const buttonMeta: IComponentMetadata = {
    title: '按钮',
    componentName: 'FButton',
    description: '基础按钮组件，用于在用户界面中触发各种操作。支持多种样式、尺寸和状态，适用于表单提交、对话框确认等场景。',
    scenarios: [
        '表单提交：使用primary类型按钮作为提交按钮，明确用户操作意图',
        '对话框操作：使用不同状态按钮区分确认、取消等操作',
        '工具栏操作：使用text或link类型按钮执行辅助操作',
        '导航功能：使用link类型按钮实现页面跳转',
        '状态提示：使用info/success/warning/danger类型按钮展示不同状态',
        '加载状态：使用loading属性展示异步操作状态',
        '长按钮：使用long属性实现通栏按钮效果',
        '图标按钮：通过icon插槽添加图标增强视觉提示',
        '节流控制：通过throttle属性防止重复点击',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FForm',
                description: '表单场景下建议放在表单组件内',
            },
            {
                parent: 'FSpace',
                description: '间距布局场景下建议放在间距组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'loading',
            target: 'disabled',
            effect: '加载状态时自动禁用按钮',
            notes: [
                '防止异步操作期间的重复点击',
                '需配合throttle属性使用效果更佳',
            ],
        },
        {
            source: 'long',
            target: 'size',
            effect: '长按钮模式下忽略size设置',
            notes: [
                '长按钮会自动撑满父容器宽度',
                '建议在表单场景下使用',
            ],
        },
    ],
    props: [
        {
            name: 'children',
            title: '按钮内容',
            valueType: 'string',
            description: '按钮显示的文本内容',
            required: true,
            example: '提交',
        },
        {
            name: 'disabled',
            title: '禁用状态',
            valueType: 'bool',
            description: '是否禁用按钮交互',
            defaultValue: false,
            example: false,
        },
        {
            name: 'size',
            title: '尺寸',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表单内联按钮',
                    },
                    {
                        value: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        value: 'large',
                        title: '大',
                        usage: '需要突出操作的页面重点区域',
                    },
                ],
            },
            description: '控制按钮的视觉尺寸',
            defaultValue: 'middle',
            example: 'middle',
        },
        {
            name: 'htmlType',
            title: '原生类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'button',
                        title: '普通按钮',
                        usage: '默认按钮行为',
                    },
                    {
                        value: 'submit',
                        title: '提交按钮',
                        usage: '用于表单提交场景',
                    },
                ],
            },
            description: '设置button元素的type属性',
            defaultValue: 'button',
            example: 'button',
        },
        {
            name: 'loading',
            title: '加载状态',
            valueType: 'bool',
            description: '显示加载状态并禁用按钮',
            defaultValue: false,
            example: true,
        },
        {
            name: 'long',
            title: '长按钮',
            valueType: 'bool',
            description: '使按钮宽度撑满父容器',
            defaultValue: false,
            example: true,
        },
        {
            name: 'throttle',
            title: '节流时间',
            valueType: 'number',
            description: '点击事件节流时间(毫秒)',
            defaultValue: 300,
            example: 500,
        },
        {
            name: 'type',
            title: '按钮类型',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'default',
                        title: '默认',
                        usage: '常规操作按钮',
                    },
                    {
                        value: 'primary',
                        title: '主要',
                        usage: '重要操作如提交表单',
                    },
                    {
                        value: 'text',
                        title: '文本',
                        usage: '次要操作或工具栏按钮',
                    },
                    {
                        value: 'link',
                        title: '链接',
                        usage: '导航类操作',
                    },
                    {
                        value: 'info',
                        title: '信息',
                        usage: '信息提示类操作',
                    },
                    {
                        value: 'success',
                        title: '成功',
                        usage: '成功状态提示',
                    },
                    {
                        value: 'warning',
                        title: '警告',
                        usage: '警告类操作提示',
                    },
                    {
                        value: 'danger',
                        title: '危险',
                        usage: '删除等危险操作',
                    },
                ],
            },
            description: '按钮的视觉样式类型',
            defaultValue: 'default',
            example: 'primary',
        },
    ],
    events: [
        {
            name: 'click',
            description: '按钮点击事件',
            parameters: [
                {
                    name: 'event',
                    type: 'MouseEvent',
                    description: '原生点击事件对象',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'icon',
            description: '自定义按钮图标',
            required: false,
        },
    ],
    templates: [
        {
            input: '如何创建一个主要按钮？',
            output: '[场景说明] 创建用于表单提交的主要按钮\n[代码实现] <!-- correct -->\n<FButton type="primary">提交</FButton>\n[最佳实践] 建议在重要操作场景使用primary类型，如表单提交',
        },
        {
            input: '怎么加个加载状态的按钮',
            output: '[场景说明] 创建异步操作时的加载状态按钮\n[代码实现] <!-- correct -->\n<FButton :loading="true">正在提交...</FButton>\n[最佳实践] 加载状态会自动禁用按钮，防止重复提交',
        },
        {
            input: '按钮点击太快会重复触发怎么办',
            output: '[场景说明] 防止快速重复点击的场景\n[代码实现] <!-- correct -->\n<FButton :throttle="500">防抖按钮</FButton>\n[最佳实践] 建议设置300-1000ms的节流时间，根据业务场景调整',
        },
        {
            input: '如何实现通栏按钮效果',
            output: '[场景说明] 创建撑满父容器宽度的按钮\n[代码实现] <!-- correct -->\n<FButton long>确认</FButton>\n[注意事项] 长按钮会忽略size设置，适合在移动端使用',
        },
        {
            input: '带图标的按钮怎么实现',
            output: '[场景说明] 创建带图标的视觉增强按钮\n[代码实现] <!-- correct -->\n<FButton>\n  <template #icon><ProductOutlined /></template>\n  购买\n</FButton>\n[最佳实践] 图标应与按钮功能相关，保持视觉平衡',
        },
        {
            input: '危险操作按钮示例',
            output: '[场景说明] 创建删除等危险操作的警示按钮\n[代码实现] <!-- correct -->\n<FButton type="danger">删除</FButton>\n[注意事项] 危险操作前应添加二次确认机制',
        },
        {
            input: '链接样式按钮',
            output: '[场景说明] 创建导航类链接按钮\n[代码实现] <!-- correct -->\n<FButton type="link">查看详情</FButton>\n[最佳实践] 适合用于页面跳转或展开更多内容',
        },
        {
            input: '小尺寸按钮',
            output: '[场景说明] 创建紧凑布局的小尺寸按钮\n[代码实现] <!-- correct -->\n<FButton size="small">操作</FButton>\n[注意事项] 小尺寸按钮适合在表格操作栏等空间有限区域使用',
        },
        {
            input: '按钮类型写错了，写成type="priary"',
            output: '[错误分析] 拼写错误导致按钮类型无效\n[正确代码] <!-- correct -->\n<FButton type="primary">主要按钮</FButton>\n[注意事项] 有效类型为default/primary/text/link/info/success/warning/danger',
        },
        {
            input: '没写按钮内容',
            output: '[错误分析] 缺少必填的children属性\n[正确代码] <!-- correct -->\n<FButton>确认</FButton>\n[注意事项] 按钮必须包含文本内容，可通过children属性或默认插槽设置',
        },
        {
            input: 'throttle属性写了字符串',
            output: '[错误分析] throttle应为数字类型\n[正确代码] <!-- correct -->\n<FButton :throttle="300">节流按钮</FButton>\n[注意事项] 数字属性需使用v-bind绑定或:前缀',
        },
        {
            input: '空状态按钮怎么处理',
            output: '[场景说明] 处理按钮内容为空的情况\n[代码实现] <!-- correct -->\n<FButton>{{ text || \'默认按钮\' }}</FButton>\n[注意事项] 始终提供默认文本，避免出现空按钮',
        },
        {
            input: '超大尺寸按钮',
            output: '[场景说明] 测试超出尺寸范围的情况\n[代码实现] <!-- correct -->\n<FButton size="middle">最大支持large</FButton>\n[注意事项] 仅支持small/middle/large三种尺寸，其他值会回退到默认',
        },
        {
            input: '节流时间设为0',
            output: '[场景说明] 测试极值情况下的节流设置\n[代码实现] <!-- correct -->\n<FButton :throttle="300">不建议设为0</FButton>\n[注意事项] 设为0会禁用节流功能，建议保持默认300ms',
        },
        {
            input: '按钮能点吗？',
            output: '[场景说明] 基础按钮交互\n[代码实现] <!-- correct -->\n<FButton @click="handleClick">可点击</FButton>\n[最佳实践] 通过click事件处理交互，禁用状态用disabled属性',
        },
        {
            input: '咋整个红色按钮',
            output: '[场景说明] 创建警示状态按钮\n[代码实现] <!-- correct -->\n<FButton type="danger">危险操作</FButton>\n[注意事项] 使用标准语义化类型而非直接修改颜色',
        },
        {
            input: '按钮太长了不好看',
            output: '[场景说明] 控制按钮宽度\n[代码实现] <!-- correct -->\n<FButton :long="false">适中按钮</FButton>\n[最佳实践] 常规场景不建议使用long属性，特殊布局才需要',
        },
        {
            input: '覆盖按钮样式',
            output: '[场景说明] 自定义按钮样式\n[代码实现] <!-- correct -->\n<FButton class="custom-btn">自定义</FButton>\n<style>\n.custom-btn { background: #f00; }\n</style>\n[注意事项] 优先使用type属性，样式覆盖应谨慎使用',
        },
        {
            input: '表单里的提交按钮组合',
            output: '[场景说明] 表单场景下的按钮组合\n[代码实现] <!-- correct -->\n<FForm>\n  <FButton htmlType="submit" type="primary">提交</FButton>\n  <FButton @click="reset">重置</FButton>\n</FForm>\n[最佳实践] 主次按钮区分明确，提交按钮使用primary类型',
        },
        {
            input: '对话框底部按钮布局',
            output: '[场景说明] 对话框操作按钮组合\n[代码实现] <!-- correct -->\n<FSpace>\n  <FButton @click="cancel">取消</FButton>\n  <FButton type="primary" @click="confirm">确认</FButton>\n</FSpace>\n[注意事项] 使用FSpace组件保证按钮间距一致',
        },
    ],
};
