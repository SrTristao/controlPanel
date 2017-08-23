(function () {

    'use strict';

    angular.module('controlpanel', [ 
        'ngRoute',                                
        'ngDialog',
        'LocalStorageModule',
        'controlpanel.core',
        'controlpanel.home',
        'controlpanel.login',
        'controlpanel.user',
        'controlpanel.accessDenied'
    ]);
    
})();