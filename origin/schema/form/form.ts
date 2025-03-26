import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const FormMeta: IPublicTypeComponentDescription = {
    title: '表单',
    componentName: 'FForm',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FForm',
        destructuring: true,
    },
    props: [
        {
            name: 'disabled',
            propType: 'bool',
        },
        {
            name: 'layout',
            propType: 'string',
        },
        {
            name: 'showMessage',
            propType: 'bool',
        },
        {
            name: 'labelWidth',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'labelAlign',
            propType: {
                type: 'oneOf',
                value: ['left', 'right'],
            },
        },
        {
            name: 'labelPlacement',
            propType: {
                type: 'oneOf',
                value: ['left', 'top'],
            },
        },
        {
            name: 'model',
            propType: 'object',
        },
        {
            name: 'rules',
            propType: 'object',
        },
    ],
    configure: {
        supports: {
            style: true,
            class: true,
            events: [
                {
                    name: 'onSubmit',
                    params: [
                        {
                            name: 'event',
                            type: 'Event',
                        },
                    ],
                },
            ],
            methods: ['validate', 'clearValidate', 'resetFields'],
        },
        component: {
            isContainer: true,
            // nestingRule: {
            //     childWhitelist: [
            //         'FFormItem',
            //         'WInput',
            //         'WSelect',
            //         'WDatePicker',
            //         'WInputNumber',
            //         'WCheckbox',
            //         'WCheckboxGroup',
            //         'WRadio',
            //         'WRadioGroup',
            //         'WSwitch',
            //         'WTimePicker',
            //         'WUpload',
            //         'WSelectTree',
            //         'WSelectCascader',
            //         'WRadioButton',
            //     ],
            // },
        },
        props: [
            {
                name: 'model',
                title: '表单对象',
                setter: {
                    componentName: 'ExpressionSetter',
                    props: { placeholder: 'formModel.value' },
                },
            },
            {
                name: 'disabled',
                title: '是否禁用',
                setter: 'BoolSetter',
                defaultValue: false,
            },
            {
                name: 'layout',
                title: '布局',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                title: '垂直表单',
                                value: 'horizontal',
                            },
                            {
                                title: '行内表单',
                                value: 'inline',
                            },
                        ],
                    },
                },
                defaultValue: 'horizontal',
            },
            {
                name: 'labelWidth',
                title: '标签宽度',
                setter: ['StringSetter', 'NumberSetter'],
            },
            {
                name: 'labelPosition',
                title: '标签位置',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '左侧',
                                value: 'left',
                            },
                            {
                                label: '上侧',
                                value: 'top',
                            },
                            {
                                label: '右侧',
                                value: 'right',
                            },
                        ],
                    },
                },
                defaultValue: 'left',
            },
            {
                name: 'showMessage',
                title: '显示校验信息',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                display: 'block',
                title: '行内表单',
                type: 'group',
                items: [
                    {
                        name: 'inlineItemWidth',
                        title: '列宽度',
                        setter: 'NumberSetter',
                        condition: (target) => !target.top.getPropValue('span'),
                    },
                    // {
                    //     name: 'spanItems',
                    //     title: '列数',
                    //     setter: 'NumberSetter',
                    //     defaultValue: 4,
                    //     setValue(target, value) {
                    //         value && target.top.setPropValue('span', 24 / value);
                    //         return value;
                    //     },
                    //     condition: (target) => !target.top.getPropValue('inlineItemWidth'),
                    // },
                    {
                        name: 'inlineItemGap',
                        title: '行间距',
                        setter: 'NumberSetter',
                        defaultValue: 11,
                    },
                    {
                        name: 'span',
                        title: '每列格数',
                        setter: 'NumberSetter',
                        defaultValue: 6,
                        condition: (target) => !target.top.getPropValue('inlineItemWidth'),
                    },
                ],
                condition: (target) => {
                    const val = target.top.getPropValue('layout');
                    return val === 'inline';
                },
            },
            {
                type: 'group',
                title: '更多配置',
                display: 'popup',
                items: [
                    {
                        name: 'rules',
                        title: '规则对象',
                        setter: {
                            componentName: 'JsonSetter',
                            props: {
                                placeholder: JSON.stringify(
                                    {
                                        fileName: { required: true, message: '必填项' },
                                        fileName2: [{ required: true, message: '必填项' }],
                                    },
                                    null,
                                    2,
                                ),
                            },
                        },
                    },
                ],
            },
        ],
    },
    snippets: [
        {
            title: '表单容器',
            schema: {
                componentName: 'FForm',
                props: {
                    labelWidth: 80,
                },
                children: [
                    {
                        componentName: 'WInput',
                        props: {
                            _label: '用户名',
                            placeholder: '请输入用户名',
                        },
                    },
                    {
                        componentName: 'WInput',
                        props: {
                            _label: '密码',
                            type: 'password',
                            placeholder: '请输入密码',
                        },
                    },
                ],
            },
        },
    ],
    group: '表单组件',
    category: '布局组件',
    priority: 0,
};
