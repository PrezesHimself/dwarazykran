'use strict';

(function() {

    function SearchbarController($rootScope, $state) {
        this.input = '';
        console.log($state);
        this.update = function() {

            if(this.input) {
                $state.go('app.shops')
            } else {
                //$location.path( "/" );
            }

            $rootScope.$broadcast('userInput', this.input);
        }
    }

    SearchbarController.$inject = ['$rootScope', '$state'];

    angular.module('webApp')
        .controller('SearchbarController', SearchbarController);
})();