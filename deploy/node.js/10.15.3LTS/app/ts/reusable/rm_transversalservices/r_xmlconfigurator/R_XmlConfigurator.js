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
            _this._xmlJsonObjectList = null;
            _this._iXmlConfiguratorMain = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfigurator_Main_R(_this);
            _this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfigurator_Setup_R(_this);
            return _this;
        }
        R_XmlConfigurator.prototype.loadXMLFiles = function (fileInfoList, error, context, callback) {
            this._fileInfoList = fileInfoList;
            this._xmlJsonObjectList = new Array();
            var self = this;
            var nbXmlFiles = this._fileInfoList.length;
            var crtFileIdx = 0;
            var loadOneXmlFile = function loadOneXmlFile(crtFileIdx, nbFiles, fileInfoLst, xmljsonObjectLst, err, ctx, callbck) {
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
                        console.log('Error loading xml file ' + fileFullName + JSON.stringify(err));
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var aJsonXmlObject = self._aServiceLocator._iEntityCreation.createDefaultXmlJsonObject(error);
                    var jsn = ctx2.getObjectResult();
                    aJsonXmlObject.setNativeXmlJsonObject(jsn);
                    self._xmlJsonObjectList.push(aJsonXmlObject);
                    console.log('Succesfuly loaded xml file ' + fileFullName);
                    return loadOneXmlFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmljsonObjectLst, err, ctx2, callbck);
                };
                self._aSDKService._iSDKFileSystem.readAndParseXMLFile2(crtFileInfo.getUrlStorage(), crtFileInfo.getUrlPath(), crtFileInfo.getUrlName(), crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), error, context, callbackReadAndParseXMLFile2);
            };
            loadOneXmlFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlJsonObjectList, error, context, callback);
        };
        R_XmlConfigurator.prototype.getXmlJsonObject = function (fileStorage, fileFolder, fileName, error, context, callback) {
            if (this._xmlJsonObjectList == null) {
                console.log('Error getting xml file content of the file: xml files are not loaded');
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7502, 'Error getting xml file content of the file: xml files are not loaded');
                if (callback != null)
                    callback(context);
                return;
            }
            var foundXmlJsonObject = null;
            var crtXmlJsonObject = null;
            var crtFileInfo = null;
            var fileFullName = fileStorage + fileFolder + fileName;
            var i = 0;
            for (i = 0; i < this._xmlJsonObjectList.length; i++) {
                crtFileInfo = this._fileInfoList[i];
                crtXmlJsonObject = this._xmlJsonObjectList[i];
                if ((crtFileInfo.getStorage() == fileStorage) && (crtFileInfo.getPath() == fileFolder) && (crtFileInfo.getName() == fileName)) {
                    foundXmlJsonObject = crtXmlJsonObject;
                    break;
                }
            }
            if (foundXmlJsonObject == null) {
                console.log('Error getting xml file content of the file ' + fileFullName);
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7501, 'Error getting xml file content of the file ' + fileFullName);
                if (callback != null)
                    callback(context);
                return;
            }
            context.setObjectResult(foundXmlJsonObject);
            context.setResult("Successfully get the xml file content of the file " + fileFullName);
            context.setError(error);
            if (callback != null)
                callback(context);
        };
        return R_XmlConfigurator;
    }(rmGeneral.rm_general.R_Service));
    rm_transversalservices.R_XmlConfigurator = R_XmlConfigurator;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_XmlConfigurator.js.map