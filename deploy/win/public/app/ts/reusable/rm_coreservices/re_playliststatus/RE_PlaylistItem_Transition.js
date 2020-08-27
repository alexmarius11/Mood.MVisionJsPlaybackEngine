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
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_Transition = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_Transition, _super);
            //----------------
            function RE_PlaylistItem_Transition() {
                var _this = _super.call(this) || this;
                _this._status = null;
                return _this;
            }
            //--------------------
            // set/get status
            //--------------------
            //-----------------------
            RE_PlaylistItem_Transition.prototype.setStatus = function (status) {
                this._status = status;
            };
            //----------------
            RE_PlaylistItem_Transition.prototype.getStatus = function () {
                return this._status;
            };
            return RE_PlaylistItem_Transition;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_coreservices.RE_PlaylistItem_Transition = RE_PlaylistItem_Transition;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_Transition.js.map