# 更新日志

## 3.2.0

1. 钉钉消息新增群机器人功能

## 3.1.0 

1. 不支持gitlab登录,统一使用sso登录系统, 移除login,register等方法

2. 你配置的 web 页域名是不能跨域的，例如你在小机房环境，配置的域名要是 .dasouche-inc.net 的子域名，才能访问到键为 _security_token_inc 的 cookie。

3. 我们会把登录后返回的用户信息放在键值为userData的cookie中,domain为.dasouche-inc.net,失效时间为7天

4. 需要在Ruler-tool的配置中添加callbackUrl作为登录成功后的回调地址,并且移除token的设置

## 2.3.1

1. 修复登录失败问题

## 2.3.0

1. Data增加聚合查询功能

## 2.2.0

1. 集成钉钉消息发送功能

## 2.1.0

1. 在 `ruler` 和 `ruler-tool` 加入 `File` 模块，内置上传文件功能和管理功能。

## 2.0.0

1. Data模块升级, 非兼容版本, 2.0.0以下Data模块已不能使用,建议升级

## 1.8.10

1. 修复在webpack2.x工程里 webpack.optimize.UglifyJsPlugin压缩混淆代码报错问题

## 1.8.8

1. App模块apps接口新增url返回字段

## 1.8.7

1. 不再支持按需引入,无需再使用babel-plugin-import, 1.7.x仍支持









