'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('map', {
                url: '/map',
                templateUrl: 'map/map.html',
                controller: 'MapController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('map app init');
    })
