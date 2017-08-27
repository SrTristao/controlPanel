(function () {

    'use strict';

    angular.module('controlpanel.item')    
    .controller('itemModelController', itemModelController);   

    itemModelController.$inject = ['CoreItemService', 'CoreAuthService', '$scope'];

    function itemModelController(CoreItemService, CoreAuthService, $scope) {
        //vars
        let vm = this;                
        const userLogged = CoreAuthService.getTokenData();
        const init = () => {
            vm.item = $scope.ngDialogData ? angular.copy($scope.ngDialogData.item) : {};            
        }

        init();                   
        
        vm.saveItem = () => {
                                   
            if (!vm.item._id) {             
                vm.item.user = {_id: userLogged._id, name: userLogged.name}   
                CoreItemService.saveItem(vm.item).then(data => {
                    if(data === 'server undefined') {
                        $scope.closeThisDialog();
                        $state.go('server-undefined');
                        return;
                    }
                    $scope.closeThisDialog(data);
                });
                return;
            }                        
            
            if (angular.equals($scope.ngDialogData.item, vm.item)) {
                $scope.closeThisDialog('Registro atualizado com sucesso.');
            }                

            CoreItemService.updateItem(vm.item).then(data => {
                if(data === 'server undefined') {
                    $scope.closeThisDialog();
                    $state.go('server-undefined');
                    return;
                }
                $scope.closeThisDialog({message: data, item:vm.item});
            });
        
        }           
    }

})();