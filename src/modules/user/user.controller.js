(function () {

    'use strict';

    angular.module('controlpanel.user')    
    .controller('userController', userController);   

    userController.$inject = ['CoreUserService', '$location'];

    function userController(CoreUserService, $location) {
        //vars
        let vm = this;
        
    }

})();