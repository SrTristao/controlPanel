(function() {
    
    angular.module('controlpanel.login', [])
    .config(loginConfig);

    loginConfig.$inject = ['$routeProvider'];
    function loginConfig($routeProvider) {
        $routeProvider
        .when("/login", {   
            controller: 'loginController',
            controllerAs: 'vm',        
            templateUrl: 'components/login/login.html',
            allowWithoutEvent: true            
        });
    }

})();
    