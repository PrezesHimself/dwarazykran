'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('home app init');
    })
