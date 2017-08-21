(function () {

    'use strict';

    angular.module('controlpanel')    
    .controller('loginController', loginController)
    .component('login', {
        templateUrl: '../components/login/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
    });

    loginController.$inject = [];

    function loginController() {
        
    }

})();