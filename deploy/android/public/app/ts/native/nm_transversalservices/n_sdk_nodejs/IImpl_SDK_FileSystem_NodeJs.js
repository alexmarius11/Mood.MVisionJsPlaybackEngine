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
define(["require", "exports", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcryptoes5/entry-export_all", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R"], function (require, exports, rmAsmCrypto, rmTransversalServicesFileSystemJsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_FileSystem_NodeJs = /** @class */ (function (_super) {
            __extends(IImpl_SDK_FileSystem_NodeJs, _super);
            //----------- constructor 
            function IImpl_SDK_FileSystem_NodeJs(owner) {
                var _this = _super.call(this, owner) || this;
                _this._owner = owner;
                return _this;
            }
            //--------------
            IImpl_SDK_FileSystem_NodeJs.prototype.readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //--------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //---------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var fs = require('fs');
                fs.readFile(fileFullName, 'utf8', function (err, data) {
                    if (err) {
                        console.log('Error reading file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error reading file ' + fileFullName + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //console.log(data);
                    context.setResult(data);
                    console.log("Successfully read the file __ : " + fileFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //---------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //-----------------
            IImpl_SDK_FileSystem_NodeJs.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage("");
                aFileInfo.setPath("");
                aFileInfo.setName(fileFullName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var fs = require('fs');
                fs.writeFile(fileFullName, fileContent, function (err) {
                    // throws an error, you could also catch it here
                    if (err) {
                        console.log('Error writing file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error writing file ' + fileFullName + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // success case, the file was saved
                    console.log('File' + fileFullName + ' saved!');
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var fileFullName = storageName + folderName + fileName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var fs = require('fs');
                fs.writeFile(fileFullName, fileContent, function (err) {
                    // throws an error, you could also catch it here
                    if (err) {
                        console.log('Error writing file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error writing file ' + fileFullName + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // success case, the file was saved
                    console.log('File' + fileFullName + ' saved!');
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //---------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //=============
            // append text to file file
            //=============
            //--------------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var fs = require('fs');
                var fileFullName = storageName + folderName + fileName;
                fs.appendFile(fileFullName, fileContent, 'utf8', function (err) {
                    // throws an error, you could also catch it here
                    if (err) {
                        console.log('Error appending to file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error appending to file ' + fileFullName + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    // success case, the file was saved
                    console.log(' Log : ' + fileFullName + ' add new message: ' + fileContent);
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.getFileList = function (folderFullName, error, context, callback) {
                var fs = require('fs');
                //if (process.argv.length <= 2) {
                //console.log("Usage: " + __filename + " path/to/directory");
                //process.exit(-1);
                //}
                var path = folderFullName;
                var owner = this._owner;
                fs.readdir(path, function (err, items) {
                    if (err) {
                        console.log('Error reading directory ' + folderFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error reading directory ' + folderFullName + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //console.log(JSON.stringify(items));
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    for (var i = 0; i < items.length; i++) {
                        var stats = fs.lstatSync(path + "/" + items[i]);
                        //stats.isDirectory();
                        //console.log(JSON.stringify(stats));
                        console.log(JSON.stringify(stats));
                        aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                        aFileInfo.setName(items[i]);
                        if (!stats.isSymbolicLink()) {
                            if (stats.isDirectory())
                                aFileInfo.setType("folder-aa");
                            else
                                aFileInfo.setType("file");
                        }
                        else {
                            aFileInfo.setType("folder-link");
                        }
                        aFileInfo.setSize(stats.size);
                        aFileInfo.setCreatedDate(stats.ctime);
                        aFileInfo.setLastModifiedDate(stats.mtime);
                        aFileInfo.setStorage("");
                        aFileInfo.setPath(folderFullName);
                        fileInfoList.push(aFileInfo);
                    }
                    context.setArrayResult(fileInfoList); //items);
                    console.log("Successfully obtain the file list from folder " + folderFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
                //this.getFileList(storageName+folderFullName, error, context, callback) ;
                var fs = require('fs');
                //if (process.argv.length <= 2) {
                //console.log("Usage: " + __filename + " path/to/directory");
                //process.exit(-1);
                //}
                var path = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                var realPath = "";
                try {
                    realPath = fs.realpathSync(path);
                }
                catch (e) {
                    realPath = path;
                }
                fs.readdir(realPath, function (err, items) {
                    if (err) {
                        console.log('Error reading directory ' + path + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error reading directory ' + path + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //console.log(JSON.stringify(items));
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    for (var i = 0; i < items.length; i++) {
                        var stats = null;
                        var fileFullPath = realPath + "/" + items[i];
                        var realFilePath = "";
                        try {
                            realFilePath = fs.realpathSync(fileFullPath);
                        }
                        catch (e) {
                            realFilePath = fileFullPath;
                        }
                        try {
                            stats = fs.lstatSync(realFilePath); //realPath + "/" + items[i]);
                        }
                        catch (e) {
                            stats = null;
                        }
                        //stats.isDirectory();
                        //console.log(JSON.stringify(stats));
                        aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                        aFileInfo.setName(items[i]);
                        if (stats !== null) {
                            aFileInfo.setSize(stats.size);
                            aFileInfo.setCreatedDate(stats.ctime);
                            aFileInfo.setLastModifiedDate(stats.mtime);
                            //console.log(JSON.stringify(items[i]));
                            //console.log(JSON.stringify(stats));
                            if (stats.isSymbolicLink()) {
                                aFileInfo.setType("folder");
                            }
                            else {
                                if (stats.isDirectory()) {
                                    aFileInfo.setType("folder");
                                }
                                else {
                                    aFileInfo.setType("file");
                                }
                            }
                        }
                        else {
                            aFileInfo.setType("folder");
                        }
                        aFileInfo.setStorage(storageName);
                        aFileInfo.setPath(folderName);
                        fileInfoList.push(aFileInfo);
                    }
                    context.setArrayResult(fileInfoList); //items);
                    console.log("Successfully obtain the file list from folder " + path);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-----------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
                //this.getFileList(storageName+folderFullName, error, context, callback) ;
                var fs = require('fs');
                //if (process.argv.length <= 2) {
                //console.log("Usage: " + __filename + " path/to/directory");
                //process.exit(-1);
                //}
                var path = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                var realPath = "";
                try {
                    realPath = fs.realpathSync(path);
                }
                catch (e) {
                    realPath = path;
                }
                fs.readdir(realPath, function (err, items) {
                    if (err) {
                        console.log('Error reading directory ' + path + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1001, 'Error reading directory ' + path + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //console.log(JSON.stringify(items));
                    var nbFiles = 0;
                    for (var i = 0; i < items.length; i++) {
                        var stats = null;
                        var fileFullPath = realPath + "/" + items[i];
                        var realFilePath = "";
                        try {
                            realFilePath = fs.realpathSync(fileFullPath);
                        }
                        catch (e) {
                            realFilePath = fileFullPath;
                        }
                        try {
                            stats = fs.lstatSync(realFilePath); //realPath + "/" + items[i]);
                        }
                        catch (e) {
                            stats = null;
                        }
                        //stats.isDirectory();
                        //console.log(JSON.stringify(stats));
                        if (stats !== null) {
                            if (stats.isSymbolicLink()) {
                                ; //aFileInfo.setType("folder");
                            }
                            else {
                                if (stats.isDirectory()) {
                                    ; //aFileInfo.setType("folder");
                                }
                                else {
                                    //aFileInfo.setType("file");
                                    nbFiles++;
                                }
                            }
                        }
                        else {
                            ; //aFileInfo.setType("folder");
                        }
                    }
                    context.setIntResult(nbFiles);
                    console.log("Successfully obtain the file number [" + nbFiles + "] from folder " + path);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //--------------------
            // remove file 
            //--------------------
            //--------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.removeFile = function (fileFullName, error, context, callback) {
                var fs = require('fs');
                fs.unlink(fileFullName, function (err) {
                    if (err) {
                        console.log('Error deleeting file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1010, 'Error deleting file ' + fileFullName + ' ' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //--- file removed succesfully
                    console.log('File' + fileFullName + ' saved!');
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var fs = require('fs');
                var fileFullName = storageName + folderName + fileName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                fs.unlink(fileFullName, function (err) {
                    if (err) {
                        console.log('Error deleting file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1010, 'Error deleting file ' + fileFullName + ' ' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //--- file removed succesfully
                    console.log('File' + fileFullName + ' deleted!');
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_NodeJs.prototype.fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
                var fileFullName = storageName + folderName + fileName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var fs = require('fs');
                try {
                    var bFileExists = false;
                    if (fs.existsSync(fileFullName)) {
                        bFileExists = true;
                    }
                    // success case, the file was saved
                    console.log('File ' + fileFullName + ' exists!');
                    context.setResult(fileFullName);
                    context.setBoolResult(bFileExists);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                catch (err) {
                    //console.error(err)
                    console.log('Error testing file exists ' + fileFullName + JSON.stringify(err));
                    context.setError(error);
                    context.setBoolResult(false);
                    if (context.getError() != null)
                        context.getError().setError(10001, 'Error testing file exists ' + fileFullName + JSON.stringify(err));
                    if (callback != null)
                        callback(context);
                    return;
                }
            };
            //--------------------------------------
            //              copy file
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName(dstFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName(srcFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                var fs = require('fs');
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                // destination file will be created or overwritten by default.
                fs.copyFile(srcFileFullName, dstFileFullName, function (err) {
                    if (err) {
                        console.log('Error copying file ' + srcFileFullName + ' to ' + srcFileFullName + ' to ' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1010, 'Error copying file ' + srcFileFullName + ' to ' + srcFileFullName + ' to ' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //-----------------
                    console.log(srcFileFullName + ' was copied to ' + dstFileFullName);
                    context.setResult(srcFileFullName + ' was copied to ' + dstFileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      downloadFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                try {
                    var fs = require('fs');
                    var request = require('request');
                    var through2 = require('through2');
                    var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                    //----
                    var owner = this._owner;
                    var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aFileInfo.setStorage(dstStorageName);
                    aFileInfo.setPath(dstFolderName);
                    aFileInfo.setName(dstFolderName);
                    aFileInfo.setType("file");
                    context.setObjectResult(aFileInfo);
                    var req = request(remoteUrlName);
                    req.on('error', function (e) {
                        // Handle connection errors
                        console.log(e);
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(2011, 'Error downloading [2011] from ' + remoteUrlName + ' Connection error: ' + ' ' + JSON.stringify(e));
                        context.setResult('Error downloading [2010]' + remoteUrlName + ' ' + JSON.stringify(e));
                        context.setBoolResult(false);
                        if (callback != null)
                            callback(context);
                    });
                    var bufferedResponse = req.pipe(through2(function (chunk, enc, callback2) {
                        this.push(chunk);
                        callback2();
                    }));
                    req.on('response', function (res) {
                        if (res.statusCode === 200) {
                            try {
                                var contentDisposition = res.headers['content-disposition'];
                                var match = contentDisposition && contentDisposition.match(/(filename=|filename\*='')(.*)$/);
                                var filename = match && match[2] || 'default-filename.out';
                                if (dstFileFullName != "")
                                    filename = dstFileFullName;
                                var dest = fs.createWriteStream(filename);
                                dest.on('error', function (e) {
                                    // Handle write errors
                                    console.log(e);
                                    context.setError(error);
                                    if (context.getError() != null)
                                        context.getError().setError(2015, 'Error downloading [2015] from ' + remoteUrlName + ' ' + JSON.stringify(e));
                                    context.setResult('Error downloading [2015]' + remoteUrlName + ' ' + JSON.stringify(e));
                                    context.setBoolResult(false);
                                    if (callback != null)
                                        callback(context);
                                });
                                //---------------
                                dest.on('finish', function () {
                                    //------ The file has been downloaded
                                    console.log('Download succeeded: ' + filename);
                                    context.setResult(filename);
                                    context.setBoolResult(true);
                                    context.setError(error);
                                    if (callback != null)
                                        callback(context);
                                });
                                bufferedResponse.pipe(dest);
                            }
                            catch (e) {
                                // Handle request errors
                                console.log(e);
                                context.setError(error);
                                if (context.getError() != null)
                                    context.getError().setError(2010, 'Error downloading [2010] from ' + remoteUrlName + ' ' + JSON.stringify(e));
                                context.setResult('Error downloading [2010]' + remoteUrlName + ' ' + JSON.stringify(e));
                                context.setBoolResult(false);
                                if (callback != null)
                                    callback(context);
                            }
                        }
                        else {
                            // Handle HTTP server errors
                            console.log(res.statusCode);
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(2012, 'Error downloading [2012] from ' + remoteUrlName + ' Http server error: ' + res.statusCode + ' ' + JSON.stringify(res));
                            context.setResult('Error downloading [2012]' + remoteUrlName + ' Http server error: ' + res.statusCode + ' ' + JSON.stringify(res));
                            context.setBoolResult(false);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    // Handle request errors
                    console.log(e);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(2014, 'Error downloading [2014] from ' + remoteUrlName + ' ' + JSON.stringify(e));
                    context.setResult('Error downloading [2014] from ' + remoteUrlName + ' ' + JSON.stringify(e.stack));
                    context.setBoolResult(false);
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.downloadFile2_planB = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                var fs = require('fs');
                var request = require('request');
                //var through2 = require('through2');
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                var optionsStart = {
                    uri: remoteUrlName,
                    method: "GET",
                    encoding: "binary",
                    headers: {
                        //'X-TOKEN': authToken,
                        "Content-type": "applcation/x-binary"
                    }
                };
                request(optionsStart)
                    .then(function (body, data) {
                    var writeStream = fs.createWriteStream(dstFileFullName); //uuid+'_obj.pdf');
                    //console.log(body)
                    writeStream.write(body, 'binary');
                    writeStream.on('finish', function () {
                        console.log('Download succeeded: ' + dstFileFullName);
                        context.setResult(dstFileFullName);
                        context.setBoolResult(true);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                    writeStream.end();
                });
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      unzipFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------------------------
            //https://github.com/maxogden/extract-zip
            //npm install extract-zip --save
            //Options
            //dir - defaults to process.cwd()
            //defaultDirMode - integer - Directory Mode (permissions) will default to 493 (octal 0755 in integer)
            //defaultFileMode - integer - File Mode (permissions) will default to 420 (octal 0644 in integer)
            //onEntry - function - if present, will be called with (entry, zipfile), entry is every entry from the zip file forwarded from the entry event from yauzl. zipfile is the yauzl instance
            //Default modes are only used if no permissions are set in the zip file.
            //CLI Usage
            //extract-zip foo.zip <targetDirectory>
            //If not specified, targetDirectory will default to process.cwd().      
            //-------------------------
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                var extract = require('extract-zip');
                console.log('start Zip file ' + zipFileFullName + ' was unzipped to folder: ' + unzipFolderFullName);
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var unzipFolderFullName = unzipStorageName + unzipFolderName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(unzipStorageName);
                aFileInfo.setPath(unzipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(zipStorageName);
                aFileInfo2.setPath(zipFolderName);
                aFileInfo2.setName(zipFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                extract(zipFileFullName, { dir: unzipFolderFullName }, function (err) {
                    //handle the err
                    if (err) {
                        console.error(err);
                        console.log('Error unzip file ' + zipFileFullName + ' to folder: ' + unzipFolderFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(6010, 'Error unzip file ' + zipFileFullName + ' to folder: ' + unzipFolderFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //extraction is complete
                    console.log('Zip file ' + zipFileFullName + ' was unzipped to folder: ' + unzipFolderFullName);
                    context.setResult('Zip file ' + zipFileFullName + ' was unzipped to folder: ' + unzipFolderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.unzipFile2_old = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                //this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);      
                var unzip = require('unzip');
                var fs = require('fs');
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(unzipStorageName);
                aFileInfo.setPath(unzipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(zipStorageName);
                aFileInfo2.setPath(zipFolderName);
                aFileInfo2.setName(zipFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var unzipFolderFullName = unzipStorageName + unzipFolderName;
                // extract zip file to the specified path 
                // the extracted content from your zip file will be found in whatever the 'output/path' is in this case.
                fs.createReadStream(zipFileFullName).pipe(unzip.Extract({ path: unzipFolderFullName })).on("end", function () {
                    console.log("done");
                });
            };
            /*
            var unzip = require('unzip');
           var fs = require('fs');
        
        
        var inputFileName = 'C:/kalliphant/input.zip';
        var fileToExtract = "directory/file_to_extract";
        var extractToDirectory = 'C:/kalliphant/outputdir';
        
        
        fs.createReadStream(inputFileName)
            .pipe(unzip.Parse())
            .on('entry', function (entry) {
        
                if (entry.path === fileToExtract) {
                    console.log('Extracting file ' + fileToExtract);
        
                    var fileName = fileToExtract.replace(/^.*[/]/, '');
                    entry.pipe(fs.createWriteStream(extractToDirectory + fileName));
                } else {
                    entry.autodrain();
                }
          });
          */
            //------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            };
            //-------------- 
            // temporary - will be moved to the write place
            //--------------
            //------------------------
            //    Move File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName(dstFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName(srcFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                var fs = require('fs-extra');
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                // Async with callbacks:
                fs.move(srcFileFullName, dstFileFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('Error moving file ' + srcFileFullName + ' to folder: ' + dstFileFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5010, 'Error moving file ' + srcFileFullName + ' to file: ' + dstFileFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('File ' + srcFileFullName + ' moved to file: ' + dstFileFullName);
                    context.setResult('File ' + srcFileFullName + ' moved to file: ' + dstFileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //------------------------
            //    Upload File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
                //https://github.com/request/request-promise#api-in-detail
                //npm install --save request
                //npm install --save request-promise
                // request is defined as a peer-dependency and thus has to be installed separately.
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(srcStorageName);
                aFileInfo.setPath(srcFolderName);
                aFileInfo.setName(srcFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var rp = require('request-promise');
                var fs = require('fs');
                var fileFullName = srcStorageName + srcFolderName + srcFileName;
                var options = {
                    method: 'POST',
                    uri: remoteUrlName,
                    formData: {
                        // Like <input type="text" name="name">
                        name: 'Jenn',
                        // Like <input type="file" name="file">
                        file: {
                            value: fs.createReadStream(fileFullName),
                            options: {
                                filename: srcFileName,
                                contentType: 'application/octet-stream' //'image/jpg'
                            }
                        }
                    },
                    headers: {
                    /* 'content-type': 'multipart/form-data' */ // Is set automatically
                    }
                };
                rp(options)
                    .then(function (body) {
                    // POST succeeded...
                    console.log(JSON.stringify(body));
                    console.log('Upload of file : ' + fileFullName + ' succeeded');
                    context.setResult(fileFullName);
                    context.setBoolResult(true);
                    context.setResult(JSON.stringify(body));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                })
                    .catch(function (err) {
                    // POST failed...
                    console.log(err);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(2010, 'Error Uploading file :' + fileFullName + ' to ' + remoteUrlName + ' ' + JSON.stringify(err));
                    if (callback != null)
                        callback(context);
                });
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //------------------------
            //    Zip File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                var zip = require('file-zip');
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var fileFullName = storageName + folderName + fileName;
                //compressed file
                zip.zipFile([fileFullName], zipFileFullName, function (err) {
                    if (err) {
                        //console.error(err);
                        console.log('zip-file error. Error zipping file ' + fileFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(6011, 'zip-file error. Error zipping file ' + fileFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('zip-file succeeded: File ' + fileFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setResult('zip-file succeeded: File ' + fileFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //============================================
            //  folder methods 
            //============================================
            //---------------------------------------
            //   create folder 
            //---------------------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.createFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
                var fs = require('fs-extra');
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                fs.mkdirs(folderFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('Error creating folder ' + folderFullName + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(1010, 'Error creating ' + folderFullName + ' ' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('Folder ' + folderFullName + 'created');
                    context.setResult(folderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.createFolder2_old = function (storageName, folderName, error, context, callback) {
                var fs = require('fs');
                var folderFullName = storageName + folderName;
                function ensureDirSync(dirpath) {
                    try {
                        fs.mkdirSync(dirpath, { recursive: true });
                    }
                    catch (err) {
                        if (err.code !== 'EEXIST')
                            throw err;
                    }
                }
                try {
                    //--- folder created succesfully
                    ensureDirSync(folderFullName);
                    console.log('Folder ' + folderFullName + 'created');
                    context.setResult(folderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                catch (err) {
                    //console.error(err);
                    console.log('Error creating folder ' + folderFullName + JSON.stringify(err));
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(1010, 'Error creating ' + folderFullName + ' ' + JSON.stringify(err));
                    if (callback != null)
                        callback(context);
                    return;
                }
            };
            //---------------------------------
            //
            //---------------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.deleteFolder = function (folderFullName, error, context, callback) {
                var fs = require('fs');
                var deleteFolderRecursive = function (path, err) {
                    if (fs.existsSync(path)) {
                        fs.readdirSync(path).forEach(function (file, index) {
                            var curPath = path + "/" + file;
                            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                                deleteFolderRecursive(curPath, err);
                            }
                            else { // delete file
                                try {
                                    fs.unlinkSync(curPath);
                                }
                                catch (e) {
                                    err.setError(1001, JSON.stringify(e));
                                }
                            }
                        });
                        try {
                            fs.rmdirSync(path);
                        }
                        catch (e) {
                            err.setError(1002, JSON.stringify(e));
                        }
                    }
                };
                deleteFolderRecursive(folderFullName, error);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            //---------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
                var fs = require('fs-extra');
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                fs.remove(folderFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('Error deleting folder ' + folderFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5011, 'Error deleting folder ' + folderFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('Folder ' + folderFullName + ' deleted completely');
                    context.setResult(folderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //---------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.deleteFolder2_old = function (storageName, folderName, error, context, callback) {
                var fs = require('fs');
                var deleteFolderRecursive = function (path, err) {
                    if (fs.existsSync(path)) {
                        fs.readdirSync(path).forEach(function (file, index) {
                            var curPath = path + "/" + file;
                            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                                deleteFolderRecursive(curPath, err);
                            }
                            else { // delete file
                                try {
                                    fs.unlinkSync(curPath);
                                }
                                catch (e) {
                                    err.setError(1001, JSON.stringify(e));
                                }
                            }
                        });
                        try {
                            fs.rmdirSync(path);
                        }
                        catch (e) {
                            err.setError(1002, JSON.stringify(e));
                        }
                    }
                };
                var folderFullName = storageName + folderName;
                deleteFolderRecursive(folderFullName, error);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            /**
             $ npm install del
             Usage
                const del = require('del');
         
                (async () => {
                    const deletedPaths = await del(['tmp/*.js', '!tmp/unicorn.js']);
                
                    console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
                })();
            */
            //----------------------------------- not used --
            IImpl_SDK_FileSystem_NodeJs.prototype.asyncDeleteFolder = function () {
                var fs = require('fs');
                var rmdirAsync = function (path, callback) {
                    fs.readdir(path, function (err, files) {
                        if (err) {
                            // Pass the error on to callback
                            callback(err, []);
                            return;
                        }
                        var wait = files.length, count = 0, folderDone = function (err) {
                            count++;
                            // If we cleaned out all the files, continue
                            if (count >= wait || err) {
                                fs.rmdir(path, callback);
                            }
                        };
                        // Empty directory to bail early
                        if (!wait) {
                            folderDone(err);
                            return;
                        }
                        // Remove one or more trailing slash to keep from doubling up
                        path = path.replace(/\/+$/, "");
                        files.forEach(function (file) {
                            var curPath = path + "/" + file;
                            fs.lstat(curPath, function (err, stats) {
                                if (err) {
                                    callback(err, []);
                                    return;
                                }
                                if (stats.isDirectory()) {
                                    rmdirAsync(curPath, folderDone);
                                }
                                else {
                                    fs.unlink(curPath, folderDone);
                                }
                            });
                        });
                    });
                };
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            };
            //-------------------------------------------------------------
            //    copy folder 
            //-------------------------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_NodeJs.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                var fs = require('fs-extra');
                var srcFolderFullName = srcStorageName + srcFolderName;
                var dstFolderFullName = dstStorageName + dstFolderName;
                var owner = this._owner;
                //----
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName("");
                aFileInfo2.setType("folder");
                context.setObject2Result(aFileInfo2);
                // Async with callbacks:
                fs.copy(srcFolderFullName, dstFolderFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('Error copying folder ' + srcFolderFullName + ' to folder: ' + dstFolderFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5010, 'Error copying folder ' + srcFolderFullName + ' to folder: ' + dstFolderFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('Folder ' + srcFolderFullName + ' completely copied to folder: ' + dstFolderFullName);
                    context.setResult('Folder ' + srcFolderFullName + ' completely copied to folder: ' + dstFolderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //---------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //copy files
            //copyDirectoryRecursiveSync(sourceDir, targetDir);
            //move files
            //copyDirectoryRecursiveSync(sourceDir, targetDir, true);
            //-------------------------------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.copyDirectoryRecursiveSync = function (source, target, move) {
                var fs = require('fs');
                var path = require('path');
                if (!fs.lstatSync(source).isDirectory())
                    return;
                var operation = move ? fs.renameSync : fs.copyFileSync;
                fs.readdirSync(source).forEach(function (itemName) {
                    var sourcePath = path.join(source, itemName);
                    var targetPath = path.join(target, itemName);
                    if (fs.lstatSync(sourcePath).isDirectory()) {
                        fs.mkdirSync(targetPath);
                        this.copyDirectoryRecursiveSync(sourcePath, targetPath, move);
                    }
                    else {
                        operation(sourcePath, targetPath);
                    }
                });
            };
            //------------------------
            //    Move Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                var fs = require('fs-extra');
                var srcFolderFullName = srcStorageName + srcFolderName;
                var dstFolderFullName = dstStorageName + dstFolderName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName("");
                aFileInfo2.setType("folder");
                context.setObject2Result(aFileInfo2);
                // Async with callbacks:
                fs.move(srcFolderFullName, dstFolderFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('Error moving folder ' + srcFolderFullName + ' to folder: ' + dstFolderFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5010, 'Error moving folder ' + srcFolderFullName + ' to folder: ' + dstFolderFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('Folder ' + srcFolderFullName + ' completely moved to folder: ' + dstFolderFullName);
                    context.setResult('Folder ' + srcFolderFullName + ' completely moved to folder: ' + dstFolderFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Zip Folder
            //------------------------
            //https://github.com/chenqf/file-zip
            //npm install file-zip --save
            //var zip = require('file-zip');
            //compressed folder 
            /*zip.zipFolder(['./folder1','./folder2'],'out.zip',function(err){
                if(err){
                    console.log('zip error',err)
                }else{
                    console.log('zip success');
                }
            })
            // compressed file
            zip.zipFile(['./file1.txt','./file2.txt'],'out.zip',function(err){
                if(err){
                    console.log('zip error',err)
                }else{
                    console.log('zip success');
                }
            })
            // decompression
            zip.unzip('out.zip','dist',function(err){
                if(err){
                        console.log('unzip error',err)
                    }else{
                        console.log('unzip success');
                    }
            })*/
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //---------------------------
            //npm install zip-dir
            // https://www.npmjs.com/package/zip-dir
            //---------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var zipdir = require('zip-dir');
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(zipStorageName);
                aFileInfo.setPath(zipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var folderFullName = storageName + folderName;
                //zipdir(folderFullName, function (err, buffer) {
                // `buffer` is the buffer of the zipped file
                //});
                zipdir(folderFullName, { saveTo: zipFileFullName }, function (err, buffer) {
                    if (err) {
                        console.error(err);
                        console.log('zip-folder error. Error zipping folder ' + folderFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(6010, 'zip-folder error. Error zipping folder ' + folderFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('zip-folder succeeded: Folder ' + folderFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setResult('zip-folder succeeded: Folder ' + folderFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
                // Use a filter option to prevent zipping other zip files!
                // Keep in mind you have to allow a directory to descend into!
                //zipdir('/path/to/be/zipped', { filter: (path, stat) => !/\.zip$/.test(path) }, function (err, buffer) {
                //});
                // Use an `each` option to call a function everytime a file is added, and receives the path
                //zipdir('/path/to/be/zipped', { each: path => console.log(p, "added!"), function (err, buffer) {
                //});
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.zipFolder2_prev = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(zipStorageName);
                aFileInfo.setPath(zipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                var zip = require('file-zip');
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var folderFullName = storageName + folderName;
                //compressed folder 
                zip.zipFolder([folderFullName], zipFileFullName, function (err) {
                    if (err) {
                        console.error(err);
                        console.log('zip-folder error. Error zipping folder ' + folderFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(6010, 'zip-folder error. Error zipping folder ' + folderFullName + ' to archive: ' + zipFileFullName + ' :' + JSON.stringify(err));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('zip-folder succeeded: Folder ' + folderFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setResult('zip-folder succeeded: Folder ' + folderFullName + ' was zipped to archive: ' + zipFileFullName);
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                });
            };
            //-------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------
            //  folder exists
            //-------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_NodeJs.prototype.folderExists = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            //----------------------
            //  compute file sha 
            //  and save sha in file
            //-----------------------
            /*
              const crypto = require('crypto');
              const fs = require('fs');
              const hmac = crypto.createHmac('sha256', 'a secret');
          
              const input = fs.createReadStream('test.js');
              input.pipe(hmac).pipe(process.stdout);
             */
            /*
            function fileHash(filename, algorithm = 'md5') {
              return new Promise((resolve, reject) => {
                // Algorithm depends on availability of OpenSSL on platform
                // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
                let shasum = crypto.createHash(algorithm);
                try {
                  let s = fs.ReadStream(filename)
                  s.on('data', function (data) {
                    shasum.update(data)
                  })
                  // making digest
                  s.on('end', function () {
                    const hash = shasum.digest('hex')
                    return resolve(hash);
                  })
                } catch (error) {
                  return reject('calc fail');
                }
              });
            }
            */
            //--------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
                //const crypto = require('crypto');
                if ((shaProperties === null) && (shaProperties.getSrcFileInfo() === null)) {
                    console.log("nodejs:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5054, "tizen:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    if (callback != null)
                        callback(context);
                }
                var storageName = shaProperties.getSrcFileInfo().getStorage();
                var folderName = shaProperties.getSrcFileInfo().getPath();
                var fileName = shaProperties.getSrcFileInfo().getName();
                var fs = require('fs');
                var fileFullName = storageName + folderName + fileName;
                //----
                var owner = this._owner;
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(storageName);
                aFileInfo2.setPath(folderName);
                aFileInfo2.setName(fileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //--------------------------------------------------
                // open the file in read mode "r" (after we obtained the file object)
                var callback_fileObjectObtained = function (handle) {
                    //------------------------------npm start
                    var sha256 = new rmAsmCrypto.Sha256();
                    //const hmac = crypto.createHmac('sha256','');
                    //let shasum = crypto.createHash('sha256');
                    var i = 1;
                    try {
                        var CHUNK_SIZE = 128 * 512;
                        var readerStream = fs.createReadStream(fileFullName, { highWaterMark: CHUNK_SIZE });
                        //let chunks = [];
                        //----------------------------
                        // Set the encoding to be utf8. 
                        //readerStream.setEncoding('UTF8');
                        //readerStream.setEncoding('UTF8');
                        readerStream.setEncoding('binary');
                        //----------------------------
                        // Handle stream events --> data, end, and error
                        readerStream.on('data', function (chunk) {
                            var raw = rmAsmCrypto.string_to_bytes(chunk); //new Uint8Array(chunk); //fs.readBytes(CHUNK_SIZE));
                            sha256.process(raw);
                            //hmac.update(chunk,'binary');
                            //shasum.update(chunk, 'binary');
                            //console.log(""+i++);
                            //data += chunk;//chunks.push(chunk);
                        });
                        //----------------------------
                        readerStream.on('close', function () {
                            //console.log(data); // Create a buffer of the image from the stream  return cb(null, Buffer.concat(chunks));
                            var hash = sha256.finish().result;
                            //fs.close();
                            //fs = null;
                            //handle = null;
                            var res = rmAsmCrypto.bytes_to_hex(hash);
                            //var res = hmac.digest('hex');
                            //var res = shasum.digest('hex');
                            sha256 = null;
                            context.setResult(res);
                            shaProperties.setShaString(res);
                            //------
                            console.log("nodejs:compute-filesha2 ok: Successfully compute the sha of the file: " + fileFullName);
                            //context.setResult("nodejs:compute-filesha2 ok: Successfully compute the file sha " + fileFullName); 
                            console.log(res);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                            return;
                        });
                        //----------------------------
                        readerStream.on('error', function (err) {
                            //console.log(err.stack);
                            //console.log(JSON.stringify(error));
                            console.log("nodejs:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]");
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(5082, "nodejs:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]");
                            if (callback != null)
                                callback(context);
                            return;
                        });
                    }
                    catch (e) {
                        console.log("nodejs:compute-filesha2 error [8083]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5085, "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                        return;
                    }
                };
                //--------------------------------------------------
                // obtain the file length
                try {
                    fs.stat(storageName + folderName + fileName, function (err, stats) {
                        if (err) {
                            //console.log(stats.isDirectory());
                            console.log("nodejs:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + +JSON.stringify(stats));
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(9084, +"nodejs:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + +JSON.stringify(stats));
                            if (callback != null)
                                callback(context);
                            return;
                        }
                        if (stats.isDirectory()) {
                            //console.log(stats.isDirectory());
                            console.log("nodejs:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder");
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(9085, +"nodejs:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder");
                            if (callback != null)
                                callback(context);
                            return;
                        }
                        //-------------------- 
                        console.log("nodejs:compute-filesha2 trace. statsObtained : " + JSON.stringify(stats));
                        callback_fileObjectObtained(stats);
                    });
                }
                catch (e) {
                    console.log(+"nodejs:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(9086, +"nodejs:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                    return;
                }
            };
            //-----------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                var thisInterface = this;
                //-----
                var callback2 = function (ctx1) {
                    if (ctx1.isError()) {
                        if (callback != null)
                            callback(ctx1);
                        return;
                    }
                    //var srcStorageName = shaProperties.getSrcFileInfo().getStorage();
                    //var srcFolderName = shaProperties.getSrcFileInfo().getPath();
                    //var srcFileName = shaProperties.getSrcFileInfo().getName();
                    var shaString = shaProperties.getShaString();
                    var shaStorageName = shaProperties.getShaFileInfo().getStorage();
                    var shaFolderName = shaProperties.getShaFileInfo().getPath();
                    var shaFileName = shaProperties.getShaFileInfo().getName();
                    //-------------
                    var callback3 = function (ctx2) {
                        if (!ctx2.isError()) {
                            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                            aFileInfo.setStorage(shaStorageName);
                            aFileInfo.setPath(shaFolderName);
                            aFileInfo.setName(shaFileName);
                            aFileInfo.setType("file");
                            context.setObjectResult(aFileInfo);
                        }
                        else {
                            ctx2.setObjectResult(ctx2.getObject2Result());
                        }
                        context.setResult(shaProperties.getShaString());
                        if (callback != null)
                            return callback(ctx2);
                    };
                    thisInterface.writeTextFile2(shaStorageName, shaFolderName, shaFileName, shaString, error, ctx1, callback3);
                };
                this.computeFileSha2(shaProperties, error, context, callback2);
            };
            //-----------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            };
            //========================
            // read and parse xml file
            //========================
            //--------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
            };
            //--------------------------
            IImpl_SDK_FileSystem_NodeJs.prototype.parseXMLString = function (xmlString, error, context, callback) {
                var DomParser = require('dom-parser');
                var parser = new DomParser();
                var xmlDoc = parser.parseFromString(xmlString);
                console.log(xmlDoc);
            };
            return IImpl_SDK_FileSystem_NodeJs;
        }(rmTransversalServicesFileSystemJsTV.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R));
        nm_transversalservices.IImpl_SDK_FileSystem_NodeJs = IImpl_SDK_FileSystem_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FileSystem_NodeJs.js.map