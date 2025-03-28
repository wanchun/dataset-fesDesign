import type { IComponentMetadata } from '../type';

export const avatarMeta: IComponentMetadata = {
    title: '头像',
    componentName: 'FAvatar',
    description: '用于展示用户或对象的头像组件，支持图片、图标或文字作为头像内容。提供多种形状、尺寸和样式配置，适用于用户信息展示、评论系统等场景。',
    scenarios: [
        '用户信息展示：在用户个人中心或导航栏使用圆形头像展示用户信息，增强用户识别度。',
        '评论系统：在评论列表中使用中小尺寸的头像展示评论者信息，保持界面整洁。',
        '团队协作：使用头像组展示团队成员，通过hover效果查看完整成员列表。',
        '状态标识：使用不同背景色的头像标识用户在线状态，提供直观的视觉反馈。',
        '内容分类：使用方形头像作为内容分类标识，保持视觉一致性。',
        '加载失败处理：通过fallbackSrc和error事件处理头像图片加载失败的情况，提升用户体验。',
        '自适应布局：使用fit属性控制图片在头像容器中的显示方式，适应不同尺寸需求。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FAvatarGroup',
                description: '头像组场景下必须放在头像组组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'size',
            target: 'fit',
            effect: '当size为数值时，fit属性对图片显示效果影响更明显',
            notes: [
                '在自定义尺寸场景下需要特别注意fit属性的设置',
            ],
        },
        {
            source: 'src',
            target: 'fallbackSrc',
            effect: '当src加载失败时自动使用fallbackSrc',
            notes: [
                '建议同时设置src和fallbackSrc以确保良好的容错性',
            ],
        },
    ],
    props: [
        {
            name: 'src',
            title: '图片地址',
            valueType: 'string',
            description: '头像图片的URL地址，支持相对路径和绝对路径',
            defaultValue: '',
            example: 'https://example.com/avatar.jpg',
        },
        {
            name: 'shape',
            title: '形状',
            valueType: {
                type: 'oneOf',
                items: [
                    {
                        value: 'circle',
                        title: '圆形',
                        usage: '默认形状，适用于大多数用户头像场景',
                    },
                    {
                        value: 'square',
                        title: '方形',
                        usage: '适用于内容分类或特殊设计需求',
                    },
                ],
            },
            description: '头像的形状样式',
            defaultValue: 'circle',
            example: 'circle',
        },
        {
            name: 'size',
            title: '尺寸',
            valueType: {
                type: 'oneOfType',
                value: [
                    {
                        type: 'oneOf',
                        items: [
                            {
                                value: 'small',
                                title: '小',
                                usage: '紧凑布局场景使用',
                            },
                            {
                                value: 'medium',
                                title: '中',
                                usage: '默认尺寸，适合大多数场景',
                            },
                            {
                                value: 'large',
                                title: '大',
                                usage: '需要突出显示的场景',
                            },
                        ],
                    },
                    'number',
                ],
            },
            description: '头像的尺寸，可以是预设值或具体像素数值',
            defaultValue: 'medium',
            example: 40,
        },
        {
            name: 'backgroundColor',
            title: '背景色',
            valueType: 'string',
            description: '当使用文字或图标作为头像时的背景颜色',
            example: '#1890ff',
        },
        {
            name: 'color',
            title: '文字颜色',
            valueType: 'string',
            description: '当使用文字作为头像时的文字颜色',
            example: '#ffffff',
        },
        {
            name: 'fallbackSrc',
            title: '失败图片地址',
            valueType: 'string',
            description: '当src指定的图片加载失败时使用的备用图片地址',
            example: 'https://example.com/fallback.jpg',
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
                        usage: '默认值，图片拉伸填充整个容器',
                    },
                    {
                        value: 'contain',
                        title: '包含',
                        usage: '保持宽高比，完整显示图片',
                    },
                    {
                        value: 'cover',
                        title: '覆盖',
                        usage: '保持宽高比，覆盖整个容器',
                    },
                    {
                        value: 'none',
                        title: '原始尺寸',
                        usage: '保持图片原始尺寸',
                    },
                    {
                        value: 'scale-down',
                        title: '缩小适应',
                        usage: '类似contain，但不会放大图片',
                    },
                ],
            },
            description: '图片在头像容器中的适应方式',
            defaultValue: 'fill',
            example: 'cover',
        },
    ],
    events: [
        {
            name: 'error',
            description: '当src指定的图片加载失败时触发',
            parameters: [],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '头像内容插槽，可以放置文字或图标',
            required: false,
        },
    ],
    templates: [
        {
            input: '基础圆形头像',
            output: '<!-- correct -->\n[场景说明] 展示用户默认头像\n[代码实现] \n<FAvatar>\n  <UserOutlined />\n</FAvatar>\n[最佳实践] 使用图标作为默认头像内容',
        },
        {
            input: '文字头像',
            output: '<!-- correct -->\n[场景说明] 使用用户名字首字母作为头像\n[代码实现] \n<FAvatar backgroundColor="#1890ff" color="#fff">\n  M\n</FAvatar>\n[最佳实践] 设置背景色和文字颜色增强可读性',
        },
        {
            input: '自定义尺寸头像',
            output: '<!-- correct -->\n[场景说明] 在特殊布局中使用大尺寸头像\n[代码实现] \n<FAvatar :size="80" src="https://example.com/avatar.jpg" />\n[最佳实践] 使用数值指定具体尺寸',
        },
        {
            input: '方形头像',
            output: '<!-- correct -->\n[场景说明] 内容分类标识使用方形头像\n[代码实现] \n<FAvatar shape="square" src="https://example.com/category.jpg" />\n[最佳实践] 方形适合非人物头像场景',
        },
        {
            input: '图片适应方式',
            output: '<!-- correct -->\n[场景说明] 确保头像图片完整显示\n[代码实现] \n<FAvatar fit="contain" src="https://example.com/avatar.jpg" />\n[最佳实践] 使用contain保持图片比例',
        },
        {
            input: '容错处理',
            output: '<!-- correct -->\n[场景说明] 处理图片加载失败的情况\n[代码实现] \n<FAvatar \n  src="https://example.com/missing.jpg"\n  fallbackSrc="https://example.com/fallback.jpg"\n  @error="handleError"\n/>\n[最佳实践] 同时设置fallbackSrc和error处理',
        },
        {
            input: '头像组',
            output: '<!-- correct -->\n[场景说明] 展示团队成员头像\n[代码实现] \n<FAvatarGroup :max="3">\n  <FAvatar src="user1.jpg" />\n  <FAvatar src="user2.jpg" />\n  <FAvatar src="user3.jpg" />\n  <FAvatar src="user4.jpg" />\n</FAvatarGroup>\n[最佳实践] 使用max控制显示数量',
        },
        {
            input: 'hover展开效果',
            output: '<!-- correct -->\n[场景说明] 增强头像组的交互体验\n[代码实现] \n<FAvatarGroup :max="3" :expandOnHover="true">\n  <FAvatar src="user1.jpg" />\n  <FAvatar src="user2.jpg" />\n  <FAvatar src="user3.jpg" />\n  <FAvatar src="user4.jpg" />\n</FAvatarGroup>\n[最佳实践] 在团队展示场景使用hover效果',
        },
        {
            input: '缺少src属性',
            output: '<!-- error -->\n[错误分析] 缺少src属性时未提供默认内容\n[正确代码] \n<FAvatar>\n  <UserOutlined />\n</FAvatar>\n[注意事项] 当不使用图片时，应提供图标或文字作为内容',
        },
        {
            input: '错误的size类型',
            output: '<!-- error -->\n[错误分析] size属性传入了不支持的字符串\n[正确代码] \n<FAvatar :size="\'medium\'" />\n[注意事项] size只能是\'small\'/\'medium\'/\'large\'或数值',
        },
        {
            input: '未处理图片加载失败',
            output: '<!-- error -->\n[错误分析] 未处理图片加载失败情况\n[正确代码] \n<FAvatar \n  src="missing.jpg"\n  fallbackSrc="fallback.jpg"\n  @error="handleError"\n/>\n[注意事项] 重要场景必须设置fallbackSrc和error处理',
        },
        {
            input: '空状态处理',
            output: '<!-- correct -->\n[场景说明] 处理无内容时的头像显示\n[代码实现] \n<FAvatar v-if="hasAvatar" src="avatar.jpg" />\n<FAvatar v-else>\n  <QuestionOutlined />\n</FAvatar>\n[最佳实践] 使用条件渲染处理空状态',
        },
        {
            input: '极值尺寸测试',
            output: '<!-- correct -->\n[场景说明] 测试极小和极大尺寸\n[代码实现] \n<FAvatar :size="1" />\n<FAvatar :size="200" />\n[最佳实践] 确保极端尺寸下UI仍保持可用',
        },
        {
            input: '异常数据测试',
            output: '<!-- correct -->\n[场景说明] 测试异常数据输入\n[代码实现] \n<FAvatar :size="NaN" />\n<FAvatar src="javascript:alert(1)" />\n[最佳实践] 组件应能安全处理异常输入',
        },
        {
            input: '怎么设置头像的园形',
            output: '<!-- correct -->\n[场景说明] 设置圆形头像\n[代码实现] \n<FAvatar shape="circle" />\n[最佳实践] shape默认为circle，无需显式设置',
        },
        {
            input: '头像图片显示不全咋办',
            output: '<!-- correct -->\n[场景说明] 调整图片显示方式\n[代码实现] \n<FAvatar fit="contain" />\n[最佳实践] 使用contain或cover适应不同图片比例',
        },
        {
            input: '头像组最多显示几个',
            output: '<!-- correct -->\n[场景说明] 控制头像组显示数量\n[代码实现] \n<FAvatarGroup :max="5" />\n[最佳实践] 根据实际场景合理设置max值',
        },
        {
            input: '自定义样式覆盖',
            output: '<!-- correct -->\n[场景说明] 自定义头像样式\n[代码实现] \n<FAvatar class="custom-avatar" />\n<style>\n.custom-avatar {\n  box-shadow: 0 0 10px rgba(0,0,0,0.2);\n}\n</style>\n[最佳实践] 使用class进行样式覆盖',
        },
        {
            input: '与表格组合使用',
            output: '<!-- correct -->\n[场景说明] 在表格中显示用户头像\n[代码实现] \n<FTable>\n  <FTableColumn prop="avatar">\n    <template #default="{ row }">\n      <FAvatar :src="row.avatar" />\n    </template>\n  </FTableColumn>\n</FTable>\n[最佳实践] 在表格列中使用slot自定义内容',
        },
        {
            input: '与表单组合使用',
            output: '<!-- correct -->\n[场景说明] 在表单中上传头像\n[代码实现] \n<FForm>\n  <FFormItem label="头像">\n    <FAvatar :src="form.avatar" />\n    <FUpload @change="handleUpload" />\n  </FFormItem>\n</FForm>\n[最佳实践] 结合上传组件实现头像编辑功能',
        },
    ],
};
