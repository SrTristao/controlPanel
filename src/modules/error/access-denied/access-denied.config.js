(function() {
    'use strict';
    angular.module('controlpanel.accessDenied', [])
    .config(accessDeniedConfig);

    accessDeniedConfig.$inject = ['$routeProvider'];
    function accessDeniedConfig($routeProvider) {
        $routeProvider
        .when("/access-denied", {   
            controller: 'accessDeniedController',
            controllerAs: 'vm',        
            templateUrl: 'modules/error/access-denied/access-denied.html',
            allowWithoutEvent: true                 
        });
    }
})();
    