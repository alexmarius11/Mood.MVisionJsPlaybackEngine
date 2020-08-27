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
        var RE_RenderParams_Video = /** @class */ (function (_super) {
            __extends(RE_RenderParams_Video, _super);
            //---------------------------
            function RE_RenderParams_Video() {
                var _this = _super.call(this) || this;
                _this._isCentered = true;
                _this._keepAspectRatio = true;
                _this._syncTimestampNanos = 0;
                _this._videoAudioVolume = 0;
                _this._videoMuteAudio = false;
                _this._videoNaturalWidth = 0;
                _this._videoNaturalHeight = 0;
                return _this;
            }
            //--------------------------
            RE_RenderParams_Video.prototype.reset = function () {
                this._isCentered = true;
                this._keepAspectRatio = true;
                this._syncTimestampNanos = 0;
                this._videoAudioVolume = 0;
                this._videoMuteAudio = false;
                this._videoNaturalWidth = 0;
                this._videoNaturalHeight = 0;
            };
            //---------------
            RE_RenderParams_Video.prototype.setIsCentered = function (isCentered) {
                this._isCentered = isCentered;
            };
            //---------------
            RE_RenderParams_Video.prototype.getIsCentered = function () {
                return this._isCentered;
            };
            //---------------
            RE_RenderParams_Video.prototype.setKeepAspectRatio = function (keepAspectRatio) {
                this._keepAspectRatio = keepAspectRatio;
            };
            //---------------
            RE_RenderParams_Video.prototype.getKeepAspectRatio = function () {
                return this._keepAspectRatio;
            };
            //---------------
            RE_RenderParams_Video.prototype.setSyncTimestampNanos = function (syncTimestampNanos) {
                this._syncTimestampNanos = syncTimestampNanos;
            };
            //---------------
            RE_RenderParams_Video.prototype.getSyncTimestampNanos = function () {
                return this._syncTimestampNanos;
            };
            //---------------
            RE_RenderParams_Video.prototype.getVideoNaturalWidth = function () {
                return this._videoNaturalWidth;
            };
            //---------------
            RE_RenderParams_Video.prototype.setVideoNaturalWidth = function (videoNaturalWidth) {
                this._videoNaturalWidth = videoNaturalWidth;
            };
            //---------------
            RE_RenderParams_Video.prototype.setVideoNaturalHeight = function (videoNaturalHeight) {
                this._videoNaturalHeight = videoNaturalHeight;
            };
            //---------------
            RE_RenderParams_Video.prototype.getVideoNaturalHeight = function () {
                return this._videoNaturalHeight;
            };
            //---------------
            RE_RenderParams_Video.prototype.setVideoAudioVolume = function (videoAudioVolume) {
                if (videoAudioVolume == null) {
                    this._videoAudioVolume = 0;
                    this._videoMuteAudio = true;
                    return;
                }
                if (isNaN(videoAudioVolume)) {
                    this._videoAudioVolume = 0;
                    this._videoMuteAudio = true;
                    return;
                }
                if (videoAudioVolume < 0) {
                    this._videoAudioVolume = 0;
                    this._videoMuteAudio = true;
                    return;
                }
                this._videoAudioVolume = videoAudioVolume;
                if (this._videoAudioVolume == 0)
                    this._videoMuteAudio = true;
                else
                    this._videoMuteAudio = false;
            };
            //---------------
            RE_RenderParams_Video.prototype.getVideoAudioVolume = function () {
                return this._videoAudioVolume;
            };
            //---------------
            RE_RenderParams_Video.prototype.setVideoMuteAudio = function (videoMuteAudio) {
                this._videoMuteAudio = videoMuteAudio;
            };
            //---------------
            RE_RenderParams_Video.prototype.getVideoMuteAudio = function () {
                return this._videoMuteAudio;
            };
            //------------
            RE_RenderParams_Video.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._isCentered = this.getIsCentered();
                this._keepAspectRatio = this.getKeepAspectRatio();
                this._syncTimestampNanos = this.getSyncTimestampNanos();
                this._videoAudioVolume = this.getVideoAudioVolume();
                this._videoMuteAudio = this.getVideoMuteAudio();
                this._videoNaturalWidth = this.getVideoNaturalWidth();
                this._videoNaturalHeight = this.getVideoNaturalHeight();
                0;
                return 0;
            };
            return RE_RenderParams_Video;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_Video = RE_RenderParams_Video;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_Video.js.map