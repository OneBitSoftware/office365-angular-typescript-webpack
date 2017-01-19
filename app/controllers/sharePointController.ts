import { ISharePointService } from '../services/sharePointService/ISharePointService';
import { SharePointList } from '../models/SharePointList';

export interface IGridScope extends ng.IScope {
    getLists: any;
}

export class SharePointController {

    static $inject = [
        '$scope', 'SharePointService'
    ];

    public lists: SharePointList[];

    constructor(private $scope: IGridScope, private SharePointService: ISharePointService) {
        this.lists = [];
        $scope.getLists = this.getLists;
    }

    getLists = () => {
        this.lists = this.SharePointService.getLists();
    }
}
