import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_transversalservices
{
  export interface I_Log_notifyLogConfig extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    notify_setFileInfo( fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;        
  }
} 