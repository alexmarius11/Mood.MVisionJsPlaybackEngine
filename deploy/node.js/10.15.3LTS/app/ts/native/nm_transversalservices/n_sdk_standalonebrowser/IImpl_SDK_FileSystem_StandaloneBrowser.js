"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_FileSystem_StandaloneBrowser = (function () {
        function IImpl_SDK_FileSystem_StandaloneBrowser(owner) {
            this._owner = owner;
        }
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.readTextFile = function (fileFullName, error, context, callback) {
            return null;
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
            return null;
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.createFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.deleteFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this.getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.getFileList2 = function (storageName, folderFullName, error, context, callback) {
            this.getFileList(storageName + folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.removeFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.createFolder2 = function (storageName, folderfullName, error, context, callback) {
            return this.createFolder(storageName + folderfullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
            return this.deleteFolder(storageName + folderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.fileExists(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_StandaloneBrowser.prototype.parseXMLString = function (xmlString, error, context, callback) {
        };
        return IImpl_SDK_FileSystem_StandaloneBrowser;
    }());
    nm_transversalservices.IImpl_SDK_FileSystem_StandaloneBrowser = IImpl_SDK_FileSystem_StandaloneBrowser;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FileSystem_StandaloneBrowser.js.map