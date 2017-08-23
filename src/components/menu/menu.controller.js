(function() {
    'use strict';
    angular.module('controlpanel')
    .component('menu', {
        bindings: {
            compress: "="
        },
        templateUrl: 'components/menu/menu.html',
        controller: menuController,
        controllerAs: 'vm'
    })

    menuController.$inject = ['$scope'];

    function menuController($scope) {
        let vm = this;        
        $scope.$watch(function() {
            return vm.compress;
        }, function(newCom) {
            console.log(newCom);
        })
    }
})();