"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var IImpl_PlaylistController_Run = (function () {
        function IImpl_PlaylistController_Run(owner) {
            this._owner = owner;
        }
        IImpl_PlaylistController_Run.prototype.startMainLoop = function (error, context, callback) {
            this._owner.startMainLoop(error, context, callback);
        };
        IImpl_PlaylistController_Run.prototype.endMainLoop = function (error, context, callback) {
            this._owner.endMainLoop(error, context, callback);
        };
        IImpl_PlaylistController_Run.prototype.mainLoop = function (error, context, callback) {
            this._owner.mainLoop(error, context, callback);
        };
        IImpl_PlaylistController_Run.prototype.receiveEvent = function (event, eventQueue, error, context, callback) {
            this._owner.receiveEvent(event, eventQueue, error, context, callback);
        };
        return IImpl_PlaylistController_Run;
    }());
    rm_coreservices.IImpl_PlaylistController_Run = IImpl_PlaylistController_Run;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=IImpl_PlaylistController_Run.js.map