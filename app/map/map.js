'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('app.map', {
                url: '/map?shopName',
                templateUrl: 'map.tpl.html',
                controller: 'MapController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('map app init');
    })
