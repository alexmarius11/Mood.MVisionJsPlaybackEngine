import amGeneral  = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralServices = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");

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

export module am_configurationservices
{
  export interface I_ServiceLocator_ServiceCreation extends amGeneral.am_general.I_Interface
  {
    _name: string;   

    createAllStartupServices( error: amGeneralError.am_general.A_Error) : void;
    
    createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                   aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                   serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                   aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   error               : amGeneralError.am_general.A_Error)
                      : amGeneralService.am_general.A_Service;

    createDefaultServices(error: amGeneralError.am_general.A_Error) : amGeneralServices.am_general.A_Services;



    createDefaultService_RenderingZone(
                                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                                 aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                                 id                 : number,
                                 error : amGeneralError.am_general.A_Error)  
                                        : amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone;    
    createDefaultService_VideoRenderer(
                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                      id                 : number,
                      error : amGeneralError.am_general.A_Error)  
                                 : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer;                        
    createDefaultService_VideoStreamRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer;
    createDefaultService_ImageRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer;
    createDefaultService_HtmlRenderer(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)  
                              : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer;
    createDefaultService_HtmlTemplateRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer;
    createDefaultService_FlashRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                            : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer;
    createDefaultService_FillRectRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer;
    createDefaultService_ScreenSaverRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer;
    createDefaultService_TvHdmiPassThroughSrv(
                    aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                    aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                    aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                    id                 : number,
                    error : amGeneralError.am_general.A_Error)  ;
    createDefaultService_BackgroundRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesBackgroundRenderer.am_renderingservices.A_BackgroundRenderer;

    //----------------
    // controllers
    //----------------                        
      createDefaultService_PlaylistController(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                      : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController;
      
      createDefaultService_RenderingController(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                        : amCoreServicesRenderingController.am_coreservices.A_RenderingController;
  

  }
} 