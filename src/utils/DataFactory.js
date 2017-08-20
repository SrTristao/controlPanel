(function () {

    'use strict';

    angular
        .module('controlpanel')
        .factory('DataFactory', DataFactory);

    DataFactory.$inject = [];

    function DataFactory() {

        var data = {};

        return data;

    }

})();
