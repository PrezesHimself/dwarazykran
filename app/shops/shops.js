'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('shops', {
                url: '/shops',
                templateUrl: 'app/shops/shops.html',
                controller: 'ShopsController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('shops app init');
    })
