define(['module1/module'], function (module) {
    module.factory('service1', function(){
        return{getMessage:function(){return 'Hello from lazy loaded service';}};
    });
});