(function () {
    'use strict';

    angular.module('baseClient')
        .controller('TrucksController', TrucksController);


    TrucksController.$inject = ['items','NgTableParams','ServerDataService'];
    function TrucksController(items,NgTableParams,ServerDataService) {
        var self = this;
        var data = items;
        self.tableParams = new NgTableParams({}, { dataset: data});

        self.saveNewTruck = function(licence_plate,status) {
            var requestBody = self.createPostRequestBody(licence_plate,status)
            console.log(requestBody);
            ServerDataService.saveTruck(requestBody);
        };

        self.createPostRequestBody = function(licence_plate,status) {
            var body = "{\"operation\":\"newTruck\",\"licence_plate\":\""+licence_plate+"\","+"\"status\":\""+status+"\"}";

            return body;
        };
    }



})();