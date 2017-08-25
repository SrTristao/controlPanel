(function() {
    'use strict';
    angular.module('controlpanel.error')
    .config(serverUndefinedConfig);

    serverUndefinedConfig.$inject = ['$stateProvider'];
    function serverUndefinedConfig($stateProvider) {
        $stateProvider        
        .state('server-undefined', {
            url: '/server-undefined',
            views: {
                'menu': {
                    template: '<menu"></menu>'
                },                
                'body': {
                    templateUrl: 'modules/error/server-undefined/server-undefined.html',
                    controller: 'serverUndefinedController',
                    controllerAs: 'vm'
                }
            },
            error: true
        });
    }
})();
    