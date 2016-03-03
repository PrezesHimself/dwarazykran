'use strict';

(function() {

    function HomeController() {
        this.name = 'HomeController';
        this.test = 2;
    }

    angular.module('webApp')
        .controller('HomeController', HomeController);
})();