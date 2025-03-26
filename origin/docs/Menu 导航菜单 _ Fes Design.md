# Menu 导航菜单 [​]()

为网站提供导航功能的菜单。

## 组件注册 [​]()

js

```
import { FMenu } from '@fesjs/fes-design';

app.use(FMenu);
```

## 代码演示 [​]()

### 水平方向 [​]()

play

```
<template>
    <f-menu>
        <f-sub-menu value="1">
            <template #icon>
                <AppstoreOutlined />
            </template>
            <template #label>我是标题</template>
            <f-menu-group>
                <template #label>华中地区</template>
                <f-menu-item value="1.1" disabled>
                    <template #label>湖南</template>
                </f-menu-item>
                <f-sub-menu label="湖北">
                    <f-menu-item value="1.2.1" label="武汉市" />
                    <f-menu-item value="1.2.2" label="荆州市" />
                    <f-menu-item value="1.2.3" label="仙桃市" />
                    <f-menu-item value="1.2.4" label="黄冈市" />
                    <f-menu-item value="1.2.5" label="孝感市" />
                </f-sub-menu>
            </f-menu-group>
            <f-menu-group>
                <template #label> 华南地区 </template>
                <f-menu-item value="1.3" label="广东" />
                <f-menu-item value="1.4" label="广西壮族自治区" />
            </f-menu-group>
            <f-menu-group>
                <template #label> 华东地区 </template>
                <f-menu-item value="1.5" label="浙江" />
            </f-menu-group>
        </f-sub-menu>
        <f-sub-menu value="2">
            <template #icon>
                <AppstoreOutlined />
            </template>
            <template #label>人群管理</template>
            <f-menu-item value="2.1" :disabled="true">
                <template #label>富高帅</template>
            </f-menu-item>
            <f-menu-item value="2.2">
                <template #label>白富美</template>
            </f-menu-item>
            <f-sub-menu label="湖北">
                <f-sub-menu value="2.3.1" label="武汉市">
                    <f-menu-item value="2.3.1.1">
                        <template #label>天心区</template>
                    </f-menu-item>
                    <f-menu-item value="2.3.1.2">
                        <template #label>岳麓区</template>
                    </f-menu-item>
                </f-sub-menu>
                <f-menu-item value="2.3.2" label="荆州市" />
            </f-sub-menu>
            <f-sub-menu label="湖南">
                <f-sub-menu value="2.4.1" label="长沙市">
                    <f-menu-item value="2.4.1.1">
                        <template #label>江汉区</template>
                    </f-menu-item>
                    <f-menu-item value="2.4.1.2">
                        <template #label>汉阳区</template>
                    </f-menu-item>
                </f-sub-menu>
                <f-sub-menu value="2.4.2" label="株洲市">
                    <f-menu-item value="2.4.2.1">
                        <template #label>荷塘区</template>
                    </f-menu-item>
                    <f-menu-item value="2.4.2.2">
                        <template #label>芦淞区</template>
                    </f-menu-item>
                </f-sub-menu>
            </f-sub-menu>
        </f-sub-menu>
        <f-menu-item value="3">
            <template #label>资源管理</template>
        </f-menu-item>
    </f-menu>
</template>
```

### 垂直方向 [​]()

play

```
<template>
    <div style="width: 200px">
        <f-menu mode="vertical">
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>
                    我是标题我是标题我是标题我是标题我是标题
                </template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1" disabled>
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-menu-item value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
            </f-menu-item>
            <f-menu-item value="3">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>资源管理</template>
            </f-menu-item>
        </f-menu>
    </div>
</template>
```

#### 折叠 [​]()

收起菜单，只显示 `Icon`，留更多的空间展示页面内容。

play

```
<template>
    是否折叠：
    <FSwitch v-model="collapsed" style="margin: 20px" />
    反色：
    <f-switch v-model="inverted">
        <template #active> 深色 </template>
        <template #inactive> 浅色 </template>
    </f-switch>
    <div style="width: 200px">
        <f-menu mode="vertical" :collapsed="collapsed" :inverted="inverted">
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-sub-menu value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
                <f-menu-item value="2.1">
                    <template #label>富高帅</template>
                </f-menu-item>
                <f-menu-item value="2.2">
                    <template #label>白富美</template>
                </f-menu-item>
                <f-sub-menu label="湖北">
                    <f-menu-item value="2.3.1" label="武汉市" />
                    <f-menu-item value="2.3.2" label="荆州市" />
                </f-sub-menu>
            </f-sub-menu>
            <f-menu-item value="3">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>资源管理</template>
            </f-menu-item>
        </f-menu>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const collapsed = ref(false);
        const inverted = ref(false);
        return {
            collapsed,
            inverted,
        };
    },
});
</script>
```

### 只展开一个 [​]()

展开子菜单，同时关闭其他子菜单。

play

```
<template>
    <div style="width: 200px">
        <f-menu mode="vertical" accordion>
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-menu-item value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
            </f-menu-item>
            <f-menu-item value="3">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>资源管理</template>
            </f-menu-item>
            <f-sub-menu value="4">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="4.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="4.2.1" label="武汉市" />
                        <f-menu-item value="4.2.2" label="荆州市" />
                        <f-menu-item value="4.2.3" label="仙桃市" />
                        <f-menu-item value="4.2.4" label="黄冈市" />
                        <f-menu-item value="4.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="4.3" label="广东" />
                    <f-menu-item
                        value="4.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="4.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
        </f-menu>
    </div>
</template>
```

### 全部展开 [​]()

play

```
<template>
    <div style="width: 200px">
        <f-menu mode="vertical" defaultExpandAll>
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-menu-item value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
            </f-menu-item>
            <f-menu-item value="3">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>资源管理</template>
            </f-menu-item>
        </f-menu>
    </div>
</template>
```

### 展开部分 [​]()

play

```
<template>
    <div style="width: 200px">
        <f-menu mode="vertical" :expandedKeys="['4']">
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-menu-item value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
            </f-menu-item>
            <f-menu-item value="3">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>资源管理</template>
            </f-menu-item>
            <f-sub-menu value="4">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="4.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="4.2.1" label="武汉市" />
                        <f-menu-item value="4.2.2" label="荆州市" />
                        <f-menu-item value="4.2.3" label="仙桃市" />
                        <f-menu-item value="4.2.4" label="黄冈市" />
                        <f-menu-item value="4.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="4.3" label="广东" />
                    <f-menu-item
                        value="4.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="4.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
        </f-menu>
    </div>
</template>
```

### 配置方式 [​]()

通过配置 `options` 直接生成菜单，比如可以通过路由数据生成菜单。

play

```
<template>
    <f-menu v-model="value" :options="options" />
</template>

<script>
import { h, ref } from 'vue';
import { AppstoreOutlined } from '@fesjs/fes-design/icon';

export default {
    setup() {
        const value = ref(2);
        const options = ref([]);

        setTimeout(() => {
            options.value = [
                {
                    label: () => '我是子菜单',
                    icon: () => {
                        return h(AppstoreOutlined);
                    },
                    value: '1',
                    children: [
                        {
                            label: '华中地区',
                            isGroup: true,
                            children: [
                                {
                                    value: '1.1',
                                    label: '湖南',
                                    children: [
                                        {
                                            label: '长沙市',
                                            value: '1.1.1',
                                            children: [
                                                {
                                                    label: '天心区',
                                                    value: '1.1.1.1',
                                                },
                                                {
                                                    label: '岳麓区',
                                                    value: '1.1.1.2',
                                                },
                                            ],
                                        },
                                        {
                                            label: '株洲市',
                                            value: '1.1.2',
                                            children: [
                                                {
                                                    label: '荷塘区',
                                                    value: '1.1.2.1',
                                                },
                                                {
                                                    label: '芦淞区',
                                                    value: '1.1.2.2',
                                                },
                                            ],
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
                                            children: [
                                                {
                                                    label: '汉阳区',
                                                    value: '1.2.1.1',
                                                },
                                                {
                                                    label: '江汉区',
                                                    value: '1.2.1.2',
                                                },
                                            ],
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
                            isGroup: true,
                            children: [
                                {
                                    value: '1.3',
                                    label: '深圳',
                                    disabled: true,
                                },
                                {
                                    value: '1.4',
                                    label: '广州',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: '人群管理',
                    value: 2,
                },
                {
                    label: '资源管理',
                    value: '3',
                },
            ];
        }, 1000);

        return {
            value,
            options,
        };
    },
};
</script>
```

### 反色 [​]()

显示反色主题。

play

```
<template>
    <FSpace vertical>
        <f-switch v-model="inverted">
            <template #active> 深色 </template>
            <template #inactive> 浅色 </template>
        </f-switch>
        <f-menu :inverted="inverted">
            <f-sub-menu value="1">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>我是标题</template>
                <f-menu-group>
                    <template #label>华中地区</template>
                    <f-menu-item value="1.1">
                        <template #label>湖南</template>
                    </f-menu-item>
                    <f-sub-menu label="湖北">
                        <f-menu-item value="1.2.1" label="武汉市" />
                        <f-menu-item value="1.2.2" label="荆州市" />
                        <f-menu-item value="1.2.3" label="仙桃市" />
                        <f-menu-item value="1.2.4" label="黄冈市" />
                        <f-menu-item value="1.2.5" label="孝感市" />
                    </f-sub-menu>
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华南地区 </template>
                    <f-menu-item value="1.3" label="广东" />
                    <f-menu-item
                        value="1.4"
                        label="广西壮族自治区"
                    />
                </f-menu-group>
                <f-menu-group>
                    <template #label> 华东地区 </template>
                    <f-menu-item value="1.5" label="浙江" />
                </f-menu-group>
            </f-sub-menu>
            <f-menu-item value="2">
                <template #icon>
                    <AppstoreOutlined />
                </template>
                <template #label>人群管理</template>
            </f-menu-item>
            <f-menu-item value="3">
                <template #label>资源管理</template>
            </f-menu-item>
        </f-menu>
    </FSpace>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const inverted = ref(false);
        return {
            inverted,
        };
    },
});
</script>
```

### 自定义挂载 [​]()

play

```
<template>
    <FScrollbar ref="container" :height="150">
        <FMenu
            v-model="value"
            :options="options"
            :getContainer="getMenuPopperContainer"
        />
        <br>
        <div v-for="(_, index) in Array.from({ length: 10 })" :key="index" style="color: lightgrey">
            PLACEHOLDER_TEXT
        </div>
    </FScrollbar>
</template>

<script setup>
import { h, ref } from 'vue';
import { AppstoreOutlined } from '@fesjs/fes-design/icon';

const value = ref(2);
const options = ref([
    {
        label: () => '我是子菜单',
        icon: () => {
            return h(AppstoreOutlined);
        },
        value: '1',
        children: [
            {
                label: '华中地区',
                isGroup: true,
                children: [
                    {
                        value: '1.1',
                        label: '湖南',
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
                isGroup: true,
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
        ],
    },
    {
        label: '人群管理',
        value: 2,
    },
    {
        label: '资源管理',
        value: '3',
    },
]);

const container = ref();
const getMenuPopperContainer = () => container.value?.$el;
</script>
```

## Menu Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|modelValue(v-model)|当前选中菜单标识符|string / number|`null`|
|mode|模式，可选值有`horizontal`和`vertical`|string|`horizontal`|
|collapsed|是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）|boolean|`false`|
|inverted|是否反转样式|boolean|`false`|
|defaultExpandAll|是否默认展开全部菜单，当有 `expandedKeys` 时，`defaultExpandAll` 将失效|boolean|`false`|
|expandedKeys(v-model)|展开的子菜单标识符数组|array|`[]`|
|accordion|是否只保持一个子菜单的展开|boolean|`false`|
|options|菜单数据，配置可看 MenuOption|array|`[]`|
|getContainer|配置渲染节点的输出位置|() => HTMLElement|`() => document.body`|
|appendToContainer|弹窗内容是否添加到指定的 DOM 元素|boolean|`true`|

## Menu Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|select|选中菜单时触发|({ value: string}) => void|

## SubMenu Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|唯一标志|string|`null`|
|label|子菜单的标题|string|`-`|

## SubMenu Slots [​]()

|属性|说明|
|---|---|
|icon|子菜单的 icon|
|label|子菜单的标题，优先级比 props.label 高|

## MenuGroup Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|label|分组菜单的标题|string|`-`|

## MenuGroup Slots [​]()

|属性|说明|
|---|---|
|label|分组菜单的标题，优先级比 props.label 高|

## MenuItem Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|value|唯一标志|string|`null`|
|label|菜单的标题|string|`-`|
|disabled|是否禁用菜单项|boolean|`false`|

## MenuItem Slots [​]()

|属性|说明|
|---|---|
|icon|菜单的 icon|
|label|菜单的标题，优先级比 props.label 高|

## MenuOption [​]()

|属性|说明|类型|
|---|---|---|
|value|菜单标识符|string|
|label|菜单项的内容|string 、 ()=> VNodeChild|
|icon|菜单项的图标|()=> VNodeChild|
|children|子选项，当存在子选项时渲染为子菜单或者分组菜单|`Array<MenuOption>`|
|isGroup|是否是分组|boolean|
|disabled|是否禁用|boolean|

阅读原文：http://fe.weoa.com/fes-design/zh/components/menu.html