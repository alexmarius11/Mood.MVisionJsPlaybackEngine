define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_XmlConfiguratorMain_Client = /** @class */ (function () {
            //----------- constructor 
            function IImpl_XmlConfiguratorMain_Client(owner) {
                this._owner = owner;
            }
            //----------------------
            IImpl_XmlConfiguratorMain_Client.prototype.getXmlJsonObject = function (fileStorage, fileFolder, fileName, error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "fileStorage": fileStorage,
                    "fileFolder": fileFolder,
                    "fileName": fileName,
                };
                this._owner._socket.emit('xmlconfigurator.main.getxmljsonobject', params);
            };
            return IImpl_XmlConfiguratorMain_Client;
        }());
        rm_transversalservices.IImpl_XmlConfiguratorMain_Client = IImpl_XmlConfiguratorMain_Client;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_XmlConfiguratorMain_Client.js.map