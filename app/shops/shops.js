'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('app.shops', {
                url: '/shops',
                templateUrl: 'shops.tpl.html',
                controller: 'ShopsController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('shops app init');
    })
