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
var rmGeneralServiceFactory = require("../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service");
var mod_R_TvHdmiPassThroughSrv = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/R_TvHdmiPassThroughSrv");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RFactory_TvHdmiPassThroughSrv = (function (_super) {
        __extends(RFactory_TvHdmiPassThroughSrv, _super);
        function RFactory_TvHdmiPassThroughSrv() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_TvHdmiPassThroughSrv.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_TvHdmiPassThroughSrv.rm_renderingservices.R_TvHdmiPassThroughSrv(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_TvHdmiPassThroughSrv;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_renderingservices.RFactory_TvHdmiPassThroughSrv = RFactory_TvHdmiPassThroughSrv;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RFactory_TvHdmiPassThroughSrv.js.map