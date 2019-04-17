(function () {
    'use strict';

    angular.module('baseClient')
        .controller('OrdersController', OrdersController);


    OrdersController.$inject = ['items','NgTableParams'];
    function OrdersController(items,NgTableParams) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});

        self.saveNewOrder = function(licence_plate,status) {
            var requestBody = self.createPostRequestBody(licence_plate,status)
            console.log(requestBody);
            ServerDataService.saveOrder(requestBody);
        };

        self.createPostRequestBody = function(quantity) {
            var body = "{\"quantity\":\""+quantity+"\"}";

            return body;
        };


    }

})();