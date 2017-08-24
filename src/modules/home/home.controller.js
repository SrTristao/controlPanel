(function () {

    'use strict';

    angular.module('controlpanel.home')    
    .controller('homeController', homeController);

    homeController.$inject = ['DataFactory'];

    function homeController(DataFactory) {
        //vars
        let vm = this;   
        vm.data = DataFactory;
        
        const init = () => {
            vm.data.menuItemActive = 'home';
        }

        init();
        
        vm.compress = true;   
        vm.diminuiMenu = () => {
            vm.compress = !vm.compress;
            console.log('asdsa');
        }
    }

})();