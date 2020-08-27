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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_HtmlTemplateRendererPool = (function (_super) {
        __extends(RE_HtmlTemplateRendererPool, _super);
        function RE_HtmlTemplateRendererPool() {
            var _this = _super.call(this) || this;
            _this._htmlRendererList = new Array();
            return _this;
        }
        RE_HtmlTemplateRendererPool.prototype.initPool = function (nbHtmlTemplateRenderers, error) {
            var i = 0;
            var newHtmlTemplateRenderer = null;
            var errorNo = 1;
            for (i = 0; i < nbHtmlTemplateRenderers; i++) {
                newHtmlTemplateRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newHtmlTemplateRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                this.addHtmlTemplateRenderer(newHtmlTemplateRenderer);
            }
            return errorNo;
        };
        RE_HtmlTemplateRendererPool.prototype.addHtmlTemplateRenderer = function (htmlRenderer) {
            this._htmlRendererList.push(htmlRenderer);
        };
        RE_HtmlTemplateRendererPool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._htmlRendererList.length; i++) {
                this._htmlRendererList[i].reset();
            }
        };
        RE_HtmlTemplateRendererPool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_HtmlTemplateRendererPool.prototype.getHtmlTemplateRendererList = function () {
            return this._htmlRendererList;
        };
        RE_HtmlTemplateRendererPool.prototype.getFreeHtmlTemplateRenderer = function () {
            var freeRenderParams = null;
            var i = 0;
            for (i = 0; i < this._htmlRendererList.length; i++) {
                if (this._htmlRendererList[i] == null)
                    continue;
                if (!this._htmlRendererList[i].isFree())
                    continue;
                if (!this._htmlRendererList[i].setIsFree(false))
                    continue;
                freeRenderParams = this._htmlRendererList[i];
                break;
            }
            return freeRenderParams;
        };
        RE_HtmlTemplateRendererPool.prototype.releaseHtmlTemplateRenderer = function (htmlRenderer) {
            if (htmlRenderer == null)
                return false;
            htmlRenderer.setIsFree(false);
            return true;
        };
        return RE_HtmlTemplateRendererPool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_HtmlTemplateRendererPool = RE_HtmlTemplateRendererPool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_HtmlTemplateRendererPool.js.map