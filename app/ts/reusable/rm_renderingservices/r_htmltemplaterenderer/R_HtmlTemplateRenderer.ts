import amRenderingServices     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amIHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/I_HtmlTemplateRenderer");
import amIHtmlTemplateRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/I_HtmlTemplateRenderer_Config");

import amGeneralError                           = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription              = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService          = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices           = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIHtmlTemplateRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/IImpl_HtmlTemplateRenderer_R");
import rmIHtmlTemplateRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/IImpl_HtmlTemplateRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

export module rm_renderingservices
{
  export class R_HtmlTemplateRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                              implements amRenderingServices.am_renderingservices.A_HtmlTemplateRenderer
  {
    //---------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlIFrame        : HTMLIFrameElement;

    //---------- interfaces
    _iHtmlTemplateRenderer       : amIHtmlTemplateRenderer.am_renderingservices.I_HtmlTemplateRenderer ;
    _iHtmlTemplateRendererConfig : amIHtmlTemplateRendererConfig.am_renderingservices.I_HtmlTemplateRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iHtmlTemplateRenderer       = new rmIHtmlTemplateRenderer.rm_renderingservices.IImpl_HtmlTemplateRenderer_R(this) ;
      this._iHtmlTemplateRendererConfig = new rmIHtmlTemplateRendererConfig.rm_renderingservices.IImpl_HtmlTemplateRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv       = null;
      this._htmlIFrame        = null;
    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv       = null;
      this._htmlIFrame        = null;
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
    public setHtmlIFrame(htmlIFrame : HTMLIFrameElement)
    {
      this._htmlIFrame = htmlIFrame;
    }

    //------------------------------
    public getHtmlIFrame() : HTMLIFrameElement
    {
      return this._htmlIFrame;
    }

        //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var strHtmlUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      var owner = this;
      owner.onChangeContainerSize( prepareParams, error, context, callback) ;

      this._htmlIFrame.onload = function (){
        //owner._htmlIFrame.style.visibility   = "visible";
        //owner._htmlIFrame.style.display      = "block";
        if (callback != null)
        {
          callback(context);
          return;
        }   
      }
      this._htmlIFrame.src = strHtmlUrl;
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._htmlIFrame.style.visibility   = "visible";
      this._htmlIFrame.style.display      = "block";
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
      if (this._htmlIFrame == null)
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
      //this._htmlIFrame.style.zIndex   = "" + containerZOrder;
      return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
    }


    //-----------------------------------
    public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      if (prepareParams ==  null)
        return 1;
      if (this._htmlIFrame == null)
        return 1;
      if (this._htmlZoneDiv == null)
        return 1;

      this._htmlIFrame.style.top    = "0px";//this._htmlZoneDiv.style.top;
      this._htmlIFrame.style.left   = "0px";//this._htmlZoneDiv.style.left;  
      this._htmlIFrame.style.width  = this._htmlZoneDiv.style.width;
      this._htmlIFrame.style.height = this._htmlZoneDiv.style.height;
    }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (this._htmlIFrame != null)
      {
        this._htmlIFrame.style.visibility   = "hidden";
        this._htmlIFrame.style.display      = "none";
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
      if (this._htmlIFrame != null)
      {
        this._htmlIFrame.src = "";
      }
      if (callback != null)
      {
        callback(context);
      } 
      return ;
     }

  }
} 