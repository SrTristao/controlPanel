(function() {
    'use strict';
    angular.module('controlpanel.accessDenied', [])
    .config(accessDeniedConfig);

    accessDeniedConfig.$inject = ['$stateProvider'];
    function accessDeniedConfig($stateProvider) {
        $stateProvider        
        .state('access-denied', {
            url: '/access-denied',
            views: {
                'menu': {
                    template: '<menu compress="vm.compress"></menu>'
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
    