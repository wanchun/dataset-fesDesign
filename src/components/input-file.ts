import type { IComponentMetadata } from '../type';

export const inputFileMeta: IComponentMetadata = {
    title: '文件选择',
    componentName: 'FInputFile',
    description: '文件选择组件，支持单选/多选文件上传，可自定义文件类型限制和展示样式。提供拖拽上传和常规点击上传两种交互方式。',
    scenarios: [
        '表单文件上传：在表单中使用基础文件选择组件，支持单文件或多文件上传，用于提交用户选择的文件。',
        '批量文件上传：通过设置multiple属性支持批量文件选择，适用于需要同时上传多个文件的场景。',
        '图片上传：通过accept属性限制只能选择图片文件，用于头像上传、图片素材管理等场景。',
        '文档上传：限制只能上传特定格式的文档（如PDF），适用于合同、报告等文档管理场景。',
        '自定义样式：通过插槽自定义文件选择触发器和文件列表展示，满足个性化UI需求。',
        '拖拽上传：使用FInputFileDragger组件实现拖拽上传功能，提升用户体验。',
        '文件类型验证：通过onFileTypeInvalid事件处理不符合要求的文件类型，提供友好的用户提示。',
    ],
    parent: {
        types: [
            'container',
            'form',
        ],
        restrictions: [
            {
                parent: 'FFormItem',
                description: '表单场景下建议放在表单项组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'disabled',
            target: [
                'multiple',
                'accept',
            ],
            effect: '禁用状态下无法选择文件，忽略多选和文件类型限制',
            notes: [
                '当disabled为true时，组件变为不可交互状态',
                '适用于需要临时禁用文件上传的场景',
            ],
        },
    ],
    props: [
        {
            name: 'v-model',
            title: '绑定变量',
            valueType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'uid',
                            title: '唯一标识',
                            valueType: {
                                type: 'oneOfType',
                                value: [
                                    'string',
                                    'number',
                                ],
                            },
                            example: '12345',
                        },
                        {
                            name: 'name',
                            title: '文件名',
                            valueType: 'string',
                            example: 'example.pdf',
                        },
                        {
                            name: 'size',
                            title: '文件大小',
                            valueType: 'number',
                            example: 1024,
                        },
                        {
                            name: 'type',
                            title: '文件类型',
                            valueType: 'string',
                            example: 'application/pdf',
                        },
                    ],
                },
            },
            description: '已选择的文件列表，每个文件包含基础信息和唯一标识',
            defaultValue: [],
            example: '[{uid: \'1\', name: \'doc.pdf\', size: 1024, type: \'application/pdf\'}]',
        },
        {
            name: 'multiple',
            title: '可多选',
            valueType: 'bool',
            description: '是否允许选择多个文件',
            defaultValue: false,
            example: true,
        },
        {
            name: 'disabled',
            title: '禁用',
            valueType: 'bool',
            description: '是否禁用文件选择功能',
            defaultValue: false,
            example: false,
        },
        {
            name: 'accept',
            title: '文件类型',
            valueType: {
                type: 'arrayOf',
                value: 'string',
            },
            description: '允许选择的文件类型，如[\'image/*\', \'.pdf\']',
            defaultValue: [],
            example: [
                'image/*',
                '.pdf',
            ],
        },
    ],
    events: [
        {
            name: 'onChange',
            description: '文件选择变化时触发',
            parameters: [
                {
                    name: 'files',
                    type: 'File[]',
                    description: '新选择的文件列表',
                },
            ],
        },
    ],
    slots: [
        {
            name: 'default',
            description: '自定义文件选择触发器的内容',
            required: false,
        },
        {
            name: 'fileList',
            description: '自定义已选择文件的展示方式',
            required: false,
            scope: {
                files: 'FileItem[]',
            },
        },
    ],
    templates: [
        {
            input: '基础文件上传',
            output: '<!-- correct -->\n[场景说明] 基础文件上传功能，允许用户选择单个文件\n[代码实现]\n<FInputFile @change="handleFileChange" />\n\n<script setup>\nconst handleFileChange = (files) => {\n  console.log(\'Selected files:\', files);\n};\n</script>\n[最佳实践] 适用于简单的文件上传需求，无需额外配置',
        },
        {
            input: '多文件上传',
            output: '<!-- correct -->\n[场景说明] 支持用户同时选择多个文件\n[代码实现]\n<FInputFile multiple @change="handleFilesChange" />\n\n<script setup>\nconst handleFilesChange = (files) => {\n  console.log(\'Selected multiple files:\', files);\n};\n</script>\n[最佳实践] 批量上传场景使用，注意后端接口需要支持多文件处理',
        },
        {
            input: '限制图片上传',
            output: '<!-- correct -->\n[场景说明] 限制只能上传图片文件\n[代码实现]\n<FInputFile :accept="[\'image/*\']" @change="handleImageChange" />\n\n<script setup>\nconst handleImageChange = (files) => {\n  console.log(\'Selected images:\', files);\n};\n</script>\n[最佳实践] 头像上传等场景使用，确保文件类型符合要求',
        },
        {
            input: '禁用状态',
            output: '<!-- correct -->\n[场景说明] 禁用文件选择功能\n[代码实现]\n<FInputFile :disabled="true" />\n[最佳实践] 在表单未完成验证等场景下禁用上传功能',
        },
        {
            input: '自定义触发器',
            output: '<!-- correct -->\n[场景说明] 自定义文件选择触发按钮\n[代码实现]\n<FInputFile>\n  <FButton type="primary">选择文件</FButton>\n</FInputFile>\n[最佳实践] 保持与整体UI风格一致',
        },
        {
            input: '自定义文件列表',
            output: '<!-- correct -->\n[场景说明] 自定义已选择文件的展示方式\n[代码实现]\n<FInputFile v-model="fileList">\n  <template #fileList="{ files }">\n    <div v-for="file in files" :key="file.uid">\n      {{ file.name }}\n    </div>\n  </template>\n</FInputFile>\n\n<script setup>\nconst fileList = ref([]);\n</script>\n[最佳实践] 复杂文件列表展示需求使用',
        },
        {
            input: '拖拽上传',
            output: '<!-- correct -->\n[场景说明] 实现拖拽上传功能\n[代码实现]\n<FInputFileDragger :accept="[\'.pdf\']">\n  拖拽文件到此处或点击上传\n</FInputFileDragger>\n[最佳实践] 提升大文件上传体验',
        },
        {
            input: '文件类型验证',
            output: '<!-- correct -->\n[场景说明] 自定义文件类型验证提示\n[代码实现]\n<FInputFileDragger \n  :accept="[\'.pdf\']" \n  :onFileTypeInvalid="handleInvalidFile"\n>\n  拖拽PDF文件到此处\n</FInputFileDragger>\n\n<script setup>\nconst handleInvalidFile = (files) => {\n  alert(\'请上传PDF格式文件\');\n};\n</script>\n[最佳实践] 提供友好的错误提示',
        },
        {
            input: '错误示例：缺少v-model',
            output: '<!-- error -->\n[错误分析] 需要管理已选择文件列表时未使用v-model绑定\n[正确代码]\n<FInputFile v-model="fileList" />\n\n<script setup>\nconst fileList = ref([]);\n</script>\n[注意事项] 需要管理文件列表状态时必须使用v-model',
        },
        {
            input: '错误示例：错误的accept格式',
            output: '<!-- error -->\n[错误分析] accept属性应为数组格式\n[正确代码]\n<FInputFile :accept="[\'image/*\']" />\n[注意事项] 即使只限制一种文件类型也需要使用数组格式',
        },
        {
            input: '错误示例：禁用状态下忽略事件',
            output: '<!-- error -->\n[错误分析] 禁用状态下change事件不会被触发\n[正确代码]\n<FInputFile :disabled="false" @change="handleChange" />\n[注意事项] 确保交互状态与事件处理逻辑一致',
        },
        {
            input: '空状态处理',
            output: '<!-- correct -->\n[场景说明] 处理未选择文件时的空状态\n[代码实现]\n<FInputFile v-model="fileList">\n  <template #fileList="{ files }">\n    <div v-if="files.length === 0">\n      暂无文件\n    </div>\n    <div v-else>\n      <!-- 文件列表展示 -->\n    </div>\n  </template>\n</FInputFile>\n[最佳实践] 提供友好的空状态提示',
        },
        {
            input: '大文件上传',
            output: '<!-- correct -->\n[场景说明] 处理大文件上传场景\n[代码实现]\n<FInputFile @change="handleLargeFile">\n  选择大文件\n</FInputFile>\n\n<script setup>\nconst handleLargeFile = (files) => {\n  if (files[0].size > 100 * 1024 * 1024) {\n    alert(\'文件过大，请压缩后上传\');\n    return;\n  }\n  // 上传逻辑\n};\n</script>\n[最佳实践] 增加文件大小验证',
        },
        {
            input: '文件上传组件怎么用',
            output: '<!-- correct -->\n[场景说明] 基础文件上传实现\n[代码实现]\n<FInputFile @change="handleUpload">\n  点击上传文件\n</FInputFile>\n\n<script setup>\nconst handleUpload = (files) => {\n  // 上传逻辑\n};\n</script>\n[最佳实践] 简单场景直接使用change事件处理',
        },
        {
            input: '上传文件组建样式覆盖',
            output: '<!-- correct -->\n[场景说明] 自定义文件选择组件样式\n[代码实现]\n<FInputFile class="custom-upload">\n  自定义样式上传\n</FInputFile>\n\n<style>\n.custom-upload .fes-input-file-trigger {\n  background: #f5f5f5;\n  border: 1px dashed #d9d9d9;\n}\n</style>\n[最佳实践] 使用深度选择器覆盖默认样式',
        },
        {
            input: '文件上传组建与表单组合',
            output: '<!-- correct -->\n[场景说明] 在表单中使用文件上传组件\n[代码实现]\n<FForm>\n  <FFormItem label="附件上传">\n    <FInputFile v-model="formData.files" />\n  </FFormItem>\n</FForm>\n\n<script setup>\nconst formData = reactive({\n  files: []\n});\n</script>\n[最佳实践] 保持表单数据统一管理',
        },
        {
            input: '上传组建怎么限制文件大小',
            output: '<!-- correct -->\n[场景说明] 限制上传文件大小\n[代码实现]\n<FInputFile @change="handleFileWithSizeLimit" />\n\n<script setup>\nconst handleFileWithSizeLimit = (files) => {\n  const maxSize = 10 * 1024 * 1024; // 10MB\n  if (files.some(file => file.size > maxSize)) {\n    alert(\'单个文件不能超过10MB\');\n    return;\n  }\n  // 上传逻辑\n};\n</script>\n[最佳实践] 在前端进行初步验证减轻服务器压力',
        },
        {
            input: '上传组件怎么显示进度条',
            output: '<!-- correct -->\n[场景说明] 显示文件上传进度\n[代码实现]\n<FInputFile @change="uploadWithProgress" />\n\n<script setup>\nconst uploadWithProgress = (files) => {\n  // 使用XMLHttpRequest或axios等支持进度的上传方式\n  // 实现进度条UI\n};\n</script>\n[最佳实践] 大文件上传时提供进度反馈',
        },
        {
            input: '文件上传后预览',
            output: '<!-- correct -->\n[场景说明] 实现文件上传后预览功能\n[代码实现]\n<FInputFile v-model="files" accept="image/*" />\n<div v-for="file in files" :key="file.uid">\n  <img :src="URL.createObjectURL(file)" width="100" />\n</div>\n\n<script setup>\nconst files = ref([]);\n</script>\n[最佳实践] 图片上传后即时预览',
        },
        {
            input: '上传组件与表格组合',
            output: '<!-- correct -->\n[场景说明] 在表格行内使用上传组件\n[代码实现]\n<FTable :data="data">\n  <FTableColumn prop="name" label="文件名" />\n  <FTableColumn label="操作">\n    <template #default="{ row }">\n      <FInputFile @change="(files) => handleRowUpload(row, files)">\n        <FButton size="small">上传</FButton>\n      </FInputFile>\n    </template>\n  </FTableColumn>\n</FTable>\n\n<script setup>\nconst data = ref([...]);\nconst handleRowUpload = (row, files) => {\n  // 处理行数据上传\n};\n</script>\n[最佳实践] 保持操作按钮风格一致',
        },
    ],
};
