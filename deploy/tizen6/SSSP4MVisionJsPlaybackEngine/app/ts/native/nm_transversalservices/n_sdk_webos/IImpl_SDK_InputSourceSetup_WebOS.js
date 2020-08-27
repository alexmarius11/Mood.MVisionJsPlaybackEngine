define(["require", "exports", "./cordova/cordova.webos", "./cordova/storage", "./cordova/inputSource"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_InputSourceSetup_WebOS = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_InputSourceSetup_WebOS(owner) {
                this._owner = owner;
            }
            //--------------------------------------
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
            //--------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return new Promise(function (resolve, reject) {
                    // This example will read file as text.
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
            //-----------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                this.readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //---------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
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
                // write Text data, use utf-8 encoding, write all text.
                //var textData = "Hello SCAP!!!!!"; 
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
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //---------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileList = function (folderFullName, error, context, callback) {
                // Callback for a successful execution.
                var successCb = function (cbObject) {
                    // Get the list of file info in given directory, as an array.
                    var files = cbObject.files;
                    for (var i = 0; i < files.length; ++i) {
                        var fileInfo = files[i];
                        // Name of this file.
                        console.log("File Name: " + fileInfo.name);
                    }
                    context.setArrayResult(files);
                    console.log("Successfully obtain the file list from folder " + folderFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);	  	
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(errorCode, errorText);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);
                };
                // Create storage object and invoke the API..	
                var storage = new Storage();
                // The parameters.
                // directory : The URI for the directory where the files will be listed. 
                // It can be directory in the internal memory or in the attached usb storage device.
                //var options = { 
                //  path: folderFullName //'file://internal/list/me/',
                //}; 
                //storage.listFiles(successCb, failureCb, options);
                var options_usb = {
                    path: folderFullName //'file://usb:1/list/me/',
                };
                storage.listFiles(successCb, failureCb, options_usb);
            };
            //------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.removeFile = function (fileFullName, error, context, callback) {
                // Callback for a successful execution.
                // This callback will be called without any parameter.	
                var successCb = function () {
                    console.log("Successfully remove the file " + fileFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(errorCode, errorText);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);
                };
                // Create storage object and invoke the API.	
                var storage = new Storage();
                // The parameters.
                // file : The name of the file to be removed..
                var options_file = {
                    file: fileFullName //'file://internal/delete_me.txt',
                };
                storage.removeFile(successCb, failureCb, options_file);
                // The parameters.
                // file : The name of the file to be removed. A directory can be removed.
                //var options_dir = { 
                //file: 'file://internal/delete/this/dir',
                //recursive : true		
                //}; 
                //storage.removeFile(successCb, failureCb, options_dir);
                // The parameters.
                // file : The name of the file to be removed. A file in the usb can be removed.
                //var options_usb = { 
                //file: 'file://usb:1/delete/this/file.txt',
                //}; 
                //storage.removeFile(successCb, failureCb, options_usb);
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            };
            //---------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.createFolder = function (folderFullName, error, context, callback) {
                // Callback for a successful execution.
                var successCb = function (cbObject) {
                    console.log("Directory" + folderFullName + " created");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);	  	
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(errorCode, errorText);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);
                };
                var storage = new Storage();
                // parameters for mkdir options..
                // directory can be craeted in the internal memory or in the connected usb.
                //var mkdirOption = { 
                // path: "file://internal/create/this/directory"
                //}; 
                // Directory will be created recursively.
                //storage.mkdir(successCb, failureCb, mkdirOption);
                // parameters for mkdir options..
                // directory can be craeted in the internal memory or in the connected usb.
                var mkdirOption_usb = {
                    path: folderFullName //"file://usb:1/create/this/directory"
                };
                // Directory will be created recursively.
                storage.mkdir(successCb, failureCb, mkdirOption_usb);
            };
            //-------------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            };
            //---------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.deleteFolder = function (folderFullName, error, context, callback) {
                // Callback for a successful execution.
                // This callback will be called without any parameter.	
                var successCb = function () {
                    console.log("Successfully remove the file " + folderFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    //callback("remove file success");	  	
                };
                // Callback for a failed execution.
                // Failure callback will be invoked with the error code and the error text.
                var failureCb = function (cbObject) {
                    var errorCode = cbObject.errorCode;
                    var errorText = cbObject.errorText;
                    console.log(" Error Code [" + errorCode + "]: " + errorText);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(errorCode, errorText);
                    if (callback != null)
                        callback(context);
                    //callback(cbObject);
                };
                // Create storage object and invoke the API.	
                var storage = new Storage();
                // The parameters.
                // file : The name of the folder to be removed. A directory can be removed.
                var options_dir = {
                    file: folderFullName,
                    recursive: true
                };
                storage.removeFile(successCb, failureCb, options_dir);
            };
            //-------------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_InputSourceSetup_WebOS.prototype.fileExists = function (fileFullName, error, context, callback) {
                // Succcess callback.
                var successCb = function (cbObject) {
                    //the exists property is a boolean value, which will be true if the file exists.
                    //var exists = cbObject.exists;
                    console.log("The file exists: " + cbObject.exists);
                    context.setBoolResult(cbObject.exists);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                };
                // Failure callback
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
                // Exists parameter. The path to the file or directory which will be checked for the existence.
                // path can be in the internal directory or in the connected usb storage device.
                var existsOption = {
                    path: fileFullName //"file://internal/to/be/or/not/to/be"
                };
                var storage = new Storage();
                storage.exists(successCb, failureCb, existsOption);
                // Exists parameter. The path to the file or directory which will be checked for the existence.
                // path can be in the internal directory or in the connected usb storage device.
                //var existsOption_usb = { 
                //path: "file://usb:1/to/be/or/not/to/be"
                //}; 
                //storage.exists(successCb, failureCb, existsOption_usb);
            };
            //-----------------------------------------------------------  
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_InputSourceSetup_WebOS.prototype.folderExists = function (folderFullName, error, context, callback) {
                // Succcess callback.
                var successCb = function (cbObject) {
                    //the exists property is a boolean value, which will be true if the file exists.
                    //var exists = cbObject.exists;
                    console.log("The folder exists: " + cbObject.exists);
                    context.setBoolResult(cbObject.exists);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                };
                // Failure callback
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
                // Exists parameter. The path to the file or directory which will be checked for the existence.
                // path can be in the internal directory or in the connected usb storage device.
                var existsOption = {
                    path: folderFullName //"file://internal/to/be/or/not/to/be" "file://usb:1/to/be/or/not/to/be"
                };
                var storage = new Storage();
                storage.exists(successCb, failureCb, existsOption);
            };
            //-----------------------------------------------------------  
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            //--------------------------------------
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
                // copy file parameters.
                // source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
                // destination : This is where this file is copied to. Destination can be the internal memory or usb device.
                var options = {
                    source: srcFileFullName,
                    destination: dstFileFullName //'file:///internal/image.jpg'
                };
                // Create storage object and invoke the API with parameters.	
                var storage = new Storage();
                storage.copyFile(successCb, failureCb, options);
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                this.copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      downloadFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
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
                // copy file parameters.
                // source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
                // destination : This is where this file is copied to. Destination can be the internal memory or usb device.
                var options = {
                    source: remoteUrlName,
                    destination: dstFileFullName //'file:///internal/image.jpg'
                };
                // Create storage object and invoke the API with parameters.	
                var storage = new Storage();
                storage.copyFile(successCb, failureCb, options);
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      unzipFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
                var owner = this;
                // This API will unzip a ZIP file stored in the device.
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
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_unzipFile = function (zipFullFilename, unzipFullPath, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.fsyncFileFile2 = function (storageName, folderName, fileName, error, context, callback) {
                this.fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_fsyncFileFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                this.getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_InputSourceSetup_WebOS.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            return IImpl_SDK_InputSourceSetup_WebOS;
        }()); //--- end class
        nm_transversalservices.IImpl_SDK_InputSourceSetup_WebOS = IImpl_SDK_InputSourceSetup_WebOS;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_InputSourceSetup_WebOS.js.map