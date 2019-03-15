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
                controller: 'TrucksController as trucks'//,
               // resolve:{
                  //  items:['MenuDataService', function(MenuDataService){
                     //   return MenuDataService.getAllCategories();
                //    }]

               // }
            })
    }
})();
