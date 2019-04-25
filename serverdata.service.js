(function(){
    'use strict';

    angular.module('data',[])
        .service('ServerDataService',ServerDataService);

    ServerDataService.$inject=['$http'];
    function ServerDataService($http){

        var service = this;

        service.getTrucks= function () {
            return $http({
                method:"GET",
                url:("http://localhost:8080/servlet/truckActions/getTrucks")
            })
                .then(function (response) {
                    var responseArray = response.data;
                    console.log(responseArray);
                    return responseArray;
                });
        };

        service.getOrders=function(){
            return $http({
                method:"GET",
                url:("http://localhost:4000/orders")
            })
                .then(function(response){
                    var responseArray = response.data;
                    return responseArray;
                });
        };

        service.getClients=function(){
            return $http({
                method:"GET",
                url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortname)
            })
                .then(function(response){
                    var responseArray = response.data.menu_items;
                    return responseArray;
                });
        };

        service.saveTruck=function(requestBody){
            return $http({
                method:"POST",
                url:("http://localhost:8080/servlet/truckActions/registerTruck"),
                data: requestBody
            })
                .then(function(response){
                    console.log(response);
                    return response;
                });
        };

        service.saveOrder=function(requestBody){
            return $http({
                method:"POST",
                url:("http://localhost:8080/servlet/orderActions/addOrder"),
                data: requestBody
            })
                .then(function(response){
                    console.log(response);
                });
        };

        service.removeTruck=function(requestBody){
            return $http({
                method:"POST",
                url:("http://localhost:8080/servlet/truckActions/deleteTruck"),
                data: requestBody
            })
                .then(function(response){
                    console.log(response);
                });
        };
    }
})();
