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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client"], function (require, exports, rmGeneralServiceFactory, mod_R_SDK_Client) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RFactory_SDK_Client = /** @class */ (function (_super) {
            __extends(RFactory_SDK_Client, _super);
            function RFactory_SDK_Client() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_SDK_Client.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server"], (dyn_R_SDK_Server : typeof mod_R_SDK_Server) => 
                //{  
                return new mod_R_SDK_Client.rm_transversalservices.R_SDK_Client(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RFactory_SDK_Client;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_transversalservices.RFactory_SDK_Client = RFactory_SDK_Client;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RFactory_SDK_Client.js.map