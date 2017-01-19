import { OneDriveService } from './services/oneDriveService/oneDriveService';
import { MockOneDriveService } from './services/oneDriveService/mockOneDriveService';
import { SharePointService } from './services/sharePointService/SharePointService';
import { MockSharePointService } from './services/sharePointService/mockSharePointService';
import { ISharePointService } from './services/sharePointService/ISharePointService';
import { IOneDriveService } from './services/oneDriveService/IOneDriveService';
import { MainController } from './controllers/mainController';
import { OneDriveController } from './controllers/oneDriveController';
import { SharePointController } from './controllers/sharePointController';
import { TopMenu } from './directives/topMenu/topMenu';
import { RouteConfiguration } from './app.routes';

import 'angular';
import 'angular-route';
import '../styles/layout.less';

declare var _spBodyOnLoadFunctionNames: any;

module Demos {

    export class Office365App {
        constructor(useMockData: boolean) {

            let app = angular.module('Office365App', ['ngRoute']);

            if (useMockData) {
                console.log('Running Office 365 app with mock data...');
                app.service('SharePointService', MockSharePointService);
                app.service('OneDriveService', MockOneDriveService);
            } else {
                console.log('Running Office 365 app in with real data...');
                app.service('SharePointService', SharePointService);
                app.service('OneDriveService', OneDriveService);
            }

            // Controllers
            app.controller('MainController', MainController);
            app.controller('SharePointController', SharePointController);
            app.controller('OneDriveController', OneDriveController);

            // Directives
            app.directive('topMenu', TopMenu.Factory());

            // AngularJS Configuration
            app.config(['$routeProvider', RouteConfiguration.ConfigureRoutes]);
            app.config(['$locationProvider', RouteConfiguration.EnableHTML5Mode]);

            // load Angular app in s4-workspace element
            if ((window.location.href.indexOf('layouts') === -1) &&
                (window.location.href.indexOf('Forms') === -1)) {

                let s4 = document.getElementById('s4-workspace');
                s4.innerHTML = '<div id="o365-app"><top-menu></top-menu><ng-view></ng-view></div>';
                angular.bootstrap(s4, ['Office365App']);
            }
        }
    }

    // Load app on document ready
    angular.element(document).ready(function () {
        if (typeof _spBodyOnLoadFunctionNames === 'undefined') {
            // no SharePoint
            new Demos.Office365App(true);
        } else {
            // SharePoint
            new Demos.Office365App(false);
        }
    });
}
