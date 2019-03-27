(function(){
    'use strict';

    angular.module('baseClient').config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            })
            .state('trucks', {
                url: '/trucks',
                templateUrl: 'templates/trucks.template.html',
                controller: 'TrucksController as trucks',
                resolve:{
                    items:['ServerDataService', function(ServerDataService){
                           return ServerDataService.getTrucks();
                            }]

                         }

                })
            .state('orders', {
                url: '/orders',
                templateUrl: 'templates/orders.template.html',
                controller: 'OrdersController as orders',
                resolve:{
                    items:['ServerDataService', function(ServerDataService){
                        return ServerDataService.getOrders();
                    }]

                }

            });
    }
})();
