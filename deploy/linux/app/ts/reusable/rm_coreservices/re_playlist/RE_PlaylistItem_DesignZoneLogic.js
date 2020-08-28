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
var rmPlaylistItemPriorityPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_DesignZoneLogic = (function (_super) {
        __extends(RE_PlaylistItem_DesignZoneLogic, _super);
        function RE_PlaylistItem_DesignZoneLogic() {
            var _this = _super.call(this) || this;
            _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority;
            _this._hasMultiplay = false;
            _this._hasARenderingRepresentation = false;
            _this._hasARenderingZone = true;
            _this._isMainZone = false;
            return _this;
        }
        RE_PlaylistItem_DesignZoneLogic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return false;
        };
        RE_PlaylistItem_DesignZoneLogic.prototype.isMainZone = function () {
            return this._isMainZone;
        };
        RE_PlaylistItem_DesignZoneLogic.prototype.setIsMainZone = function (isMainZone) {
            this._isMainZone = isMainZone;
        };
        RE_PlaylistItem_DesignZoneLogic.prototype.prepareEvent = function (event, eventQueue, error, context, callback) {
        };
        RE_PlaylistItem_DesignZoneLogic.prototype.hasActiveRenderingDescendantsToPlayAndItself = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                return false;
            if (this._hasARenderingRepresentation)
                return true;
            var childrenList = this.getChildrenList();
            if (childrenList == null)
                return false;
            var nbChildren = childrenList.length;
            if (nbChildren == 0)
                return false;
            var hasGraphicChildToPlay = false;
            var crtChild = null;
            for (var childIdx = 0; childIdx < nbChildren; childIdx++) {
                crtChild = childrenList[childIdx];
                hasGraphicChildToPlay = crtChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (hasGraphicChildToPlay)
                    return true;
            }
            return false;
        };
        return RE_PlaylistItem_DesignZoneLogic;
    }(rmPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic));
    rm_coreservices.RE_PlaylistItem_DesignZoneLogic = RE_PlaylistItem_DesignZoneLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_DesignZoneLogic.js.map