'use strict';

(function() {

    function SearchbarController($location, $rootScope) {
        this.input = '';

        this.update = function() {

            if(this.input) {
                $location.path( "/shops" );
            } else {
                //$location.path( "/" );
            }

            $rootScope.$broadcast('userInput', this.input);
        }
    }

    SearchbarController.$inject = ['$location', '$rootScope'];

    angular.module('webApp')
        .controller('SearchbarController', SearchbarController);
})();