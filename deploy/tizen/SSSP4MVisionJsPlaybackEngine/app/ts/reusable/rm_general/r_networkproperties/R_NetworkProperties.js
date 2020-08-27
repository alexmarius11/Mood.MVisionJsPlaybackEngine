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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties", "../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo"], function (require, exports, rmGeneralEntity, rmGeneralNetworkCardProperties, rmGeneralNetworkProxyProperties, rmGeneralWifiConnectionInfo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_NetworkProperties = /** @class */ (function (_super) {
            __extends(R_NetworkProperties, _super);
            //----------- constructor 
            function R_NetworkProperties() {
                var _this = _super.call(this) || this;
                _this._wiredNetCardProp = new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
                _this._wifiNetCardProp = new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
                _this._proxyNetProp = new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties();
                _this._wifiConnInfo = new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo();
                return _this;
            }
            return R_NetworkProperties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_NetworkProperties = R_NetworkProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_NetworkProperties.js.map