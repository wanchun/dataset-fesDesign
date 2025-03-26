import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '浮动面板',
    componentName: 'FFloatPane',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FFloatPane',
        destructuring: true,
    },
    configure: {
        props: [
            {
                name: 'visible',
                title: '显示',
                setter: 'BoolSetter',
            },
            {
                name: 'title',
                title: '标题',
                setter: ['StringSetter', 'SlotSetter'],
            },
            {
                name: 'displayDirective',
                title: '渲染方式',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '缓存渲染',
                                value: 'show',
                            },
                            {
                                label: '重置渲染',
                                value: 'if',
                            },
                        ],
                    },
                },
                defaultValue: 'show',
            },
            {
                name: 'draggable',
                title: '可拖动',
                setter: 'BoolSetter',
                defaultValue: true,
            },
            {
                name: 'width',
                title: '宽度',
                setter: 'NumberSetter',
                defaultValue: 520,
            },
            {
                name: 'zIndex',
                title: '层级',
                setter: 'NumberSetter',
                defaultValue: 3000,
            },
            {
                name: 'defaultPosition',
                title: '默认位置',
                display: 'block',
                setter: {
                    componentName: 'ObjectSetter',
                    props: {
                        items: [
                            {
                                name: 'top',
                                title: '顶部(px)',
                                setter: 'StringSetter',
                                defaultValue: '50px',
                            },
                            {
                                name: 'right',
                                title: '右侧(px)',
                                setter: 'StringSetter',
                                defaultValue: '50px',
                            },
                            {
                                name: 'bottom',
                                title: '底部(px)',
                                setter: 'StringSetter',
                            },
                            {
                                name: 'left',
                                title: '左侧(px)',
                                setter: 'StringSetter',
                            },
                        ],
                    },
                },
            },
            {
                name: 'cachePosition',
                title: '缓存位置方式',
                setter: {
                    componentName: 'RadioGroupSetter',
                    props: {
                        options: [
                            {
                                label: '会话',
                                value: 'session',
                            },
                            {
                                label: '永久',
                                value: 'local',
                            },
                        ],
                    },
                },
                defaultValue: 'local',
            },
            {
                name: 'contentClass',
                title: '内容样式类名',
                setter: 'StringSetter',
            },
            {
                name: 'getContainer',
                title: '挂载容器',
                setter: {
                    componentName: 'FunctionSetter',
                    props: { placeholder: '() => document.body' },
                    isRequired: false,
                },
            },
        ],
        component: {
            isContainer: true,
            isModal: true,
            dialogControlProp: 'visible',
        },
        supports: {
            events: [
                {
                    name: 'onUpdate:show',
                    params: [
                        {
                            name: 'visible',
                            type: 'boolean',
                        },
                    ],
                },
                {
                    name: 'onAfterEnter',
                    params: [
                        {
                            name: 'el',
                            type: 'Element',
                        },
                    ],
                },
                {
                    name: 'onAfterLeave',
                    params: [
                        {
                            name: 'el',
                            type: 'Element',
                        },
                    ],
                },
            ],
        },
    },
    snippets: [
        {
            title: '浮动面板',
            schema: {
                componentName: 'FFloatPane',
                props: {
                    visible: true,
                    draggable: true,
                    defaultPosition: {
                        top: '50px',
                        right: '50px',
                    },
                },
            },
        },
    ],
    group: '原子组件',
    category: '对话框类',
    priority: 0,
};

export default meta;
