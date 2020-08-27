define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var am_coreservices;
    (function (am_coreservices) {
        var AE_PlaylistItemEventType;
        (function (AE_PlaylistItemEventType) {
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_RequestToPlay"] = 1] = "EVT_RequestToPlay";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_RequestToAbort"] = 2] = "EVT_RequestToAbort";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_RequestToEnd"] = 3] = "EVT_RequestToEnd";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_RequestToSuspend"] = 8] = "EVT_RequestToSuspend";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_RequestToResume"] = 9] = "EVT_RequestToResume";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildPlay"] = 11] = "EVT_notifyChildPlay";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildEnd"] = 13] = "EVT_notifyChildEnd";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildDisable"] = 14] = "EVT_notifyChildDisable";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildError"] = 15] = "EVT_notifyChildError";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildSuspended"] = 18] = "EVT_notifyChildSuspended";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyChildResumed"] = 19] = "EVT_notifyChildResumed";
            AE_PlaylistItemEventType[AE_PlaylistItemEventType["EVT_notifyGraphicDescendantEnd"] = 23] = "EVT_notifyGraphicDescendantEnd";
        })(AE_PlaylistItemEventType = am_coreservices.AE_PlaylistItemEventType || (am_coreservices.AE_PlaylistItemEventType = {}));
    })(am_coreservices = exports.am_coreservices || (exports.am_coreservices = {}));
});
//# sourceMappingURL=AE_PlaylistItemEventType.js.map