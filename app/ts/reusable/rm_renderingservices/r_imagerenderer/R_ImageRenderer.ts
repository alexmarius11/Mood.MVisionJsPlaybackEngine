import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amIImageRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer");
import amIImageRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/I_ImageRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");

import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIImageRenderer        = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/IImpl_ImageRenderer_R");
import rmIImageRendererConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/IImpl_ImageRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_ImageRenderer   extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                 implements amRenderingServices.am_renderingservices.A_ImageRenderer
  {
    //--------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlImage         : HTMLImageElement;

    //---------- interfaces
    _iImageRenderer       : amIImageRenderer.am_renderingservices.I_ImageRenderer ;
    _iImageRendererConfig : amIImageRendererConfig.am_renderingservices.I_ImageRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iImageRenderer       = new rmIImageRenderer.rm_renderingservices.IImpl_ImageRenderer_R(this) ;
      this._iImageRendererConfig = new rmIImageRendererConfig.rm_renderingservices.IImpl_ImageRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlImage         = null;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlImage         = null;
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
    public setHtmlImage(htmlImage : HTMLImageElement)
    {
      this._htmlImage = htmlImage;
    }

    //------------------------------
    public getHtmlImage() : HTMLImageElement
    {
      return this._htmlImage;
    }


    
    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
      var strImageUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      this._htmlImage.onload = function ()
      {
        try{
          owner.onChangeContainerSize( prepareParams, error, context, callback) ;
        }catch(e)
        {
        }
        if (callback != null)
        {
          callback(context);
          return;
        }   
      }

      if (this._htmlImage != null)
      {
        try{
          this._htmlImage.src = strImageUrl;
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

        if (self._htmlImage != null)
        {
          try
          {
            self._htmlImage.style.display      = "block";
            //this._htmlImage.style.visibility   = "visible";
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
      //1000
      //);
    }


    //-------------------------------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
        if (prepareParams ==  null)
          return 1;
        if (this._htmlImage == null)
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
        //this._htmlImage.style.zIndex   = "" + containerZOrder;
        return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
      }


      //-----------------------------------
      public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
      {
        if (prepareParams ==  null)
          return 1;
        if (this._htmlImage == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        var imgRealWidth  = prepareParams.getRenderParams().getParamImage().getImageNaturalWidth();//img.naturalWidth;
        var imgRealHeight = prepareParams.getRenderParams().getParamImage().getImageNaturalHeight();//img.naturalHeight;
            
        if ((imgRealWidth == null) || (imgRealWidth == 0))
        {
          imgRealWidth = this._htmlImage.naturalWidth;
          if ((imgRealWidth == null) || (imgRealWidth == 0))
            return 1;
          prepareParams.getRenderParams().getParamImage().setImageNaturalWidth(imgRealWidth);
        }  
        if ((imgRealHeight == null) || (imgRealHeight == 0))
        {
          imgRealHeight = this._htmlImage.naturalHeight;
          if ((imgRealHeight == null) || (imgRealHeight == 0))
            return 1;
          prepareParams.getRenderParams().getParamImage().setImageNaturalHeight(imgRealHeight);
        }  

        var imgNewWidth   = imgRealWidth;
        var imgNewHeight  = imgRealHeight;

        var canvasWidth  = this._htmlZoneDiv.offsetWidth;   //imgDiv.offsetWidth;
        var canvasHeight = this._htmlZoneDiv.offsetHeight; //imgDiv.offsetHeight;
      
        var ratioX = 1;
        var ratioY = 1;
        if(canvasWidth > 0)
          ratioX = imgRealWidth/canvasWidth;
        if(canvasHeight > 0)
          ratioY = imgRealHeight/canvasHeight;
      
        var imgDisplayType = prepareParams.getRenderParams().getParamImage().getDisplayType();  

        //-- "CENTER"
        if( imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center ) 
        {
          this._htmlImage.style.width=imgRealWidth+"px";
          this._htmlImage.style.height=imgRealHeight+"px";
          this._htmlImage.style.marginLeft=(canvasWidth-imgRealWidth)/2+"px";
          this._htmlImage.style.marginRight=(canvasWidth-imgRealWidth)/2+"px";
          this._htmlImage.style.marginTop=(canvasHeight-imgRealHeight)/2+"px";
          this._htmlImage.style.marginBottom=(canvasHeight-imgRealHeight)/2+"px";
          return 0;
        }

        //-- "FILL"
        if( imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill) 
        {
          this._htmlImage.style.width="";
          this._htmlImage.style.height="";
          this._htmlImage.style.marginLeft="0";
          this._htmlImage.style.marginRight="0";
          this._htmlImage.style.marginTop="0";
          this._htmlImage.style.marginBottom="0";
      
          if(ratioX < ratioY)
          {
            imgNewWidth = canvasWidth;
            imgNewHeight = imgRealHeight * (imgNewWidth/imgRealWidth);
      
            this._htmlImage.style.width=imgNewWidth+"px";
            this._htmlImage.style.marginTop=(canvasHeight-imgNewHeight)/2+"px";
            this._htmlImage.style.marginBottom=(canvasHeight-imgNewHeight)/2+"px";
          }
          else
          {
            imgNewHeight = canvasHeight;
            imgNewWidth = imgRealWidth * (imgNewHeight/imgRealHeight);
      
            this._htmlImage.style.height=imgNewHeight+"px";
            this._htmlImage.style.marginLeft=(canvasWidth-imgNewWidth)/2+"px";
            this._htmlImage.style.marginRight=(canvasWidth-imgNewWidth)/2+"px";
          }
          return 0;
        }

        //-- "FIT"
        if( imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit) 
        {
          this._htmlImage.style.width="";
          this._htmlImage.style.height="";
          this._htmlImage.style.marginLeft="0";
          this._htmlImage.style.marginRight="0";
          this._htmlImage.style.marginTop="0";
          this._htmlImage.style.marginBottom="0";
          if(ratioX > ratioY)
          {
            imgNewWidth = canvasWidth;
            imgNewHeight = imgRealHeight * (imgNewWidth/imgRealWidth);
            this._htmlImage.style.width=imgNewWidth+"px";
            this._htmlImage.style.marginTop=(canvasHeight-imgNewHeight)/2+"px";
            this._htmlImage.style.marginBottom=(canvasHeight-imgNewHeight)/2+"px";
          }
          else
          {
            imgNewHeight = canvasHeight;
            imgNewWidth = imgRealWidth * (imgNewHeight/imgRealHeight);
            this._htmlImage.style.height=imgNewHeight+"px";
            this._htmlImage.style.marginLeft=(canvasWidth-imgNewWidth)/2+"px";
            this._htmlImage.style.marginRight=(canvasWidth-imgNewWidth)/2+"px";
          }
          return 0;
        }

        //-- "STRETCH"
        if( imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch) 
        {
          this._htmlImage.style.width=canvasWidth+"px";
          this._htmlImage.style.height=canvasHeight+"px";
          this._htmlImage.style.marginLeft="0";
          this._htmlImage.style.marginRight="0";
          this._htmlImage.style.marginTop="0";
          this._htmlImage.style.marginBottom="0";
          return 0;
        }

        //-- "NORMAL"
        if( imgDisplayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal) 
        {
          this._htmlImage.style.width=imgRealWidth+"px";
          this._htmlImage.style.height=imgRealHeight+"px";
          this._htmlImage.style.marginLeft="0";
          this._htmlImage.style.marginRight="0";
          this._htmlImage.style.marginTop="0";
          this._htmlImage.style.marginBottom="0";
          return 0;
        }
        return 1;
      }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      if (this._htmlImage != null)
      {
        try
        {
          if (this._htmlImage != null)
          {
            //this._htmlImage.style.visibility   = "hidden";
            //this._htmlImage.style.display      = "none";
          }
        }catch(e)
        {
        }
      }
      if (callback != null)
      {
        callback(context);
      } 
    }

    //---------------------
    public destroyCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      //this._htmlImage.onload = function (){};
      if (this._htmlImage != null)
      {
        try{
          if (this._htmlImage != null)
          {
            //this._htmlImage.style.visibility   = "hidden";
            this._htmlImage.style.display      = "none";
            this._htmlImage.src = "";
            this._htmlImage.removeAttribute('src');
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