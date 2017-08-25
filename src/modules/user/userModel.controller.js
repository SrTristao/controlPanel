(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userModelController', userModelController);   

    userModelController.$inject = ['CoreUserService','CoreAuthService', '$scope', 'DialogFactory', 'REGEX'];

    function userModelController(CoreUserService, CoreAuthService, $scope, DialogFactory, REGEX) {
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
                CoreUserService.saveUser(vm.user);
                return;
            } 

            if (vm.user._id == userLogged._id && vm.user.role != userLogged.role) {                   
                DialogFactory.openDialog('O usuário logado não pode mudar o nível de acesso do mesmo.');
                return;
            }            

            CoreUserService.updateUser(vm.user).then(data => {
                console.log(data);
            });
        
        }       
    }

})();