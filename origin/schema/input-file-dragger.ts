import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文件选择',
    componentName: 'FInputFileDragger',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FInputFileDragger',
        destructuring: true,
    },
    configure: {
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'v-model',
                title: '绑定变量',
                setter: 'VariableSetter',
            },
            {
                name: 'multiple',
                title: '可多选',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'disabled',
                title: '禁用',
                setter: 'BoolSetter',
                defaultValue: false,
            },
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
                name: 'onFileTypeInvalid',
                title: '类型错误回调',
                description: '拖拽文件类型不满足 accept 时的钩子函数，若未定义则使用内置提示',
                setter: {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder: '(files: File[]) => void',
                    },
                },
            },
            {
                name: '_fileList',
                title: '文件列表',
                setter: 'SlotSetter',
                defaultValue: {
                    type: 'JSSlot',
                    title: '文件列表',
                    name: 'fileList',
                    value: [],
                },
            },
        ],
        supports: {
            events: [
                {
                    name: 'onChange',
                    params: [
                        {
                            name: 'files',
                            type: 'File[]',
                        },
                    ],
                },
            ],
            style: true,
            class: true,
        },
    },
    group: '原子组件',
    category: '数据录入',
    priority: 0,
};

export default meta;
