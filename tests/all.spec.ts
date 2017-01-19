import { IMessageScope } from '../app/controllers/mainController';
import { SharePointService } from '../app/services/sharePointService/sharePointService';
import { MockSharePointService } from '../app/services/sharePointService/mockSharePointService';
import { MainController } from '../app/controllers/mainController';

import { SharePointList } from '../app/models/SharePointList';

import 'angular';
import 'angular-mocks';

describe('SharePointService', () => {
    var subject: SharePointService;

    beforeEach(function () {
        //subject = new SharePointService();
    });

    it('should get data', () => {
        var result: SharePointList[] = subject.getLists();
        if (result.length < 1 ) {
            throw new Error('Expected items but got nothing.');
        }
    });
});

describe('MainController', () => {

    let subject: MainController;
    let messageScope: any;
    let scope;

    beforeEach(angular.mock.module('Office365App'));

    beforeEach(angular.mock.inject(
        function ($rootScope: ng.IRootScopeService) {
        scope = <any>$rootScope.$new();
    }));

    beforeEach(function () {
        var message = 'test';
        messageScope = {};
        subject = new MainController(messageScope, new MockSharePointService());
    });

    it('should get data', () => {
        var result: void = subject.SetMessage();
        if (subject.message !== 'Mock data') {
            throw new Error('Expected Mock data but was ' + result);
        }
    });
});