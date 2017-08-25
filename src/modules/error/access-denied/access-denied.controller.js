(function () {

    'use strict';

    angular.module('controlpanel.error')    
    .controller('accessDeniedController', accessDeniedController);   

    accessDeniedController.$inject = ['DataFactory'];

    function accessDeniedController(DataFactory) {
        //vars
        let vm = this;
        // vm.data = DataFactory;

        // const init = () => {
        //    // vm.data.menuItemActive = 'error';
        // }

        // init();
        
    }

})();