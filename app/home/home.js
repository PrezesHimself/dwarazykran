'use strict';

angular.module('webApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/',
                templateUrl: 'home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    })
    .run(function () {
        console.log('home app init');
    })
