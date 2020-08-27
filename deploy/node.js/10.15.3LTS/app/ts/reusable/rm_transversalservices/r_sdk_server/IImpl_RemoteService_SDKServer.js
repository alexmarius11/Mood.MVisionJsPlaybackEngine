"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_RemoteService_SDKServer = (function () {
        function IImpl_RemoteService_SDKServer(owner) {
            this._owner = owner;
        }
        IImpl_RemoteService_SDKServer.prototype.send = function (socket, params) {
        };
        IImpl_RemoteService_SDKServer.prototype.receive = function (socket, params) {
            var owner = this._owner;
            socket.on("message", function (message) {
                console.log(message);
                socket.emit("ret-get-message", message);
            });
            socket.on('sdk.filesystem.get-file-list', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                console.log("sdk.filesystem.get-file-list" + JSON.stringify(parameters));
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-get-file-list", ctx);
                };
                owner._iSDKFileSystem.getFileList(parameters.pathFullName, error, context, callback);
            });
            socket.on('sdk.filesystem.get-file-list2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                console.log("sdk.filesystem.get-file-list2" + JSON.stringify(parameters));
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-get-file-list2", ctx);
                };
                owner._iSDKFileSystem.getFileList2(parameters.storageName, parameters.pathName, error, context, callback);
            });
            socket.on('sdk.filesystem.read-text-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-read-text-file2", ctx);
                };
                owner._iSDKFileSystem.readTextFile2(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
            });
            socket.on('sdk.filesystem.write-text-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-write-text-file2", ctx);
                };
                owner._iSDKFileSystem.writeTextFile2(parameters.storageName, parameters.folderName, parameters.fileName, parameters.fileContent, error, context, callback);
            });
            socket.on('sdk.filesystem.remove-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-remove-file2", ctx);
                };
                owner._iSDKFileSystem.removeFile2(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
            });
            socket.on('sdk.filesystem.copy-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-copy-file2", ctx);
                };
                owner._iSDKFileSystem.copyFile2(parameters.srcStorageName, parameters.srcFolderName, parameters.srcFileName, parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.move-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-move-file2", ctx);
                };
                owner._iSDKFileSystem.moveFile2(parameters.srcStorageName, parameters.srcFolderName, parameters.srcFileName, parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.upload-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-upload-file2", ctx);
                };
                owner._iSDKFileSystem.uploadFile2(parameters.srcStorageName, parameters.srcFolderName, parameters.srcFileName, parameters.remoteUrlName, parameters.remoteFolderName, parameters.remoteFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.download-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-download-file2", ctx);
                };
                owner._iSDKFileSystem.downloadFile2(parameters.remoteUrlName, parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.unzip-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-unzip-file2", ctx);
                };
                owner._iSDKFileSystem.unzipFile2(parameters.zipStorageName, parameters.zipFolderName, parameters.zipFileName, parameters.unzipStorageName, parameters.unzipFolderName, error, context, callback);
            });
            socket.on('sdk.filesystem.zip-file2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-zip-file2", ctx);
                };
                owner._iSDKFileSystem.zipFile2(parameters.storageName, parameters.folderName, parameters.fileName, parameters.zipStorageName, parameters.zipFolderName, parameters.zipFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.create-folder2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-create-folder2", ctx);
                };
                owner._iSDKFileSystem.createFolder2(parameters.storageName, parameters.folderName, error, context, callback);
            });
            socket.on('sdk.filesystem.delete-folder2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-delete-folder2", ctx);
                };
                owner._iSDKFileSystem.deleteFolder2(parameters.storageName, parameters.folderName, error, context, callback);
            });
            socket.on('sdk.filesystem.copy-folder2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-copy-folder2", ctx);
                };
                owner._iSDKFileSystem.copyFolder2(parameters.srcStorageName, parameters.srcFolderName, parameters.dstStorageName, parameters.dstFolderName, error, context, callback);
            });
            socket.on('sdk.filesystem.move-folder2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-move-folder2", ctx);
                };
                owner._iSDKFileSystem.moveFolder2(parameters.srcStorageName, parameters.srcFolderName, parameters.dstStorageName, parameters.dstFolderName, error, context, callback);
            });
            socket.on('sdk.filesystem.zip-folder2', function (parameters) {
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-zip-folder2", ctx);
                };
                owner._iSDKFileSystem.zipFolder2(parameters.storageName, parameters.folderName, parameters.zipStorageName, parameters.zipFolderName, parameters.zipFileName, error, context, callback);
            });
            socket.on('sdk.filesystem.computefilesha2', function (parameters) {
                console.log("sdk.filesystem.computefilesha2");
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var fileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                fileInfo.setStorage(parameters.srcStorageName);
                fileInfo.setPath(parameters.srcFolderName);
                fileInfo.setName(parameters.srcFileName);
                context.setObjectResult(fileInfo);
                var fileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                fileInfo2.setStorage(parameters.shaStorageName);
                fileInfo2.setPath(parameters.shaFolderName);
                fileInfo2.setName(parameters.shaFileName);
                context.setObject2Result(fileInfo2);
                var shaProperties = owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
                shaProperties.setSrcFileInfo(fileInfo);
                shaProperties.setShaFileInfo(fileInfo2);
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-computefilesha2", ctx);
                };
                owner._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback);
            });
            socket.on('sdk.filesystem.computeandsavefilesha2', function (parameters) {
                console.log("sdk.filesystem.computeandsavefilesha2");
                var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var fileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                fileInfo.setStorage(parameters.srcStorageName);
                fileInfo.setPath(parameters.srcFolderName);
                fileInfo.setName(parameters.srcFileName);
                context.setObjectResult(fileInfo);
                var fileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                fileInfo2.setStorage(parameters.shaStorageName);
                fileInfo2.setPath(parameters.shaFolderName);
                fileInfo2.setName(parameters.shaFileName);
                context.setObject2Result(fileInfo2);
                var shaProperties = owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
                shaProperties.setSrcFileInfo(fileInfo);
                shaProperties.setShaFileInfo(fileInfo2);
                var callback = function (ctx) {
                    socket.emit("sdk.filesystem.ret-computeandsavefilesha2", ctx);
                };
                owner._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
            });
        };
        IImpl_RemoteService_SDKServer.prototype.startup_withConnectClient = function (remoteServerUrl) {
        };
        IImpl_RemoteService_SDKServer.prototype.startup = function (socket) {
        };
        return IImpl_RemoteService_SDKServer;
    }());
    rm_transversalservices.IImpl_RemoteService_SDKServer = IImpl_RemoteService_SDKServer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_RemoteService_SDKServer.js.map