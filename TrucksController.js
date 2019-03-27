(function () {
    'use strict';

    angular.module('baseClient')
        .controller('TrucksController', TrucksController);


    TrucksController.$inject = ['items','NgTableParams'];
    function TrucksController(items,NgTableParams) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});
    }

})();