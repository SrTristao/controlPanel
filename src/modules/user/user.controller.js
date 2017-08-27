(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userController', userController);   

    userController.$inject = ['CoreUserService', 'ngDialog', 'DataFactory', 'DialogFactory', 'CoreAuthService'];

    function userController(CoreUserService, ngDialog, DataFactory, DialogFactory, CoreAuthService) {
        //vars
        let vm = this;
        vm.data = DataFactory;
        const userLogged = CoreAuthService.getTokenData();
        vm.listUsers = [];
        vm.filterUser = {name: '', role: ''}
        const init = () => {
            vm.data.menuItemActive = 'user';
            CoreUserService.getListUser(vm.filterUser).then(data => vm.listUsers = data);           
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
            
            newUser.closePromise.then(data => {
                if(!data.value) return;                                                        
                DialogFactory.openDialog(data.value.message);
                vm.listUsers.push(data.value.user);
            })
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

            editUser.closePromise.then(data => {
                if(!data.value) return;

                if(typeof data.value === 'string'){
                    DialogFactory.openDialog(data.value);                    
                    return;
                }
                DialogFactory.openDialog(data.value.message);
                let count = 0;
                vm.listUsers.find(userEdited => { count++; return userEdited._id === data.value.user._id});
                vm.listUsers.splice(count-1, 1, data.value.user);
            })
        }
        
        vm.deleteUser = (user) => {
            if (userLogged._id === user._id) {
                DialogFactory.openDialog('O usuário logado não pode deletar ele mesmo.');
                return;
            }
            DialogFactory.openDialogConfirm('Deseja deletar ' + user.name + ' ?').then(data => {
                if (data) {
                    CoreUserService.deleteUser(user._id).then((data) => {
                        DialogFactory.openDialog(data);
                        let count = 0;
                        vm.listUsers.find(userDeleted => { count++; return userDeleted._id === user._id});
                        vm.listUsers.splice(count-1, 1);
                    })
                }
            })           
        }

        vm.search = () => {            
            CoreUserService.getListUser(vm.filterUser).then(data => vm.listUsers = data);   
        }
    }

})();