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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunner", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmCoreServices, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var REFactory_PlaylistItem_TVTunner = /** @class */ (function (_super) {
            __extends(REFactory_PlaylistItem_TVTunner, _super);
            function REFactory_PlaylistItem_TVTunner() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_PlaylistItem_TVTunner.prototype.createEntity = function (entityName, error) {
                return new rmCoreServices.rm_coreservices.RE_PlaylistItem_TVTunner();
            };
            return REFactory_PlaylistItem_TVTunner;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_coreservices.REFactory_PlaylistItem_TVTunner = REFactory_PlaylistItem_TVTunner;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=REFactory_PlaylistItem_TVTunner.js.map