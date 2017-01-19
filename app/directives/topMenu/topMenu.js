System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TopMenu;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            TopMenu = (function () {
                function TopMenu() {
                    this.templateUrl = './top-menu.html';
                    this.replace = true;
                    this.scope = {};
                    this.link = function () {
                    };
                }
                TopMenu.factory = function () {
                    var directive = function () {
                        return new TopMenu();
                    };
                    directive.$inject = [];
                    return directive;
                };
                return TopMenu;
            }());
            exports_1("TopMenu", TopMenu);
        }
    }
});
