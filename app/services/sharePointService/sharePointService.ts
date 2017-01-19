import { ISharePointService } from './ISharePointService';
import { IHttpDataResponse } from '../../interfaces/IHttpDataResponse';
import { SharePointList } from '../../models/SharePointList';

export class SharePointService implements ISharePointService {

    static $inject = ['$http'];

    private lists: SharePointList[];

    constructor(private $http: ng.IHttpService) {
        this.lists = new Array<SharePointList>();
    }

    public getLists(): SharePointList[] {
        let endpoint = 'https://pnprocks.sharepoint.com/sites/publishing/_api/web/lists';

        this.$http
            .get(endpoint)
            .then((result: IHttpDataResponse) => {
            let resultItems = result.data.value;

            for (var i in resultItems) {
                if (i !== 'undefined') {
                    let newList = new SharePointList();
                    newList.title = resultItems[i].Title;
                    newList.itemCount = resultItems[i].ItemCount;
                    this.lists.push(newList);
                }
            }

        }, function (error) {
            console.log(error);
            alert(error);
        });

        return this.lists;
    }
}
