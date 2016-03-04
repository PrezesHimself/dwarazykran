'use strict';

(function() {

    function ShopsController($scope, ShopsService) {

        var _self = this;

        this.name = 'ShopsController';
        this.loading = true;

        ShopsService.getShops().then(function(data) {
            _self.shops = data;
            _self.loading = false;
        });

        console.log(this.shops)




        $scope.$on('userInput', function(event, data) {
            _self.searchInput = data;
        });
    }

    ShopsController.$inject = ['$scope', 'ShopsService'];

    angular.module('webApp')
        .controller('ShopsController', ShopsController);
})();