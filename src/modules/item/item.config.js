(function() {
    'use strict';
    angular.module('controlpanel.item', [])
    .config(loginConfig);

    loginConfig.$inject = ['$routeProvider'];
    function loginConfig($routeProvider) {
        $routeProvider
        .when("/item", {   
            controller: 'itemController',
            controllerAs: 'vm',        
            templateUrl: 'modules/item/item.html',
            allowWithoutEvent: true,
            role: ['admin', 'user']      
        });
    }
})();
    