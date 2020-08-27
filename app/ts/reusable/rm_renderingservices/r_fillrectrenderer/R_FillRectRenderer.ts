import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amIFillRectRenderer       = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer");
import amIFillRectRendererConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/I_FillRectRenderer_Config");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

import rmRenderingServices       = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
import rmIFillRectRenderer       = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/IImpl_FillRectRenderer_R");
import rmIFillRectRendererConfig = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/IImpl_FillRectRenderer_Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");


export module rm_renderingservices
{
  export class R_FillRectRenderer extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                  implements amRenderingServices.am_renderingservices.A_FillRectRenderer
  {

    //--------- properties
    _htmlZoneDiv       : HTMLDivElement;
    _htmlRectDiv       : HTMLDivElement;
    _isVisible         : boolean;
    
    //---------- interfaces
    _iFillRectRenderer       : amIFillRectRenderer.am_renderingservices.I_FillRectRenderer ;
    _iFillRectRendererConfig : amIFillRectRendererConfig.am_renderingservices.I_FillRectRenderer_Config ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iFillRectRenderer       = new rmIFillRectRenderer.rm_renderingservices.IImpl_FillRectRenderer_R(this) ;
      this._iFillRectRendererConfig = new rmIFillRectRendererConfig.rm_renderingservices.IImpl_FillRectRenderer_Config(this) ;

      this._aLogService = aLogService;

      this._htmlZoneDiv = null;
      this._htmlRectDiv = null;
      this._isVisible   = true;

    }

    //---------------------------
    public reset() : void 
    {
      this._htmlZoneDiv = null;
      this._htmlRectDiv = null;
      this._isVisible   = true;
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
    public setHtmlRectDiv(htmlRectDiv : HTMLDivElement)
    {
      this._htmlRectDiv = htmlRectDiv;
    }
    
    //------------------------------
    public getHtmlRectDiv() : HTMLDivElement
    {
      return this._htmlRectDiv;
    }
    
    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {

      //var strImageUrl = prepareParams.getRenderParams().getParamFileInfo().getFullUrlName(); //this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      //var owner = this;
      // this._htmlImage.onload = function ()
      //{
         //owner.onChangeContainerSize( prepareParams, error, context, callback) ;
      //}
      //this._htmlImage.src = strImageUrl;
      //this.onChangeContainerSize( prepareParams, error, context, callback) ;
      //var rgb = "rgb("  +  prepareParams.getRenderParams().getParamBackground().getR() + ","  
        //                 +  prepareParams.getRenderParams().getParamBackground().getG() +  ","  
          //               +  prepareParams.getRenderParams().getParamBackground().getB()
            //      + ")"; 
                  //"rgba(201, 76, 76, 0.3)";
      try{
        this._isVisible = prepareParams.getRenderParams().isVisible();
        if (this._htmlRectDiv != null)
          this._htmlRectDiv.style.backgroundColor =  prepareParams.getRenderParams().getParamFillRect().getRGBAString();//"rgb(255,0,0)";
                                                  //prepareParams.getRenderParams().getParamBackground().getRGBAString();//"rgb(255,0,0)";
        this.onChangeContainerSize( prepareParams, error, context, callback) ;
      }catch(e){

      }
      if (callback != null)
      {
        callback(context);
        return;
      } 

    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
      if (this._isVisible)
      {
        //this._htmlRectDiv.style.visibility   = "visible";
        try{
          if (this._htmlRectDiv != null)
          this._htmlRectDiv.style.display      = "block";
        }catch(e){

        }
      }
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
        if (this._htmlRectDiv == null)
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
        //this._htmlRectDiv.style.zIndex   = "" + containerZOrder;
        return this.onChangeMediaSizeOrDisplayType(prepareParams, error, context, callback);
      }


      //-----------------------------------
      public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
      {
        if (prepareParams ==  null)
          return 1;
        if (this._htmlRectDiv == null)
          return 1;
        if (this._htmlZoneDiv == null)
          return 1;

        this._htmlRectDiv.style.top    = "0px";//this._htmlZoneDiv.style.top;
        this._htmlRectDiv.style.left   = "0px";//this._htmlZoneDiv.style.left;  
        this._htmlRectDiv.style.width  = this._htmlZoneDiv.style.width;
        this._htmlRectDiv.style.height = this._htmlZoneDiv.style.height;
      }

      //---------------------
      public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
      {
        try{
          if (this._htmlRectDiv != null)
          {
            //this._htmlRectDiv.style.visibility   = "hidden";
            this._htmlRectDiv.style.display      = "none";
          }
        }catch(e){

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
        if (callback != null)
        {
          callback(context);
        } 
        return ;
      }

      //------------------------------
      public setRGBA(R: number, G: number, B: number, A: number ) : number
      {
        if (this._htmlRectDiv != null)
        {
          this._htmlRectDiv.style.backgroundColor = "rgba(R,G,B,A)";
          return 0;  
        }
        return 1;
      }

  }
} 