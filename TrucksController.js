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
            console.log(data);
            var requestBody = self.createJsonAddTruck(licence_plate,status);
            console.log(requestBody);
            ServerDataService.saveTruck(requestBody).then(function(response){ServerDataService.getTrucks().then(function(response){self.updateTable(response);})});
        };


        self.updateTable = function(data){
            self.tableParams.settings().dataset=data;
            self.tableParams.total(data.length);
            self.tableParams.reload();
        };

        self.removeTruck = function(id){
            var requestBody = self.createJsonDelTruck(id);
            console.log(requestBody);
            ServerDataService.removeTruck(requestBody).then(function(response){ServerDataService.getTrucks().then(function(response){self.updateTable(response);})});
        };

        self.createJsonAddTruck = function(licence_plate,status) {
            var body = "{\"licenceplate\":\""+licence_plate+"\","+"\"status\":\""+status+"\"}";
            return body;
        };

        self.createJsonDelTruck = function(id) {
            var body = "{\"id\":\""+id+"\"}";
            return body;
        };


    }



})();