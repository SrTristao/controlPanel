
(function () {

    'use strict';

    const staticRoot = 'http://127.0.0.1:3131/api/';
    angular.module('controlpanel')
        .constant('CONST', {
            
            getLivros: staticRoot,            
            getCupom: staticRoot.concat('getCupom')

        })
    
})();