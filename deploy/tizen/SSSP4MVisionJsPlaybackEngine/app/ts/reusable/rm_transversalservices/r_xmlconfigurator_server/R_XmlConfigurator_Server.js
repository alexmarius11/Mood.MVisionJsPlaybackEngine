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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorRemoteService_Server", "../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorMain_Server", "../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator_server/IImpl_XmlConfiguratorSetup_Server"], function (require, exports, rmGeneralService, rmTransversalServicesRemoteService, rmTransversalServicesIXmlConfiguratorMain, rmTransversalServicesIXmlConfiguratorSetup) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var R_XmlConfigurator_Server = /** @class */ (function (_super) {
            __extends(R_XmlConfigurator_Server, _super);
            function R_XmlConfigurator_Server(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iRemoteService = new rmTransversalServicesRemoteService.rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Server(_this);
                _this._iXmlConfiguratorMain = new rmTransversalServicesIXmlConfiguratorMain.rm_transversalservices.IImpl_XmlConfiguratorMain_Server(_this);
                _this._iXmlConfiguratorSetup = new rmTransversalServicesIXmlConfiguratorSetup.rm_transversalservices.IImpl_XmlConfiguratorSetup_Server(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            //-----------------------------------------
            R_XmlConfigurator_Server.prototype.setTargetService = function (targetService) {
                this._aTargetXmlConfigurator = targetService;
            };
            return R_XmlConfigurator_Server;
        }(rmGeneralService.rm_general.R_Service));
        rm_transversalservices.R_XmlConfigurator_Server = R_XmlConfigurator_Server;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=R_XmlConfigurator_Server.js.map