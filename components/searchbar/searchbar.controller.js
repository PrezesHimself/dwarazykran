'use strict';

(function() {

    function SearchbarController($location, $rootScope) {
        this.input = '';

        this.update = function() {

            $rootScope.$broadcast('userInput', this.input);

            if(this.input) {
                $location.path( "/shops" );
            } else {
                $location.path( "/" );
            }
        }
    }

    SearchbarController.$inject = ['$location', '$rootScope'];

    angular.module('webApp')
        .controller('SearchbarController', SearchbarController);
})();