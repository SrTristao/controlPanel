(function() {
    'use strict';
    angular.module('controlpanel.settings', [])
    .config(settingsConfig);

    settingsConfig.$inject = ['$stateProvider'];
    function settingsConfig($stateProvider) {
        $stateProvider        
        .state('settings', {
            url: '/settings',
            views: {
                'menu': {
                    template: '<menu></menu>'
                },                
                'body': {
                    templateUrl: 'modules/settings/settings.html',
                    controller: 'settingsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
    