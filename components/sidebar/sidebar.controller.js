'use strict';

(function() {

    function SidebarController($scope) {
        this.input = '';
        this.currentShop = $scope.currentShop;
    }

    SidebarController.$inject = ['$scope']
    angular.module('webApp')
        .controller('SidebarController', SidebarController);
})();