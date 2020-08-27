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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity", "../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours"], function (require, exports, rmGeneralEntityFactory, rmPlaybackDayOpeningHours) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_playback;
    (function (rm_playback) {
        var RFactory_DayOpeningHours = /** @class */ (function (_super) {
            __extends(RFactory_DayOpeningHours, _super);
            function RFactory_DayOpeningHours() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_DayOpeningHours.prototype.createEntity = function (entityName, error) {
                return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours();
            };
            return RFactory_DayOpeningHours;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_playback.RFactory_DayOpeningHours = RFactory_DayOpeningHours;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
//# sourceMappingURL=RFactory_DayOpeningHours.js.map