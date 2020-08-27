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
define(["require", "exports", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcryptoes5/entry-export_all", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R"], function (require, exports, rmAsmCrypto, rmTransversalServicesFileSystemJsTVJsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        //declare var tizen : any;
        var IImpl_SDK_FileSystem_Tizen = /** @class */ (function (_super) {
            __extends(IImpl_SDK_FileSystem_Tizen, _super);
            //----------- constructor 
            function IImpl_SDK_FileSystem_Tizen(owner) {
                var _this = _super.call(this, owner) || this;
                _this._owner = owner;
                return _this;
            }
            //--------------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileSha = function (storageName, folderName, fileName, error, context, callback) {
            };
            //----------------------
            //  compute file sha 
            //  and save sha in file
            //-----------------------
            //--------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
                if ((shaProperties === null) && (shaProperties.getSrcFileInfo() === null)) {
                    console.log("tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error: error [5051]: srcFileInfo is null" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5054, "tizen:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    if (callback != null)
                        callback(context);
                }
                var storageName = shaProperties.getSrcFileInfo().getStorage();
                var folderName = shaProperties.getSrcFileInfo().getPath();
                var fileName = shaProperties.getSrcFileInfo().getName();
                //document.getElementById("sdk.message").innerHTML += "<p>computeFileSha2</p>";
                var fileFullName = storageName + folderName + fileName;
                //----
                var owner = this._owner;
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(storageName);
                aFileInfo2.setPath(folderName);
                aFileInfo2.setName(fileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //-----------
                var callback_fileOpened = function (handle, fs) {
                    try {
                        //var ds = moment(new Date());
                        var sha256 = new rmAsmCrypto.Sha256();
                        var stringRaw = "";
                        var offset = 0;
                        var processed = 0;
                        var CHUNK_SIZE = 128 * 512;
                        var div = Math.floor(handle.fileSize / CHUNK_SIZE);
                        var rem = handle.fileSize % CHUNK_SIZE;
                        for (var cnt = 0; cnt < div; cnt++) {
                            var raw = new Uint8Array(fs.readBytes(CHUNK_SIZE)); //rmAsmCrypto.string_to_bytes(fs.readBytes(CHUNK_SIZE));//new Uint8Array(fs.readBytes(CHUNK_SIZE));
                            sha256.process(raw);
                        }
                        if (rem > 0) {
                            raw = new Uint8Array(fs.readBytes(rem)); //rmAsmCrypto.string_to_bytes(fs.readBytes(rem)); //new Uint8Array(fs.readBytes(rem));
                            sha256.process(raw);
                        }
                        //var de = moment(new Date());
                        //var duration = moment.duration(de.diff(ds));
                        //Helper.logToMain(`Sha generated in ${duration.asMinutes()} minutes, and file has ${handle.fileSize * 0.000001} MB`);
                        var hash = sha256.finish().result;
                        fs.close();
                        fs = null;
                        handle = null;
                        sha256 = null;
                        var res = rmAsmCrypto.bytes_to_hex(hash);
                        //context.setObjectResult(res); 
                        context.setResult(res);
                        shaProperties.setShaString(res);
                        //------
                        console.log("tizen:compute-filesha2 ok: Successfully compute the file " + fileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 ok: Successfully compute the file " + fileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                        //------- error 
                    }
                    catch (e) {
                        console.log("tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // open the file in read mode "r" (after we obtained the file object)
                var callback_fileObjectObtained = function (handle) {
                    //------------------------------
                    try {
                        handle.openStream("r", //FileMode mode,
                        //------------
                        //onsuccess,
                        //----------- 
                        function (fs) {
                            //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(fs) + "</p>"; 
                            callback_fileOpened(handle, fs);
                        }, 
                        //----------
                        // onerror
                        //----------
                        function (e) {
                            //console.log(JSON.stringify(error));
                            console.log("tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                            if (context.getError() != null)
                                context.getError().setError(5084, "tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        }, 
                        //   
                        "UTF-8" //optional DOMString? encoding) 
                        ); //raises(WebAPIException);
                    }
                    catch (e) {
                        console.log("tizen:compute-filesha2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5085, "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // obtain the file object
                tizen.filesystem.resolve(storageName + folderName + fileName, 
                //----------- 
                function (handle) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>"+ "tizen:compute-filesha2 trace. fileObjectObtained : " + JSON.stringify(handle) + "</p>"; 
                    callback_fileObjectObtained(handle);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:compute-filesha2 error [5086]: Cannot compute file sha " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error [5086]: Cannot compute file  sha. Cannot find " + fileFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5086, "tizen:compute-filesha2 error [5086]: Cannot compute file  sha. Cannot find " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-----------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
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
            IImpl_SDK_FileSystem_Tizen.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            };
            //===========================
            //   Folder FileList functions 
            //===========================
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList = function (folderFullName, error, context, callback) {
            };
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " +  storageName + ' ' +folderName + "</p>";
                var owner = this._owner;
                var aFileInfoRoot = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfoRoot.setStorage(storageName);
                aFileInfoRoot.setPath(folderName);
                aFileInfoRoot.setName("");
                aFileInfoRoot.setType("folder");
                context.setObjectResult(aFileInfoRoot);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 before try: " +  storageName + ' ' +folderName + "</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 file: " +  fileinfo.name + "</p>";
                                aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo.setName(fileinfo.name);
                                aFileInfo.setStorage(storageName);
                                aFileInfo.setPath(folderName);
                                var aCreatedDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
                                aCreatedDate.setDateTime(fileinfo.created.year, fileinfo.created.monthIndex + 1, fileinfo.created.date, fileinfo.created.hours, fileinfo.created.minutes, fileinfo.created.seconds, fileinfo.created.milliseconds);
                                aFileInfo.setCreatedDate(aCreatedDate);
                                //aFileInfo.setCreatedDate();
                                if (fileinfo.isFile) {
                                    aFileInfo.setType("file");
                                    aFileInfo.setSize(fileinfo.fileSize);
                                }
                                else {
                                    aFileInfo.setType("folder");
                                    aFileInfo.setSize(0);
                                }
                                fileInfoList.push(aFileInfo);
                            }
                            context.setArrayResult(fileInfoList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //-----------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " +  storageName + ' ' +folderName + "</p>";
                var owner = this._owner;
                var aFileInfoRoot = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfoRoot.setStorage(storageName);
                aFileInfoRoot.setPath(folderName);
                aFileInfoRoot.setName("");
                aFileInfoRoot.setType("folder");
                context.setObjectResult(aFileInfoRoot);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 before try: " +  storageName + ' ' +folderName + "</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            var nbFiles = 0;
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 file: " +  fileinfo.name + "</p>";
                                if (fileinfo.isFile) {
                                    nbFiles++; //aFileInfo.setType("file");
                                }
                                else {
                                    ; //aFileInfo.setType("folder");
                                }
                            }
                            context.setIntResult(nbFiles);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList2_last = function (storageName, folderName, error, context, callback) {
                document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " + storageName + ' ' + folderName + "</p>";
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : before try</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : resolve ok</p>";
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2" +  fileinfo.name + "</p>";
                                aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo.setName(fileinfo.name);
                                aFileInfo.setStorage(storageName);
                                aFileInfo.setPath(folderName);
                                //aFileInfo.setCreatedDate();
                                if (fileinfo.isFile) {
                                    aFileInfo.setType("file");
                                    aFileInfo.setSize(fileinfo.fileSize);
                                }
                                else {
                                    aFileInfo.setType("folder");
                                    aFileInfo.setSize(0);
                                }
                                fileInfoList.push(aFileInfo);
                            }
                            //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 success </p>";
                            context.setArrayResult(fileInfoList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : listFilesErrors " + listFilesError.message + "</p>";
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : resolve error " + resolveError.message + "</p>";
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : before try" + JSON.stringify(e) + "</p>";
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //----------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList4 = function (storageName, folderFullName, error, context, callback) {
                var fileList = [];
                try {
                    tizen.filesystem.resolve(storageName + folderFullName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileName = files[i].name;
                                fileList.push(fileName);
                            }
                            context.setArrayResult(fileList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //==============================
            //   File Functions 
            //=============================
            //---------------------
            //  read text file
            //--------------------
            //--------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile = function (fileFullName, error, context, callback) {
            };
            //--------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                if (files[i].name == fileName) {
                                    var file = removableStorage.resolve(fileName);
                                    if (file != null) {
                                        file.openStream("r", function (fs) {
                                            var fileContent = fs.read(file.fileSize);
                                            fs.close();
                                            context.setError(error);
                                            context.setResult(fileContent);
                                            if (callback != null)
                                                callback(context);
                                        }, function (e) {
                                            console.log("Error " + e.message);
                                            error.setError(775, JSON.stringify(e.message));
                                            context.setError(error);
                                            if (callback != null)
                                                callback(context);
                                        });
                                    }
                                }
                            }
                        }, function (listFilesError) {
                            error.setError(776, listFilesError.code + " " + listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(777, resolveError.code + " " + resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(778, JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                //no need to call this:
                // this.readTextFile(storageName + folderName + fileName, error, context, callback);            
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //----------------------
            //   write  text file
            //----------------------
            //-----------------
            IImpl_SDK_FileSystem_Tizen.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var mode = "w";
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        try {
                            var file = removableStorage.resolve(fileName);
                            if (file == null) {
                                file = removableStorage.createFile(fileName);
                                mode = "w";
                            }
                        }
                        catch (e) {
                            file = removableStorage.createFile(fileName);
                            mode = "w";
                        }
                        if (file != null) {
                            file.openStream(mode, function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("success :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "File created fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            /*
            public writeTextFile4(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
            {
              var owner = this._owner;
              var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
              aFileInfo.setStorage(storageName);
              aFileInfo.setPath(folderName);
              aFileInfo.setName(fileName);
              aFileInfo.setType("file");
              context.setObjectResult(aFileInfo);
              try{
               tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                  var file = removableStorage.createFile(fileName);
                  if(file != null){
                    file.openStream("w",
                             function(fs) {
                                 fs.write(fileContent);
                                 fs.close();
                                 context.setResult("success :)");
                                 if (callback != null)
                                    callback(context);
                             }, function(e) {
                                error.setError(0,e.message);
                                context.setError(error);
                                if (callback != null)
                                  callback(context);
                             }, "UTF-8"
                         );
                  }else{
                    error.setError(0, "File created fail");
                    context.setError(error);
                    if (callback != null)
                       callback(context);
                  }
               
              });
              }
              catch(e){
                error.setError(0, e);
                context.setError(error);
                if (callback != null)
                   callback(context);
              }
            }*/
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            };
            //----------------------
            //  remove file 
            //----------------------
            //--------------------
            IImpl_SDK_FileSystem_Tizen.prototype.removeFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
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
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.deleteFile(removableStorage.path + removableStorage.name + "/" + fileName, function () {
                            console.log("tizen:remove-file2: ok. Successfully remove the file " + fileFullName);
                            context.setResult("tizen:remove-file2: ok. Successfully remove the file " + fileFullName);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (e) {
                            console.log("tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(5005, "tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        });
                    });
                }
                catch (e) {
                    console.log("tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5005, "tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            //   file exists
            //---------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //------------------------
            //  append text to file
            //------------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.appendTextToFile_old = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        var file = removableStorage.resolve(fileName);
                        if (file != null) {
                            file.openStream("a", function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("Append test to file completed with success. :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "Failed appending text to fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //----------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                //var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //aFileInfo.setStorage(storageName);
                //aFileInfo.setPath(folderName);
                //aFileInfo.setName(fileName);
                //aFileInfo.setType("file");
                //context.setObjectResult(aFileInfo);      
                var mode = "a";
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        try {
                            var file = removableStorage.resolve(fileName);
                            if (file == null) {
                                file = removableStorage.createFile(fileName);
                                mode = "w";
                            }
                        }
                        catch (e) {
                            file = removableStorage.createFile(fileName);
                            mode = "w";
                        }
                        if (file != null) {
                            file.openStream(mode, function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("success :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "File created fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            context.setBoolResult(false);
                            for (var i = 0; i < files.length; i++) {
                                if (files[i].name == fileName) {
                                    context.setBoolResult(true);
                                    break;
                                }
                            }
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //--------------------------------------
            //              copy file
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>copyFile2</p>";
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
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
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_copySuccess = function () {
                        console.log("tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                        context.setResult("tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_copyError = function (e) {
                        console.log("tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-file2 source file: " + objSrcStorage.fullPath + "/" + srcFileName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-file2 dest file: "   + objDstStorage.fullPath + "/" + dstFileName + "</p>"; 
                    objSrcStorage.copyTo(objSrcStorage.fullPath + "/" + srcFileName, objDstStorage.fullPath + "/" + dstFileName, true, callback_copySuccess, callback_copyError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + dstFolderName, 
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + srcFolderName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
                /*
                console.log("copy done");
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                  callback(context);
                */
                /*
               var localSrcStorageObj = null;
               tizen.filesystem.resolve(
                 srcStorageName, // + srcFolderName,
                 //----------------
                 function(srcStorageObj) {
                           localSrcStorageObj = srcStorageObj;
                           tizen.filesystem.resolve(
                             dstStorageName, //+ dstFolderName
                             //===
                             function(dstStorageObj) {
                                 
                               var srcFileFullName = localSrcStorageObj.fullPath + srcFolderName + srcFileName;
                               var dstFileFullName = dstStorageObj.fullPath + dstFolderName + dstFileName;
                               //----
                               function onSuccess() {
                                 console.log( "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                                 context.setResult( "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                                 document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                                 context.setError(error);
                                 if (callback != null)
                                   callback(context);
                               }
                               //----
                               var errorCallback = function(e) {
                                  console.log( "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                                  context.setError(error);
                                  document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "] </p>";
                                  if (context.getError() != null)
                                    context.getError().setError(5012, "tizen:copy-file4 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                                  if (callback != null)
                                    callback(context);
                               }
                               tizen.filesystem.copyFile(srcFileFullName, dstFileFullName, true, onSuccess, errorCallback);
                               
                             },
                             //========
                             function(e) {
                               console.log( "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                               context.setError(error);
                               document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>";
                               if (context.getError() != null)
                                 context.getError().setError(5012, "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                               if (callback != null)
                                 callback(context);
                             },
                             'rw'
                           );
                 },
                 //--------------------
                 function(e) {
                   console.log( "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                   context.setError(error);
                   document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>";
          
                   if (context.getError() != null)
                     context.getError().setError(5012, "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                   if (callback != null)
                     callback(context);
                 },
                 'rw'
               );
                */
                /*
                documentsDir.copyTo(files[i].fullPath,
                  "images/backup/" + files[i].name,
                  false,
                  function() {console.log("file copied");});
           
                var filePathAndName = 'documents/exampleFile.jpg';
                var destination = 'images/copyOfExampleFile.jpg';
           
                function onSuccess() {
                   console.log('success');
                }
                var errorCallback = function(error) {
                   console.log(error);
                }
                tizen.filesystem.copyFile(filePathAndName, destination, true, onSuccess, errorCallback);
                */
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      download File 
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      unzip File 
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //------------------------------------
            /*public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string,
                               unzipStorageName: string, unzipFolderName: string,
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
            {
              this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            }*/
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                //--------------------------------------------------------------------------
                document.getElementById("sdk.message").innerHTML += "<p>unzipFile2</p>";
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
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    function errorCallback(e) {
                        //console.log(error);
                        console.log("tizen:unzip-file2 error [5052]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5052]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                        if (context.getError() != null)
                            context.getError().setError(5052, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                    function successCallback() {
                        //console.log("done");
                        console.log("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        context.setResult("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                    function progressCallback(opId, val, name) {
                        console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                    }
                    function openSuccess(archive) {
                        try {
                            //---------------
                            archive.extractAll(unzipFolderFullName, successCallback, errorCallback, progressCallback); //"music"
                            //---------------
                        }
                        catch (e) {
                            console.log("tizen:unzip-file2 error [5053]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5053]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                            if (context.getError() != null)
                                context.getError().setError(5053, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        }
                    }
                    try {
                        //-------------------
                        tizen.archive.open(objSrcStorage, "r", openSuccess); //"downloads/some_archive.zip" //objSrcStorage.fullPath
                        //-------------------
                    }
                    catch (e) {
                        console.log("tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    callback_DstSrcStorage(objSrcStorage, null);
                    /*
                    //--------------------------------------------
                    tizen.filesystem.resolve(
                      unzipFolderFullName,
                      //-----------
                      function(objDstStorage) {
            
                        document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>";
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //--------------------
                      },
                      function(e) {
                        //console.log(JSON.stringify(error));
                        console.log( "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]" + "</p>";
                        if (context.getError() != null)
                          context.getError().setError(5055, "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                          callback(context);
              
                      },
                      'rw'
                    );*/
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(zipFileFullName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>";
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>";
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'r');
            };
            /*
            try{
              var openSuccess;
             tizen.filesystem.resolve("/opt/storage/usb/sda1/tests2/70.zip", (handle) => {
               if (handle) {
                 openSuccess = function (archive) {
                     document.getElementById("maindiv").innerHTML += "<h3>" + "inside openSuccess" + "</h3>";
                       tizen.filesystem.resolve("/opt/storage/usb/sda1/tests2/", (handle) => {
                           function errorCallback(error) {
                             document.getElementById("maindiv").innerHTML += "<h3>" + "error callback" + error +  "</h3>";
                           }
                           function successCallback() {
                             document.getElementById("maindiv").innerHTML += "<h3>" + "done" + "</h3>";
                           }
       
                           function progressCallback(opId, val, name) {
                           }
       
                           archive.extractAll(handle, successCallback, errorCallback, progressCallback);
                       }, (error) => {
                         document.getElementById("maindiv").innerHTML += "<h3>" + "error tizen resolve" + error +  "</h3>";
                       });
                   }
                    tizen.archive.open(handle, "r", openSuccess);
               }
               else {
                 document.getElementById("maindiv").innerHTML += "<h3>" + "handle problem" +  "</h3>";
               }
           }, (error) => {
             document.getElementById("maindiv").innerHTML += "<h3>" + "error" + error +  "</h3>";
           });
           }
            catch(e){
             document.getElementById("maindiv").innerHTML += "<h3>" + "error inside try" + e +  "</h3>";
             error.setError(0, e);
             context.setError(error);
             if (callback != null)
                   callback(context);
            }
            */
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                this.fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                this.getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //------------------------
            //    Move File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>moveFile2</p>";
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
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
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_moveSuccess = function () {
                        console.log("tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName);
                        context.setResult("tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_moveError = function (e) {
                        console.log("tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-file2 source file: " + objSrcStorage.fullPath + "/" + srcFileName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-file2 dest file: "   + objDstStorage.fullPath + "/" + dstFileName + "</p>"; 
                    objSrcStorage.moveTo(objSrcStorage.fullPath + "/" + srcFileName, objDstStorage.fullPath + "/" + dstFileName, true, callback_moveSuccess, callback_moveError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + dstFolderName, 
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + srcFolderName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //------------------------
            //    Upload File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //------------------------
            //    Zip File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //============================
            //  Folder functions
            //============================
            //------------------------
            //    Create Folder 2
            //------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.createFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
                //----
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                try {
                    tizen.filesystem.resolve(storageName, function (removableStorage) {
                        try {
                            removableStorage.createDirectory(folderName);
                            //document.getElementById("sdk.message").innerHTML += "<p>create crt-storage "   + storageName + "</p>";
                            //document.getElementById("sdk.message").innerHTML += "<p>create crt-folder "    + folderName + "</p>";    
                            console.log("tizen:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                            context.setResult("tizen:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                        catch (e) {
                            context.setError(error);
                            console.log("tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                            if (context.getError() != null)
                                context.getError().setError(5010, "tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    context.setError(error);
                    console.log("tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                    if (context.getError() != null)
                        context.getError().setError(5010, "tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------------
            //    Delete Folder 2
            //------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //------
                try {
                    tizen.filesystem.resolve(storageName, function (removableStorage) {
                        removableStorage.deleteDirectory(removableStorage.path + removableStorage.name + folderName, true, function () {
                            console.log("tizen:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                            context.setResult("tizen:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (e) {
                            console.log("tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(5011, "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        });
                    });
                }
                catch (e) {
                    console.log("tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5011, "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------------------------------
            //    copy folder 
            //-------------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>copyFolder2</p>";
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
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_copySuccess = function () {
                        console.log("tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        context.setResult("tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_copyError = function (e) {
                        console.log("tizen:copy-folder2 error [5054]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy folder " + + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:copy-folder2 error [5054]: Cannot copy folder " + +srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-folder2 source folder: " + objSrcStorage.fullPath + srcFolderName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-folder2 dest folder: "   + objDstStorage.fullPath + dstFolderName + "</p>"; 
                    objSrcStorage.copyTo(objSrcStorage.fullPath + srcFolderName, objDstStorage.fullPath + dstFolderName, true, callback_copySuccess, callback_copyError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + "/", //"dstFolderName,
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + "/", //srcFolderName,
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //---------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Move Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>moveFolder2</p>";
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
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_moveSuccess = function () {
                        console.log("tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        context.setResult("tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_moveError = function (e) {
                        console.log("tizen:move-folder2 error [5054]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5054]: Cannot move folder " + + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:move-folder2 error [5054]: Cannot move folder " + +srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-folder2 source folder: " + objSrcStorage.fullPath + srcFolderName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-folder2 dest folder: "   + objDstStorage.fullPath + dstFolderName + "</p>"; 
                    objSrcStorage.moveTo(objSrcStorage.fullPath + srcFolderName, objDstStorage.fullPath + dstFolderName, true, callback_moveSuccess, callback_moveError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + "/", //"dstFolderName,
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + "/", //srcFolderName,
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Zip Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //------------------
            //  exists folder
            //------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.folderExists = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            return IImpl_SDK_FileSystem_Tizen;
        }(rmTransversalServicesFileSystemJsTVJsTV.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R));
        nm_transversalservices.IImpl_SDK_FileSystem_Tizen = IImpl_SDK_FileSystem_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FileSystem_Tizen.js.map