import { OneDriveFile} from '../../models/OneDriveFile';

export interface IOneDriveService {
    getFiles(): OneDriveFile[];
}
