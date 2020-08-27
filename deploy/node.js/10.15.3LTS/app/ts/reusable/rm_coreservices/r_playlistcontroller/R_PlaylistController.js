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
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmCoreServiceIImplPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_R");
var rm_coreservices;
(function (rm_coreservices) {
    var R_PlaylistController = (function (_super) {
        __extends(R_PlaylistController, _super);
        function R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iPlaylistController = new rmCoreServiceIImplPlaylistController.rm_coreservices.IImpl_PlaylistController_R(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        return R_PlaylistController;
    }(rmGeneral.rm_general.R_Service));
    rm_coreservices.R_PlaylistController = R_PlaylistController;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=R_PlaylistController.js.map