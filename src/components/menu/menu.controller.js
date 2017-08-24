(function() {
    'use strict';
    angular.module('controlpanel')
    .component('menu', {
        bindings: {            
        },
        templateUrl: 'components/menu/menu.html',
        controller: menuController,
        controllerAs: 'vm'
    })

    menuController.$inject = ['$scope'];

    function menuController($scope) {
        let vm = this;     
        vm.compress = true;   
        vm.menuCompress = () => {
            vm.compress = !vm.compress;
        }
    }
})();