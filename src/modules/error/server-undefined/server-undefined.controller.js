(function () {

    'use strict';

    angular.module('controlpanel.error')    
    .controller('serverUndefinedController', serverUndefinedController);   

    serverUndefinedController.$inject = ['CoreStatusService', '$state'];

    function serverUndefinedController(CoreStatusService, $state) {
        //vars
        let vm = this;
        const verify = setInterval(() => {
            CoreStatusService.statusServer().then(data => {                
                if (data === 'Server OK') {
                    clearInterval(verify);
                    $state.go('home');
                }
            })
        }, 5000);
    }

})();