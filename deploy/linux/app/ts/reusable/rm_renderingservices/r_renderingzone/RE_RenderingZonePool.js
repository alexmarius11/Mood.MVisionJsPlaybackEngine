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
    var RE_RenderingZonePool = (function (_super) {
        __extends(RE_RenderingZonePool, _super);
        function RE_RenderingZonePool() {
            var _this = _super.call(this) || this;
            _this._renderingZoneList = new Array();
            _this._aScreenSaverConfig = null;
            _this._crtZoneIndex = 0;
            return _this;
        }
        RE_RenderingZonePool.prototype.initPool = function (nbRenderingZones, error) {
            var i = 0;
            var newRenderingZone = null;
            var errorNo = 1;
            for (i = 0; i < nbRenderingZones; i++) {
                newRenderingZone = this._aSrvLocator._iServiceCreation.createDefaultService_RenderingZone(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
                if (error.isError()) {
                    errorNo = 1;
                    break;
                }
                newRenderingZone._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
                newRenderingZone._iRenderingZoneConfig.setHtmlZoneId(i + 1);
                newRenderingZone._iRenderingZoneConfig.setScreenSaverConfig(this._aScreenSaverConfig);
                this.addRenderingZone(newRenderingZone);
            }
            return errorNo;
        };
        RE_RenderingZonePool.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
            this._aScreenSaverConfig = aScreenSaverConfig;
        };
        RE_RenderingZonePool.prototype.getScreenSaverConfig = function () {
            return this._aScreenSaverConfig;
        };
        RE_RenderingZonePool.prototype.addRenderingZone = function (renderingZone) {
            this._renderingZoneList.push(renderingZone);
        };
        RE_RenderingZonePool.prototype.reset = function () {
            var i = 0;
            for (i = 0; i < this._renderingZoneList.length; i++) {
                this._renderingZoneList[i].reset();
            }
        };
        RE_RenderingZonePool.prototype.copy = function (src) {
            if (src == null)
                return 1;
            return 0;
        };
        RE_RenderingZonePool.prototype.getRenderingZoneList = function () {
            return this._renderingZoneList;
        };
        RE_RenderingZonePool.prototype.getRenderingZoneByZoneId = function (zoneId) {
            var foundRenderingZone = null;
            var i = 0;
            for (i = 0; i < this._renderingZoneList.length; i++) {
                if (this._renderingZoneList[i]._iRenderingZoneConfig.getZoneId() != zoneId)
                    continue;
                foundRenderingZone = this._renderingZoneList[i];
                break;
            }
            var a = 1;
            if (foundRenderingZone == null) {
                a = 2;
            }
            return foundRenderingZone;
        };
        RE_RenderingZonePool.prototype.getFreeRenderingZone_new = function () {
            var freeRenderingZone = null;
            var isFirstTime = true;
            var startZoneIdx = this._crtZoneIndex;
            while (true) {
                if (this._crtZoneIndex >= this._renderingZoneList.length)
                    this._crtZoneIndex = 0;
                if (!isFirstTime) {
                    isFirstTime = false;
                    if (this._crtZoneIndex == startZoneIdx)
                        break;
                }
                if (this._renderingZoneList[this._crtZoneIndex] == null) {
                    this._crtZoneIndex++;
                    continue;
                }
                if (!this._renderingZoneList[this._crtZoneIndex].isFree()) {
                    this._crtZoneIndex++;
                    continue;
                }
                if (!this._renderingZoneList[this._crtZoneIndex].setIsFree(false)) {
                    this._crtZoneIndex++;
                    continue;
                }
                freeRenderingZone = this._renderingZoneList[this._crtZoneIndex];
                this._crtZoneIndex++;
                break;
            }
            return freeRenderingZone;
        };
        RE_RenderingZonePool.prototype.getFreeRenderingZone = function () {
            var freeRenderingZone = null;
            var i = 0;
            for (i = 0; i < this._renderingZoneList.length; i++) {
                if (this._renderingZoneList[i] == null)
                    continue;
                if (!this._renderingZoneList[i].isFree())
                    continue;
                if (!this._renderingZoneList[i].setIsFree(false))
                    continue;
                freeRenderingZone = this._renderingZoneList[i];
                break;
            }
            return freeRenderingZone;
        };
        RE_RenderingZonePool.prototype.releaseRenderingZone = function (renderingZone) {
            if (renderingZone == null)
                return false;
            renderingZone.setIsFree(true);
            return true;
        };
        return RE_RenderingZonePool;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderingZonePool = RE_RenderingZonePool;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderingZonePool.js.map