(function () {

    'use strict';
    angular.module('controlpanel')
        .service('HTTPSERVICE', HTTPSERVICE);

        HTTPSERVICE.$inject = ['$http', '$q'];

        function HTTPSERVICE($http, $q) {        
            let vm = this;        

            vm.get = (url) => {
                return  $http.get(url).then(function(data) {
                    return data.data;
                }, function(err) {
                    return err;
                })
            }

            vm.post = (url, params) => {                
                return $http.post(url, params).then(function(data) {
                    return data.data;
                }, function(err) {
                    return err;
                });
            }

            vm.delete = (url) => {                
                return $http.delete(url).then(function(data) {
                    return data.data;
                }, function(err) {
                    return err;
                });                
            }

            vm.put = (url) => {                
                return $http.delete(url).then(function(data) {
                    return data.data;
                }, function(err) {
                    return err;
                });                
            }
        }

})();