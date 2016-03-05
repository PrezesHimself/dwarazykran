angular.module('webApp')
    .service('ShopsService', ['$http', function ($http) {

        this.getShops = function() {

            return $http({
                method: 'GET',
                url: 'http://localhost:1337/pasazlodz.techcave.pl/api/shop/list/'
            }).then(function successCallback(response) {
                console.log('got it!')
                return response.data;
            }, function errorCallback(response) {
                console.error('noting here')
            });
        }

    }]);