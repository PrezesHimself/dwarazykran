'use strict';

angular.module('webApp')
    .directive('searchbar', function() {
        return {
            templateUrl: 'searchbar/searchbar.html',
            restrict: 'E',
            controller: 'SearchbarController',
            controllerAs: 'vm',
            link: function(scope, element) {
                element.addClass('searchbar');
            }
        };
    });
