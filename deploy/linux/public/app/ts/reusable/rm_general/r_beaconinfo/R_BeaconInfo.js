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
        var R_BeaconInfo = /** @class */ (function (_super) {
            __extends(R_BeaconInfo, _super);
            //----------- constructor 
            function R_BeaconInfo() {
                var _this = _super.call(this) || this;
                _this._enabled = false; // true,
                _this._uuid = ""; // "f7826da64fa24e988024bc5b71e0893e",
                _this._major = 0; // 5000,
                _this._minor = 0; // 3000
                return _this;
            }
            //------------------------------
            R_BeaconInfo.prototype.isEnabled = function () {
                return this._enabled;
            };
            //------------------------------
            R_BeaconInfo.prototype.setEnabled = function (enabled) {
                this._enabled = enabled;
            };
            //------------------------------
            R_BeaconInfo.prototype.getUUID = function () {
                return this._uuid;
            };
            //------------------------------
            R_BeaconInfo.prototype.setUUID = function (uuid) {
                this._uuid = uuid;
            };
            //------------------------------
            R_BeaconInfo.prototype.getMajor = function () {
                return this._major;
            };
            //------------------------------
            R_BeaconInfo.prototype.setMajor = function (major) {
                this._major = major;
            };
            //------------------------------
            R_BeaconInfo.prototype.getMinor = function () {
                return this._minor;
            };
            //------------------------------
            R_BeaconInfo.prototype.setMinor = function (minor) {
                this._minor = minor;
            };
            return R_BeaconInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_BeaconInfo = R_BeaconInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_BeaconInfo.js.map