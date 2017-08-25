(function () {

    'use strict';

    angular.module('controlpanel.error')    
    .controller('accessDeniedController', accessDeniedController);   

    accessDeniedController.$inject = ['$stateParams', 'DataFactory'];

    function accessDeniedController($stateParams, DataFactory) {
        //vars
        let vm = this;
        vm.data = DataFactory;

        const init = () => {
           vm.data.menuItemActive = $stateParams.route;
        }

        init();
        
    }

})();