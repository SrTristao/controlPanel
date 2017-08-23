(function () {

    'use strict';

    angular.module('controlpanel.home')    
    .controller('homeController', homeController);

    homeController.$inject = [];

    function homeController() {
        //vars
        let vm = this;   
        vm.compress = true;   
        vm.diminuiMenu = () => {
            vm.compress = !vm.compress;
            console.log('asdsa');
        }
    }

})();