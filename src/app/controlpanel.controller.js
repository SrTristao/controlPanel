(function () {

    'use strict';

    angular.module('controlpanel')
        .controller('controlpanelController', marketController);

        marketController.$inject = ['DataFactory'];

        function marketController(DataFactory) {
            let vm = this;
            vm.data = DataFactory;
            vm.data.carrinho = [];   
            vm.data.livros = [];     
        }

})();
