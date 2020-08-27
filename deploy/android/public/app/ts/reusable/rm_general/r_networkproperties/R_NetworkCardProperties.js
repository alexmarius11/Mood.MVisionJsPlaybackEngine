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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_NetworkCardProperties = /** @class */ (function (_super) {
            __extends(R_NetworkCardProperties, _super);
            //----------- constructor 
            function R_NetworkCardProperties() {
                var _this = _super.call(this) || this;
                _this._isEnabled = false;
                _this._method = "manual";
                _this._ipAddress = "0.0.0.0"; /// "192.168.0.2",                                         
                _this._netmask = "255.255.255.0";
                _this._gateway = "192.168.0.1";
                _this._dns1 = "0.0.0.0"; //: "156.147.135.180",                                          
                _this._dns2 = "0.0.0.0"; //dns2 : "156.147.135.181"                                           
                return _this;
            }
            //------------------------------
            R_NetworkCardProperties.prototype.isEnable = function () {
                return this._isEnabled;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setEnable = function (isEnabled) {
                this._isEnabled = isEnabled;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getMethod = function () {
                return this._method;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setMethod = function (method) {
                this._method = method;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getIPAddress = function () {
                return this._ipAddress;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setIpAddress = function (ipAddress) {
                this._ipAddress = ipAddress;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getNetmask = function () {
                return this._netmask;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setNetmask = function (netmask) {
                this._netmask = netmask;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getGateway = function () {
                return this._gateway;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setGateway = function (gateway) {
                this._gateway = gateway;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getDNS1 = function () {
                return this._dns1;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setDNS1 = function (dns1) {
                this._dns1 = dns1;
            };
            //------------------------------
            R_NetworkCardProperties.prototype.getDNS2 = function () {
                return this._dns1;
            };
            //-----------------------------------
            R_NetworkCardProperties.prototype.setDNS2 = function (dns1) {
                this._dns1 = dns1;
            };
            return R_NetworkCardProperties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_NetworkCardProperties = R_NetworkCardProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_NetworkCardProperties.js.map