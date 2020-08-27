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
    var R_Context = (function (_super) {
        __extends(R_Context, _super);
        function R_Context() {
            var _this = _super.call(this) || this;
            _this._arrayResult = null;
            _this._result = null;
            _this._error = null;
            _this._bResult = null;
            _this._objectResult = null;
            _this._object2Result = null;
            _this._bRemoteCallback = false;
            return _this;
        }
        R_Context.prototype.isError = function () {
            if (this._error == null)
                return false;
            return this._error.isError();
        };
        R_Context.prototype.setError = function (error) {
            this._error = error;
        };
        R_Context.prototype.getError = function () {
            return this._error;
        };
        R_Context.prototype.setResult = function (result) {
            this._result = result;
        };
        R_Context.prototype.getResult = function () {
            return this._result;
        };
        R_Context.prototype.setBoolResult = function (bResult) {
            this._bResult = bResult;
        };
        R_Context.prototype.getBoolResult = function () {
            return this._bResult;
        };
        R_Context.prototype.setIntResult = function (iResult) {
            this._iResult = iResult;
        };
        R_Context.prototype.getIntResult = function () {
            return this._iResult;
        };
        R_Context.prototype.setDoubleResult = function (dResult) {
            this._dResult = dResult;
        };
        R_Context.prototype.getDoubleResult = function () {
            return this._dResult;
        };
        R_Context.prototype.setArrayResult = function (arrayResult) {
            this._arrayResult = arrayResult;
        };
        R_Context.prototype.getArrayResult = function () {
            return this._arrayResult;
        };
        R_Context.prototype.setObjectResult = function (objectResult) {
            this._objectResult = objectResult;
        };
        R_Context.prototype.getObjectResult = function () {
            return this._objectResult;
        };
        R_Context.prototype.getObject2Result = function () {
            return this._object2Result;
        };
        R_Context.prototype.setObject2Result = function (object2Result) {
            this._object2Result = object2Result;
        };
        R_Context.prototype.isRemoteCallback = function () {
            return this._bRemoteCallback;
        };
        R_Context.prototype.setRemoteCallback = function (bRemoteCallback) {
            this._bRemoteCallback = bRemoteCallback;
        };
        R_Context.prototype.getCallId = function () {
            return this._callId;
        };
        R_Context.prototype.setCallId = function (callId) {
            this._callId = callId;
        };
        return R_Context;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_Context = R_Context;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_Context.js.map