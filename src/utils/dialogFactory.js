(function () {

    'use strict';

    angular
    .module('controlpanel')
    .factory('DialogFactory', DialogFactory);

    DialogFactory.$inject = ['ngDialog', '$q'];

    function DialogFactory(ngDialog, $q) {

    const openDialog = (mensagem) => ngDialog.open({
        template: mensagem,
        plain: true,
        className: 'ngdialog-theme-default',
        closeByDocument: true,
        closeByEscape: true,
        showClose: false
    });

    const openDialogConfirm = (mensagem) => {       
        var defer = $q.defer();
        ngDialog.openConfirm({
            template:"<div class='msg-dialog'> <div><span> " + mensagem +
            "</span></div> <div class='msg-buttons'> <button class='btn btn-red btn-md' ng-click='closeThisDialog(0)'> Cancelar </button> <button class='btn btn-green btn-md' ng-click='confirm(1)'> OK </button> </div></div>",
            plain: true,
            className: 'ngdialog-theme-default',
            closeByDocument: false,
            closeByEscape: false,
            showClose: false
        }).then(function (value) {
           defer.resolve(value);
        }, function (value) {
           defer.resolve(value);
        });
        
        return defer.promise;
    }

    return {
        openDialog: openDialog,
        openDialogConfirm: openDialogConfirm
    };

}

})();
    