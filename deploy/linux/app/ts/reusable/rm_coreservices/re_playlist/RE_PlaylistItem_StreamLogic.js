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
var amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");
var rmPlaylistItemPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_StreamLogic = (function (_super) {
        __extends(RE_PlaylistItem_StreamLogic, _super);
        function RE_PlaylistItem_StreamLogic() {
            var _this = _super.call(this) || this;
            _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority;
            _this._hasARenderingRepresentation = false;
            _this._hasARenderingZone = true;
            _this._hasMultiplay = false;
            return _this;
        }
        RE_PlaylistItem_StreamLogic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return false;
        };
        return RE_PlaylistItem_StreamLogic;
    }(rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic));
    rm_coreservices.RE_PlaylistItem_StreamLogic = RE_PlaylistItem_StreamLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_StreamLogic.js.map