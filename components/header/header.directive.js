'use strict';

angular.module('webApp')
    .directive('header', function() {
        return {
            templateUrl: '../components/header/header.html',
            restrict: 'E',
            controller: 'HeaderController',
            controllerAs: 'vm',
            link: function(scope, element) {
                element.addClass('header');
            }
        };
    });
