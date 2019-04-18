(function () {
    'use strict';

    angular.module('baseClient')
        .controller('OrdersController', OrdersController);


    OrdersController.$inject = ['items','NgTableParams','ServerDataService'];
    function OrdersController(items,NgTableParams,ServerDataService) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});

        self.saveNewOrder = function(quantity) {
            var requestBody = self.createPostRequestBody(quantity)
            console.log(requestBody);
            ServerDataService.saveOrder(requestBody);
        };

        self.createPostRequestBody = function(quantity) {
            var body = "{\"quantity\":\""+quantity+"\"}";

            return body;
        };


    }

})();