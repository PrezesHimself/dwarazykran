'use strict';

(function() {

    function MapController($stateParams, $scope) {
        var _self = this;

        this.name = 'MapController';
        this.currentShopName = '';

        this.showShopComponent = function() {
            var shop = {
                name: '',
                description: 'Worem gipsu dolor costam costam jakis opis kurde przeciez bla bnla',
                category: 'kategoria',
                id: ''
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