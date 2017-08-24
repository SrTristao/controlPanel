(function () {

    'use strict';

    angular.module('controlpanel.item')    
    .controller('itemModelController', itemModelController);   

    itemModelController.$inject = ['$scope'];

    function itemModelController($scope) {
        //vars
        let vm = this;                

        const init = () => {
            vm.item = $scope.ngDialogData ? angular.copy($scope.ngDialogData.item) : {};            
        }

        init();
           
        vm.saveItem = () => {
            // if (vm.item._id) {
            //     CoreItemService.saveItem(vm.item);
            // } else {
            //     CoreItemService.editItem(vm.item);
            // }
        }       
    }

})();