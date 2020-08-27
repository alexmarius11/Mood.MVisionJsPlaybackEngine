define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_FileSystem_JsTV_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FileSystem_JsTV_R(owner) {
                this._owner = owner;
            }
            //--------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //--------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            //---------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                //this.readTextFile(storageName + folderName + fileName, error, context, callback);            
                //-----------------
                // for test only
                //-----------------
                var strOpeningHours = "<\?xml version=\"1.0\" encoding=\"utf-8\"\?>" +
                    "<!DOCTYPE OPENING_HOURS [" +
                    "<!ELEMENT OPENING_HOURS (WORKDAY*)>" +
                    "<!ELEMENT WORKDAY (OPEN, CLOSE)>" +
                    "<!ELEMENT OPEN (DAY, TIME)>" +
                    "<!ELEMENT CLOSE (DAY, TIME)>" +
                    "<!ELEMENT DAY (#PCDATA)>" +
                    "<!ELEMENT TIME (#PCDATA)>" +
                    "]>" +
                    "<OPENING_HOURS>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>SUN</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>SUN</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>MON</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>MON</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>TUE</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>TUE</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>WED</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>WED</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>THU</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>THU</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>FRI</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>FRI</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "<WORKDAY>" +
                    "<OPEN>" +
                    "<DAY>SAT</DAY>" +
                    "<TIME>00:01:00</TIME>" +
                    "</OPEN>" +
                    "<CLOSE>" +
                    "<DAY>SAT</DAY>" +
                    "<TIME>23:59:00</TIME>" +
                    "</CLOSE>" +
                    "</WORKDAY>" +
                    "</OPENING_HOURS>";
                var strHardwareSettings = "<\?xml version=\"1.0\" encoding=\"utf-8\"\?>" +
                    "<!DOCTYPE HARDWARE_SETTINGS[" +
                    "<!ELEMENT HARDWARE_SETTINGS (ENVIRONMENT, SERIAL_NUMBER, WINDOWS_ACCOUNTS)>" +
                    "<!ELEMENT ENVIRONMENT (ENV_NAME, EARLY_ADOPTER)>" +
                    "<!ELEMENT WINDOWS_ACCOUNTS (ACCOUNT+)>" +
                    "<!ELEMENT ACCOUNT (ACCOUNT_ID, NAME, PWD)>" +
                    "<!ELEMENT ENV_NAME (#PCDATA)>" +
                    "<!ELEMENT EARLY_ADOPTER (#PCDATA)>" +
                    "<!ELEMENT SERIAL_NUMBER (#PCDATA)>" +
                    "<!ELEMENT ACCOUNT_ID (#PCDATA)>" +
                    "<!ELEMENT NAME (#PCDATA)>" +
                    "<!ELEMENT PWD (#PCDATA)>" +
                    "]>" +
                    "<HARDWARE_SETTINGS>" +
                    "<ENVIRONMENT>" +
                    "<ENV_NAME>MVP425_WES7</ENV_NAME>" +
                    "<EARLY_ADOPTER>0</EARLY_ADOPTER>" +
                    "</ENVIRONMENT>" +
                    "<SERIAL_NUMBER>PC100001</SERIAL_NUMBER>" +
                    "<WINDOWS_ACCOUNTS>" +
                    "<ACCOUNT>" +
                    "<ACCOUNT_ID>1</ACCOUNT_ID>" +
                    "<NAME>stream01</NAME>" +
                    "<PWD>retr9xEt</PWD>" +
                    "</ACCOUNT>" +
                    "</WINDOWS_ACCOUNTS>" +
                    "</HARDWARE_SETTINGS>";
                //strHardwareSettings = "<root>" + strHardwareSettings + "</root>";
                if (fileName == "hardware_settings.xml")
                    context.setResult(strHardwareSettings);
                else if (fileName == "opening_hour_settings.xml")
                    context.setResult(strHardwareSettings);
                console.log("Successfully read text file");
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            //---------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //-----------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //---------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
            };
            //=============
            // append file
            //=============
            //--------------------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            };
            //==============
            //
            //================
            //------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.getFileList = function (folderFullName, error, context, callback) {
            };
            //------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.removeFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.createFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            };
            //---------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_JsTV_R.prototype.fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_JsTV_R.prototype.folderExists = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            //--------------------------------------
            //              copy file
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                this.copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //-------------------------------------------------------------
            //    copy folder 
            //-------------------------------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //---------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //--------------------------------------
            //      downloadFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      unzipFile - should be moved to web interface
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                this.fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                this.getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //-------------- 
            // temporary - will be moved to the write place
            //--------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.getFileList2 = function (storageName, folderFullName, error, context, callback) {
                this.getFileList(storageName + folderFullName, error, context, callback);
            };
            //--------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.removeFile(storageName + folderName + fileName, error, context, callback);
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.createFolder2 = function (storageName, folderfullName, error, context, callback) {
                return this.createFolder(storageName + folderfullName, error, context, callback);
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
                return this.deleteFolder(storageName + folderName, error, context, callback);
            };
            IImpl_SDK_FileSystem_JsTV_R.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.fileExists(storageName + folderName + fileName, error, context, callback);
            };
            //------------------------
            //    Move File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //------------------------
            //    Upload File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //------------------------
            //    Zip File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //------------------------
            //    Move Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Zip Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //----------------------
            //  compute file sha 
            //  and save sha in file
            //-----------------------
            //--------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
            };
            //-----------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            };
            //-----------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            };
            //=========================
            // read and parse xml file
            //=========================
            //--------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
                var self = this;
                var callbackReadTextFile2 = function callbackReadTextFile(ctx) {
                    //--------- if is error - return error
                    if (ctx.isError()) {
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //--------- parse the loaded xmlString
                    var callbackConvertXMLStringToJsonObject = function callbackConvertXMLStringToJsonObject(ctx) {
                        if (ctx.isError()) {
                            context.setObjectResult(null);
                            if (callback != null)
                                callback(context);
                            return;
                        }
                        if (callback != null)
                            callback(context);
                    };
                    var xmlString = ctx.getResult();
                    //return callbackConvertXMLStringToJsonObject(ctx); //keep the xml - dont convert to json
                    self.convertXMLStringToJsonObject(xmlString, error, ctx, callbackConvertXMLStringToJsonObject);
                };
                self.readTextFile2(storageName, folderName, fileName, error, context, callbackReadTextFile2);
                //if ((urlStorageName === null) || (urlStorageName == ""))
                //self.readTextFile2(storageName, folderName, fileName, error, context,  callbackReadTextFile2);
                //else  
                //self._owner._aUtilsService._iUtilsFiles.readFileFromUrl(storageName, folderName, fileName,
                //                                                      urlStorageName, urlFolderName, urlFileName,
                //                                                    error, context,  callbackReadTextFile2);
            };
            //--------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.readAndParseXMLFile2_prev = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
                var self = this;
                var callbackReadTextFile2 = function callbackReadTextFile(ctx) {
                    //--------- if is error - return error
                    if (ctx.isError()) {
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //--------- parse the loaded xmlString
                    var callbackConvertXMLStringToJsonObject = function callbackConvertXMLStringToJsonObject(ctx) {
                        if (ctx.isError()) {
                            context.setObjectResult(null);
                            if (callback != null)
                                callback(context);
                            return;
                        }
                        if (callback != null)
                            callback(context);
                    };
                    var xmlString = ctx.getResult();
                    self.convertXMLStringToJsonObject(xmlString, error, ctx, callbackConvertXMLStringToJsonObject);
                };
                if ((urlStorageName === null) || (urlStorageName == ""))
                    self.readTextFile2(storageName, folderName, fileName, error, context, callbackReadTextFile2);
                else
                    self._owner._aUtilsService._iUtilsFiles.readFileFromUrl(storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callbackReadTextFile2);
            };
            //--------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.convertXMLStringToJsonObject = function (xmlString, error, context, callback) {
                var owner = this._owner;
                var jsn = null;
                var callbackParseXML = function callbackParseXML(ctx) {
                    if (ctx.isError()) {
                        console.log('Error converting xml to jsonxml ' + xmlString);
                        context.setError(error);
                        context.setObjectResult(null);
                        if (context.getError() != null)
                            context.getError().setError(7011, 'Error converting xml to jsonxml ' + xmlString);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var xmlObject = ctx.getObjectResult();
                    try {
                        jsn = owner._aUtilsService._iUtilsXMLJson.xmlDocToJSON(xmlObject);
                        ctx.setObjectResult(jsn);
                    }
                    catch (e) {
                        jsn = null;
                        console.log('Error converting xml to jsonxml ' + xmlString);
                        context.setError(error);
                        context.setObjectResult(null);
                        if (context.getError() != null)
                            context.getError().setError(7012, 'Catch error converting xml to jsonxml ' + xmlString);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    xmlObject = null;
                    console.log(JSON.stringify(jsn));
                    context.setObjectResult(jsn);
                    console.log("Successfully convert xml object to jsonxml");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                };
                this.parseXMLString(xmlString, error, context, callbackParseXML);
            };
            //--------------------------
            IImpl_SDK_FileSystem_JsTV_R.prototype.parseXMLString = function (xmlString, error, context, callback) {
                var parser = null;
                var xmlObject = null;
                var jsn = null;
                //---- is parse error 
                function isParseError(parsedDocument) {
                    // parser and parsererrorNS could be cached on startup for efficiency
                    var parser = new DOMParser(), errorneousParse = parser.parseFromString('<', 'text/xml'), parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;
                    if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
                        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
                        //return parsedDocument.getElementsByTagName("parsererror").length > 0;
                        var xmlError = parsedDocument.getElementsByTagName("parsererror");
                        if (xmlError === null)
                            return false;
                        if (xmlError == "")
                            return false;
                        if (xmlError.length > 0)
                            return true;
                        return false;
                    }
                    //return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
                    var xmlError = parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror');
                    if (xmlError === null)
                        return false;
                    if (xmlError == "")
                        return false;
                    if (xmlError.length > 0)
                        return true;
                    return false;
                }
                ;
                //--------------------
                if (typeof DOMParser != "undefined") {
                    parser = new DOMParser();
                    xmlObject = parser.parseFromString(xmlString, "text/xml");
                    //var parsererrorNS = parser.parseFromString('INVALID', 'text/xml').getElementsByTagName("parsererror")[0].namespaceURI;
                    if (isParseError(xmlObject)) //xmlObject.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) 
                     {
                        //throw new Error('Error parsing XML');
                        console.log('Error parsing xml file ' + xmlString);
                        context.setError(error);
                        context.setObjectResult(null);
                        if (context.getError() != null)
                            context.getError().setError(7009, 'Error parsing xml ' + xmlString); //+ " " + parsererrorNS);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(xmlObject) + "</p>";
                    console.log(JSON.stringify(xmlObject));
                    context.setObjectResult(xmlObject);
                    console.log("Successfully parse xml object");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                    //--------------------
                }
                else if (typeof window.ActiveXObject != "undefined") {
                    xmlObject = new ActiveXObject("Microsoft.XMLDOM");
                    if (xmlObject == null) {
                        console.log('Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
                        context.setError(error);
                        context.setObjectResult(null);
                        if (context.getError() != null)
                            context.getError().setError(7002, 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    xmlObject.async = "false";
                    var bSucceed = xmlObject.loadXML(xmlString);
                    if (!bSucceed) {
                        console.log('Error parsing xml file ' + xmlString);
                        context.setError(error);
                        context.setObjectResult(null);
                        if (context.getError() != null)
                            context.getError().setError(7009, 'Error parsing xml ' + xmlString); //+ " " + parsererrorNS);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log(JSON.stringify(xmlObject));
                    context.setObjectResult(xmlObject);
                    console.log("Successfully parse xml object");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                else {
                    console.log('Error parsing xml ' + xmlString + " no xml parser found");
                    context.setError(error);
                    context.setObjectResult(null);
                    if (context.getError() != null)
                        context.getError().setError(7001, 'Error parsing xml ' + xmlString + " no xml parser found");
                    if (callback != null)
                        callback(context);
                    return;
                }
            };
            return IImpl_SDK_FileSystem_JsTV_R;
        }());
        rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R = IImpl_SDK_FileSystem_JsTV_R;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FileSystem_JsTV_R.js.map