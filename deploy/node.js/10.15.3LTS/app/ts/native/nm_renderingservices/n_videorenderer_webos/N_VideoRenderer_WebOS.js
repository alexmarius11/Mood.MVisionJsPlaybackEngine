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
var rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
var nmRenderingServices2 = require("../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/IImpl_VideoRenderer_WebOS");
var nm_renderingservices;
(function (nm_renderingservices) {
    var N_VideoRenderer_WebOS = (function (_super) {
        __extends(N_VideoRenderer_WebOS, _super);
        function N_VideoRenderer_WebOS(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iVideoRenderer = new nmRenderingServices2.nm_renderingservices.IImpl_VideoRenderer_WebOS(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return N_VideoRenderer_WebOS;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    nm_renderingservices.N_VideoRenderer_WebOS = N_VideoRenderer_WebOS;
})(nm_renderingservices = exports.nm_renderingservices || (exports.nm_renderingservices = {}));
//# sourceMappingURL=N_VideoRenderer_WebOS.js.map