import 'angular';

let topMenuTemplate = require('!ngtemplate?relativeTo=/app/directives/topMenu!html-loader!./top-menu.html');

export class TopMenu implements ng.IDirective {
    public templateUrl = topMenuTemplate;
    public replace = true;
    public scope = {};

    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    static Factory(): ng.IDirectiveFactory {
        let directive = () => {
            return new TopMenu();
        };
        directive.$inject = [];

        return directive;
    }

    constructor() {
        TopMenu.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        };
    }


}
