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
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmTransversalServicesIXmlConfiguratorMain = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/IImpl_XmlConfigurator_Main_R");
var rmTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/IImpl_XmlConfigurator_Setup_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_XmlConfigurator = (function (_super) {
        __extends(R_XmlConfigurator, _super);
        function R_XmlConfigurator(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._fileInfoList = null;
            _this._xmlDocumentList = null;
            _this._iXmlConfiguratorMain = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfigurator_Main_R(_this);
            _this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfigurator_Setup_R(_this);
            return _this;
        }
        R_XmlConfigurator.prototype.loadXMLFiles = function (fileInfoList, error, context, callback) {
            this._fileInfoList = fileInfoList;
            this._xmlDocumentList = new Array();
            var self = this;
            var nbXmlFiles = this._fileInfoList.length;
            var crtFileIdx = 0;
            var loadOneXmlFile = function loadOneXmlFile(crtFileIdx, nbFiles, fileInfoLst, xmlDocumentLst, err, ctx, callbck) {
                if (crtFileIdx + 1 > nbFiles) {
                    context.setResult("Successfully loaded all xml files");
                    console.log("Successfully loaded all xml files");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtFileInfo = fileInfoLst[crtFileIdx];
                var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
                var callbackReadAndParseXMLFile2 = function callbackReadAndParseXMLFile2(ctx2) {
                    if (ctx2.isError()) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var aXmlDocument = self._aServiceLocator._iEntityCreation.createDefaultXmlDocument(error);
                    var xmlNativeDoc = ctx2.getObjectResult();
                    aXmlDocument.setNativeXmlDocument(xmlNativeDoc);
                    self._xmlDocumentList.push(aXmlDocument);
                    console.log('Succesfuly loaded xml file ' + fileFullName);
                    return loadOneXmlFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx2, callbck);
                };
                var callbackReadTextFile2 = function callbackReadTextFile2(ctx3) {
                    if (ctx3.isError()) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var xmlString = ctx3._result;
                    self._aUtilsService._iUtilsXMLJson.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
                };
                context.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.readTextFile2(crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), error, context, callbackReadTextFile2);
            };
            loadOneXmlFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlDocumentList, error, context, callback);
        };
        R_XmlConfigurator.prototype.getXmlJsonObject = function (fileStorage, fileFolder, fileName, error, context, callback) {
            if (this._xmlDocumentList == null) {
                console.log('Error getting xml file content of the file: xml files are not loaded');
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7502, 'Error getting xml file content of the file: xml files are not loaded');
                if (callback != null)
                    callback(context);
                return;
            }
            var foundXmlDocument = null;
            var crtXmlDocument = null;
            var crtFileInfo = null;
            var fileFullName = fileStorage + fileFolder + fileName;
            var i = 0;
            for (i = 0; i < this._xmlDocumentList.length; i++) {
                crtFileInfo = this._fileInfoList[i];
                crtXmlDocument = this._xmlDocumentList[i];
                if ((crtFileInfo.getStorage() == fileStorage) && (crtFileInfo.getPath() == fileFolder) && (crtFileInfo.getName() == fileName)) {
                    foundXmlDocument = crtXmlDocument;
                    break;
                }
            }
            if (foundXmlDocument == null) {
                console.log('Error getting xml file content of the file ' + fileFullName);
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7501, 'Error getting xml file content of the file ' + fileFullName);
                if (callback != null)
                    callback(context);
                return;
            }
            context.setObjectResult(foundXmlDocument);
            context.setResult("Successfully get the xml file content of the file " + fileFullName);
            context.setError(error);
            if (callback != null)
                callback(context);
        };
        R_XmlConfigurator.prototype.loadTextFiles = function (fileInfoList, error, context, callback) {
            this._fileInfoList = fileInfoList;
            this._xmlDocumentList = new Array();
            var self = this;
            var nbXmlFiles = this._fileInfoList.length;
            var crtFileIdx = 0;
            var loadOneTextFile = function loadOneTextFile(crtFileIdx, nbFiles, fileInfoLst, xmlDocumentLst, err, ctx, callbck) {
                if (crtFileIdx + 1 > nbFiles) {
                    context.setResult("Successfully loaded all xml files");
                    console.log("Successfully loaded all xml files");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtFileInfo = fileInfoLst[crtFileIdx];
                var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
                var callbackReadTextFile2 = function callbackReadTextFile2(ctx3) {
                    if (ctx3.isError()) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var aXmlDocument = self._aServiceLocator._iEntityCreation.createDefaultXmlDocument(error);
                    var xmlNativeDoc = ctx3.getResult();
                    aXmlDocument.setNativeXmlDocument(xmlNativeDoc);
                    self._xmlDocumentList.push(aXmlDocument);
                    console.log('Succesfuly loaded xml-text file ' + fileFullName);
                    return loadOneTextFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx3, callbck);
                };
                context.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.readTextFile2(crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), error, context, callbackReadTextFile2);
            };
            loadOneTextFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlDocumentList, error, context, callback);
        };
        return R_XmlConfigurator;
    }(rmGeneral.rm_general.R_Service));
    rm_transversalservices.R_XmlConfigurator = R_XmlConfigurator;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_XmlConfigurator.js.map