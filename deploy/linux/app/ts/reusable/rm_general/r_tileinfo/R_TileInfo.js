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
    var R_TileInfo = (function (_super) {
        __extends(R_TileInfo, _super);
        function R_TileInfo() {
            var _this = _super.call(this) || this;
            _this._enabled = false;
            _this._row = 0;
            _this._column = 0;
            _this._tileId = 0;
            _this._naturalMode = false;
            return _this;
        }
        R_TileInfo.prototype.isEnabled = function () {
            return this._enabled;
        };
        R_TileInfo.prototype.setEnabled = function (enabled) {
            this._enabled = enabled;
        };
        R_TileInfo.prototype.getRow = function () {
            return this._row;
        };
        R_TileInfo.prototype.setRow = function (row) {
            this._row = row;
        };
        R_TileInfo.prototype.getColumn = function () {
            return this._column;
        };
        R_TileInfo.prototype.setColumn = function (column) {
            this._column = column;
        };
        R_TileInfo.prototype.getTileId = function () {
            return this._tileId;
        };
        R_TileInfo.prototype.setTileId = function (tileId) {
            this._tileId = tileId;
        };
        R_TileInfo.prototype.getNaturalMode = function () {
            return this._naturalMode;
        };
        R_TileInfo.prototype.setNaturalMode = function (naturalMode) {
            this._naturalMode = naturalMode;
        };
        return R_TileInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_TileInfo = R_TileInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_TileInfo.js.map