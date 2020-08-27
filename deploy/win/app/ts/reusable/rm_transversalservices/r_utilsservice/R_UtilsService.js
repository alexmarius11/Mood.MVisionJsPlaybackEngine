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
var rmTransversalServicesIUtilsService = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_UtilsService_R");
var rmTransversalServicesIUtilsNumbers = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Numbers_R");
var rmTransversalServicesIUtilsStrings = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Strings_R");
var rmTransversalServicesIUtilsDateTime = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_DateTime_R");
var rmTransversalServicesIUtilsFiles = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Files_R");
var rmTransversalServicesIUtilsWeb = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Web_R");
var rmTransversalServicesIUtilsGuid = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Guid_R");
var rmTransversalServicesIUtilsConvertor = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Convertor_R");
var rmTransversalServicesIUtilsXMLJson = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_XMLJson_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_UtilsService = (function (_super) {
        __extends(R_UtilsService, _super);
        function R_UtilsService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iUtilsService = new rmTransversalServicesIUtilsService.rm_transversalservices.IImpl_UtilsService_R(_this);
            _this._iUtilsNumbers = new rmTransversalServicesIUtilsNumbers.rm_transversalservices.IImpl_Utils_Numbers_R(_this);
            _this._iUtilsDateTime = new rmTransversalServicesIUtilsDateTime.rm_transversalservices.IImpl_Utils_DateTime_R(_this);
            _this._iUtilsStrings = new rmTransversalServicesIUtilsStrings.rm_transversalservices.IImpl_Utils_Strings_R(_this);
            _this._iUtilsFiles = new rmTransversalServicesIUtilsFiles.rm_transversalservices.IImpl_Utils_Files_R(_this);
            _this._iUtilsWeb = new rmTransversalServicesIUtilsWeb.rm_transversalservices.IImpl_Utils_Web_R(_this);
            _this._iUtilsGuid = new rmTransversalServicesIUtilsGuid.rm_transversalservices.IImpl_Utils_Guid_R(_this);
            _this._iUtilsConvertor = new rmTransversalServicesIUtilsConvertor.rm_transversalservices.IImpl_Utils_Convertor_R(_this);
            _this._iUtilsXMLJson = new rmTransversalServicesIUtilsXMLJson.rm_transversalservices.IImpl_Utils_XMLJson_R(_this);
            return _this;
        }
        return R_UtilsService;
    }(rmGeneral.rm_general.R_Service));
    rm_transversalservices.R_UtilsService = R_UtilsService;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_UtilsService.js.map