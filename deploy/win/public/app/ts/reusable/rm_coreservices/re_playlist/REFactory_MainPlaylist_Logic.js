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
define(["require", "exports", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist_Logic", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmMainPlaylistLogic, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var REFactory_MainPlaylist_Logic = /** @class */ (function (_super) {
            __extends(REFactory_MainPlaylist_Logic, _super);
            function REFactory_MainPlaylist_Logic() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_MainPlaylist_Logic.prototype.createEntity = function (entityName, error) {
                return new rmMainPlaylistLogic.rm_coreservices.RE_MainPlaylist_Logic();
            };
            return REFactory_MainPlaylist_Logic;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_coreservices.REFactory_MainPlaylist_Logic = REFactory_MainPlaylist_Logic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=REFactory_MainPlaylist_Logic.js.map