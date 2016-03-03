'use strict';
    angular.module('webApp', [
        'ui.router',
        'ngAnimate'
    ])
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
      $urlRouterProvider
          .otherwise('/');

      $locationProvider.html5Mode(true);
    }])
    .run(function() {
       console.log('running angular ' + angular.version.full);
    })
