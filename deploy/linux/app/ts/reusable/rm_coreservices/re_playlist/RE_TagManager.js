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
var rm_coreservices;
(function (rm_coreservices) {
    var RE_TagManager = (function (_super) {
        __extends(RE_TagManager, _super);
        function RE_TagManager() {
            var _this = _super.call(this) || this;
            _this._mapOfRealTags = new Map();
            return _this;
        }
        RE_TagManager.prototype.getRealTag = function (tagId) {
            return this._mapOfRealTags.get(tagId);
        };
        RE_TagManager.prototype.hasRealTag = function (tagId) {
            return this._mapOfRealTags.has(tagId);
        };
        RE_TagManager.prototype.addRealTag = function (tagId, realTag) {
            if (!this._mapOfRealTags.has(tagId))
                return false;
            this._mapOfRealTags.set(tagId, realTag);
            return true;
        };
        RE_TagManager.prototype.addRealTagIfNotExists = function (tagId, realTag) {
            if (this._mapOfRealTags.has(tagId))
                return false;
            this._mapOfRealTags.set(tagId, realTag);
            return true;
        };
        RE_TagManager.prototype.deleteRealTag = function (tagId) {
            return this._mapOfRealTags.delete(tagId);
        };
        RE_TagManager.prototype.clearAllRealTags = function () {
            this._mapOfRealTags.clear();
        };
        RE_TagManager.prototype.toJSONString = function () {
            return "";
        };
        return RE_TagManager;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_coreservices.RE_TagManager = RE_TagManager;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_TagManager.js.map