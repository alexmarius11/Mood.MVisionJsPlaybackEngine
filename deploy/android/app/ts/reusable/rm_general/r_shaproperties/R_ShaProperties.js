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
    var R_ShaProperties = (function (_super) {
        __extends(R_ShaProperties, _super);
        function R_ShaProperties() {
            var _this = _super.call(this) || this;
            _this._srcFileInfo = null;
            _this._shaFileInfo = null;
            _this._shaString = null;
            return _this;
        }
        R_ShaProperties.prototype.setSrcFileInfo = function (srcFileInfo) {
            this._srcFileInfo = srcFileInfo;
        };
        R_ShaProperties.prototype.getSrcFileInfo = function () {
            return this._srcFileInfo;
        };
        R_ShaProperties.prototype.setShaFileInfo = function (srcFileInfo) {
            this._shaFileInfo = srcFileInfo;
        };
        R_ShaProperties.prototype.getShaFileInfo = function () {
            return this._shaFileInfo;
        };
        R_ShaProperties.prototype.setShaString = function (shaString) {
            this._shaString = shaString;
        };
        R_ShaProperties.prototype.getShaString = function () {
            return this._shaString;
        };
        return R_ShaProperties;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_ShaProperties = R_ShaProperties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_ShaProperties.js.map