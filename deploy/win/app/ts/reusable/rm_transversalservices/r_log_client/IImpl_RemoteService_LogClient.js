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
var rmGeneralRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_RemoteService_LogClient = (function (_super) {
        __extends(IImpl_RemoteService_LogClient, _super);
        function IImpl_RemoteService_LogClient(owner) {
            var _this = _super.call(this, owner) || this;
            _this._owner = owner;
            return _this;
        }
        IImpl_RemoteService_LogClient.prototype.setRemoteUrl = function (url) {
        };
        IImpl_RemoteService_LogClient.prototype.send = function (socket, params) {
        };
        IImpl_RemoteService_LogClient.prototype.receive = function (socket, params) {
            var owner = this._owner;
            this._owner._socket.on('log.logmain.ret-log', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    if (owner._aLogConsumer == null)
                        return;
                    if (owner._aLogConsumer._iNotifyLogMain == null)
                        return;
                    owner._aLogConsumer._iNotifyLogMain.notify_log(null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('log.logconfig.ret-setfileinfo', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    if (owner._aLogConsumer == null)
                        return;
                    if (owner._aLogConsumer._iNotifyLogMain == null)
                        return;
                    owner._aLogConsumer._iNotifyLogMain.notify_log(null, null, null, ctx, null);
                }
            });
        };
        IImpl_RemoteService_LogClient.prototype.startup_withConnectClient = function (remoteServerUrl) {
            return this._owner.startup_withConnectClient(remoteServerUrl);
        };
        IImpl_RemoteService_LogClient.prototype.startup = function (socket) {
            return this._owner.startup(socket);
        };
        return IImpl_RemoteService_LogClient;
    }(rmGeneralRemoteService.rm_general.IImpl_RemoteService_R));
    rm_transversalservices.IImpl_RemoteService_LogClient = IImpl_RemoteService_LogClient;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_RemoteService_LogClient.js.map