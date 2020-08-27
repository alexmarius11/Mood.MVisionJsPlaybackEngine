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
    var R_EntityFactories = (function (_super) {
        __extends(R_EntityFactories, _super);
        function R_EntityFactories() {
            var _this = _super.call(this) || this;
            _this._list = new Array();
            return _this;
        }
        R_EntityFactories.prototype.getEntityFactories = function (error) {
            return this._list;
        };
        R_EntityFactories.prototype.getEntityFactoryByEntityName = function (entityName, error) {
            this._list.forEach(function (crtEntityFactory, index) {
                if (crtEntityFactory.getEntityName() == entityName)
                    return crtEntityFactory;
            });
            return null;
        };
        R_EntityFactories.prototype.addEntityFactory = function (aEntityFactory, error) {
            this._list.push(aEntityFactory);
        };
        R_EntityFactories.prototype.removeEntityFactoryByEntityName = function (entityName, error) {
            var _this = this;
            this._list.forEach(function (crtEntityFactory, index) {
                if (crtEntityFactory.getEntityName() == entityName)
                    _this._list.splice(index, 1);
                return index;
            });
            return -1;
        };
        return R_EntityFactories;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_EntityFactories = R_EntityFactories;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_EntityFactories.js.map