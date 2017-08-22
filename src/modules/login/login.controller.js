(function () {

    'use strict';

    angular.module('controlpanel.login')    
    .controller('loginController', loginController);   

    loginController.$inject = ['$http', 'CoreLoginService', 'CoreAuthService', 'CoreUserService', '$location'];

    function loginController($http, CoreLoginService, CoreAuthService, CoreUserService, $location) {
        //vars
        let vm = this;
        let test = CoreAuthService.getTokenData();
        vm.login = {email: '', password: ''};

        //functions to view
        vm.entrar = () => {           
            CoreLoginService.login(vm.login).then(function(data) {
                $location.path('/home');
            }, function(err) {
                console.log(err);
            })
        }
        
    }

})();