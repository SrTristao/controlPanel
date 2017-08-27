(function () {

    'use strict';

    angular.module('controlpanel.item')    
    .controller('itemController', itemController);   

    itemController.$inject = ['DataFactory', 'ngDialog', 'CoreItemService', '$scope', 'DialogFactory'];

    function itemController(DataFactory, ngDialog, CoreItemService, $scope, DialogFactory) {
        //vars
        let vm = this;
        vm.data = DataFactory;
        vm.filterItem = {name: '', requester: '', status: ''};

        const init = () => {
            vm.data.menuItemActive = 'item';
            CoreItemService.getListItem(vm.filterItem).then(data => vm.listItens = data);  
        }

        init();
        
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
            
            newItem.closePromise.then(data => {
                if(!data.value) return;
                DialogFactory.openDialog(data.value.message);
                vm.listItens.push(data.value.item);
            })
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

            editItem.closePromise.then(data => {
                if(!data.value) return;

                if(typeof data.value === 'string'){
                    DialogFactory.openDialog(data.value);                    
                    return;
                }
                DialogFactory.openDialog(data.value.message);
                let count = 0;
                vm.listItens.find(itemEdited => { count++; return itemEdited._id === data.value.item._id});
                vm.listItens.splice(count-1, 1, data.value.item);
            })
        }

        vm.deleteItem = (item) => {            
            DialogFactory.openDialogConfirm('Deseja deletar ' + item.name + ' ?').then(data => {
                if (data) {
                    CoreItemService.deleteItem(item._id).then((data) => {
                        DialogFactory.openDialog(data);
                        let count = 0;
                        vm.listItens.find(itemDeleted => { count++; return itemDeleted._id === item._id});
                        vm.listItens.splice(count-1, 1);
                    })
                }
            })           
        }

        vm.search = () => {
            CoreItemService.getListItem(vm.filterItem).then(data => vm.listItens = data);  
        }
    }

})();