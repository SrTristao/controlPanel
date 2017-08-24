(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userController', userController);   

    userController.$inject = ['CoreUserService', 'ngDialog', 'DataFactory'];

    function userController(CoreUserService, ngDialog, DataFactory) {
        //vars
        let vm = this;
        vm.data = DataFactory;
        
        const init = () => {
            vm.data.menuItemActive = 'user';
        }

        init();
        vm.listUsers = [{_id: 123213312, name: 'João Alexandre Tristão de Almeida', role: 'admin', createdAt: '01/01/2017'},
                        {_id: 123213311, name: 'João 1', role: 'user', createdAt: '01/01/2017'},
                        {_id: 123213313, name: 'João 2', role: 'admin', createdAt: '01/01/2017'},
                        {_id: 123213314, name: 'João 3', role: 'user', createdAt: '01/01/2017'},
                        {_id: 123213315, name: 'João 4', role: 'admin', createdAt: '01/01/2017'},
                        {_id: 123213316, name: 'João 5', role: 'user', createdAt: '01/01/2017'},
                        {_id: 123213317, name: 'João 2', role: 'admin', createdAt: '01/01/2017'},
                        {_id: 123213318, name: 'João 3', role: 'user', createdAt: '01/01/2017'},
                        {_id: 123213319, name: 'João 4', role: 'admin', createdAt: '01/01/2017'},
                        {_id: 1232133111, name: 'João 5', role: 'user', createdAt: '01/01/2017'}];
        
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
    }

})();