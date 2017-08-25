(function () {

    'use strict';

    angular
    .module('controlpanel')
    .factory('DialogFactory', DialogFactory);

    DialogFactory.$inject = ['ngDialog'];

    function DialogFactory(ngDialog) {

    const openDialog = (mensagem) => ngDialog.open({
        template: mensagem,
        plain: true,
        className: 'ngdialog-theme-default',
        closeByDocument: true,
        closeByEscape: true,
        showClose: false
    });

    return {
        openDialog: openDialog
    };

}

})();
    