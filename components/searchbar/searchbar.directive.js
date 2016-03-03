'use strict';

angular.module('webApp')
    .directive('searchbar', function() {
        return {
            templateUrl: 'searchbar/searchbar.html',
            restrict: 'E',
            link: function(scope, element) {
                element.addClass('searchbar');
            }
        };
    });
