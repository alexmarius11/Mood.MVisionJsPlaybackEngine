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
var rmPlaylistItemPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
var amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_TagLogic = (function (_super) {
        __extends(RE_PlaylistItem_TagLogic, _super);
        function RE_PlaylistItem_TagLogic() {
            var _this = _super.call(this) || this;
            _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId;
            _this._hasMultiplay = false;
            _this._hasARenderingRepresentation = false;
            _this._hasARenderingZone = false;
            _this.__crtNbChildrenChoosed = 0;
            _this.__nbMaxChildrenToChoose = 1;
            _this._tagId = null;
            _this._realTag = null;
            return _this;
        }
        RE_PlaylistItem_TagLogic.prototype.getTagId = function () {
            return this._tagId;
        };
        RE_PlaylistItem_TagLogic.prototype.setTagId = function (tagId) {
            this._tagId = tagId;
        };
        RE_PlaylistItem_TagLogic.prototype.getRealTag = function () {
            return this._realTag;
        };
        RE_PlaylistItem_TagLogic.prototype.setRealTag = function (realTag) {
            this._realTag = realTag;
        };
        RE_PlaylistItem_TagLogic.prototype.getRealTagRandom = function () {
            if (this._realTag == null)
                return null;
            return this._realTag.getRealTagRandom();
        };
        RE_PlaylistItem_TagLogic.prototype.setRealTagRandom = function (realTagRandom) {
            if (this._realTag == null)
                return null;
            return this._realTag.setRealTagRandom(realTagRandom);
        };
        return RE_PlaylistItem_TagLogic;
    }(rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic));
    rm_coreservices.RE_PlaylistItem_TagLogic = RE_PlaylistItem_TagLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_TagLogic.js.map