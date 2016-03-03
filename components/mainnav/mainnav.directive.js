'use strict';

angular.module('webApp')
    .directive('mainnav', function() {
        return {
            templateUrl: '../components/mainnav/mainnav.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('mainnav');
            }
        };
    });
