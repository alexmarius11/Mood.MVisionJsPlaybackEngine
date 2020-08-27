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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/IImpl_PlaylistWatcher_R"], function (require, exports, rmGeneral, rmCoreServiceIImplPlaylistWatcher) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var R_PlaylistWatcher = /** @class */ (function (_super) {
            __extends(R_PlaylistWatcher, _super);
            //----------- constructor 
            function R_PlaylistWatcher(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iPlaylistWatcher = new rmCoreServiceIImplPlaylistWatcher.rm_coreservices.IImpl_PlaylistWatcher_R(_this);
                _this._aLogService = aLogService;
                return _this;
            }
            return R_PlaylistWatcher;
        }(rmGeneral.rm_general.R_Service));
        rm_coreservices.R_PlaylistWatcher = R_PlaylistWatcher;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=R_PlaylistWatcher.js.map