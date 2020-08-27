import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_ServiceCreation");


import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralServices = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");

import rmTransversalServices   = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
                                                                                                        
import amRenderingServicesRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amRenderingServicesHtmlRenderer         = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amRenderingServicesFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amRenderingServicesScreenSaverRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amRenderingServicesFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");

import amCoreServicesPlaylistController        = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController       = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

export module rm_configurationservices
{
  export class IImpl_ServiceLocator_ServiceCreation_R implements amConfigurationServices.am_configurationservices.I_ServiceLocator_ServiceCreation
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator)  
    {
      this._owner = owner;  
    }

    //--- create a service
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               :  amGeneralError.am_general.A_Error)
                            : amGeneralService.am_general.A_Service
    {
      return this._owner.createService(aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error)
    }

    //--------------------------- create a default service list
    public createDefaultServices(error: amGeneralError.am_general.A_Error) : amGeneralServices.am_general.A_Services
    {
      return this._owner.createDefaultServices(error);
    }

    //--------------------------------------------------------------------------
    public createAllStartupServices( error: amGeneralError.am_general.A_Error) : void
    {
      return this._owner.createAllStartupServices(error);
    }

    //------------------------------------
    // create default rendering services
    //------------------------------------

    public createDefaultService_RenderingZone(
                                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                                 aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                                 id                 : number,
                                 error : amGeneralError.am_general.A_Error)  
                                        : amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone
    {
      return this._owner.createDefaultService_RenderingZone(aServiceContainer, aServiceLocator, aLogService,id,error)  ;
    }
    
    public createDefaultService_VideoRenderer(
                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                      id                 : number,
                      error : amGeneralError.am_general.A_Error)  
                                 : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer
    {
      return this._owner.createDefaultService_VideoRenderer(aServiceContainer, aServiceLocator, aLogService,id,error)  ;
    }
                            
    public createDefaultService_VideoStreamRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
    {
      return this._owner.createDefaultService_VideoStreamRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_ImageRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer
    {
      return this._owner.createDefaultService_ImageRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_HtmlRenderer(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)  
                              : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer
    {
      return this._owner.createDefaultService_HtmlRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_HtmlTemplateRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
    {
      return this._owner.createDefaultService_HtmlTemplateRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_FlashRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                            : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer
    {
      return this._owner.createDefaultService_FlashRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }
                        
    public createDefaultService_FillRectRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer
    {
      return this._owner.createDefaultService_FillRectRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_ScreenSaverRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
    {
      return this._owner.createDefaultService_ScreenSaverRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_TvHdmiPassThroughSrv(
                    aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                    aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                    aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                    id                 : number,
                    error : amGeneralError.am_general.A_Error)  
                                : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
    {
      return this._owner.createDefaultService_TvHdmiPassThroughSrv(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_BackgroundRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesBackgroundRenderer.am_renderingservices.A_BackgroundRenderer
    {
      return this._owner.createDefaultService_BackgroundRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //---------------
    // controllers 
    //---------------

    //----------- create default PlaylistController
    public createDefaultService_PlaylistController(
        aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
        aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
        aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
        id                 : number,
        error : amGeneralError.am_general.A_Error)  
                    : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController
    {
      return this._owner.createDefaultService_PlaylistController(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }


    //----------- create default RenderingController
    public createDefaultService_RenderingController(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                      : amCoreServicesRenderingController.am_coreservices.A_RenderingController
    {
      return this._owner.createDefaultService_RenderingController(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

  }
} 