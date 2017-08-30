(function () {

    'use strict';

    angular.module('controlpanel', [         
        'ui.router',  
        'ui.router.state.events',                            
        'ngDialog',
        'LocalStorageModule',
        'controlpanel.core',
        'controlpanel.home',
        'controlpanel.login',
        'controlpanel.user',
        'controlpanel.item',
        'controlpanel.error',
        'controlpanel.settings'
    ]);
    
})();