(function() {
    
    angular.module('controlpanel.home',[]);
    
    angular.module('controlpanel.home')
    .config(homeConfig);

    homeConfig.$inject = ['$routeProvider'];
    function homeConfig($routeProvider) {
        $routeProvider
        .when("/home", {   
            controller: 'homeController',        
            controllerAs: 'vm',
            templateUrl: 'modules/home/home.html',
            allowWithoutEvent: true            
        });
    }

})();
    