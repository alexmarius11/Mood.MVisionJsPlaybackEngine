"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_XmlConfiguratorRemoteService_Server = (function () {
        function IImpl_XmlConfiguratorRemoteService_Server(owner) {
            this._owner = owner;
        }
        IImpl_XmlConfiguratorRemoteService_Server.prototype.send = function (socket, params) {
        };
        IImpl_XmlConfiguratorRemoteService_Server.prototype.receive = function (socket, params) {
            var owner = this._owner;
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
        };
        IImpl_XmlConfiguratorRemoteService_Server.prototype.startup_withConnectClient = function (remoteServerUrl) {
        };
        IImpl_XmlConfiguratorRemoteService_Server.prototype.startup = function (socket) {
        };
        return IImpl_XmlConfiguratorRemoteService_Server;
    }());
    rm_transversalservices.IImpl_XmlConfiguratorRemoteService_Server = IImpl_XmlConfiguratorRemoteService_Server;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_XmlConfiguratorRemoteService_Server.js.map