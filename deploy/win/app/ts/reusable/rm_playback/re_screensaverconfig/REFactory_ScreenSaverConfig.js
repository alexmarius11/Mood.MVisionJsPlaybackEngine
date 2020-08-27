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
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rmScreenSaverConfig = require("../../../../../app/ts/reusable/rm_playback/re_screensaverconfig/RE_ScreenSaverConfig");
var rm_playback;
(function (rm_playback) {
    var REFactory_ScreenSaverConfig = (function (_super) {
        __extends(REFactory_ScreenSaverConfig, _super);
        function REFactory_ScreenSaverConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_ScreenSaverConfig.prototype.createEntity = function (entityName, error) {
            return new rmScreenSaverConfig.rm_playback.RE_ScreenSaverConfig();
        };
        return REFactory_ScreenSaverConfig;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_playback.REFactory_ScreenSaverConfig = REFactory_ScreenSaverConfig;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=REFactory_ScreenSaverConfig.js.map