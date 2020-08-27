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
        var R_TimeZone = /** @class */ (function (_super) {
            __extends(R_TimeZone, _super);
            //----------- constructor 
            function R_TimeZone() {
                var _this = _super.call(this) || this;
                _this._continent = "";
                _this._country = "";
                _this._city = "";
                return _this;
            }
            //---------------------
            R_TimeZone.prototype.setContinent = function (continent) {
                this._continent = continent;
            };
            //----------------------
            R_TimeZone.prototype.getContinent = function () {
                return this._continent;
            };
            //---------------------
            R_TimeZone.prototype.setCountry = function (country) {
                this._country = country;
            };
            //----------------------
            R_TimeZone.prototype.getCountry = function () {
                return this._country;
            };
            //---------------------
            R_TimeZone.prototype.setCity = function (city) {
                this._city = city;
            };
            //----------------------
            R_TimeZone.prototype.getCity = function () {
                return this._city;
            };
            //----------------------
            R_TimeZone.prototype.getAsString = function () {
                return this._continent + " - " + this._country + " - " + this._city;
            };
            return R_TimeZone;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_TimeZone = R_TimeZone;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_TimeZone.js.map