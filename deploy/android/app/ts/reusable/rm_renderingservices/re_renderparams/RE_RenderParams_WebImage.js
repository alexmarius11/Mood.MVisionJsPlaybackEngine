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
var rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Image");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_WebImage = (function (_super) {
        __extends(RE_RenderParams_WebImage, _super);
        function RE_RenderParams_WebImage() {
            return _super.call(this) || this;
        }
        RE_RenderParams_WebImage.prototype.reset = function () {
            return _super.prototype.reset.call(this);
        };
        RE_RenderParams_WebImage.prototype.copy = function (src) {
            if (src == null)
                return 1;
        };
        return RE_RenderParams_WebImage;
    }(rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_Image));
    rm_renderingservices.RE_RenderParams_WebImage = RE_RenderParams_WebImage;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_WebImage.js.map