(function() {
    'use strict';
    angular.module('controlpanel.user', [])
    .config(userConfig);

    userConfig.$inject = ['$stateProvider'];
    function userConfig($stateProvider) {
        $stateProvider        
        .state('user', {
            url: '/user',
            views: {
                'menu': {
                    template: '<menu></menu>'
                },                
                'body': {
                    templateUrl: 'modules/user/user.html',
                    controller: 'userController',
                    controllerAs: 'vm'
                }
            },
            role: 'admin'
        });
    }
})();
    