(function () {
    'use strict';

    angular.module('baseClient')
        .controller('OrdersController', OrdersController);


    OrdersController.$inject = ['items','NgTableParams'];
    function OrdersController(items,NgTableParams) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});
    }

})();