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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_config/RE_Config"], function (require, exports, rmConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistControllerConfig = /** @class */ (function (_super) {
            __extends(RE_PlaylistControllerConfig, _super);
            //-----------------------
            function RE_PlaylistControllerConfig() {
                var _this = _super.call(this) || this;
                _this._prepareParams_initialPoolNb = 0;
                _this._runParams_initialPoolNb = 0;
                _this._stopParams_initialPoolNb = 0;
                _this._statusParams_initialPoolNb = 0;
                return _this;
            }
            //---------------------
            RE_PlaylistControllerConfig.prototype.getInitialPoolNb_OfPrepareParams = function () {
                return this._prepareParams_initialPoolNb;
            };
            //----------------------
            RE_PlaylistControllerConfig.prototype.setInitialPoolNb_OfPrepareParams = function (nbPrepareParams) {
                this._prepareParams_initialPoolNb = nbPrepareParams;
            };
            //---------------------
            RE_PlaylistControllerConfig.prototype.getInitialPoolNb_OfRunParams = function () {
                return this._runParams_initialPoolNb;
            };
            //---------------------
            RE_PlaylistControllerConfig.prototype.setInitialPoolNb_OfRunParams = function (nbRunParams) {
                this._runParams_initialPoolNb = nbRunParams;
            };
            //----------------------
            RE_PlaylistControllerConfig.prototype.getInitialPoolNb_OfStopParams = function () {
                return this._stopParams_initialPoolNb;
            };
            //---------------------
            RE_PlaylistControllerConfig.prototype.setInitialPoolNb_OfStopParams = function (nbStopParams) {
                this._stopParams_initialPoolNb = nbStopParams;
            };
            //---------------------
            RE_PlaylistControllerConfig.prototype.getInitialPoolNb_OfStatusParams = function () {
                return this._statusParams_initialPoolNb;
            };
            //---------------------
            RE_PlaylistControllerConfig.prototype.setInitialPoolNb_OfStatusParams = function (nbStatusParams) {
                this._statusParams_initialPoolNb = nbStatusParams;
            };
            return RE_PlaylistControllerConfig;
        }(rmConfig.rm_general.RE_Config));
        rm_coreservices.RE_PlaylistControllerConfig = RE_PlaylistControllerConfig;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistControllerConfig.js.map