import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/I_Service");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amConfigurationServicesServiceLocator  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesUtilsService    = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amTransversalServicesSDKService    = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
                                                     

export module rm_general
{
  export class IImpl_Service_R implements amGeneral.am_general.I_Service
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_general.R_Service;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_general.R_Service)  
    {
      this._owner = owner;  
    }

    //------------------------------
    public getInstanceName() : string
    {
      return this._owner.getInstanceName();
    }
    //------------------------------
    public getAbstractName() : string
    {
      return this._owner.getAbstractName();
    }
    //------------------------------
    public getServiceName() : string
    {
      return this._owner.getServiceName();
    }
    //------------------------------
    public getFactoryName() : string
    {
      return this._owner.getFactoryName();
    }
    
    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number
 
    {
      return this._owner.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);    
    }

    //--------------------------------
    public setServiceLocator(aServiceLocator : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator) : void
    {
      return this._owner.setServiceLocator(aServiceLocator);    
    }

    //------------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service) : void
    {
      return this._owner.setTargetService(aTargetService);    
    }

    //-------------------------------------------
    public setConsumerService(aConsumerService: amGeneralService.am_general.A_Service) : void
    {
      return this._owner.setConsumerService(aConsumerService);    
    }

    //--------------------------------------------
    public setOwnerService(aOwnerService: amGeneralService.am_general.A_Service) : void
    {
      return this._owner.setOwnerService(aOwnerService);    
    }

    //------------------------------------------
    public setUtilsService(aUtilsService: amTransversalServicesUtilsService.am_transversalservices.A_UtilsService)
    {
      return this._owner.setUtilsService(aUtilsService);    
    }
   
    //----------------------------------------
    public setSDKService(aSDKService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV)
    {
      return this._owner.setSDKService(aSDKService);    
    }

    //--------------------------
    public addCallback(context: amGeneralContext.am_general.A_Context, callback) : number  
    {
      return this._owner.addCallback(context, callback);    
    }

    //-------------------------------------------
    public runCallback(context) : boolean 
    {
      return this._owner.runCallback(context);    
    }

    //----------------------------------
    public getCallback(callId : number) : any
    {
      return this._owner.getCallback(callId);    
    }

  }
} 