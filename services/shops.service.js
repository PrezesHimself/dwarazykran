angular.module('webApp')
    .service('ShopsService', ['$http', function ($http) {

        var _self = this;

            this.getShops = function() {
                    return $http({
                        method: 'GET',
                        url: 'mocks/shops.json'
                    }).then(function successCallback(response) {
                        console.log('got it!')
                        return response.data;
                    }, function errorCallback(response) {
                        // nothig here
                    });
            }

        this.getShopByName = function(name) {

            return _self.getShops().then(function(data) {
                return data;
            });
        }

    }]);