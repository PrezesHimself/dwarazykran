'use strict';

(function() {

    function SidebarController($scope, ShopsService, UtilsFactory) {

        var _self = this;

        this.currentShop = $scope.currentShop;

        if(this.currentShop) {

            ShopsService.getShops().then(function(data) {
                
                _self.currentShop = UtilsFactory.objectFindByKey(data, 'name', $scope.currentShop.name);
                //_self.currentShop = data[0];

            });

        }
    }

    SidebarController.$inject = ['$scope', 'ShopsService', 'UtilsFactory']
    angular.module('webApp')
        .controller('SidebarController', SidebarController);
})();