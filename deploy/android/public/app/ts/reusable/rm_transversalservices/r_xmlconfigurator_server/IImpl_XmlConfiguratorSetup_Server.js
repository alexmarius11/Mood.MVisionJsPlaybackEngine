define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_XmlConfiguratorSetup_Server = /** @class */ (function () {
            //----------- constructor 
            function IImpl_XmlConfiguratorSetup_Server(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            IImpl_XmlConfiguratorSetup_Server.prototype.loadXMLFiles = function (fileInfoList, error, context, callback) {
                this._owner._aTargetXmlConfigurator._iXmlConfiguratorSetup.loadXMLFiles(fileInfoList, error, context, callback);
            };
            //------------------------------------
            IImpl_XmlConfiguratorSetup_Server.prototype.loadTextFiles = function (fileInfoList, error, context, callback) {
                this._owner._aTargetXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(fileInfoList, error, context, callback);
            };
            return IImpl_XmlConfiguratorSetup_Server;
        }());
        rm_transversalservices.IImpl_XmlConfiguratorSetup_Server = IImpl_XmlConfiguratorSetup_Server;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_XmlConfiguratorSetup_Server.js.map