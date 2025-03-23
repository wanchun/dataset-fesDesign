import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '上传',
    componentName: 'FUpload',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FUpload',
        destructuring: true,
    },
    props: [
        {
            name: 'accept',
            title: '上传文件类型',
            propType: {
                type: 'arrayOf',
                value: 'string',
            },
        },
        {
            name: 'action',
            title: '上传接口地址',
            propType: 'string',
        },
        {
            name: 'beforeUpload',
            title: '上传前钩子',
            propType: 'func',
        },
        {
            name: 'beforeRemove',
            title: '删除前钩子',
            propType: 'func',
        },
        {
            name: 'disabled',
            title: '是否禁用',
            propType: 'bool',
            defaultValue: false,
        },
        {
            name: 'fileList',
            title: '已上传列表',
            propType: {
                type: 'arrayOf',
                value: {
                    type: 'shape',
                    value: [
                        {
                            name: 'name',
                            title: '文件名',
                            propType: 'string',
                        },
                        {
                            name: 'url',
                            title: '文件路径',
                            propType: 'string',
                        },
                    ],
                },
            },
        },
        {
            name: 'data',
            title: '额外数据',
            propType: 'object',
        },
        {
            name: 'headers',
            title: '请求头',
            propType: 'object',
        },
        {
            name: 'multiple',
            title: '是否多选',
            propType: 'bool',
        },
        {
            name: 'multipleLimit',
            title: '最大允许上传个数',
            propType: 'number',
        },
        {
            name: 'name',
            title: '上传文件字段名',
            propType: 'string',
        },
        {
            name: 'showFileList',
            title: '是否显示已上传文件列表',
            propType: 'bool',
        },
        {
            name: 'withCredentials',
            title: '是否跨域发送cookie',
            propType: 'bool',
        },
        {
            name: 'timeout',
            title: '超时时间',
            propType: 'number',
        },
        {
            name: 'transformResponse',
            title: '自定义响应',
            propType: 'func',
        },
        {
            name: 'httpRequest',
            title: '自定义请求',
            propType: 'func',
        },
        {
            name: 'tip',
            title: '提示文字',
            propType: 'node',
            defaultValue: {
                type: 'JSSlot',
                value: [
                    {
                        componentName: 'FText',
                        props: {
                            children: '我是提示文字',
                        },
                    },
                ],
            },
        },
    ],
    configure: {
        supports: {
            class: true,
            style: true,
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'value',
                            type: '{file: FileItem, fileList: FileItem[]}',
                        },
                    ],
                },
                {
                    name: 'onRemove',
                    params: [
                        {
                            name: 'value',
                            type: '{file: FileItem, fileList: FileItem[]}',
                        },
                    ],
                },
                {
                    name: 'onSuccess',
                    params: [
                        {
                            name: 'value',
                            type: '{response: any, file: FileItem, fileList: FileItem[]}',
                        },
                    ],
                },
                {
                    name: 'onError',
                    params: [
                        {
                            name: 'value',
                            type: '{error: UploadError, file: FileItem, fileList: FileItem[]}',
                        },
                    ],
                },
                {
                    name: 'onExceed',
                    params: [
                        {
                            name: 'value',
                            type: '{files: FileList, fileList: FileItem[]}',
                        },
                    ],
                },
                {
                    name: 'onProgress',
                    params: [
                        {
                            name: 'value',
                            type: '{event: UploadProgressEvent, file: FileItem, fileList: FileItem[]}',
                        },
                    ],
                },
            ],
        },
        props: [
            {
                name: 'accept',
                title: '文件类型',

                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: {
                            componentName: 'StringSetter',
                            props: { placeholder: 'image/*' },
                            isRequired: false,
                            defaultValue: '',
                        },
                    },
                    defaultValue: [],
                },
            },
            {
                name: 'action',
                title: '上传接口',

                setter: {
                    componentName: 'StringSetter',
                    props: { placeholder: '/example/upload' },
                    isRequired: false,
                    defaultValue: '',
                },
            },
            {
                name: 'disabled',
                title: '是否禁用',

                defaultValue: false,
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'fileList',
                title: '已上传列表',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: {
                            componentName: 'ObjectSetter',
                            props: {
                                items: [
                                    {
                                        name: 'name',
                                        title: '文件名',

                                        setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                                    },
                                    {
                                        name: 'url',
                                        title: '文件路径',

                                        setter: { componentName: 'StringSetter', isRequired: false, defaultValue: '' },
                                    },
                                ],
                                extraSetter: { componentName: 'MixedSetter', isRequired: false, props: {} },
                            },
                        },
                    },
                    defaultValue: [],
                },
            },
            {
                name: 'data',
                title: '附带数据',
                description: '上传接口附带的数据',
                setter: {
                    componentName: 'JsonSetter',
                    props: { placeholder: JSON.stringify({ param1: 'xxx' }, null, 2) },
                    isRequired: false,
                    defaultValue: {},
                },
            },
            {
                name: 'headers',
                title: '请求头',
                setter: {
                    componentName: 'JsonSetter',
                    props: { placeholder: JSON.stringify({ token: 'xxx' }, null, 2) },
                    isRequired: false,
                    defaultValue: {},
                },
            },
            {
                name: 'multiple',
                title: '文件可多选',

                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'multipleLimit',
                title: '可上传数',

                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'name',
                title: '文件字段名',
                description: '上传的文件字段名，用于修改接口接受文件的属性名',
                setter: {
                    componentName: 'StringSetter',
                    props: { placeholder: 'fileName' },
                    isRequired: false,
                    defaultValue: '',
                },
            },
            {
                name: 'showFileList',
                title: '显示列表',
                description: '是否显示已上传文件列表',
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'withCredentials',
                title: '跨域发送cookie',
                description: '支持发送 cookie 凭证信息',
                setter: { componentName: 'BoolSetter', isRequired: false, defaultValue: false },
            },
            {
                name: 'timeout',
                title: '超时时间',
                description: '上传请求的超时时间 （毫秒）',
                setter: { componentName: 'NumberSetter', isRequired: false, defaultValue: 0 },
            },
            {
                name: 'transformResponse',
                title: '自定义响应',
                description: '处理上传请求的响应内容，当抛出错误时判断为上传失败',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(xhr) => xhr.response' },
                    isRequired: false,
                },
            },
            {
                name: 'httpRequest',
                title: '自定义请求',
                description: '自定义文件上传方法',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(option) => request(option)' },
                    isRequired: false,
                },
            },
            {
                name: 'beforeUpload',
                title: '上传前回调',
                description:
                    '上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(file) => Promise.resolve(true)' },
                    isRequired: false,
                },
            },
            {
                name: 'beforeRemove',
                title: '删除文件前回调',
                description:
                    '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '(file, fileList) => Promise.resolve(true)' },
                    isRequired: false,
                },
            },
            {
                name: 'defaultSlot',
                title: '触发内容',
                defaultValue: {
                    type: 'JSSlot',
                    name: 'default',
                    params: ['slotProps'],
                },
                setter: {
                    componentName: 'SlotSetter',
                },
            },
            {
                name: 'tip',
                title: '提示文字',
                defaultValue: {
                    type: 'JSSlot',
                    value: [{ componentName: 'FText', props: { children: '我是提示文字' } }],
                },
                setter: {
                    componentName: 'SlotSetter',
                    props: { mode: 'node' },
                    isRequired: false,
                    defaultValue: { type: 'JSSlot', value: [] },
                },
            },
        ],
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
