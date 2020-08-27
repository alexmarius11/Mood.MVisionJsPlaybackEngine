import amRenderingServices    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amIVideoRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer");
import amIVideoRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/I_VideoRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIVideoRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_R");
import rmIVideoRendererConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/IImpl_VideoRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_VideoRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                               implements amRenderingServices.am_renderingservices.A_VideoRenderer
  {
    //--------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlVideo         : HTMLVideoElement;

    //---------- interfaces
    _iVideoRenderer       : amIVideoRenderer.am_renderingservices.I_VideoRenderer ;
    _iVideoRendererConfig : amIVideoRendererConfig.am_renderingservices.I_VideoRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iVideoRenderer       = new rmIVideoRenderer.rm_renderingservices.IImpl_VideoRenderer_R(this) ;
      this._iVideoRendererConfig = new rmIVideoRendererConfig.rm_renderingservices.IImpl_VideoRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlVideo         = null;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlVideo         = null;
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
    public setHtmlVideo(htmlVideo : HTMLVideoElement)
    {
      this._htmlVideo = htmlVideo;
    }

    //------------------------------
    public getHtmlVideo() : HTMLVideoElement
    {
      return this._htmlVideo;
    }
   
    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
      var strVideoUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      
      this._htmlVideo.onloadeddata = function ()
      {
        if (owner._htmlVideo != null)
        {
          try{
            //owner._htmlVideo.muted = true;
            owner.onChangeContainerSize( prepareParams, error, context, callback) ;   
            owner.setAspectRatio( prepareParams, error, context, callback) ;              
            owner.setVolume( prepareParams, error, context, callback) ;     
            owner._htmlVideo.play();
           
          }catch(e)
          {
          }
        }
        if (callback != null)
        {
          callback(context);
          return;
        }   
        return;
      }      
      /*
      this._htmlVideo.onplay = function ()
      {
        if (owner._htmlVideo != null)
        {
          try{           
          }catch(e)
          {
          }
        }
        if (callback != null)
        {
          callback(context);
          return;
        }   
        return;
      }*/
      //---------- start the video
      if (this._htmlVideo != null)
      {
        try{
          this._htmlVideo.src = strVideoUrl;
          //owner._htmlVideo.currentTime = 5;
          //this._htmlVideo.load();
        }catch(e)
        {
          if (callback != null)
          {
            callback(context);
            return;
          }     
        }
      }else{
        if (callback != null)
        {
          callback(context);
          return;
        }   
      }
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      //setTimeout( function() 
      { 
        if (self._htmlVideo != null)
        {
          try{
            //this._htmlVideo.play();
            //self._htmlVideo.pause();
            //self._htmlVideo.currentTime = 0;
            //self._htmlVideo.play();
            //--
            //self._htmlVideo.parentElement.style.display = "block";    
            self._htmlVideo.style.display      = "block";    
            //--
            //var red = "rgb(255, 0, 0)"; 
            //this._htmlVideo.style.backgroundColor = red; 
            //this._htmlVideo.style.visibility   = "visible";
          }catch(e)
          {
          }
        }
        if (callback != null)
        {
          callback(context);
          return;
        }   
      }
      //, 
      //5000)
      //;

    }

    //The object-fit property can have the following values:
        //fill - This is default. The replaced content is sized to fill the element's content box. If necessary, the object will be stretched or squished to fit
        //contain - The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box
        //cover - The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit
        //none - The replaced content is not resized
        //scale-down - The content is sized as if none or contain were specified (would result in a smaller concrete object size)
    //-------------------------------------------
    public setAspectRatio( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (prepareParams ==  null)
        return 1;
      if (this._htmlVideo == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;

      var aspectRatio:boolean = prepareParams.getRenderParams().getParamVideo().getKeepAspectRatio();
      if (aspectRatio == true)
        this._htmlVideo.style.objectFit  = "contain"; 
      else  
        this._htmlVideo.style.objectFit  = "fill"; 
    }

    //-------------------------------------------
    public setVolume( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (prepareParams ==  null)
        return 1;
      if (this._htmlVideo == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;
      
      var volume = prepareParams.getRenderParams().getParamVideo().getVideoAudioVolume();
      var muted  = prepareParams.getRenderParams().getParamVideo().getVideoMuteAudio();
      this._htmlVideo.volume = volume/100.00;
      this._htmlVideo.muted  = muted;
    }

    //-------------------------------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
        if (prepareParams ==  null)
          return 1;
        if (this._htmlVideo == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        var containerLeft   : number = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerLeft();
        var containerTop    : number = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerTop();
        var containerWidth  : number = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerWidth();
        var containerHeight : number = prepareParams.getRenderParams().getParamContainerAdjustedPosSize().getContainerHeight();
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
        //this._htmlVideo.style.zIndex   = "" + containerZOrder;
        return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
      }


      //-----------------------------------
      public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
      {

        if (prepareParams ==  null)
          return 1;
        if (this._htmlVideo == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        //this._htmlVideo.parentElement.style.top    = "0px";//this._htmlZoneDiv.style.top;
        //this._htmlVideo.parentElement.style.left   = "0px";//this._htmlZoneDiv.style.left;  
        //this._htmlVideo.parentElement.style.width  = this._htmlZoneDiv.style.width;
        //this._htmlVideo.parentElement.style.height = this._htmlZoneDiv.style.height;

        this._htmlVideo.style.top    = "0px";//this._htmlZoneDiv.style.top;
        this._htmlVideo.style.left   = "0px";//this._htmlZoneDiv.style.left;  
        this._htmlVideo.style.width  = this._htmlZoneDiv.style.width;
        this._htmlVideo.style.height = this._htmlZoneDiv.style.height;
      }


      //---------------------
      public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
      {
        if (this._htmlVideo != null)
        {
          try{
            //this._htmlVideo.style.visibility   = "hidden";
            //var red = "rgb(255, 0, 0)"; 
            //this._htmlVideo.parentElement.style.backgroundColor = red;       
            //this._htmlVideo.style.display      = "none";        
            //this._htmlVideo.parentElement.style.display = "none";    
          }catch(e)
          {
          }
          
          try{
            if (this._htmlVideo != null)
            {
              this._htmlVideo.pause();
              //this._htmlVideo.style.backgroundColor = "black";
              //this._htmlVideo.src="file:///opt/media/USBDriveA1/moodmedia/project/screen_saver/videoblack.mp4";
              //this._htmlVideo.src = "about:blank";
              //this._htmlVideo.removeAttribute("src");
              //this._htmlVideo.load();

            }
          }catch(e)
          {
          }
        }  
        /* new
        try{
          if (this._htmlVideo != null)
          {
            this._htmlVideo.pause();
          }
         }catch(e)
         {
         }*/
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
        //this._htmlVideo.src = "";
        //-- new
        if (this._htmlVideo != null)
        {
          try{
            if (this._htmlVideo != null)
            {
              //this._htmlVideo.pause();
              //this._htmlVideo.style.visibility   = "hidden";
              //this._htmlVideo.style.display      = 'none';
              //---- new test
              this._htmlVideo.style.display      = "none";        
              //this._htmlVideo.parentElement.style.display = "none";    

              //this._htmlVideo.currentTime = 0.0;
              //var startX ;
              //var startY ;
              //for (var i = 0; i < this._htmlVideo.buffered.length; i++) 
              //{
                //startX = this._htmlVideo.buffered.start(0);
                //startY = this._htmlVideo.buffered.end(0);
              //}
              this._htmlVideo.src="";
              //this._htmlVideo.src = "about:blank";
              this._htmlVideo.removeAttribute("src");
              this._htmlVideo.load();

              //this._htmlVideo.parentElement.style.top    = "0px";//this._htmlZoneDiv.style.top;
              //this._htmlVideo.parentElement.style.left   = "0px";//this._htmlZoneDiv.style.left;  
              //this._htmlVideo.parentElement.style.width  = "1px";
              //this._htmlVideo.parentElement.style.height = "1px";
      
              //this._htmlVideo.style.top    = "0px";//this._htmlZoneDiv.style.top;
              //this._htmlVideo.style.left   = "0px";//this._htmlZoneDiv.style.left;  
              //this._htmlVideo.style.width  = "1px";
              //this._htmlVideo.style.height = "1px";
      
              
              //this._htmlVideo.currentTime = 0.0;
              //for (var i = 0; i < this._htmlVideo.buffered.length; i++) 
              //{
                //startX = this._htmlVideo.buffered.start(0);
                //startY = this._htmlVideo.buffered.end(0);
              //}
              //this._htmlVideo.style.backgroundColor = "transparent";
            }
          }catch(e)
          {
          }
        }
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }


   }
} 