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
var rmPlaylistItemLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistItem_RealTagLogic = (function (_super) {
        __extends(RE_PlaylistItem_RealTagLogic, _super);
        function RE_PlaylistItem_RealTagLogic() {
            return _super.call(this) || this;
        }
        return RE_PlaylistItem_RealTagLogic;
    }(rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic));
    rm_coreservices.RE_PlaylistItem_RealTagLogic = RE_PlaylistItem_RealTagLogic;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistItem_RealTagLogic.js.map