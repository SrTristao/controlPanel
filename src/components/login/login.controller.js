(function () {

    'use strict';

    angular.module('controlpanel')    
    .controller('loginController', loginController)
    .component('login', {
        templateUrl: '../components/login/login.html',
        controller: 'loginController',
        controllerAs: 'vm'
    });

    loginController.$inject = ['$http', 'CoreLoginService'];

    function loginController($http, CoreLoginService) {
        //vars
        let vm = this;
        vm.login = {email: '', password: ''};

        //functions to view

        vm.entrar = _entrar;

        function _entrar() {
            CoreLoginService.login(vm.login).then(function(data) {
                console.log(data);
            }, function(err) {
                console.log(err);
            })
        }
        
    }

})();