(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userController', userController);   

    userController.$inject = ['CoreUserService', 'ngDialog', 'DataFactory', '$http'];

    function userController(CoreUserService, ngDialog, DataFactory, $http) {
        //vars
        let vm = this;
        vm.data = DataFactory;
        
        const init = () => {
            vm.data.menuItemActive = 'user';
            CoreUserService.getListUser().then(data => vm.listUsers = data);           
        }

        init();
       
        vm.newUser = () => {
            const newUser = ngDialog.open({
                templateUrl: 'modules/user/userModal.html',                
                className: 'ngdialog-theme-default',
                closeByDocument: false,
                closeByEscape: false,
                showClose: false,
                controller: 'userModelController',
                controllerAs: 'vm'                
            });                          
        }

        vm.editUser = (user) => {
            const editUser = ngDialog.open({
                templateUrl: 'modules/user/userModal.html',                
                className: 'ngdialog-theme-default',
                closeByDocument: false,
                closeByEscape: false,
                showClose: false,
                controller: 'userModelController',
                controllerAs: 'vm',
                data: {
                    user: user
                }               
            }); 
        }

        vm.test = () => {
            CoreUserService.getUser('5998af774e57cb4774469985').then(data => console.log(data));
        }
    }

})();