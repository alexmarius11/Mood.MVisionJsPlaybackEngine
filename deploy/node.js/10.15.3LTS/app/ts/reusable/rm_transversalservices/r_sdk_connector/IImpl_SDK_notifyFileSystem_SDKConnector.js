"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_notifyFileSystem_SDKConnector = (function () {
        function IImpl_SDK_notifyFileSystem_SDKConnector(owner) {
            this._owner = owner;
        }
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_readTextFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_readTextFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_readTextFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_readTextFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile(fileFullName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_writeTextFile(fileFullName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_getFileList = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_getFileList = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_getFileList(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_getFileList2 = function (storageName, folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList2(storageName, folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_removeFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_removeFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_removeFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_createFolder = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_createFolder = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_createFolder(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_deleteFolder = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_deleteFolder = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_deleteFolder(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_fileExists = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_fileExists = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fileExists(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_folderExists = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_folderExists(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_folderExists = function (folderFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_folderExists(folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile(srcFileFullName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFile(srcFileFullName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile(remoteUrlName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_downloadFile(remoteUrlName, dstFileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile(zipFullFileName, unzipFullPath, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_unzipFile(zipFullFileName, unzipFullPath, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_fsyncFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fsyncFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_fsyncFile = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fsyncFile(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fsyncFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fsyncFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_getFileInfo = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_getFileInfo = function (fileFullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_getFileInfo(fileFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_createFolder2 = function (storageName, folderfullName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder2(storageName, folderfullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_deleteFolder2 = function (storageName, folderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder2(storageName, folderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists2(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_computeFileSha2 = function (shaProperties, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileSha2(shaProperties, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_computeFileSha2(shaProperties, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConnector.prototype.notify_promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
        };
        return IImpl_SDK_notifyFileSystem_SDKConnector;
    }());
    rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConnector = IImpl_SDK_notifyFileSystem_SDKConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_notifyFileSystem_SDKConnector.js.map