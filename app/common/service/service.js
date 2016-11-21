define(['common/module'], function (module) {
    module.factory('testService', function(){
        return{getMessage:function(){return 'Hello from lazy loaded service';}};
    });
});