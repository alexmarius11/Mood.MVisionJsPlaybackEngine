"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer = (function () {
        function IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer(owner) {
            this._owner = owner;
        }
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_readTextFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_readTextFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_text_file(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_writeTextFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_getFileList = function (folderFullName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_allfilesystem(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_getFileList2 = function (storageName, folderFullName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_allfilesystem(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_getNbFiles2 = function (storageName, folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_deleteFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_createFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_createFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_createFolder2 = function (storageName, folderfullName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_createFolder2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_deleteFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_deleteFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_deleteFolder2 = function (storageName, folderName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_deleteFolder2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_copyFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_copyFolder2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_downloadFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_unzipFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_moveFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_uploadFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_zipFile2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_moveFolder2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_zipFolder2(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_computeAndSaveShaFile(context);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.prototype.notify_promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        return IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer;
    }());
    rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer = IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer.js.map