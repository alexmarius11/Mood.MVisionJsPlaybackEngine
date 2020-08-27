define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var IImpl_RemoteService_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_RemoteService_R(owner) {
                this._owner = owner;
            }
            //------------------------------
            IImpl_RemoteService_R.prototype.send = function (socket, params) {
            };
            //------------------------------
            IImpl_RemoteService_R.prototype.receive = function (socket, params) {
            };
            //----------------------------------
            IImpl_RemoteService_R.prototype.startup_withConnectClient = function (remoteServerUrl) {
            };
            //-----------------------------------
            IImpl_RemoteService_R.prototype.startup = function (socket) {
            };
            return IImpl_RemoteService_R;
        }());
        rm_general.IImpl_RemoteService_R = IImpl_RemoteService_R;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=IImpl_RemoteService_R.js.map