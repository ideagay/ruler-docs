# 快速上手

本文将介绍如何在项目中使用ruler-tool

## 安装

    snpm install @souche-f2e/ruler-tool  --save


## ruler-tool

ruler-tool是平台封装的api工具,目的是让你快速的使用平台提供的接口;目前封装了5大模块,包括用户管理,应用管理,权限管理,表管理,数据接入

### 首先在main.js中设定全局配置

    import {Config} from '@souche-f2e/ruler-tool';
    
    let appKey = '8f9f7e401f88d0ae55b13f9593229d78';  // 写入自己应用的appkey,可在应用设置里查看
    
    let errorHandler = ({code, msg}) => {
        console.error(code + ',' + msg);
        // do something
        if (code === 401) { // 401 为token失效的返回码
            // do something
        }
    };
    
    Config.setup({
        token: xxx,
        host: 'http://api.ruler.dasouche-inc.net/graphql', // 可不传,默认连线上环境
        errorHandler: errorHandler,
        appKey: appKey
    });


### user登录方法使用示例

    import {User, Config} from '@souche-f2e/ruler-tool';

    User.login(params).then(res => {
        console.log(res);
        // do something
        Config.token = res.token; // 登录后重写token
    }).catch((err) => {
        console.error(err);
    });

## 按需引入 

借助babel-plugin-import实现按需引入,以达到减小项目体积的目的

1.8.x版本及以上不需要使用此插件

首先安装babel-plugin-import

    snpm install babel-plugin-import --save-dev

然后,在.babelrc的plugins中添加配置,以下代码只展示babel-plugin-import部分配置,其他配置根据自己项目添加

    {
      "plugins": [[
        "import",
        [
          {
            "libraryName": "@souche-f2e/ruler-tool"
          }
        ]
      ]]
    }
