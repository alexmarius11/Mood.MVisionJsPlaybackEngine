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
    //import e = require("express");
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RE_RenderParams_ContainerPosAndSize = /** @class */ (function (_super) {
            __extends(RE_RenderParams_ContainerPosAndSize, _super);
            //--------------------------
            function RE_RenderParams_ContainerPosAndSize() {
                var _this = _super.call(this) || this;
                _this._usingPercents = false;
                _this._containerLeft = -1;
                _this._containerRight = -1;
                _this._containerTop = -1;
                _this._containerBottom = -1;
                _this._containerPercentLeft = -1;
                _this._containerPercentRight = -1;
                _this._containerPercentTop = -1;
                _this._containerPercentBottom = -1;
                _this._containerClientZoneLeft = -1;
                _this._containerClientZoneRight = -1;
                _this._containerClientZoneTop = -1;
                _this._containerClientZoneBottom = -1;
                _this._containerClientZonePercentLeft = -1;
                _this._containerClientZonePercentRight = -1;
                _this._containerClientZonePercentTop = -1;
                _this._containerClientZonePercentBottom = -1;
                _this._containerZOrder = 0;
                //---------------------------
                _this._containerOrigLeft = -1;
                _this._containerOrigRight = -1;
                _this._containerOrigTop = -1;
                _this._containerOrigBottom = -1;
                _this._containerOrigPercentLeft = -1;
                _this._containerOrigPercentRight = -1;
                _this._containerOrigPercentTop = -1;
                _this._containerOrigPercentBottom = -1;
                _this._containerClientZoneOrigLeft = -1;
                _this._containerClientZoneOrigRight = -1;
                _this._containerClientZoneOrigTop = -1;
                _this._containerClientZoneOrigBottom = -1;
                _this._containerClientZoneOrigPercentLeft = -1;
                _this._containerClientZoneOrigPercentRight = -1;
                _this._containerClientZoneOrigPercentTop = -1;
                _this._containerClientZoneOrigPercentBottom = -1;
                return _this;
            }
            //--------------------------
            RE_RenderParams_ContainerPosAndSize.prototype.reset = function () {
                this._usingPercents = false;
                this._containerLeft = -1;
                this._containerRight = -1;
                this._containerTop = -1;
                this._containerBottom = -1;
                this._containerPercentLeft = -1;
                this._containerPercentRight = -1;
                this._containerPercentTop = -1;
                this._containerPercentBottom = -1;
                this._containerClientZoneLeft = -1;
                this._containerClientZoneRight = -1;
                this._containerClientZoneTop = -1;
                this._containerClientZoneBottom = -1;
                this._containerClientZonePercentLeft = -1;
                this._containerClientZonePercentRight = -1;
                this._containerClientZonePercentTop = -1;
                this._containerClientZonePercentBottom = -1;
                this._containerZOrder = 0;
                //---------------------------
                this._containerOrigLeft = -1;
                this._containerOrigRight = -1;
                this._containerOrigTop = -1;
                this._containerOrigBottom = -1;
                this._containerOrigPercentLeft = -1;
                this._containerOrigPercentRight = -1;
                this._containerOrigPercentTop = -1;
                this._containerOrigPercentBottom = -1;
                this._containerClientZoneOrigLeft = -1;
                this._containerClientZoneOrigRight = -1;
                this._containerClientZoneOrigTop = -1;
                this._containerClientZoneOrigBottom = -1;
                this._containerClientZoneOrigPercentLeft = -1;
                this._containerClientZoneOrigPercentRight = -1;
                this._containerClientZoneOrigPercentTop = -1;
                this._containerClientZoneOrigPercentBottom = -1;
            };
            //---------------
            RE_RenderParams_ContainerPosAndSize.prototype.setUsingPercents = function (usingPercents) {
                this._usingPercents = usingPercents;
            };
            //---------------
            RE_RenderParams_ContainerPosAndSize.prototype.isUsingPercents = function () {
                return this._usingPercents;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerLeft = function () {
                return this._containerLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerRight = function () {
                return this._containerRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerTop = function () {
                return this._containerTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerBottom = function () {
                return this._containerBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerWidth = function () {
                return this._containerRight - this._containerLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerHeight = function () {
                return this._containerBottom - this._containerTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentLeft = function () {
                return this._containerPercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentRight = function () {
                return this._containerPercentRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentTop = function () {
                return this._containerPercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentBottom = function () {
                return this._containerPercentBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentWidth = function () {
                return this._containerPercentRight - this._containerPercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerPercentHeight = function () {
                return this._containerPercentBottom - this._containerPercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneLeft = function () {
                return this._containerClientZoneLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneRight = function () {
                return this._containerClientZoneRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneTop = function () {
                return this._containerClientZoneTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneBottom = function () {
                return this._containerClientZoneBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneWidth = function () {
                return this._containerClientZoneRight - this._containerClientZoneLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneHeight = function () {
                return this._containerClientZoneBottom - this._containerClientZoneTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentLeft = function () {
                return this._containerClientZonePercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentRight = function () {
                return this._containerClientZonePercentRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentTop = function () {
                return this._containerClientZonePercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentBottom = function () {
                return this._containerClientZonePercentBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentWidth = function () {
                return this._containerClientZonePercentRight - this._containerClientZonePercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZonePercentHeight = function () {
                return this._containerClientZonePercentBottom - this._containerClientZonePercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.setContainerZOrder = function (containerZOrder) {
                this._containerZOrder = containerZOrder;
                return 0;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerZOrder = function () {
                return this._containerZOrder;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.setAllPosAndSizes = function (containerLeft, containerTop, containerRight, containerBottom, containerClientZoneLeft, containerClientZoneTop, containerClientZoneRight, containerClientZoneBottom) {
                this._containerLeft = containerLeft;
                this._containerTop = containerTop;
                this._containerRight = containerRight;
                this._containerBottom = containerBottom;
                if ((containerClientZoneLeft == -1) && (containerClientZoneTop == -1) &&
                    (containerClientZoneRight == -1) && (containerClientZoneBottom == -1)) {
                    this._containerClientZoneLeft = 0;
                    this._containerClientZoneTop = 0;
                    this._containerClientZoneRight = this._containerRight - this._containerLeft;
                    this._containerClientZoneBottom = this._containerBottom - this._containerTop;
                }
                else {
                    this._containerClientZoneLeft = containerClientZoneLeft;
                    this._containerClientZoneTop = containerClientZoneTop;
                    this._containerClientZoneRight = containerClientZoneRight;
                    this._containerClientZoneBottom = containerClientZoneBottom;
                }
                return 0;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.copy = function (src) {
                if (src == null)
                    return 1;
                this._usingPercents = src.isUsingPercents();
                this._containerLeft = src.getContainerLeft();
                this._containerTop = src.getContainerTop();
                this._containerRight = src.getContainerRight();
                this._containerBottom = src.getContainerBottom();
                this._containerClientZoneLeft = src.getContainerClientZoneLeft();
                this._containerClientZoneTop = src.getContainerClientZoneTop();
                this._containerClientZoneRight = src.getContainerClientZoneRight();
                this._containerClientZoneBottom = src.getContainerClientZoneBottom();
                this._containerPercentLeft = src.getContainerPercentLeft();
                this._containerPercentTop = src.getContainerPercentTop();
                this._containerPercentRight = src.getContainerPercentRight();
                this._containerPercentBottom = src.getContainerPercentBottom();
                this._containerClientZonePercentLeft = src.getContainerClientZonePercentLeft();
                this._containerClientZonePercentTop = src.getContainerClientZonePercentTop();
                this._containerClientZonePercentRight = src.getContainerClientZonePercentRight();
                this._containerClientZonePercentBottom = src.getContainerClientZonePercentBottom();
                this._containerZOrder = src.getContainerZOrder();
                return 0;
            };
            //--------------------------
            RE_RenderParams_ContainerPosAndSize.prototype.setAllPosAndSizesInPercentages = function (containerPercentLeft, containerPercentTop, containerPercentRight, containerPercentBottom, containerClientZonePercentLeft, containerClientZonePercentTop, containerClientZonePercentRight, containerClientZonePercentBottom, screenLeft, screenTop, screenRight, screenBottom) {
                this._containerPercentLeft = containerPercentLeft;
                this._containerPercentTop = containerPercentTop;
                this._containerPercentRight = containerPercentRight;
                this._containerPercentBottom = containerPercentBottom;
                this._containerClientZonePercentLeft = containerClientZonePercentLeft;
                this._containerClientZonePercentTop = containerClientZonePercentTop;
                this._containerClientZonePercentRight = containerClientZonePercentRight;
                this._containerClientZonePercentBottom = containerClientZonePercentBottom;
                this._containerLeft = Math.round(containerPercentLeft * (screenRight - screenLeft) + screenLeft);
                this._containerTop = Math.round(containerPercentTop * (screenBottom - screenTop) + screenTop);
                this._containerRight = Math.round(containerPercentRight * (screenRight - screenLeft) + screenLeft);
                this._containerBottom = Math.round(containerPercentBottom * (screenBottom - screenTop) + screenTop);
                if ((containerClientZonePercentLeft == -1) && (containerClientZonePercentTop == -1) &&
                    (containerClientZonePercentRight == -1) && (containerClientZonePercentBottom == -1)) {
                    this._containerClientZoneLeft = 0;
                    this._containerClientZoneTop = 0;
                    this._containerClientZoneRight = this._containerRight - this._containerLeft;
                    this._containerClientZoneBottom = this._containerBottom - this._containerTop;
                }
                else {
                    this._containerClientZoneLeft = Math.round(containerClientZonePercentLeft * (screenRight - screenLeft) + screenLeft);
                    this._containerClientZoneTop = Math.round(containerClientZonePercentTop * (screenBottom - screenTop) + screenTop);
                    this._containerClientZoneRight = Math.round(containerClientZonePercentRight * (screenRight - screenLeft) + screenLeft);
                    this._containerClientZoneBottom = Math.round(containerClientZonePercentBottom * (screenBottom - screenTop) + screenTop);
                }
                this._usingPercents = true;
                return 0;
            };
            //===================================
            //------------------------------------------------------------------------------------
            RE_RenderParams_ContainerPosAndSize.prototype.setOrigAllPosAndSizes = function (containerOrigLeft, containerOrigTop, containerOrigRight, containerOrigBottom, containerClientOrigLeft, containerClientOrigTop, containerClientOrigRight, containerClientOrigBottom) {
                //--------
                this._containerOrigLeft = containerOrigLeft;
                this._containerOrigRight = containerOrigRight;
                this._containerOrigTop = containerOrigTop;
                this._containerOrigBottom = containerOrigBottom;
                this._containerClientZoneOrigPercentLeft = containerClientOrigLeft;
                this._containerClientZoneOrigPercentRight = containerClientOrigRight;
                this._containerClientZoneOrigPercentTop = containerClientOrigTop;
                this._containerClientZoneOrigPercentBottom = containerClientOrigBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigLeft = function () {
                return this._containerOrigLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigRight = function () {
                return this._containerOrigRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigTop = function () {
                return this._containerOrigTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigBottom = function () {
                return this._containerOrigBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigLeft = function () {
                return this._containerClientZoneOrigLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigRight = function () {
                return this._containerClientZoneOrigRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigTop = function () {
                return this._containerClientZoneOrigTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigBottom = function () {
                return this._containerClientZoneOrigBottom;
            };
            //------------------------------------------------------------------------------------
            RE_RenderParams_ContainerPosAndSize.prototype.setOrigAllPosAndSizesInPercentages = function (containerOrigPercentLeft, containerOrigPercentTop, containerOrigPercentRight, containerOrigPercentBottom, containerClientOrigPercentLeft, containerClientOrigPercentTop, containerClientOrigPercentRight, containerClientOrigPercentBottom) {
                //--------
                this._containerOrigPercentLeft = containerOrigPercentLeft;
                this._containerOrigPercentRight = containerOrigPercentRight;
                this._containerOrigPercentTop = containerOrigPercentTop;
                this._containerOrigPercentBottom = containerOrigPercentBottom;
                this._containerClientZoneOrigPercentLeft = containerClientOrigPercentLeft;
                this._containerClientZoneOrigPercentRight = containerClientOrigPercentRight;
                this._containerClientZoneOrigPercentTop = containerClientOrigPercentTop;
                this._containerClientZoneOrigPercentBottom = containerClientOrigPercentBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigPercentLeft = function () {
                return this._containerOrigPercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigPercentRight = function () {
                return this._containerOrigPercentRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigPercentTop = function () {
                return this._containerOrigPercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerOrigPercentBottom = function () {
                return this._containerOrigPercentBottom;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigPercentLeft = function () {
                return this._containerClientZoneOrigPercentLeft;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigPercentRight = function () {
                return this._containerClientZoneOrigPercentRight;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigPercentTop = function () {
                return this._containerClientZoneOrigPercentTop;
            };
            //------------
            RE_RenderParams_ContainerPosAndSize.prototype.getContainerClientZoneOrigPercentBottom = function () {
                return this._containerClientZoneOrigPercentBottom;
            };
            return RE_RenderParams_ContainerPosAndSize;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_renderingservices.RE_RenderParams_ContainerPosAndSize = RE_RenderParams_ContainerPosAndSize;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RE_RenderParams_ContainerPosAndSize.js.map