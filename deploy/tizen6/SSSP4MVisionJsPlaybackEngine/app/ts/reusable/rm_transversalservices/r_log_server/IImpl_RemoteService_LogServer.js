define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_RemoteService_LogServer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_RemoteService_LogServer(owner) {
                this._owner = owner;
            }
            //------------------------------
            IImpl_RemoteService_LogServer.prototype.send = function (socket, params) {
            };
            //------------------------------
            IImpl_RemoteService_LogServer.prototype.receive = function (socket, params) {
                // whenever we receive a 'message' we log it out
                var owner = this._owner;
                //socket.on("message", function(message: any) {
                //  console.log(message);
                //  socket.emit("ret-get-message", message);
                //});
                //------------------------------------------      
                socket.on('log.logmain.log', function (parameters) {
                    var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    console.log("log.logmain.log" + JSON.stringify(parameters));
                    var callback = function (ctx) {
                        socket.emit("log.logmain.ret-log", ctx);
                    };
                    context.setCallId(parameters.callId);
                    owner._iLogMain.log(parameters.logMsgLevel, parameters.logMsg, error, context, callback);
                });
                //------------------------------------------      
                socket.on('log.logconfig.setfileinfo', function (parameters) {
                    console.log("log.logconfig.setfileinfo" + JSON.stringify(parameters));
                    var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    var aLogFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    var aLogFileUrlInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aLogFileInfo.setStorage(parameters.logStorage);
                    aLogFileInfo.setPath(parameters.logFolder);
                    aLogFileInfo.setName(parameters.logFile);
                    aLogFileUrlInfo.setStorage(parameters.logUrlStorage);
                    aLogFileUrlInfo.setPath(parameters.logUrlFolder);
                    aLogFileUrlInfo.setName(parameters.logUrlFile);
                    var callback = function (ctx) {
                        socket.emit("log.logconfig.ret-setfileinfo", ctx);
                    };
                    context.setCallId(parameters.callId);
                    owner._iLogConfig.setFileInfo(aLogFileInfo, aLogFileUrlInfo, error, context, callback);
                });
            };
            //-----------------------------------
            IImpl_RemoteService_LogServer.prototype.startup_withConnectClient = function (remoteServerUrl) {
            };
            //-----------------------------------
            IImpl_RemoteService_LogServer.prototype.startup = function (socket) {
            };
            return IImpl_RemoteService_LogServer;
        }());
        rm_transversalservices.IImpl_RemoteService_LogServer = IImpl_RemoteService_LogServer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_RemoteService_LogServer.js.map