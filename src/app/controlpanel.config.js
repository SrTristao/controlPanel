(function () {

    'use strict';

    angular
        .module('controlpanel')
        .config(configRouter)
        .config(ConfigLocalStorage)
        .run(["$rootScope", "$location", "$timeout", "CoreAuthService", run]);

    configRouter.$inject = ["$routeProvider", "$locationProvider"];
    
    function configRouter($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.otherwise({ redirectTo: "/login" });
    }

    ConfigLocalStorage.$inject = ['localStorageServiceProvider'];

    function ConfigLocalStorage(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('controlpanel');
    }

    function run($rootScope, $location, $timeout, CoreAuthService) {        
        $rootScope.$on("$routeChangeStart", ($event, next) => {                             
          if (!next.$$route || next.$$route.allowAnonymous || next.$$route.redirectTo) {              
            return true;
          }
    
          if (!CoreAuthService.isLoggedIn()) {            
            $location.path("/login");            
            return;
          }
          
          if (CoreAuthService.isLoggedIn() && next.$$route.originalPath == '/login') {
            $location.path('/home');
            return;
          }
          
          if (next.$$route.role && !CoreAuthService.hasRole(next.$$route.role)) {
            $location.path("/access-denied");
          }
        });
      }

})();