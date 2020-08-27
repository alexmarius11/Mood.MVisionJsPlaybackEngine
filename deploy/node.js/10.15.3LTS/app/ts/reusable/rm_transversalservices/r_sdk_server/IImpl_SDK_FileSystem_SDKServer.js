"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_FileSystem_SDKServer = (function () {
        function IImpl_SDK_FileSystem_SDKServer(owner) {
            this._owner = owner;
        }
        IImpl_SDK_FileSystem_SDKServer.prototype.readTextFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.readTextFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_readTextFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_readTextFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.writeTextFile(fileFullName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.writeTextFile(fileFullName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.getFileList = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.getFileList(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_getFileList(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.getFileList2(storageName, folderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.removeFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.removeFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_removeFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.createFolder = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.createFolder(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_createFolder(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.createFolder2 = function (storageName, folderfullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.createFolder2(storageName, folderfullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.deleteFolder(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_deleteFolder(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.fileExists = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.fileExists(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_fileExists(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.fileExists2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.folderExists = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.folderExists(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_folderExists(folderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.copyFile(srcFileFullName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_copyFile(srcFileFullName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.downloadFile(remoteUrlName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_downloadFile(remoteUrlName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.unzipFile(zipFullFileName, unzipFullPath, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_unzipFile(zipFullFileName, unzipFullPath, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.fsyncFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_fsyncFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.fsyncFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.fsyncFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.getFileInfo(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_getFileInfo(fileFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.getFileInfo2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_getFileInfo2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.copyFolder(srcFolderFullName, dstFolderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_copyFolder(srcFolderFullName, dstFolderFullName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_computeFileSha2(shaProperties, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            this._owner._aTargetSDK._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKServer.prototype.parseXMLString = function (xmlString, error, context, callback) {
        };
        return IImpl_SDK_FileSystem_SDKServer;
    }());
    rm_transversalservices.IImpl_SDK_FileSystem_SDKServer = IImpl_SDK_FileSystem_SDKServer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FileSystem_SDKServer.js.map