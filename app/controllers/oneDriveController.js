System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OneDriveController;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            OneDriveController = (function () {
                function OneDriveController($scope) {
                    this.$scope = $scope;
                }
                OneDriveController.$inject = [
                    '$scope'
                ];
                return OneDriveController;
            }());
            exports_1("OneDriveController", OneDriveController);
        }
    }
});
