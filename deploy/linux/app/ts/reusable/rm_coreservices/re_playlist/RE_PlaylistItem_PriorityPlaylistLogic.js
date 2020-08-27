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
var amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
var amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");
var rmPlaylistItemContainerLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ContainerLogic");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_PriorityPlaylistLogic = (function (_super) {
        __extends(RE_PlaylistItem_PriorityPlaylistLogic, _super);
        function RE_PlaylistItem_PriorityPlaylistLogic() {
            var _this = _super.call(this) || this;
            _this._hasARenderingRepresentation = false;
            _this._hasARenderingZone = true;
            _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Select_fromTheBegining_ByPriority;
            _this._hasMultiplay = true;
            _this._status_End = null;
            _this._status_Disable = null;
            _this._status_Error = null;
            _this._status_StatusRequestToAbortOrEndBeforePlay_List = null;
            _this._status_RequestToPlay_List = null;
            _this._status_Play_List = null;
            _this._status_RequestToSuspend_List = null;
            _this._status_Suspended = null;
            _this._status_RequestToResume_List = null;
            _this._status_RequestToAbort_List = null;
            _this._status_RequestToEnd_List = null;
            return _this;
        }
        RE_PlaylistItem_PriorityPlaylistLogic.prototype.reset = function () {
            _super.prototype.reset.call(this);
            if (this._status_End != null)
                this._status_End.reset2();
            if (this._status_Disable != null)
                this._status_Disable.reset2();
            if (this._status_Error != null)
                this._status_Error.reset2();
            if (this._status_StatusRequestToAbortOrEndBeforePlay_List != null)
                this._status_StatusRequestToAbortOrEndBeforePlay_List.reset2();
            if (this._status_RequestToPlay_List != null)
                this._status_RequestToPlay_List.reset2();
            if (this._status_Play_List != null)
                this._status_Play_List.reset2();
            if (this._status_RequestToSuspend_List != null)
                this._status_RequestToSuspend_List.reset2();
            if (this._status_Suspended != null)
                this._status_Suspended.reset2();
            if (this._status_RequestToResume_List != null)
                this._status_RequestToResume_List.reset2();
            if (this._status_RequestToAbort_List != null)
                this._status_RequestToAbort_List.reset2();
            if (this._status_RequestToEnd_List != null)
                this._status_RequestToEnd_List.reset2();
        };
        RE_PlaylistItem_PriorityPlaylistLogic.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_End = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusEnd(error);
            this._status_Disable = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusDisable(error);
            this._status_Error = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusError(error);
            this._status_StatusRequestToAbortOrEndBeforePlay_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error);
            ;
            this._status_RequestToPlay_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToPlay_List(error);
            this._status_Play_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusPlay_List(error);
            this._status_Suspended = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusSuspended(error);
            this._status_RequestToSuspend_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToSuspend_List(error);
            this._status_RequestToResume_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToResume_List(error);
            this._status_RequestToAbort_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToAbort_List(error);
            this._status_RequestToEnd_List = this._aSrvLocator._iEntityCreation.createDefaultPlaylistItemStatusRequestToEnd_List(error);
            this._status_End.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Disable.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Error.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_StatusRequestToAbortOrEndBeforePlay_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToPlay_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Play_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_Suspended.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToSuspend_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToResume_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToAbort_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_RequestToEnd_List.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
            this._status_End.setDiagram(this);
            this._status_Disable.setDiagram(this);
            this._status_Error.setDiagram(this);
            this._status_StatusRequestToAbortOrEndBeforePlay_List.setDiagram(this);
            this._status_RequestToPlay_List.setDiagram(this);
            this._status_Play_List.setDiagram(this);
            this._status_Suspended.setDiagram(this);
            this._status_RequestToSuspend_List.setDiagram(this);
            this._status_RequestToResume_List.setDiagram(this);
            this._status_RequestToAbort_List.setDiagram(this);
            this._status_RequestToEnd_List.setDiagram(this);
            this._status_End._transitionTo_StatusDisable.setStatus(this._status_Disable);
            this._status_End._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_List);
            this._status_Disable._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_Error._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToPlay_or_Similar.setStatus(this._status_RequestToPlay_List);
            this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_StatusRequestToAbortOrEndBeforePlay_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_RequestToPlay_List._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_RequestToPlay_List._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToPlay_List._transitionTo_StatusPlay.setStatus(this._status_Play_List);
            this._status_RequestToPlay_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_RequestToPlay_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_RequestToPlay_List._transitionTo_StatusRequestToAbortOrEndBeforePlay.setStatus(this._status_StatusRequestToAbortOrEndBeforePlay_List);
            this._status_Play_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_Play_List._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_Play_List._transitionTo_StatusRequestToPlay.setStatus(this._status_RequestToPlay_List);
            this._status_Play_List._transitionTo_StatusRequestToSuspend.setStatus(this._status_RequestToSuspend_List);
            this._status_Play_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_Play_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_Play_List._transitionTo_StatusRequestToAbortOrEndBeforePlay.setStatus(this._status_StatusRequestToAbortOrEndBeforePlay_List);
            this._status_RequestToSuspend_List._transitionTo_StatusSuspended.setStatus(this._status_Play_List);
            this._status_RequestToSuspend_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_RequestToSuspend_List._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToSuspend_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_RequestToSuspend_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_Suspended._transitionTo_StatusRequestToResume.setStatus(this._status_RequestToResume_List);
            this._status_Suspended._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_Suspended._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_Suspended._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_Suspended._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_RequestToResume_List._transitionTo_StatusPlay.setStatus(this._status_Play_List);
            this._status_RequestToResume_List._transitionTo_StatusEnd_or_Similar.setStatus(this._status_End);
            this._status_RequestToResume_List._transitionTo_StatusError.setStatus(this._status_Error);
            this._status_RequestToResume_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_RequestToResume_List._transitionTo_StatusRequestToEnd.setStatus(this._status_RequestToEnd_List);
            this._status_RequestToEnd_List._transitionTo_StatusEnd.setStatus(this._status_End);
            this._status_RequestToEnd_List._transitionTo_StatusRequestToAbort.setStatus(this._status_RequestToAbort_List);
            this._status_RequestToAbort_List._transitionTo_StatusEnd.setStatus(this._status_End);
            return 0;
        };
        RE_PlaylistItem_PriorityPlaylistLogic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            return false;
        };
        RE_PlaylistItem_PriorityPlaylistLogic.prototype.receiveEvent = function (event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
            switch (this._status) {
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_End:
                    return this._status_End.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Disable:
                    return this._status_Disable.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Error:
                    return this._status_Error.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestEndOrAbortBeforePlay_List:
                    return this._status_StatusRequestToAbortOrEndBeforePlay_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToPlay_List:
                    return this._status_RequestToPlay_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Play_List:
                    return this._status_Play_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToSuspend_List:
                    return this._status_RequestToSuspend_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_Suspended:
                    return this._status_Suspended.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToResume_List:
                    return this._status_RequestToResume_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToAbort_List:
                    return this._status_RequestToAbort_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                case amPlaylistItemStatusType.am_coreservices.AE_PlaylistItemStatusType.PlaylistItemStatusType_RequestToEnd_List:
                    return this._status_RequestToEnd_List.receiveEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
                default:
                    return this.ignoreEvent(event, eventQueue, error, aPlaylistController, aRenderingController, context, callback);
            }
        };
        return RE_PlaylistItem_PriorityPlaylistLogic;
    }(rmPlaylistItemContainerLogic.rm_coreservices.RE_PlaylistItem_ContainerLogic));
    rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic = RE_PlaylistItem_PriorityPlaylistLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_PriorityPlaylistLogic.js.map