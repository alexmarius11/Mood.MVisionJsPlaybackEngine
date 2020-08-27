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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RE_RenderParams_WebPage = /** @class */ (function (_super) {
            __extends(RE_RenderParams_WebPage, _super);
            //---------------------------
            function RE_RenderParams_WebPage() {
                var _this = _super.call(this) || this;
                _this._url = "";
                _this._scrollTop = -1;
                _this._scrollLeft = -1;
                return _this;
            }
            //--------------------------
            RE_RenderParams_WebPage.prototype.reset = function () {
                this._url = "";
                this._scrollTop = -1;
                this._scrollLeft = -1;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.setUrl = function (url) {
                this._url = url;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.getUrl = function () {
                return this._url;
            };
            //------------
            RE_RenderParams_WebPage.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._url = src.getUrl();
                this._scrollLeft = src.getScrollLeft();
                this._scrollTop = src.getScrollTop();
                return 0;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.setScrollTop = function (scrollTop) {
                this._scrollTop = scrollTop;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.getScrollTop = function () {
                return this._scrollTop;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.setScrollLeft = function (scrollLeft) {
                this._scrollLeft = scrollLeft;
            };
            //---------------
            RE_RenderParams_WebPage.prototype.getScrollLeft = function () {
                return this._scrollLeft;
            };
            return RE_RenderParams_WebPage;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_WebPage = RE_RenderParams_WebPage;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_WebPage.js.map