/**
 * main.js这个文件完成的事情简单来说就是：载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
 * 这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
 *
 * */
require.config({
    baseUrl: './',
    paths: {
        "jquery": "bower_components/jquery/dist//jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "angular": "bower_components/angular/angular",
        "ocLazyLoad": "bower_components/ocLazyLoad/dist/ocLazyLoad.require.min",
        "angular-ui-router": "bower_components/ui-router/release/angular-ui-router.min"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        'angular-ui-router': {
            deps: ["angular"]
        },
        ocLazyLoad: {
            deps: ["angular"]
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['jquery'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});

//手动启动ng
/*define(["routes"], function () {
    //使用bootstrap方法启动Angular应用
    angular.bootstrap(document, ["app"]);
});*/

require(['app'], function (app) {
    app.bootstrap();
});