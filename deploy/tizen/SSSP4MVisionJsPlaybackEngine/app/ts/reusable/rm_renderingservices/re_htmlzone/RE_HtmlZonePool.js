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
        var RE_HtmlZonePool = /** @class */ (function (_super) {
            __extends(RE_HtmlZonePool, _super);
            //---------------------------
            function RE_HtmlZonePool() {
                var _this = _super.call(this) || this;
                _this._htmlZoneList = new Array();
                return _this;
            }
            //--------------------------------------------
            RE_HtmlZonePool.prototype.initPool = function (nbHtmlZone, error) {
                var i = 0;
                var newHtmlZone = null;
                var errorNo = 1;
                var divZoneId = "";
                var iHtmlZoneId = 0;
                for (i = 0; i < nbHtmlZone; i++) {
                    newHtmlZone = this._aSrvLocator._iEntityCreation.createDefaultHtmlZone(error);
                    if (error.isError()) {
                        errorNo = 1;
                        break;
                    }
                    newHtmlZone.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                    //---
                    iHtmlZoneId = i + 1;
                    if (iHtmlZoneId < 10)
                        divZoneId = "z0" + iHtmlZoneId;
                    else
                        divZoneId = "z" + iHtmlZoneId;
                    newHtmlZone.initHtml(divZoneId, error);
                    //----
                    this.addHtmlZone(newHtmlZone);
                }
                return errorNo;
            };
            //--------------------------
            RE_HtmlZonePool.prototype.addHtmlZone = function (htmlZone) {
                this._htmlZoneList.push(htmlZone);
            };
            //--------------------------
            RE_HtmlZonePool.prototype.reset = function () {
                var i = 0;
                for (i = 0; i < this._htmlZoneList.length; i++) {
                    this._htmlZoneList[i].reset();
                }
            };
            //------------
            RE_HtmlZonePool.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                return 0;
            };
            //-----------------------------
            RE_HtmlZonePool.prototype.getHtmlZoneList = function () {
                return this._htmlZoneList;
            };
            //--------------------------
            RE_HtmlZonePool.prototype.getFreeHtmlZone = function () {
                var freeRenderParams = null;
                var i = 0;
                for (i = 0; i < this._htmlZoneList.length; i++) {
                    if (this._htmlZoneList[i] == null)
                        continue;
                    if (!this._htmlZoneList[i].isFree())
                        continue;
                    if (!this._htmlZoneList[i].setIsFree(false))
                        continue;
                    freeRenderParams = this._htmlZoneList[i];
                    break;
                }
                return freeRenderParams;
            };
            //--------------------------
            RE_HtmlZonePool.prototype.releaseHtmlZone = function (htmlZone) {
                if (htmlZone == null)
                    return false;
                htmlZone.setIsFree(false);
                return true;
            };
            return RE_HtmlZonePool;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_HtmlZonePool = RE_HtmlZonePool;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_HtmlZonePool.js.map