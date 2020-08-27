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
    var R_ServiceFactories = (function (_super) {
        __extends(R_ServiceFactories, _super);
        function R_ServiceFactories() {
            var _this = _super.call(this) || this;
            _this._list = new Array();
            return _this;
        }
        R_ServiceFactories.prototype.getServiceFactories = function (error) {
            return this._list;
        };
        R_ServiceFactories.prototype.getServiceFactoryByFactoryName = function (factoryName, error) {
            this._list.forEach(function (crtServiceFactory, index) {
                if (crtServiceFactory.getFactoryName() == factoryName)
                    return crtServiceFactory;
            });
            return null;
        };
        R_ServiceFactories.prototype.addServiceFactory = function (aServiceFactory, error) {
            this._list.push(aServiceFactory);
        };
        R_ServiceFactories.prototype.removeServiceFactoryByFactoryName = function (factoryName, error) {
            var _this = this;
            this._list.forEach(function (crtServiceFactory, index) {
                if (crtServiceFactory.getFactoryName() == factoryName)
                    _this._list.splice(index, 1);
                return index;
            });
            return -1;
        };
        return R_ServiceFactories;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_ServiceFactories = R_ServiceFactories;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_ServiceFactories.js.map