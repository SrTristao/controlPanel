(function () {

    'use strict';

    angular
        .module('controlpanel')
        .config(ConfigProvider)
        .config(ConfigLocalStorage)
        .run(function () {    
        });

    ConfigProvider.$inject = ['$urlRouterProvider', '$stateProvider'];

    function ConfigProvider($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/login', {
                url: '/login',  
                template: '<login></login>'          
            });         
    }

    ConfigLocalStorage.$inject = ['localStorageServiceProvider'];

    function ConfigLocalStorage(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('controlpanel');
    }

})();