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
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort"], function (require, exports, amPlaylistItemStatusType, amPlaylistItemEventType, rmPlaylistItemStatus) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_StatusRequestToAbort_List = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_StatusRequestToAbort_List, _super);
            //----------------
            function RE_PlaylistItem_StatusRequestToAbort_List() {
                var _this = _super.call(this) || this;
                _this._statusName = "REQUEST-TO-ABORT_LIST";
                _this._lastAbortChildIdx = -1;
                _this._lastAbortChild = null;
                return _this;
            }
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                return 0;
            };
            //=========================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.reset2 = function () {
                this._lastAbortChildIdx = -1;
                this._lastAbortChild = null;
            };
            //=========================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.reset = function () {
                this._lastAbortChildIdx = -1;
                this._lastAbortChild = null;
            };
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.passToMe = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                this.getDiagram().setStatusCode(amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List);
                //---- specific actions
                this.reset();
                this.requestNextChildToAbortAndEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.requestNextChildToAbortAndEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                var nextChildToEnd = this.getContainerDiagram().cmd_selectNextStartedChild(this._lastAbortChildIdx, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                if (nextChildToEnd == null) {
                    this._lastAbortChild = null;
                    this._lastAbortChildIdx = -1;
                    this.reset2();
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
                this._lastAbortChild = nextChildToEnd;
                this._lastAbortChildIdx = this._lastAbortChild.getLogic().getOwnerIdxAsChild();
                //---------
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, this._lastAbortChild.getLogic(), null, this._lastAbortChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.onNotify_ChildEnd = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildEnded = true;
                return this.requestNextChildToAbortAndEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.requestCrtChildToAbort = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //---------- 
                if (this._lastAbortChild == null) {
                    this.reset2();
                    this._transitionTo_StatusEnd.getStatus().passToMe(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                    return;
                }
                //------
                this.postEvent(amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort, this._lastAbortChild.getLogic(), null, this._lastAbortChild.getLogic().getOwnerIdxAsChild(), eventQueue, error, context, callback);
            };
            //========================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.onNotify_ChildSuspended = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildSuspended = true;
                return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //========================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.onNotify_ChildError = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildInError = true;
                return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //========================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.onNotify_ChildDisable = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                //this._bAtLeastOneChildDisable = true;
                return this.requestCrtChildToAbort(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            //======================
            RE_PlaylistItem_StatusRequestToAbort_List.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                if (this.getDiagram().getStatusCode() != amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List)
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                switch (event.getEventId()) {
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToEnd:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToAbort:
                        break;
                    //--- in the End Status you cannot passed a playlist-item in the status Suspended or to Resume the suspension
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToSuspend:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToResume:
                        break;
                    //---- a media item has no playlist children -- but has a natural child
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildPlay:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd:
                        this.onNotify_ChildEnd(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildDisable:
                        //this.onNotify_ChildDisable(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildError:
                        //this.onNotify_ChildError(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildSuspended:
                        //this.onNotify_ChildSuspended(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);  
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildResumed:
                        break;
                    case amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyGraphicDescendantEnd:
                        break;
                    default:
                }
                return this.returnWithCallback(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            };
            return RE_PlaylistItem_StatusRequestToAbort_List;
        }(rmPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort));
        rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_List = RE_PlaylistItem_StatusRequestToAbort_List;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_StatusRequestToAbort_List.js.map