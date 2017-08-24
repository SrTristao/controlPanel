(function() {
    'use strict';
    angular.module('controlpanel.item', [])
    .config(itemConfig);

    itemConfig.$inject = ['$stateProvider'];
    function itemConfig($stateProvider) {
        $stateProvider        
        .state('item', {
            url: '/item',
            views: {
                'menu': {
                    template: '<menu compress="vm.compress"></menu>'
                },                
                'body': {
                    templateUrl: 'modules/item/item.html',
                    controller: 'itemController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
    