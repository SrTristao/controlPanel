(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userModelController', userModelController);   

    userModelController.$inject = ['CoreUserService', '$scope'];

    function userModelController(CoreUserService, $scope) {
        //vars
        let vm = this;                

        const init = () => {
            vm.user = $scope.ngDialogData ? angular.copy($scope.ngDialogData.user) : {};            
        }

        init();
           
        vm.saveUser = () => {
            if (vm.user._id) {
                CoreUserService.saveUser(vm.user);
            } else {
                CoreUserService.editUser(vm.user);
            }
        }       
    }

})();