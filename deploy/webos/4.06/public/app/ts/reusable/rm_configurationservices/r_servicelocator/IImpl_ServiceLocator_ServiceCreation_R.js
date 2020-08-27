define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_ServiceLocator_ServiceCreation_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ServiceLocator_ServiceCreation_R(owner) {
                this._owner = owner;
            }
            //--- create a service
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                return this._owner.createService(aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error);
            };
            //--------------------------- create a default service list
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultServices = function (error) {
                return this._owner.createDefaultServices(error);
            };
            //--------------------------------------------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createAllStartupServices = function (error) {
                return this._owner.createAllStartupServices(error);
            };
            //------------------------------------
            // create default rendering services
            //------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_RenderingZone = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_RenderingZone(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_VideoRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_VideoRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_VideoStreamRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_VideoStreamRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_ImageRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_ImageRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_HtmlRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_HtmlRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_HtmlTemplateRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_HtmlTemplateRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_FlashRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_FlashRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_FillRectRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_FillRectRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_ScreenSaverRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_ScreenSaverRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_TvHdmiPassThroughSrv = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_TvHdmiPassThroughSrv(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_BackgroundRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_BackgroundRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //---------------
            // controllers 
            //---------------
            //----------- create default PlaylistController
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_PlaylistController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_PlaylistController(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default RenderingController
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_RenderingController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_RenderingController(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            return IImpl_ServiceLocator_ServiceCreation_R;
        }());
        rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R = IImpl_ServiceLocator_ServiceCreation_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_ServiceLocator_ServiceCreation_R.js.map