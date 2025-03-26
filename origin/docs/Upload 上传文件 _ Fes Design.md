# Upload 上传文件 [​]()

通过此组件从系统中选择文件，并且上传到配置的服务器。

## 组件注册 [​]()

js

```
import { FUpload } from '@fesjs/fes-design';

app.use(FUpload);
```

## 代码演示 [​]()

### 通用用法 [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.common] [change] param:', param);
        };
        const remove = (param) => {
            console.log(
                '[upload.common] [remove] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
        };
        const success = (param) => {
            console.log(
                '[upload.common] [success] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
        };
        const error = (param) => {
            fileList.value = fileList.value.filter(
                (file) => file.status !== 'error',
            );
            console.log(
                '[upload.common] [error] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.common] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.common] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.common] [beforeUpload] file:', file);
            if (file.size > 50 * 1024) {
                console.log('[upload.common] [beforeUpload] 超出5KB,无法上传!');
                FMessage.warning('超出50KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 初始列表 [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            },
        ]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.initList] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.initList] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.initList] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.initList] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.initList] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.initList] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.initList] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log(
                    '[upload.initList] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 自定义上传的触发器 [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <div>点击我就能上传</div>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            },
        ]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.default] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.default] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.default] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.default] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.default] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.default] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.default] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log(
                    '[upload.default] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 拖拽上传 [​]()

当自定义上传触发器使用 `FUploadDragger` 时开启拖拽上传。

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <FUploadDragger> 点击或者拖拽文件到此区域 </FUploadDragger>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.drag] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.drag] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.drag] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.drag] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.drag] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.drag] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.drag] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log('[upload.drag] [beforeUpload] 超出5KB,无法上传!');
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 自定义文件列表的显示 [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
        <template #fileList="{ uploadFiles }">
            <div v-for="file in uploadFiles" :key="file.uid">
                我的文件名是：{{ file.name }}
            </div>
        </template>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            },
        ]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.fileList] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.fileList] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.fileList] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.fileList] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.fileList] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.fileList] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.fileList] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log(
                    '[upload.fileList] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 禁用 [​]()

play

```
<template>
    <FUpload disabled />
</template>
```

### 预览上传文件 [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
        <template #file="{ file }">
            <FImage
                :name="file.name"
                :src="file.url"
                preview
                hide-on-click-modal
                style="cursor: pointer"
            >
                {{ file.name }}
            </FImage>
        </template>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: '/images/1.jpeg',
            },
        ]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.previewUpload] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.previewUpload] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.previewUpload] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.previewUpload] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.previewUpload] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.previewUpload] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.previewUpload] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log(
                    '[upload.previewUpload] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 自定义 http request [​]()

play

```
<template>
    <FUpload
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        multiple
        :multipleLimit="4"
        :accept="accept"
        :beforeUpload="beforeUpload"
        :httpRequest="customRequest"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
    </FUpload>
</template>

<script>
import { ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const fileList = ref([
            {
                uid: '1',
                name: 'xxx.png',
                status: 'done',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            },
            {
                uid: '2',
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            },
            {
                uid: '3',
                name: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            },
        ]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.customerUpload] [change] param:', param);
        };
        const remove = (param) => {
            console.log('[upload.customerUpload] [remove] param:', param);
        };
        const success = (param) => {
            console.log('[upload.customerUpload] [success] param:', param);
        };
        const error = (param) => {
            console.log('[upload.customerUpload] [error] param:', param);
            FMessage.error('文件上传失败');
        };
        const exceed = (param) => {
            console.log('[upload.customerUpload] [exceed] param:', param);
            FMessage.warning('文件上传超限');
        };
        const progress = (param) => {
            console.log('[upload.customerUpload] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.customerUpload] [beforeUpload] file:', file);
            if (file.size > 5 * 1024) {
                console.log(
                    '[upload.customerUpload] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出5KB,无法上传!');
                return false;
            }
            return true;
        };

        const customRequest = async (options) => {
            const formData = new FormData();
            formData.append('file', options.file);
            if (options.data) {
                Object.keys(options.data).forEach((key) =>
                    formData.append(key, options.data[key]),
                );
            }
            const controller = new AbortController();
            try {
                let res = await fetch(options.action, {
                    headers: options.headers,
                    credentials: options.withCredentials ? 'include' : 'omit',
                    body: formData,
                    signal: controller.signal,
                });
                if (options.transformResponse) {
                    res = options.transformResponse(res);
                }
                // 调用 onProgress 告知 upload 内部上传进度，这里只是 demo 实际请通知具体上传进度
                options.onProgress({
                    percent: 100,
                });
                // 调用 onSuccess 告知 upload 内部上传响应结果
                options.onSuccess(res);
            } catch (e) {
                // 调用 onError 告知 upload 内部上传失败情况
                options.onError(e);
            }

            return {
                // 返回取消请求的方法，非必需，但建议有
                abort: () => controller.abort(),
            };
        };
        return {
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
            customRequest,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

### 单个文件覆盖上传 [​]()

play

```
<template>
    <FUpload
        ref="uploadRef"
        v-model:fileList="fileList"
        action="https://run.mocky.io/v3/cbe5b01d-8a6d-46f9-a5e4-6c70e45ba6d0"
        :multipleLimit="1"
        :accept="accept"
        :beforeUpload="beforeUpload"
        @change="change"
        @remove="remove"
        @success="success"
        @error="error"
        @exceed="exceed"
        @progress="progress"
    >
        <template #tip>
            <div class="f-upload__tip">
                只能上传 jpg/png 等图片文件，且不超过 5KB
            </div>
        </template>
    </FUpload>
</template>

<script>
import { nextTick, ref } from 'vue';
import { FMessage } from '@fesjs/fes-design';

export default {
    setup() {
        const uploadRef = ref(null);

        const fileList = ref([]);

        const accept = ['image/*'];
        const change = (param) => {
            console.log('[upload.singleUpload] [change] param:', param);
        };
        const remove = (param) => {
            console.log(
                '[upload.singleUpload] [remove] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
        };
        const success = (param) => {
            console.log(
                '[upload.singleUpload] [success] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
        };
        const error = (param) => {
            fileList.value = fileList.value.filter(
                (file) => file.status !== 'error',
            );
            console.log(
                '[upload.singleUpload] [error] param:',
                param,
                ' fileList.value:',
                fileList.value,
            );
            FMessage.error('文件上传失败');
        };
        const exceed = async (param) => {
            console.log('[upload.singleUpload] [exceed] param:', param);
            uploadRef.value?.clearFiles();
            await nextTick();
            uploadRef.value?.addFile(param.files[0]);
        };
        const progress = (param) => {
            console.log('[upload.singleUpload] [progress] param:', param);
        };
        const beforeUpload = async (file) => {
            console.log('[upload.singleUpload] [beforeUpload] file:', file);
            if (file.size > 50 * 1024) {
                console.log(
                    '[upload.singleUpload] [beforeUpload] 超出5KB,无法上传!',
                );
                FMessage.warning('超出50KB,无法上传!');
                return false;
            }
            return true;
        };
        return {
            uploadRef,
            fileList,
            accept,
            change,
            remove,
            success,
            error,
            exceed,
            progress,
            beforeUpload,
        };
    },
};
</script>

<style>
.f-upload__tip {
    font-size: 12px;
    margin-top: 7px;
    color: #93949b;
}
</style>
```

## Upload Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|accept|接受上传的文件类型|array|\[\]|
|action|上传的地址|string|\-|
|beforeUpload|上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传|(file: File) => boolean \| Promise<boolean>|\-|
|beforeRemove|删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除|(file: FileItem, fileList: FileItem\[\]) => boolean \| Promise<boolean>|\-|
|disabled|是否禁用|boolean|`false`|
|data|上传接口附带的数据|object|`{}`|
|fileList(v-model)|上传的文件列表, 例如: \[{name: 'food.jpg', url: '[https://xxx.cdn.com/xxx.jpg](https://xxx.cdn.com/xxx.jpg)'}\]。|FileItem\[\]|`[]`|
|headers|上传接口中请求附带的请求头|object|`{}`|
|listType（第一期只支持`text`）|文件列表的类型，可选值有`text` / `picture-card`|string|`text`|
|multiple|是否支持多选文件|boolean|`false`|
|multipleLimit|最大允许上传个数|number|\-|
|name|上传的文件字段名|string|`file`|
|showFileList|是否显示已上传文件列表|boolean|`true`|
|withCredentials|支持发送 cookie 凭证信息|boolean|`false`|
|timeout|上传请求的超时时间 （毫秒）|number|\-|
|transformResponse|处理上传请求的响应内容，当抛出错误时判断为上传失败|(xhr: XMLHttpRequest)=> any|\-|
|httpRequest|自定义文件上传方法|(options: RequestOptions) => XMLHttpRequest;|\-|

## Upload Events [​]()

|事件名称|说明|回调参数|
|---|---|---|
|change|文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用|({file: FileItem, fileList: FileItem\[\]}) => void|
|remove|文件列表移除文件时的钩子|({file: FileItem, fileList: FileItem\[\]}) => void|
|success|文件上传成功时的钩子|({response: any, file: FileItem, fileList: FileItem\[\]}) => void|
|error|文件上传失败时的钩子|({error: UploadError, file: FileItem, fileList: FileItem\[\]}) => void|
|exceed|文件上传超出限制时的钩子|({files: FileList, fileList: FileItem\[\]}) => void|
|progress|文件上传进度的钩子|({event: UploadProgressEvent, file: FileItem, fileList: FileItem\[\]}) => void|

## Upload Slots [​]()

|名称|说明|
|---|---|
|default|触发文件选择框的内容, 参数为 `{ uploadFiles }`|
|tip|提示说明文字|
|fileList|自定义文件的展示, 参数为 `{ uploadFiles }`|
|file|自定义上传后的文件展示, 参数为 `{ file }`|

## Upload Methods [​]()

|名称|说明|参数|
|---|---|---|
|clearFiles|清空已上传的文件列表|() => void|
|addFile|手动选择文件|(rawFile: UploadFile) => void|
|removeFile|手动移除文件|(file: FileItem) => void|

## UploadDragger Props [​]()

|属性|说明|类型|默认值|
|---|---|---|---|
|onFileTypeInvalid|拖拽文件类型不满足 `accept` 时的钩子函数，若未定义则使用内置提示|(files: File\[\]) => void|\-|

## 类型 [​]()

### FileItem [​]()

ts

```
interface FileItem {
    uid: number | string;
    name: string;
    size?: number;
    url?: string;
    status?: string;
    percentage?: number;
    response?: any;
    raw?: File;
    [prop: string]: any;
}
```

### UploadFile [​]()

ts

```
interface UploadFile extends File {
    uid?: number | string;
}
```

### UploadProgressEvent [​]()

ts

```
interface UploadProgressEvent extends ProgressEvent {
    percent?: number;
}
```

### UploadError [​]()

ts

```
interface UploadError extends Error {
    status?: number;
    method?: string;
    url?: string;
}
```

### RequestOptions [​]()

ts

```
interface RequestOptions {
    headers: Record<string, string>; // 值为 props.headers,
    withCredentials: string; // 值为 props.withCredentials,
    data: Record<string, any>; //  值为 props.data,
    file: File; // 用户选中的文件
    fileName: string; // 值为 props.name,
    action: string; // 值为 props.action,
    timeout: number; // 值为 props.timeout,
    transformResponse: Function; // 值为 props.transformResponse,
    onProgress: (e: ProgressEvent) => void;
    onSuccess: (res: any) => void;
    onError: (err: Error) => void;
}
```

阅读原文：http://fe.weoa.com/fes-design/zh/components/upload.html