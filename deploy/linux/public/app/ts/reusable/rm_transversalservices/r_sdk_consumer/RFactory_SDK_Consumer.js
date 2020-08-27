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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer"], function (require, exports, rmGeneralServiceFactory, mod_R_SDK_Consumer) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RFactory_SDK_Consumer = /** @class */ (function (_super) {
            __extends(RFactory_SDK_Consumer, _super);
            function RFactory_SDK_Consumer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_SDK_Consumer.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server"], (dyn_R_SDK_Server : typeof mod_R_SDK_Server) => 
                //{  
                return new mod_R_SDK_Consumer.rm_transversalservices.R_SDK_Consumer(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RFactory_SDK_Consumer;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_transversalservices.RFactory_SDK_Consumer = RFactory_SDK_Consumer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RFactory_SDK_Consumer.js.map