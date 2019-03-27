(function(){
    'use strict';

    angular.module('baseClient')
        .component('items', {
            templateUrl: 'templates/trucks.template.html',
            bindings: {
                items: '<'
            }
        });
}) ();

