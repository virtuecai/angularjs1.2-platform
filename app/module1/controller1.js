define(['module1/module'], function (module) {
    module.controller('module1Controller',['service1',function(service1){
        this.message = service1.getMessage();
    }]);
});
