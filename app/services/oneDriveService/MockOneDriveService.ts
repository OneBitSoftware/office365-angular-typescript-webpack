import { IOneDriveService } from './IOneDriveService';
import { OneDriveFile } from '../../models/OneDriveFile';

export class MockOneDriveService implements IOneDriveService {
    getFiles = () => {
        let files = new Array<OneDriveFile>();

        for (let n = 1; n <= 10; n++) {
            let file = new OneDriveFile();
            file.FileName = 'Mock filename ' + n;
            files.push(file);
        }

        return files;
    }
}
