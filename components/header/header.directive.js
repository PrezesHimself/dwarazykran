'use strict';

angular.module('webApp')
    .directive('header', function() {
        return {
            templateUrl: 'header.tpl.html',
            restrict: 'E',
            controller: 'HeaderController',
            controllerAs: 'vm',
            link: function(scope, element) {
                element.addClass('header');
            }
        };
    });
