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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV"], function (require, exports, rmGeneralServiceFactory, mod_R_SDK_JsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import mod_N_SDK_WebOS  = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RFactory_SDK_JsTV = /** @class */ (function (_super) {
            __extends(RFactory_SDK_JsTV, _super);
            function RFactory_SDK_JsTV() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_SDK_JsTV.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS"], (dyn_N_SDK_WebOS : typeof mod_N_SDK_WebOS) => 
                //{  
                return new mod_R_SDK_JsTV.rm_transversalservices.R_SDK_JsTV(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RFactory_SDK_JsTV;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_transversalservices.RFactory_SDK_JsTV = RFactory_SDK_JsTV;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RFactory_SDK_JsTV.js.map