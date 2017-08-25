(function () {

    'use strict';

    angular.module('controlpanel.login')    
    .controller('loginController', loginController);   

    loginController.$inject = ['$http', 'CoreLoginService', 'CoreAuthService', 'CoreUserService', '$state', 'REGEX'];

    function loginController($http, CoreLoginService, CoreAuthService, CoreUserService, $state, REGEX) {
        //vars
        let vm = this;        
        vm.login = {email: '', password: ''};
        vm.msgError = '';
        vm.validateEmail = REGEX.validateEmail;

        //functions to view
        vm.signIn = () => {           
            CoreLoginService.login(vm.login).then((data) => {
                if(data === 'server undefined') {
                    $state.go('server-undefined');
                    return;
                }

                if(data.message) {
                    vm.msgError = data.message;
                    return;
                }
                $state.go('home');
            }).catch((error) => {
                console.log(error);
            });
        }
        
    }

})();