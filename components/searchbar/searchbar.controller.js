'use strict';

(function() {

    function SearchbarController($rootScope, $state, ShopsService) {
        var _self = this;

        this.input = '';

        ShopsService.getShops().then(function(data) {
            _self.shops = data;
            _self.loading = false;
        });


        this.update = function() {

            if(this.input) {
                $state.go('app.shops')
            } else {
                //$location.path( "/" );
            }

            $rootScope.$broadcast('userInput', this.input);
        }

        this.setInput = function(input) {
            _self.input = input;
            _self.update();
        }
    }

    SearchbarController.$inject = ['$rootScope', '$state', 'ShopsService'];

    angular.module('webApp')
        .controller('SearchbarController', SearchbarController);
})();