'use strict';

(function() {

    function ShopsController($scope, ShopsService) {

        this.name = 'ShopsController';

        this.shops = ShopsService.getShops();

        var _self = this;



        $scope.$on('userInput', function(event, data) {
            _self.searchInput = data;
        });
    }

    ShopsController.$inject = ['$scope', 'ShopsService'];

    angular.module('webApp')
        .controller('ShopsController', ShopsController);
})();