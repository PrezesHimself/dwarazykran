'use strict';
    angular.module('webApp', [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
      $urlRouterProvider
          .otherwise('/');

      //$locationProvider.html5Mode(true);
    }])
    .run(function() {
       console.log('running angular ' + angular.version.full);
    })
