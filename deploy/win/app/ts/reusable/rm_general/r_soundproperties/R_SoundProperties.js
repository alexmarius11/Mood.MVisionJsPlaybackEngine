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
    var R_SoundProperties = (function (_super) {
        __extends(R_SoundProperties, _super);
        function R_SoundProperties() {
            var _this = _super.call(this) || this;
            _this._volumeLevel = 50;
            _this._mute = false;
            _this._soundBalance = 50;
            _this._soundMode = "normal";
            _this._soundSpeaker = "tvsignage";
            return _this;
        }
        R_SoundProperties.prototype.setVolumeLevel = function (volumeLevel) {
            this._volumeLevel = volumeLevel;
        };
        R_SoundProperties.prototype.getVolumeLevel = function () {
            return this._volumeLevel;
        };
        R_SoundProperties.prototype.setMute = function (mute) {
            this._mute = mute;
        };
        R_SoundProperties.prototype.isMute = function () {
            return this._mute;
        };
        R_SoundProperties.prototype.setSoundBalance = function (soundBalance) {
            this._soundBalance = soundBalance;
        };
        R_SoundProperties.prototype.getSoundBalance = function () {
            return this._soundBalance;
        };
        R_SoundProperties.prototype.setSoundMode = function (soundMode) {
            this._soundMode = soundMode;
        };
        R_SoundProperties.prototype.getSoundMode = function () {
            return this._soundMode;
        };
        R_SoundProperties.prototype.setSoundSpeaker = function (soundSpeaker) {
            this._soundSpeaker = soundSpeaker;
        };
        R_SoundProperties.prototype.getSoundSpeaker = function () {
            return this._soundSpeaker;
        };
        return R_SoundProperties;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_SoundProperties = R_SoundProperties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_SoundProperties.js.map