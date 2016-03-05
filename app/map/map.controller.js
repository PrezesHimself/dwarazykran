'use strict';

(function() {

    function MapController($stateParams, $scope) {
        var _self = this;

        this.name = 'MapController';
        this.currentShopName = '';

        this.showShopComponent = function() {
            var shop = {
            }

            shop.name = $stateParams.shopName;

            this.currentShop = shop;
            this.currentShopName = $stateParams.shopName;
        }

        if($stateParams.shopName) {
            _self.showShopComponent();
        }
    }

    MapController.$inject = ['$stateParams', '$scope']
    angular.module('webApp')
        .controller('MapController', MapController);
})();