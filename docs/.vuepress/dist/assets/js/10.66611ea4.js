(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(t,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"gitlab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab","aria-hidden":"true"}},[t._v("#")]),t._v(" Gitlab")]),t._v(" "),a("pre",[a("code",[t._v("import {Gitlab} from '@souche-f2e/ruler-tool';\n")])]),t._v(" "),a("h2",{attrs:{id:"gitlab-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-2","aria-hidden":"true"}},[t._v("#")]),t._v(" gitlab")]),t._v(" "),a("h3",{attrs:{id:"入参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入参","aria-hidden":"true"}},[t._v("#")]),t._v(" 入参")]),t._v(" "),a("pre",[a("code",[t._v("{\n    * path: 接口 /api/v4/.....\n    * params: 参数\n    * method: 请求方式\n    token: gitlab auth token\n}\n")])]),t._v(" "),a("h3",{attrs:{id:"出参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出参","aria-hidden":"true"}},[t._v("#")]),t._v(" 出参")]),t._v(" "),a("pre",[a("code",[t._v("gitlab 返回的数据\n")])]),t._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("pre",[a("code",[t._v("Gitlab.gitlab({\n    path: '/oauth/token',\n    method: 'POST',\n    params: {\n      grant_type: 'password',\n      username: this.username + '@souche.com',\n      password: this.psw\n    }\n})\n.then(res => {\n  CacheUtils.setCookie('_gitlab_token', res.access_token, 3, '.dasouche-inc.net');\n  CacheUtils.setCookie('_gitlab_refresh_token', res.refresh_token, 3, '.dasouche-inc.net');\n})\n.catch(error => {\n  console.log(error);\n});")])])])}],!1,null,null,null);n.options.__file="gitlab.md";e.default=n.exports}}]);