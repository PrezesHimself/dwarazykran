'use strict';

(function() {

    function ShopsController($scope) {
        this.name = 'ShopsController';

        this.shops = [
            {
                name : 'test'
            },
            {
                name : 'H&M'
            },
            {
                name : 'Alma'
            },
            {
                name : 'Zara'
            }

        ];

        var _self = this;



        $scope.$on('userInput', function(event, data) {
            _self.searchInput = data;
        });
    }

    ShopsController.$inject = ['$scope'];

    angular.module('webApp')
        .controller('ShopsController', ShopsController);
})();