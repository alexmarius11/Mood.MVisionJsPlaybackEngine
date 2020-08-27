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
        var R_Properties = /** @class */ (function (_super) {
            __extends(R_Properties, _super);
            //----------- constructor 
            function R_Properties() {
                var _this = _super.call(this) || this;
                _this._list = new Array();
                return _this;
            }
            //----------------------------
            R_Properties.prototype.getProperties = function (error) {
                return this._list;
            };
            //-------------------------------
            R_Properties.prototype.getPropertyByName = function (propertyName, error) {
                this._list.forEach(function (crtProperty, index) {
                    if (crtProperty.getName() == propertyName)
                        return crtProperty;
                });
                return null;
            };
            //--------------------------
            R_Properties.prototype.addProperty = function (property, error) {
                this._list.push(property);
            };
            //--------------------------
            R_Properties.prototype.removeProperty = function (propertyName, error) {
                var _this = this;
                this._list.forEach(function (crtProperty, index) {
                    if (crtProperty.getName() == propertyName)
                        _this._list.splice(index, 1);
                    return index;
                });
                return -1;
            };
            return R_Properties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_Properties = R_Properties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_Properties.js.map