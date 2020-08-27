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
        var R_FactoryDescriptions = /** @class */ (function (_super) {
            __extends(R_FactoryDescriptions, _super);
            //----------- constructor 
            function R_FactoryDescriptions() {
                var _this = _super.call(this) || this;
                _this._list = new Array();
                return _this;
            }
            //------------------------------
            R_FactoryDescriptions.prototype.getFactoryDescriptions = function (error) {
                return this._list;
            };
            //-------------------------------
            R_FactoryDescriptions.prototype.getFactoryDescriptionByName = function (factoryName, error) {
                this._list.forEach(function (crtFactoryDesc, index) {
                    if (crtFactoryDesc._factoryName == factoryName)
                        return crtFactoryDesc;
                });
                return null;
            };
            //--------------------------
            R_FactoryDescriptions.prototype.addFactoryDescription = function (factoryDescription, error) {
                this._list.push(factoryDescription);
            };
            //--------------------------
            R_FactoryDescriptions.prototype.removeFactoryDescription = function (factoryName, error) {
                var _this = this;
                this._list.forEach(function (crtFactoryDesc, index) {
                    if (crtFactoryDesc._factoryName == factoryName)
                        _this._list.splice(index, 1);
                    return index;
                });
                return -1;
            };
            return R_FactoryDescriptions;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_FactoryDescriptions = R_FactoryDescriptions;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_FactoryDescriptions.js.map