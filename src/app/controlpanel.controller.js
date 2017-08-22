(function () {

    'use strict';

    angular.module('controlpanel')
        .controller('controlpanelController', controlpanelController);

        controlpanelController.$inject = ['DataFactory'];

        function controlpanelController(DataFactory) {
            let vm = this;              
        }

})();
