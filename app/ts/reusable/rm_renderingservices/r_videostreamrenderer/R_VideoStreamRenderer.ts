import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amIVideoStreamRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer");
import amIVideoStreamRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/I_VideoStreamRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices           = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIVideoStreamRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/IImpl_VideoStreamRenderer_R");
import rmIVideoStreamRendererConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/IImpl_VideoStreamRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_VideoStreamRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                               implements amRenderingServices.am_renderingservices.A_VideoStreamRenderer
  {

    //--------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlVideoStream   : HTMLVideoElement;

    //---------- interfaces
    _iVideoStreamRenderer       : amIVideoStreamRenderer.am_renderingservices.I_VideoStreamRenderer ;
    _iVideoStreamRendererConfig : amIVideoStreamRendererConfig.am_renderingservices.I_VideoStreamRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iVideoStreamRenderer       = new rmIVideoStreamRenderer.rm_renderingservices.IImpl_VideoStreamRenderer_R(this) ;
      this._iVideoStreamRendererConfig = new rmIVideoStreamRendererConfig.rm_renderingservices.IImpl_VideoStreamRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlVideoStream   = null;
    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlVideoStream   = null;
    }

    
    //---------------------------------
    public setHtmlZoneDiv(htmlZoneDiv : HTMLDivElement)
    {
      this._htmlZoneDiv = htmlZoneDiv;
    }

    //-------------------------------
    public getHtmlZoneDiv() : HTMLDivElement
    {
      return this._htmlZoneDiv ;
    }


    //-------------------------------
    public setHtmlVideoStream(htmlVideoStream : HTMLVideoElement)
    {
      this._htmlVideoStream = htmlVideoStream;
    }

    //------------------------------
    public getHtmlVideoStream() : HTMLVideoElement
    {
      return this._htmlVideoStream;
    }

    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
      var strVideoUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      this._htmlVideoStream.onloadeddata = function (){
        owner._htmlVideoStream.muted = true;
        owner.onChangeContainerSize( prepareParams, error, context, callback) ;        
        //owner._htmlVideo.play();
        if (callback != null)
        {
          callback(context);
          return;
        }   

      }
      this._htmlVideoStream.src = strVideoUrl;
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._htmlVideoStream.play();
      this._htmlVideoStream.style.visibility   = "visible";
      this._htmlVideoStream.style.display      = "block";  
      if (callback != null)
      {
        callback(context);
        return;
      }   
  
    }

    //-------------------------------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
        if (prepareParams ==  null)
          return 1;
        if (this._htmlVideoStream == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        var containerLeft   : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerLeft();
        var containerTop    : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerTop();
        var containerWidth  : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerWidth();
        var containerHeight : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerHeight();
        var containerZOrder : number = prepareParams.getRenderParams().getParamContainerPosSize().getContainerZOrder();  
        if (containerWidth == 0)
          return 1;
        if (containerHeight == 0)
          return 1;
        this._htmlZoneDiv.style.top    = "" + containerTop;
        this._htmlZoneDiv.style.left   = "" + containerLeft;  
        this._htmlZoneDiv.style.width  = "" + containerWidth;
        this._htmlZoneDiv.style.height = "" + containerHeight;
        this._htmlZoneDiv.style.zIndex = "" + containerZOrder;
        //this._htmlVideoStream.style.zIndex = "" + containerZOrder;

        return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
      }


      //-----------------------------------
      public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
      {

        if (prepareParams ==  null)
          return 1;
        if (this._htmlVideoStream == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        this._htmlVideoStream.style.top    = "0px";//this._htmlZoneDiv.style.top;
        this._htmlVideoStream.style.left   = "0px";//this._htmlZoneDiv.style.left;  
        this._htmlVideoStream.style.width  = this._htmlZoneDiv.style.width;
        this._htmlVideoStream.style.height = this._htmlZoneDiv.style.height;
      }


      //---------------------
      public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
      {
        if (this._htmlVideoStream != null)
        {
          this._htmlVideoStream.style.visibility   = "hidden";
          this._htmlVideoStream.style.display      = "none";
        }
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }

      //---------------------
      public destroyCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
      {
        if (this._htmlVideoStream != null)
        {
          this._htmlVideoStream.src = "";
        }
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }

  }
} 