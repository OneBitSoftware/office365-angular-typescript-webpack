System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SharePointController;
    return {
        setters:[],
        execute: function() {
            SharePointController = (function () {
                function SharePointController($scope, SharePoint) {
                    this.$scope = $scope;
                    this.SharePoint = SharePoint;
                    this.getLists = function () {
                    };
                    this.lists = [];
                }
                SharePointController.$inject = [
                    '$scope', 'SharePointService'
                ];
                return SharePointController;
            }());
            exports_1("SharePointController", SharePointController);
        }
    }
});
