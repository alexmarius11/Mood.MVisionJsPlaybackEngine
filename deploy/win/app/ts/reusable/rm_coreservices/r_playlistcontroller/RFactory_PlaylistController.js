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
var rmGeneralServiceFactory = require("../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service");
var mod_R_PlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
var rm_coreservices;
(function (rm_coreservices) {
    var RFactory_PlaylistController = (function (_super) {
        __extends(RFactory_PlaylistController, _super);
        function RFactory_PlaylistController() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_PlaylistController.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_PlaylistController.rm_coreservices.R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_PlaylistController;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_coreservices.RFactory_PlaylistController = RFactory_PlaylistController;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RFactory_PlaylistController.js.map