import { IOneDriveService } from './IOneDriveService';
import { OneDriveFile } from '../../models/OneDriveFile';
import { IHttpDataResponse } from '../../interfaces/IHttpDataResponse';
import { AdalSettings } from '../../adal/adalSettings';

export class OneDriveService implements IOneDriveService {

    static $inject = ['$http', 'adalSettings'];

    private files: OneDriveFile[];

    constructor(private $http: angular.IHttpService, private adalSettings: AdalSettings) {
        this.files = new Array<OneDriveFile>();
    }

    getFiles = () => {

        // TODO: inject through rootScope
        let endpoint = 'https://pnprocks-my.sharepoint.com/_api/v1.0/me/files/root/children';

        this.$http
            .get(endpoint)
            .then((result: IHttpDataResponse) => {
                let resultItems = result.data.value;

                for (let i = 0; resultItems.length; i++) {
                    let newFile = new OneDriveFile();
                    newFile.FileName = resultItems[i].name;
                    this.files.push(newFile);
                }
            },
            function (error) {
                console.log(error);
                alert(error);
            });

        return this.files;
    }
}
