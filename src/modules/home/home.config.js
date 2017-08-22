(function() {
    
    angular.module('controlpanel.home',[])
    .config(homeConfig);

    homeConfig.$inject = ['$routeProvider'];
    function homeConfig($routeProvider) {
        $routeProvider
        .when("/home", {   
            controller: 'homeController',        
            templateUrl: 'components/home/home.html',
            allowWithoutEvent: true            
        });
    }

})();
    