var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R"], function (require, exports, rmGeneralRemoteService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_RemoteService_SDKClient = /** @class */ (function (_super) {
            __extends(IImpl_RemoteService_SDKClient, _super);
            //----------- constructor 
            function IImpl_RemoteService_SDKClient(owner) {
                var _this = _super.call(this, owner) || this;
                _this._owner = owner;
                return _this;
            }
            //---------------------------------------------
            IImpl_RemoteService_SDKClient.prototype.setRemoteUrl = function (url) {
                //this._owner.setRemoteUrl(url);  
            };
            //------------------------------
            IImpl_RemoteService_SDKClient.prototype.send = function (socket, params) {
            };
            //------------------------------
            IImpl_RemoteService_SDKClient.prototype.receive = function (socket, params) {
                var owner = this._owner;
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-get-file-list', function (ctx) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList(null, null, ctx, null);
                    //document.getElementById("filesystem").innerHTML = strFileSystem;        
                });
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-get-file-list2', function (ctx) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList2(null, null, null, ctx, null);
                });
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-get-nb-files2', function (ctx) {
                    //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
                    if (!owner._iService.runCallback(ctx)) {
                        owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getNbFiles2(null, null, null, ctx, null);
                        return;
                    }
                });
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-read-text-file2', function (ctx) {
                    //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
                    if (!owner._iService.runCallback(ctx)) {
                        owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile2(null, null, null, null, ctx, null);
                        return;
                    }
                });
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-file-exists2', function (ctx) {
                    //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
                    if (!owner._iService.runCallback(ctx)) {
                        owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists2(null, null, null, null, ctx, null);
                        return;
                    }
                });
                //-------------------------
                this._owner._socket.on('sdk.filesystem.ret-write-text-file2', function (ctx) {
                    //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-write-text-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile2(null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-remove-file2', function (ctx) {
                    //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-remove-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile2(null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-copy-file2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-copy-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile2(null, null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-move-file2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-download-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFile2(null, null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-download-file2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-download-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile2(null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-upload-file2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_uploadFile2(null, null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-unzip-file2', function (ctx) {
                    //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-unzip-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile2(null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-zip-file2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFile2(null, null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-create-folder2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-create-folder2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder2(null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-delete-folder2', function (ctx) {
                    //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-delete-folder2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder2(null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-copy-folder2', function (ctx) {
                    //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-copy-folder2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFolder2(null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-move-folder2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFolder2(null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-zip-folder2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFolder2(null, null, null, null, null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-computefilesha2', function (ctx) {
                    ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-compute-filesha2';
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileSha2(null, null, ctx, null);
                });
                //---------------------------
                this._owner._socket.on('sdk.filesystem.ret-computeandsavefilesha2', function (ctx) {
                    //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.computeandsavefilesha2: ' + ctx._result;
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(null, null, ctx, null);
                });
            };
            //-----------------------------------
            IImpl_RemoteService_SDKClient.prototype.startup_withConnectClient = function (remoteServerUrl) {
                return this._owner.startup_withConnectClient(remoteServerUrl);
            };
            //-----------------------------------
            IImpl_RemoteService_SDKClient.prototype.startup = function (socket) {
                return this._owner.startup(socket);
            };
            return IImpl_RemoteService_SDKClient;
        }(rmGeneralRemoteService.rm_general.IImpl_RemoteService_R));
        rm_transversalservices.IImpl_RemoteService_SDKClient = IImpl_RemoteService_SDKClient;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_RemoteService_SDKClient.js.map