(function() {
    'use strict';
    angular.module('controlpanel.error', [])
    .config(accessDeniedConfig);

    accessDeniedConfig.$inject = ['$stateProvider'];
    function accessDeniedConfig($stateProvider) {
        $stateProvider        
        .state('access-denied', {
            url: '/access-denied',
            views: {
                'menu': {
                    template: '<menu></menu>'
                },                
                'body': {
                    templateUrl: 'modules/error/access-denied/access-denied.html',
                    controller: 'accessDeniedController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
    