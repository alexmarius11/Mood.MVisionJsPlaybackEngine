import amRenderingServices  = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");
import amRenderingServices2 = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService");
import amIRenderingServicesConfig  = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Config");
import amIRenderingServicesControl = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Control");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");


import rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmRenderingServices2        = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_R");
import rmIRenderingServicesConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_Config");
import rmIRenderingServicesControl = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/IImpl_RenderingService_Control");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_renderingservices
{
  export class R_RenderingService  extends    rmGeneral.rm_general.R_Service
                                   implements amRenderingServices.am_renderingservices.A_RenderingService
  {

    //----------- properties
    _isFree : boolean;

    _crtPrepareParams   : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare;
    _prevPrepareParams  : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare;

    //---------- interfaces
    _iRenderingService : amRenderingServices2.am_renderingservices.I_RenderingService ;
    _iRenderingServiceConfig  : amIRenderingServicesConfig.am_renderingservices.I_RenderingService_Config  ;
    _iRenderingServiceControl : amIRenderingServicesControl.am_renderingservices.I_RenderingService_Control ;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iRenderingService        = new rmRenderingServices2.rm_renderingservices.IImpl_RenderingService_R(this) ;
      this._iRenderingServiceConfig  = new rmIRenderingServicesConfig.rm_renderingservices.IImpl_RenderingService_Config(this) ;
      this._iRenderingServiceControl = new rmIRenderingServicesControl.rm_renderingservices.IImpl_RenderingService_Control(this) ;

      //this._aLogService = aLogService;

      this._isFree = true;

      this._crtPrepareParams   = null;
      this._prevPrepareParams  = null;
  
    }

    //-------------------------
    public getCrtPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._crtPrepareParams;
    }

    //--------------------------
    public setCrtPrepareParams(crtPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void
    {
      this._prevPrepareParams = this._crtPrepareParams;
      this._crtPrepareParams  = crtPrepareParams;
    }

    //-------------------------
    public getPrevPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._prevPrepareParams;
    }

    //--------------------------
    public setPrevPrepareParams(prevPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void
    {
      this._prevPrepareParams = prevPrepareParams;
    }


    //-------------------------
    public isFree() : boolean 
    {
      return this._isFree;
    }

    //--------------------------
    public setIsFree(isFree: boolean) : boolean
    {
      this._isFree = isFree;
      return true;
    }

    //------------------------
    public reset() : void 
    {
      this._isFree = true;

      this._crtPrepareParams  = null;
      this._prevPrepareParams = null;
    }

    //----------------
    public canPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback != null)
      {
        callback(context);
      } 
      return ;
    }

    //----------------
    public prepareNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback != null)
      {
        callback(context);
      } 
      return ;
    }

    //-------------------
    public playNextMediaItem( runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback != null)
      {
        callback(context);
      } 
      return ;    
    }

    //----------------
    public prepareAndPlayNextMediaItem( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                        stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                        runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback != null)
      {
        callback(context);
      } 
      return ;    
    }

    //---------------------
    public stopCrtMediaItem( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
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

    //----------------------
    public onChangeContainerSize( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      return 0;
    }

    //-----------------------------------
    public onChangeMediaSizeOrDisplayType( prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number 
    {
      return 0;
    }

  }
} 