import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amIScreenSaverRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer");
import amIScreenSaverRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/I_ScreenSaverRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");

import amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");

import rmRenderingServices           = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIScreenSaverRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/IImpl_ScreenSaverRenderer_R");
import rmIScreenSaverRendererConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/IImpl_ScreenSaverRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_ScreenSaverRenderer   extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                 implements amRenderingServices.am_renderingservices.A_ScreenSaverRenderer
  {

    //--------- properties
    _htmlZoneDiv        : HTMLDivElement;
    _htmlImage          : HTMLImageElement;
    _htmlVideo          : HTMLVideoElement;

    _aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;
    _imageRenderer      : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer;
    _videoRenderer     : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer;

    //---------- interfaces
    _iScreenSaverRenderer       : amIScreenSaverRenderer.am_renderingservices.I_ScreenSaverRenderer ;
    _iScreenSaverRendererConfig : amIScreenSaverRendererConfig.am_renderingservices.I_ScreenSaverRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iScreenSaverRenderer       = new rmIScreenSaverRenderer.rm_renderingservices.IImpl_ScreenSaverRenderer_R(this) ;
      this._iScreenSaverRendererConfig = new rmIScreenSaverRendererConfig.rm_renderingservices.IImpl_ScreenSaverRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._aScreenSaverConfig = null;

      this._htmlZoneDiv   = null;
      this._imageRenderer = null;
      this._videoRenderer = null;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv = null;
      this._htmlImage   = null;
      this._htmlVideo   = null;
    }


    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      this._htmlZoneDiv = htmlZoneDiv;
      this._videoRenderer._iVideoRendererConfig.setHtmlZoneDiv(this._htmlZoneDiv);
      this._imageRenderer._iImageRendererConfig.setHtmlZoneDiv(this._htmlZoneDiv);
    }
    
    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._htmlZoneDiv ;
    }
        

    //-------------------------------
    public setHtmlVideo(htmlVideo : HTMLVideoElement)
    {
      this._htmlVideo = htmlVideo;
      this._videoRenderer._iVideoRendererConfig.setHtmlVideo(this._htmlVideo);
    }

    //------------------------------
    public getHtmlVideo() : HTMLVideoElement
    {
      return this._htmlVideo;
    }


    //-------------------------------
    public setHtmlImage(htmlImage : HTMLImageElement)
    {
      this._htmlImage = htmlImage;
      this._imageRenderer._iImageRendererConfig.setHtmlImage(this._htmlImage);      
    }

    //------------------------------
    public getHtmlImage() : HTMLImageElement
    {
      return this._htmlImage;
    }


    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                                   error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
      var errorNo = 0;

      //----------
      this._imageRenderer = this._aServiceLocator._iServiceCreation.createDefaultService_ImageRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      if (error.isError())
      {
        errorNo =1;
      }
      this._imageRenderer._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);

      //----------
      this._videoRenderer = this._aServiceLocator._iServiceCreation.createDefaultService_VideoRenderer(this._aServiceContainer, this._aServiceLocator, this._aLogService, 1, error);
      if (error.isError())
      {
        errorNo =1;
      }
      this._videoRenderer._iService.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
      return 0;
    }


    //----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      this._aScreenSaverConfig = aScreenSaverConfig;
    }

    //-----------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._aScreenSaverConfig;
    }



    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this.setCrtPrepareParams( prepareParams);

      var callbackPrepare = function callbackPrepare()
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      //-----
      if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {
        prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(this._aScreenSaverConfig.getFileFullName());
        prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
        prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
        prepareParams.getRenderParams().getParamImage().setDisplayType(this._aScreenSaverConfig.getImageDisplayType());
        this._imageRenderer._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackPrepare) ;
        return ;
      }

      //-----
      if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(this._aScreenSaverConfig.getFileFullName());
        prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
        prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
        this._videoRenderer._iRenderingServiceControl.prepareNextMediaItem( prepareParams, error, context, callbackPrepare) ;
        return;
      }

      return callbackPrepare();
    }

    
    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {

      var callbackPlay = function callbackPlay()
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      //-----
      if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
      {
        this._imageRenderer._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callbackPlay) ;
        return ;
      }

      //-----
      if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
      {
        this._videoRenderer._iRenderingServiceControl.playNextMediaItem( runParams, error, context, callbackPlay) ;
        return;
      }

      callbackPlay();

    }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var callbackStop = function callbackStop()
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      if (this._aScreenSaverConfig != null)
      {

        //-----
        if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
        {
          this._imageRenderer._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackStop) ;
          return ;
        }

        //-----
        if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
        {
          this._videoRenderer._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackStop) ;
          return;
        }
      }
      /*
      var callbackStopVideo = function callbackStopVideo() : void
      {
        var callbackStopImage = function callbackStopImage() : void
        {         
          if (callback != null)
          {
            callback(context);
          } 
          return ;        
        } 
        this._imageRenderer._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackStopImage) ;
        
      }
      this._videoRenderer._iRenderingServiceControl.stopCrtMediaItem( stopParams, error, context, callbackStopVideo) ;
      */  
      callbackStop();
    }

    //---------------------
    public destroyCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var callbackDestroy = function callbackDestroy()
      {
        if (callback != null)
        {
          callback(context);
        } 
        return ;      
      }

      //-----
      if (this._aScreenSaverConfig != null)
      {
        if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image) 
        {
          this._imageRenderer._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackDestroy) ;
          return ;
        }

        //-----
        if (this._aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video) 
        {
          this._videoRenderer._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackDestroy) ;
          return;
        }
      }  
      /*
      var callbackDestroyVideo = function callbackDestroyVideo() : void
      {
        var callbackDestroyImage = function callbackDestroyImage() : void
        {         
          if (callback != null)
          {
            callback(context);
          } 
          return ;        
        } 
        this._imageRenderer._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackDestroyImage);
      }
      this._videoRenderer._iRenderingServiceControl.destroyCrtMediaItem( stopParams, error, context, callbackDestroyVideo);
      */
      callbackDestroy();
    }

  }
} 