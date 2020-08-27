import amGeneralIServiceConfig = require("../../../../../app/ts/abstract/am_general/a_service/I_Service_Config");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");


import rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
                                                     

export module rm_general
{
  export class IImpl_Service_Config implements amGeneralIServiceConfig.am_general.I_Service_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmGeneralService.rm_general.R_Service;

    //----------- constructor 
    constructor(owner: rmGeneralService.rm_general.R_Service)  
    {
      this._owner = owner;  
    }

    //-----------------------
    public init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.init( aConfig,  error,  context, callback) ;  
    }

  }
} 