angular.module('webApp')
    .service('ShopsService', ['$http', function ($http) {

        var _self = this;

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

        this.getShopByName = function(name) {

            return _self.getShops().then(function(data) {
                return data;
            });
        }

    }]);