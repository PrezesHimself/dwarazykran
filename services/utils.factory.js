angular.module('webApp')
    .service('UtilsFactory', function () {

        function Utils() {

            this.objectFindByKey = function (array, key, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key] === value) {
                        return array[i];
                    }
                }
                return null;
            }

        }

        return new Utils();

    });