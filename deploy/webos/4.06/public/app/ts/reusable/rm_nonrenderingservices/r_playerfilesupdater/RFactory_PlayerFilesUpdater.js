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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/R_PlayerFilesUpdater"], function (require, exports, rmGeneralServiceFactory, mod_R_PlayerFilesUpdater) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RFactory_PlayerFilesUpdater = /** @class */ (function (_super) {
            __extends(RFactory_PlayerFilesUpdater, _super);
            function RFactory_PlayerFilesUpdater() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_PlayerFilesUpdater.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS"], (dyn_N_VideoRenderer_WebOS : typeof mod_N_VideoRenderer_WebOS) => 
                //{  
                return new mod_R_PlayerFilesUpdater.rm_nonrenderingservices.R_PlayerFilesUpdater(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RFactory_PlayerFilesUpdater;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_nonrenderingservices.RFactory_PlayerFilesUpdater = RFactory_PlayerFilesUpdater;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RFactory_PlayerFilesUpdater.js.map