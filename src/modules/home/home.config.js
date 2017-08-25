(function() {
    
    angular.module('controlpanel.home',[]);
    
    angular.module('controlpanel.home')
    .config(homeConfig);

    homeConfig.$inject = ['$stateProvider'];
    function homeConfig($stateProvider) {
        $stateProvider        
        .state('home', {
            url: '/home',
            views: {
                'menu': {
                    template: '<menu></menu>'
                },                
                'body': {
                    templateUrl: 'modules/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                }
            }
        });
    }

})();
    