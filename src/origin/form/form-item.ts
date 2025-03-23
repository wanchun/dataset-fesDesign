import type { IPublicTypeComponentDescription, IPublicTypeFieldConfig } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from '../constants';

export const genRuleMeta = () => {
    const ruleItems = [
        {
            name: 'required',
            title: '必填',
            setter: 'BoolSetter',
        },
        {
            name: 'type',
            title: '值类型',
            setter: {
                componentName: 'SelectSetter',
                props: {
                    options: [
                        { value: 'string', label: '字符' },
                        { value: 'number', label: '数字' },
                        { value: 'array', label: '数组' },
                        { value: 'integer', label: '整数数' },
                        { value: 'float', label: '浮点数' },
                        { value: 'object', label: '对象' },
                        { value: 'date', label: '日期' },
                        { value: 'url', label: 'url' },
                        { value: 'email', label: '邮箱' },
                    ],
                },
                defaultValue: 'string',
            },
        },
        {
            name: 'message',
            title: '失败提示',
            setter: 'StringSetter',
        },
        {
            name: 'max',
            title: '最大值',
            setter: 'NumberSetter',
        },
        {
            name: 'min',
            title: '最小值',
            setter: 'NumberSetter',
        },
        {
            name: 'len',
            title: '长度',
            setter: 'NumberSetter',
        },
        {
            name: 'pattern',
            title: '正则表达式',
            setter: {
                componentName: 'ExpressionSetter',
                props: { placeholder: '如：/^[0-9]+$/' },
            },
        },
        {
            name: 'validator',
            title: '校验函数',
            description:
                '自定义校验逻辑函数，参数value是当前值\n校验结果可以通过调用callback，也可以通过返回Promise.reject和Promise.resolve',
            setter: [
                {
                    componentName: 'FunctionSetter',
                    props: {
                        placeholder:
                            "function (rule, value, callback) {\n\tcallback(); // 校验通过\n\t//callback('校验失败消息')\n}",
                    },
                },
                'ExpressionSetter',
            ],
        },
        {
            name: 'trigger',
            title: '触发时机',
            setter: {
                componentName: 'RadioGroupSetter',
                props: {
                    options: [
                        {
                            label: '值改变时',
                            value: 'change',
                        },
                        {
                            label: '焦点失去时',
                            value: 'blur',
                        },
                    ],
                },
            },
        },
    ];

    const rules: IPublicTypeFieldConfig = {
        name: 'rules',
        title: '校验规则',
        display: 'block',
        defaultValue: [],
        setter: [
            {
                componentName: 'ArraySetter',
                props: {
                    itemSetter: {
                        componentName: 'ObjectSetter',
                        props: { items: ruleItems },
                    },
                    columns: ruleItems.slice(0, 3),
                    defaultItemValue: { type: 'string' },
                },
            },
            'JsonSetter',
        ],
    };

    return rules;
};

export const FormItemMeta: IPublicTypeComponentDescription = {
    title: '表单项',
    category: '布局组件',
    componentName: 'FFormItem',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FFormItem',
        destructuring: true,
    },
    props: [
        {
            name: 'label',
            propType: 'string',
        },
        {
            name: 'prop',
            propType: 'string',
        },
        {
            name: 'rules',
            propType: 'array',
        },
        {
            name: 'labelWidth',
            propType: {
                type: 'oneOfType',
                value: ['string', 'number'],
            },
        },
        {
            name: 'showMessage',
            propType: 'bool',
        },
        {
            name: 'span',
            propType: 'number',
        },
    ],
    configure: {
        component: {
            isContainer: true,
            nestingRule: {
                parentWhitelist: 'FForm',
                // childBlacklist: [
                //     'WInput',
                //     'WSelect',
                //     'WDatePicker',
                //     'WInputNumber',
                //     'WCheckbox',
                //     'WCheckboxGroup',
                //     'WRadio',
                //     'WRadioGroup',
                //     'WSwitch',
                //     'WTimePicker',
                //     'WUpload',
                //     'WSelectTree',
                //     'WSelectCascader',
                //     'WRadioButton',
                // ],
            },
        },
        supports: {
            style: true,
            class: true,
            methods: ['validate'],
        },
        props: [
            {
                name: 'label',
                title: '标签内容',
                setter: 'StringSetter',
            },
            {
                name: 'labelWidth',
                title: '标签宽度',
                setter: ['StringSetter', 'NumberSetter'],
                defaultValue: 'auto',
            },
            {
                name: 'contentStyle',
                title: '内容容器样式',
                display: 'popup',
                setter: 'StyleSetter',
            },
            genRuleMeta(),
            {
                name: 'showMessage',
                title: '显示错误',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                type: 'group',
                title: '其他',
                display: 'block',
                items: [
                    {
                        name: 'span',
                        title: '占据格数',
                        description: '该内容所占据列数，共 24 列',
                        setter: 'NumberSetter',
                        defaultValue: 6,
                    },
                ],
            },
            {
                type: 'group',
                title: '更多配置',
                display: 'popup',
                items: [
                    {
                        name: 'prop',
                        title: '值路径',
                        setter: 'StringSetter',
                    },
                ],
            },
        ],
    },
    snippets: [
        {
            title: '表单项',
            schema: {
                componentName: 'FFormItem',
                children: [],
            },
        },
    ],
    group: '表单组件',
    priority: 1,
};
