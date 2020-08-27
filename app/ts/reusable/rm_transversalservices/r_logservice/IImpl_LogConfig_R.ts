import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/I_LogConfig");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService");
                                                                                                        

export module rm_transversalservices
{
  export class IImpl_LogConfig_R implements amTransversalServicesILogConfig.am_transversalservices.I_LogConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_LogService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_LogService)  
    {
      this._owner = owner;  
    }

    //--------------------------
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     

    {
      this._owner.setFileInfo(fileInfo,  fileUrlInfo,  error, context, callback) ;
    }

  }
} 