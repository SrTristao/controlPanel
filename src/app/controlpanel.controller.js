(function () {

    'use strict';

    angular.module('controlpanel')
        .controller('controlpanelController', controlpanelController);

        controlpanelController.$inject = ['CoreAuthService'];

        function controlpanelController(CoreAuthService) {
            let vm = this;   
            vm.isLogged = CoreAuthService.isLoggedIn;
        }

})();
