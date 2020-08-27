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
var mod_N_SDK_WebOS = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
var nm_transversalservices;
(function (nm_transversalservices) {
    var NFactory_SDK_WebOS = (function (_super) {
        __extends(NFactory_SDK_WebOS, _super);
        function NFactory_SDK_WebOS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NFactory_SDK_WebOS.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_N_SDK_WebOS.nm_transversalservices.N_SDK_WebOS(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return NFactory_SDK_WebOS;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    nm_transversalservices.NFactory_SDK_WebOS = NFactory_SDK_WebOS;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=NFactory_SDK_WebOS.js.map