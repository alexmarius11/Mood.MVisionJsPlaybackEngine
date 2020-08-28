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
var rmPlaylistItemPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
var amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_DesignLogic = (function (_super) {
        __extends(RE_PlaylistItem_DesignLogic, _super);
        function RE_PlaylistItem_DesignLogic() {
            var _this = _super.call(this) || this;
            _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
            _this._hasMultiplay = true;
            _this._hasARenderingRepresentation = false;
            _this._hasARenderingZone = false;
            _this._sameChildToPlay = null;
            return _this;
        }
        RE_PlaylistItem_DesignLogic.prototype.reset = function () {
            _super.prototype.reset.call(this);
            this._sameChildToPlay = null;
        };
        RE_PlaylistItem_DesignLogic.prototype.setSameChildToPlay = function (sameChildToPlay) {
            this._sameChildToPlay = sameChildToPlay;
            if (this._sameChildToPlay == null)
                return false;
            return true;
        };
        RE_PlaylistItem_DesignLogic.prototype.getSameChildToPlay = function () {
            return this._sameChildToPlay;
        };
        RE_PlaylistItem_DesignLogic.prototype.setSameChildToPlayAsLastStartedOne = function (sameChildToPlay) {
            if (sameChildToPlay == null)
                return false;
            var aParent;
            aParent = this.getOwner().getParent();
            if (aParent == null)
                return null;
            var aParentlogic = aParent.getLogic();
            aParentlogic._status_RequestToPlay_List.setLastStartedChild(sameChildToPlay);
            return true;
        };
        RE_PlaylistItem_DesignLogic.prototype.cmd_acceptChildRequestToEndParent = function (crtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            var crtSameChildToPlay = this.getSameChildToPlay();
            var realCrtChildIdx = crtChildIdx;
            if (crtSameChildToPlay != null)
                realCrtChildIdx = crtSameChildToPlay.getLogic().getOwnerIdxAsChild();
            var newSameChildToPlay = this.hasTheSameChildNextToPlay(realCrtChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            if (newSameChildToPlay != null) {
                this.setSameChildToPlay(newSameChildToPlay);
                this.setSameChildToPlayAsLastStartedOne(newSameChildToPlay);
                return false;
            }
            return true;
        };
        RE_PlaylistItem_DesignLogic.prototype.hasActiveRenderingDescendantsToPlayAndItself = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            if (this.isDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
                return false;
            if (this.hasAtLeastOneAncestorDisable(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback))
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
                if (crtChild.getPlaylistItemType() != amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_DesignMainZone)
                    continue;
                hasGraphicChildToPlay = crtChild.getLogic().hasActiveRenderingDescendantsToPlayAndItself(refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (hasGraphicChildToPlay)
                    return true;
            }
            return false;
        };
        return RE_PlaylistItem_DesignLogic;
    }(rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic));
    rm_coreservices.RE_PlaylistItem_DesignLogic = RE_PlaylistItem_DesignLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_DesignLogic.js.map