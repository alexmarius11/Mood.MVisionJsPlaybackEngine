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
var mod_N_VideoRenderer_WebOS = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS");
var nm_renderingservices;
(function (nm_renderingservices) {
    var NFactory_VideoRenderer_WebOS = (function (_super) {
        __extends(NFactory_VideoRenderer_WebOS, _super);
        function NFactory_VideoRenderer_WebOS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NFactory_VideoRenderer_WebOS.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_N_VideoRenderer_WebOS.nm_renderingservices.N_VideoRenderer_WebOS(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return NFactory_VideoRenderer_WebOS;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    nm_renderingservices.NFactory_VideoRenderer_WebOS = NFactory_VideoRenderer_WebOS;
})(nm_renderingservices = exports.nm_renderingservices || (exports.nm_renderingservices = {}));
//# sourceMappingURL=NFactory_VideoRenderer_WebOS.js.map