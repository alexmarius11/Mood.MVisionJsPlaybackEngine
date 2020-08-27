"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var R_NetworkProxyProperties = (function (_super) {
        __extends(R_NetworkProxyProperties, _super);
        function R_NetworkProxyProperties() {
            var _this = _super.call(this) || this;
            _this._isEnabled = false;
            _this._ipAddress = "0.0.0.0";
            _this._password = "";
            _this._port = 80;
            _this._userName = "";
            return _this;
        }
        R_NetworkProxyProperties.prototype.isEnable = function () {
            return this._isEnabled;
        };
        R_NetworkProxyProperties.prototype.setEnable = function (isEnabled) {
            this._isEnabled = isEnabled;
        };
        R_NetworkProxyProperties.prototype.getIP = function () {
            return this._ipAddress;
        };
        R_NetworkProxyProperties.prototype.setIP = function (ipAddress) {
            this._ipAddress = ipAddress;
        };
        R_NetworkProxyProperties.prototype.setPort = function (port) {
            this._port = port;
        };
        R_NetworkProxyProperties.prototype.getPort = function () {
            return this._port;
        };
        R_NetworkProxyProperties.prototype.setPassword = function (password) {
            this._password = password;
        };
        R_NetworkProxyProperties.prototype.getPassword = function () {
            return this._password;
        };
        R_NetworkProxyProperties.prototype.getUserName = function () {
            return this._userName;
        };
        R_NetworkProxyProperties.prototype.setUserName = function (userName) {
            this._userName = userName;
        };
        return R_NetworkProxyProperties;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_NetworkProxyProperties = R_NetworkProxyProperties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_NetworkProxyProperties.js.map