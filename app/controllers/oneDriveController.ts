import { IOneDriveService } from '../services/oneDriveService/IOneDriveService';

export interface IGridScope extends ng.IScope {
}

export class OneDriveController {

    static $inject = [
        '$scope', 'OneDriveService'
    ];

    public files: any;

    constructor(private $scope: IGridScope, private OneDriveService: IOneDriveService) {
        this.files = [];
    }

    getFiles = () => {
        // let receivedFiles = this.OneDriveService.getFiles();

        this.files = [];

        let values = [{ name: 'J11111imi', gender: 'mal111e' }, { name: 'Pet11er', gender: 'male' }, { name: 'B11ob', gender: 'male' }];

        for (let entry of values) {
            this.files.push(entry.name);
        }
    }
}
