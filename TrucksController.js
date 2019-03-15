(function () {
    'use strict';

    angular.module('baseClient')
        .controller('TrucksController', TrucksController);


    //CategoriesController.$inject = ['items'];
    function TrucksController(NgTableParams) {
        var self = this;
        var data = [{name: "Moroni", age: 50} /*,*/];
        self.tableParams = new NgTableParams({}, { dataset: data});
    }

})();