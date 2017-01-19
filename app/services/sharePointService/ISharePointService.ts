import { SharePointList } from '../../models/SharePointList';

export interface ISharePointService {
    getLists(): SharePointList[];
}
