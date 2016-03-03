'use strict';

angular.module('webApp')
    .directive('header', function() {
        return {
            templateUrl: 'header/header.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('header');
            }
        };
    });
