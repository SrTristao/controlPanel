(function () {

    'use strict';

    angular.module('controlpanel.home')    
    .controller('homeController', homeController);

    homeController.$inject = ['DataFactory', 'CoreItemService', 'CoreUserService'];

    function homeController(DataFactory, CoreItemService, CoreUserService) {
        //vars
        let vm = this;   
        vm.data = DataFactory;
        vm.statistics = [{description: 'Total de usuários', value: 2500}, {description: 'Total de items', value: 2500}]
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