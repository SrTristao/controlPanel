(function () {

    'use strict';

    angular.module('controlpanel.item')    
    .controller('itemController', itemController);   

    itemController.$inject = ['DataFactory', 'ngDialog'];

    function itemController(DataFactory, ngDialog) {
        //vars
        let vm = this;
        vm.data = DataFactory;

        const init = () => {
            vm.data.menuItemActive = 'item';
        }

        init();

        vm.listItens = [{_id: 123213312, name: 'TESTE', status: 'Concluido', requester: 'User 1'},
                        {_id: 123213311, name: 'TESTE 1', status: 'Pendente', requester: 'User 1'},
                        {_id: 123213313, name: 'TESTE 2', status: 'Concluido', requester: 'User 1'},
                        {_id: 123213314, name: 'TESTE 3', status: 'Pendente', requester: 'User 1'},
                        {_id: 123213315, name: 'TESTE 4', status: 'Concluido', requester: 'User 1'},
                        {_id: 123213316, name: 'TESTE 5', status: 'Pendente', requester: 'User 1'},
                        {_id: 123213317, name: 'TESTE 2', status: 'Concluido', requester: 'User 1'},
                        {_id: 123213318, name: 'TESTE 3', status: 'Pendente', requester: 'User 1'},
                        {_id: 123213319, name: 'TESTE 4', status: 'Concluido', requester: 'User 1'},
                        {_id: 1232133111, name: 'TESTE 5', status: 'Pendente', requester: 'User 1'}];
        
        vm.newItem = () => {
            const newItem = ngDialog.open({
                templateUrl: 'modules/item/itemModal.html',                
                className: 'ngdialog-theme-default',
                closeByDocument: false,
                closeByEscape: false,
                showClose: false,
                controller: 'itemModelController',
                controllerAs: 'vm'                
            });                          
        }

        vm.editItem = (item) => {
            const editItem = ngDialog.open({
                templateUrl: 'modules/item/itemModal.html',                
                className: 'ngdialog-theme-default',
                closeByDocument: false,
                closeByEscape: false,
                showClose: false,
                controller: 'itemModelController',
                controllerAs: 'vm',
                data: {
                    item: item
                }               
            }); 
        }
    }

})();