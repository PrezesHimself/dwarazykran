'use strict';

(function() {

    function HomeController() {
        this.name = 'HomeController';
    }

    angular.module('webApp')
        .controller('HomeController', HomeController);
})();