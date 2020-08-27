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
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_ItemPosAndSize = (function (_super) {
        __extends(RE_RenderParams_ItemPosAndSize, _super);
        function RE_RenderParams_ItemPosAndSize() {
            var _this = _super.call(this) || this;
            _this._usingPercents = false;
            _this._itemLeft = -1;
            _this._itemRight = -1;
            _this._itemTop = -1;
            _this._itemBottom = -1;
            _this._itemPercentLeft = -1;
            _this._itemPercentRight = -1;
            _this._itemPercentTop = -1;
            _this._itemPercentBottom = -1;
            _this._itemClientZoneLeft = -1;
            _this._itemClientZoneRight = -1;
            _this._itemClientZoneTop = -1;
            _this._itemClientZoneBottom = -1;
            _this._itemClientZonePercentLeft = -1;
            _this._itemClientZonePercentRight = -1;
            _this._itemClientZonePercentTop = -1;
            _this._itemClientZonePercentBottom = -1;
            return _this;
        }
        RE_RenderParams_ItemPosAndSize.prototype.reset = function () {
            this._usingPercents = false;
            this._itemLeft = -1;
            this._itemRight = -1;
            this._itemTop = -1;
            this._itemBottom = -1;
            this._itemPercentLeft = -1;
            this._itemPercentRight = -1;
            this._itemPercentTop = -1;
            this._itemPercentBottom = -1;
            this._itemClientZoneLeft = -1;
            this._itemClientZoneRight = -1;
            this._itemClientZoneTop = -1;
            this._itemClientZoneBottom = -1;
            this._itemClientZonePercentLeft = -1;
            this._itemClientZonePercentRight = -1;
            this._itemClientZonePercentTop = -1;
            this._itemClientZonePercentBottom = -1;
        };
        RE_RenderParams_ItemPosAndSize.prototype.setUsingPercents = function (usingPercents) {
            this._usingPercents = usingPercents;
        };
        RE_RenderParams_ItemPosAndSize.prototype.isUsingPercents = function () {
            return this._usingPercents;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemLeft = function () {
            return this._itemLeft;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemRight = function () {
            return this._itemRight;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemTop = function () {
            return this._itemTop;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemBottom = function () {
            return this._itemBottom;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemPercentLeft = function () {
            return this._itemPercentLeft;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemPercentRight = function () {
            return this._itemPercentRight;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemPercentTop = function () {
            return this._itemPercentTop;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemPercentBottom = function () {
            return this._itemPercentBottom;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZoneLeft = function () {
            return this._itemClientZoneLeft;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZoneRight = function () {
            return this._itemClientZoneRight;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZoneTop = function () {
            return this._itemClientZoneTop;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZoneBottom = function () {
            return this._itemClientZoneBottom;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZonePercentLeft = function () {
            return this._itemClientZonePercentLeft;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZonePercentRight = function () {
            return this._itemClientZonePercentRight;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZonePercentTop = function () {
            return this._itemClientZonePercentTop;
        };
        RE_RenderParams_ItemPosAndSize.prototype.getItemClientZonePercentBottom = function () {
            return this._itemClientZonePercentBottom;
        };
        RE_RenderParams_ItemPosAndSize.prototype.setAllPosAndSizes = function (itemLeft, itemTop, itemRight, itemBottom, itemClientZoneLeft, itemClientZoneTop, itemClientZoneRight, itemClientZoneBottom) {
            this._itemLeft = itemLeft;
            this._itemTop = itemTop;
            this._itemRight = itemRight;
            this._itemBottom = itemBottom;
            this._itemClientZoneLeft = itemClientZoneLeft;
            this._itemClientZoneTop = itemClientZoneTop;
            this._itemClientZoneRight = itemClientZoneRight;
            this._itemClientZoneBottom = itemClientZoneBottom;
            return 0;
        };
        RE_RenderParams_ItemPosAndSize.prototype.copy = function (src) {
            if (src == null)
                return 1;
            this._usingPercents = src.isUsingPercents();
            this._itemLeft = src.getItemLeft();
            this._itemTop = src.getItemTop();
            this._itemRight = src.getItemRight();
            this._itemBottom = src.getItemBottom();
            this._itemClientZoneLeft = src.getItemClientZoneLeft();
            this._itemClientZoneTop = src.getItemClientZoneTop();
            this._itemClientZoneRight = src.getItemClientZoneRight();
            this._itemClientZoneBottom = src.getItemClientZoneBottom();
            this._itemPercentLeft = src.getItemPercentLeft();
            this._itemPercentTop = src.getItemPercentTop();
            this._itemPercentRight = src.getItemPercentRight();
            this._itemPercentBottom = src.getItemPercentBottom();
            this._itemClientZonePercentLeft = src.getItemClientZonePercentLeft();
            this._itemClientZonePercentTop = src.getItemClientZonePercentTop();
            this._itemClientZonePercentRight = src.getItemClientZonePercentRight();
            this._itemClientZonePercentBottom = src.getItemClientZonePercentBottom();
            return 0;
        };
        RE_RenderParams_ItemPosAndSize.prototype.setAllPosAndSizesInPercentages = function (itemPercentLeft, itemPercentTop, itemPercentRight, itemPercentBottom, itemClientZonePercentLeft, itemClientZonePercentTop, itemClientZonePercentRight, itemClientZonePercentBottom) {
            this._itemLeft = itemPercentLeft;
            this._itemTop = itemPercentTop;
            this._itemRight = itemPercentRight;
            this._itemBottom = itemPercentBottom;
            this._itemClientZoneLeft = itemClientZonePercentLeft;
            this._itemClientZoneTop = itemClientZonePercentTop;
            this._itemClientZoneRight = itemClientZonePercentRight;
            this._itemClientZoneBottom = itemClientZonePercentBottom;
            return 0;
        };
        return RE_RenderParams_ItemPosAndSize;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_renderingservices.RE_RenderParams_ItemPosAndSize = RE_RenderParams_ItemPosAndSize;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_ItemPosAndSize.js.map