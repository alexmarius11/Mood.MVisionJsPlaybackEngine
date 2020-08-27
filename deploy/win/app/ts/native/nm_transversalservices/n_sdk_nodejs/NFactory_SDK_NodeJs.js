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
var mod_N_SDK_NodeJs = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
var nm_transversalservices;
(function (nm_transversalservices) {
    var NFactory_SDK_NodeJs = (function (_super) {
        __extends(NFactory_SDK_NodeJs, _super);
        function NFactory_SDK_NodeJs() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NFactory_SDK_NodeJs.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_N_SDK_NodeJs.nm_transversalservices.N_SDK_NodeJs(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return NFactory_SDK_NodeJs;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    nm_transversalservices.NFactory_SDK_NodeJs = NFactory_SDK_NodeJs;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=NFactory_SDK_NodeJs.js.map