"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmAsmCrypto = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcryptoes5/entry-export_all");
var rmTransversalServicesFileSystemJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R");
require("./cordova/cordova.webos");
require("./cordova/storage");
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_FileSystem_WebOS = (function (_super) {
        __extends(IImpl_SDK_FileSystem_WebOS, _super);
        function IImpl_SDK_FileSystem_WebOS(owner) {
            var _this = _super.call(this, owner) || this;
            _this._owner = owner;
            return _this;
        }
        IImpl_SDK_FileSystem_WebOS.prototype.getFileList = function (folderFullName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            var successCb = function (cbObject) {
                var files = cbObject.files;
                var aFileInfo = null;
                var fileInfoList = new Array();
                console.log(files.length);
                for (var i = 0; i < files.length; ++i) {
                    var fileInfo = files[i];
                    console.log(JSON.stringify(fileInfo));
                    aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aFileInfo.setName(fileInfo.name);
                    aFileInfo.setStorage("");
                    aFileInfo.setPath(folderFullName);
                    aFileInfo.setType(fileInfo.type);
                    aFileInfo.setSize(fileInfo.size);
                    fileInfoList.push(aFileInfo);
                }
                context.setArrayResult(fileInfoList);
                console.log("Successfully obtain the file list from folder " + folderFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                document.getElementById("testreadfile").innerHTML += " Error Code [" + errorCode + "]: " + errorText;
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_usb = {
                path: folderFullName
            };
            storage.listFiles(successCb, failureCb, options_usb);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                var files = cbObject.files;
                var aFileInfo = null;
                var fileInfoList = new Array();
                console.log(files.length);
                for (var i = 0; i < files.length; ++i) {
                    var fileInfo = files[i];
                    console.log(JSON.stringify(fileInfo));
                    aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aFileInfo.setName(fileInfo.name);
                    aFileInfo.setStorage(storageName);
                    aFileInfo.setPath(folderName);
                    aFileInfo.setType(fileInfo.type);
                    aFileInfo.setSize(fileInfo.size);
                    fileInfoList.push(aFileInfo);
                }
                context.setArrayResult(fileInfoList);
                console.log("Successfully obtain the file list from folder " + storageName + folderName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                document.getElementById("testreadfile").innerHTML += " Error Code [" + errorCode + "]: " + errorText;
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_usb = {
                path: storageName + folderName
            };
            storage.listFiles(successCb, failureCb, options_usb);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                var files = cbObject.files;
                console.log(files.length);
                var nbFiles = 0;
                for (var i = 0; i < files.length; ++i) {
                    var fileInfo = files[i];
                    if (fileInfo.type != "folder")
                        nbFiles++;
                }
                context.setIntResult(nbFiles);
                console.log("Successfully obtain the file number [" + nbFiles + "] from folder " + storageName + folderName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                document.getElementById("testreadfile").innerHTML += " Error Code [" + errorCode + "]: " + errorText;
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_usb = {
                path: storageName + folderName
            };
            storage.listFiles(successCb, failureCb, options_usb);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.readTextFile = function (fileFullName, error, context, callback) {
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
        IImpl_SDK_FileSystem_WebOS.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
            return new Promise(function (resolve, reject) {
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
        IImpl_SDK_FileSystem_WebOS.prototype.readTextFile2_crt = function (storageName, folderName, fileName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            var fileFullName = storageName + folderName + fileName;
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
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
        IImpl_SDK_FileSystem_WebOS.prototype.readFileByChunks = function (storage, chunkCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, buffSize, chunkSize, fileSize, fileFullName, context, error, callback) {
            var self = this;
            var successCb = function (cbObject) {
                var data_text = cbObject.data;
                context.setResult(context.getResult() + data_text);
                chunkCrtNo++;
                if ((chunkCrtNo == chunkTotalNb) ||
                    ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))) {
                    console.log("webos:read-textfile2 ok: Successfully read the file " + fileFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                if (chunkCrtNo + 1 == chunkTotalNb) {
                    self.readFileByChunks(storage, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkFinalRest, chunkSize, fileSize, fileFullName, context, error, callback);
                }
                else {
                    self.readFileByChunks(storage, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkSize, chunkSize, fileSize, fileFullName, context, error, callback);
                }
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:read-textfile2 ok: error [3081]: during sha computation of the file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(3081, "webos:read-textfile2 ok: error [3081]: during sha computation of the file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                if (callback != null)
                    callback(context);
            };
            var options = {
                path: fileFullName,
                position: fileCrtOffset,
                length: buffSize,
                encoding: 'utf8',
            };
            storage.readFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            var fileFullName = storageName + folderName + fileName;
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var self = this;
            var callback_fileStatObtained = function (cbObject) {
                try {
                    var fileSize = cbObject.size;
                    var CHUNK_SIZE = 1024 * 10;
                    var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
                    var chunkFinalRest = fileSize % CHUNK_SIZE;
                    chunkTotalNb++;
                    var chunckCrtNo = 0;
                    var fileCrtOffset = 0;
                    context.setResult("");
                    self.readFileByChunks(storage, chunckCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, CHUNK_SIZE, CHUNK_SIZE, fileSize, fileFullName, context, error, callback);
                }
                catch (e) {
                    console.log("webos:read-textfile2 ok: error [3085]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(3085, "webos:read-textfile2 ok: error [3085]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            var callback_fileStatError = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:read-textfile2 error [3086]: Cannot read file stat " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(3086, "webos:read-textfile2 error [3086]: Cannot read file stat " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var options = {
                path: fileFullName,
            };
            var storage = new Storage();
            storage.statFile(callback_fileStatObtained, callback_fileStatError, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            var aFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage("");
            aFileInfo.setPath("");
            aFileInfo.setName(fileFullName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
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
        IImpl_SDK_FileSystem_WebOS.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.writeTextFile2_crt = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("Successfully writen " + cbObject.written + " bytes");
                context.setError(error);
                context.setBoolResult(true);
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
            if (fileContent == "")
                fileContent = " ";
            var options = {
                data: fileContent,
                path: fileFullName,
                position: 0,
                flag: 'w',
                offset: 0,
                length: fileContent.length,
                encoding: 'utf8'
            };
            var storage = new Storage();
            storage.writeFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.writeFileByChunks = function (storage, fileContent, chunkCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, buffSize, chunkSize, fileSize, fileFullName, context, error, callback) {
            var self = this;
            var successCb = function (cbObject) {
                chunkCrtNo++;
                if ((chunkCrtNo == chunkTotalNb) ||
                    ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))) {
                    console.log("webos:read-textfile2 ok: Successfully write the file " + fileFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                if (chunkCrtNo + 1 == chunkTotalNb) {
                    self.writeFileByChunks(storage, fileContent, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkFinalRest, chunkSize, fileSize, fileFullName, context, error, callback);
                }
                else {
                    self.writeFileByChunks(storage, fileContent, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkSize, chunkSize, fileSize, fileFullName, context, error, callback);
                }
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:write-textfile2 ok: error [3081]: during write text file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(3081, "webos:write-textfile2 ok: error [3081]: during write text file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                if (callback != null)
                    callback(context);
            };
            var buffToWrite = "";
            var buffSize = 0;
            var writeMode = "append";
            if (chunkCrtNo == 0)
                writeMode = "truncate";
            if (chunkCrtNo + 1 == chunkTotalNb) {
                buffSize = chunkFinalRest;
                buffToWrite = fileContent.substring(fileCrtOffset, fileCrtOffset + chunkFinalRest);
            }
            else {
                buffSize = chunkSize;
                buffToWrite = fileContent.substring(fileCrtOffset, fileCrtOffset + chunkSize);
            }
            var options = null;
            if (chunkCrtNo == 0) {
                options = {
                    data: buffToWrite,
                    path: fileFullName,
                    position: 0,
                    flag: 'w',
                    offset: 0,
                    length: buffSize,
                    encoding: 'utf8'
                };
            }
            else {
                options = {
                    data: buffToWrite,
                    path: fileFullName,
                    mode: 'append',
                    position: 0,
                    flag: 'w',
                    offset: 0,
                    length: buffSize,
                    encoding: 'utf8'
                };
            }
            storage.writeFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            try {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var fileFullName = storageName + folderName + fileName;
                var self = this;
                if (fileContent == "")
                    fileContent = " ";
                var storage = new Storage();
                var fileSize = fileContent.length;
                var CHUNK_SIZE = 1024 * 10;
                var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
                var chunkFinalRest = fileSize % CHUNK_SIZE;
                chunkTotalNb++;
                var chunkCrtNo = 0;
                var fileCrtOffset = 0;
                self.writeFileByChunks(storage, fileContent, chunkCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, CHUNK_SIZE, CHUNK_SIZE, fileSize, fileFullName, context, error, callback);
            }
            catch (e) {
                console.log("webos:write-textfile2 ok: error [3075]: initial error writing on: " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(3075, "webos:read-textfile2 ok: error [3075]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                if (callback != null)
                    callback(context);
            }
        };
        IImpl_SDK_FileSystem_WebOS.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("Successfully writen " + cbObject.written + " bytes");
                context.setError(error);
                context.setBoolResult(true);
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
            if (fileContent == "")
                fileContent = " ";
            var options = {
                data: fileContent,
                path: fileFullName,
                mode: "append",
                position: 0,
                flag: 'w',
                offset: 0,
                length: fileContent.length,
                encoding: 'utf8'
            };
            var storage = new Storage();
            storage.writeFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.removeFile = function (fileFullName, error, context, callback) {
            var successCb = function () {
                console.log("Successfully remove the file " + fileFullName);
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
            var storage = new Storage();
            var options_file = {
                file: fileFullName
            };
            storage.removeFile(successCb, failureCb, options_file);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var successCb = function () {
                console.log("webos:remove-file2: ok. Successfully remove the file " + fileFullName);
                context.setResult("webos:remove-file2: ok. Successfully remove the file " + fileFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:remove-file2 error [6011]: Cannot delete Folder " + fileFullName + " : error [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6005, "webos:remove-file2 error [6011]: Cannot delete Folder " + fileFullName + " : error [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_file = {
                file: fileFullName
            };
            storage.removeFile(successCb, failureCb, options_file);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.fileExists = function (fileFullName, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("The file exists: " + cbObject.exists);
                context.setBoolResult(cbObject.exists);
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
            var existsOption = {
                path: fileFullName
            };
            var storage = new Storage();
            storage.exists(successCb, failureCb, existsOption);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("The file exists: " + cbObject.exists);
                context.setBoolResult(cbObject.exists);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                context.setBoolResult(false);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(errorCode, errorText);
                if (callback != null)
                    callback(context);
            };
            var existsOption = {
                path: fileFullName
            };
            var storage = new Storage();
            storage.exists(successCb, failureCb, existsOption);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
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
            var options = {
                source: srcFileFullName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
            var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(dstStorageName);
            aFileInfo.setPath(dstFolderName);
            aFileInfo.setName(dstFileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(srcStorageName);
            aFileInfo2.setPath(srcFolderName);
            aFileInfo2.setName(srcFileName);
            aFileInfo2.setType("file");
            context.setObject2Result(aFileInfo2);
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
            var options = {
                source: srcFileFullName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
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
            var options = {
                source: remoteUrlName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(dstStorageName);
            aFileInfo.setPath(dstFolderName);
            aFileInfo.setName(dstFolderName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
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
            var options = {
                source: remoteUrlName,
                destination: dstFileFullName
            };
            var storage = new Storage();
            storage.copyFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
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
        IImpl_SDK_FileSystem_WebOS.prototype.promise_unzipFile = function (zipFullFilename, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            var zipFullFileName = zipStorageName + zipFolderName + zipFileName;
            var unzipFullPath = unzipStorageName + unzipFolderName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(unzipStorageName);
            aFileInfo.setPath(unzipFolderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(zipStorageName);
            aFileInfo2.setPath(zipFolderName);
            aFileInfo2.setName(zipFileName);
            aFileInfo2.setType("file");
            context.setObject2Result(aFileInfo2);
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
        IImpl_SDK_FileSystem_WebOS.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            var fullFileName = storageName + folderName + fileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            var aCreationDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
            var aLastModifiedDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
            var aLastAccesseddDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName(fileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("Show File Stat: ");
                console.log("File Type: " + cbObject.type);
                console.log("File size (bytes): " + cbObject.size);
                console.log("Last Accessed: " + cbObject.atime);
                console.log("Last Modified: " + cbObject.mtime);
                console.log("Created: " + cbObject.ctime);
                aFileInfo.setSize(cbObject.size);
                context.setBoolResult(true);
                context.setError(error);
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
                path: fullFileName,
            };
            var storage = new Storage();
            storage.statFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
            var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(dstStorageName);
            aFileInfo.setPath(dstFolderName);
            aFileInfo.setName(dstFileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(srcStorageName);
            aFileInfo2.setPath(srcFolderName);
            aFileInfo2.setName(srcFileName);
            aFileInfo2.setType("file");
            context.setObject2Result(aFileInfo2);
            var successCb = function () {
                console.log("webos:move-file2 ok. Sucessfully move folder : " + srcFileFullName + " to " + +dstFileFullName);
                context.setResult("webos:move-file2 ok. Sucessfully move folder : " + srcFileFullName + " to " + +dstFileFullName);
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:move-file2 error: Error moving file : " + srcFileFullName + " to " +
                    dstFileFullName + " : Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(6020, "webos:move-file2 error: Error moving file : " + srcFileFullName + " to " +
                        dstFileFullName + " : Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                oldPath: srcFileFullName,
                newPath: dstFileFullName
            };
            var storage = new Storage();
            storage.moveFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.createFolder = function (folderFullName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage("");
            aFileInfo.setPath(folderFullName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("Directory " + folderFullName + " created");
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
            var storage = new Storage();
            var mkdirOption_usb = {
                path: folderFullName
            };
            storage.mkdir(successCb, failureCb, mkdirOption_usb);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
            var folderFullName = storageName + folderName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function (cbObject) {
                console.log("webos:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                context.setResult("webos:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:create-folder2 error [6010]: Cannot create Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6010, "webos:create-folder2 error [6010]: Cannot create Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var mkdirOption_usb = {
                path: folderFullName
            };
            storage.mkdir(successCb, failureCb, mkdirOption_usb);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage("");
            aFileInfo.setPath(folderFullName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function () {
                console.log("Successfully remove the file " + folderFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6011, "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_dir = {
                file: folderFullName,
                recursive: true
            };
            storage.removeFile(successCb, failureCb, options_dir);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
            var folderFullName = storageName + folderName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(storageName);
            aFileInfo.setPath(folderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var successCb = function () {
                console.log("webos:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                context.setResult("webos:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6011, "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var storage = new Storage();
            var options_dir = {
                file: folderFullName,
                recursive: true
            };
            storage.removeFile(successCb, failureCb, options_dir);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            var srcFolderFullName = srcStorageName + srcFolderName;
            var dstFolderFullName = dstStorageName + dstFolderName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(dstStorageName);
            aFileInfo.setPath(dstFolderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(srcStorageName);
            aFileInfo2.setPath(srcFolderName);
            aFileInfo2.setName("");
            aFileInfo2.setType("folder");
            context.setObject2Result(aFileInfo2);
            var successCb = function () {
                console.log("copy folder done");
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
            var options = {
                source: srcFolderFullName,
                destination: dstFolderFullName
            };
            var storage = new Storage();
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            var srcFolderFullName = srcStorageName + srcFolderName;
            var dstFolderFullName = dstStorageName + dstFolderName;
            var owner = this._owner;
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(dstStorageName);
            aFileInfo.setPath(dstFolderName);
            aFileInfo.setName("");
            aFileInfo.setType("folder");
            context.setObjectResult(aFileInfo);
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(srcStorageName);
            aFileInfo2.setPath(srcFolderName);
            aFileInfo2.setName("");
            aFileInfo2.setType("folder");
            context.setObject2Result(aFileInfo2);
            var successCb = function () {
                console.log("webos:move-folder-2 ok. Sucessfully move folder : " + srcFolderFullName + " to " + +dstFolderFullName);
                context.setResult("webos:move-folder-2 ok. Sucessfully move folder : " + srcFolderFullName + " to " + +dstFolderFullName);
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                    callback(context);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:move-folder-2 error: Error moving folder : " + srcFolderFullName + " to " +
                    dstFolderFullName + " : Error Code [" + errorCode + "]: " + errorText);
                if (error != null)
                    error.setError(6020, "webos:move-folder-2 error: Error moving folder : " + srcFolderFullName + " to " +
                        dstFolderFullName + " : Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            var options = {
                oldPath: srcFolderFullName,
                newPath: dstFolderFullName
            };
            var storage = new Storage();
            storage.moveFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.folderExists = function (folderFullName, error, context, callback) {
            var successCb = function (cbObject) {
                console.log("The folder exists: " + cbObject.exists);
                context.setBoolResult(cbObject.exists);
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
            var existsOption = {
                path: folderFullName
            };
            var storage = new Storage();
            storage.exists(successCb, failureCb, existsOption);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.api_statFile = function (callback) {
            var successCb = function (cbObject) {
                console.log("Show File Stat: ");
                console.log("File Type: " + cbObject.stat.type);
                console.log("File size (bytes): " + cbObject.stat.size);
                console.log("Last Accessed: " + cbObject.stat.atime);
                console.log("Last Modified: " + cbObject.stat.mtime);
                console.log("Created: " + cbObject.stat.ctime);
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
            };
            var options = {
                path: 'file://internal/myFile.txt',
            };
            var storage = new Storage();
            storage.statFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.api_writeFile_binary2 = function (buffer, bufLength, fileName, callback) {
            var successCb = function (cbObject) {
                console.log("Successfully writen " + cbObject.written + " bytes");
                document.getElementById("testreadfile").innerHTML += "<h3>FILE SAVED: " + fileName + " Size: " + bufLength + "</h3>";
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log(" Error Code [" + errorCode + "]: " + errorText);
                document.getElementById("testreadfile").innerHTML += "<h3>file NOT saved: " + fileName + " Error: " + errorText + "</h3>";
            };
            var options = {
                data: buffer,
                path: fileName,
                mode: "truncate",
                position: 0,
                flag: 'w',
                offset: 0,
                length: bufLength,
                encoding: 'base64'
            };
            var storage = new Storage();
            var max_size = 10240;
            var sizeToWrite = bufLength;
            var pos = 0;
            var length = 0;
            while (sizeToWrite > 0) {
                if (sizeToWrite > max_size)
                    length = max_size;
                else
                    length = sizeToWrite;
                var buffToWrite = buffer.substring(pos, pos + length);
                options.length = length;
                options.position = pos;
                options.mode = "truncate";
                if (pos > 0)
                    options.mode = "append";
                options.data = buffToWrite;
                storage.writeFile(successCb, failureCb, options);
                pos += length;
                sizeToWrite -= length;
            }
        };
        IImpl_SDK_FileSystem_WebOS.prototype.computeShaChunk = function (shaProperties, sha256, storage, chunkCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, buffSize, chunkSize, fileSize, fileFullName, context, error, callback) {
            var self = this;
            var successCb = function (cbObject) {
                var binary_data = cbObject.data;
                var raw = new Uint8Array(binary_data);
                sha256.process(raw);
                chunkCrtNo++;
                if ((chunkCrtNo == chunkTotalNb) ||
                    ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))) {
                    var hash = sha256.finish().result;
                    sha256 = null;
                    var res = rmAsmCrypto.bytes_to_hex(hash);
                    context.setResult(res);
                    shaProperties.setShaString(res);
                    console.log("webos:compute-filesha2 ok: Successfully compute the file " + fileFullName);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                if (chunkCrtNo + 1 == chunkTotalNb) {
                    self.computeShaChunk(shaProperties, sha256, storage, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkFinalRest, chunkSize, fileSize, fileFullName, context, error, callback);
                }
                else {
                    self.computeShaChunk(shaProperties, sha256, storage, chunkCrtNo, chunkTotalNb, fileCrtOffset + chunkSize, chunkFinalRest, chunkSize, chunkSize, fileSize, fileFullName, context, error, callback);
                }
            };
            var failureCb = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:compute-filesha2 ok: error [5055]: during sha computation of the file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(5055, "webos:compute-filesha2 ok: error [5055]: during sha computation of the file " + fileFullName + " : error [" + errorCode + " - " + errorText + "]");
                if (callback != null)
                    callback(context);
            };
            var options = {
                path: fileFullName,
                position: fileCrtOffset,
                length: buffSize,
                encoding: 'binary',
            };
            storage.readFile(successCb, failureCb, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
            if ((shaProperties === null) && (shaProperties.getSrcFileInfo() === null)) {
                console.log("webos:compute-filesha2 error: error [5051]: srcFileInfo is null");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(5054, "webos:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                if (callback != null)
                    callback(context);
            }
            var storageName = shaProperties.getSrcFileInfo().getStorage();
            var folderName = shaProperties.getSrcFileInfo().getPath();
            var fileName = shaProperties.getSrcFileInfo().getName();
            var fileFullName = storageName + folderName + fileName;
            var owner = this._owner;
            var self = this;
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(storageName);
            aFileInfo2.setPath(folderName);
            aFileInfo2.setName(fileName);
            aFileInfo2.setType("file");
            context.setObject2Result(aFileInfo2);
            var callback_fileStatObtained = function (cbObject) {
                var fileSize = cbObject.size;
                var sha256 = new rmAsmCrypto.Sha256();
                var CHUNK_SIZE = 1024 * 10;
                var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
                var chunkFinalRest = fileSize % CHUNK_SIZE;
                chunkTotalNb++;
                var chunckCrtNo = 0;
                var fileCrtOffset = 0;
                self.computeShaChunk(shaProperties, sha256, storage, chunckCrtNo, chunkTotalNb, fileCrtOffset, chunkFinalRest, CHUNK_SIZE, CHUNK_SIZE, fileSize, fileFullName, context, error, callback);
            };
            var callback_fileStatError = function (cbObject) {
                var errorCode = cbObject.errorCode;
                var errorText = cbObject.errorText;
                console.log("webos:compute-filesha2 error [6086]: Cannot compute file sha " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6086, "webos:compute-filesha2 error [6086]: Cannot compute file sha " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
                if (callback != null)
                    callback(context);
            };
            var options = {
                path: fileFullName,
            };
            var storage = new Storage();
            storage.statFile(callback_fileStatObtained, callback_fileStatError, options);
        };
        IImpl_SDK_FileSystem_WebOS.prototype.computeFileSha2_old = function (shaProperties, error, context, callback) {
            if ((shaProperties === null) && (shaProperties.getSrcFileInfo() === null)) {
                console.log("webos:compute-filesha2 error: error [5051]: srcFileInfo is null");
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
            var owner = this._owner;
            var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo2.setStorage(storageName);
            aFileInfo2.setPath(folderName);
            aFileInfo2.setName(fileName);
            aFileInfo2.setType("file");
            context.setObject2Result(aFileInfo2);
            var callback_fileObjectObtained = function (handle) {
                var sha256 = new rmAsmCrypto.Sha256();
                var i = 1;
                try {
                    var CHUNK_SIZE = 128 * 512;
                    var readerStream = fs.createReadStream(fileFullName, { highWaterMark: CHUNK_SIZE });
                    readerStream.setEncoding('binary');
                    readerStream.on('data', function (chunk) {
                        var raw = rmAsmCrypto.string_to_bytes(chunk);
                        sha256.process(raw);
                        console.log("" + i++);
                    });
                    readerStream.on('close', function () {
                        var hash = sha256.finish().result;
                        var res = rmAsmCrypto.bytes_to_hex(hash);
                        sha256 = null;
                        context.setResult(res);
                        shaProperties.setShaString(res);
                        console.log("webos:compute-filesha2 ok: Successfully compute the sha of the file: " + fileFullName);
                        console.log(res);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                        return;
                    });
                    readerStream.on('error', function (err) {
                        console.log("webos:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]");
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5082, "webos:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]");
                        if (callback != null)
                            callback(context);
                        return;
                    });
                }
                catch (e) {
                    console.log("webos:compute-filesha2 error [8083]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5085, "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                    return;
                }
            };
            try {
                fs.stat(storageName + folderName + fileName, function (err, stats) {
                    if (err) {
                        console.log("webos:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + +JSON.stringify(stats));
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9084, +"webos:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + +JSON.stringify(stats));
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    if (stats.isDirectory()) {
                        console.log("webos:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder");
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(9085, +"webos:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder");
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log("webos:compute-filesha2 trace. statsObtained : " + JSON.stringify(stats));
                    callback_fileObjectObtained(stats);
                });
            }
            catch (e) {
                console.log(+"webos:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]");
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(9086, +"webos:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]");
                if (callback != null)
                    callback(context);
                return;
            }
        };
        IImpl_SDK_FileSystem_WebOS.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_WebOS.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            var owner = this._owner;
            var thisInterface = this;
            var callback2 = function (ctx1) {
                if (ctx1.isError()) {
                    if (callback != null)
                        callback(ctx1);
                    return;
                }
                var shaString = shaProperties.getShaString();
                var shaStorageName = shaProperties.getShaFileInfo().getStorage();
                var shaFolderName = shaProperties.getShaFileInfo().getPath();
                var shaFileName = shaProperties.getShaFileInfo().getName();
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
        IImpl_SDK_FileSystem_WebOS.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        return IImpl_SDK_FileSystem_WebOS;
    }(rmTransversalServicesFileSystemJsTV.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R));
    nm_transversalservices.IImpl_SDK_FileSystem_WebOS = IImpl_SDK_FileSystem_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FileSystem_WebOS.js.map