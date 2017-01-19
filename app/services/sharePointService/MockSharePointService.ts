import { ISharePointService } from './ISharePointService';
import { SharePointList } from '../../models/SharePointList';

export class MockSharePointService implements ISharePointService {
    constructor() {
    }

    public getLists(): SharePointList[] {
        let lists = new Array<SharePointList>();

        for (let n = 1; n <= 10; n++) {
            let list = new SharePointList();
            list.title = 'Mock list ' + n;
            list.itemCount = '666';
            lists.push(list);
        }

        return lists;
    }
}
