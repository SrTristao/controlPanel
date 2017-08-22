(function () {

    'use strict';

    angular.module('controlpanel', [  
        'controlpanel.core',
        'controlpanel.login',
        'controlpanel.home',  
        'ngRoute',                                
        'ui.router',
        'ngDialog',
        'LocalStorageModule'      
    ]);
    
})();