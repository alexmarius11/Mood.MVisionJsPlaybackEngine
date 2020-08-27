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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/IImpl_PlaylistDownloader_R"], function (require, exports, rmGeneral, rmCoreServiceIImplPlaylistDownloader) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var R_PlaylistDownloader = /** @class */ (function (_super) {
            __extends(R_PlaylistDownloader, _super);
            //----------- constructor 
            function R_PlaylistDownloader(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iPlaylistDownloader = new rmCoreServiceIImplPlaylistDownloader.rm_coreservices.IImpl_PlaylistDownloader_R(_this);
                _this._aLogService = aLogService;
                return _this;
            }
            return R_PlaylistDownloader;
        }(rmGeneral.rm_general.R_Service));
        rm_coreservices.R_PlaylistDownloader = R_PlaylistDownloader;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=R_PlaylistDownloader.js.map