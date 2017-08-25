(function () {

    'use strict';

    angular
        .module('controlpanel')
        .config(ConfigProvider)
        .config(ConfigLocalStorage)
        .run(["$rootScope", "$state", "CoreAuthService", run]);

    ConfigProvider.$inject = ['$urlRouterProvider'];
    
        function ConfigProvider($urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');                          
        }

    ConfigLocalStorage.$inject = ['localStorageServiceProvider'];

    function ConfigLocalStorage(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('controlpanel');
    }

    function run($rootScope, $state, CoreAuthService) {              
        $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {            
            if (toState.error) {
                return ;
            }
            
            if (!CoreAuthService.isLoggedIn() && toState.url != '/login') {
                event.preventDefault();             
                $state.go("login");                        
            }

            if (CoreAuthService.isLoggedIn() && toState.url == '/login') {
                event.preventDefault(); 
                $state.go("home");            
            }          
            if (toState.role && !CoreAuthService.hasRole(toState.role)) {
                event.preventDefault(); 
                $state.go("access-denied");
            }          
        });
      }

})();