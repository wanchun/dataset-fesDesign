import type { IPublicTypeComponentDescription } from '@webank/letgo-types';
import { FesDesignName, FesDesignVersion } from './constants';

const meta: IPublicTypeComponentDescription = {
    title: '文本高亮',
    componentName: 'FTextHighlight',
    npm: {
        package: FesDesignName,
        version: FesDesignVersion,
        exportName: 'FTextHighlight',
        destructuring: true,
    },
    configure: {
        supports: {
            style: true,
            class: true,
        },
        component: {
            isContainer: true,
        },
        props: [
            {
                name: 'searchValues',
                title: '搜索内容',
                setter: {
                    componentName: 'ArraySetter',
                    props: {
                        itemSetter: 'StringSetter',
                    },
                },
            },
            {
                name: 'strict',
                title: '严格模式',
                description: '严格模式，是否区分大小写匹配	',
                setter: 'BoolSetter',
            },
            {
                name: 'markTextStyle',
                title: '高亮样式',
                setter: 'StyleSetter',
                display: 'popup',
            },
        ],
    },
    snippets: [
        {
            title: '文本高亮',
            schema: {
                componentName: 'FTextHighlight',
                props: {
                    searchValues: ['is'],
                },
                children: {
                    componentName: 'FText',
                    props: {
                        children: 'This is a test. This is only a test.',
                    },
                },
            },
        },
    ],
    group: '原子组件',
    category: '基础元素',
    priority: 0,
};

export default meta;
