# Cascader 级联控件 [​]()

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用级联控件可以清晰展现其中的层级关系，并具有展开收起选择等交互功能。

## 组件注册 [​]()

js

```
import { FCascader } from '@fesjs/fes-design';

app.use(FCascader);
```

## 代码演示 [​]()

### 基础用法 [​]()

基础的树形结构展示。

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="选中可取消：">
            <FRadioGroup v-model="cancelable">
                <FRadio :value="true">是(默认)</FRadio>
                <FRadio :value="false">否</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="展开次级菜单：">
            <FRadioGroup v-model="expandTrigger">
                <FRadio value="click">click(默认)</FRadio>
                <FRadio value="hover">hover</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="父节点可选中：">
            <FRadioGroup v-model="checkStrictly">
                <FRadio value="all">是</FRadio>
                <FRadio value="">否(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FCascader
        :data="data"
        :cancelable="cancelable"
        :expandTrigger="expandTrigger"
        :checkStrictly="checkStrictly"
    />
</template>

<script>
import { reactive, ref } from 'vue';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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
        const cancelable = ref(true);
        const expandTrigger = ref('hover');
        const checkStrictly = ref('');
        return {
            data,
            cancelable,
            expandTrigger,
            checkStrictly,
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
    <FForm :labelWidth="160">
        <FFormItem label="可选中多个节点：">
            <FRadioGroup v-model="multiple">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FCascader :data="data" :multiple="multiple" />
</template>

<script>
import { reactive, ref } from 'vue';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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
        const multiple = ref(true);
        return {
            data,
            multiple,
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
    <FForm :labelWidth="160">
        <FFormItem label="父子关联：">
            <FRadioGroup v-model="cascade">
                <FRadio :value="true">是(默认)</FRadio>
                <FRadio :value="false">否</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FCascader
        :data="data"
        checkable
        :cascade="cascade"
        :selectable="false"
    />
</template>

<script>
import { reactive, ref } from 'vue';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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
        const cascade = ref(true);
        return {
            data,
            cascade,
        };
    },
};
</script>
```

#### 默认展开 + 默认选中 + 默认勾选 [​]()

> 默认配置并不会做校验处理，比如`cascade = true`的时候，默认仅勾选父节点，子节点并不会自动勾选。

* 通过`expandedKeys`配置默认展开节点；
* 通过`selectedKeys`配置默认选择节点；
* 通过`checkedKeys`配置默认勾选节点；

play

```
<template>
    <FCascader
        v-model:selectedKeys="selectedKeys"
        v-model:expandedKeys="expandedKeys"
        v-model:checkedKeys="checkedKeys"
        :data="data"
        checkable
    />
</template>

<script>
import { reactive, ref } from 'vue';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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
        const selectedKeys = ref(['4031']);
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
    <FForm :labelWidth="160">
        <FFormItem label="禁用选项：">
            <FRadioGroup v-model="disabledOption">
                <FRadio value="parent">仅父节点</FRadio>
                <FRadio value="leaf">仅叶子节点</FRadio>
                <FRadio value="specific">指定项</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FCascader :data="data" checkable />
</template>

<script>
import { computed, ref } from 'vue';
import { cloneDeep } from 'lodash-es';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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

function flatNodes(nodes = []) {
    return nodes.reduce((res, node) => {
        res.push(node);
        if (node.children && node.children.length) {
            res = res.concat(flatNodes(node.children));
        }
        return res;
    }, []);
}

export default {
    setup() {
        const originData = createData(4);
        const disabledOption = ref('parent');
        const data = computed(() => {
            const data = cloneDeep(originData);
            const allNodes = flatNodes(data);
            if (disabledOption.value === 'specific') {
                data.forEach((item) => {
                    item.disabled = true;
                });
            } else if (disabledOption.value === 'parent') {
                allNodes.forEach((item) => {
                    item.children
                    && item.children.length
                    && (item.disabled = true);
                });
            } else if (disabledOption.value === 'leaf') {
                allNodes.forEach((item) => {
                    !(item.children && item.children.length)
                    && (item.disabled = true);
                });
            }

            return data;
        });
        return {
            data,
            disabledOption,
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
    <FCascader :data="data" :loadData="loadData" checkable remote />
</template>

<script>
import { reactive } from 'vue';

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: createLabel(level),
            value: key,
            children: createData(level - 1, key),
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
        const data = reactive([]);
        const loadData = (node) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let children = [];
                    if (node) {
                        children = [
                            {
                                label: `${node.label}1`,
                                value: `${node.value}-1`,
                                isLeaf:
                                    node.value.split('-').length > 1,
                            },
                            {
                                label: `${node.label}2`,
                                value: `${node.value}-2`,
                                isLeaf:
                                    node.value.split('-').length > 1,
                            },
                        ];
                    } else {
                        children = createData(2);
                    }
                    resolve(children);
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

### 前缀与后缀 [​]()

放一些附加展示或操作。

play

```
<template>
    <FCascader :data="data" checkable />
</template>

<script>
import { h, reactive } from 'vue';
import { PictureOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix, suffix) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        const children = createData(level - 1, key, prefix, suffix);
        return {
            label: createLabel(level),
            value: key,
            children,
            prefix: prefix ? () => h(PictureOutlined) : null,
            suffix:
                suffix && children && children.length
                    ? () => h('span', null, children.length)
                    : null,
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
```

### 文字超长溢出 [​]()

play

```
<template>
    <FCascader :data="data" />
</template>

<script>
import { reactive, ref } from 'vue';

function repeatString(str, n) {
    return new Array(n + 1).join(str);
}

function createData(level = 1, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: repeatString(createLabel(level), 10),
            value: key,
            children: createData(level - 1, key),
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
        const cancelable = ref(true);
        return {
            data,
            cancelable,
        };
    },
};
</script>
```

## Cascader Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|data|展示数据|Array<CascaderOption>|`[]`|
|expandedKeys(v-model)|展开的节点的 key 的数组|Array<string \| number>|`[]`|
|selectable|是否可选中节点|boolean|`true`|
|selectedKeys(v-model)|设置选中的节点|Array<string \| number>|`[]`|
|multiple|是否能选中多个节点|boolean|`false`|
|cancelable|选中后是否可以再次点击取消选中|boolean|`true`|
|checkable|是否显示 `Checkbox` 选择框|boolean|`false`|
|cascade|当勾选选择框时，父子节点的选择框勾选状态是否关联，相互影响|boolean|`true`|
|checkStrictly|设置勾选策略来指定勾选回调返回的值。多选时，`all` 表示回调函数值为全部选中节点；`parent` 表示回调函数值为父节点（当父节点下所有子节点都选中时）；`child` 表示回调函数值为子节点。单选时，`all` 表示回调函数值可为父节点。|string|`child`|
|checkedKeys(v-model)|勾选节点 key 的数组|Array<string \| number>|`[]`|
|childrenField|替代 `CascaderOption` 中的 `children` 字段名|string|`children`|
|valueField|替代 `CascaderOption` 中的 `value` 字段名|string|`value`|
|labelField|替代 `CascaderOption` 中的 `label` 字段名|string|`label`|
|remote|是否异步获取选项，和 `loadData` 配合|boolean|`false`|
|loadData|异步加载数据的回调函数|(node: null \| CascaderOption) => Promise<CascaderOption\[\]>|\-|
|expandTrigger|次级菜单的展开方式，可选值为 `click`,`hover`|string|`click`|

## Cascader Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|check|点击节点中的选择框时触发|({ checkedKeys, node, event, checked }) => void|
|expand|展开、收起节点时触发|({ expandedKeys, node, event, expanded }) => void|
|select|点击节点内容时触发|({ selectedKeys, node, event, selected }) => void|

## Cascader Methods [​]()

|方法名称|说明|参数|
|---|---|---|
|selectNode|选中节点|(value)|
|expandNode|展开树节点|(value)|
|checkNode|check 节点|(value)|

## CascaderOption props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|节点的 `key`，需要唯一，可使用 `valueField` 修改字段名|string / number|`-`|
|label|节点的内容，可使用 `labelField` 修改字段名|string|`-`|
|children?|节点的子节点|CascaderOption\[\]|`[]`|
|disabled?|是否禁用节点， 默认为`Cascader`组件的`disabled`|boolean|`-`|
|selectable?|是否禁用选中节点，默认为`Cascader`组件的`selectable`|boolean|`-`|
|checkable?|是否禁用勾选节点，默认为`Cascader`组件的`checkable`|boolean|`-`|
|isLeaf?|节点是否是叶节点，在 remote 模式下是必须的|boolean|`false`|
|prefix?|节点的前缀|string / (() => VNodeChild)|`null`|
|suffix?|节点的后缀|string / (() => VNodeChild)|`null`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/cascader.html