define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_XmlConfiguratorRemoteService_Server = /** @class */ (function () {
            //----------- constructor 
            function IImpl_XmlConfiguratorRemoteService_Server(owner) {
                this._owner = owner;
            }
            //------------------------------
            IImpl_XmlConfiguratorRemoteService_Server.prototype.send = function (socket, params) {
            };
            //------------------------------
            IImpl_XmlConfiguratorRemoteService_Server.prototype.receive = function (socket, params) {
                // whenever we receive a 'message' we log it out
                var owner = this._owner;
                //------------------------------------------      
                socket.on('xmlconfigurator.main.getxmljsonobject', function (parameters) {
                    var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    console.log("xmlconfigurator.main.getxmljsonobject" + JSON.stringify(parameters));
                    var callback = function (ctx) {
                        socket.emit("xmlconfigurator.main.ret-getxmljsonobject", ctx);
                    };
                    context.setCallId(parameters.callId);
                    owner._iXmlConfiguratorMain.getXmlJsonObject(parameters.fileStorage, parameters.fileFolder, parameters.fileName, error, context, callback);
                });
                //------------------------------------------      
                socket.on('xmlconfigurator.setup.loadxmlfiles', function (parameters) {
                    var context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    console.log("xmlconfigurator.setup.loadxmlfiles" + JSON.stringify(parameters));
                    var callback = function (ctx) {
                        socket.emit("xmlconfigurator.setup.ret-loadxmlfiles", ctx);
                    };
                    context.setCallId(parameters.callId);
                    var fileInfoList = new Array();
                    var crtFileInfo = null;
                    for (var i = 0; parameters.fileInfo.lenth; i++) {
                        crtFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                        crtFileInfo.setStorage(parameters.fileInfo._storage);
                        crtFileInfo.setPath(parameters.fileInfo._path);
                        crtFileInfo.setFileName(parameters.fileInfo._fileName);
                        fileInfoList.push(crtFileInfo);
                    }
                    owner._iXmlConfiguratorSetup.loadXMLFiles(fileInfoList, error, context, callback);
                });
                //socket.on("message", function(message: any) {
                //  console.log(message);
                //  socket.emit("ret-get-message", message);
                //});
                /*
                //------------------------------------------
                socket.on('log.logmain.log', function(parameters: any)
                {
                  var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                  var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
                  console.log("log.logmain.log" + JSON.stringify(parameters));
                  var callback = function(ctx: amGeneralContext.am_general.A_Context)
                  {
                     socket.emit("log.logmain.ret-log", ctx);
                  }
                  context.setCallId(parameters.callId);
                  owner._iLogMain.log(parameters.logMsgLevel, parameters.logMsg, error, context, callback);
                });
                //------------------------------------------
                socket.on('log.logconfig.setfileinfo', function(parameters: any)
                {
                  console.log("log.logconfig.setfileinfo" + JSON.stringify(parameters));
                  var context:amGeneralContext.am_general.A_Context           = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                  var error:amGeneralError.am_general.A_Error                 = owner._aServiceLocator._iEntityCreation.createDefaultError();
                  var aLogFileInfo:amGeneralFileInfo.am_general.A_FileInfo    = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                  var aLogFileUrlInfo:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                  aLogFileInfo.setStorage(parameters.logStorage);
                  aLogFileInfo.setPath(parameters.logFolder);
                  aLogFileInfo.setName(parameters.logFile);
                  aLogFileUrlInfo.setStorage(parameters.logUrlStorage);
                  aLogFileUrlInfo.setPath(parameters.logUrlFolder);
                  aLogFileUrlInfo.setName(parameters.logUrlFile);
                  var callback = function(ctx: amGeneralContext.am_general.A_Context)
                  {
                     socket.emit("log.logconfig.ret-setfileinfo", ctx);
                  }
                  context.setCallId(parameters.callId);
                  owner._iLogConfig.setFileInfo(aLogFileInfo, aLogFileUrlInfo, error, context, callback);
                });  */
            };
            //-----------------------------------
            IImpl_XmlConfiguratorRemoteService_Server.prototype.startup_withConnectClient = function (remoteServerUrl) {
            };
            //-----------------------------------
            IImpl_XmlConfiguratorRemoteService_Server.prototype.startup = function (socket) {
            };
            return IImpl_XmlConfiguratorRemoteService_Server;
        }());
        rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Server = IImpl_XmlConfiguratorRemoteService_Server;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_XmlConfiguratorRemoteService_Server.js.map