define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_FileSystem_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FileSystem_SDKConnector(owner) {
                this._owner = owner;
            }
            //--------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.readTextFile = function (fileFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_readTextFile(fileFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.readTextFile(fileFullName, error, context, callback2);
            };
            //--------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //---------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_readTextFile2(storageName, folderName, fileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback2);
            };
            //---------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //-----------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback2);
            };
            //---------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.getFileList = function (folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_getFileList(folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.getFileList(folderFullName, error, context, callback2);
            };
            //------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_getFileList(folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_getFileList(folderFullName, error, context, callback2);
            };
            //---------------------------------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.getFileList2 = function (storageName, folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_getFileList2(storageName, folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.getFileList2(storageName, folderFullName, error, context, callback2);
            };
            //---------------------------------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.getNbFiles2 = function (storageName, folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    //console.log( ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_getNbFiles2(storageName, folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.getNbFiles2(storageName, folderFullName, error, context, callback2);
            };
            //--------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.removeFile = function (fileFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_removeFile(fileFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.removeFile(fileFullName, error, context, callback2);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_removeFile(fileFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_removeFile(fileFullName, error, context, callback2);
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_removeFile2(storageName, folderName, fileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, callback2);
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_fileExists2(storageName, folderName, fileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.fileExists2(storageName, folderName, fileName, error, context, callback2);
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_SDKConnector.prototype.fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_SDKConnector.prototype.folderExists = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            //--------------------------------------
            //              copy file
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
                };
                //document.getElementById("sdk.message").innerHTML += "<p>Connector.copyFile2 start</p>";
                owner._aSDKJsTV._iSDKFileSystem.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback2);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //--------------------------------------
            //      downloadFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback2);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //--------------------------------------
            //      unzipFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback2);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_fsyncFile2(storageName, folderName, fileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.fsyncFile2(storageName, folderName, fileName, error, context, callback2);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.getFileInfo2(storageName, folderName, fileName, error, context, callback2);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //-------------- 
            // temporary - will be moved to the write place
            //--------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback2);
            };
            //------------------------
            //    Move File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback2);
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //------------------------
            //    Upload File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback2);
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //------------------------
            //    Zip File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback2);
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //================================================
            //   Folder Methods
            //=================================================    
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.createFolder = function (folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_createFolder(folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.createFolder(folderFullName, error, context, callback2);
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_createFolder(fileFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_createFolder(fileFullName, error, context, callback2);
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_createFolder2(storageName, folderName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.createFolder2(storageName, folderName, error, context, callback2);
            };
            //-------------------------------------------------------------
            //    delete folder 
            //-------------------------------------------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.deleteFolder = function (folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_deleteFolder(folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.deleteFolder(folderFullName, error, context, callback2);
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_deleteFolder = function (folderFullName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_deleteFolder(folderFullName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_deleteFolder(folderFullName, error, context, callback2);
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_deleteFolder2(storageName, folderName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback2);
            };
            //-------------------------------------------------------------
            //    copy folder 
            //-------------------------------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //----------------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback2);
            };
            //---------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Move Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback2);
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Zip Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback2);
            };
            //-------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //----------------------
            //  compute file sha 
            //  and save sha in file
            //-----------------------
            //--------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_computeFileSha2(shaProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback2);
            };
            //-----------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2);
            };
            //--------------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2);
            };
            //-----------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    console.log(ctx.getResult);
                    owner._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2);
            };
            //=========================
            // read and parse xml file
            //=========================
            //--------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
            };
            //--------------------------
            IImpl_SDK_FileSystem_SDKConnector.prototype.parseXMLString = function (xmlString, error, context, callback) {
            };
            return IImpl_SDK_FileSystem_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_FileSystem_SDKConnector = IImpl_SDK_FileSystem_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FileSystem_SDKConnector.js.map