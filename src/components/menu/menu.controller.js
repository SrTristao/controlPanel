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

    menuController.$inject = ['$scope', '$window', '$state', 'DataFactory'];

    function menuController($scope, $window, $state, DataFactory) {
        let vm = this;     
        vm.compress = false;
        vm.data = DataFactory;   
        
        vm.menuCompress = () => {
            vm.compress = !vm.compress;
        }

        vm.changeScreen = (screen) => $state.go(screen);                    

        angular.element($window).bind('resize', function(){
            console.log($window.innerWidth);
           if ($window.innerWidth <= 767 && vm.compress) {               
               vm.compress = false;
               $scope.$apply();
           }
       });     
    }
})();