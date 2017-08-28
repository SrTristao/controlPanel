(function () {
    
        'use strict';
    
        angular.module('controlpanel.settings')    
        .controller('changePasswordController', changePasswordController);   
    
        changePasswordController.$inject = ['CoreUserService','CoreAuthService', '$scope', 'DialogFactory', '$state'];
    
        function changePasswordController(CoreUserService, CoreAuthService, $scope, DialogFactory, $state) {
            //vars
            let vm = this;                                       
            vm.passwords = {password: '', newPassword: '', email: CoreAuthService.getTokenData().email};
            vm.repeatPassword = '';
            vm.changePassword = () => {                
                if (vm.passwords.newPassword !== vm.repeatPassword) {
                    DialogFactory.openDialog('Nova senha incorreta.');
                    return;
                }    
                if (vm.passwords.password === vm.passwords.newPassword) {
                    DialogFactory.openDialog('A nova senha não pode ser igual a atual.');
                    return;
                }            
                CoreUserService.changePassword(vm.passwords).then(function(data) {
                    if(data === 'server undefined') {
                        $scope.closeThisDialog();
                        $state.go('server-undefined');
                        return;
                    }
                    if(data.message) {
                        DialogFactory.openDialog(data.message);
                        return;
                    }
                    $scope.closeThisDialog(data);
                })
            }
        }
    
    })();