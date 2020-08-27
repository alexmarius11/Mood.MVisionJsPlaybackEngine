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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R"], function (require, exports, rmGeneralRemoteService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_XmlConfiguratorRemoteService_Client = /** @class */ (function (_super) {
            __extends(IImpl_XmlConfiguratorRemoteService_Client, _super);
            //----------- constructor 
            function IImpl_XmlConfiguratorRemoteService_Client(owner) {
                var _this = _super.call(this, owner) || this;
                _this._owner = owner;
                return _this;
            }
            //---------------------------------------------
            IImpl_XmlConfiguratorRemoteService_Client.prototype.setRemoteUrl = function (url) {
                //this._owner.setRemoteUrl(url);  
            };
            //------------------------------
            IImpl_XmlConfiguratorRemoteService_Client.prototype.send = function (socket, params) {
            };
            //------------------------------
            IImpl_XmlConfiguratorRemoteService_Client.prototype.receive = function (socket, params) {
                var owner = this._owner;
                //-------------------------
                this._owner._socket.on('xmlconfigurator.main.ret-getxmljsonobject', function (ctx) {
                    owner._iService.runCallback(ctx);
                    //if (! owner._iService.runCallback(ctx))
                    //owner._aLogConsumer._iNotifyLogMain.notify_log(null,null,null, ctx, null);
                    //document.getElementById("filesystem").innerHTML = strFileSystem;        
                });
            };
            //-----------------------------------
            IImpl_XmlConfiguratorRemoteService_Client.prototype.startup_withConnectClient = function (remoteServerUrl) {
                return this._owner.startup_withConnectClient(remoteServerUrl);
            };
            //-----------------------------------
            IImpl_XmlConfiguratorRemoteService_Client.prototype.startup = function (socket) {
                return this._owner.startup(socket);
            };
            return IImpl_XmlConfiguratorRemoteService_Client;
        }(rmGeneralRemoteService.rm_general.IImpl_RemoteService_R));
        rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Client = IImpl_XmlConfiguratorRemoteService_Client;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_XmlConfiguratorRemoteService_Client.js.map