import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amIRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone");
import amIRenderingZoneConfig  = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amRenderingServicesRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingServicesRenderingZonePool    = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");
import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesImageRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amRenderingServicesVideoRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");
import amRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");
import amRenderingServicesHtmlRenderer         = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amRenderingServicesHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");
import amRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");
import amRenderingServicesFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amRenderingServicesFlashRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/AE_FlashRendererPool");
import amRenderingServicesScreenSaverRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/AE_ScreenSaverRendererPool");
import amRenderingServicesFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amRenderingServicesFillRectRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");
import amRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/AE_TvHdmiPassThroughSrvPool");
import amRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amRenderingServicesHtmlZone             = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool         = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZonePool");

import amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");
import amMediaItemStatus = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaItemStatus");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIRenderingZone        = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/IImpl_RenderingZone_R");
import rmIRenderingZoneConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/IImpl_RenderingZone_Config");

export module rm_renderingservices
{
  export class R_RenderingZone   extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                 implements amRenderingServices.am_renderingservices.A_RenderingZone
  {
    //---------- properties
    _zoneId               : number;

    _htmlZoneId                 : number;
    _htmlZone                   : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone;

    _prepareParams              : Array<amPrepareParams.am_renderingservices.AE_ControlParams_Prepare> ;
    _runParams                  : Array<amRunParams.am_renderingservices.AE_ControlParams_Run> ;
    _stopParams                 : Array<amStopParams.am_renderingservices.AE_ControlParams_Stop> ;

    _mediaItemStatus            : Array<amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus> ;

    _imageRenderers             : Array<amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer>;
    _videosRenderers            : Array<amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer>;
    _videoStreamRenderers       : Array<amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer>;
    _htmlPageRenderers          : Array<amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer>;
    _htmlPageTemplateRenderers  : Array<amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer>;
    _fillRectRenderers          : Array<amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer>;
    _flashRenderers             : Array<amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer>;
    _screenSaverRenderers       : Array<amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer>;
    _tvHdmiPassThroughSrvs      : Array<amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv>;

    _iCrtIndex : number;
    _iCrtImageIndex : number;
    _iCrtVideoIndex : number;
    _iCrtHtmlPageIndex : number;

    _aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig

    //---------- interfaces
    _iRenderingZone         : amIRenderingZone.am_renderingservices.I_RenderingZone ;
    _iRenderingZoneConfig   : amIRenderingZoneConfig.am_renderingservices.I_RenderingZone_Config ;

    //----------- composants 
    //_aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor(  aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iRenderingZone       = new rmIRenderingZone.rm_renderingservices.IImpl_RenderingZone_R(this) ;
      this._iRenderingZoneConfig = new rmIRenderingZoneConfig.rm_renderingservices.IImpl_RenderingZone_Config(this) ;

      this._aLogService = aLogService;

      this._isFree = true;

      this._imageRenderers    = new Array<amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer>(2);
      this._imageRenderers[0] = null;
      this._imageRenderers[1] = null;

      this._videosRenderers    = new Array<amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer>(2);
      this._videosRenderers[0] = null;
      this._videosRenderers[1] = null;

      this._videoStreamRenderers    = new Array<amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer>(2);
      this._videoStreamRenderers[0] = null;
      this._videoStreamRenderers[1] = null;

      this._htmlPageRenderers       = new Array<amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer>(2);
      this._htmlPageRenderers[0] = null;
      this._htmlPageRenderers[1] = null;

      this._htmlPageTemplateRenderers  = new Array<amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer>(2);
      this._htmlPageTemplateRenderers[0] = null;
      this._htmlPageTemplateRenderers[1] = null;
     
      this._fillRectRenderers    = new Array<amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer>(2);
      this._fillRectRenderers[0] = null;
      this._fillRectRenderers[1] = null;
     
      this._flashRenderers    = new Array<amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer>(2);
      this._flashRenderers[0] = null;
      this._flashRenderers[1] = null;

      this._screenSaverRenderers    = new Array<amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer>(2);
      this._screenSaverRenderers[0] = null;
      this._screenSaverRenderers[1] = null;

      this._tvHdmiPassThroughSrvs    = new Array<amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv>(2);
      this._tvHdmiPassThroughSrvs[0] = null;
      this._tvHdmiPassThroughSrvs[1] = null;
   
      this._prepareParams            = new Array<amPrepareParams.am_renderingservices.AE_ControlParams_Prepare>(2) ;
      this._prepareParams[0]         = null;
      this._prepareParams[1]         = null;

      this._runParams                = new Array<amRunParams.am_renderingservices.AE_ControlParams_Run>(2) ;
      this._runParams[0]             = null;
      this._runParams[1]             = null;

      this._stopParams                = new Array<amStopParams.am_renderingservices.AE_ControlParams_Stop>(2) ;
      this._stopParams[0]             = null;
      this._stopParams[1]             = null;

      this._mediaItemStatus          = new Array<amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus>(2) ;
      this._mediaItemStatus[0]       = amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None;
      this._mediaItemStatus[1]       = amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None;

      this._iCrtIndex    = 0  ;

      this._aScreenSaverConfig = null;

    }

    //-----------------------
    public reset() : void 
    {
      super.reset();

      this._isFree = true;

      this._iCrtIndex    = 0  ;

      //this._aScreenSaverConfig = null;
      /*
      this._imageRenderers[0] = null;
      this._imageRenderers[1] = null;

      this._videosRenderers[0] = null;
      this._videosRenderers[1] = null;

      this._videoStreamRenderers[0] = null;
      this._videoStreamRenderers[1] = null;

      this._htmlPageRenderers[0] = null;
      this._htmlPageRenderers[1] = null;

      this._htmlPageTemplateRenderers[0] = null;
      this._htmlPageTemplateRenderers[1] = null;
     
      this._fillRectRenderers[0] = null;
      this._fillRectRenderers[1] = null;
     
      this._flashRenderers[0] = null;
      this._flashRenderers[1] = null;

      this._screenSaverRenderers[0] = null;
      this._screenSaverRenderers[1] = null;

      this._tvHdmiPassThroughSrvs[0] = null;
      this._tvHdmiPassThroughSrvs[1] = null;
      */  
    }
       
 

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                              error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
      //----------
      this._htmlZone = this._aServiceLocator._iEntityCreation.createDefaultHtmlZone(error);
      this._htmlZone.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._imageRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._imageRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._imageRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._imageRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._videosRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._videosRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._videosRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._videosRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._videoStreamRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._videoStreamRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._videoStreamRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_VideoStreamRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._videoStreamRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._htmlPageRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._htmlPageRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._htmlPageRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._htmlPageRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._htmlPageTemplateRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._htmlPageTemplateRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._htmlPageTemplateRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._htmlPageTemplateRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._fillRectRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_FillRectRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._fillRectRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._fillRectRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_FillRectRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._fillRectRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._flashRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_FlashRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._flashRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._flashRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_FlashRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._flashRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      //----------
      this._screenSaverRenderers[0] = this._aServiceLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._screenSaverRenderers[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._screenSaverRenderers[1] = this._aServiceLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._screenSaverRenderers[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
       //----------
      this._tvHdmiPassThroughSrvs[0] = this._aServiceLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 0, error);
      this._tvHdmiPassThroughSrvs[0]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //---
      this._tvHdmiPassThroughSrvs[1] = this._aServiceLocator._iServiceCreation.createDefaultService_TvHdmiPassThroughSrv(
                                                          this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      this._tvHdmiPassThroughSrvs[1]._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      //----------
      return 0;
    }


    //---------------------
    // config 
    //----------------------

    //-----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      this._aScreenSaverConfig = aScreenSaverConfig;
    }

    //-----------------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._aScreenSaverConfig;
    }


    //---------------------------------
    public setZoneId(zoneId: number)
    {
      this._zoneId = zoneId;
    }

    //---------------------------------
    public getZoneId() : number
    {
      return this._zoneId ;
    }

    //---------------------------------
    public setHtmlZoneId(htmlZoneId: number)
    {
      this._htmlZoneId = htmlZoneId;
      var divZoneId: string;
      if (this._htmlZoneId < 10)
        divZoneId = "z0" + this._htmlZoneId;
      else
        divZoneId = "z"  + this._htmlZoneId;
      this._htmlZone.initHtml(divZoneId, null);//, error);//to do

    }

    //---------------------------------
    public getHtmlZoneId() : number
    {
      return this._htmlZoneId ;
    }


    //---------------------------------
    public setHtmlZone(htmlZone : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone)
    {
      this._htmlZone = htmlZone;
    }

    //---------------------------------
    public getHtmlZone() : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone
    {
      return this._htmlZone;
    }


    //---------------------------------
    public setImageRenderer(idx: number, imageRenderer : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer)
    {
      this._imageRenderers[idx] = imageRenderer;
    }

    //---------------------------------
    public getImageRenderer(idx: number) : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer
    {
      return this._imageRenderers[idx];
    }


    //---------------------------------
    public setVideoRenderer(idx: number, videoRenderer : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer)
    {
      this._videosRenderers[idx] = videoRenderer;
    }

    //---------------------------------
    public getVideoRenderer(idx: number) : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer
    {
      return this._videosRenderers[idx];
    }


    //---------------------------------
    public setVideoStreamRenderer(idx: number, videoStreamRenderer : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer)
    {
      this._videoStreamRenderers[idx] = videoStreamRenderer;
    }

    //---------------------------------
    public getVideoStreamRenderer(idx: number) : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
    {
      return this._videoStreamRenderers[idx];
    }


    //---------------------------------
    public setHtmlPageRenderer(idx: number, htmlPageRenderer : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer)
    {
      this._htmlPageRenderers[idx] = htmlPageRenderer;
    }

    //---------------------------------
    public getHtmlPageRenderer(idx: number) : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer
    {
      return this._htmlPageRenderers[idx];
    }


    //---------------------------------
    public setHtmlTemplateRenderer(idx: number, htmlPageRenderer : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer)
    {
      this._htmlPageTemplateRenderers[idx] = htmlPageRenderer;
    }

    //---------------------------------
    public getHtmlTemplateRenderer(idx: number) : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
    {
      return this._htmlPageTemplateRenderers[idx];
    }


    //---------------------------------
    public setFillRectRenderer(idx: number, fillRectRenderer : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer)
    {
      this._fillRectRenderers[idx] = fillRectRenderer;
    }

    //---------------------------------
    public getFillRectRenderer(idx: number) : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer
    {
      return this._fillRectRenderers[idx];
    }


     //---------------------------------
     public setFlashRenderer(idx: number, flashRenderer : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer)
     {
       this._flashRenderers[idx] = flashRenderer;
     }
 
     //---------------------------------
     public getFlashRenderer(idx: number) : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer
     {
       return this._flashRenderers[idx];
     }
    

     //---------------------------------
     public setScreenSaverRenderer(idx: number, screenSaverRenderer : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer)
     {
       this._screenSaverRenderers[idx] = screenSaverRenderer;
     }
 
     //---------------------------------
     public getScreenSaverRenderer(idx: number) : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
     {
       return this._screenSaverRenderers[idx];
     }


     //---------------------------------
     public setTvHdmiPassThroughSrv(idx: number, tvHdmiPassThroughSrv : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv)
     {
       this._tvHdmiPassThroughSrvs[idx] = tvHdmiPassThroughSrv;
     }
 
     //---------------------------------
     public getTvHdmiPassThroughSrv(idx: number) : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
     {
       return this._tvHdmiPassThroughSrvs[idx];
     }


     //---------------------------------
     public setPrepareParams(idx: number, prepareParams : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare)
     {
       this._prepareParams[idx] = prepareParams;
     }
 
     //---------------------------------
     public getPrepareParams(idx: number) : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
     {
       return this._prepareParams[idx];
     }

     
     //---------------------------------
     public setRunParams(idx: number, runParams : amRunParams.am_renderingservices.AE_ControlParams_Run)
     {
       this._runParams[idx] = runParams;
     }
 
     //---------------------------------
     public getRunParams(idx: number) : amRunParams.am_renderingservices.AE_ControlParams_Run
     {
       return this._runParams[idx];
     }


     //---------------------------------
     public setStopParams(idx: number, stopParams : amStopParams.am_renderingservices.AE_ControlParams_Stop)
     {
       this._stopParams[idx] = stopParams;
     }
 
     //---------------------------------
     public getStopParams(idx: number) : amStopParams.am_renderingservices.AE_ControlParams_Stop
     {
       return this._stopParams[idx];
     }


     //---------------------------------
     public setMediaItemStatus(idx: number, mediaItemStatus : amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus)
     {
       this._mediaItemStatus[idx] = mediaItemStatus;
     }
 
     //---------------------------------
     public getMediaItemStatus(idx: number) : amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus
     {
       return this._mediaItemStatus[idx];
     }

     //-------------------------------
     public getCrtIndex() : number
     {
       return this._iCrtIndex;
     }

     //-------------------------------
     public getPrevNextIndex() : number
     {
       if (this._iCrtIndex == 1)
         return 0;
       else
         return 1;   
     }


     //-------------------------------
     public changeCrtIndex() : void
     {
       if (this._iCrtIndex == 1)
         this._iCrtIndex = 0;
       else
         this._iCrtIndex = 1;   
     }

     //==============================================
     //
     //===============================================
     //-------------------------------
     public getCrtVideoIndex() : number
     {
       return this._iCrtVideoIndex;
     }

     //-------------------------------
     public getPrevNextVideoIndex() : number
     {
       if (this._iCrtVideoIndex == 1)
         return 0;
       else
         return 1;   
     }

     //-------------------------------
     public changeCrtVideoIndex() : void
     {
       if (this._iCrtVideoIndex == 1)
         this._iCrtVideoIndex = 0;
       else
         this._iCrtVideoIndex = 1;   
     }


    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
      return this.stopPrev_prepareNext_MediaItem( this.getStopParams(this.getPrevNextIndex()), 
                                                  prepareParams, 
                                                  error, context, callback) ;
    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
       return this.stopCrt_playNext_destroyCrt_MediaItem( this.getStopParams(this.getCrtIndex()), 
                                                          this.getPrepareParams(this.getPrevNextIndex()), 
                                                          runParams, 
                                                          error, context, callback) ;
    }


    //----------------
    public prepareAndPlayNextMediaItem(
                                        prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                        stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                        runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this.prepareNext_stopCrt_playNext_destroyCrt_MediaItem( 
                                                                     prepareParams, 
                                                                     stopParams,
                                                                     runParams,
                                                                     error, context, callback) ;
    }
    
    //---------------------
    public stopZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var stopVideoRenderer0 = function stopVideoRenderer0() : void
      {
        var stopVideoRenderer1 = function stopVideoRenderer1() : void
        {
          var stopHtmlRenderer0 = function stopHtmlRenderer0() : void
          {
            var stopHtmlRenderer1 = function stopHtmlRenderer1() : void
            {
              var stopImageRenderer0 = function stopImageRenderer0() : void
              {
                var stopImageRenderer1 = function stopImageRenderer1() : void
                {
                  var stopScreenSaverRenderer0 = function stopScreenSaverRenderer0() : void
                  {
                    var stopScreenSaverRenderer1 = function stopScreenSaverRenderer1() : void
                    {
                      var stopFillRectRenderer0 = function stopFillRectRenderer0() : void
                      { 
                        var stopFillRectRenderer1 = function stopFillRectRenderer1() : void
                        {
                          var stopVideoStreamRenderer0 = function stopVideoStreamRenderer0() : void
                          {
                            var stopVideoStreamRenderer1 = function stopVideoStreamRenderer1() : void
                            {
                              var stopHtmlTemplateRenderer0 = function stopHtmlTemplateRenderer0() : void
                              {
                                var stopHtmlTemplateRenderer1 = function stopHtmlTemplateRenderer1() : void
                                {
                                  if (callback != null)
                                    return callback();
                                  return;                        
                                }  
                                owner._htmlPageTemplateRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlTemplateRenderer1) ;                                 
                              }
                              owner._htmlPageTemplateRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlTemplateRenderer0) ;    
                            }
                            owner._videoStreamRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoStreamRenderer1) ;    
                          }  
                          owner._videoStreamRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoStreamRenderer0) ;
                        }
                        owner._fillRectRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopFillRectRenderer1) ;
                      }
                      owner._fillRectRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopFillRectRenderer0) ;
                    }
                    owner._screenSaverRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopScreenSaverRenderer1) ;
                  }
                  owner._screenSaverRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopScreenSaverRenderer0) ;
                }
                owner._imageRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopImageRenderer1) ;
              }
              owner._imageRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopImageRenderer0) ;
            }
            owner._htmlPageRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlRenderer1) ;
          }
          owner._htmlPageRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopHtmlRenderer0) ;
        }
        owner._videosRenderers[1]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoRenderer1) ;
      }
      owner._videosRenderers[0]._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, stopVideoRenderer0) ;
    }

        //---------------------
    public destroyZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      //----
      var destroyVideoRenderer0 = function destroyVideoRenderer0() : void
      {
        var destroyVideoRenderer1 = function destroyVideoRenderer1() : void
        {
          var destroyHtmlRenderer0 = function destroyHtmlRenderer0() : void
          {
            var destroyHtmlRenderer1 = function destroyHtmlRenderer1() : void
            {
              var destroyImageRenderer0 = function destroyImageRenderer0() : void
              {
                var destroyImageRenderer1 = function destroyImageRenderer1() : void
                {
                  var destroyScreenSaverRenderer0 = function destroyScreenSaverRenderer0() : void
                  {
                    var destroyScreenSaverRenderer1 = function destroyScreenSaverRenderer1() : void
                    {
                      var destroyFillRectRenderer0 = function destroyFillRectRenderer0() : void
                      { 
                        var destroyFillRectRenderer1 = function destroyFillRectRenderer1() : void
                        {
                          var destroyVideoStreamRenderer0 = function destroyVideoStreamRenderer0() : void
                          {
                            var destroyVideoStreamRenderer1 = function destroyVideoStreamRenderer1() : void
                            {
                              var destroyHtmlTemplateRenderer0 = function destroyHtmlTemplateRenderer0() : void
                              {
                                var destroyHtmlTemplateRenderer1 = function destroyHtmlTemplateRenderer1() : void
                                {
                                  owner.reset();
                                  if (callback != null)
                                    return callback();
                                  return;                        
                                }  
                                owner._htmlPageTemplateRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlTemplateRenderer1) ;                                 
                              }
                              owner._htmlPageTemplateRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlTemplateRenderer0) ;    
                            }
                            owner._videoStreamRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoStreamRenderer1) ;    
                          }  
                          owner._videoStreamRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoStreamRenderer0) ;
                        }
                        owner._fillRectRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyFillRectRenderer1) ;
                      }
                      owner._fillRectRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyFillRectRenderer0) ;
                    }
                    owner._screenSaverRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyScreenSaverRenderer1) ;
                  }
                  owner._screenSaverRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyScreenSaverRenderer0) ;
                }
                owner._imageRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyImageRenderer1) ;
              }
              owner._imageRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyImageRenderer0) ;
            }
            owner._htmlPageRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlRenderer1) ;
          }
          owner._htmlPageRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyHtmlRenderer0) ;
        }
        owner._videosRenderers[1]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoRenderer1) ;
      }
      owner._videosRenderers[0]._iRenderingServiceControl.destroyCrtMediaItem(stopParams, error, context, destroyVideoRenderer0) ;
    }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var callbackStopCrtMediaItem = function callbackStopCrtMediaItem()
      { 
        if (callback != null)
          return callback();
        return;
        
      }
      //-
      //var prepareIndex1 : number = owner.getPrevNextIndex();
      //owner._stopCrtMediaItem(prepareIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
      var crtIndex1 : number = owner.getCrtIndex();
      owner._stopCrtMediaItem( crtIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
    }

    //---------------------
    public destroyCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var callbackDestroyCrtMediaItem = function callbackPrepareNextMediaItem()
      {
        if (callback != null)
          return callback();
        return;
      }
      //-
      //var prepareIndex2 : number = owner.getPrevNextIndex();
      var crtIndex1 : number = owner.getCrtIndex();
      owner._destroyCrtMediaItem(crtIndex1, stopParams, error, context, callbackDestroyCrtMediaItem) ;
    }


     //===============================
     public stopPrev_prepareNext_MediaItem( stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                            prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
     {
        var owner = this;
        var callbackStopCrtMediaItem = function callbackStopCrtMediaItem()
        { 
          var callbackDestroyCrtMediaItem = function callbackPrepareNextMediaItem()
          {
            var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem()
            {
              if (callback != null)
                return callback();
              return;
            }
            //-
            var prepareIndex3 : number = owner.getPrevNextIndex();
            owner._prepareNextMediaItem( prepareIndex3, prepareParams, error, context, callbackPrepareNextMediaItem) ;
          }
          //-
          var prepareIndex2 : number = owner.getPrevNextIndex();
          owner._destroyCrtMediaItem(prepareIndex2, stopParams, error, context, callbackDestroyCrtMediaItem) ;
        }
        //-
        var prepareIndex1 : number = owner.getPrevNextIndex();
        owner._stopCrtMediaItem(prepareIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
     }


    //==================================
    public stopCrt_playNext_destroyCrt_MediaItem( stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                                  prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                                  runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var nextMediaType =  null;
      var crtMediaType = null;

      var callbackStopCrtMediaItem = function callbackStopCrtMediaItem()
      {
        var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem()
        {
          var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem()
          {
            //if ((crtMediaType != null) && (crtMediaType != null) && (crtMediaType == nextMediaType))
            owner.changeCrtIndex();
            if (callback != null)
              return callback();
            return;
          }
          //--
          var crtIndex2 : number = owner.getCrtIndex();
          owner._destroyCrtMediaItem( crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem) ;
        }
        //--
        var prepareIndex1 : number = owner.getPrevNextIndex();
        //nextMediaType = owner.getPrepareParams(prepareIndex1).getRenderParams().getParamIdentification().getMediaType();
        owner._playNextMediaItem( prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem) ;
      }
      //---------------------
      var crtIndex1 : number = owner.getCrtIndex();
      //crtMediaType = owner.getPrepareParams(crtIndex1).getRenderParams().getParamIdentification().getMediaType();
      owner._stopCrtMediaItem( crtIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
    }


    //==================================
    public prepareNext_stopCrt_playNext_destroyCrt_MediaItem2(                                         
                                       prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                       stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                       runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem()
      {
        var callbackStopCrtMediaItem = function callbackStopCrtMediaItem()
        {
          var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem()
          {
            var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem()
            {
              owner.changeCrtIndex();
              if (callback != null)
                return callback();
              return;
            }
            //--
            var crtIndex2 : number = owner.getCrtIndex();
            owner._destroyCrtMediaItem( crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem) ;
          }
          //--
          var prepareIndex1 : number = owner.getPrevNextIndex();
          owner._playNextMediaItem( prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem) ;
        }
        //---------------------
        var crtIndex1 : number = owner.getCrtIndex();
        owner._stopCrtMediaItem( crtIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
      }
      //--
      var prepareIndex0 : number = owner.getPrevNextIndex();
      owner._prepareNextMediaItem( prepareIndex0, prepareParams, error, context, callbackPrepareNextMediaItem) ;      
      //return owner.stopPrev_prepareNext_MediaItem( stopParams, prepareParams, error, context, callbackPrepareNextMediaItem) ;
    }

    //==================================
    public prepareNext_stopCrt_playNext_destroyCrt_MediaItem(                                         
                                       prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                       stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                       runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var callbackCanPlayNextMediaItem = function callbackCanPlayNextMediaItem()
      {
        //------
        var evt:amGeneralEvent.am_general.AE_Event = <amGeneralEvent.am_general.AE_Event>context.getObjectResult();
        if (evt != null)
        {
          if (callback != null)
            return callback();
          return;
        }  
        //----
        var callbackStopCrtMediaItem = function callbackStopCrtMediaItem()
        {
          //---
          var callbackPrepareNextMediaItem = function callbackPrepareNextMediaItem()
          {
            //-----
            var callbackPlayCrtMediaItem = function callbackPlayCrtMediaItem()
            {
              var callbackDestroyCrtMediaItem = function callbackDestroyCrtMediaItem()
              {
                owner.changeCrtIndex();
                if (callback != null)
                  return callback();
                return;
              }
              //--
              var crtIndex2 : number = owner.getCrtIndex();
              owner._destroyCrtMediaItem( crtIndex2, stopParams, error, context, callbackDestroyCrtMediaItem) ;
            }
            //--
            var prepareIndex1 : number = owner.getPrevNextIndex();
            owner._playNextMediaItem( prepareIndex1, runParams, error, context, callbackPlayCrtMediaItem) ;
          }
          //---------------------
          var prepareIndex0 : number = owner.getPrevNextIndex();
          owner._prepareNextMediaItem( prepareIndex0, prepareParams, error, context, callbackPrepareNextMediaItem) ;      
          //return owner.stopPrev_prepareNext_MediaItem( stopParams, prepareParams, error, context, callbackPrepareNextMediaItem) ;
        }
        //---------------------
        var crtIndex1 : number = owner.getCrtIndex();
        owner._stopCrtMediaItem( crtIndex1, stopParams, error, context, callbackStopCrtMediaItem) ;
      }
      //---------------------
      var prepareIndexCanPlay : number = owner.getPrevNextIndex();
      owner._canPlayNextMediaItem( prepareIndexCanPlay, prepareParams, error, context, callbackCanPlayNextMediaItem) ;              
    }
  
    //==================================
    public _prepareNextMediaItem( prepareIndex : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      /*
      if (owner.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }*/
      var callbackMediaItemPrepare = function callbackMediaItemPrepare()
      {
        //owner.setRunParams(prepareIndex, prepareParams);
        owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared);
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      this.setPrepareParams(prepareIndex, prepareParams);

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {

        this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );

        this.getImageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return ;
      }
      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) 
      {

        this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlRectDiv(   this.getHtmlZone().getHtmlRect(prepareIndex ) );

        this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return ;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) 
      {
        this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlVideoStream(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) 
      {
        this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );

        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) 
      {
        this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );

        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) 
      {
        this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setScreenSaverConfig( this._aScreenSaverConfig);
        this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );
        this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackMediaItemPrepare) ;
        return;
      }

      return callbackMediaItemPrepare();
    }


    //===============================
    public _playNextMediaItem( prepareIndex : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      if (this.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }
      var callbackMediaItemPlay = function callbackMediaItemPlay()
      {
        owner.setRunParams(prepareIndex, runParams);
        owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Play);
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      this.setRunParams(prepareIndex, runParams);

      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {
        this.getImageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }
      
      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) 
      {
        this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return ;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) 
      {
        this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) 
      {
        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) 
      {
        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) 
      {
        this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackMediaItemPlay) ;
        return;
      }

      return callbackMediaItemPlay();
    }


    //===============================
    public _stopCrtMediaItem( runIndex: number, stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      /*
      if (this.getMediaItemStatus(runIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Play)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }*/
      if (this.getPrepareParams(runIndex) == null)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }
      if (this.getPrepareParams(runIndex).getRenderParams() == null)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }

      var callbackMediaItemStopped = function callbackMediaItemStopped()
      {
        owner.setStopParams(runIndex, stopParams);
        owner.setMediaItemStatus(runIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Stop);
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {
        this.getImageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }
      
      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) 
      {
        this.getFillRectRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return ;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        this.getVideoRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) 
      {
        this.getVideoStreamRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) 
      {
        this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) 
      {
        this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) 
      {
        this.getScreenSaverRenderer(runIndex)._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackMediaItemStopped) ;
        return;
      }

      return callbackMediaItemStopped();
    }


    //===============================
    public _destroyCrtMediaItem( runIndex: number, stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      /*
      if (this.getMediaItemStatus(runIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Stop)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }*/
      if (this.getPrepareParams(runIndex) == null)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }
      if (this.getPrepareParams(runIndex).getRenderParams() == null)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }

      var callbackMediaItemDestroy = function callbackMediaItemDestroy()
      {
        //this.setStopParams(runIndex, stopParams);
        //freeStopParam
        owner.setMediaItemStatus(runIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None);
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {
        this.getImageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }
      
      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) 
      {
        this.getFillRectRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return ;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        this.getVideoRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) 
      {
        this.getVideoStreamRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) 
      {
        this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) 
      {
        this.getHtmlPageRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }

      //-----
      if (this.getPrepareParams(runIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) 
      {
        this.getScreenSaverRenderer(runIndex)._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackMediaItemDestroy) ;
        return;
      }

      return callbackMediaItemDestroy();
    }

    //==================================
    public _canPlayNextMediaItem( prepareIndex : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      /*
      if (owner.getMediaItemStatus(prepareIndex) != amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_None)
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }*/
      var callbackMediaItemCanPlay = function callbackMediaItemCanPlay()
      {
        //owner.setRunParams(prepareIndex, prepareParams);
        //owner.setMediaItemStatus(prepareIndex, amMediaItemStatus.am_renderingservices.AE_RenderParams_MediaItemStatus.MediaItemStatus_Prepared);
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      this.setPrepareParams(prepareIndex, prepareParams);

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {

        //this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getImageRenderer(prepareIndex)._iImageRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );

        this.getImageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return ;
      }
      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect) 
      {

        //this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getFillRectRenderer(prepareIndex)._iFillRectRendererConfig.setHtmlRectDiv(   this.getHtmlZone().getHtmlRect(prepareIndex ) );

        this.getFillRectRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return ;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        //this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getVideoRenderer(prepareIndex)._iVideoRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getVideoRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream) 
      {
        //this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getVideoStreamRenderer(prepareIndex)._iVideoStreamRendererConfig.setHtmlVideoStream(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getVideoStreamRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html) 
      {
        //this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getHtmlPageRenderer(prepareIndex)._iHtmlRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );

        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate) 
      {
        //this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getHtmlTemplateRenderer(prepareIndex)._iHtmlTemplateRendererConfig.setHtmlIFrame(  this.getHtmlZone().getHtmlPage(prepareIndex) );

        this.getHtmlPageRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return;
      }

      //-----
      if (this.getPrepareParams(prepareIndex).getRenderParams().getParamIdentification().getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver) 
      {
        //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setScreenSaverConfig( this._aScreenSaverConfig);
        //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlZoneDiv( this.getHtmlZone().getHtmlZoneDiv() );
        //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlImage(   this.getHtmlZone().getHtmlImage(prepareIndex) );
        //this.getScreenSaverRenderer(prepareIndex)._iScreenSaverRendererConfig.setHtmlVideo(   this.getHtmlZone().getHtmlVideo(prepareIndex) );

        this.getScreenSaverRenderer(prepareIndex)._iRenderingServiceControl.canPlayNextMediaItem( prepareParams, error, context, callbackMediaItemCanPlay) ;
        return;
      }

      return callbackMediaItemCanPlay();
    }

  }
} 