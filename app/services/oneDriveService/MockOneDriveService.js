System.register(['../../models/OneDriveFile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OneDriveFile_1;
    var MockOneDriveService;
    return {
        setters:[
            function (OneDriveFile_1_1) {
                OneDriveFile_1 = OneDriveFile_1_1;
            }],
        execute: function() {
            MockOneDriveService = (function () {
                function MockOneDriveService() {
                    this.getFiles = function () {
                        var files = new Array();
                        for (var n = 1; n <= 10; n++) {
                            var file = new OneDriveFile_1.OneDriveFile();
                            file.FileName = 'Mock filename ' + n;
                            files.push(file);
                        }
                        return files;
                    };
                }
                return MockOneDriveService;
            }());
            exports_1("MockOneDriveService", MockOneDriveService);
        }
    }
});
