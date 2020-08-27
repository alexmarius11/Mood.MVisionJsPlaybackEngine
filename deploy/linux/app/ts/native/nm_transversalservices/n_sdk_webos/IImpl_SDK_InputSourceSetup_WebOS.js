"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cordova/cordova.webos");
require("./cordova/storage");
require("./cordova/inputSource");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_InputSourceSetup_WebOS = (function () {
        function IImpl_SDK_InputSourceSetup_WebOS(owner) {
            this._owner = owner;
        }
        IImpl_SDK_InputSourceSetup_WebOS.prototype.readTextFile = function (fileFullName, error, context, callback) {
            var owner = this;
            var successCb = function (cbObject) {
                var data_text = cbObject.data;
                context.setResult(data_text);
                context.setError(error);
                console.log(context.getResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                path: fileFullName,
                position: 0,
                encoding: 'utf8'
            };
            var storage = new Storage();
            storage.readFile(successCb, failureCb, options);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
            return new Promise(function (resolve, reject) {
                var owner = this;
                var successCb = function (cbObject) {
                    var data_text = cbObject.data;
                    context.setResult(data_text);
                    context.setError(error);
                    console.log(context.getResult());
                    if (callback != null)
                        callback(context);
                    resolve(context);
                };
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(errorCode, errorText);
                    if (callback != null)
                        callback(context);
                    reject(context);
                };
                var options = {
                    path: fileFullName,
                    position: 0,
                    encoding: 'utf8'
                };
                var storage = new Storage();
                storage.readFile(successCb, failureCb, options);
            });
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("Successfully writen " + cbObject.written + " bytes");
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var options = {
                data: fileContent,
                path: fileFullName,
                positon: 0,
                flag: 'w',
                offset: 0,
                length: fileContent.length,
                encoding: 'utf8'
            };
            var storage = new Storage();
            storage.writeFile(successCb, failureCb, options);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileList = function (folderFullName, error, context, callback) {
            var successCb = function (cbObject) {
                var files = cbObject.files;
                for (var i = 0; i < files.length; ++i) {
                    var fileInfo = files[i];
                    console.log("File Name: " + fileInfo.name);
                }
                context.setArrayResult(files);
                console.log("Successfully obtain the file list from folder " + folderFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_usb = {
                path: folderFullName
            };
            storage.listFiles(successCb, failureCb, options_usb);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.removeFile = function (fileFullName, error, context, callback) {
            var successCb = function () {
                console.log("Successfully remove the file " + fileFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_file = {
                file: fileFullName
            };
            storage.removeFile(successCb, failureCb, options_file);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.createFolder = function (folderFullName, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("Directory" + folderFullName + " created");
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var mkdirOption_usb = {
                path: folderFullName
            };
            storage.mkdir(successCb, failureCb, mkdirOption_usb);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            var successCb = function () {
                console.log("Successfully remove the file " + folderFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_dir = {
                file: folderFullName,
                recursive: true
            };
            storage.removeFile(successCb, failureCb, options_dir);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.fileExists = function (fileFullName, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("The file exists: " + cbObject.exists);
                context.setBoolResult(cbObject.exists);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var existsOption = {
                path: fileFullName
            };
            var storage = new Storage();
            storage.exists(successCb, failureCb, existsOption);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.folderExists = function (folderFullName, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("The folder exists: " + cbObject.exists);
                context.setBoolResult(cbObject.exists);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var existsOption = {
                path: folderFullName
            };
            var storage = new Storage();
            storage.exists(successCb, failureCb, existsOption);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            var owner = this;
            var successCb = function () {
                console.log("copy done");
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                source: srcFileFullName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            var owner = this;
            var successCb = function () {
                console.log("copy done");
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                source: remoteUrlName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            var owner = this;
            var successCb = function () {
                console.log("Unzip File done.");
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(errorCode, errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                zipPath: zipFullFileName,
                targetPath: unzipFullPath,
            };
            var storage = new Storage();
            storage.unzipFile(successCb, failureCb, options);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_unzipFile = function (zipFullFilename, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.fsyncFileFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fsyncFileFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this.getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        return IImpl_SDK_InputSourceSetup_WebOS;
    }());
    nm_transversalservices.IImpl_SDK_InputSourceSetup_WebOS = IImpl_SDK_InputSourceSetup_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_InputSourceSetup_WebOS.js.map