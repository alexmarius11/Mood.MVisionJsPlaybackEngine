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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity", "../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings"], function (require, exports, rmGeneralEntityFactory, rmPlaybackHardwareSettings) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_playback;
    (function (rm_playback) {
        var RFactory_HardwareSettings = /** @class */ (function (_super) {
            __extends(RFactory_HardwareSettings, _super);
            function RFactory_HardwareSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_HardwareSettings.prototype.createEntity = function (entityName, error) {
                return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings();
            };
            return RFactory_HardwareSettings;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_playback.RFactory_HardwareSettings = RFactory_HardwareSettings;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
//# sourceMappingURL=RFactory_HardwareSettings.js.map