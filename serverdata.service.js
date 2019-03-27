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
                url:("http://localhost:4000/trucks")
            })
                .then(function (response) {
                    var responseArray = response.data;
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
    }
})();
