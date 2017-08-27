(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userModelController', userModelController);   

    userModelController.$inject = ['CoreUserService','CoreAuthService', '$scope', 'DialogFactory', 'REGEX', '$state'];

    function userModelController(CoreUserService, CoreAuthService, $scope, DialogFactory, REGEX, $state) {
        //vars
        let vm = this;                
        const userLogged = CoreAuthService.getTokenData();
        vm.validateEmail = REGEX.validateEmail;
        const init = () => {
            vm.user = $scope.ngDialogData ? angular.copy($scope.ngDialogData.user) : {};            
        }

        init();        
        vm.saveUser = () => {
                                   
            if (!vm.user._id) {                
                CoreUserService.saveUser(vm.user).then(data => {
                    if(data === 'server undefined') {
                        $scope.closeThisDialog();
                        $state.go('server-undefined');
                        return;
                    }
                    if(typeof data === 'string') {
                        DialogFactory.openDialog(data);
                        return;
                    }
                    $scope.closeThisDialog(data);
                });
                return;
            } 

            if (vm.user._id == userLogged._id && vm.user.role != userLogged.role) {                   
                DialogFactory.openDialog('O usuário logado não pode mudar o nível de acesso do mesmo.');
                return;
            }            
            
            if (angular.equals($scope.ngDialogData.user, vm.user)) {
                $scope.closeThisDialog('Registro atualizado com sucesso.');
            }                

            CoreUserService.updateUser(vm.user).then(data => {
                if(data === 'server undefined') {
                    $scope.closeThisDialog();
                    $state.go('server-undefined');
                    return;
                }
                $scope.closeThisDialog({message: data, user:vm.user});
            });
        
        }       
    }

})();