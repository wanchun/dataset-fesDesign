import type { IComponentMetadata } from '../type';

export const spinMeta: IComponentMetadata = {
    title: '加载中',
    componentName: 'FSpin',
    description: '加载中组件，用于在异步操作或数据加载时显示加载状态。支持自定义图标、描述文本和延迟显示，适用于表单提交、数据加载等需要用户等待的场景。',
    scenarios: [
        '表单提交：在表单提交过程中显示加载状态，提示用户操作正在进行，防止重复提交。',
        '数据加载：在数据加载时显示加载状态，提示用户数据正在加载中，避免用户误以为页面卡顿。',
        '页面初始化：在页面初始化时显示加载状态，提示用户页面正在加载，提升用户体验。',
        '异步操作：在异步操作（如上传、下载）时显示加载状态，提示用户操作正在进行中。',
        '延迟加载：在需要延迟显示加载状态的场景下，设置延迟时间，避免频繁的加载状态切换。',
    ],
    parent: {
        types: [
            'container',
            'layout',
        ],
        restrictions: [
            {
                parent: 'FForm',
                description: '表单场景下必须放在表单组件内',
            },
            {
                parent: 'FTable',
                description: '表格场景下必须放在表格组件内',
            },
        ],
    },
    children: [],
    propRelations: [
        {
            source: 'delay',
            target: 'show',
            effect: '延迟显示加载状态',
            notes: [
                '当设置了延迟时间时，加载状态会在延迟时间后显示',
                '适用于需要避免频繁加载状态切换的场景',
            ],
        },
    ],
    props: [
        {
            name: 'show',
            title: '显示',
            propType: 'bool',
            description: '是否显示加载状态',
            defaultValue: true,
        },
        {
            name: 'size',
            title: '大小',
            propType: {
                type: 'oneOf',
                items: [
                    {
                        name: 'small',
                        title: '小',
                        usage: '紧凑场景使用，如表单内联加载',
                    },
                    {
                        name: 'middle',
                        title: '中',
                        usage: '常规尺寸，适合大多数场景',
                    },
                    {
                        name: 'large',
                        title: '大',
                        usage: '需要突出加载状态的页面重点区域',
                    },
                ],
            },
            description: '加载状态的大小，影响加载图标的展示尺寸',
            defaultValue: 'middle',
        },
        {
            name: 'description',
            title: '描述',
            propType: 'string',
            description: '加载状态的描述文本，用于提示用户当前操作的状态',
        },
        {
            name: 'stroke',
            title: '边框颜色',
            propType: 'string',
            description: '加载图标的边框颜色，支持十六进制颜色值或颜色关键字',
        },
        {
            name: 'delay',
            title: '延迟显示',
            propType: 'number',
            description: '加载状态的延迟显示时间（毫秒），在指定时间间隔后显示加载状态',
        },
        {
            name: 'icon',
            title: '自定义图标',
            propType: 'node',
            description: '自定义加载图标，支持传入React节点',
        },
    ],
    events: [],
    slots: [
        {
            name: 'default',
            description: '包裹内容，加载状态会覆盖在包裹内容上',
            required: false,
        },
    ],
};
