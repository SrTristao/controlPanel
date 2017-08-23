(function() {
    'use strict';
    angular.module('controlpanel.user', [])
    .config(loginConfig);

    loginConfig.$inject = ['$routeProvider'];
    function loginConfig($routeProvider) {
        $routeProvider
        .when("/user", {   
            controller: 'userController',
            controllerAs: 'vm',        
            templateUrl: 'modules/user/user.html',
            allowWithoutEvent: true,
            role: 'admin'      
        });
    }
})();
    