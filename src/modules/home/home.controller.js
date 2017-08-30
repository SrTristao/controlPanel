(function () {

    'use strict';

    angular.module('controlpanel.home')    
    .controller('homeController', homeController);

    homeController.$inject = ['DataFactory', 'CoreItemService', 'CoreUserService', 'CoreAuthService'];

    function homeController(DataFactory, CoreItemService, CoreUserService, CoreAuthService) {
        //vars
        let vm = this;   
        vm.data = DataFactory; 
        vm.userLogged = CoreAuthService.getTokenData();      
        const init = () => {
            vm.data.menuItemActive = 'home';
            CoreItemService.lastInserts().then(data => {
                vm.listItems = data
                CoreItemService.totItems().then(count => vm.countItem = count.count);
            });
            CoreUserService.lastInserts().then(data => {
                vm.listUsers = data
                CoreUserService.totUsers().then(count => vm.countUser = count.count);
            });
        }

        init();                
                
        
    }

})();