# Jenkins

    import {Jenkins} from '@souche-f2e/ruler-tool';

## call

### 入参

    {
        * path: 接口 path
        * params: 参数
        * method: 请求方式
        * token: jenkins auth token
    }

### 出参

    jenkins 返回的数据

### 用法
    Jenkins.call({
        path: '....',
        method: 'POST',
        params: {
        },
        token: '...'
    })
    .then(res => {
    })
    .catch(error => {
    });