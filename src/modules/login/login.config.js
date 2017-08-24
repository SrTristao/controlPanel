(function() {
    'use strict';
    angular.module('controlpanel.login', [])
    .config(loginConfig);

    loginConfig.$inject = ['$stateProvider'];
    function loginConfig($stateProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            views: {           
                'body': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                }                        
            }            
        })
    }
})();
    