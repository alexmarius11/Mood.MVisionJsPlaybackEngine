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
    var rm_general;
    (function (rm_general) {
        var R_PowerSaveModeInfo = /** @class */ (function (_super) {
            __extends(R_PowerSaveModeInfo, _super);
            //----------- constructor 
            function R_PowerSaveModeInfo() {
                var _this = _super.call(this) || this;
                _this._enabledSmartEnergySaving = false; //ses: true,
                _this._displayPowerMngMode = "off"; //dpmMode: Signage.DpmMode.OFF,
                _this._automaticStandbyMode = "off"; //automaticStandby: Signage.AutomaticStandbyMode.OFF
                _this._enabled15MinOff = false; //do15MinOff: true      
                return _this;
            }
            //-----------------------------
            R_PowerSaveModeInfo.prototype.isEnableSmartEnergySaving = function () {
                return this._enabledSmartEnergySaving;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.enableSmartEnergySaving = function (enabledSmartEnergySaving) {
                this._enabledSmartEnergySaving = enabledSmartEnergySaving;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.getDisplayPowerManagementMode = function () {
                return this._displayPowerMngMode;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.setDisplayPowerManagementMode = function (displayPowerManagementMode) {
                this._displayPowerMngMode = displayPowerManagementMode;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.getAutomaticStandbyMode = function () {
                return this._automaticStandbyMode;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.setAutomaticStandbyMode = function (automaticStandbyMode) {
                this._automaticStandbyMode = automaticStandbyMode;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.isEnabled15MinOff = function () {
                return this._enabled15MinOff;
            };
            //-----------------------------
            R_PowerSaveModeInfo.prototype.setEnabled15MinOff = function (enabled15MinOff) {
                this._enabled15MinOff = enabled15MinOff;
            };
            return R_PowerSaveModeInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_PowerSaveModeInfo = R_PowerSaveModeInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_PowerSaveModeInfo.js.map