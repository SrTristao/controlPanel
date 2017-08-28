(function () {
    
        'use strict';
    
        angular.module('controlpanel.settings')    
        .controller('settingsController', settingsController);
    
        settingsController.$inject = ['DataFactory', '$state', 'ngDialog', 'CoreAuthService', 'DialogFactory'];
    
        function settingsController(DataFactory, $state, ngDialog, CoreAuthService, DialogFactory) {
            //vars
            let vm = this;   
            vm.data = DataFactory;
            
            const init = () => {
                vm.data.menuItemActive = 'settings';
            }
            
            init();

            vm.changePassword = () => {
                const changePassword = ngDialog.open({
                    templateUrl: 'modules/settings/partials/changePassword/changePassword.html',                
                    className: 'ngdialog-theme-default',
                    closeByDocument: false,
                    closeByEscape: false,
                    showClose: false,
                    controller: 'changePasswordController',
                    controllerAs: 'vm'                
                });               
                
                changePassword.closePromise.then(data => {
                    if(!data.value) return;                                                        
                    DialogFactory.openDialog(data.value);                    
                })
            }

            vm.logout = () => {
                CoreAuthService.removeToken();
                $state.go('login');
            }
            
        }
    
    })();