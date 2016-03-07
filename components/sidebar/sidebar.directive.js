'use strict';

angular.module('webApp')
    .directive('sidebar', function() {
        return {
            templateUrl: 'sidebar.tpl.html',
            restrict: 'E',
            controller: 'SidebarController',
            controllerAs: 'vm',
            scope: {
                currentShop: '='
            },
            link: function(scope, element) {
                element.addClass('sidebar');
            }
        };
    });
