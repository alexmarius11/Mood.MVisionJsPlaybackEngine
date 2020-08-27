import amGeneralServiceFactory     = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");

import amGeneralService            = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralFactoryDescription = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amGeneralError              = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralProperties         = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_general
{
  export class RFactory_Service implements amGeneralServiceFactory.am_general.AFactory_Service
  {
    //---------- properties
    _name;
    _aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription; 

    //----------- constructor 
    constructor(aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                aError             : amGeneralError.am_general.A_Error)  
    {  
      this._aFactoryDescription = aFactoryDescription;
    }

    //------------------------------
    public getFactoryName() : string
    {
      return this._aFactoryDescription._factoryName;
    }

    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               : amGeneralError.am_general.A_Error)
           : amGeneralService.am_general.A_Service
    {
      return null;
    }

  }
} 