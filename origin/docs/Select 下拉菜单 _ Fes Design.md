# Select 下拉菜单 [​]()

当选项过多时，使用下拉菜单展示并选择内容。

## 组件注册 [​]()

js

```
import { FSelect } from '@fesjs/fes-design';

app.use(FSelect);
```

## 代码演示 [​]()

### 基础用法 [​]()

适用广泛的基础单选

play

```
<template>
    <FSelect
        v-model="arr"
        class="select"
        @change="handleChange"
        @scroll="onScroll"
    >
        <FOption
            v-for="(item, index) in optionList"
            :key="index"
            :value="item.value"
            :disabled="item.disabled"
        >
            <FEllipsis style="max-width: 300px"> {{ item.label }}</FEllipsis>
        </FOption>
    </FSelect>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        const arr = ref();
        const handleChange = (value) => {
            console.log('[select.common] [handleChange] value:', value);
        };
        const onScroll = (e) => {
            console.log('[select.common] [onScroll] e:', e);
        };
        return {
            arr,
            optionList,
            handleChange,
            onScroll,
        };
    },
};
</script>

<style scoped>
.select {
    width: 200px;
}
</style>
```

### 配置方式 [​]()

通过配置 `options` 直接生成选项性能更优，推荐用配置 `options` 直接生成选项！

play

```
<template>
    <FSelect
        filterable
        valueField="key"
        labelField="name"
        style="width: 200px"
        :options="optionList"
    />
</template>

<script>
import { reactive } from 'vue';

const TOTAL_COUNT = 10000;

const DataItems = [];
let count = TOTAL_COUNT;
while (count--) {
    const index = TOTAL_COUNT - count;
    DataItems.push({
        name: index,
        key: index,
    });
}

export default {
    setup() {
        const optionList = reactive(DataItems);
        return {
            optionList,
        };
    },
};
</script>
```

### 虚拟滚动 [​]()

配置 `virtualScroll` 属性来开启虚拟滚动。默认当数据量大于 `50` 时使用 `VirtualList` 组件实现虚拟列表，也可以自定义。

play

```
<template>
    <FForm :labelWidth="200">
        <FFormItem label="virtualScroll 类型：">
            <FRadioGroup v-model="propType" :cancelable="false">
                <FRadio value="boolean">boolean(默认)</FRadio>
                <FRadio value="number">number</FRadio>
            </FRadioGroup>
        </FFormItem>
        <FFormItem v-if="propType === 'number'" label="达到数量开启虚拟滚动：">
            <FInputNumber v-model="virtualScroll" :min="0" :max="50000" />
        </FFormItem>
        <FFormItem v-if="propType === 'boolean'" label="开启虚拟滚动：">
            <FRadioGroup v-model="virtualScroll" :cancelable="false">
                <FRadio :value="true">true(默认)</FRadio>
                <FRadio :value="false">false</FRadio>
            </FRadioGroup>
        </FFormItem>
    </FForm>

    <FDivider />

    <FSelect
        :virtualScroll="virtualScroll"
        :options="options"
        style="width: 200px"
        valueField="key"
        labelField="name"
    />
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const options = computed(() =>
    new Array(1000)
        .fill(null)
        .map((_, index) => ({ name: index + 1, key: index + 1 })),
);

const propType = ref<'boolean' | 'number'>('boolean');
const virtualScroll = ref<boolean | number>(true);

watch(propType, (nextType) => {
    if (nextType === 'number') {
        virtualScroll.value = 50;
    } else {
        virtualScroll.value = true;
    }
});
</script>
```

### 基础多选 [​]()

适用性较广的基础多选，用 `Tag` 展示已选项

play

```
<template>
    <FForm :labelWidth="200">
        <FFormItem label="选中项展示是否有边框：">
            <FRadioGroup v-model="tagBordered">
                <FRadio :value="false">否(默认)</FRadio>
                <FRadio :value="true">是</FRadio>
            </FRadioGroup>
        </FFormItem>
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

    <FSelect
        v-model="arr"
        multiple
        clearable
        :tagBordered="tagBordered"
        :collapseTags="collapseTags"
        :collapseTagsLimit="collapseTagsLimit"
    >
        <FOption
            v-for="(item, index) in optionList"
            :key="index"
            :value="item.value"
            :label="item.label"
        />
    </FSelect>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const arr = ref([]);
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);

        const tagBordered = ref(false);
        const collapseTags = ref(true);
        const collapseTagsLimit = ref(1);

        return {
            optionList,
            tagBordered,
            collapseTags,
            collapseTagsLimit,
            arr,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
.text-tips {
    margin-top: 10px;
}
</style>
```

### 限制多选个数 [​]()

当选择达到上限时无法再继续选择新的

play

```
<template>
    <FSelect multiple :multipleLimit="2">
        <FOption
            v-for="(item, index) in optionList"
            :key="index"
            :value="item.value"
            :label="item.label"
        />
    </FSelect>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        return {
            optionList,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 自定义选项模板 [​]()

可以自定义备选项模板，`FOption`子组件是针对每一项单独配置，而 `slots.option` 插槽则是通用配置。

play

```
<template>
    <FSpace>
        <FSelect>
            <FOption
                v-for="(item, index) in optionList"
                :key="index"
                :value="item.value"
                :label="item.label"
            >
                <FEllipsis>{{ item.label }}</FEllipsis>
                <span>{{ item.value }}</span>
            </FOption>
        </FSelect>

        <FSelect :options="optionList">
            <template #option="{ label, value }">
                {{ value }} - {{ label.slice(0, 2) }}
            </template>
        </FSelect>
    </FSpace>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        return {
            optionList,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 自定义回填内容 [​]()

play

```
<template>
    <FSpace>
        <FSelect :options="optionList">
            <template #tag="{ option }">
                {{ option.value }}-{{ option.label }}
            </template>
        </FSelect>
        <FSelect multiple :options="optionList">
            <template #tag="{ option, handleClose }">
                <FTag
                    type="info"
                    size="small"
                    :closable="option.closable"
                    @close="handleClose"
                >
                    {{ option.value }}-{{ option.label }}
                </FTag>
            </template>
        </FSelect>
    </FSpace>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南',
                x: 'HuNan-湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
                x: 'HuBei-湖北',
            },
            {
                value: 'ZheJiang',
                label: '浙江',
                x: 'ZheJiang-浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
                x: 'GuangDong-广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
                x: 'JiangSu-江苏',
            },
        ]);
        return {
            optionList,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 可过滤 [​]()

可以利用搜索功能快速查找选项

play

```
<template>
    <FForm>
        <FFormItem label="是否高亮:">
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
        <FFormItem label="默认:">
            <FSelect filterable clearable :options="optionList" :filterTextHighlight="filterTextHighlight" />
        </FFormItem>
        <FFormItem label="自定义过滤函数:">
            <FSelect filterable :filter="filter" :options="optionList" :filterTextHighlight="filterTextHighlight" />
        </FFormItem>
        <FFormItem label="创建新选项:">
            <FSelect
                style="width: 200px"
                :options="cityOptions"
                tag
                filterable
                multiple
                filterTextHighlight
            />
        </FFormItem>
        <FFormItem label="自定义选项模板:">
            <FSelect filterable @filter="(query) => { filterText = query }">
                <FSelectGroupOption
                    v-for="group in cityOptions"
                    :key="group.label"
                    :label="group.label"
                    :disabled="group.disabled"
                >
                    <FOption
                        v-for="item in group.children"
                        :key="item.label"
                        :value="item.value"
                    >
                        <FEllipsis>
                            <FTextHighlight v-if="filterText" :searchValues="[filterText]" strict>{{ item.label }}</FTextHighlight>
                            <template v-else>{{ item.label }}</template>
                        </FEllipsis>
                    </FOption>
                </FSelectGroupOption>
            </FSelect>
        </FFormItem>
    </FForm>
</template>

<script setup>
import { reactive, ref } from 'vue';

const filterText = ref('');
const filterTextHighlight = ref(false);

const optionList = reactive([
    {
        value: 'HuNan',
        label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
    },
    {
        value: 'HuBei',
        label: '湖北',
        disabled: true,
    },
    {
        value: 'ZheJiang',
        label: '浙江',
    },
    {
        value: 'GuangDong',
        label: '广东',
    },
    {
        value: 'JiangSu',
        label: '江苏',
    },
]);

const cityOptions = [
    {
        label: '华中地区',
        children: [
            {
                value: '湖北',
                label: '湖北',
            },
            {
                value: '湖南',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: '河南',
                label: '河南',
            },
            {
                value: '江西',
                label: '江西',
            },
        ],
    },
    {
        label: '华南地区',
        disabled: true,
        children: [
            {
                value: '广东',
                label: '广东',
            },
            {
                value: '广西',
                label: '广西',
            },
            {
                value: '海南',
                label: '海南',
            },
        ],
    },
];

const filter = (text, option) => {
    return option.label.indexOf(text) !== -1;
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 动态创建选项 [​]()

使用 `tag` & `filterable` 来允许动态创建选项。

play

```
<template>
    <FSpace>
        <FSelect class="select" tag filterable :options="optionList" />

        <FSelect class="select" tag filterable multiple :options="optionList" />
    </FSpace>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        const arr = ref();

        return {
            arr,
            optionList,
        };
    },
};
</script>

<style scoped>
.select {
    width: 200px;
}
</style>
```

### 远程搜索 [​]()

play

```
<template>
    <FSelect multiple :options="optionsRef" remote @search="fetchData" />
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const options = [
            {
                value: 'hear',
                label: '不想听，风叮咛',
            },
            {
                value: 'hand',
                label: '执手踏雪穿行',
            },
            {
                value: 'once',
                label: '善念起 忘了通过的曾经',
            },
            {
                value: 'bell',
                label: '恨铃声 摇不醒',
            },
            {
                value: 'soul',
                label: '美丑难辨的灵魂',
            },
        ];
        const optionsRef = ref([]);
        const fetchData = (query) => {
            if (!query.length) {
                optionsRef.value = [];
                return;
            }
            window.setTimeout(() => {
                optionsRef.value = options.filter(
                    (item) => ~item.label.indexOf(query),
                );
            }, 300);
        };
        return {
            fetchData,
            optionsRef,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 禁用选项 [​]()

禁止选择某一项

play

```
<template>
    <FSelect>
        <FOption
            v-for="(item, index) in optionList"
            :key="index"
            :disabled="item.disabled"
            :value="item.value"
            :label="item.label"
        />
    </FSelect>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        return {
            optionList,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 禁用选择器 [​]()

选择器不可用状态

play

```
<template>
    <FSpace>
        <FSelect v-model="value1" disabled>
            <FOption
                v-for="(item, index) in optionList"
                :key="index"
                :value="item.value"
                :label="item.label"
            />
        </FSelect>
        <FSelect v-model="value2" multiple disabled>
            <FOption
                v-for="(item, index) in optionList"
                :key="index"
                :value="item.value"
                :label="item.label"
            />
        </FSelect>
        <FSelect v-model="value2" multiple disabled collapseTags>
            <FOption
                v-for="(item, index) in optionList"
                :key="index"
                :value="item.value"
                :label="item.label"
            />
        </FSelect>
        <FSelect
            v-model="value2"
            multiple
            disabled
            collapseTags
            :collapseTagsLimit="2"
        >
            <FOption
                v-for="(item, index) in optionList"
                :key="index"
                :value="item.value"
                :label="item.label"
            />
        </FSelect>
    </FSpace>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        const value1 = ref('HuNan');
        const value2 = ref(['HuNan', 'HuBei', 'ZheJiang', 'GuangDong']);
        return {
            optionList,
            value1,
            value2,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 可清空 [​]()

包含清空按钮，可将选择器清空为初始状态

play

```
<template>
    <FSelect clearable>
        <FOption
            v-for="(item, index) in optionList"
            :key="index"
            :value="item.value"
            :label="item.label"
        />
    </FSelect>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const optionList = reactive([
            {
                value: 'HuNan',
                label: '湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南湖南',
            },
            {
                value: 'HuBei',
                label: '湖北',
                disabled: true,
            },
            {
                value: 'ZheJiang',
                label: '浙江',
            },
            {
                value: 'GuangDong',
                label: '广东',
            },
            {
                value: 'JiangSu',
                label: '江苏',
            },
        ]);
        return {
            optionList,
        };
    },
};
</script>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 无数据 [​]()

play

```
<template>
    <FSelect />
</template>

<style scoped>
.fes-select {
    width: 200px;
}
</style>
```

### 顶部、底部插槽 [​]()

如果你点开了这个例子，可能你需要它

play

```
<template>
    <FSelect filterable :options="optionList">
        <template #header>
            <div>如果你点开了这个例子</div>
        </template>
        <template #footer>
            <div>可能你需要它</div>
        </template>
    </FSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const TOTAL_COUNT = 20;

const optionList = ref(
    new Array(TOTAL_COUNT)
        .fill(undefined)
        .map((_, index) => ({ value: index + 1, label: index + 1 })),
);
</script>
```

### 选项组 [​]()

选项组配置，支持 options 配置和插槽使用

play

```
<template>
    <FForm :labelWidth="100">
        <FFormItem label="基础用法:">
            <FSelect v-model="value1" style="width: 200px" filterable>
                <FSelectGroupOption
                    v-for="group in options"
                    :key="group.label"
                    :label="group.label"
                    :disabled="group.disabled"
                >
                    <FOption
                        v-for="item in group.children"
                        :key="item.label"
                        :value="item.value"
                    >
                        {{ item.label }}
                    </FOption>
                </FSelectGroupOption>
            </FSelect>
        </FFormItem>
        <FFormItem label="配置方式:">
            <FSelect
                v-model="value2"
                style="width: 200px"
                :options="options"
                tag
                filterable
                multiple
            />
        </FFormItem>
        <FFormItem label="自定义标签:">
            <FSelect v-model="value3" style="width: 200px">
                <FSelectGroupOption>
                    <template #label>
                        <span class="label-text">华中地区</span>
                    </template>
                    <FSelectGroupOption label="湖南">
                        <FOption value="长沙">长沙</FOption>
                    </FSelectGroupOption>
                    <FSelectGroupOption label="湖北">
                        <FOption value="武汉">武汉</FOption>
                        <FOption value="孝感">孝感</FOption>
                    </FSelectGroupOption>
                </FSelectGroupOption>
                <FSelectGroupOption>
                    <template #label>
                        <span class="label-text">华南地区</span>
                    </template>
                    <FOption value="深圳">深圳</FOption>
                    <FOption value="广州">广州</FOption>
                </FSelectGroupOption>
            </FSelect>
        </FFormItem>
        <FFormItem label="多级嵌套:">
            <FSelect
                v-model="value4"
                style="width: 200px"
                :options="cityOptions"
                tag
                filterable
                multiple
            />
        </FFormItem>
    </FForm>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const value1 = ref();
        const value2 = ref([]);
        const value3 = ref();
        const value4 = ref([]);

        const options = [
            {
                label: '华中地区',
                children: [
                    {
                        value: '湖北',
                        label: '湖北',
                    },
                    {
                        value: '湖南',
                        label: '湖南',
                    },
                    {
                        value: '河南',
                        label: '河南',
                    },
                    {
                        value: '江西',
                        label: '江西',
                    },
                ],
            },
            {
                label: '华南地区',
                disabled: true,
                children: [
                    {
                        value: '广东',
                        label: '广东',
                    },
                    {
                        value: '广西',
                        label: '广西',
                    },
                    {
                        value: '海南',
                        label: '海南',
                    },
                ],
            },
            {
                label: '华北地区',
                children: [
                    {
                        value: '北京',
                        label: '北京',
                    },
                    {
                        value: '天津',
                        label: '天津',
                    },
                    {
                        value: '河北',
                        label: '河北',
                    },
                    {
                        value: '山西',
                        label: '山西',
                    },
                    {
                        value: '内蒙古',
                        label: '内蒙古',
                    },
                ],
            },
            {
                label: '华东地区',
                children: [
                    {
                        value: '山东',
                        label: '山东',
                    },
                    {
                        value: '江苏',
                        label: '江苏',
                    },
                    {
                        value: '安徽',
                        label: '安徽',
                    },
                    {
                        value: '浙江',
                        label: '浙江',
                    },
                    {
                        value: '福建',
                        label: '福建',
                    },
                    {
                        value: '上海',
                        label: '上海',
                    },
                ],
            },
        ];

        const cityOptions = [
            {
                label: '华中地区',
                children: [
                    {
                        value: '1.1',
                        label: '湖南',
                        children: [
                            {
                                label: '长沙',
                                value: '1.1.1',
                            },
                        ],
                    },
                    {
                        value: '1.2',
                        label: '湖北',
                        children: [
                            {
                                label: '武汉',
                                value: '1.2.1',
                            },
                            {
                                label: '孝感',
                                value: '1.2.2',
                            },
                        ],
                    },
                ],
            },
            {
                label: '华南地区',
                children: [
                    {
                        value: '1.3',
                        label: '深圳',
                    },
                    {
                        value: '1.4',
                        label: '广州',
                    },
                ],
            },
        ];

        return {
            options,
            cityOptions,
            value1,
            value2,
            value3,
            value4,
        };
    },
};
</script>

<style scoped>
.label-text {
    color: black;
    opacity: 0.5;
    font-weight: 600;
}
</style>
```

## Select Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|
|clearable|是否显示清除按钮|boolean|`false`|
|disabled|是否禁用|boolean|`false`|
|collapseTags|多选时选中项是否折叠展示|boolean|`false`|
|collapseTagsLimit|多选时选中项超出限制个数后才会折叠|number|1|
|tagBordered|多选时，选中项展示是否有边框（disabled 为 true 时强制有边框）|boolean|`false`|
|emptyText|选项为空时显示的文字，也可以使用#empty 设置|string|`无数据`|
|getContainer|指定下拉选项挂载的 HTML 节点|() => HTMLElement|`() => document.body`|
|multiple|是否多选|boolean|`false`|
|multipleLimit|多选时用户最多可以选择的项目数，为 0 则不限制|number|`0`|
|placeholder|当没有选择内容时的提示语|string|\-|
|modelValue / v-model|选中的值|number / string / boolean / object|\-|
|filterable|是否支持过滤选项|boolean|`false`|
|filter|自定义过滤函数|(pattern: string, option: object) => boolean|`-`|
|filterTextHighlight|过滤文本是否高亮|boolean|`false`|
|tag|是否可以创建新的选项，需要和 `filterable` 一起使用|boolean|`false`|
|remote|是否远程搜索，当输入内容时触发`search`事件|boolean|`false`|
|options|选项配置|array<SelectOption>|`[]`|
|virtualScroll|虚拟滚动|boolean / number|`true`|
|valueField|替代 `SelectOption` 中的 `value` 字段名|string|`value`|
|labelField|替代 `SelectOption` 中的 `label` 字段名|string|`label`|
|popperClass|弹出框容器样式|string|\-|
|triggerClass|弹出框触发器样式类|string|\-|
|triggerStyle|弹出框触发器样式|string / object|\-|

## Select Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|选择或者清除选中选项时触发|(value) => void|
|visibleChange|下拉框出现/隐藏时触发, 出现则为 true，隐藏则为 false|(visible: Boolean) => void|
|removeTag|取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 模式下生效|取消选中的值|
|blur|当选择器失去焦点时触发|(event: Event) => void|
|focus|当选择器获得焦点时触发|(event: Event) => void|
|clear|点击清除按钮时触发|(event: Event) => void|
|scroll|滚动事件|(event: Event) => void|
|search|搜索事件|( query: String) => void|
|filter|过滤事件|( query: String) => void|

## Select Slots [​]()

|名称|说明|参数|
|---|---|---|
|default|option 和 selectGroupOption 组件列表|\-|
|empty|无选项的内容|\-|
|option|自定义 `Option` 内容|*{ value, label, disabled, isSelected }*|
|tag|控制标签的渲染，自定义选中选项在选择框如何展示|*{ option: SelectOption, handleClose: ()=> void }*|
|header|弹框顶部显示自定义的内容|\-|
|footer|弹框底部显示自定义的内容|\-|
|addon|即将废弃，请使用 footer|\-|

## Select Methods [​]()

|名称|说明|
|---|---|
|blur|取消焦点|
|focus|获取焦点|

## Option Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|选项的值，需要唯一|string / number / boolean / object|\-|
|label|选项的标签，若不设置则默认与 `value` 相同|string / number|\-|
|disabled|是否禁用|boolean|`false`|

## SelectGroupOption Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|label|选项组标签|string|\-|
|disabled|选项组禁用，子选项都不可选择|boolean|`false`|

## SelectGroupOption Slots [​]()

|属性|说明|
|---|---|
|label|自定义分组标签，优先级比 props.label 高|

## SelectOption [​]()

|属性|说明|类型|
|---|---|---|
|value|非分组选项的值，需要唯一|string / number / boolean / object|
|label|选项的标签|string / number|
|disabled|是否禁用|boolean|
|children|若为数组类型，则当前项为分组选项|`Array<SelectOption>`|

阅读原文：http://fe.weoa.com/fes-design/zh/components/select.html