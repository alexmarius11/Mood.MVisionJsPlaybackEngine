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
var rm_general;
(function (rm_general) {
    var R_CaptureScreenInfo = (function (_super) {
        __extends(R_CaptureScreenInfo, _super);
        function R_CaptureScreenInfo() {
            var _this = _super.call(this) || this;
            _this._isSavedToFinalPlace = false;
            _this._imgSystemStorage = "";
            _this._imgSystemPath = "";
            _this._imgSystemName = "";
            _this._imgFinalStorage = "";
            _this._imgFinalPath = "";
            _this._imgFinalName = "";
            return _this;
        }
        R_CaptureScreenInfo.prototype.isSavedToFinalPlace = function () {
            return this._isSavedToFinalPlace;
        };
        R_CaptureScreenInfo.prototype.setSavedToFinalPlace = function (isSavedToFinalPlace) {
            this._isSavedToFinalPlace = isSavedToFinalPlace;
        };
        R_CaptureScreenInfo.prototype.setImageSystemStorage = function (imgSystemStorage) {
            this._imgSystemStorage = imgSystemStorage;
        };
        R_CaptureScreenInfo.prototype.getImageSystemStorage = function () {
            return this._imgSystemStorage;
        };
        R_CaptureScreenInfo.prototype.setImageSystemPath = function (imgSystemPath) {
            this._imgSystemPath = imgSystemPath;
        };
        R_CaptureScreenInfo.prototype.getImageSystemPath = function () {
            return this._imgSystemPath;
        };
        R_CaptureScreenInfo.prototype.setImageSystemName = function (imgSystemName) {
            this._imgSystemName = imgSystemName;
        };
        R_CaptureScreenInfo.prototype.getImageSystemName = function () {
            return this._imgSystemPath;
        };
        R_CaptureScreenInfo.prototype.getImageSystemFullName = function () {
            return this._imgSystemStorage + this._imgSystemPath + this._imgSystemName;
        };
        R_CaptureScreenInfo.prototype.setImageFinalStorage = function (imgFinalStorage) {
            this._imgFinalStorage = imgFinalStorage;
        };
        R_CaptureScreenInfo.prototype.getImageFinalStorage = function () {
            return this._imgFinalStorage;
        };
        R_CaptureScreenInfo.prototype.setImageFinalPath = function (imgFinalPath) {
            this._imgFinalPath = imgFinalPath;
        };
        R_CaptureScreenInfo.prototype.getImageFinalPath = function () {
            return this._imgFinalPath;
        };
        R_CaptureScreenInfo.prototype.setImageFinalName = function (imgFinalName) {
            this._imgFinalName = imgFinalName;
        };
        R_CaptureScreenInfo.prototype.getImageFinalName = function () {
            return this._imgFinalName;
        };
        R_CaptureScreenInfo.prototype.getImageFinalFullName = function () {
            return this._imgFinalStorage + this._imgFinalPath + this._imgFinalName;
        };
        return R_CaptureScreenInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_CaptureScreenInfo = R_CaptureScreenInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_CaptureScreenInfo.js.map