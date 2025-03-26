# SelectCascader 级联选择器 [​]()

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## 组件注册 [​]()

js

```
import { FSelectCascader } from '@fesjs/fes-design';

app.use(FSelectCascader);
```

## 代码演示 [​]()

### 基础用法 [​]()

适用广泛的基础单选。

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="展开次级菜单：">
            <FRadioGroup v-model="expandTrigger">
                <FRadio value="click">click(默认)</FRadio>
                <FRadio value="hover">hover</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="勾选策略：">
            <FRadioGroup v-model="checkStrictly" :cancelable="false">
                <FRadio value="all">all</FRadio>
                <FRadio value="child">child(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="是否展示路径：">
            <FRadioGroup v-model="showPath">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSelectCascader
        class="select-cascader"
        :data="data"
        :expandTrigger="expandTrigger"
        :checkStrictly="checkStrictly"
        :showPath="showPath"
    />
</template>

<script>
import { h, reactive, ref } from 'vue';
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
        const expandTrigger = ref('click');
        const checkStrictly = ref('child');
        const showPath = ref(false);
        return {
            data,
            expandTrigger,
            checkStrictly,
            showPath,
        };
    },
};
</script>

<style scoped>
.select-cascader {
    width: 200px;
}
</style>
```

### 可清空 [​]()

包含清空按钮，可将选择器清空为初始状态。

play

```
<template>
    <FSelectCascader :data="data" clearable />
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

<style scoped>
.fes-select-cascader {
    width: 200px;
}
</style>
```

### 基础多选 [​]()

适用性较广的基础多选，用 `Tag` 展示已选项。

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
        <FFormItem v-if="cascade" label="勾选策略：">
            <FRadioGroup v-model="checkStrictly" :cancelable="false">
                <FRadio value="all">all</FRadio>
                <FRadio value="parent">parent</FRadio>
                <FRadio value="child">child(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="展开次级菜单：">
            <FRadioGroup v-model="expandTrigger">
                <FRadio value="click">click(默认)</FRadio>
                <FRadio value="hover">hover</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="是否展示路径：">
            <FRadioGroup v-model="showPath">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否(默认)</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSelectCascader
        :data="data"
        multiple
        :cascade="cascade"
        :checkStrictly="checkStrictly"
        :expandTrigger="expandTrigger"
        :showPath="showPath"
        clearable
    />
</template>

<script>
import { h, reactive, ref } from 'vue';
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
        const cascade = ref(true);
        const checkStrictly = ref('child');
        const expandTrigger = ref('click');
        const showPath = ref(false);
        return {
            data,
            cascade,
            checkStrictly,
            expandTrigger,
            showPath,
        };
    },
};
</script>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
.text-tips {
    margin-top: 10px;
}
</style>
```

### 可搜索 [​]()

可以利用搜索功能快速查找选项

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="是否可搜索:">
            <FRadioGroup v-model="filterable">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem v-show="filterable" label="是否高亮:">
            <FRadioGroup
                v-model="filterTextHighlight"
                :options="[
                    { label: '否(默认)', value: false },
                    { label: '是', value: true },
                ]"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm :labelWidth="130">
        <FFormItem label="单选默认:">
            <FSelectCascader
                v-model="value1"
                class="select-cascader"
                :data="data"
                :filterable="filterable"
                :filterTextHighlight="filterTextHighlight"
            />
        </FFormItem>
        <FFormItem label="单选自定义过滤函数:">
            <FSelectCascader
                class="select-cascader"
                :data="data"
                :filterable="filterable"
                :filter="filter"
                :filterTextHighlight="filterTextHighlight"
            />
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm labelPosition="top" :labelWidth="130">
        <FFormItem label="多选默认:">
            <FSelectCascader
                v-model="value2"
                class="select-cascader-multi"
                :data="data"
                :filterable="filterable"
                :multiple="true"
                :filterTextHighlight="filterTextHighlight"
                showPath
                emitPath
            />
        </FFormItem>
        <FFormItem label="多选自定义过滤函数:">
            <FSelectCascader
                class="select-cascader-multi"
                :data="data"
                :filterable="filterable"
                :multiple="true"
                :filter="filter"
                :filterTextHighlight="filterTextHighlight"
                showPath
                emitPath
            />
        </FFormItem>
    </FForm>
</template>

<script setup>
import { reactive, ref } from 'vue';

const filterTextHighlight = ref(false);

function createData(level = 4, baseKey = '') {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 10 - level }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            label: `${key}-${createLabel(level)}`,
            value: key,
            children: createData(level - 1, key),
            disabled: level === 1 && index === 0,
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

const filterable = ref(true);
const value1 = ref();
const value2 = ref();

const data = reactive(createData(4));

// 默认会匹配所有节点描述，这里仅匹配叶子节点描述
const filter = (text, option) => {
    return option.label.indexOf(text) !== -1;
};
</script>

<style scoped>
.select-cascader {
    width: 200px;
}
.select-cascader-multi {
    width: 100%;
}
</style>

<style>
.fes-select-cascader-popper .fes-select-dropdown {
    min-width: 500px !important;
}
</style>
```

### emitPath 返回节点菜单路径 [​]()

适用于异步加载初始化展示等场景。

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="emitPath：">
            <FRadioGroup v-model="emitPath">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FForm :labelWidth="160">
        <FFormItem label="单选：">
            <FSelectCascader
                v-model="value1"
                :data="data.options"
                clearable
                :emitPath="emitPath"
            />
        </FFormItem>
        <FFormItem label="modelValue：">{{ value1 }}</FFormItem>
        <FFormItem label="多选：">
            <FSelectCascader
                v-model="value2"
                :data="data.options"
                multiple
                cascade
                clearable
                :emitPath="emitPath"
            />
        </FFormItem>
        <FFormItem label="modelValue：">{{ value2 }}</FFormItem>
    </FForm>
</template>

<script>
import { h, reactive, ref } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix = null, suffix = null) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 15 }).map((_, index) => {
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
        const data = reactive({
            options: [],
        });

        const value1 = ref(['213', '213114']);
        const value2 = ref([
            ['213', '213113'],
            ['213', '213114'],
        ]);
        const emitPath = ref(true);

        setTimeout(() => {
            data.options = createData(2);
        }, 1000);

        return {
            data,
            value1,
            value2,
            emitPath,
        };
    },
};
</script>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
.text-tips {
    margin-top: 10px;
}
</style>
```

### 异步加载 [​]()

若需要自动加载节点展示，则需要 `emitPath` 置为 `true`。

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="单选：">
            <FSelectCascader
                v-model="value1"
                :data="data1"
                :loadData="loadData"
                valueField="id"
                labelField="name"
                childrenField="child"
                clearable
                remote
                emitPath
                showPath
                @change="handleChange"
            />
        </FFormItem>
        <FFormItem label="modelValue：">{{ value1 }}</FFormItem>
        <FFormItem label="多选：">
            <FSelectCascader
                v-model="value2"
                :data="data2"
                :loadData="loadData"
                valueField="id"
                labelField="name"
                childrenField="child"
                multiple
                cascade
                checkStrictly="parent"
                clearable
                remote
                emitPath
                @change="handleChange"
            />
        </FFormItem>
        <FFormItem label="modelValue：">{{ value2 }}</FFormItem>
    </FForm>
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
            name: createLabel(level),
            id: key,
            child: createData(level - 1, key),
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
        const data1 = reactive(createData(2));
        const data2 = reactive([]);
        const loadData = (node) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let children = [];
                    // 非第一级
                    if (node) {
                        children = [
                            {
                                name: `${node.name}1`,
                                id: `${node.id}-1`,
                                isLeaf:
                                    node.id.split('-').length > 1,
                            },
                            {
                                name: `${node.name}2`,
                                id: `${node.id}-2`,
                                isLeaf:
                                    node.id.split('-').length > 1,
                            },
                        ];
                    } else {
                        // 第一级
                        children = createData(2);
                    }
                    resolve(children);
                }, 2000);
            });
        };

        const handleChange = (value) => {
            console.log('[selectCascader.async] [handleChange] value:', value);
        };

        const value1 = ref([]);
        const value2 = ref([
            ['20', '2010', '2010-1', '2010-1-1'],
            ['20', '2111'],
        ]);

        // 异步设置初始值
        setTimeout(() => {
            value1.value = ['20', '2010', '2010-1', '2010-1-1'];
        }, 2000);

        return {
            loadData,
            data1,
            data2,
            handleChange,
            value1,
            value2,
        };
    },
};
</script>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
</style>
```

### 禁用状态 [​]()

选择器不可用状态。

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="多选是否折叠展示：">
            <FRadioGroup v-model="collapseTags">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem v-if="collapseTags" label="折叠项限制：">
            <FRadioGroup v-model="collapseTagsLimit">
                <FRadio :value="1">1(默认)</FRadio>
                <FRadio :value="2">2</FRadio>
                <FRadio :value="3">3</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSpace>
        <FSelectCascader v-model="value1" :data="data" disabled />
        <FSelectCascader v-model="value2" :data="data" disabled />
    </FSpace>
    <FSpace>
        <FSelectCascader
            v-model="value3"
            :data="data"
            multiple
            disabled
            :collapseTags="collapseTags"
            :collapseTagsLimit="collapseTagsLimit"
        />
        <FSelectCascader
            v-model="value4"
            :data="data"
            multiple
            disabled
            :collapseTags="collapseTags"
            :collapseTagsLimit="collapseTagsLimit"
        />
    </FSpace>
</template>

<script>
import { h, reactive, ref } from 'vue';
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
        const value1 = ref('40');
        const value2 = ref('999999'); // 含未匹配项
        const value3 = ref(['40', '41', '4030']);
        const value4 = ref(['999999', '40', '41']); // 含未匹配项
        const collapseTags = ref(true);
        const collapseTagsLimit = ref(1);
        return {
            data,
            value1,
            value2,
            value3,
            value4,
            collapseTags,
            collapseTagsLimit,
        };
    },
};
</script>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
</style>
```

### 自定义选项及控制回填内容 [​]()

play

```
<template>
    <FForm :labelWidth="160">
        <FFormItem label="是否展示路径：">
            <FRadioGroup v-model="showPath">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem label="是否多选：">
            <FRadioGroup v-model="multiple">
                <FRadio :value="true">是</FRadio>
                <FRadio :value="false">否</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSelectCascader
        v-if="!multiple"
        :data="data"
        valueField="id"
        labelField="name"
        childrenField="child"
    >
        <template #tag="{ option }">
            <FEllipsis>
                <template v-if="showPath">
                    {{
                        option.path
                            .map((item) => `${item.value}-${item.label}`)
                            .join(' / ')
                    }}
                </template>
                <template v-else>
                    {{
                        option.value ? `${option.value} - ${option.label}` : ''
                    }}
                </template>
            </FEllipsis>
        </template>
    </FSelectCascader>
    <FSelectCascader
        v-else
        :data="data"
        multiple
        valueField="id"
        labelField="name"
        childrenField="child"
    >
        <template #tag="{ option }">
            <FTag type="info" size="small">
                <FEllipsis>
                    <template v-if="showPath">
                        {{
                            option.path
                                .map((item) => `${item.value}-${item.label}`)
                                .join(' / ')
                        }}
                    </template>
                    <template v-else>
                        {{
                            option.value
                                ? `${option.value} - ${option.label}`
                                : ''
                        }}
                    </template>
                </FEllipsis>
            </FTag>
        </template>
    </FSelectCascader>
</template>

<script>
import { h, reactive, ref } from 'vue';
import { PictureOutlined, PlusCircleOutlined } from '@fesjs/fes-design/icon';

function createData(level = 1, baseKey = '', prefix = null, suffix = null) {
    if (!level) {
        return undefined;
    }
    return Array.apply(null, { length: 2 }).map((_, index) => {
        const key = `${baseKey}${level}${index}`;
        return {
            name: createLabel(level),
            id: key,
            child: createData(level - 1, key, prefix, suffix),
            x: `${key}-${createLabel(level)}`,
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
        const showPath = ref(true);
        const multiple = ref(true);
        return {
            data,
            showPath,
            multiple,
        };
    },
};
</script>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
</style>
```

### 无数据 [​]()

play

```
<template>
    <FSelectCascader />
</template>

<style scoped>
.fes-select-cascader {
    width: 200px;
}
</style>
```

## SelectCascader Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue / v-model|选中的值|number / string / boolean / object|\-|
|data|展示数据|Array<CascaderOption>|`[]`|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|clearable|是否显示清除按钮|boolean|`false`|
|disabled|是否禁用|boolean|`false`|
|filterable|是否支持过滤选项（`remote`被设定时不生效）|boolean|`false`|
|filter|自定义过滤函数|(pattern: string, option: TreeOption) => boolean|`-`|
|filterTextHighlight|过滤文本是否高亮|boolean|`false`|
|collapseTags|多选时选中项是否折叠展示|boolean|`false`|
|collapseTagsLimit|多选时选中项超出限制个数后才会折叠|number|`1`|
|tagBordered|多选时，选中项展示是否有边框（disabled 为 true 时强制有边框）|boolean|`false`|
|emptyText|选项为空时显示的文字，也可以使用#empty 设置|string|`无数据`|
|getContainer|指定下拉选项挂载的 HTML 节点|() => HTMLElement|`() => document.body`|
|multiple|是否多选|boolean|`false`|
|placeholder|当没有选择内容时的提示语|string|\-|
|expandedKeys(v-model)|展开的节点的 key 的数组|Array<string \| number>|`[]`|
|cascade|`checkable` 状态下节点选择完全受控（父子节点选中状态关联）|boolean|`false`|
|checkStrictly|设置勾选策略来指定勾选回调返回的值。多选时，`all` 表示回调函数值为全部选中节点；`parent` 表示回调函数值为父节点（当父节点下所有子节点都选中时）；`child` 表示回调函数值为子节点。单选时，`all` 表示回调函数值可为父节点；`child` 表示回调函数值为子节点。|string|`child`|
|childrenField|替代 `CascaderOption` 中的 `children` 字段名|string|`children`|
|valueField|替代 `CascaderOption` 中的 `value` 字段名|string|`value`|
|labelField|替代 `CascaderOption` 中的 `label` 字段名|string|`label`|
|remote|是否异步获取选项，和 `loadData` 配合|boolean|`false`|
|loadData|异步加载数据的回调函数|(node: null \| CascaderOption) => Promise<CascaderOption\[\]>|\-|
|expandTrigger|次级菜单的展开方式，可选值为`click`,`hover`|string|`click`|
|emitPath|`modelValue` 是否返回选中节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值。|boolean|`false`|
|showPath|是否在选择器中显示选项路径|boolean|`false`|

## SelectCascader Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|选中的值发生变化|目前选中的值|
|visibleChange|下拉框出现/隐藏时触发|出现则为 true，隐藏则为 false|
|removeTag|取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 模式下生效|取消选中的值|
|blur|当选择器失去焦点时触发|event|
|focus|当选择器获得焦点时触发|event|
|clear|点击清除按钮时触发|event|
|filter|过滤事件|( query: String)|

## SelectCascader Methods [​]()

|名称|说明|
|---|---|
|blur|取消焦点|
|focus|获取焦点|

## SelectCascader Slots [​]()

|名称|说明|参数|
|---|---|---|
|tag|控制标签的渲染，自定义选中选项在选择框如何展示|*{ option: CascaderNode, handleClose: ()=> void }*|

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

## CascaderNode props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|同 `CascaderOption` 中的 `value` 字段|string / number|`-`|
|label|同 `CascaderOption` 中的 `label` 字段|string|`-`|
|path|节点所在的各级菜单的 `value` 和 `label` 所组成的数组|`Array<{ value: string | number, label: string }>`|`[]`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/selectCascader.html