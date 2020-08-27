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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_R", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_Config", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_Control"], function (require, exports, rmGeneral, rmRenderingServices2, rmIRenderingServicesConfig, rmIRenderingServicesControl) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var R_RenderingService = /** @class */ (function (_super) {
            __extends(R_RenderingService, _super);
            //----------- constructor 
            function R_RenderingService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iRenderingService = new rmRenderingServices2.rm_renderingservices.IImpl_RenderingService_R(_this);
                _this._iRenderingServiceConfig = new rmIRenderingServicesConfig.rm_renderingservices.IImpl_RenderingService_Config(_this);
                _this._iRenderingServiceControl = new rmIRenderingServicesControl.rm_renderingservices.IImpl_RenderingService_Control(_this);
                //this._aLogService = aLogService;
                _this._isFree = true;
                _this._crtPrepareParams = null;
                _this._prevPrepareParams = null;
                return _this;
            }
            //-------------------------
            R_RenderingService.prototype.getCrtPrepareParams = function () {
                return this._crtPrepareParams;
            };
            //--------------------------
            R_RenderingService.prototype.setCrtPrepareParams = function (crtPrepareParams) {
                this._prevPrepareParams = this._crtPrepareParams;
                this._crtPrepareParams = crtPrepareParams;
            };
            //-------------------------
            R_RenderingService.prototype.getPrevPrepareParams = function () {
                return this._prevPrepareParams;
            };
            //--------------------------
            R_RenderingService.prototype.setPrevPrepareParams = function (prevPrepareParams) {
                this._prevPrepareParams = prevPrepareParams;
            };
            //-------------------------
            R_RenderingService.prototype.isFree = function () {
                return this._isFree;
            };
            //--------------------------
            R_RenderingService.prototype.setIsFree = function (isFree) {
                this._isFree = isFree;
                return true;
            };
            //------------------------
            R_RenderingService.prototype.reset = function () {
                this._isFree = true;
                this._crtPrepareParams = null;
                this._prevPrepareParams = null;
            };
            //----------------
            R_RenderingService.prototype.canPlayNextMediaItem = function (prepareParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //----------------
            R_RenderingService.prototype.prepareNextMediaItem = function (prepareParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //-------------------
            R_RenderingService.prototype.playNextMediaItem = function (runParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //----------------
            R_RenderingService.prototype.prepareAndPlayNextMediaItem = function (prepareParams, stopParams, runParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_RenderingService.prototype.stopCrtMediaItem = function (stopParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //---------------------
            R_RenderingService.prototype.destroyCrtMediaItem = function (stopParams, error, context, callback) {
                if (callback != null) {
                    callback(context);
                }
                return;
            };
            //----------------------
            R_RenderingService.prototype.onChangeContainerSize = function (prepareParams, error, context, callback) {
                return 0;
            };
            //-----------------------------------
            R_RenderingService.prototype.onChangeMediaSizeOrDisplayType = function (prepareParams, error, context, callback) {
                return 0;
            };
            return R_RenderingService;
        }(rmGeneral.rm_general.R_Service));
        rm_renderingservices.R_RenderingService = R_RenderingService;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=R_RenderingService.js.map