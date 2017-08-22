(function () {

    'use strict';

    angular.module('controlpanel')    
    .controller('loginController', loginController)
    .component('login', {
        templateUrl: '../components/login/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
    });

    loginController.$inject = ['$http', 'CoreLoginService', 'CoreAuthService', 'CoreUserService'];

    function loginController($http, CoreLoginService, CoreAuthService, CoreUserService) {
        //vars
        let vm = this;
        let test = CoreAuthService.getTokenData();
        vm.login = {email: '', password: ''};

        //functions to view
        vm.entrar = () => {
            CoreLoginService.login(vm.login).then(function(data) {
                console.log(data);
            }, function(err) {
                console.log(err);
            })
        }
        
    }

})();