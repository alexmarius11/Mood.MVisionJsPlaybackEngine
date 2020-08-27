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
var rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_VideoStream = (function (_super) {
        __extends(RE_RenderParams_VideoStream, _super);
        function RE_RenderParams_VideoStream() {
            return _super.call(this) || this;
        }
        RE_RenderParams_VideoStream.prototype.reset = function () {
            return _super.prototype.reset.call(this);
        };
        RE_RenderParams_VideoStream.prototype.copy = function (src) {
            if (src == null)
                return 1;
        };
        return RE_RenderParams_VideoStream;
    }(rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_Video));
    rm_renderingservices.RE_RenderParams_VideoStream = RE_RenderParams_VideoStream;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_VideoStream.js.map