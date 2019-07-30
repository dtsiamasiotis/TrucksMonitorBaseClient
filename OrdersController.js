(function () {
    'use strict';

    angular.module('baseClient')
        .controller('OrdersController', OrdersController);


    OrdersController.$inject = ['items','NgTableParams','ServerDataService'];
    function OrdersController(items,NgTableParams,ServerDataService) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});

        self.saveNewOrder = function(quantity,address) {
            var requestBody = self.createJsonAddOrder(quantity,address);
            console.log(requestBody);
            ServerDataService.saveOrder(requestBody).then(function(response){ServerDataService.getOrders().then(function(response){self.updateTable(response);})});
        };

        self.updateTable = function(data){
            self.tableParams.settings().dataset=data;
            self.tableParams.total(data.length);
            self.tableParams.reload();
        };

        self.removeOrder = function(id){
            var requestBody = self.createJsonDelOrder(id);
            console.log(requestBody);
            ServerDataService.removeOrder(requestBody).then(function(response){ServerDataService.getOrders().then(function(response){self.updateTable(response);})});
        };

        self.createJsonAddOrder = function(quantity,address) {
            var orderObj = {quantity:quantity,address:address};
            var orderJson = JSON.stringify(orderObj);

            return orderJson;
        };

        self.createJsonDelOrder = function(id) {
            var orderObj = {id:id};
            var orderJson = JSON.stringify(orderObj);

            return orderJson;
        };


    }

})();