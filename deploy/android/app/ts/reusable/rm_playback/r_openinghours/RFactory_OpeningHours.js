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
var rmPlaybackOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours");
var rm_playback;
(function (rm_playback) {
    var RFactory_OpeningHours = (function (_super) {
        __extends(RFactory_OpeningHours, _super);
        function RFactory_OpeningHours() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_OpeningHours.prototype.createEntity = function (entityName, error) {
            return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours();
        };
        return RFactory_OpeningHours;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_playback.RFactory_OpeningHours = RFactory_OpeningHours;
})(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
//# sourceMappingURL=RFactory_OpeningHours.js.map