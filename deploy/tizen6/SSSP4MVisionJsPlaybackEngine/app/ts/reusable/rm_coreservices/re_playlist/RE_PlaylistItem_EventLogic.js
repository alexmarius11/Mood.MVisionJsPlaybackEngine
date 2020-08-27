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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic"], function (require, exports, rmPlaylistItemPlaylistLogic) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_EventLogic = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_EventLogic, _super);
            //----------------
            function RE_PlaylistItem_EventLogic() {
                var _this = _super.call(this) || this;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = false;
                return _this;
            }
            return RE_PlaylistItem_EventLogic;
        }(rmPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic));
        rm_coreservices.RE_PlaylistItem_EventLogic = RE_PlaylistItem_EventLogic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_EventLogic.js.map