# angularjs1.2-platform

## **由于需要兼容ie8, 所以选择正对于AngularJs(1.2)做一个全面性的总结与知识回顾**

#### a lazyload service for angular projects
### 按需加载[AngularJS](http://angularjs.org)模块, 集成[RequireJS](http://requirejs.org/‎)。

###  示例使用说明

1. 安装[nodejs](http://nodejs.org) -- 下载最新版本并安装
2. 安装[bower](https://github.com/bower/bower) -- 命令行下执行: `npm install -g bower`  (不包含符号` ,下同)
3. 安装 supervisor: 'npm install supervisor -g'
3. 安装 api 服务并启动 --  命令行到**api**目录,执行 `npm install` 然后 'supervisor app.js' 启动 
4. 安装 Web 类库 --  命令行到**app**目录,执行 `bower install`
5. 浏览器打开 index.html 即可