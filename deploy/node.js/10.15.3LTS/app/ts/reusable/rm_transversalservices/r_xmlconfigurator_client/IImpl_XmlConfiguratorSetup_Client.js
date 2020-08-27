"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_XmlConfiguratorSetup_Client = (function () {
        function IImpl_XmlConfiguratorSetup_Client(owner) {
            this._owner = owner;
        }
        IImpl_XmlConfiguratorSetup_Client.prototype.loadXMLFiles = function (fileInfoList, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                fileInfo: [],
                "callId": callId,
            };
            for (var i = 0; i < fileInfoList.length; i++) {
                params.fileInfo.push({
                    "_storage": fileInfoList[i].getStorage(),
                    "_path": fileInfoList[i].getPath(),
                    "_fileName": fileInfoList[i].getName(),
                });
            }
            this._owner._socket.emit('xmlconfigurator.setup.loadxmlfiles', params);
        };
        return IImpl_XmlConfiguratorSetup_Client;
    }());
    rm_transversalservices.IImpl_XmlConfiguratorSetup_Client = IImpl_XmlConfiguratorSetup_Client;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_XmlConfiguratorSetup_Client.js.map