'use strict';

angular.module('webApp')
    .directive('mainnav', function() {
        return {
            templateUrl: 'mainnav.tpl.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('mainnav');
            }
        };
    });
