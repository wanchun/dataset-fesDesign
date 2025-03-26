# Tree 树形控件 [​]()

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 组件注册 [​]()

js

```
import { FTree } from '@fesjs/fes-design';

app.use(FTree);
```

## 代码演示 [​]()

### 基础用法 [​]()

基础的树形结构展示。

play

```
<template>
    <FGrid>
        <FGridItem :span="12">
            默认为可选中：
            <FTree :data="data1" />
        </FGridItem>
        <FGridItem :span="12">
            选中后无法取消：
            <FTree :data="data2" :cancelable="false" />
        </FGridItem>
    </FGrid>
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix = null, suffix = null) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data1 = reactive(createData(3));
        const data2 = [
            {
                label: '二生三',
                value: '20',
                children: [
                    {
                        label: '三生万物',
                        value: '2010',
                        prefix: null,
                        suffix: null,
                        children: [
                            {
                                label: '三生万物',
                                value: '312010',
                                prefix: null,
                                suffix: null,
                            },
                            {
                                label: '三生万物',
                                value: '312011',
                                prefix: null,
                                suffix: null,
                            },
                        ],
                    },
                    {
                        label: '三生万物',
                        value: '2011',
                        prefix: null,
                        suffix: null,
                    },
                ],
                prefix: null,
                suffix: null,
            },
            {
                label: '二生三',
                value: '21',
                prefix: null,
                suffix: null,
            },
        ];
        return {
            data1,
            data2,
        };
    },
};
</script>
```

### 虚拟列表 [​]()

设置 `virtualList` 属性，处理大数据。

play

```
<template>
    {{ checkedKeys }}
    <FTree
        v-model:checkedKeys="checkedKeys"
        :data="data"
        virtualList
        checkable
        cascade
        checkStrictly="parent"
    />
</template>

<script>
import { reactive, ref } from 'vue';

function createData(level = 4, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 10 }).map((_, index) => {
        const key = baseKey ? `${baseKey}_${index}` : `${index}`;
        return {
            label: createLabel(level, index),
            value: key,
            children: createData(level - 1, key),
        };
    });
}

function createLabel(level, index) {
    if (level === 4) {
        return `道生一_${index}`;
    }
    if (level === 3) {
        return `一生二_${index}`;
    }
    if (level === 2) {
        return `二生三_${index}`;
    }
    if (level === 1) {
        return `三生万物_${index}`;
    }
}

export default {
    setup() {
        const data = reactive(createData());
        const checkedKeys = ref(['0']);
        return {
            data,
            checkedKeys,
        };
    },
};
</script>

<style scoped>
.fes-tree {
    height: 300px;
}
</style>
```

#### 叶子节点一行展示 [​]()

play

```
<template>
    <FTree :data="data" inline defaultExpandAll />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix = null, suffix = null) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(4));
        return {
            data,
        };
    },
};
</script>
```

#### 可选择多个节点 [​]()

可以选择多个节点。

play

```
<template>
    <FTree :data="data" multiple />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix = null, suffix = null) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(4));
        return {
            data,
        };
    },
};
</script>
```

### 可勾选 [​]()

适用于需要选择层级时使用。

play

```
<template>
    <FForm>
        <FFormItem label="父子关联：">
            <FSwitch v-model="cascade" />
        </FFormItem>
    </FForm>
    <FTree
        :data="data"
        :cascade="cascade"
        :checkable="true"
        :selectable="false"
    />
</template>

<script setup>
import { ref } from 'vue';

const createLabel = (level) => {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
};

const createData = (level = 1, baseKey = '') => {
    if (!level) {
        return undefined;
    }
    return new Array(3).fill(null).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
        };
    });
};

const data = ref(createData(4));
const cascade = ref(true);
</script>
```

#### 展开部分 + 默认选中 + 默认勾选 [​]()

通过 `expandedKeys` 配置默认展开节点，通过 `selectedKeys` 配置默认选择节点，通过 `checkedKeys` 配置默认勾选节点。

play

```
<template>
    <FTree
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        v-model:checkedKeys="checkedKeys"
        :data="data"
        checkable
    />
</template>

<script>
import { h, reactive, ref } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(4));
        const selectedKeys = ref(['40']);
        const expandedKeys = ref(['40']);
        const checkedKeys = ref(['40']);

        return {
            data,
            selectedKeys,
            expandedKeys,
            checkedKeys,
        };
    },
};
</script>
```

#### 禁用节点 [​]()

无法被选中和点击。

play

```
<template>
    <FTree :data="data" checkable />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const originData = createData(4);
        originData.forEach((item) => {
            item.disabled = true;
        });
        const data = reactive(originData);
        return {
            data,
        };
    },
};
</script>
```

### 异步加载 [​]()

点击展开节点时加载子选项。

play

```
<template>
    <FTree :data="data" :loadData="loadData" checkable cascade remote />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(1));
        const loadData = (node) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    node.children = [
                        {
                            label: '1',
                            value: `${node.value}1`,
                        },
                        {
                            label: '2',
                            value: `${node.value}2`,
                        },
                    ];
                    resolve();
                }, 2000);
            });
        };

        return {
            loadData,
            data,
        };
    },
};
</script>
```

### 搜索 [​]()

通过关键字过滤树节点。

play

```
<template>
    <FInput v-model="filterText" placeholder="请输入" />
    <FTree ref="refTree" :data="data" checkable :filterMethod="filterMethod" />
</template>

<script>
import { h, reactive, ref, watch } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(4));
        const filterText = ref('');
        const refTree = ref(null);
        watch(filterText, () => {
            refTree.value.filter(filterText.value);
        });
        const filterMethod = (value, node) => {
            return node.label.indexOf(value) !== -1;
        };
        return {
            data,
            filterText,
            refTree,
            filterMethod,
        };
    },
};
</script>
```

### 前缀与后缀 [​]()

放一些操作。

play

```
<template>
    <FTree :data="data" checkable />
</template>

<script>
import { h, reactive } from 'vue';
import { AppstoreOutlined, PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: () => h('div', {
                class: 'fix-node-content',
            }, [
                createLabel(level),
                h(AppstoreOutlined),
            ]),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? (data) => (data.isHovered ? h(PlusCircleOutlined) : null) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

export default {
    setup() {
        const data = reactive(createData(4, '', true, true));

        return {
            data,
        };
    },
};
</script>

<style>
.fix-node-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 5px;
}
</style>
```

### 拖拽 [​]()

play

```
<template>
    <FTree :data="data" draggable @drop="onDrop" />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: key + createLabel(level),
            value: key,
            children: createData(level - 1, key, prefix, suffix),
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix: suffix ? () => h(PlusCircleOutlined) : null,
        };
    });
}

function createLabel(level) {
    if (level === 4) {
        return '道生一';
    }
    if (level === 3) {
        return '一生二';
    }
    if (level === 2) {
        return '二生三';
    }
    if (level === 1) {
        return '三生万物';
    }
}

function findSiblingsAndIndex(node, nodes) {
    if (!nodes) {
        return [null, null];
    }
    for (let i = 0; i < nodes.length; ++i) {
        const siblingNode = nodes[i];
        if (siblingNode.value === node.value) {
            return [nodes, i];
        }
        const [siblings, index] = findSiblingsAndIndex(
            node,
            siblingNode.children,
        );
        if (siblings && index !== null) {
            return [siblings, index];
        }
    }
    return [null, null];
}

export default {
    setup() {
        const data = reactive(createData(4));

        const onDrop = ({ originNode, originDragNode, position }) => {
            const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
                originDragNode,
                data,
            );
            if (dragNodeSiblings === null || dragNodeIndex === null) {
                return;
            }
            dragNodeSiblings.splice(dragNodeIndex, 1);
            if (position === 'before') {
                const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
                    originNode,
                    data,
                );
                if (nodeSiblings === null || nodeIndex === null) {
                    return;
                }
                nodeSiblings.splice(nodeIndex, 0, originDragNode);
            } else if (position === 'after') {
                const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
                    originNode,
                    data,
                );
                if (nodeSiblings === null || nodeIndex === null) {
                    return;
                }
                nodeSiblings.splice(nodeIndex + 1, 0, originDragNode);
            } else if (position === 'inside') {
                if (!originNode.children) {
                    originNode.children = [];
                }
                originNode.children.splice(0, 0, originDragNode);
            }
        };

        return {
            data,
            onDrop,
        };
    },
};
</script>
```

## Tree Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|data|展示数据|Array<TreeOption>|`[]`|
|defaultExpandAll|是否默认展开所有节点，当有 `expandedKeys` 时，`defaultExpandAll` 将失效|boolean|`false`|
|expandedKeys(v-model)|展开的节点的 key 的数组|Array<string \| number>|`[]`|
|selectable|是否可选中节点|boolean|`true`|
|selectedKeys(v-model)|设置选中的节点|Array<string \| number>|`[]`|
|multiple|是否能选中多个节点|boolean|`false`|
|cancelable|选中后是否可以再次点击取消选中|boolean|`true`|
|checkable|是否显示 `Checkbox` 选择框|boolean|`false`|
|cascade|当勾选选择框时，父子节点的选择框勾选状态是否关联，相互影响|boolean|`false`|
|checkStrictly|设置勾选策略来计算`checkedKeys`，`all`为全部选中节点；`parent` 为全部选中节点中的父节点（当父节点下所有子节点都选中时）；`child` 为全部选中节点中的叶子节点|string|`all`|
|checkedKeys(v-model)|勾选节点 key 的数组|Array<string \| number>|`[]`|
|childrenField|替代 `TreeOption` 中的 `children` 字段名|string|`children`|
|valueField|替代 `TreeOption` 中的 `value` 字段名|string|`value`|
|labelField|替代 `TreeOption` 中的 `label` 字段名|string|`label`|
|remote|是否异步获取选项，和 `loadData` 配合|boolean|`false`|
|loadData|异步加载数据的回调函数|(node: TreeOption) => Promise<void>|`null`|
|inline|底层节点是否横向排列|boolean|`false`|
|filterMethod|类似 Array.filter 函数，筛选树节点（高亮）|(filterText, node: TreeOption) => Boolean|`null`|
|virtualList|是否使用虚拟滚动，需要设置 tree 的高度，并且 inline 需要为 false|boolean|`false`|
|accordion|手风琴模式，是否保持同级节点中只有一个节点展开|boolean|`false`|
|draggable|是否拖拽，`inline`需要为 false|boolean|`false`|

## Tree Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|check|点击节点中的选择框时触发|({ checkedKeys, node, event, checked }) => void|
|expand|展开、收起节点时触发|({ expandedKeys, node, event, expanded }) => void|
|select|点击节点内容时触发|({ selectedKeys, node, event, selected }) => void|
|dragstart|开始拖拽时调用|({ node: TreeOption, event: DragEvent }) => void|
|dragend|dragend 时触发时调用|({ node: TreeOption, event: DragEvent }) => void|
|dragenter|dragenter 时触发时调用|({ node: TreeOption, event: DragEvent }) => void|
|dragleave|dragleave 时触发时调用|({ node: TreeOption, event: DragEvent }) => void|
|dragover|dragover 时触发时调用|({ node: TreeOption, event: DragEvent }) => void|
|drop|drop 时触发时调用|({ node: TreeOption, dragNode: TreeOption, originNode, originDragNode, position: 'before' \| 'inside' \| 'after', event: DragEvent }) => void|

## Tree Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|filter|过滤 Tree 节点|(filterText)|
|selectNode|选中节点|(value)|
|expandNode|展开树节点|(value)|
|checkNode|check 节点|(value)|

## TreeOption props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|节点的 `key`，需要唯一，可使用 `valueField` 修改字段名|string / number|`-`|
|label|节点的内容，可使用 `labelField` 修改字段名|string / (() => VNodeChild)|`-`|
|children?|节点的子节点|TreeOption\[\]|`[]`|
|disabled?|是否禁用节点|boolean|`-`|
|selectable?|是否禁用选中节点，默认为 `Tree` 组件的 `selectable`|boolean|`-`|
|checkable?|是否显示勾选节点，默认为 `Tree` 组件的 `checkable`|boolean|`-`|
|draggable?|节点是否能被拖拽，默认为 true|boolean|`true`|
|isLeaf?|节点是否是叶节点，在 remote 模式下是必须的|boolean|`false`|
|prefix?|节点的前缀|string / (() => VNodeChild)|`null`|
|suffix?|节点的后缀|string / (() => VNodeChild)|`null`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/tree.html