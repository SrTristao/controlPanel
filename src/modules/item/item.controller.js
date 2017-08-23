(function () {

    'use strict';

    angular.module('controlpanel.item')    
    .controller('itemController', itemController);   

    itemController.$inject = ['CoreItemService', '$location'];

    function itemController(CoreItemService, $location) {
        //vars
        let vm = this;
        
    }

})();