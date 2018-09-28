# Gitlab

    import {Gitlab} from '@souche-f2e/ruler-tool';

## gitlab

### 入参

    {
        * path: 接口 /api/v4/.....
        * params: 参数
        * method: 请求方式
        token: gitlab auth token
    }

### 出参

    gitlab 返回的数据

### 用法
    Gitlab.gitlab({
        path: '/oauth/token',
        method: 'POST',
        params: {
          grant_type: 'password',
          username: this.username + '@souche.com',
          password: this.psw
        }
    })
    .then(res => {
      CacheUtils.setCookie('_gitlab_token', res.access_token, 3, '.dasouche-inc.net');
      CacheUtils.setCookie('_gitlab_refresh_token', res.refresh_token, 3, '.dasouche-inc.net');
    })
    .catch(error => {
      console.log(error);
    });