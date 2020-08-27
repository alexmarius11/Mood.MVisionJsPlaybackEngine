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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_UtilsService_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Numbers_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Strings_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_DateTime_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Files_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Web_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Guid_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Convertor_R", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_XMLJson_R"], function (require, exports, rmGeneral, rmTransversalServicesIUtilsService, rmTransversalServicesIUtilsNumbers, rmTransversalServicesIUtilsStrings, rmTransversalServicesIUtilsDateTime, rmTransversalServicesIUtilsFiles, rmTransversalServicesIUtilsWeb, rmTransversalServicesIUtilsGuid, rmTransversalServicesIUtilsConvertor, rmTransversalServicesIUtilsXMLJson) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_UtilsService = /** @class */ (function (_super) {
            __extends(R_UtilsService, _super);
            //----------- constructor 
            function R_UtilsService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                //this._aLogService = aLogService;
                //this._aSDKJsTV = aSDKJsTV;
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
});
//# sourceMappingURL=R_UtilsService.js.map