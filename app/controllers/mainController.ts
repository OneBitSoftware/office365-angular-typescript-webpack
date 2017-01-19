import { ISharePointService } from '../services/sharePointService/ISharePointService';

// Extends the passed Scope between controllers and views
export interface IMessageScope extends ng.IScope {
    Message: string;
}

export class MainController {

    static $inject = [
        '$scope', 'SharePointService'
    ];

    public message: string;

    constructor(private $scope: IMessageScope, private sharePointService: ISharePointService) {
        this.SetMessage();
    }

    public SetMessage(): void {
        this.$scope.Message = 'Hello';
        this.message = this.$scope.Message;
    }
}
