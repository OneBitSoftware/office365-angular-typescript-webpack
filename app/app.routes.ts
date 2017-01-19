import 'angular';
import { OneDriveController } from './controllers/oneDriveController';
import { SharePointController } from './controllers/sharePointController';
import { MainController } from './controllers/mainController';

// funky syntax to load html template -> replace only ./views/home/home.html
let homeTemplate = require('!ngtemplate?relativeTo=/app/!html-loader!./views/home/home.html');
let fileTemplate = require('!ngtemplate?relativeTo=/app/!html-loader!./views/files/files.html');
let sharePointTemplate = require('!ngtemplate?relativeTo=/app/!html-loader!./views/sharePoint/sharePoint.html');

export class RouteConfiguration {
    static $inject = ['$routeProvider', '$locationProvider'];

    static ConfigureRoutes(
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider) {

        $routeProvider.
            when('/', {
                templateUrl: homeTemplate,
                controller: MainController,
                controllerAs: 'ctrl'
            }).
            when('/sharepoint', {
                templateUrl: sharePointTemplate,
                controller: SharePointController,
                controllerAs: 'ctrl'
            }).
            when('/files', {
                templateUrl: fileTemplate,
                controller: OneDriveController,
                controllerAs: 'ctrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }

    static EnableHTML5Mode($locationProvider: ng.ILocationProvider) {
        $locationProvider.html5Mode(false);
    }
}
