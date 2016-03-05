'use strict';

(function() {

    function SidebarController($scope, ShopsService) {

        var _self = this;

        this.currentShop = $scope.currentShop;

        if(this.currentShop) {

            ShopsService.getShops().then(function(data) {
                function objectFindByKey(array, key, value) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i][key] === value) {
                            return array[i];
                        }
                    }
                    return null;
                }

                _self.currentShop = objectFindByKey(data, 'name', $scope.currentShop.name);
                //_self.currentShop = data[0];

            });

        }
    }

    SidebarController.$inject = ['$scope', 'ShopsService']
    angular.module('webApp')
        .controller('SidebarController', SidebarController);
})();