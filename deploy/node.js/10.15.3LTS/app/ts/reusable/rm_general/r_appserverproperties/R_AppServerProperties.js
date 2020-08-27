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
    var R_AppServerProperties = (function (_super) {
        __extends(R_AppServerProperties, _super);
        function R_AppServerProperties() {
            var _this = _super.call(this) || this;
            _this._appServerIp = "192.168.0.2";
            _this._appServerPort = 80;
            _this._appSecureConnection = false;
            _this._appLaunchMode = "local";
            _this._fqdnMode = false;
            _this._fqdnAddr = "";
            return _this;
        }
        R_AppServerProperties.prototype.getAppServerIp = function () {
            return this._appServerIp;
        };
        R_AppServerProperties.prototype.setAppServerIp = function (appServerIp) {
            this._appServerIp = appServerIp;
        };
        R_AppServerProperties.prototype.getAppServerPort = function () {
            return this._appServerPort;
        };
        R_AppServerProperties.prototype.setAppServerPort = function (appServerPort) {
            this._appServerPort = appServerPort;
        };
        R_AppServerProperties.prototype.getAppSecureConnection = function () {
            return this._appSecureConnection;
        };
        R_AppServerProperties.prototype.setAppSecureConnection = function (appSecureConnection) {
            this._appSecureConnection = appSecureConnection;
        };
        R_AppServerProperties.prototype.getAppLaunchMode = function () {
            return this._appLaunchMode;
        };
        R_AppServerProperties.prototype.setAppLaunchMode = function (appLaunchMode) {
            this._appLaunchMode = appLaunchMode;
        };
        R_AppServerProperties.prototype.getFqdnMode = function () {
            return this._fqdnMode;
        };
        R_AppServerProperties.prototype.setFqdnAddress = function (fqdnAddr) {
            this._fqdnAddr = fqdnAddr;
        };
        R_AppServerProperties.prototype.getFqdnAddress = function () {
            return this._fqdnAddr;
        };
        R_AppServerProperties.prototype.setFqdnMode = function (fqdnMode) {
            this._fqdnMode = fqdnMode;
        };
        return R_AppServerProperties;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_AppServerProperties = R_AppServerProperties;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_AppServerProperties.js.map